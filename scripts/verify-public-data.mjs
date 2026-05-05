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
  /runs\\/i,
  /\brow count\b/i,
  /\bsource table\b/i,
  /\bsource dataset\b/i,
  /\bparser\b/i,
  /\bsentinel\b/i,
  /\bworkflow state\b/i,
  /\breview packet\b/i,
  /\bpublication confidence\b/i,
  /\bsource completeness\b/i,
  /\bWFA\b/,
];

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
}

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exitCode = 1;
}

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(dataDir, file))) {
    fail(`missing ${file}`);
  }
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

let publicText = "";
for (const file of requiredFiles.concat(["index.html", "styles.css", "app.js"])) {
  const filePath = path.join(root, file);
  if (fs.existsSync(filePath)) publicText += `\n${fs.readFileSync(filePath, "utf8")}`;
}
for (const pattern of banned) {
  if (pattern.test(publicText)) fail(`banned public text matched ${pattern}`);
}

if (!publicText.includes("Possible fraud, waste, or abuse means the records show a red flag")) {
  fail("required possible fraud, waste, or abuse definition is missing");
}
if (!publicText.includes("red flag, not a verdict") && !publicText.includes("Red flag, not verdict")) {
  fail("red flag caveat is missing");
}
if (!publicText.includes("calds-build")) {
  fail("build marker missing");
}
if (!publicText.includes("Follow the receipts.")) {
  fail("approved editorial direction missing");
}
if (!publicText.includes("Private stays private")) {
  fail("public/private boundary copy missing");
}
if (!publicText.includes("data-money-filter")) {
  fail("money filter controls missing");
}
if (!publicText.includes("empty-money")) {
  fail("money filter empty state missing");
}
if (!publicText.includes("receiptCount")) {
  fail("money filter visible-count control missing");
}
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
  if (filter.count !== expected) {
    fail(`money filter count mismatch for ${filter.caseId}: expected ${expected}, got ${filter.count}`);
  }
}

if (!process.exitCode) {
  console.log(`PASS public data verified: cases=${publicCases.cases.length} claims=${claims.length} sources=${sources.length}`);
}
