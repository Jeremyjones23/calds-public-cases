# Case Dossier: Live web case: large California recovery and treatment nonprofits

## 1. Executive Snapshot

Bottom line: CalDS screened 7 entities and keeps Behavioral Health Services Inc, Tarzana Treatment Centers Inc, CRI-Help Inc, HealthRIGHT 360, Phoenix Houses Of California Inc, WestCare California Inc, Social Model Recovery Systems Inc in deep review because the strongest source-backed pattern is audit-control concerns, executive-compensation or payroll-governance questions, and facility-capacity or license-status stress. Evidence: `E13`, `E14`, `E12`, `E15`. The review priority score is 51.52 / 100, source completeness is 0.0 / 100, publication confidence is 0.0 / 100, and the sentinel posture is `DOWNGRADE_FOR_REVIEW`; this is a review priority, not a formal conclusion.

- Case posture: internal possible waste, fraud, abuse, or mismanagement review lead; not a formal finding.
- Entities selected for deep review: Behavioral Health Services Inc, Tarzana Treatment Centers Inc, CRI-Help Inc, HealthRIGHT 360, Phoenix Houses Of California Inc, WestCare California Inc, Social Model Recovery Systems Inc.
- Main signal pattern: audit-control concerns, executive-compensation or payroll-governance questions, facility-capacity or license-status stress, material public-funding exposure, rapid financial growth, spend-versus-results mismatch, possible scope-mismatch signals, and payroll or wage-growth questions.
- Review priority: 51.52 / 100; risk severity: 0.0 / 100; source completeness: 0.0 / 100; publication confidence: 0.0 / 100.
- Score scope: these are case-level scores for this run's evidence bundle. They are not entity-by-entity grades, not probabilities, and not a measure of how polished the report is.
- Workflow state: `AWAITING_HUMAN_REVIEW`. Human decision: `PENDING`. Sentinel posture: `DOWNGRADE_FOR_REVIEW`.

What CalDS found first:

- `E21` Public statement page harvest: Tarzana Treatment Centers Inc (Public statement source, 2026-04-24): treatment ag housing: rvices Medical Care Primary Medical Care Specialty Care Dental and Oral Health Care Chiropractic Care Pain Management Health Care HIV / AIDS Telehealth Services Recovery Housing Veterans Youth and Family Services Overview Substance Use...
- `E12` Internal Revenue Service Form 990 summary table (Parsed Internal Revenue Service dataset, 2026-04-24): Deterministic parser output from downloaded Internal Revenue Service Form 990 machine-readable filing data files. Raw machine-readable filing data remains the controlling source. | entity | ein | tax_period | tax_period_year | total_revenue | total_expenses |...
- `E13` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse audit dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse general, findings, federal_awards source data tables, with downloaded audit source document presence. Audit source documents and Federal Audit Clearinghouse source data table rows remain the...
- 4 additional evidence item(s) are in the citation ledger.

Why this is on a reviewer's desk:

- CalDS flags Behavioral Health Services Inc / Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. Evidence: `E13`, `E14`. Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- CalDS flags Tarzana Treatment Centers Inc / Executive compensation: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. Evidence: `E12`. High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- CalDS flags CRI-Help Inc / Facility status: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). Evidence: `E15`. Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- CalDS flags HealthRIGHT 360 / Facility status: Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). Evidence: `E15`. Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- Source blockers to resolve before stronger ranking: Financial growth, License/adverse-action history, Off-scope activity, Payroll and wages; plus 4 other source area(s). These are collection blockers, not adverse findings.

### What The Score Means

- What these scores apply to: the whole compiled case/run and its evidence bundle, not one nonprofit organization by itself.
- Review priority 51.52 / 100: how urgently this case should stay in the review queue after combining risk severity, source-acquisition coverage, and publication confidence.
- Risk severity 0.0 / 100: how strong the implemented source-backed risk indicators are. This is the flag-strength score; it is not a misconduct conclusion.
- Source completeness 0.0 / 100: whether the required source-family acquisition checks were resolved with citation-ready evidence. This run resolved not available from a completion guard artifact required check(s), with 0 unresolved blocker(s) and 0 miss(es). A completed public search with no adverse record remains an unresolved source-access blocker unless a citation-ready source hit exists; it is not clearance.
- Open gap burden: 0 caveat signal(s). These are unresolved review questions inside the evidence bundle, not proof that source acquisition failed. Current gap buckets: none.
- Contradiction burden: 0 caution signal(s). Contradictions are never positive evidence and are not rewarded; they lower publication confidence and stay in front of the reviewer. Current contradiction buckets: none.
- Publication confidence 0.0 / 100: whether the record is sturdy enough for outside-facing use. The implemented model starts from source completeness (55%), source diversity (25%; this run's diversity component is 100 / 100), and citation traceability (20%; this run's traceability component is 100 / 100), then subtracts a bounded caveat penalty for open gaps and contradictions. This run's caveat penalty is 0 point(s).
- Meaning: a high risk-severity score with meaningful open gaps is a reason to keep the case in human review and avoid overclaiming, not a reason to bury the lead.

Questions this score should raise:

- Did CalDS complete the required source-family acquisition checks, or are there unresolved blockers?
- Which open gap buckets would most change the decision: direct contracts and payments, raw tax-return source documents, audit source documents and finding status, facility histories, public statements, or provider-attributable outcomes?
- Are the strongest risk signals concentrated in the selected deep-review entities, or spread across the full screened set?
- Are the remaining gaps caused by unavailable public records, missing ingestion coverage, or records that exist but have not been pulled into this run?
- Would a contradiction signal weaken the review lead, require correction, or show that the entity has a legitimate explanation that must be carried forward?

### Decision Needed

- Human-review state: `PENDING`. The workflow is paused until a reviewer approves, downgrades, repairs, or rejects the case.
- Sentinel posture: `DOWNGRADE_FOR_REVIEW`. Lead can proceed only as an internal reviewer-safe candidate with caveats.
- Immediate reviewer action: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### What This Does Not Prove

- This dossier does not make a formal finding of waste, fraud, or abuse. It identifies possible screening questions and source blockers for human review.
- County or Continuum of Care outcomes are contextual unless provider-attributable outcome records are recovered and linked.
- Homelessness scope-mismatch rows test whether public homelessness funds may have supported activity outside the funded scope; they do not state that the activity is categorically unlawful for a nonprofit.
- Sentinel restrictions remain active: audit_review_signal, facility_status_context_required, county_source_context_required, missing_data.

## 2. Case In One Page

CalDS screened 7 entities in California for this objective: Using public Form 990 XML for the 2023-2025 tax-period window where available, Federal Audit Clearinghouse audit source documents and award ledgers, California Department of Health Care Services facility-status records, county contract or monitoring records, litigation docket manifests, and organization service-page records, identify reviewer-safe oversight triage signals among large California drug recovery and substance use treatment nonprofits. Keep the result internal, source-cited, and limited to review leads, plus official county or Continuum of Care outcome-series, California Department of Health Care Services capacity/adverse-action metadata, and attributable public statement pages from target entities for contextual spend-versus-results screening. The run selected Behavioral Health Services Inc, Tarzana Treatment Centers Inc, CRI-Help Inc, HealthRIGHT 360, Phoenix Houses Of California Inc, WestCare California Inc, Social Model Recovery Systems Inc for deeper review using deterministic triage thresholds. The source bundle includes Federal Audit Clearinghouse audit source document (36), Downloaded Internal Revenue Service Form 990 machine-readable filing data (5), Internal Revenue Service Form 990 summary (1), Internal Revenue Service machine-readable filing-data availability manifest (1) and 17 other source class(es). Evidence references below use short `E##` labels, with full source details in the citation ledger.

The case is not based on a row count. It is based on these source-backed review reasons:

- Behavioral Health Services Inc: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds. Evidence: `E13`, `E14`.
- Tarzana Treatment Centers Inc: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up. Evidence: `E12`.
- CRI-Help Inc: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag. Evidence: `E15`.

Records still needed: Financial growth, License/adverse-action history, Off-scope activity, Payroll and wages; plus 4 other source area(s). These gaps are collection blockers, not adverse findings.

Sentinel posture remains `DOWNGRADE_FOR_REVIEW`. The score is a deterministic triage score, not a probability, not a dollar-loss estimate, and not a misconduct conclusion.

## 3. Entity Briefs

These briefs assume the reader has not seen the agent work. Deep-review entities are separated from watchlist or matrix-only entities so the reader can see what CalDS selected for deeper review versus what remains contextual.

### Watchlist And Matrix-Only Entities

These entities have matrix signals or source gaps, but they were not selected for deep forensic review by the implemented triage threshold in this run.

#### Behavioral Health Services Inc

Why this entity is in the review set:

CalDS selected Behavioral Health Services Inc for watchlist review; it was not selected for deep review by this run because the cited records show audit-control concerns, facility-capacity or license-status stress, material public-funding exposure, and spend-versus-results mismatch. The strongest current cited trigger is: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. Evidence: `E13`, `E14`, `E15`, `E18`, `E19`.

What the organization says it does:

this run did not recover a direct service-page or public-statement description for this entity, so CalDS does not fill that gap with an assumed mission statement.

Key retrieved records:

- `E14` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse award dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse federal_awards rows filtered to matched reports. Amount totals support funding-trace review only. | entity | federal_program_name | amount_expended_total | | --- | --- | --- | | Tarzana Treatment...
- `E46` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2017-03-23): Federal Audit Clearinghouse general-table record for Behavioral Health Services Inc. Report ID: 2016-06-CENSUS-0000124927 Audit year: 2016 Federal Audit Clearinghouse accepted date: 2017-03-23 Auditee name: BEHAVIORAL HEALTH SERVICES, INC. Auditee Employer...
- `E50` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2018-04-17): Federal Audit Clearinghouse general-table record for Behavioral Health Services Inc. Report ID: 2017-06-CENSUS-0000124927 Audit year: 2017 Federal Audit Clearinghouse accepted date: 2018-04-17 Auditee name: BEHAVIORAL HEALTH SERVICES, INC. Auditee Employer...
- 4 additional matched source item(s) appear in the citation ledger.

What the records show:

- Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. (year(s): 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024; subject: Behavioral Health Services Inc; evidence `E13`, `E14`.)
- Facility status: Parsed California Department of Health Care Services status rows show 40 active and 25 closed facilities out of 65 matched rows (38.5% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: Behavioral Health Services Inc; evidence `E15`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $68,101,243. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $44,537,114. (subject: Behavioral Health Services Inc; evidence `E13`, `E14`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alpine: homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%; Amador: homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%; Calaveras: homelessness services count up 7.6%, drug overdose death rate up 24.3%; Contra Costa: drug overdose death rate up 43.5%; plus 12 additional matched county context(s). Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Off-scope activity. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E13`, `E14`, `E15`, `E18`, `E19`.

What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked. It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.

Next human step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status. Source: risk matrix rows for this entity.

#### CRI-Help Inc

Why this entity is in the review set:

CalDS selected CRI-Help Inc for watchlist review; it was not selected for deep review by this run because the cited records show facility-capacity or license-status stress, rapid financial growth, executive-compensation or payroll-governance questions, material public-funding exposure, payroll or wage-growth questions, and spend-versus-results mismatch. The strongest current cited trigger is: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). Evidence: `E15`, `E12`, `E13`, `E14`, `E18`, `E19`.

What the organization says it does:

this run did not recover a direct service-page or public-statement description for this entity, so CalDS does not fill that gap with an assumed mission statement.

Key retrieved records:

- `E14` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse award dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse federal_awards rows filtered to matched reports. Amount totals support funding-trace review only. | entity | federal_program_name | amount_expended_total | | --- | --- | --- | | Tarzana Treatment...
- `E45` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2017-03-29): Federal Audit Clearinghouse general-table record for CRI-Help Inc. Report ID: 2016-06-CENSUS-0000124840 Audit year: 2016 Federal Audit Clearinghouse accepted date: 2017-03-29 Auditee name: CRI-HELP, INC. Auditee Employer Identification Number: 952758951 Audit...
- `E49` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2018-04-03): Federal Audit Clearinghouse general-table record for CRI-Help Inc. Report ID: 2017-06-CENSUS-0000124840 Audit year: 2017 Federal Audit Clearinghouse accepted date: 2018-04-03 Auditee name: CRI-HELP, INC. Auditee Employer Identification Number: 952758951 Audit...
- 4 additional matched source item(s) appear in the citation ledger.

What the records show:

- Facility status: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: CRI-Help Inc; evidence `E15`.)
- Financial growth: Parsed Internal Revenue Service revenue increased from $19,243,515 in 2023 to $42,978,055 in 2024 (+123.3%). (year(s): 2023, 2024; subject: CRI-Help Inc; evidence `E12`.)
- Executive compensation: Latest parsed return 2024 lists BRANDON FERNANDEZ-COMER (chief executive officer) with total reportable/other compensation of $235,530, equal to 1.38% of parsed expenses. (year(s): 2024; subject: CRI-Help Inc; evidence `E12`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $118,010,797. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $97,783,530. (subject: CRI-Help Inc; evidence `E13`, `E14`.)
- Payroll and wages: Parsed salaries, compensation, and benefits increased from $8,952,128 in 2023 to $10,886,092 in 2024 (+21.6%; $54,980 per employee using 198 employees). (year(s): 2023, 2024; subject: CRI-Help Inc; evidence `E12`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Off-scope activity. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E15`, `E12`, `E13`, `E14`, `E18`, `E19`.

What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified. It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.

Next human step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use. Source: risk matrix rows for this entity.

#### HealthRIGHT 360

Why this entity is in the review set:

CalDS selected HealthRIGHT 360 for watchlist review; it was not selected for deep review by this run because the cited records show facility-capacity or license-status stress, material public-funding exposure, audit-control concerns, possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). Evidence: `E15`, `E13`, `E14`, `E12`, `E18`, `E19`.

What the organization says it does:

The recovered official service page, `HealthRIGHT 360 substance use disorder services`, identifies HealthRIGHT 360 with substance use disorder treatment. Evidence: `E17`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E13` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse audit dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse general, findings, federal_awards source data tables, with downloaded audit source document presence. Audit source documents and Federal Audit Clearinghouse source data table rows remain the...
- `E14` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse award dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse federal_awards rows filtered to matched reports. Amount totals support funding-trace review only. | entity | federal_program_name | amount_expended_total | | --- | --- | --- | | Tarzana Treatment...
- `E44` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2017-03-30): Federal Audit Clearinghouse general-table record for HealthRIGHT 360. Report ID: 2016-06-CENSUS-0000122774 Audit year: 2016 Federal Audit Clearinghouse accepted date: 2017-03-30 Auditee name: HEALTHRIGHT 360 Auditee Employer Identification Number: 946129071...
- 8 additional matched source item(s) appear in the citation ledger.

What the records show:

- Facility status: Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: HealthRIGHT 360; evidence `E15`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $228,206,845. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $85,463,667. (subject: HealthRIGHT 360; evidence `E13`, `E14`.)
- Public-funds concentration: The latest parsed Internal Revenue Service return in this run is 2023. It reports $131,876,992 in government grants and $147,317,593 in total revenue, so government grants were 89.5% of revenue. (year(s): 2023; subject: HealthRIGHT 360; evidence `E12`.)
- Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): none; finding row count: 5. (subject: HealthRIGHT 360; evidence `E13`, `E14`.)
- Off-scope activity: The latest parsed return in this run is 2023. The parsed political-campaign activity indicator is no; the parsed lobbying-activity indicator is yes. (year(s): 2023; subject: HealthRIGHT 360; evidence `E12`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda: drug overdose death rate up 39.9%; Los Angeles: drug overdose death rate up 69.6%; Orange: drug overdose death rate up 73.2%; San Diego: drug overdose death rate up 72.5%; plus 4 additional matched county context(s). This run did not parse entity-level spending, revenue, or grant growth for that comparison. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Financial growth, Payroll and wages, Spending growth. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E15`, `E13`, `E14`, `E12`, `E18`, `E19`.

What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Next human step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use. Source: risk matrix rows for this entity.

#### Phoenix Houses Of California Inc

Why this entity is in the review set:

CalDS selected Phoenix Houses Of California Inc for watchlist review; it was not selected for deep review by this run because the cited records show facility-capacity or license-status stress, spend-versus-results mismatch, rapid financial growth, audit-control concerns, and executive-compensation or payroll-governance questions. The strongest current cited trigger is: Parsed California Department of Health Care Services status rows show 3 active and 5 closed facilities out of 8 matched rows (62.5% closed). Evidence: `E15`, `E18`, `E19`, `E12`, `E13`, `E14`.

What the organization says it does:

this run did not recover a direct service-page or public-statement description for this entity, so CalDS does not fill that gap with an assumed mission statement.

Key retrieved records:

- `E13` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse audit dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse general, findings, federal_awards source data tables, with downloaded audit source document presence. Audit source documents and Federal Audit Clearinghouse source data table rows remain the...
- `E59` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2020-04-23): Federal Audit Clearinghouse general-table record for Phoenix Houses Of California Inc. Report ID: 2019-06-CENSUS-0000249434 Audit year: 2019 Federal Audit Clearinghouse accepted date: 2020-04-23 Auditee name: PHOENIX HOUSES OF CALIFORNIA INC Auditee Employer...
- `E20` Official and public statement page harvest for target entities (Parsed public statement source dataset, 2026-04-24): are California Inc | True | advocacy; criminal justice; evidence-based; homelessness; housing; outcomes | https://westcare.com/leadership/senior/ | | | WestCare California Inc | True | advocacy; criminal justice; housing; outcomes |...

What the records show:

