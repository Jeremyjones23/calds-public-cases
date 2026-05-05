import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataDir = path.join(root, "data");
const requiredFiles = [
  "public-cases.json",
  "claim-ledger.json",
  "source-ledger.json",
  "case-summaries.json",
  "entities.json",
  "money-trail.json",
  "blockers.json",
  "verification-manifest.json",
];

const banned = [
  /github_pat_[A-Za-z0-9_]{20,}/i,
  /ghp_[A-Za-z0-9_]{20,}/i,
  /sk-[A-Za-z0-9_-]{20,}/i,
  /C:\\Users\\/i,
  /data\\live_corpus\\/i,
  /\brow count\b/i,
  /\bsource table\b/i,
  /\bsource dataset\b/i,
  /\bparser\b/i,
  /\bsentinel\b/i,
  /\bworkflow state\b/i,
  /\bAWAITING_HUMAN_REVIEW\b/i,
  /\bDOWNGRADE_FOR_REVIEW\b/i,
  /\breview packet\b/i,
  /\bpublication confidence\b/i,
  /\bsource completeness\b/i,
  /\brisk severity\b/i,
  /\breview priority\b/i,
  /\blegal_language_check\b/i,
  /\bWFA\b/,
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
}

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

function walk(dir) {
  const entries = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === ".vercel") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) entries.push(...walk(full));
    else entries.push(full);
  }
  return entries;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(dataDir, file))) fail(`missing ${file}`);
}

const publicCases = readJson("public-cases.json");
const claims = readJson("claim-ledger.json");
const sourceLedger = readJson("source-ledger.json");
const caseSummaries = readJson("case-summaries.json");
const manifest = readJson("verification-manifest.json");
const sources = sourceLedger.sources || [];
const sourceIds = new Set(sources.map((source) => source.source_id));
const caseIds = new Set((caseSummaries.cases || []).map((item) => item.case_id));

if ((publicCases.cases || []).length < 3) fail("combined public site must include all current cases");
if (manifest.status !== "PASS") fail("verification manifest is not PASS");
if (!claims.length) fail("claim ledger is empty");
if (!sources.length) fail("source ledger is empty");

for (const caseSummary of caseSummaries.cases || []) {
  if ("legal_language_check" in caseSummary) fail(`case ${caseSummary.case_id} exposes legal_language_check`);
  if ((caseSummary.what_this_does_not_prove || []).some((item) => /review priority|risk severity|publication confidence|source completeness/i.test(item))) {
    fail(`case ${caseSummary.case_id} exposes private score language`);
  }
}

for (const claim of claims) {
  if (!claim.claim_id) fail("claim without claim_id");
  if (!caseIds.has(claim.case_id)) fail(`claim references unknown case ${claim.case_id}`);
  if (!Array.isArray(claim.evidence_ids) || claim.evidence_ids.length === 0) fail(`claim ${claim.claim_id} has no evidence_ids`);
  if (!claim.public_sentence || !claim.plain_language_sentence) fail(`claim ${claim.claim_id} missing public sentence`);
  if (/proved wrongdoing|proves wrongdoing|guilty|convicted/i.test(claim.plain_language_sentence)) {
    fail(`claim ${claim.claim_id} uses unsupported conclusion wording`);
  }
}

for (const source of sources) {
  if (!source.source_id) fail("source without source_id");
  if (!caseIds.has(source.case_id)) fail(`source references unknown case ${source.case_id}`);
  if (!source.url && !source.blocker_reason && source.archive_status !== "Blocked") {
    fail(`source ${source.source_id} has no URL or blocker`);
  }
}

for (const claim of claims) {
  for (const ref of claim.source_refs || []) {
    if (!sourceIds.has(ref)) fail(`claim ${claim.claim_id} references missing source ${ref}`);
  }
}

const textFiles = walk(root).filter((file) => [".html", ".md", ".json", ".js", ".css", ".txt"].includes(path.extname(file)));
let publicText = "";
for (const file of textFiles) {
  if (path.relative(root, file).replaceAll("\\", "/") === "scripts/verify-public-data.mjs") continue;
  publicText += `\n/* ${path.relative(root, file)} */\n${fs.readFileSync(file, "utf8")}`;
}
for (const pattern of banned) {
  if (pattern.test(publicText)) fail(`banned public text matched ${pattern}`);
}

for (const stale of ["case_dossier.md", "case_dossier.json", "publication_manifest.json", "source_ledger.json"]) {
  const staleHits = textFiles.filter((file) => path.basename(file) === stale);
  if (staleHits.length) fail(`stale case export is still public: ${staleHits.map((file) => path.relative(root, file)).join(", ")}`);
}

if (!publicText.includes("Possible fraud, waste, or abuse means the records show a red flag")) {
  fail("required possible fraud, waste, or abuse definition is missing");
}
if (!publicText.includes("Red flag, not a verdict") && !publicText.includes("red flag, not a verdict")) {
  fail("red flag caveat is missing");
}
if (!publicText.includes("calds-build")) fail("build marker missing");
if (!publicText.includes("Follow the receipts.")) fail("approved editorial direction missing");
if (!publicText.includes("Private stays private")) fail("public/private boundary copy missing");
if (!publicText.includes("data-money-filter")) fail("money filter controls missing");
if (!publicText.includes("empty-money")) fail("money filter empty state missing");
if (!publicText.includes("receiptCount")) fail("money filter visible-count control missing");
if (/picsum\.photos/i.test(publicText)) fail("public pages still use fact-like placeholder photography");
if (/\$11\.2(?!\s*million)/i.test(publicText)) fail("ambiguous $11.2 amount still appears without units");

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const moneyCards = Array.from(indexHtml.matchAll(/class="receipt-card reveal" data-case="([^"]+)"/g)).map((match) => match[1]);
const filterButtons = Array.from(indexHtml.matchAll(/data-money-filter="([^"]+)"><span>[^<]+<\/span><b>(\d+)<\/b>/g)).map((match) => ({
  caseId: match[1],
  count: Number(match[2]),
}));
if (!moneyCards.length) fail("money receipt cards missing");
if (!filterButtons.length) fail("money filter buttons missing");
for (const filter of filterButtons) {
  const expected = filter.caseId === "all" ? moneyCards.length : moneyCards.filter((caseId) => caseId === filter.caseId).length;
  if (filter.count !== expected) fail(`money filter count mismatch for ${filter.caseId}: expected ${expected}, got ${filter.count}`);
}

for (const caseId of caseIds) {
  const casePath = path.join(root, "cases", caseId, "index.html");
  if (!fs.existsSync(casePath)) fail(`missing case detail page for ${caseId}`);
  else {
    const html = fs.readFileSync(casePath, "utf8");
    if (!html.includes("case-hero")) fail(`case detail page does not use editorial case layout for ${caseId}`);
  }
}

if (!process.exitCode) {
  console.log(`PASS public data verified: cases=${publicCases.cases.length} claims=${claims.length} sources=${sources.length} files=${textFiles.length}`);
}
