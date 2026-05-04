# Case Dossier: Live web case: large California recovery and treatment nonprofits

## 1. Executive Snapshot

Bottom line: CalDS screened 7 entities and keeps Phoenix Houses Of California Inc in deep review because the strongest source-backed pattern is spend-versus-results mismatch. Evidence: `E19`, `E20`. The review priority score is 63.91 / 100, source completeness is 0.0 / 100, publication confidence is 0.0 / 100, and the sentinel posture is `DOWNGRADE_FOR_REVIEW`; this is a review priority, not a formal conclusion.

- Case posture: internal possible waste, fraud, abuse, or mismanagement review lead; not a formal finding.
- Entities selected for deep review: Phoenix Houses Of California Inc.
- Main signal pattern: spend-versus-results mismatch.
- Review priority: 63.91 / 100; risk severity: 0.0 / 100; source completeness: 0.0 / 100; publication confidence: 0.0 / 100.
- Score scope: these are case-level scores for this run's evidence bundle. They are not entity-by-entity grades, not probabilities, and not a measure of how polished the report is.
- Workflow state: `AWAITING_HUMAN_REVIEW`. Human decision: `PENDING`. Sentinel posture: `DOWNGRADE_FOR_REVIEW`.

What CalDS found first:

- `E22` Public statement page harvest: WestCare California Inc (Public statement source, 2026-04-24): on addressing social influencers of health and implement homelessness: es building the resiliency of individuals who face barriers including trauma, abuse, chemical dependency, severe behavioral health disorders, developmental disabilities, homelessness, and...
- `E19` Official homelessness outcome source collection (Official outcome source collection, 2026-04-24): Official homelessness outcome source collection. This source collection contains official homelessness outcome measures used for county or Continuum of Care context.
- `E20` Spend-versus-results context source collection (Spend-versus-results source collection, 2026-04-24): Spend-versus-results context source collection. This source collection joins public-funding geography with official outcome movement so reviewers can decide whether provider-specific outcome records are needed.

Why this is on a reviewer's desk:

- CalDS flags Phoenix Houses Of California Inc / Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`. Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- CalDS flags Phoenix Houses Of California Inc / Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`. Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- Source blockers to resolve before stronger ranking: Audit controls, Executive compensation, Facility status, Financial growth; plus 5 other source area(s). These are collection blockers, not adverse findings.

### What The Score Means

- What these scores apply to: the whole compiled case/run and its evidence bundle, not one nonprofit organization by itself.
- Review priority 63.91 / 100: how urgently this case should stay in the review queue after combining risk severity, source-acquisition coverage, and publication confidence.
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
- Immediate reviewer action: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### What This Does Not Prove

- This dossier does not make a formal finding of waste, fraud, or abuse. It identifies possible screening questions and source blockers for human review.
- County or Continuum of Care outcomes are contextual unless provider-attributable outcome records are recovered and linked.
- Homelessness scope-mismatch rows test whether public homelessness funds may have supported activity outside the funded scope; they do not state that the activity is categorically unlawful for a nonprofit.
- Sentinel restrictions remain active: audit_review_signal, facility_status_context_required, county_source_context_required, docket_context_required, missing_data.

## 2. Case In One Page

CalDS screened 7 entities in California for this objective: Using public Form 990 XML for the 2023-2025 tax-period window where available, Federal Audit Clearinghouse audit source documents and award ledgers, California Department of Health Care Services facility-status records, county contract or monitoring records, litigation docket manifests, and organization service-page records, identify reviewer-safe oversight triage signals among large California drug recovery and substance use treatment nonprofits. Keep the result internal, source-cited, and limited to review leads, plus official county or Continuum of Care outcome-series, California Department of Health Care Services capacity/adverse-action metadata, and attributable public statement pages from target entities for contextual spend-versus-results screening. The run selected Phoenix Houses Of California Inc for deeper review using deterministic triage thresholds. The source bundle includes Federal Audit Clearinghouse audit source document (33), Organization service page (10), California Department of Health Care Services facility-status row set (7), Internal Revenue Service Form 990 summary (1) and 18 other source class(es). Evidence references below use short `E##` labels, with full source details in the citation ledger.

The case is not based on how many entries appeared. It is based on these source-backed review reasons:

- Phoenix Houses Of California Inc: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`.
- Phoenix Houses Of California Inc: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`.

Records still needed: Audit controls, Executive compensation, Facility status, Financial growth; plus 5 other source area(s). These gaps are collection blockers, not adverse findings.

Sentinel posture remains `DOWNGRADE_FOR_REVIEW`. The score is a deterministic triage score, not a probability, not a dollar-loss estimate, and not a misconduct conclusion.

## 3. Entity Briefs

These briefs assume the reader has not seen the agent work. Deep-review entities are separated from watchlist or matrix-only entities so the reader can see what CalDS selected for deeper review versus what remains contextual.

### Watchlist And Matrix-Only Entities

These entities have matrix signals or source gaps, but they were not selected for deep forensic review by the implemented triage threshold in this run.

#### Phoenix Houses Of California Inc

Why this entity is in the review set:

CalDS selected Phoenix Houses Of California Inc for watchlist review; it was not selected for deep review by this run because the cited records show spend-versus-results mismatch. The strongest current cited trigger is: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: Phoenix Houses Of California Inc`, provides public service-scope text for Phoenix Houses Of California Inc. Evidence: `E65`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E65` Official service page: Phoenix Houses Of California Inc (Organization service page, 2026-04-26): At Phoenix House California, we take a holistic approach to drug addiction and mental health disorders that focuses on the power of being both proactive and reactive: prevention, early intervention, and recovery services. Understanding the health and safety...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- `E16` Federal Audit Clearinghouse audit summary source collection (California Department of Health Care Services status source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection supports the cited review checks and remains tied to the source ledger for audit traceability.
- 3 additional matched source item(s) appear in the citation ledger.

What the records show:

- No high or medium possible waste, fraud, abuse, or mismanagement review question was resolved for this entity from the current matrix.
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%; Stanislaus: drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window. Source: risk matrix rows for this entity.

#### Behavioral Health Services Inc

Why this entity is in the review set:

CalDS selected Behavioral Health Services Inc for watchlist review; it was not selected for deep review by this run because the cited records show spend-versus-results mismatch. The strongest current cited trigger is: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: Behavioral Health Services Inc`, provides public service-scope text for Behavioral Health Services Inc. Evidence: `E62`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E62` Official service page: Behavioral Health Services Inc (Organization service page, 2026-04-26): BHS programming attempts to address these issues and problems related to substance abuse, mental health, related stigma, health disparities, homelessness, and helping the elderly stay in their homes. Services include drug free transitional housing, older...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- `E13` Internal Revenue Service Form 990 summary source collection (Internal Revenue Service source collection, 2026-04-24): Internal Revenue Service Form 990 summary source collection. This source collection contains Form 990 fields used for revenue, government-grant share, expense, payroll, and compensation checks.
- 16 additional matched source item(s) appear in the citation ledger.

What the records show:

- No high or medium possible waste, fraud, abuse, or mismanagement review question was resolved for this entity from the current matrix.
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alpine: homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%; Amador: homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%; Calaveras: homelessness services count up 7.6%, drug overdose death rate up 24.3%; Contra Costa: drug overdose death rate up 43.5%; plus 12 additional matched county context(s). Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window. Source: risk matrix rows for this entity.

#### CRI-Help Inc

Why this entity is in the review set:

CalDS selected CRI-Help Inc for watchlist review; it was not selected for deep review by this run because the cited records show spend-versus-results mismatch. The strongest current cited trigger is: CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: CRI-Help Inc`, provides public service-scope text for CRI-Help Inc. Evidence: `E63`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E63` Official service page: CRI-Help Inc (Organization service page, 2026-04-26): residential treatment program is designed to provide a safe, structured, and supportive environment for those seeking to break free from substance abuse and embark on a journey toward lasting recovery. A Comprehensive Approach to Recovery At CRI-Help, we...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- `E08` Federal Audit Clearinghouse audit summary source collection (California Department of Health Care Services facility-status row set, 2026-04-15): California Department of Health Care Services facility-status cross-check for CRI-Help Inc. Licensing and Certification Division status rows matched: 13 Active rows: 4 Closed rows: 9 Statuses observed: Active, Closed The separate California Department of...
- 2 additional matched source item(s) appear in the citation ledger.

What the records show:

- No high or medium possible waste, fraud, abuse, or mismanagement review question was resolved for this entity from the current matrix.
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window. Source: risk matrix rows for this entity.

#### HealthRIGHT 360

Why this entity is in the review set:

CalDS selected HealthRIGHT 360 for watchlist review; it was not selected for deep review by this run because the cited records show possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. Evidence: public_statements_healthright, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `HealthRIGHT 360 substance use disorder services`, identifies HealthRIGHT 360 with substance use disorder treatment. Evidence: `E61`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E61` HealthRIGHT 360 substance use disorder services (Organization service page, 2025-09-01): HealthRIGHT 360 describes a full continuum of substance use disorder treatment services for adults, youth, and families, including outpatient, residential, custody-based, sober living environments, and case management programs. The organization describes...
- `E64` Official service page: HealthRIGHT 360 (Organization service page, 2026-04-26): HealthRIGHT 360 provides a full continuum of substance use disorder treatment services to adults, youth, and families, including outpatient, residential, custody-based, sober living environments, and case management programs. services are based upon...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- 18 additional matched source item(s) appear in the citation ledger.

What the records show:

- Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. (organization named in the cited source: HealthRIGHT 360; evidence public_statements_healthright.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda: drug overdose death rate up 39.9%; Los Angeles: drug overdose death rate up 69.6%; Orange: drug overdose death rate up 73.2%; San Diego: drug overdose death rate up 72.5%; plus 4 additional matched county context(s). This run did not parse entity-level spending, revenue, or grant growth for that comparison. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review. Evidence: public_statements_healthright, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions. Source: risk matrix rows for this entity.

#### Social Model Recovery Systems Inc

Why this entity is in the review set:

CalDS selected Social Model Recovery Systems Inc for watchlist review; it was not selected for deep review by this run because the cited records show spend-versus-results mismatch. The strongest current cited trigger is: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: Social Model Recovery Systems Inc`, provides public service-scope text for Social Model Recovery Systems Inc. Evidence: `E66`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E66` Official service page: Social Model Recovery Systems Inc (Organization service page, 2026-04-26): Official Social Model Recovery Systems Programs/Services Social Model Recovery Systems, Inc. says it has provided adult treatment services since 1986. The describes a continuum of care from residential treatment at River Community to the Wellness Center; day...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- `E15` Federal Audit Clearinghouse award source collection (Federal Audit Clearinghouse award source collection, 2026-04-24): Federal Audit Clearinghouse award source collection. This source collection contains federal audit award totals used to understand public-funding exposure.
- 6 additional matched source item(s) appear in the citation ledger.

What the records show:

- No high or medium possible waste, fraud, abuse, or mismanagement review question was resolved for this entity from the current matrix.
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%; Orange: drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window. Source: risk matrix rows for this entity.

#### Tarzana Treatment Centers Inc

Why this entity is in the review set:

CalDS selected Tarzana Treatment Centers Inc for watchlist review; it was not selected for deep review by this run because the cited records show possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Configured public statement pages were harvested. Matched review terms: advocacy. Evidence: public_statements_tarzana, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: Tarzana Treatment Centers Inc`, provides public service-scope text for Tarzana Treatment Centers Inc. Evidence: `E18`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E68` Tarzana Treatment Centers substance use disorder services (Organization service page, 2026-02-01): Tarzana Treatment Centers describes substance use disorder treatment, medical detoxification, medical care, mental health care, alcohol and drug counseling, individual and group therapy, and recreational therapy. The lists Southern California locations in Los...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- `E13` Internal Revenue Service Form 990 summary source collection (Internal Revenue Service source collection, 2026-04-24): Internal Revenue Service Form 990 summary source collection. This source collection contains Form 990 fields used for revenue, government-grant share, expense, payroll, and compensation checks.
- 16 additional matched source item(s) appear in the citation ledger.

What the records show:

- Public statements: Configured public statement pages were harvested. Matched review terms: advocacy. (organization named in the cited source: Tarzana Treatment Centers Inc; evidence public_statements_tarzana.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review. Evidence: public_statements_tarzana, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions. Source: risk matrix rows for this entity.

#### WestCare California Inc

Why this entity is in the review set:

CalDS selected WestCare California Inc for watchlist review; it was not selected for deep review by this run because the cited records show possible scope-mismatch signals, and spend-versus-results mismatch. The strongest current cited trigger is: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. Evidence: `E22`, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What the organization says it does:

The recovered official service page, `Official service/program page harvest: WestCare California Inc`, provides public service-scope text for WestCare California Inc. Evidence: `E67`. This source is used for public service-scope context only; it does not verify outcomes, spending, or compliance.

Key retrieved records:

- `E67` Official service page: WestCare California Inc (Organization service page, 2026-04-26): WestCare California has been providing an opportunity for individuals to lead fuller, richer lives. team of multi-cultural, experienced and credentialed staff is dedicated to providing the best care to everyone who enters doors. goal is to Uplift the Human...
- `E69` WestCare California treatment and rehabilitation services (Organization service page, 2026-04-19): WestCare California describes substance use and co-occurring treatment services, including adult residential and outpatient services in Fresno and Bakersfield, adolescent outpatient programs in Hanford and Corcoran, residential services in Richmond,...
- `E14` Federal Audit Clearinghouse audit summary source collection (Federal Audit Clearinghouse audit source collection, 2026-04-24): Federal Audit Clearinghouse audit summary source collection. This source collection contains federal audit fields used to check material weaknesses, internal-control findings, low-risk status, and audit finding counts.
- 5 additional matched source item(s) appear in the citation ledger.

What the records show:

- Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. (organization named in the cited source: WestCare California Inc; evidence `E22`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Contra Costa: drug overdose death rate up 43.5%; Fresno: drug overdose death rate up 56.9%; Kern: drug overdose death rate up 71.9%; Kings: drug overdose death rate up 27.8%, violent crime count up 11.9%; plus 1 additional matched county context(s). Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This is a review signal, not provider attribution. Evidence `E19`, `E20`.
- Source gaps that limit judgment: Audit controls, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why CalDS flagged it:

Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review. Evidence: `E22`, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Next human step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions. Source: risk matrix rows for this entity.

### Case-wide Source Gaps

These are not nonprofit organization-specific findings. They are run-level blockers that limit how strongly CalDS can rank or clear the case.

- Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
  Evidence: missing-source marker. Human action: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.


## 4. Methodology, Guardrails, and Source Status

### Triage Gate

- This run does not include the new top-15 triage artifact. Rerun the workflow to populate the triage gate.

### Acquisition and Completion Guard

- This run does not include a completion guard artifact. Rerun the workflow before treating the dossier as complete.

### Plain-Language Source Glossary

- Federal Audit Clearinghouse: federal audit report, findings, and award data used for audit-control review.
- California Department of Health Care Services: California licensing, facility-status, and adverse-action source context.
- Internal Revenue Service: federal tax-return source for Form 990 revenue, expense, grant, and compensation fields.
- Continuum of Care: regional homelessness-services geography used in official outcome datasets.
- Homeless Data Integration System: California homelessness data warehouse used for official outcome context.
- Federal Housing Finance Agency Office of Inspector General: federal inspector-general source used for enforcement or prosecution press releases.
- Employer Identification Number: federal tax identifier used to match nonprofit records.
- Machine-readable filing data: structured source files used for source-system returns and extracts.
- Source document: original audit, tax-return, or records file used as the controlling record.

### Score Components and Sentinel

Lead statement: Retrieved records show a reviewable oversight signal for Tarzana Treatment Centers Inc, HealthRIGHT 360 focused on recovery, services, treatment.

Review priority score: 63.91 / 100

Interpretation: reviewable triage lead with meaningful source coverage, but caveats or missing data prevent upgrade without human verification.

The score is deterministic triage priority, not a probability, not a dollar loss estimate, and not a conclusion. CalDS now splits the score into risk severity, source completeness, open gap burden, contradiction burden, and publication confidence so a strong review signal is not confused with publication readiness.

| Field | Value |
| --- | --- |
| Risk severity score | 0.0 / 100 |
| Source completeness score | 0.0 / 100 |
| Publication confidence score | 0.0 / 100 |
| Support count | 69 |
| Average relevance | 0.683 |
| Source diversity | 22 |
| Hard entity links | 21 |
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
| Flags | audit_review_signal, facility_status_context_required, county_source_context_required, docket_context_required, missing_data |

Sentinel repair or caution items:

- Keep audit and Schedule L references as review questions until source documents are checked.
- Keep California Department of Health Care Services status records at facility-level context unless a reviewer confirms entity-level meaning.
- Require reviewer confirmation of current county contract or monitoring status.
- Treat docket pointers as follow-up tasks until the docket is directly verified.
- Preserve missing-data caveats in the review packet.

### Case Context

- Case ID: `live_ca_recovery_ngos_2026_04_24`
- Jurisdiction: California
- Objective: Using public Form 990 XML for the 2023-2025 tax-period window where available, Federal Audit Clearinghouse audit source documents and award ledgers, California Department of Health Care Services facility-status records, county contract or monitoring records, litigation docket manifests, and organization service-page records, identify reviewer-safe oversight triage signals among large California drug recovery and substance use treatment nonprofits. Keep the result internal, source-cited, and limited to review leads, plus official county or Continuum of Care outcome-series, California Department of Health Care Services capacity/adverse-action metadata, and attributable public statement pages from target entities for contextual spend-versus-results screening.
- Named entities: Tarzana Treatment Centers Inc, HealthRIGHT 360, WestCare California Inc, Behavioral Health Services Inc, CRI-Help Inc, Social Model Recovery Systems Inc, Phoenix Houses Of California Inc
- Allowed source types: Internal Revenue Service Form 990 summary, Downloaded Internal Revenue Service Form 990 machine-readable filing data, Internal Revenue Service machine-readable filing-data availability manifest, Rendered Form 990 secondary source, Federal Audit Clearinghouse audit summary, Federal Audit Clearinghouse audit source document, Federal Audit Clearinghouse findings records, Federal Audit Clearinghouse federal awards records, California Department of Health Care Services page, California Department of Health Care Services facility-status row set, California Department of Health Care Services adverse-status page manifest, California Department of Health Care Services adverse-status source discovery, County contract or monitoring source, Court docket search manifest, Internal Revenue Service source collection, Federal Audit Clearinghouse audit source collection, Federal Audit Clearinghouse award source collection, California Department of Health Care Services status source collection, Parsed source document text index, Organization service page, Official outcome source collection, Spend-versus-results source collection, Public statement source collection, Public statement source. Source: case request.
- Review packet: `[private source artifact]

## 5. Case Dossier Orientation

Status: `PENDING` human review required

This dossier compiles existing CalDS workflow artifacts into a human-readable case file. It is an internal possible waste, fraud, abuse, or mismanagement screening aid, not a formal finding or outside-facing conclusion.

Every substantive row below is tied to a risk indicator, evidence item, source URI, checksum, or durable artifact path. Raw source documents and canonical records remain controlling.

Dossier mode: downgraded internal review dossier with caveats preserved

## 6. Evidence Detail By Entity

This section preserves the system opinion and source-fact detail behind the briefing memo. It remains an internal possible waste, fraud, abuse, or mismanagement screening opinion, not a formal allegation or outside-facing conclusion.

### Behavioral Health Services Inc

CalDS keeps Behavioral Health Services Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E19`, `E20`.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Alpine; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Alpine. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Amador; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Amador. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Calaveras; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Calaveras. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

4. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Contra Costa; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Contra Costa. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Fresno; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Fresno. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spend-versus-results: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### CRI-Help Inc

CalDS keeps CRI-Help Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: CRI-Help Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

4. Data gap - Facility status: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
   - Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: CRI-Help Inc Evidence: `E16`, `E16`.
   - Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

5. Data gap - Financial growth: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

6. Data gap - Off-scope activity: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Case-wide

CalDS keeps Case-wide in the dossier for watchlist source-gap review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E19`, `E20`.

Specific findings that drove the flag:

1. Data gap - Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Evidence: missing-source marker.
   - Relevant time and place: organization named in the cited source: Case-wide Evidence: missing-source marker.
   - Why CalDS included it: CalDS included this item because the public attention and traffic review found source data relevant to: Social media and website traffic coverage. Required traffic, social-media, or public-attention sources were not captured for this run. Evidence: missing-source marker.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: missing-source marker.
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

2. Low - Spend-versus-results: Official outcome series are ingested and joined into 35 entity/county context rows. These rows remain contextual and are not provider-attributable results. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: organization named in the cited source: Case-wide Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: Outcome-denominator coverage for homelessness, drug use, crime, and treatment results. The supporting source data was present in this run. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### HealthRIGHT 360

CalDS keeps HealthRIGHT 360 in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: public_statements_healthright, `E19`, `E20`.

Specific findings that drove the flag:

1. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. Evidence: public_statements_healthright.
   - Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: public_statements_healthright.
   - Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: public_statements_healthright.
   - Source access: https://www.healthright360.org/about/staff-and-board/ Evidence: public_statements_healthright.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

2. Medium - Spend-versus-results: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Alameda; official county or Continuum of Care context flags drug overdose death rate up 39.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Alameda; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Alameda. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Medium - Spend-versus-results: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

4. Medium - Spend-versus-results: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Orange; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Orange. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spend-versus-results: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: San Diego; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Diego. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spend-versus-results: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: San Francisco; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Francisco. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Phoenix Houses Of California Inc

CalDS keeps Phoenix Houses Of California Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

Specific findings that drove the flag:

1. High - Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - Spend-versus-results: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Stanislaus; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Stanislaus. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

5. Data gap - Facility status: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
   - Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E16`, `E16`.
   - Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

6. Data gap - Financial growth: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Social Model Recovery Systems Inc

CalDS keeps Social Model Recovery Systems Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - Spend-versus-results: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Orange; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Orange. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

5. Data gap - Facility status: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
   - Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E16`, `E16`.
   - Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

6. Data gap - Financial growth: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Tarzana Treatment Centers Inc

CalDS keeps Tarzana Treatment Centers Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: public_statements_tarzana, `E19`, `E20`, `E14`, `E15`, `E13`, `E16`.

Specific findings that drove the flag:

1. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy. Evidence: public_statements_tarzana.
   - Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: public_statements_tarzana.
   - Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: public_statements_tarzana.
   - Source access: https://www.tarzanatc.org/who-we-are/meet-us/ Evidence: public_statements_tarzana.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

2. Medium - Spend-versus-results: Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

5. Data gap - Facility status: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
   - Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E16`, `E16`.
   - Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

6. Data gap - Financial growth: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
   - Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
   - Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### WestCare California Inc

CalDS keeps WestCare California Inc in the dossier for watchlist review; it was not selected for deep review by this run. The source-backed reasons are listed below. Evidence: `E22`, `E19`, `E20`.

Specific findings that drove the flag:

1. Medium - Public statements: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. Evidence: `E22`, `E22`.
   - Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E22`, `E22`.
   - Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: `E22`, `E22`.
   - Source access: https://westcare.com/leadership/ Evidence: `E22`, `E22`.
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

2. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Contra Costa; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Contra Costa. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Fresno; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Fresno. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

4. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Kern; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Kern. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in Kings; official county or Continuum of Care context flags drug overdose death rate up 27.8%, violent crime count up 11.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: Kings; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Kings. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spend-versus-results: WestCare California Inc has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Relevant time and place: place named in the cited source: San Diego; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Diego. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.


## 7. Flagged Review Matrix

Methodology: Waste, fraud, and abuse risk-screening matrix generated from parsed Internal Revenue Service Form 990, Federal Audit Clearinghouse, California Department of Health Care Services facility-status, county/document index, and retrieved service-page records. The matrix tests observable risk proxies: year-over-year financial growth, spending growth, public-funds concentration, executive compensation, payroll scale, political/lobbying indicators, audit-control flags, award concentration, facility closure patterns, off-scope web-language checks, official county or Continuum of Care outcome context, and remaining provider-attributable outcome gaps.

Risk scale: Indicator levels: High=immediate reviewer follow-up, Medium=review queue, Low=context only, Data gap=required source missing or not parsed. Levels are screening priorities, not findings or allegations.

| Risk level | Count |
| --- | --- |
| High | 2 |
| Medium | 36 |
| Data gap | 57 |
| Low | 12 |

High and medium items are review priorities. Data-gap items are source-collection blockers. Low items are not expanded here unless they are needed for context.

### High Priority Items

#### High-1: Phoenix Houses Of California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### High-2: Phoenix Houses Of California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Stanislaus
- What CalDS found: Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Stanislaus; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Stanislaus. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Phoenix Houses Of California Inc has California Department of Health Care Services facility footprint in Stanislaus; official county or Continuum of Care context flags drug overdose death rate up 78.7%. Parsed entity growth context in this run: spending=+53. 4%, revenue=+7.4%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

### Medium Priority Items

#### Medium-1: HealthRIGHT 360 - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. Evidence: public_statements_healthright.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: public_statements_healthright.
- Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: public_statements_healthright.
- Source access: https://www.healthright360.org/about/staff-and-board/ Evidence: public_statements_healthright.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy, public affairs, criminal justice, equity. This source fact fits the public statements review question and should stay in the active review queue. Evidence: public_statements_healthright.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: public_statements_healthright.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-2: Tarzana Treatment Centers Inc - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy. Evidence: public_statements_tarzana.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: public_statements_tarzana.
- Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: public_statements_tarzana.
- Source access: https://www.tarzanatc.org/who-we-are/meet-us/ Evidence: public_statements_tarzana.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy. This source fact fits the public statements review question and should stay in the active review queue. Evidence: public_statements_tarzana.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: public_statements_tarzana.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-3: WestCare California Inc - Public statements

- Test: Official/public page term screen
- What CalDS found: Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. Evidence: `E22`, `E22`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E22`, `E22`.
- Why CalDS included it: CalDS included this item because the public statements review found source data relevant to: Official/public page term screen. The supporting source data was present in this run. Evidence: `E22`, `E22`.
- Source access: https://westcare.com/leadership/ Evidence: `E22`, `E22`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Configured public statement pages were harvested. Matched review terms: advocacy, criminal justice. This source fact fits the public statements review question and should stay in the active review queue. Evidence: `E22`, `E22`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If terms are present, inspect the archived page context, speaker attribution, funding restrictions, and cost allocation; statements alone do not establish spending outside scope. Evidence: `E22`, `E22`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: Website language is context only and must be tied to funding/expenditure records before escalation.

#### Medium-4: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Alpine
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Alpine; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Alpine. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Alpine; official county or Continuum of Care context flags homelessness services count up 17.7%, violent crime count up 33.3%, property crime count up 110.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-5: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Amador
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Amador; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Amador. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Amador; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 13.6%, violent crime count up 26.7%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-6: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Calaveras
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Calaveras; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Calaveras. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Calaveras; official county or Continuum of Care context flags homelessness services count up 7.6%, drug overdose death rate up 24.3%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-7: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Contra Costa
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Contra Costa; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Contra Costa. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-8: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Fresno; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Fresno. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-9: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-10: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Madera
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Madera; official county or Continuum of Care context flags drug overdose death rate up 42.4%, property crime count up 5.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Madera; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Madera. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Madera; official county or Continuum of Care context flags drug overdose death rate up 42.4%, property crime count up 5.0%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-11: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Napa
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Napa; official county or Continuum of Care context flags drug overdose death rate up 52.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Napa; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Napa. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Napa; official county or Continuum of Care context flags drug overdose death rate up 52.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-12: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Orange; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Orange. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-13: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Riverside
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Riverside; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Riverside; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Riverside. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Riverside; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-14: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Francisco; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Francisco. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-15: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Joaquin
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Joaquin; official county or Continuum of Care context flags drug overdose death rate up 53.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Joaquin; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Joaquin. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in San Joaquin; official county or Continuum of Care context flags drug overdose death rate up 53.9%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-16: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Santa Clara
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Santa Clara; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Santa Clara. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-17: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Solano
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Solano; official county or Continuum of Care context flags homelessness services count up 28.3%, drug overdose death rate up 67.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Solano; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Solano. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Solano; official county or Continuum of Care context flags homelessness services count up 28.3%, drug overdose death rate up 67.2%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-18: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Trinity
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Trinity; official county or Continuum of Care context flags drug overdose death rate up 49.8%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Trinity; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Trinity. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Trinity; official county or Continuum of Care context flags drug overdose death rate up 49.8%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-19: Behavioral Health Services Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Tulare
- What CalDS found: Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Tulare; official county or Continuum of Care context flags drug overdose death rate up 88.4%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Tulare; organization named in the cited source: Behavioral Health Services Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Tulare. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Behavioral Health Services Inc has California Department of Health Care Services facility footprint in Tulare; official county or Continuum of Care context flags drug overdose death rate up 88.4%. Parsed entity growth context in this run: spending=+7. 8%, revenue=+12.3%, government grants=-19.5%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-20: CRI-Help Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: CRI-Help Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because CRI-Help Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 9%, revenue=+123.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-21: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Alameda; official county or Continuum of Care context flags drug overdose death rate up 39.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Alameda; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Alameda. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Alameda; official county or Continuum of Care context flags drug overdose death rate up 39.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-22: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-23: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Orange; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Orange. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-24: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Diego
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Diego; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Diego. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-25: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Francisco; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Francisco. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Francisco; official county or Continuum of Care context flags drug overdose death rate up 37.9%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-26: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: San Mateo
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Mateo; official county or Continuum of Care context flags homelessness services count up 5.1%, drug overdose death rate up 29.7%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Mateo; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Mateo. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in San Mateo; official county or Continuum of Care context flags homelessness services count up 5.1%, drug overdose death rate up 29.7%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-27: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Santa Clara
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Santa Clara; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Santa Clara. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Santa Clara; official county or Continuum of Care context flags drug overdose death rate up 48.2%, violent crime count up 12.5%, property crime count up 13.1%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-28: HealthRIGHT 360 - Spend-versus-results

- Test: County outcome movement and entity spending context: Ventura
- What CalDS found: HealthRIGHT 360 has California Department of Health Care Services facility footprint in Ventura; official county or Continuum of Care context flags drug overdose death rate up 70.3%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Ventura; organization named in the cited source: HealthRIGHT 360 Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Ventura. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because HealthRIGHT 360 has California Department of Health Care Services facility footprint in Ventura; official county or Continuum of Care context flags drug overdose death rate up 70.3%. This run did not parse entity-level spending, revenue, or grant growth for that comparison. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-29: Social Model Recovery Systems Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-30: Social Model Recovery Systems Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Orange
- What CalDS found: Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Orange; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Orange. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Social Model Recovery Systems Inc has California Department of Health Care Services facility footprint in Orange; official county or Continuum of Care context flags drug overdose death rate up 73.2%. Parsed entity growth context in this run: spending=+15. 8%, revenue=+26.0%, government grants=+26.3%. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-31: Tarzana Treatment Centers Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Los Angeles; organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Los Angeles. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Tarzana Treatment Centers Inc has California Department of Health Care Services facility footprint in Los Angeles; official county or Continuum of Care context flags drug overdose death rate up 69.6%. Parsed entity growth context in this run: spending=+14. 4%, revenue=+37.5%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-32: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Contra Costa
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Contra Costa; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Contra Costa. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Contra Costa; official county or Continuum of Care context flags drug overdose death rate up 43.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-33: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Fresno; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Fresno. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Fresno; official county or Continuum of Care context flags drug overdose death rate up 56.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-34: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Kern
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Kern; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Kern. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Kern; official county or Continuum of Care context flags drug overdose death rate up 71.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-35: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: Kings
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in Kings; official county or Continuum of Care context flags drug overdose death rate up 27.8%, violent crime count up 11.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: Kings; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: Kings. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in Kings; official county or Continuum of Care context flags drug overdose death rate up 27.8%, violent crime count up 11.9%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

#### Medium-36: WestCare California Inc - Spend-versus-results

- Test: County outcome movement and entity spending context: San Diego
- What CalDS found: WestCare California Inc has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. Evidence: `E19`, `E20`, `E19`, `E20`.
- Relevant time and place: place named in the cited source: San Diego; organization named in the cited source: WestCare California Inc Evidence: `E19`, `E20`, `E19`, `E20`.
- Why CalDS included it: CalDS included this item because the spend-versus-results review found source data relevant to: County outcome movement and entity spending context: San Diego. The supporting source data came from a contextual join and still needs provider-specific review. Evidence: `E19`, `E20`, `E19`, `E20`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E19`, `E20`, `E19`, `E20`.
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because WestCare California Inc has California Department of Health Care Services facility footprint in San Diego; official county or Continuum of Care context flags drug overdose death rate up 72.5%. Parsed entity growth context in this run: spending=+9. 1%, revenue=+9.3%, government grants=not parsed. This source fact fits the spend-versus-results review question and should stay in the active review queue. Evidence: `E19`, `E20`, `E19`, `E20`.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, facility footprint, contract geography, and provider-specific outcome records before drawing any conclusion. Evidence: `E19`, `E20`, `E19`, `E20`.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: Outcome rows are county or Continuum of Care-level context; they are not provider-attributable results.
- Caveat: Homelessness SPM rows are Continuum of Care-grain and matched by county-name text where possible.
- Caveat: Drug overdose rows use county-level public health indicators, not provider client outcomes.

### Data gap Priority Items

#### Data gap-1: Behavioral Health Services Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-2: CRI-Help Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-3: HealthRIGHT 360 - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-4: Phoenix Houses Of California Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-5: Social Model Recovery Systems Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-6: Tarzana Treatment Centers Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-7: WestCare California Inc - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Evidence: `E14`, `E15`, `E14`, `E15`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E14`, `E15`, `E14`, `E15`.
- Why CalDS included it: CalDS included this item because the audit controls review found source data relevant to: Federal Audit Clearinghouse control flags and findings. The source needed to complete this check was missing. Evidence: `E14`, `E15`, `E14`, `E15`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E14`, `E15`, `E14`, `E15`.
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E14`, `E15`, `E14`, `E15`.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking. Evidence: `E14`, `E15`, `E14`, `E15`.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-8: Behavioral Health Services Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-9: CRI-Help Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-10: HealthRIGHT 360 - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-11: Phoenix Houses Of California Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-12: Social Model Recovery Systems Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-13: Tarzana Treatment Centers Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-14: WestCare California Inc - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the executive compensation review found source data relevant to: Highest officer/key employee compensation from Form 990 Part VII. A parser field or source field needed for this check was missing, so the item remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-15: Behavioral Health Services Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Behavioral Health Services Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-16: CRI-Help Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: CRI-Help Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-17: HealthRIGHT 360 - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: HealthRIGHT 360 Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-18: Phoenix Houses Of California Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-19: Social Model Recovery Systems Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-20: Tarzana Treatment Centers Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-21: WestCare California Inc - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: This run did not capture a California Department of Health Care Services facility-status summary for this entity. Evidence: `E16`, `E16`.
- Relevant time and place: place named in the cited source: California Department of Health Care Services facility records matched to the entity; organization named in the cited source: WestCare California Inc Evidence: `E16`, `E16`.
- Why CalDS included it: CalDS included this item because the facility status review found source data relevant to: California Department of Health Care Services active/closed facility-status ratio. The source needed to complete this check was missing. Evidence: `E16`, `E16`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E16`, `E16`.
- System opinion: CalDS flags this as a data blocker because This run did not capture a California Department of Health Care Services facility-status summary for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E16`, `E16`.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking. Evidence: `E16`, `E16`.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-22: Behavioral Health Services Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-23: CRI-Help Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-24: HealthRIGHT 360 - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-25: Phoenix Houses Of California Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-26: Social Model Recovery Systems Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-27: Tarzana Treatment Centers Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-28: WestCare California Inc - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the financial growth review found source data relevant to: Year-over-year total revenue growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-29: Behavioral Health Services Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-30: CRI-Help Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-31: HealthRIGHT 360 - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-32: Phoenix Houses Of California Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-33: Social Model Recovery Systems Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-34: Tarzana Treatment Centers Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-35: WestCare California Inc - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the off-scope activity review found source data relevant to: Form 990 political campaign and lobbying indicators. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-36: Behavioral Health Services Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-37: CRI-Help Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-38: HealthRIGHT 360 - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-39: Phoenix Houses Of California Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-40: Social Model Recovery Systems Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-41: Tarzana Treatment Centers Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-42: WestCare California Inc - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the payroll and wages review found source data relevant to: Year-over-year salaries, compensation, and benefits growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries, compensation, and benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries, compensation, and benefits line and compare payroll growth to headcount, contract scope, and service volume. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-43: Case-wide - Public attention and traffic

- Test: Social media and website traffic coverage
- What CalDS found: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Evidence: missing-source marker.
- Relevant time and place: organization named in the cited source: Case-wide Evidence: missing-source marker.
- Why CalDS included it: CalDS included this item because the public attention and traffic review found source data relevant to: Social media and website traffic coverage. Required traffic, social-media, or public-attention sources were not captured for this run. Evidence: missing-source marker.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: missing-source marker.
- System opinion: CalDS flags this as a data blocker because No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: missing-source marker.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Add a governed source policy for traffic/social metrics and preserve collection timestamps before using attention patterns as risk proxies. Evidence: missing-source marker.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the review item and rerun the matrix before upgrading the signal.
- Caveat: Traffic and social metrics are volatile and can be misleading without source timestamps and normalization.

#### Data gap-44: Behavioral Health Services Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-45: CRI-Help Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-46: HealthRIGHT 360 - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-47: Phoenix Houses Of California Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-48: Social Model Recovery Systems Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-49: Tarzana Treatment Centers Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-50: WestCare California Inc - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the public-funds concentration review found source data relevant to: Government grants as share of Form 990 revenue. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-51: Behavioral Health Services Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Behavioral Health Services Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-52: CRI-Help Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: CRI-Help Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-53: HealthRIGHT 360 - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: HealthRIGHT 360 Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-54: Phoenix Houses Of California Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Phoenix Houses Of California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-55: Social Model Recovery Systems Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Social Model Recovery Systems Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-56: Tarzana Treatment Centers Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: Tarzana Treatment Centers Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-57: WestCare California Inc - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Evidence: `E13`, `E13`.
- Relevant time and place: organization named in the cited source: WestCare California Inc Evidence: `E13`, `E13`.
- Why CalDS included it: CalDS included this item because the spending growth review found source data relevant to: Year-over-year total expense growth. A required source or field was missing, so this remains a collection blocker. Evidence: `E13`, `E13`.
- Source access: Use the evidence labels for the source ledger; no public source URL is attached directly to this row. Evidence: `E13`, `E13`.
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue. Evidence: `E13`, `E13`.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results. Evidence: `E13`, `E13`.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

## 8. Evidence Citation Ledger

Use this ledger to move from the readable case file back to source records. The packet-local `E##` labels are reading aids only; internal evidence IDs and checksums preserve replayability.

| Ref | Internal evidence ID | Record ID | Source type | Source URI | Published | Checksum |
| --- | --- | --- | --- | --- | --- | --- |
| `E01` | `evidence_d39a0b2dfe8f87c4` | `socialmodel_2024_990_summary` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/954079133 | 2025-04-14 | `fd0b410985ab61190109d6d137b002114af439a87540aff8fa21741b763cc99b` |
| `E02` | `evidence_947bca18f9551633` | `irs_990_xml_bhs_2023` | Downloaded Internal Revenue Service Form 990 machine-readable filing data | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_05A.zip#2024_TEOS_XML_05A/202421369349300712_public.xml | 202306 | `48ee5dd76e341a2ad82dc6de4f5d58ae6c08fe75647bf49a32a2d88eb07287da` |
| `E03` | `evidence_d043245a0a684901` | `irs_990_xml_manifest_missing_bhs_2025` | Internal Revenue Service machine-readable filing-data availability manifest | https://apps.irs.gov/pub/epostcard/990/xml/2024/index_2024.csv; https://apps.irs.gov/pub/epostcard/990/xml/2025/index_2025.csv; https://apps.irs.gov/pub/epostcard/990/xml/2026/index_2026.csv | 2025 | `eac47c8d30638dce5451d52bf7b23e40f26d60034302326d55e92764a18ff36e` |
| `E04` | `evidence_798df5d7a45e0675` | `healthright_2024_irs_990_full_text_fallback` | Rendered Form 990 secondary source | [private source artifact] | 2026-04-24 | `86d71b86de5bad3f587f06518d77a4f6bcd2c82c0d3ef2f16a916b29233c303d` |
| `E05` | `evidence_3103845eeaaf1e1e` | `fac_general_2016_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000122774 | 2017-03-30 | `f5e2047b989cc608ab685265693a3a272ef88f1d9fc09a59e2f0206ff55cf5fd` |
| `E06` | `evidence_67a8fff3ad9e8165` | `fac_findings_filtered_targets` | Federal Audit Clearinghouse findings records | https://app.fac.gov/dissemination/public-data/gsa/full/findings.csv | 2016-present | `814cff32cdf4b21fc65a278cf63763cf7ff35d46bdbcd98be07f8719181f973c` |
| `E07` | `evidence_571faf39d80ecdb3` | `fac_federal_awards_filtered_targets` | Federal Audit Clearinghouse federal awards records | https://app.fac.gov/dissemination/public-data/gsa/full/federal_awards.csv | 2016-present | `29ff42636ec4eb8b779b05617a3e6f55cd8d1c12765f64f9097a2572573aeab0` |
| `E08` | `evidence_c182a6e42f6a7429` | `dhcs_facility_status_crihelp` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `546453871c99b0252f3006ceac490636e892de07562884897249436d9e82e2d6` |
| `E09` | `evidence_06396cf5cd604958` | `dhcs_adverse_status_page_manifest` | California Department of Health Care Services adverse-status page manifest | https://www.dhcs.ca.gov/provgovpart/SUD-LCR/Pages/SUS-REV-NOV.aspx | 2025-10-16 | `20071a8d1f771941e1742d883e17ad7ae91759dda2d5cd987ee204e1ce839f25` |
| `E10` | `evidence_67f61e0d157e345b` | `dhcs_adverse_status_source_discovery_gap` | California Department of Health Care Services adverse-status source discovery | [private source artifact] | 2026-04-24 | `ee95326a3e5ed3774442be0a91230e099aa69302d8547b234c6b6cc5de958f60` |
| `E11` | `evidence_32f81cdeee62fbb5` | `county_monitoring_bhs_sapc_2023` | County contract or monitoring source | https://file.lacounty.gov/SDSInter/auditor/cmr/1141106_2023-04-26BehavioralHealthServicesInc-ADPHSAPCServiceProvider-FiscalComplianceReview.pdf | 2023-04-26 | `f219a8c51d2cee5e80f88f7cdfab27910f8a795ac2822ce6edb060c4c255f6a8` |
| `E12` | `evidence_5150f41b551a187f` | `court_manifest_healthright_santa_barbara_calendar_2025` | Court docket search manifest | https://www.santabarbara.courts.ca.gov/es/online-services/court-calendars/search-court-calendars/calendarios-judiciales-civil?case_type=All&hearing_type=All&keyword=&order=field_party_name&page=56&sort=asc | 2025 | `31da365fc629f7f0a549a85316e756c07102fd45a68d032a24c731e10ac8b47d` |
| `E13` | `evidence_ec0b74633b49a5bd` | `parsed source collection` | Internal Revenue Service source collection | [private source artifact] | 2026-04-24 | `70244e77e1628bc4350642e2d9bf5a5d892fd668867c5605dd8050cbb4b3b0f9` |
| `E14` | `evidence_092248a6e53f7d01` | `parsed source collection` | Federal Audit Clearinghouse audit source collection | [private source artifact] | 2026-04-24 | `3dc8c8b88652e2cfeef1697c8d8344df9ed77c512956400f4cc427e1023ba5f1` |
| `E15` | `evidence_8dfb7fc1cb2a75ce` | `parsed source collection` | Federal Audit Clearinghouse award source collection | [private source artifact] | 2026-04-24 | `3d9c67fa7d86902b6098d0fe75abd0b7c37d2a96a417a7a5cc0d212e97b8e971` |
| `E16` | `evidence_dfbbcee28e6ef7fa` | `parsed source collection` | California Department of Health Care Services status source collection | [private source artifact] | 2026-04-24 | `d27321fe5e710c500940fd57268974e94da44c45850898245b3090494c671629` |
| `E17` | `evidence_0cd635f36c5cc6ee` | `parsed source collection` | Parsed source document text index | [private source artifact] | 2026-04-24 | `8b0cebf1e444fed4f803fa2e0d9f46421a3dc3bb7ecee282cd74ccba7d877eb5` |
| `E18` | `evidence_d309d3a9cb2ba46a` | `org_service_pages_tarzana` | Organization service page | https://www.tarzanatc.org/services/ | 2026-04-26 | `56ac75caa75bb1ebbfa2210bcbdb0708f7d587ae64d90127bc330132a934d26a` |
| `E19` | `evidence_910819e82ade8b13` | `parsed source collection` | Official outcome source collection | [private source artifact] | 2026-04-24 | `1b17ab2f29720cc3253eba2fcf8a39a01da6729f2c196c8ad1a5c20a85146a43` |
| `E20` | `evidence_c01d627498d0bbaf` | `spend-versus-results source collection` | Spend-versus-results source collection | [private source artifact] | 2026-04-24 | `ac271fbfb9e8346890013e8a62443ebfaafd5fbfa813f02e5f79401130359e67` |
| `E21` | `evidence_e4140befe06315a5` | `parsed source collection` | Public statement source collection | [private source artifact] | 2026-04-24 | `a52f68005a176372c283a5c76dfc09962087d24c3ba6cc8465a4fd54ef15f8cb` |
| `E22` | `evidence_2d4fb7cb70f9221b` | `public_statements_westcare` | Public statement source | https://westcare.com/leadership/ | 2026-04-24 | `e3ae5f3ea87df115c63150148e1a83652d893486c859f5ef789ce7a0815a5fd7` |
| `E23` | `evidence_c05e40e102adbd2b` | `dhcs_facility_status_bhs` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `4bf89f2c445f93bf655f41449b484580e062148dbe378b8b2b69ab1d72ac3b16` |
| `E24` | `evidence_b5f7ba7beb78b928` | `dhcs_facility_status_healthright` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `18f1b53101d5118e97181ee7adce0ba9ecc5f95c53a182bfefa84df320561bb1` |
| `E25` | `evidence_f8feae3d3c40c306` | `dhcs_facility_status_phoenix` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `6ca390acbf502e63939860d1d4351f586ec6935df360320a728278cf2ebbac48` |
| `E26` | `evidence_e5576db45f2f20ff` | `dhcs_facility_status_socialmodel` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `ae2d69219ae286a1a6e06366a384d70c95268d116849f6096dfeb71478502487` |
| `E27` | `evidence_5abf99ba83094482` | `dhcs_facility_status_tarzana` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `b7f07891095c6e172c55f993b844e30e4e3c7509fd84ea143d31a898092df9c4` |
| `E28` | `evidence_b928bbd1ddb21694` | `fac_general_2019_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000126607 | 2019-11-19 | `6c59d97dcc3111b69d1c455066144e72cc454c06ba539baa9057a76d991c0dd3` |
| `E29` | `evidence_99c4c148b280659e` | `fac_general_2023_06_gsafac_0000017535` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2023-06-GSAFAC-0000017535 | 2024-03-06 | `d477fc6c5916c5668737232e59b22ee66ef70f038dc9a984700f7a14579405e8` |
| `E30` | `evidence_45c8905ea4d6167b` | `fac_general_2023_06_gsafac_0000019151` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2023-06-GSAFAC-0000019151 | 2024-01-30 | `e7f38a4e886d8b082932ab21c2e65444ac07d369e5e5cadcc0fe8475333f4919` |
| `E31` | `evidence_b35900f0d2d5cf38` | `fac_general_2024_06_gsafac_0000348075` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2024-06-GSAFAC-0000348075 | 2025-01-23 | `deade35632823f137f64ffb344fa62fd1796e8bf9c186eff1c16262d02b2ccd4` |
| `E32` | `evidence_d3b12a4069d9f688` | `fac_general_2024_06_gsafac_0000354996` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2024-06-GSAFAC-0000354996 | 2025-02-26 | `9ecbeffed3f73ecf961dd9bc2e7b5bceb8e8ca6b964f241972e0b9864377baf0` |
| `E33` | `evidence_42e9c53edadfdae2` | `fac_general_2025_06_gsafac_0000400073` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2025-06-GSAFAC-0000400073 | 2026-01-26 | `cea777bdca38058fc4982cf645ef7df7099518d395b9a647854c0493f65e0960` |
| `E34` | `evidence_a8431f7c86e20d6e` | `fac_general_2025_06_gsafac_0000405366` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2025-06-GSAFAC-0000405366 | 2026-03-17 | `9e5792cf5f43762db94c43453a7d15850a07f330037078aca76964398097d277` |
| `E35` | `evidence_5662edb13674fbb2` | `dhcs_facility_status_westcare` | California Department of Health Care Services facility-status row set | https://services7.arcgis.com/7MUwsS9z05YumJRZ/arcgis/rest/services/SUDS_Facilities_LCD_view/FeatureServer/7 | 2026-04-15 | `a243d2c2d4a1bf1107e34cc5e973a054a120ca6dbaf0f7befe5b356ce54429f0` |
| `E36` | `evidence_1b3d32aadc3cc2f2` | `fac_general_2016_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000119575 | 2016-12-21 | `a037c82d24e8e15be68d5f50cd2c96c3b5c6ff7afbccb39150c319f4aea54d55` |
| `E37` | `evidence_15267c9609bd0e24` | `fac_general_2016_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2016-06-CENSUS-0000124927 | 2017-03-23 | `e50f3dcf0d14ea8adc8a21f653abda5c3019332760defa848499fcedfcfcc8af` |
| `E38` | `evidence_cf74deb80f859ea6` | `fac_general_2017_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000119575 | 2018-01-17 | `d7f4354da7fb07838bb2de44a9c7a93db5b508733bd17b138c1be8b10a7bca54` |
| `E39` | `evidence_b4c55f4c7be78aa2` | `fac_general_2017_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000122774 | 2017-12-27 | `7aaba757ba7a09484fba6a1bc5b0f446b6071276e5dfd8967d09af863b43d631` |
| `E40` | `evidence_a9e2524d337bdf2f` | `fac_general_2017_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000124927 | 2018-04-17 | `41c707a3a83023d24d40dc09d41b293f8524e1e3515cb9a57402a5e72493c1b2` |
| `E41` | `evidence_9ee7dccbc57e3232` | `fac_general_2017_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2017-06-CENSUS-0000126607 | 2017-12-18 | `5df2e727457f9f5bd6f8140cb79dd59ee15ec26a7e96f08cba81d4511c9f39ea` |
| `E42` | `evidence_9a8d3b4ef26a5cd3` | `fac_general_2018_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000119575 | 2020-01-20 | `2b8e2050a37f228017148d9680a3c879b3708178802af9eac37b048b98662d19` |
| `E43` | `evidence_a734993b9a0b9550` | `fac_general_2018_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000122774 | 2019-01-15 | `484c0c6cd1828940b93fc3606a1baebff609a1800120cdef59244479f32afbbd` |
| `E44` | `evidence_829efba56ad5bfc9` | `fac_general_2018_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000124927 | 2020-01-29 | `670cd36eef99f2404c5563141918e43c22240d849164fdf9abe37446d95249c1` |
| `E45` | `evidence_72994a41439c26e5` | `fac_general_2018_06_census_0000126607` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2018-06-CENSUS-0000126607 | 2018-11-25 | `da1a47333abf216469e16cd6c78c788b571d54a278e33bb4ab1e5d9720653a7c` |
| `E46` | `evidence_1bda3c170555238d` | `fac_general_2019_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000119575 | 2020-04-07 | `735d5863340de2306cb4ec6961e3c3d70eab07fbe0b160cd0deb059ec711f7ff` |
| `E47` | `evidence_33e78d4e762fee4a` | `fac_general_2019_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000122774 | 2019-11-19 | `36fc8ffb0ed42806cd232640702f2c3f4d505a9ca301a746b5ebda05cdbebabd` |
| `E48` | `evidence_2d1c7235a0fc8e02` | `fac_general_2019_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2019-06-CENSUS-0000124927 | 2022-06-28 | `54566b9a36b57d9286fda92071527c595c1294fcd2830c6d27094554da2fe628` |
| `E49` | `evidence_d199f104e1da0069` | `fac_general_2020_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000119575 | 2021-01-26 | `2de591919a94b90c01b539f668c7e3eaa1ad2335be62256a51ef460699f6e85a` |
| `E50` | `evidence_32bd30befb60976f` | `fac_general_2020_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000122774 | 2021-01-10 | `dec298813131ada2f9fb71f14424654b3d1733bf8ee58f4f2af9561cbb154121` |
| `E51` | `evidence_fef18aea259b22d3` | `fac_general_2020_06_census_0000124927` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000124927 | 2023-03-09 | `54076295638fdd01211a1ceaf432189b70baeaa4674f4ad312cb5f188af77434` |
| `E52` | `evidence_9ceabbf117b5140d` | `fac_general_2020_06_census_0000249434` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2020-06-CENSUS-0000249434 | 2021-03-23 | `4cce6fcfdd211f542a4aeef82c5ca9d385178a66a5feb4365313d7cb81a7b895` |
| `E53` | `evidence_1923174633c65d45` | `fac_general_2021_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-CENSUS-0000119575 | 2022-01-11 | `aa1e7c7a8c2ba264d55d0bb41a5ca0e554d9f4c92b5e572cd50691a403ead11d` |
| `E54` | `evidence_1b3fd82a6c1ac11a` | `fac_general_2021_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-CENSUS-0000122774 | 2022-01-17 | `a97cdbfbcb48d2b652fe28f6a5ca642611092a16d015d54fb1c77984f2c362ba` |
| `E55` | `evidence_846498d5fd4ac918` | `fac_general_2021_06_census_0000249434` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-CENSUS-0000249434 | 2022-03-16 | `51cd34461c231f3ed81cb7414aad18af6608a475497cfc4e9a8dd7d4c840acda` |
| `E56` | `evidence_8461cbe899dfe6e6` | `fac_general_2021_06_gsafac_0000011418` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2021-06-GSAFAC-0000011418 | 2023-12-27 | `d9728f83a7a692d40c66f5a19fafee648b463be11f6fc15e3ae45472b3ffafda` |
| `E57` | `evidence_d521c9e73d2185a4` | `fac_general_2022_06_census_0000119575` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2022-06-CENSUS-0000119575 | 2023-02-24 | `19f33dc6e817fff4e5f21d5adca4bedf0f80cd72c89802367893ebc6463c5686` |
| `E58` | `evidence_c98d6f87a0fbd583` | `fac_general_2022_06_census_0000122774` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2022-06-CENSUS-0000122774 | 2023-02-13 | `88c2436f4aa891f35b47bf01771b5c6fc4eb62e71902dc3299d1f22faa0a854c` |
| `E59` | `evidence_fa2340d0480fc706` | `fac_general_2022_06_gsafac_0000366337` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2022-06-GSAFAC-0000366337 | 2025-04-23 | `9163486fc79e91dc70872c61de92c49b5431d07795cd9403697c12bbcfc28c66` |
| `E60` | `evidence_5216dc57daddcaaa` | `fac_general_2023_06_gsafac_0000384194` | Federal Audit Clearinghouse audit source document | https://app.fac.gov/dissemination/report/pdf/2023-06-GSAFAC-0000384194 | 2025-10-17 | `00f7db816410677998c8783b5903bd0948599095b9d47e886e5c6a6a90914d09` |
| `E61` | `evidence_bed9b2a3601e5f1a` | `healthright_services` | Organization service page | https://www.healthright360.org/our-services/substance-use-disorder/ | 2025-09-01 | `e561177cb02ad7616f3eaa1a290d677d5d23cfed23b7dd1e41683f090e624eee` |
| `E62` | `evidence_d4ef8ee70eb31774` | `org_service_pages_bhs` | Organization service page | https://bhs-inc.org/services | 2026-04-26 | `5731c8d8120c7f2d4ea52e254ea392fdc2f0a30b4a45944ebde88d94a2d2d950` |
| `E63` | `evidence_9db64dccc0217c42` | `org_service_pages_crihelp` | Organization service page | https://cri-help.org/programs/residential-treatment/overview.html | 2026-04-26 | `6052639cb9d5979d377d4cc3ca53e2291cd5b0d2602ab9b07a3023a4fcc823cd` |
| `E64` | `evidence_2e1b16c1988bb8c2` | `org_service_pages_healthright` | Organization service page | https://www.healthright360.org/our-services/substance-use-disorder/ | 2026-04-26 | `1a4016d9640fe5724a76406c40f0f9fa1b847ff6b1b8a88ca142f68d22f566d3` |
| `E65` | `evidence_f7fd0136227c3fb1` | `org_service_pages_phoenix` | Organization service page | https://phoenixhouseca.org/what-we-do/ | 2026-04-26 | `9db75684a4f357989cd1b1e700c98b38a626c677463199769a41693c73c61e2b` |
| `E66` | `evidence_f7981a879291f43b` | `org_service_pages_socialmodel` | Organization service page | https://socialmodelrecovery.org/services/ | 2026-04-26 | `9090c41c6609356687800614c680a40490b220bbbf71091970265ee8aaa19a73` |
| `E67` | `evidence_44e8e72553e745fe` | `org_service_pages_westcare` | Organization service page | https://westcare.com/places/california/ | 2026-04-26 | `8d4f93d6578432c569fb7f6006597be7621de2480fb52dc7aa01b0f0553dff5a` |
| `E68` | `evidence_0513c636d63749fd` | `tarzana_services` | Organization service page | https://www.tarzanatc.org/services/substance-abuse-disorder-treatment/ | 2026-02-01 | `51f0b694b8d874b41e8fa2309a3f577b72f7b615408d5e0549fb8fd4feaac227` |
| `E69` | `evidence_0c6e2ca2df4a81ca` | `westcare_services` | Organization service page | https://westcarecalifornia.org/services/treatment-rehab/ | 2026-04-19 | `bf1946cd40fcbedc31832d817e7d789f0f0c3c09a6e9f1c00a17097c9660fd52` |

### Source Coverage Snapshot

| Source class | Count |
| --- | --- |
| Federal Audit Clearinghouse audit source document | 33 |
| Organization service page | 10 |
| California Department of Health Care Services facility-status row set | 7 |
| County contract or monitoring source | 1 |
| Court docket search manifest | 1 |
| California Department of Health Care Services adverse-status source discovery | 1 |
| California Department of Health Care Services adverse-status page manifest | 1 |
| Federal Audit Clearinghouse federal awards records | 1 |
| Federal Audit Clearinghouse findings records | 1 |
| Internal Revenue Service machine-readable filing-data availability manifest | 1 |
| Rendered Form 990 secondary source | 1 |
| Internal Revenue Service Form 990 summary | 1 |
| Downloaded Internal Revenue Service Form 990 machine-readable filing data | 1 |
| Public statement source | 1 |
| California Department of Health Care Services status source collection | 1 |
| Federal Audit Clearinghouse audit source collection | 1 |
| Federal Audit Clearinghouse award source collection | 1 |
| Internal Revenue Service source collection | 1 |
| Official outcome source collection | 1 |
| Parsed source document text index | 1 |
| Public statement source collection | 1 |
| Spend-versus-results source collection | 1 |

## 9. Human-Only Next Steps

These actions are outside the current CalDS runtime. They require a human reviewer or authorized records process before any escalation beyond internal review.

1. Open the review packet and verify each priority row against the cited evidence ledger before changing case status.
2. Resolve sentinel caution: Keep audit and Schedule L references as review questions until source documents are checked.
3. Resolve sentinel caution: Keep California Department of Health Care Services status records at facility-level context unless a reviewer confirms entity-level meaning.
4. Resolve sentinel caution: Require reviewer confirmation of current county contract or monitoring status.
5. Resolve sentinel caution: Treat docket pointers as follow-up tasks until the docket is directly verified.
6. Resolve sentinel caution: Preserve missing-data caveats in the review packet.
7. Verify raw Internal Revenue Service machine-readable filing data or official return images for revenue, expenses, grants, officer compensation, and year-over-year movement.
8. Open Federal Audit Clearinghouse audit source documents and findings tables to confirm audit year, finding status, federal agency, questioned-cost fields, and management response.
9. Pull California Department of Health Care Services facility license/status history and adverse-status records directly before using facility rows beyond context.
10. Request county contract files, monitoring letters, corrective-action status, deliverables, and provider-level outcome records for the same year window.
11. Benchmark officer and key employee compensation against comparable organizations and verify documented approval procedures.
12. Compare harvested public statements and web pages to homelessness grant scopes, contract restrictions, funding sources, and accounting records; treat statements as context until dollars and scope are linked.
13. Verify court or docket pointers directly in the relevant docket system before treating them as meaningful context.

## 10. Artifact References

These are the durable workflow artifacts used by the compiler.

| Artifact | Path |
| --- | --- |
| case_dossier.json | `[private source artifact] |
| case_dossier.md | `[private source artifact] |
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
| task_case_compiler.json | `[private source artifact] |
| task_case_director.json | `[private source artifact] |
| task_entity_network_analyst.json | `[private source artifact] |
| task_evidence_analyst.json | `[private source artifact] |
| task_lead_scorer.json | `[private source artifact] |
| task_retrieval_strategist.json | `[private source artifact] |
| task_review_packager.json | `[private source artifact] |
| task_sentinel.json | `[private source artifact] |

## 11. Human Review Required

The workflow remains paused. A reviewer must explicitly approve, downgrade, repair, or reject this case before any outside-facing use.