- Facility status: Parsed California Department of Health Care Services status rows show 3 active and 5 closed facilities out of 8 matched rows (62.5% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: Phoenix Houses Of California Inc; evidence `E15`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $15,548,520 in 2023 to $23,857,807 in 2024 (+53.4%). (year(s): 2023, 2024; subject: Phoenix Houses Of California Inc; evidence `E12`.)
- Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2019, 2020, 2021; finding row count: 1. (year(s): 2019, 2020, 2021; subject: Phoenix Houses Of California Inc; evidence `E13`, `E14`.)
- Executive compensation: Latest parsed return 2024 lists ALICE GLEGHORN (President & chief executive officer) with total reportable/other compensation of $364,096, equal to 1.53% of parsed expenses. (year(s): 2024; subject: Phoenix Houses Of California Inc; evidence `E12`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%; Stanislaus: drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Off-scope activity. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E15`, `E18`, `E19`, `E12`, `E13`, `E14`.

What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use. Source: risk matrix rows for this entity.

#### Social Model Recovery Systems Inc

Why this entity is in the review set:

CalDS selected Social Model Recovery Systems Inc for watchlist review; it was not selected for deep review by this run because the cited records show material public-funding exposure, audit-control concerns, facility-capacity or license-status stress, rapid financial growth, and spend-versus-results mismatch. The strongest current cited trigger is: The latest parsed Internal Revenue Service return in this run is 2025. It reports $31,308,364 in government grants and $33,662,291 in total revenue, so government grants were 93.0% of revenue. Evidence: `E12`, `E13`, `E14`, `E15`, `E18`, `E19`.

What the organization says it does:

this run did not recover a direct service-page or public-statement description for this entity, so CalDS does not fill that gap with an assumed mission statement.

Key retrieved records:

- `E22` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2016-12-28): Federal Audit Clearinghouse general-table record for Social Model Recovery Systems Inc. Report ID: 2016-06-CENSUS-0000126607 Audit year: 2016 Federal Audit Clearinghouse accepted date: 2016-12-28 Auditee name: SOCIAL MODEL RECOVERY SYSTEMS, INC. Auditee...
- `E24` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2017-12-18): Federal Audit Clearinghouse general-table record for Social Model Recovery Systems Inc. Report ID: 2017-06-CENSUS-0000126607 Audit year: 2017 Federal Audit Clearinghouse accepted date: 2017-12-18 Auditee name: SOCIAL MODEL RECOVERY SYSTEMS, INC. Auditee...
- `E26` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2018-11-25): Federal Audit Clearinghouse general-table record for Social Model Recovery Systems Inc. Report ID: 2018-06-CENSUS-0000126607 Audit year: 2018 Federal Audit Clearinghouse accepted date: 2018-11-25 Auditee name: SOCIAL MODEL RECOVERY SYSTEMS, INC. Auditee...
- 13 additional matched source item(s) appear in the citation ledger.

What the records show:

- Public-funds concentration: The latest parsed Internal Revenue Service return in this run is 2025. It reports $31,308,364 in government grants and $33,662,291 in total revenue, so government grants were 93.0% of revenue. (year(s): 2025; subject: Social Model Recovery Systems Inc; evidence `E12`.)
- Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2023, 2024, 2025; finding row count: 0. (year(s): 2023, 2024, 2025; subject: Social Model Recovery Systems Inc; evidence `E13`, `E14`.)
- Facility status: Parsed California Department of Health Care Services status rows show 9 active and 4 closed facilities out of 13 matched rows (30.8% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: Social Model Recovery Systems Inc; evidence `E15`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $111,988,155. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $81,561,046. (subject: Social Model Recovery Systems Inc; evidence `E13`, `E14`.)
- Financial growth: Parsed Internal Revenue Service revenue increased from $26,707,166 in 2024 to $33,662,291 in 2025 (+26.0%). (year(s): 2024, 2025; subject: Social Model Recovery Systems Inc; evidence `E12`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%; Orange: drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Off-scope activity. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E12`, `E13`, `E14`, `E15`, `E18`, `E19`.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review. It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.

Next human step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports. Source: risk matrix rows for this entity.

#### Tarzana Treatment Centers Inc

Why this entity is in the review set:

CalDS selected Tarzana Treatment Centers Inc for watchlist review; it was not selected for deep review by this run because the cited records show executive-compensation or payroll-governance questions, material public-funding exposure, rapid financial growth, possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. Evidence: `E12`, `E13`, `E14`, `E21`, `E18`, `E19`.

What the organization says it does:

The recovered public statement source, `Public statement page harvest: Tarzana Treatment Centers Inc`, identifies Tarzana Treatment Centers Inc with substance use disorder treatment. Evidence: `E21`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E02` Internal Revenue Service Form 990 summary table (Downloaded Internal Revenue Service Form 990 machine-readable filing data, 202306): Internal Revenue Service Form 990 machine-readable filing data downloaded for Tarzana Treatment Centers Inc. Employer Identification Number: 942219349 Tax period year: 2023 Tax period: 202306 Object ID: 202441109349300129 ZIP batch: 2024_TEOS_XML_04a Local...
- `E05` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2016-12-21): Federal Audit Clearinghouse general-table record for Tarzana Treatment Centers Inc. Report ID: 2016-06-CENSUS-0000119575 Audit year: 2016 Federal Audit Clearinghouse accepted date: 2016-12-21 Auditee name: TARZANA TREATMENT CENTERS, INC. Auditee Employer...
- `E23` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2018-01-17): Federal Audit Clearinghouse general-table record for Tarzana Treatment Centers Inc. Report ID: 2017-06-CENSUS-0000119575 Audit year: 2017 Federal Audit Clearinghouse accepted date: 2018-01-17 Auditee name: TARZANA TREATMENT CENTER Auditee Employer...
- 16 additional matched source item(s) appear in the citation ledger.

What the records show:

- Executive compensation: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. (year(s): 2024; subject: Tarzana Treatment Centers Inc; evidence `E12`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $270,742,899. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $110,858,168. (subject: Tarzana Treatment Centers Inc; evidence `E13`, `E14`.)
- Financial growth: Parsed Internal Revenue Service revenue increased from $132,064,342 in 2023 to $181,548,768 in 2024 (+37.5%). (year(s): 2023, 2024; subject: Tarzana Treatment Centers Inc; evidence `E12`.)
- Public statements: Configured public statement pages were harvested. Matched review terms: advocacy. (subject: Tarzana Treatment Centers Inc; evidence `E21`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Public-funds concentration. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E12`, `E13`, `E14`, `E21`, `E18`, `E19`.

What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Next human step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context. Source: risk matrix rows for this entity.

#### WestCare California Inc

Why this entity is in the review set:

CalDS selected WestCare California Inc for watchlist review; it was not selected for deep review by this run because the cited records show facility-capacity or license-status stress, material public-funding exposure, possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Parsed California Department of Health Care Services status rows show 6 active and 6 closed facilities out of 12 matched rows (50.0% closed). Evidence: `E15`, `E13`, `E14`, `E18`, `E19`, `E12`.

What the organization says it does:

this run did not recover a direct service-page or public-statement description for this entity, so CalDS does not fill that gap with an assumed mission statement.

Key retrieved records:

- `E13` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse audit dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse general, findings, federal_awards source data tables, with downloaded audit source document presence. Audit source documents and Federal Audit Clearinghouse source data table rows remain the...
- `E14` Federal Audit Clearinghouse audit summary table (Parsed Federal Audit Clearinghouse award dataset, 2026-04-24): Deterministic parser output from Federal Audit Clearinghouse federal_awards rows filtered to matched reports. Amount totals support funding-trace review only. | entity | federal_program_name | amount_expended_total | | --- | --- | --- | | Tarzana Treatment...
- `E54` Federal Audit Clearinghouse audit summary table (Federal Audit Clearinghouse audit source document, 2019-02-28): Federal Audit Clearinghouse general-table record for WestCare California Inc. Report ID: 2018-06-CENSUS-0000247998 Audit year: 2018 Federal Audit Clearinghouse accepted date: 2019-02-28 Auditee name: WESTCARE CALIFORNIA, INC. Auditee Employer Identification...
- 2 additional matched source item(s) appear in the citation ledger.

What the records show:

- Facility status: Parsed California Department of Health Care Services status rows show 6 active and 6 closed facilities out of 12 matched rows (50.0% closed). (place: California Department of Health Care Services facility set matched to the entity; subject: WestCare California Inc; evidence `E15`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $79,713,890. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $43,839,518. (subject: WestCare California Inc; evidence `E13`, `E14`.)
- Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. (subject: WestCare California Inc; evidence risk-matrix source-gap row.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Contra Costa: drug overdose death rate up 43.5%; Fresno: drug overdose death rate up 56.9%; Kern: drug overdose death rate up 71.9%; Kings: drug overdose death rate up 27.8%, violent crime count up 11.9%; plus 1 additional matched county context(s). Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E18`, `E19`.
- Source gaps that limit judgment: Public-funds concentration. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review. Evidence: `E15`, `E13`, `E14`, `E18`, `E19`, `E12`.

What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Next human step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use. Source: risk matrix rows for this entity.

### Case-wide Source Gaps

These are not nonprofit organization-specific findings. They are run-level blockers that limit how strongly CalDS can rank or clear the case.

- License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
  Evidence: `E18`. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
  Evidence: risk-matrix source-gap row. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Treatment completion: The California Department of Health Care Services CalOMS/DATAR public page was probed, but this run did not recover a machine-readable provider/county treatment completion table.
  Evidence: `E18`. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.


## 4. Methodology, Guardrails, and Source Status

### Triage Gate

- This run does not include the new top-15 triage artifact. Rerun the workflow to populate the triage gate.

### Acquisition and Completion Guard

- This run does not include a completion guard artifact. Rerun the workflow before treating the dossier as complete.

### Plain-Language Source Glossary

- Federal Audit Clearinghouse: federal audit report, findings, and award data used for audit-control review.
- California Department of Health Care Services: California licensing, facility-status, and adverse-action source context.
- California Department of Housing and Community Development: state housing and homelessness grant source, including Homekey award records.
- Internal Revenue Service: federal tax-return source for Form 990 revenue, expense, grant, and compensation fields.
- Continuum of Care: regional homelessness-services geography used in official outcome datasets.
- Homekey: California housing grant program used here as a source of project-award records.
- Homeless Data Integration System: California homelessness data warehouse used for official outcome context.
- Federal Housing Finance Agency Office of Inspector General: federal inspector-general source used for enforcement or prosecution press releases.
- Employer Identification Number: federal tax identifier used to match nonprofit records.
- Machine-readable filing data: structured source files used for source-system returns and extracts.
- Source document: original audit, tax-return, or records file used as the controlling record.

### Score Components and Sentinel

Lead statement: Retrieved records show a reviewable oversight signal for Tarzana Treatment Centers Inc, HealthRIGHT 360 focused on recovery, treatment, live.

Review priority score: 51.52 / 100

Interpretation: reviewable triage lead with meaningful source coverage, but caveats or missing data prevent upgrade without human verification.

The score is deterministic triage priority, not a probability, not a dollar loss estimate, and not a conclusion. CalDS now splits the score into risk severity, source completeness, open gap burden, contradiction burden, and publication confidence so a strong review signal is not confused with publication readiness.

| Field | Value |
| --- | --- |
| Risk severity score | 0.0 / 100 |
| Source completeness score | 0.0 / 100 |
| Publication confidence score | 0.0 / 100 |
| Support count | 60 |
| Average relevance | 0.329 |
| Source diversity | 21 |
| Hard entity links | 19 |
| Completion guard resolved checks | 0 of 0 |
| Completion guard unresolved blockers | 0 blocker(s); 0 miss(es) |
| Open gap burden | 0 caveat signal(s) |
| Gap signal source buckets | none |
| Contradiction count | 0 caution signal(s) |

### Sentinel Gate

| Field | Value |
| --- | --- |
| Decision | DOWNGRADE_FOR_REVIEW |
| Rationale | Lead can proceed only as an internal reviewer-safe candidate with caveats. |
| Flags | audit_review_signal, facility_status_context_required, county_source_context_required, missing_data |

Sentinel repair or caution items:

- Keep audit and Schedule L references as review questions until source documents are checked.
- Keep California Department of Health Care Services status records at facility-level context unless a reviewer confirms entity-level meaning.
- Require reviewer confirmation of current county contract or monitoring status.
- Preserve missing-data caveats in the review packet.

### Case Context

- Case ID: `live_ca_recovery_ngos_2026_04_24`
- Jurisdiction: California
- Objective: Using public Form 990 XML for the 2023-2025 tax-period window where available, Federal Audit Clearinghouse audit source documents and award ledgers, California Department of Health Care Services facility-status records, county contract or monitoring records, litigation docket manifests, and organization service-page records, identify reviewer-safe oversight triage signals among large California drug recovery and substance use treatment nonprofits. Keep the result internal, source-cited, and limited to review leads, plus official county or Continuum of Care outcome-series, California Department of Health Care Services capacity/adverse-action metadata, and attributable public statement pages from target entities for contextual spend-versus-results screening.
- Named entities: Tarzana Treatment Centers Inc, HealthRIGHT 360, WestCare California Inc, Behavioral Health Services Inc, CRI-Help Inc, Social Model Recovery Systems Inc, Phoenix Houses Of California Inc
- Allowed source types: irs_990_summary, irs_990_xml, irs_990_download_manifest, irs_990_full_text_fallback, fac_audit_summary, fac_audit_pdf, fac_findings, fac_federal_awards, dhcs_page, dhcs_facility_status, dhcs_adverse_status_manifest, dhcs_adverse_status_discovery, county_contract_or_monitoring, court_docket_manifest, source_extraction_irs_990_table, source_extraction_fac_audit_table, source_extraction_fac_award_table, source_extraction_dhcs_status_table, source_extraction_pdf_text_index, org_service_page, source_extraction_official_outcome_table, source_extraction_spend_vs_results_table, source_extraction_public_statement_table, public_statement_source
- Review packet: `[private source artifact]

## 5. Case Dossier Orientation

Status: `PENDING` human review required

This dossier compiles existing CalDS workflow artifacts into a human-readable case file. It is an internal possible waste, fraud, abuse, or mismanagement screening aid, not a formal finding or outside-facing conclusion.

Every substantive row below is tied to a risk indicator, evidence item, source URI, checksum, or durable artifact path. Raw source documents and canonical records remain controlling.

Dossier mode: downgraded internal review dossier with caveats preserved

## 6. Evidence Detail By Entity

This section preserves the system opinion and source-fact detail behind the briefing memo. It remains an internal possible waste, fraud, abuse, or mismanagement screening opinion, not a formal allegation or outside-facing conclusion.

### Behavioral Health Services Inc

CalDS keeps Behavioral Health Services Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E13`, `E14`, `E15`, `E18`, `E19`.

Specific findings that drove the flag:

1. High - Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. Evidence: `E13`, `E14`.
   - When/where: year(s): 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024; subject: Behavioral Health Services Inc Evidence: `E13`, `E14`.
   - Why this row is here: High Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

2. Medium - Facility status: Parsed California Department of Health Care Services status rows show 40 active and 25 closed facilities out of 65 matched rows (38.5% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Behavioral Health Services Inc Evidence: `E15`.
   - Why this row is here: Medium Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

3. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $68,101,243. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $44,537,114. Evidence: `E13`, `E14`.
   - When/where: subject: Behavioral Health Services Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

4. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
   - When/where: place: Alpine; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Alpine. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
   - When/where: place: Amador; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Amador. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
   - When/where: place: Calaveras; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Calaveras. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### CRI-Help Inc

CalDS keeps CRI-Help Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E15`, `E12`, `E13`, `E14`, `E18`, `E19`.

Specific findings that drove the flag:

1. High - Facility status: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: CRI-Help Inc Evidence: `E15`.
   - Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

2. High - Financial growth: Parsed Internal Revenue Service revenue increased from $19,243,515 in 2023 to $42,978,055 in 2024 (+123.3%). Evidence: `E12`.
   - When/where: year(s): 2023, 2024; subject: CRI-Help Inc Evidence: `E12`.
   - Why this row is here: High Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

3. Medium - Executive compensation: Latest parsed return 2024 lists BRANDON FERNANDEZ-COMER (chief executive officer) with total reportable/other compensation of $235,530, equal to 1.38% of parsed expenses. Evidence: `E12`.
   - When/where: year(s): 2024; subject: CRI-Help Inc Evidence: `E12`.
   - Why this row is here: Medium Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

4. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $118,010,797. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $97,783,530. Evidence: `E13`, `E14`.
   - When/where: subject: CRI-Help Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

5. Medium - Payroll and wages: Parsed salaries, compensation, and benefits increased from $8,952,128 in 2023 to $10,886,092 in 2024 (+21.6%; $54,980 per employee using 198 employees). Evidence: `E12`.
   - When/where: year(s): 2023, 2024; subject: CRI-Help Inc Evidence: `E12`.
   - Why this row is here: Medium Payroll and wages screen matched the implemented check: Year-over-year salaries, compensation, and benefits growth. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

6. Medium - Spend-versus-results: CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Los Angeles; subject: CRI-Help Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Case-wide

CalDS keeps Case-wide in the dossier for watchlist source-gap review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E18`, `E19`.

Specific findings that drove the flag:

1. Data gap - License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run. Evidence: `E18`.
   - When/where: subject: Case-wide Evidence: `E18`.
   - Why this row is here: Data gap License/adverse-action history screen matched the implemented check: California Department of Health Care Services adverse-action page machine readability. Source status: non_machine_readable_source. Evidence: `E18`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`.
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

2. Data gap - Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Evidence: risk-matrix source-gap row.
   - When/where: subject: Case-wide Evidence: risk-matrix source-gap row.
   - Why this row is here: Data gap Public attention and traffic screen matched the implemented check: Social media and website traffic coverage. Source status: missing_required_attention_sources. Evidence: risk-matrix source-gap row.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

3. Data gap - Treatment completion: The California Department of Health Care Services CalOMS/DATAR public page was probed, but this run did not recover a machine-readable provider/county treatment completion table. Evidence: `E18`.
   - When/where: subject: Case-wide Evidence: `E18`.
   - Why this row is here: Data gap Treatment completion screen matched the implemented check: Direct CalOMS/DATAR treatment completion coverage. Source status: restricted_or_non_machine_readable_source. Evidence: `E18`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`.
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

4. Low - Spend-versus-results: Official outcome series are ingested and joined into 35 entity/county context rows. These rows remain contextual and are not provider-attributable results. Evidence: `E18`, `E19`.
   - When/where: subject: Case-wide Evidence: `E18`, `E19`.
   - Why this row is here: Low Spend-versus-results screen matched the implemented check: Outcome-denominator coverage for homelessness, drug use, crime, and treatment results. Source status: observed. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### HealthRIGHT 360

CalDS keeps HealthRIGHT 360 in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E15`, `E13`, `E14`, `E12`.

Specific findings that drove the flag:

1. High - Facility status: Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: HealthRIGHT 360 Evidence: `E15`.
   - Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

2. High - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $228,206,845. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $85,463,667. Evidence: `E13`, `E14`.
   - When/where: subject: HealthRIGHT 360 Evidence: `E13`, `E14`.
   - Why this row is here: High Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. High - Public-funds concentration: The latest parsed Internal Revenue Service return in this run is 2023. It reports $131,876,992 in government grants and $147,317,593 in total revenue, so government grants were 89.5% of revenue. Evidence: `E12`.
   - When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
   - Why this row is here: High Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

4. Medium - Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): none; finding row count: 5. Evidence: `E13`, `E14`.
   - When/where: subject: HealthRIGHT 360 Evidence: `E13`, `E14`.
   - Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

5. Medium - Off-scope activity: The latest parsed return in this run is 2023. The parsed political-campaign activity indicator is no; the parsed lobbying-activity indicator is yes. Evidence: `E12`.
   - When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
   - Why this row is here: Medium Off-scope activity screen matched the implemented check: Form 990 political campaign and lobbying indicators. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

6. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. Evidence: risk-matrix source-gap row.
   - When/where: subject: HealthRIGHT 360 Evidence: risk-matrix source-gap row.
   - Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: risk-matrix source-gap row.
   - Source access: https://www.healthright360.org/about/staff-and-board/ Evidence: risk-matrix source-gap row.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Phoenix Houses Of California Inc

CalDS keeps Phoenix Houses Of California Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E15`, `E18`, `E19`, `E12`, `E13`, `E14`.

Specific findings that drove the flag:

1. High - Facility status: Parsed California Department of Health Care Services status rows show 3 active and 5 closed facilities out of 8 matched rows (62.5% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Phoenix Houses Of California Inc Evidence: `E15`.
   - Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

2. High - Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Los Angeles; subject: Phoenix Houses Of California Inc Evidence: `E18`, `E19`.
   - Why this row is here: High Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. High - Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Stanislaus; subject: Phoenix Houses Of California Inc Evidence: `E18`, `E19`.
   - Why this row is here: High Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Stanislaus. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

4. High - Spending growth: Internal Revenue Service parsed expenses moved from $15,548,520 in 2023 to $23,857,807 in 2024 (+53.4%). Evidence: `E12`.
   - When/where: year(s): 2023, 2024; subject: Phoenix Houses Of California Inc Evidence: `E12`.
   - Why this row is here: High Spending growth screen matched the implemented check: Year-over-year total expense growth. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

5. Medium - Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2019, 2020, 2021; finding row count: 1. Evidence: `E13`, `E14`.
   - When/where: year(s): 2019, 2020, 2021; subject: Phoenix Houses Of California Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

6. Medium - Executive compensation: Latest parsed return 2024 lists ALICE GLEGHORN (President & chief executive officer) with total reportable/other compensation of $364,096, equal to 1.53% of parsed expenses. Evidence: `E12`.
   - When/where: year(s): 2024; subject: Phoenix Houses Of California Inc Evidence: `E12`.
   - Why this row is here: Medium Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Social Model Recovery Systems Inc

CalDS keeps Social Model Recovery Systems Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E12`, `E13`, `E14`, `E15`, `E18`, `E19`.

Specific findings that drove the flag:

1. High - Public-funds concentration: The latest parsed Internal Revenue Service return in this run is 2025. It reports $31,308,364 in government grants and $33,662,291 in total revenue, so government grants were 93.0% of revenue. Evidence: `E12`.
   - When/where: year(s): 2025; subject: Social Model Recovery Systems Inc Evidence: `E12`.
   - Why this row is here: High Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. Medium - Audit controls: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2023, 2024, 2025; finding row count: 0. Evidence: `E13`, `E14`.
   - When/where: year(s): 2023, 2024, 2025; subject: Social Model Recovery Systems Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Medium - Facility status: Parsed California Department of Health Care Services status rows show 9 active and 4 closed facilities out of 13 matched rows (30.8% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Social Model Recovery Systems Inc Evidence: `E15`.
   - Why this row is here: Medium Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

4. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $111,988,155. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $81,561,046. Evidence: `E13`, `E14`.
   - When/where: subject: Social Model Recovery Systems Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

5. Medium - Financial growth: Parsed Internal Revenue Service revenue increased from $26,707,166 in 2024 to $33,662,291 in 2025 (+26.0%). Evidence: `E12`.
   - When/where: year(s): 2024, 2025; subject: Social Model Recovery Systems Inc Evidence: `E12`.
   - Why this row is here: Medium Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

6. Medium - Spend-versus-results: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E18`, `E19`.
   - When/where: place: Los Angeles; subject: Social Model Recovery Systems Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Tarzana Treatment Centers Inc

CalDS keeps Tarzana Treatment Centers Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E12`, `E13`, `E14`, `E21`, `E18`, `E19`.

Specific findings that drove the flag:

1. High - Executive compensation: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. Evidence: `E12`.
   - When/where: year(s): 2024; subject: Tarzana Treatment Centers Inc Evidence: `E12`.
   - Why this row is here: High Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

2. High - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $270,742,899. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $110,858,168. Evidence: `E13`, `E14`.
   - When/where: subject: Tarzana Treatment Centers Inc Evidence: `E13`, `E14`.
   - Why this row is here: High Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Medium - Financial growth: Parsed Internal Revenue Service revenue increased from $132,064,342 in 2023 to $181,548,768 in 2024 (+37.5%). Evidence: `E12`.
   - When/where: year(s): 2023, 2024; subject: Tarzana Treatment Centers Inc Evidence: `E12`.
   - Why this row is here: Medium Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

4. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy. Evidence: `E21`.
   - When/where: subject: Tarzana Treatment Centers Inc Evidence: `E21`.
   - Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: `E21`.
   - Source access: https://www.tarzanatc.org/who-we-are/meet-us/ Evidence: `E21`.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

5. Medium - Spend-versus-results: Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Los Angeles; subject: Tarzana Treatment Centers Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Data gap - Public-funds concentration: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E12`.
   - When/where: subject: Tarzana Treatment Centers Inc Evidence: `E12`.
   - Why this row is here: Data gap Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: missing_source_or_field. Evidence: `E12`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### WestCare California Inc

CalDS keeps WestCare California Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E15`, `E13`, `E14`, `E18`, `E19`.

Specific findings that drove the flag:

1. High - Facility status: Parsed California Department of Health Care Services status rows show 6 active and 6 closed facilities out of 12 matched rows (50.0% closed). Evidence: `E15`.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: WestCare California Inc Evidence: `E15`.
   - Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

2. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $79,713,890. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $43,839,518. Evidence: `E13`, `E14`.
   - When/where: subject: WestCare California Inc Evidence: `E13`, `E14`.
   - Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. Evidence: risk-matrix source-gap row.
   - When/where: subject: WestCare California Inc Evidence: risk-matrix source-gap row.
   - Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: risk-matrix source-gap row.
   - Source access: https://westcare.com/leadership/ Evidence: risk-matrix source-gap row.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

4. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Contra Costa; subject: WestCare California Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Contra Costa. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Fresno; subject: WestCare California Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Fresno. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
   - When/where: place: Kern; subject: WestCare California Inc Evidence: `E18`, `E19`.
   - Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Kern. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.


## 7. Flagged Review Matrix

Methodology: Waste, fraud, and abuse risk-screening matrix generated from parsed Internal Revenue Service Form 990, Federal Audit Clearinghouse, California Department of Health Care Services facility-status, county/document index, and retrieved service-page records. The matrix tests observable risk proxies: year-over-year financial growth, spending growth, public-funds concentration, executive compensation, payroll scale, political/lobbying indicators, audit-control flags, award concentration, facility closure patterns, off-scope web-language checks, official county or Continuum of Care outcome context, and remaining provider-attributable outcome gaps.

Risk scale: Indicator levels: High=immediate reviewer follow-up, Medium=review queue, Low=context only, Data gap=required source missing or not parsed. Levels are screening priorities, not findings or allegations.

| Risk level | Count |
| --- | --- |
| High | 14 |
| Medium | 51 |
| Data gap | 12 |
| Low | 39 |

High and medium rows are review priorities. Data-gap rows are source-collection blockers. Low rows are not expanded here unless they are needed for context.

### High Rows

#### High-1: Behavioral Health Services Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. Evidence: `E13`, `E14`.
- When/where: year(s): 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024; subject: Behavioral Health Services Inc Evidence: `E13`, `E14`.
- Why this row is here: High Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse data in this run reports material-weakness year(s): 2021, 2024; internal-control-deficiency year(s): 2017, 2018, 2019, 2020, 2022; not-low-risk year(s): 2018, 2019, 2020, 2021, 2022, 2023, 2024; finding row count: 2. This source fact matches the implemented audit controls screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### High-2: Tarzana Treatment Centers Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. Evidence: `E12`.
- When/where: year(s): 2024; subject: Tarzana Treatment Centers Inc Evidence: `E12`.
- Why this row is here: High Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2024 lists ALBERT SENELLA (PRESIDENT/chief executive officer) with total reportable/other compensation of $1,842,868, equal to 1.27% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion. Evidence: `E12`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-3: CRI-Help Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: CRI-Help Inc Evidence: `E15`.
- Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 4 active and 9 closed facilities out of 13 matched rows (69.2% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### High-4: HealthRIGHT 360 - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: HealthRIGHT 360 Evidence: `E15`.
- Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 21 active and 25 closed facilities out of 46 matched rows (54.3% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### High-5: Phoenix Houses Of California Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 3 active and 5 closed facilities out of 8 matched rows (62.5% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Phoenix Houses Of California Inc Evidence: `E15`.
- Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 3 active and 5 closed facilities out of 8 matched rows (62.5% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### High-6: WestCare California Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 6 active and 6 closed facilities out of 12 matched rows (50.0% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: WestCare California Inc Evidence: `E15`.
- Why this row is here: High Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 6 active and 6 closed facilities out of 12 matched rows (50.0% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### High-7: HealthRIGHT 360 - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $228,206,845. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $85,463,667. Evidence: `E13`, `E14`.
- When/where: subject: HealthRIGHT 360 Evidence: `E13`, `E14`.
- Why this row is here: High Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $228,206,845. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $85,463,667. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### High-8: Tarzana Treatment Centers Inc - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $270,742,899. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $110,858,168. Evidence: `E13`, `E14`.
- When/where: subject: Tarzana Treatment Centers Inc Evidence: `E13`, `E14`.
- Why this row is here: High Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $270,742,899. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $110,858,168. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### High-9: CRI-Help Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Parsed Internal Revenue Service revenue increased from $19,243,515 in 2023 to $42,978,055 in 2024 (+123.3%). Evidence: `E12`.
- When/where: year(s): 2023, 2024; subject: CRI-Help Inc Evidence: `E12`.
- Why this row is here: High Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Internal Revenue Service revenue increased from $19,243,515 in 2023 to $42,978,055 in 2024 (+123.3%). This source fact matches the implemented financial growth screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-10: HealthRIGHT 360 - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: The latest parsed Internal Revenue Service return in this run is 2023. It reports $131,876,992 in government grants and $147,317,593 in total revenue, so government grants were 89.5% of revenue. Evidence: `E12`.
- When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
- Why this row is here: High Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because The latest parsed Internal Revenue Service return in this run is 2023. It reports $131,876,992 in government grants and $147,317,593 in total revenue, so government grants were 89.5% of revenue. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure. Evidence: `E12`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-11: Social Model Recovery Systems Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: The latest parsed Internal Revenue Service return in this run is 2025. It reports $31,308,364 in government grants and $33,662,291 in total revenue, so government grants were 93.0% of revenue. Evidence: `E12`.
- When/where: year(s): 2025; subject: Social Model Recovery Systems Inc Evidence: `E12`.
- Why this row is here: High Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because The latest parsed Internal Revenue Service return in this run is 2025. It reports $31,308,364 in government grants and $33,662,291 in total revenue, so government grants were 93.0% of revenue. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure. Evidence: `E12`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-12: Phoenix Houses Of California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: Phoenix Houses Of California Inc Evidence: `E18`, `E19`.
- Why this row is here: High Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### High-13: Phoenix Houses Of California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Stanislaus
- What CalDS found: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Stanislaus; subject: Phoenix Houses Of California Inc Evidence: `E18`, `E19`.
- Why this row is here: High Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Stanislaus. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### High-14: Phoenix Houses Of California Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $15,548,520 in 2023 to $23,857,807 in 2024 (+53.4%). Evidence: `E12`.
- When/where: year(s): 2023, 2024; subject: Phoenix Houses Of California Inc Evidence: `E12`.
- Why this row is here: High Spending growth screen matched the implemented check: Year-over-year total expense growth. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $15,548,520 in 2023 to $23,857,807 in 2024 (+53.4%). This source fact matches the implemented spending growth screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

### Medium Rows

#### Medium-1: HealthRIGHT 360 - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): none; finding row count: 5. Evidence: `E13`, `E14`.
- When/where: subject: HealthRIGHT 360 Evidence: `E13`, `E14`.
- Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): none; finding row count: 5. This source fact matches the implemented audit controls screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-2: Phoenix Houses Of California Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2019, 2020, 2021; finding row count: 1. Evidence: `E13`, `E14`.
- When/where: year(s): 2019, 2020, 2021; subject: Phoenix Houses Of California Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2019, 2020, 2021; finding row count: 1. This source fact matches the implemented audit controls screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-3: Social Model Recovery Systems Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2023, 2024, 2025; finding row count: 0. Evidence: `E13`, `E14`.
- When/where: year(s): 2023, 2024, 2025; subject: Social Model Recovery Systems Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Audit controls screen matched the implemented check: Federal Audit Clearinghouse control flags and findings. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse data in this run reports material-weakness year(s): none; internal-control-deficiency year(s): none; not-low-risk year(s): 2023, 2024, 2025; finding row count: 0. This source fact matches the implemented audit controls screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-4: CRI-Help Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2024 lists BRANDON FERNANDEZ-COMER (chief executive officer) with total reportable/other compensation of $235,530, equal to 1.38% of parsed expenses. Evidence: `E12`.
- When/where: year(s): 2024; subject: CRI-Help Inc Evidence: `E12`.
- Why this row is here: Medium Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2024 lists BRANDON FERNANDEZ-COMER (chief executive officer) with total reportable/other compensation of $235,530, equal to 1.38% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion. Evidence: `E12`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### Medium-5: Phoenix Houses Of California Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2024 lists ALICE GLEGHORN (President & chief executive officer) with total reportable/other compensation of $364,096, equal to 1.53% of parsed expenses. Evidence: `E12`.
- When/where: year(s): 2024; subject: Phoenix Houses Of California Inc Evidence: `E12`.
- Why this row is here: Medium Executive compensation screen matched the implemented check: Highest officer/key employee compensation from Form 990 Part VII. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2024 lists ALICE GLEGHORN (President & chief executive officer) with total reportable/other compensation of $364,096, equal to 1.53% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion. Evidence: `E12`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### Medium-6: Behavioral Health Services Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 40 active and 25 closed facilities out of 65 matched rows (38.5% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Behavioral Health Services Inc Evidence: `E15`.
- Why this row is here: Medium Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 40 active and 25 closed facilities out of 65 matched rows (38.5% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### Medium-7: Social Model Recovery Systems Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: Parsed California Department of Health Care Services status rows show 9 active and 4 closed facilities out of 13 matched rows (30.8% closed). Evidence: `E15`.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Social Model Recovery Systems Inc Evidence: `E15`.
- Why this row is here: Medium Facility status screen matched the implemented check: California Department of Health Care Services active/closed facility-status ratio. Source status: observed. Evidence: `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E15`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed California Department of Health Care Services status rows show 9 active and 4 closed facilities out of 13 matched rows (30.8% closed). This source fact matches the implemented facility status screen and should stay in the active review queue. Evidence: `E15`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Review closed facility IDs, dates, license histories, probation/suspension/revocation records, and contract coverage before entity-level use. Evidence: `E15`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.
- Caveat: Closed status can be routine, historical, or administrative; facility-level records control.

#### Medium-8: Behavioral Health Services Inc - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $68,101,243. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $44,537,114. Evidence: `E13`, `E14`.
- When/where: subject: Behavioral Health Services Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $68,101,243. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $44,537,114. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-9: CRI-Help Inc - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $118,010,797. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $97,783,530. Evidence: `E13`, `E14`.
- When/where: subject: CRI-Help Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $118,010,797. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $97,783,530. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-10: Social Model Recovery Systems Inc - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $111,988,155. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $81,561,046. Evidence: `E13`, `E14`.
- When/where: subject: Social Model Recovery Systems Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $111,988,155. Top parsed program: BLOCK GRANTS FOR PREVENTION AND TREATMENT OF SUBSTANCE ABUSE at $81,561,046. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-11: WestCare California Inc - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $79,713,890. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $43,839,518. Evidence: `E13`, `E14`.
- When/where: subject: WestCare California Inc Evidence: `E13`, `E14`.
- Why this row is here: Medium Federal award exposure screen matched the implemented check: Federal Audit Clearinghouse cumulative award amount in retrieved reports. Source status: observed. Evidence: `E13`, `E14`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E14`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $79,713,890. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $43,839,518. This source fact matches the implemented federal award exposure screen and should stay in the active review queue. Evidence: `E13`, `E14`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone. Evidence: `E13`, `E14`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-12: Social Model Recovery Systems Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Parsed Internal Revenue Service revenue increased from $26,707,166 in 2024 to $33,662,291 in 2025 (+26.0%). Evidence: `E12`.
- When/where: year(s): 2024, 2025; subject: Social Model Recovery Systems Inc Evidence: `E12`.
- Why this row is here: Medium Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Internal Revenue Service revenue increased from $26,707,166 in 2024 to $33,662,291 in 2025 (+26.0%). This source fact matches the implemented financial growth screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-13: Tarzana Treatment Centers Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Parsed Internal Revenue Service revenue increased from $132,064,342 in 2023 to $181,548,768 in 2024 (+37.5%). Evidence: `E12`.
- When/where: year(s): 2023, 2024; subject: Tarzana Treatment Centers Inc Evidence: `E12`.
- Why this row is here: Medium Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Internal Revenue Service revenue increased from $132,064,342 in 2023 to $181,548,768 in 2024 (+37.5%). This source fact matches the implemented financial growth screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-14: HealthRIGHT 360 - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: The latest parsed return in this run is 2023. The parsed political-campaign activity indicator is no; the parsed lobbying-activity indicator is yes. Evidence: `E12`.
- When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
- Why this row is here: Medium Off-scope activity screen matched the implemented check: Form 990 political campaign and lobbying indicators. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because The latest parsed return in this run is 2023. The parsed political-campaign activity indicator is no; the parsed lobbying-activity indicator is yes. This source fact matches the implemented off-scope activity screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If either indicator is yes, inspect the full return, schedules, funding restrictions, and cost allocation before escalation. Evidence: `E12`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: A yes indicator can reflect disclosed permissible activity; the reviewer must test allowability and funding source.

#### Medium-15: CRI-Help Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries, compensation, and benefits increased from $8,952,128 in 2023 to $10,886,092 in 2024 (+21.6%; $54,980 per employee using 198 employees). Evidence: `E12`.
- When/where: year(s): 2023, 2024; subject: CRI-Help Inc Evidence: `E12`.
- Why this row is here: Medium Payroll and wages screen matched the implemented check: Year-over-year salaries, compensation, and benefits growth. Source status: observed. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries, compensation, and benefits increased from $8,952,128 in 2023 to $10,886,092 in 2024 (+21.6%; $54,980 per employee using 198 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue. Evidence: `E12`.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables. Evidence: `E12`.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for CRI-Help Inc and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-16: HealthRIGHT 360 - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. Evidence: risk-matrix source-gap row.
- When/where: subject: HealthRIGHT 360 Evidence: risk-matrix source-gap row.
- Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: risk-matrix source-gap row.
- Source access: https://www.healthright360.org/about/staff-and-board/ Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. This source fact matches the implemented public statements screen and should stay in the active review queue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-17: Tarzana Treatment Centers Inc - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy. Evidence: `E21`.
- When/where: subject: Tarzana Treatment Centers Inc Evidence: `E21`.
- Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: `E21`.
- Source access: https://www.tarzanatc.org/who-we-are/meet-us/ Evidence: `E21`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy. This source fact matches the implemented public statements screen and should stay in the active review queue. Evidence: `E21`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: `E21`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-18: WestCare California Inc - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. Evidence: risk-matrix source-gap row.
- When/where: subject: WestCare California Inc Evidence: risk-matrix source-gap row.
- Why this row is here: Medium Public statements screen matched the implemented check: Official/public page term screen. Source status: observed. Evidence: risk-matrix source-gap row.
- Source access: https://westcare.com/leadership/ Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. This source fact matches the implemented public statements screen and should stay in the active review queue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-19: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Alpine
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Alpine; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Alpine. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-20: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Amador
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Amador; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Amador. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-21: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Calaveras
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Calaveras; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Calaveras. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-22: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Contra Costa
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Contra Costa; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Contra Costa. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-23: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Fresno; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Fresno. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-24: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-25: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Madera
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Madera; official county or Continuum of Care context flags drug overdose death rate up 42.4%, property crime count up 5.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Madera; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Madera. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Madera; official county or Continuum of Care context flags drug overdose death rate up 42.4%, property crime count up 5.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-26: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Napa
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Napa; official county or Continuum of Care context flags drug overdose death rate up 52.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Napa; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Napa. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Napa; official county or Continuum of Care context flags drug overdose death rate up 52.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-27: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Orange; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Orange. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-28: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Riverside
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Riverside; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Riverside; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Riverside. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Riverside; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-29: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: San Francisco; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Francisco. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-30: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Joaquin
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Joaquin; official county or Continuum of Care context flags drug overdose death rate up 53.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: San Joaquin; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Joaquin. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Joaquin; official county or Continuum of Care context flags drug overdose death rate up 53.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-31: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Santa Clara
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Santa Clara; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Santa Clara. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-32: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Solano
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Solano; official county or Continuum of Care context flags homelessness services count up 28.3%, drug overdose death rate up 67.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Solano; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Solano. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Solano; official county or Continuum of Care context flags homelessness services count up 28.3%, drug overdose death rate up 67.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-33: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Trinity
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Trinity; official county or Continuum of Care context flags drug overdose death rate up 49.8%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Trinity; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Trinity. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Trinity; official county or Continuum of Care context flags drug overdose death rate up 49.8%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-34: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Tulare
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Tulare; official county or Continuum of Care context flags drug overdose death rate up 88.4%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E18`, `E19`.
- When/where: place: Tulare; subject: Behavioral Health Services Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Tulare. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Tulare; official county or Continuum of Care context flags drug overdose death rate up 88.4%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-35: CRI-Help Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: CRI-Help Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-36: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Alameda; official county or Continuum of Care context flags drug overdose death rate up 39.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: Alameda; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Alameda. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Alameda; official county or Continuum of Care context flags drug overdose death rate up 39.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-37: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-38: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: Orange; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Orange. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-39: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Diego
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: San Diego; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Diego. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-40: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: San Francisco; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Francisco. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-41: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Mateo
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Mateo; official county or Continuum of Care context flags homelessness services count up 5.1%, drug overdose death rate up 29.7%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: San Mateo; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Mateo. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Mateo; official county or Continuum of Care context flags homelessness services count up 5.1%, drug overdose death rate up 29.7%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-42: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Santa Clara
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: Santa Clara; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Santa Clara. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-43: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Ventura
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Ventura; official county or Continuum of Care context flags drug overdose death rate up 70.3%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E18`, `E19`.
- When/where: place: Ventura; subject: HealthRIGHT 360 Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Ventura. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Ventura; official county or Continuum of Care context flags drug overdose death rate up 70.3%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-44: Social Model Recovery Systems Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: Social Model Recovery Systems Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-45: Social Model Recovery Systems Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E18`, `E19`.
- When/where: place: Orange; subject: Social Model Recovery Systems Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Orange. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-46: Tarzana Treatment Centers Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Los Angeles; subject: Tarzana Treatment Centers Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Los Angeles. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-47: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Contra Costa
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Contra Costa; subject: WestCare California Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Contra Costa. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-48: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Fresno; subject: WestCare California Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Fresno. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-49: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Kern
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Kern; subject: WestCare California Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Kern. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-50: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Kings
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Kings; official county or Continuum of Care context flags drug overdose death rate up 27.8%, violent crime count up 11.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: Kings; subject: WestCare California Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: Kings. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Kings; official county or Continuum of Care context flags drug overdose death rate up 27.8%, violent crime count up 11.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-51: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Diego
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E18`, `E19`.
- When/where: place: San Diego; subject: WestCare California Inc Evidence: `E18`, `E19`.
- Why this row is here: Medium Spend-versus-results screen matched the implemented check: County outcome movement and entity spending context: San Diego. Source status: observed_contextual_join. Evidence: `E18`, `E19`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`, `E19`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue. Evidence: `E18`, `E19`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E18`, `E19`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

### Data gap Rows

#### Data gap-1: HealthRIGHT 360 - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: 2023. Evidence: `E12`.
- When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
- Why this row is here: Data gap Financial growth screen matched the implemented check: Year-over-year total revenue growth. Source status: missing_source_or_field. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: 2023. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-2: Case-wide - License/adverse-action history

- Test: California Department of Health Care Services adverse-action page machine readability
- What CalDS found: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run. Evidence: `E18`.
- When/where: subject: Case-wide Evidence: `E18`.
- Why this row is here: Data gap License/adverse-action history screen matched the implemented check: California Department of Health Care Services adverse-action page machine readability. Source status: non_machine_readable_source. Evidence: `E18`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`.
- System opinion: CalDS flags this as a data blocker because California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E18`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Archive the pages and pursue a row export or page-specific parser before ranking probation, suspension, revocation, or NOV history. Evidence: `E18`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Existing California Department of Health Care Services Active/Closed facility status remains available, but it is not the same as adverse-action history.

#### Data gap-3: Behavioral Health Services Inc - Off-scope activity

- Test: Retrieved website/service-page keyword screen
- What CalDS found: No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Evidence: risk-matrix source-gap row.
- When/where: subject: Behavioral Health Services Inc Evidence: risk-matrix source-gap row.
- Why this row is here: Data gap Off-scope activity screen matched the implemented check: Retrieved website/service-page keyword screen. Source status: missing_source. Evidence: risk-matrix source-gap row.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a data blocker because No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Add official-site pages and social/traffic sources before judging public messaging or scope alignment. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Absence of a retrieved page is not evidence that off-scope activity exists or does not exist.

#### Data gap-4: CRI-Help Inc - Off-scope activity

- Test: Retrieved website/service-page keyword screen
- What CalDS found: No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Evidence: risk-matrix source-gap row.
- When/where: subject: CRI-Help Inc Evidence: risk-matrix source-gap row.
- Why this row is here: Data gap Off-scope activity screen matched the implemented check: Retrieved website/service-page keyword screen. Source status: missing_source. Evidence: risk-matrix source-gap row.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a data blocker because No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Add official-site pages and social/traffic sources before judging public messaging or scope alignment. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Absence of a retrieved page is not evidence that off-scope activity exists or does not exist.

#### Data gap-5: Phoenix Houses Of California Inc - Off-scope activity

- Test: Retrieved website/service-page keyword screen
- What CalDS found: No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Evidence: risk-matrix source-gap row.
- When/where: subject: Phoenix Houses Of California Inc Evidence: risk-matrix source-gap row.
- Why this row is here: Data gap Off-scope activity screen matched the implemented check: Retrieved website/service-page keyword screen. Source status: missing_source. Evidence: risk-matrix source-gap row.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a data blocker because No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Add official-site pages and social/traffic sources before judging public messaging or scope alignment. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Absence of a retrieved page is not evidence that off-scope activity exists or does not exist.

#### Data gap-6: Social Model Recovery Systems Inc - Off-scope activity

- Test: Retrieved website/service-page keyword screen
- What CalDS found: No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Evidence: risk-matrix source-gap row.
- When/where: subject: Social Model Recovery Systems Inc Evidence: risk-matrix source-gap row.
- Why this row is here: Data gap Off-scope activity screen matched the implemented check: Retrieved website/service-page keyword screen. Source status: missing_source. Evidence: risk-matrix source-gap row.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a data blocker because No organization service page was retrieved for this entity, so the run cannot screen web language for voter registration, power building, political action, or similar off-scope terms. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: risk-matrix source-gap row.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Add official-site pages and social/traffic sources before judging public messaging or scope alignment. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Absence of a retrieved page is not evidence that off-scope activity exists or does not exist.

#### Data gap-7: HealthRIGHT 360 - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Evidence: `E12`.
- When/where: subject: HealthRIGHT 360 Evidence: `E12`.
- Why this row is here: Data gap Payroll and wages screen matched the implemented check: Year-over-year salaries, compensation, and benefits growth. Source status: missing_source_or_field. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E12`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E12`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-8: Case-wide - Public attention and traffic

- Test: Social media and website traffic coverage
- What CalDS found: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Evidence: risk-matrix source-gap row.
- When/where: subject: Case-wide Evidence: risk-matrix source-gap row.
- Why this row is here: Data gap Public attention and traffic screen matched the implemented check: Social media and website traffic coverage. Source status: missing_required_attention_sources. Evidence: risk-matrix source-gap row.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: risk-matrix source-gap row.
- System opinion: CalDS flags this as a data blocker because No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: risk-matrix source-gap row.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Add a governed source policy for traffic/social metrics and preserve collection timestamps before using attention patterns as risk proxies. Evidence: risk-matrix source-gap row.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Traffic and social metrics are volatile and can be misleading without source timestamps and normalization.

#### Data gap-9: Tarzana Treatment Centers Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E12`.
- When/where: subject: Tarzana Treatment Centers Inc Evidence: `E12`.
- Why this row is here: Data gap Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: missing_source_or_field. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E12`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E12`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-10: WestCare California Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E12`.
- When/where: subject: WestCare California Inc Evidence: `E12`.
- Why this row is here: Data gap Public-funds concentration screen matched the implemented check: Government grants as share of Form 990 revenue. Source status: missing_source_or_field. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E12`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E12`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-11: HealthRIGHT 360 - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: 2023. Evidence: `E12`.
- When/where: year(s): 2023; subject: HealthRIGHT 360 Evidence: `E12`.
- Why this row is here: Data gap Spending growth screen matched the implemented check: Year-over-year total expense growth. Source status: missing_source_or_field. Evidence: `E12`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E12`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: 2023. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E12`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E12`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-12: Case-wide - Treatment completion

- Test: Direct CalOMS/DATAR treatment completion coverage
- What CalDS found: The California Department of Health Care Services CalOMS/DATAR public page was probed, but this run did not recover a machine-readable provider/county treatment completion table. Evidence: `E18`.
- When/where: subject: Case-wide Evidence: `E18`.
- Why this row is here: Data gap Treatment completion screen matched the implemented check: Direct CalOMS/DATAR treatment completion coverage. Source status: restricted_or_non_machine_readable_source. Evidence: `E18`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E18`.
- System opinion: CalDS flags this as a data blocker because The California Department of Health Care Services CalOMS/DATAR public page was probed, but this run did not recover a machine-readable provider/county treatment completion table. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E18`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Use public reports or a governed data request before judging spend-versus-treatment-completion performance. Evidence: `E18`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: MAT membership and county outcomes are context; direct treatment completion data remains unavailable in this run.

## 8. Evidence Citation Ledger

Use this ledger to move from the readable case file back to source records. The packet-local `E##` labels are reading aids only; internal evidence IDs and checksums preserve replayability.

| Ref | Internal evidence ID | Record ID | Source type | Source URI | Published | Checksum |
| --- | --- | --- | --- | --- | --- | --- |
| `E01` | `evidence_d39a0b2dfe8f87c4` | `socialmodel_2024_990_summary` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/954079133 | 2025-04-14 | `fd0b410985ab61190109d6d137b002114af439a87540aff8fa21741b763cc99b` |
| `E02` | `evidence_aece1a42b50778d4` | `irs_990_xml_tarzana_2023` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_04A.zip#2024_TEOS_XML_04A/202441109349300129_public.xml | 202306 | `26f09caf5665f546653f55980e4115df3826ec22e0a37b56c20ac3aac48a66f4` |
| `E03` | `evidence_b0005eb9cd6c9e16` | `irs_990_xml_manifest_missing_tarzana_2025` | Internal Revenue Service machine-readable filing-data availability manifest | https://apps.irs.gov/pub/epostcard/990/xml/2024/index_2024.csv; https://apps.irs.gov/pub/epostcard/990/xml/2025/index_2025.csv; https://apps.irs.gov/pub/epostcard/990/xml/2026/index_2026.csv | 2025 | `fab9c5b9971e34bc15df238a93e4f956ef26e591c562fc4934e7cae33da6d1cf` |
| `E04` | `evidence_798df5d7a45e0675` | `healthright_2024_irs_990_full_text_fallback` | Rendered Form 990 secondary source | [private source artifact] | 2026-04-24 | `86d71b86de5bad3f587f06518d77a4f6bcd2c82c0d3ef2f16a916b29233c303d` |
| `E05` | `evidence_1b3d32aadc3cc2f2` | `fac_general_2016_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000119575 | 2016-12-21 | `a037c82d24e8e15be68d5f50cd2c96c3b5c6ff7afbccb39150c319f4aea54d55` |
| `E06` | `evidence_67a8fff3ad9e8165` | `fac_findings_filtered_targets` | Federal Audit Clearinghouse findings table | https://app.fac.gov/dissemination/public-data/gsa/full/findings.csv | 2016-present | `814cff32cdf4b21fc65a278cf63763cf7ff35d46bdbcd98be07f8719181f973c` |
| `E07` | `evidence_571faf39d80ecdb3` | `fac_federal_awards_filtered_targets` | Federal Audit Clearinghouse federal awards table | https://app.fac.gov/dissemination/public-data/gsa/full/federal_awards.csv | 2016-present | `29ff42636ec4eb8b779b05617a3e6f55cd8d1c12765f64f9097a2572573aeab0` |
| `E08` | `evidence_e5576db45f2f20ff` | `dhcs_facility_status_socialmodel` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `ae2d69219ae286a1a6e06366a384d70c95268d116849f6096dfeb71478502487` |
| `E09` | `evidence_06396cf5cd604958` | `dhcs_adverse_status_page_manifest` | California Department of Health Care Services adverse-status page manifest | https://www.dhcs.ca.gov/provgovpart/SUD-LCR/Pages/SUS-REV-NOV.aspx | 2025-10-16 | `20071a8d1f771941e1742d883e17ad7ae91759dda2d5cd987ee204e1ce839f25` |
| `E10` | `evidence_67f61e0d157e345b` | `dhcs_adverse_status_source_discovery_gap` | California Department of Health Care Services adverse-status source discovery | [private source artifact] | 2026-04-24 | `ee95326a3e5ed3774442be0a91230e099aa69302d8547b234c6b6cc5de958f60` |
| `E11` | `evidence_f45288bd81080ea1` | `county_monitoring_tarzana_dmh_2022` | County contract or monitoring source | https://file.lacounty.gov/SDSInter/auditor/cmr/1124357_2022-05-13TarzanaTreatmentCentersInc-ADepartmentofMentalHealthProgramServicesProvider-FiscalComplianceReview.pdf | 2022-05-13 | `0d89d6c5f41a01bfb2aa1c4810ff9885bf3aa176f9572c6c5659edc3ba2d67e9` |
| `E12` | `evidence_ec0b74633b49a5bd` | `parsed source dataset` | Parsed Internal Revenue Service dataset | [private source artifact] | 2026-04-24 | `70244e77e1628bc4350642e2d9bf5a5d892fd668867c5605dd8050cbb4b3b0f9` |
| `E13` | `evidence_092248a6e53f7d01` | `parsed source dataset` | Parsed Federal Audit Clearinghouse audit dataset | [private source artifact] | 2026-04-24 | `3dc8c8b88652e2cfeef1697c8d8344df9ed77c512956400f4cc427e1023ba5f1` |
| `E14` | `evidence_8dfb7fc1cb2a75ce` | `parsed source dataset` | Parsed Federal Audit Clearinghouse award dataset | [private source artifact] | 2026-04-24 | `3d9c67fa7d86902b6098d0fe75abd0b7c37d2a96a417a7a5cc0d212e97b8e971` |
| `E15` | `evidence_dfbbcee28e6ef7fa` | `parsed source dataset` | Parsed California Department of Health Care Services status dataset | [private source artifact] | 2026-04-24 | `d27321fe5e710c500940fd57268974e94da44c45850898245b3090494c671629` |
| `E16` | `evidence_0cd635f36c5cc6ee` | `parsed source dataset` | Parsed source document text index | [private source artifact] | 2026-04-24 | `8b0cebf1e444fed4f803fa2e0d9f46421a3dc3bb7ecee282cd74ccba7d877eb5` |
| `E17` | `evidence_bed9b2a3601e5f1a` | `healthright_services` | Organization service page | https://www.healthright360.org/our-services/substance-use-disorder/ | 2025-09-01 | `e561177cb02ad7616f3eaa1a290d677d5d23cfed23b7dd1e41683f090e624eee` |
| `E18` | `evidence_910819e82ade8b13` | `parsed source dataset` | Parsed official outcome source dataset | [private source artifact] | 2026-04-24 | `5e9cf8b9a174e5034846036b88c2d56d7997ce4fa6f700bb689bd27b3c6281cb` |
| `E19` | `evidence_c01d627498d0bbaf` | `parsed source dataset` | Parsed spend-versus-results join | [private source artifact] | 2026-04-24 | `046efc346991cb37451bf185e04819510dc4cc78b8ba85f0f8e74c4e5a4cfb66` |
| `E20` | `evidence_e4140befe06315a5` | `parsed source dataset` | Parsed public statement source dataset | [private source artifact] | 2026-04-24 | `d47eaf90ad8f5ac24d965cf3b2c6ca936ca2d804c5c559a402bf9fd54e12c76c` |
| `E21` | `evidence_c55d81ce9edb821c` | `public_statements_tarzana` | Public statement source | https://www.tarzanatc.org/who-we-are/meet-us/ | 2026-04-24 | `cfadc2eb3629435548b6db1ebeacf0720954221aca6f72f07652ad5a3d107369` |
| `E22` | `evidence_74436d012badbc38` | `fac_general_2016_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000126607 | 2016-12-28 | `0d53b488c9ac250bc85dbae7d8834af7c1018d3174d31b13027a09ad41919f66` |
| `E23` | `evidence_cf74deb80f859ea6` | `fac_general_2017_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000119575 | 2018-01-17 | `d7f4354da7fb07838bb2de44a9c7a93db5b508733bd17b138c1be8b10a7bca54` |
| `E24` | `evidence_9ee7dccbc57e3232` | `fac_general_2017_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000126607 | 2017-12-18 | `5df2e727457f9f5bd6f8140cb79dd59ee15ec26a7e96f08cba81d4511c9f39ea` |
| `E25` | `evidence_9a8d3b4ef26a5cd3` | `fac_general_2018_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000119575 | 2020-01-20 | `2b8e2050a37f228017148d9680a3c879b3708178802af9eac37b048b98662d19` |
| `E26` | `evidence_72994a41439c26e5` | `fac_general_2018_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000126607 | 2018-11-25 | `da1a47333abf216469e16cd6c78c788b571d54a278e33bb4ab1e5d9720653a7c` |
| `E27` | `evidence_1bda3c170555238d` | `fac_general_2019_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000119575 | 2020-04-07 | `735d5863340de2306cb4ec6961e3c3d70eab07fbe0b160cd0deb059ec711f7ff` |
| `E28` | `evidence_b928bbd1ddb21694` | `fac_general_2019_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000126607 | 2019-11-19 | `6c59d97dcc3111b69d1c455066144e72cc454c06ba539baa9057a76d991c0dd3` |
| `E29` | `evidence_d199f104e1da0069` | `fac_general_2020_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000119575 | 2021-01-26 | `2de591919a94b90c01b539f668c7e3eaa1ad2335be62256a51ef460699f6e85a` |
| `E30` | `evidence_95f0661db882b889` | `fac_general_2020_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000126607 | 2021-03-23 | `cc2df604df67a0c46f4b5f0166e3d250622a381262bf68184155712ff3fae0de` |
| `E31` | `evidence_1923174633c65d45` | `fac_general_2021_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-CENSUS-0000119575 | 2022-01-11 | `aa1e7c7a8c2ba264d55d0bb41a5ca0e554d9f4c92b5e572cd50691a403ead11d` |
| `E32` | `evidence_5174c67321c885ca` | `fac_general_2021_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-CENSUS-0000126607 | 2022-03-22 | `f9f775b04edf8e9f13778630647ae6c95ce2151bbca725c18ae8e4c4da88938a` |
| `E33` | `evidence_d521c9e73d2185a4` | `fac_general_2022_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2022-06-CENSUS-0000119575 | 2023-02-24 | `19f33dc6e817fff4e5f21d5adca4bedf0f80cd72c89802367893ebc6463c5686` |
| `E34` | `evidence_45c8905ea4d6167b` | `fac_general_2023_06_gsafac_0000019151` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2023-06-GSAFAC-0000019151 | 2024-01-30 | `e7f38a4e886d8b082932ab21c2e65444ac07d369e5e5cadcc0fe8475333f4919` |
| `E35` | `evidence_0f8c5582dc83fe29` | `fac_general_2023_06_gsafac_0000031913` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2023-06-GSAFAC-0000031913 | 2024-03-29 | `e4d6293f98c2eeb1e4db568f7abb6cd851f2cb909195d0efa518022e21eb37d6` |
| `E36` | `evidence_d3b12a4069d9f688` | `fac_general_2024_06_gsafac_0000354996` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2024-06-GSAFAC-0000354996 | 2025-02-26 | `9ecbeffed3f73ecf961dd9bc2e7b5bceb8e8ca6b964f241972e0b9864377baf0` |
| `E37` | `evidence_24e2bc8fce68505b` | `fac_general_2024_06_gsafac_0000360511` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2024-06-GSAFAC-0000360511 | 2025-04-01 | `a73a61986424b0b17dcca4579eda7cae9156b633632213e8a53699da12391b78` |
| `E38` | `evidence_a8431f7c86e20d6e` | `fac_general_2025_06_gsafac_0000405366` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2025-06-GSAFAC-0000405366 | 2026-03-17 | `9e5792cf5f43762db94c43453a7d15850a07f330037078aca76964398097d277` |
| `E39` | `evidence_47bc5f0f7e587f0b` | `fac_general_2025_06_gsafac_0000408150` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2025-06-GSAFAC-0000408150 | 2026-03-19 | `17c0f1cc4625cbd1551a9f5e17ae95eeb4e24d90833082146e1ae2b57cfbfff9` |
| `E40` | `evidence_a26088d47e77e313` | `irs_990_xml_tarzana_2024` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2025/2025_TEOS_XML_04A.zip#202501089349300500_public.xml | 202406 | `942412fb6adf9900bfa99b5e9ad2a90d8a5c808ca617f5e20fe777b99eb66a0d` |
| `E41` | `evidence_fffcddf99fcc985a` | `irs_990_xml_socialmodel_2023` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_04A.zip#2024_TEOS_XML_04A/202400959349300030_public.xml | 202306 | `166519432478b7b5dddab63e381ca8c982857a3c06400642c076899f2aa42d1d` |
| `E42` | `evidence_162fbb41b9303796` | `irs_990_xml_socialmodel_2024` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2025/2025_TEOS_XML_04A.zip#202541049349301739_public.xml | 202406 | `2b34686e485f72e95224e48254dd52f867e3dbd36e015dbfe9e274ac10a5bb50` |
| `E43` | `evidence_853e83f918b3e832` | `irs_990_xml_socialmodel_2025` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2026/2026_TEOS_XML_03A.zip#202620839349300647_public.xml | 202506 | `fae4a3fde0a52dd64ff63bddc20b60e17772457fd83c204c35b5361da1f4dabe` |
| `E44` | `evidence_3103845eeaaf1e1e` | `fac_general_2016_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000122774 | 2017-03-30 | `f5e2047b989cc608ab685265693a3a272ef88f1d9fc09a59e2f0206ff55cf5fd` |
| `E45` | `evidence_7d07137e6215347a` | `fac_general_2016_06_census_0000124840` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000124840 | 2017-03-29 | `b9c8867a5c503ce9663db8eb84cef2158858618b9c6ab8cc1af268f3c836f19d` |
| `E46` | `evidence_15267c9609bd0e24` | `fac_general_2016_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000124927 | 2017-03-23 | `e50f3dcf0d14ea8adc8a21f653abda5c3019332760defa848499fcedfcfcc8af` |
| `E47` | `evidence_8a03984a666984c3` | `fac_general_2016_06_census_0000246480` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000246480 | 2017-10-10 | `e7cf24f7f1cb54c41ca897b4922c712e32300e0d68153105e7e3c0c7f4614c97` |
| `E48` | `evidence_b4c55f4c7be78aa2` | `fac_general_2017_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000122774 | 2017-12-27 | `7aaba757ba7a09484fba6a1bc5b0f446b6071276e5dfd8967d09af863b43d631` |
| `E49` | `evidence_2f62d1efb55c74cd` | `fac_general_2017_06_census_0000124840` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000124840 | 2018-04-03 | `22d9ff751bdaa68d1301b2249470940a34624d3b4dc872a04c5c324ff1b9d5ce` |
| `E50` | `evidence_a9e2524d337bdf2f` | `fac_general_2017_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000124927 | 2018-04-17 | `41c707a3a83023d24d40dc09d41b293f8524e1e3515cb9a57402a5e72493c1b2` |
| `E51` | `evidence_a734993b9a0b9550` | `fac_general_2018_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000122774 | 2019-01-15 | `484c0c6cd1828940b93fc3606a1baebff609a1800120cdef59244479f32afbbd` |
| `E52` | `evidence_76542a29a75d1445` | `fac_general_2018_06_census_0000124840` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000124840 | 2019-03-26 | `63033a30c23cf12cf5ffaab2c441f9f8bfd87bd52788a73af51f4126925f8b84` |
| `E53` | `evidence_829efba56ad5bfc9` | `fac_general_2018_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000124927 | 2020-01-29 | `670cd36eef99f2404c5563141918e43c22240d849164fdf9abe37446d95249c1` |
| `E54` | `evidence_0fc73ed4a20f8ff0` | `fac_general_2018_06_census_0000247998` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000247998 | 2019-02-28 | `edc3cc5cc200fbd4f9d836d58e6af2597d0c386d579680655c2045cfa9cac409` |
| `E55` | `evidence_33e78d4e762fee4a` | `fac_general_2019_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000122774 | 2019-11-19 | `36fc8ffb0ed42806cd232640702f2c3f4d505a9ca301a746b5ebda05cdbebabd` |
| `E56` | `evidence_f4914e345e90caac` | `fac_general_2019_06_census_0000124840` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000124840 | 2020-03-22 | `e36d3f992067843bdd98a26d5fafecd70bbbdccdd68fc4b77d30b5e9fea44e5f` |
| `E57` | `evidence_2d1c7235a0fc8e02` | `fac_general_2019_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000124927 | 2022-06-28 | `54566b9a36b57d9286fda92071527c595c1294fcd2830c6d27094554da2fe628` |
| `E58` | `evidence_6928435dc9d069c0` | `fac_general_2019_06_census_0000247998` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000247998 | 2020-02-25 | `955a153913df4f828db3a5c8aff8353caf98c2b77c50e796a9a27ff157feb5c4` |
| `E59` | `evidence_ae442ee1b3e80c10` | `fac_general_2019_06_census_0000249434` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000249434 | 2020-04-23 | `b209ab2060aeb431148a1ddedce1a913a8eceac562dbc20c18fcda9f668c57d3` |
| `E60` | `evidence_32bd30befb60976f` | `fac_general_2020_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000122774 | 2021-01-10 | `dec298813131ada2f9fb71f14424654b3d1733bf8ee58f4f2af9561cbb154121` |

### Source Coverage Snapshot

| Source class | Count |
| --- | --- |
| Federal Audit Clearinghouse audit source document | 36 |
| Downloaded Internal Revenue Service Form 990 machine-readable filing data | 5 |
| County contract or monitoring source | 1 |
| California Department of Health Care Services adverse-status source discovery | 1 |
| California Department of Health Care Services adverse-status page manifest | 1 |
| California Department of Health Care Services facility-status row set | 1 |
| Federal Audit Clearinghouse federal awards table | 1 |
| Federal Audit Clearinghouse findings table | 1 |
| Internal Revenue Service machine-readable filing-data availability manifest | 1 |
| Rendered Form 990 secondary source | 1 |
| Internal Revenue Service Form 990 summary | 1 |
| Organization service page | 1 |
| Public statement source | 1 |
| Parsed California Department of Health Care Services status dataset | 1 |
| Parsed Federal Audit Clearinghouse audit dataset | 1 |
| Parsed Federal Audit Clearinghouse award dataset | 1 |
| Parsed Internal Revenue Service dataset | 1 |
| Parsed official outcome source dataset | 1 |
| Parsed source document text index | 1 |
| Parsed public statement source dataset | 1 |
| Parsed spend-versus-results join | 1 |

## 9. Human-Only Next Steps

These actions are outside the current CalDS runtime. They require a human reviewer or authorized records process before any escalation beyond internal review.

1. Open the review packet and verify each priority row against the cited evidence ledger before changing case status.
2. Resolve sentinel caution: Keep audit and Schedule L references as review questions until source documents are checked.
3. Resolve sentinel caution: Keep California Department of Health Care Services status records at facility-level context unless a reviewer confirms entity-level meaning.
4. Resolve sentinel caution: Require reviewer confirmation of current county contract or monitoring status.
5. Resolve sentinel caution: Preserve missing-data caveats in the review packet.
6. Verify raw Internal Revenue Service machine-readable filing data or official return images for revenue, expenses, grants, officer compensation, and year-over-year movement.
7. Open Federal Audit Clearinghouse audit source documents and findings tables to confirm audit year, finding status, federal agency, questioned-cost fields, and management response.
8. Pull California Department of Health Care Services facility license/status history and adverse-status records directly before using facility rows beyond context.
9. Request county contract files, monitoring letters, corrective-action status, deliverables, and provider-level outcome records for the same year window.
10. Benchmark officer and key employee compensation against comparable organizations and verify documented approval procedures.
11. Compare harvested public statements and web pages to homelessness grant scopes, contract restrictions, funding sources, and accounting records; treat statements as context until dollars and scope are linked.

## 10. Artifact References

These are the durable workflow artifacts used by the compiler.

| Artifact | Path |
| --- | --- |
| case_request.json | `[private source artifact] |
| case_scope.json | `[private source artifact] |
| entity_network_analysis.json | `[private source artifact] |
| evidence_analysis.json | `[private source artifact] |
| evidence_bundle.json | `[private source artifact] |
| lead_candidate.json | `[private source artifact] |
| oversight_risk_matrix.json | `[private source artifact] |
| retrieval_plan.json | `[private source artifact] |
| review_decision.json | `[private source artifact] |
| review_packet.json | `[private source artifact] |
| review_packet.md | `[private source artifact] |
| search_hits.json | `[private source artifact] |
| sentinel_decision.json | `[private source artifact] |
| task_case_director.json | `[private source artifact] |
| task_entity_network_analyst.json | `[private source artifact] |
| task_evidence_analyst.json | `[private source artifact] |
| task_lead_scorer.json | `[private source artifact] |
| task_retrieval_strategist.json | `[private source artifact] |
| task_review_packager.json | `[private source artifact] |
| task_sentinel.json | `[private source artifact] |

## 11. Human Review Required

The workflow remains paused. A reviewer must explicitly approve, downgrade, repair, or reject this case before any outside-facing use.
