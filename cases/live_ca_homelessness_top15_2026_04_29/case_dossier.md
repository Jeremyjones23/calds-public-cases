# Case Dossier: Live web case: top California homelessness nonprofits by state Homekey award exposure

## 1. Supervisor Brief

Bottom line: CalDS keeps DignityMoves at the top of this 15-entity case for possible waste, fraud, abuse, or mismanagement review because the top source-backed trigger is: Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0. Evidence: `E20`, `source_table_fac_audit`. The lead score is 0.0 / 100 and the sentinel posture is `DOWNGRADE_FOR_REVIEW`; this is a review priority, not a formal conclusion.

### What CalDS Found First

- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings. Row-level... Source: [internal local artifact]
- `E22` Official enforcement/docket triage source: Weingart Center Association (Official enforcement or docket source, 2025-10-16): An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for... Source: https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf
- `E21` Parsed official enforcement and docket source table (Parsed enforcement and docket source table, 2025-10-16): Official enforcement and docket source table for top-15 homelessness triage. This table creates deep-dive triggers only. It does not create legal conclusions. { "case_id": "live_ca_homelessness_top15_2026_04_29", "created_at": "2026-04-30T20:32:22+00:00",... Source: [internal local artifact]
- `E18` ProPublica Nonprofit Explorer Internal Revenue Service Form 990 filing summary table (Parsed Internal Revenue Service source table, 2026-04-30): ProPublica Nonprofit Explorer API filing summary for top-15 homelessness triage. ProPublica provides a public API and viewer for Internal Revenue Service nonprofit filing data. CalDS treats this as an access layer; raw Internal Revenue Service machine-readable filing data/source document filings remain controlling source documents.... Source: [internal local artifact]
- 86 additional evidence item(s) are in the citation ledger.

### Triage Gate

- First-pass triage screened 15 named entities before deep investigation.
- Deep-dive selection: Hope the Mission, Weingart Center Association, DignityMoves, The People Concern, California Supportive Housing.
- Context handoff check: PASS. Missing fields: none.
- Hope the Mission: High triage priority, selected for deep forensic review. Why: At least one official or high-materiality source trigger fired. Trigger: Official California housing award rows attach $115,337,991 in project-award exposure to Hope the Mission. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- Weingart Center Association: High triage priority, selected for deep forensic review. Why: At least one official or high-materiality source trigger fired. Trigger: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing... Source: https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf
- DignityMoves: High triage priority, selected for deep forensic review. Why: At least one official or high-materiality source trigger fired. Trigger: Official California housing award rows attach $77,180,702 in project-award exposure to DignityMoves. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- The People Concern: High triage priority, selected for deep forensic review. Why: At least one official or high-materiality source trigger fired. Trigger: Official California housing award rows attach $53,435,650 in project-award exposure to The People Concern. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- California Supportive Housing: High triage priority, selected for deep forensic review. Why: At least one official or high-materiality source trigger fired. Trigger: Official California housing award rows attach $51,891,854 in project-award exposure to California Supportive Housing. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- Self-Help Enterprises: Medium-watch triage priority, held in watch status pending more source coverage. Why: One medium signal fired; hold for broader source collection before deep dive. Trigger: Official California housing award rows attach $45,193,909 in project-award exposure to Self-Help Enterprises. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- PATH Ventures: Medium-watch triage priority, held in watch status pending more source coverage. Why: One medium signal fired; hold for broader source collection before deep dive. Trigger: Official California housing award rows attach $42,672,927 in project-award exposure to PATH Ventures. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- Abode Housing Development: Medium-watch triage priority, held in watch status pending more source coverage. Why: One medium signal fired; hold for broader source collection before deep dive. Trigger: Official California housing award rows attach $41,220,000 in project-award exposure to Abode Housing Development. Source: https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- Private forensic synthesis created 5 source-cited investigation hypothesis item(s). These stay internal and require sentinel/human review before publication.

### Acquisition and Completion Guard

- Completion guard status: PASS.
- Required source-family checks: 35; hits: 31; public official no-record searches: 4; unresolved blockers: 0.
- Public official no-record coverage:
  - Hope the Mission: enforcement_or_docket - configured public official searches found no citation-ready adverse record; this is not legal clearance.
  - DignityMoves: enforcement_or_docket - configured public official searches found no citation-ready adverse record; this is not legal clearance.
  - The People Concern: enforcement_or_docket - configured public official searches found no citation-ready adverse record; this is not legal clearance.
  - California Supportive Housing: enforcement_or_docket - configured public official searches found no citation-ready adverse record; this is not legal clearance.
- Every required source family has a recovered citation-ready hit or a public official no-record search result for the selected entities.
- Guard note: Completion guard records hits, public official no-record searches, and misses; misses are blockers, not clearance.
- Guard note: A searched_no_public_official_record status means configured public official sources were searched without recovering a public adverse record; it is not legal clearance.
- Guard note: Dossier compilation may proceed only because unresolved source gaps are preserved for human review.

### Why This Is On A Reviewer's Desk

- CalDS flags DignityMoves / Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0. Evidence: `E20`, `source_table_fac_audit`. Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- CalDS flags Habitat for Humanity Yuba/Sutter, Inc. / Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, 2025, internal-control deficiency years=2022, not-low-risk years=2022, 2023, 2024, 2025, findings rows=9. Evidence: `E20`, `source_table_fac_audit`. Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- CalDS flags Hope the Mission / Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2022, 2023, 2024, findings rows=103. Evidence: `E20`, `source_table_fac_audit`. Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- CalDS flags Weingart Center Association / Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2021, 2023, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2020, 2021, 2022, 2023, 2024, 2025, findings rows=22. Evidence: `E20`, `source_table_fac_audit`. Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- Source blockers to resolve before stronger ranking: Direct funding verification, Executive compensation, Facility status, Financial growth; plus 6 other source area(s). These are collection blockers, not adverse findings.

### Decision Needed

- Human-review state: `PENDING`. The workflow is paused until a reviewer approves, downgrades, repairs, or rejects the case.
- Score: 0.0 / 100. Low deterministic score because unresolved source gaps outweigh the retrieved source coverage under the current formula.
- Sentinel: `DOWNGRADE_FOR_REVIEW`. Lead can proceed only as an internal reviewer-safe candidate with caveats.
- Immediate reviewer action: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### What This Does Not Prove

- This dossier does not make a formal finding of waste, fraud, or abuse. It identifies possible screening questions and source blockers for human review.
- County or Continuum of Care outcomes are contextual unless provider-attributable outcome records are recovered and linked.
- Connected-party enforcement exposure means an official source tied a charged person, transaction, project, or counterparty to the source chain; it does not mean the nonprofit was charged unless the cited source says that.
- Homelessness scope-mismatch rows test whether public homelessness funds may have supported activity outside the funded scope; they do not state that the activity is categorically unlawful for a nonprofit.
- Sentinel restrictions remain active: legal_status_context_required, missing_data.

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

## 2. Entity Briefs

These briefs assume the reader has not seen the agent work. They summarize specific cited records first, then explain why the system held or flagged each nonprofit organization.

### Abode Housing Development

Briefing judgment: CalDS flags Abode Housing Development as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Abode Housing Development` says or summarizes: - https://abode.org/housing-development: hat We Do Abode Housing Development Abode Property Management Abode Services Housing Providers Outreach Need Help? Jobs and Careers Where We Work Our Reach Alameda County Santa Clara County Napa County San Francisco County San Mateo County Santa Cruz County Solano County Sonoma County Support Our... Evidence: `E24`.

What the records show:

Most relevant retrieved records:

- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E18` ProPublica Nonprofit Explorer Internal Revenue Service Form 990 filing summary table (Parsed Internal Revenue Service source table, 2026-04-30): ProPublica Nonprofit Explorer API filing summary for top-15 homelessness triage. ProPublica provides a public API and viewer for Internal Revenue Service nonprofit filing data. CalDS treats this as an access layer; raw Internal Revenue Service...
- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings....
- 5 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Executive compensation: Latest parsed return 2023 reports LOUIS CHICOINE (EXECUTIVE DIRECTOR) of $300,007, equal to 4.72% of parsed expenses. (year(s): 2023; subject: Abode Housing Development; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $7,841,164 in 2022 to $13,604,800 in 2023 (+73.5%). (year(s): 2022, 2023; subject: Abode Housing Development; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2020, not-low-risk years=2018, 2019, 2021, 2022, findings rows=0. (year(s): 2018, 2019, 2020, 2021, 2022; subject: Abode Housing Development; evidence `E20`, `source_table_fac_audit`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $2,022,176 in 2022 to $2,552,716 in 2023 (+26.2%). (year(s): 2022, 2023; subject: Abode Housing Development; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments. (year(s): 2025; place: Santa Clara; subject: Abode Housing Development; evidence `E12`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`.)
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees audit-control context that can bear directly on stewardship of public funds, especially if findings, management responses, or corrective-action status remain unresolved.

What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed. It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.

Boss-level next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.

### Burbank Housing Development Corporation

Briefing judgment: CalDS flags Burbank Housing Development Corporation as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Burbank Housing Development Corporation` says or summarizes: - https://burbankhousing.org/our-story/: Our Story – Burbank Housing Skip to content Attention: Burbank Housing is hiring! To see the list of current job opportunities, please visit our careers page . Residents Applicants Donate About Us FAQs Human Resources Education 2025 Annual Report News Partner Find a Home Residents Contact Us... Evidence: `E25`.

What the records show:

Most relevant retrieved records:

- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings....
- `E25` Official service/program page harvest: Burbank Housing Development Corporation (Organization service page, 2026-04-29): Organization: Burbank Housing Development Corporation Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://burbankhousing.org/our-story/: Our...
- `E29` Public statement page harvest: Burbank Housing Development Corporation (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://burbankhousing.org/: oving entry to careers in the trades for Marin City residents. The program is a collaboration among Marin Housing...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Executive compensation: Latest parsed return 2023 reports LAWRANCE FLORIN (chief executive officer) of $549,817, equal to 2.13% of parsed expenses. (year(s): 2023; subject: Burbank Housing Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $215,420,651. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $16,702,443. (subject: Burbank Housing Development Corporation; evidence `E20`, `source_table_fac_audit`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $18,810,477 in 2022 to $25,771,273 in 2023 (+37.0%). (year(s): 2022, 2023; subject: Burbank Housing Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive. (year(s): 2025; subject: Burbank Housing Development Corporation; evidence `E12`, `E36`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Napa, Sonoma: Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.

### California Supportive Housing

Briefing judgment: CalDS flags California Supportive Housing as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: California Supportive Housing` says or summarizes: - https://www.cshousing.org/: Home Search this site Embedded Files Skip to main content Skip to navigation Home About Us Projects Contact Us Home About Us Projects Contact Us More Home About Us Projects Contact Us California Supportive Housing Adding supportive and affordable communities one at a time Welcome to California Supportive... Evidence: `E59`.

What the records show:

Most relevant retrieved records:

- `E01` Contract/payment acquisition gap: California Supportive Housing (contract_payment_discovery, 2026-04-30): California Supportive Housing has $51,891,854 in California Department of Housing and Community Development award-list exposure across 2 project row(s). No direct standard agreement, payment ledger, monitoring letter, corrective-action record, or deliverable...
- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E14` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- 6 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing. (year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing; evidence `E12`, `E73`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda, Sacramento: Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Executive compensation, Facility status, Financial growth; plus 4 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Community Revitalization and Development Corporation

Briefing judgment: CalDS flags Community Revitalization and Development Corporation as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Community Revitalization and Development Corporation` says or summarizes: - https://crdc.org/: CRDC Home - Community Revitalization & Development Corporation Skip to content Skip to footer HOME ABOUT US AFFORDABLE HOUSING PROJECTS CONTACT US Search Close HOME ABOUT US AFFORDABLE HOUSING PROJECTS CONTACT US We provide affordable housing for families and senior citizens. Providing Affordable Housing We focus our... Evidence: `E68`.

What the records show:

Most relevant retrieved records:

- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings....
- `E68` Official service/program page harvest: Community Revitalization and Development Corporation (Organization service page, 2026-04-29): Organization: Community Revitalization and Development Corporation Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://crdc.org/: CRDC Home -...
- `E69` California Department of Housing and Community Development Homekey/Homekey+ award rows: Community Revitalization and Development Corporation (California Department of Housing and Community Development homelessness award record, 2025-10-13): Entity: Community Revitalization and Development Corporation. Rank by parsed state project-award exposure: 11 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $36,535,496. Award rows: - 2025-09-19 Homekey+: Vista...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Executive compensation: Latest parsed return 2023 reports WILLIAM D RUTLEDGE (PRESIDENT) of $151,354, equal to 13.02% of parsed expenses. (year(s): 2023; subject: Community Revitalization and Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $1,559,120 in 2022 to $6,055,016 in 2023 (+288.4%). (year(s): 2022, 2023; subject: Community Revitalization and Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $243,093 in 2022 to $358,911 in 2023 (+47.6%; $89,728 per employee using 4 employees). (year(s): 2022, 2023; subject: Community Revitalization and Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $955,555 in 2022 to $1,162,854 in 2023 (+21.7%). (year(s): 2022, 2023; subject: Community Revitalization and Development Corporation; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons. (year(s): 2025; subject: Community Revitalization and Development Corporation; evidence `E12`, `E69`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Amador, Solano: Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed. It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.

Boss-level next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.

### DignityMoves

Briefing judgment: CalDS flags DignityMoves as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: DignityMoves` says or summarizes: - https://dignitymoves.org/interim-supportive-housing/: Homes for the Homeless | Interim Supportive Housing Capacity to Scale Challenge Donate Get Involved We’re Hiring! Who We Are Our Leadership Board & Advisors Lived Experience Advisory Board Our Partners What We Do Our Mission: A Future Without Street Homelessness Our Interim... Evidence: `E58`.

What the records show:

Most relevant retrieved records:

- `E02` Contract/payment acquisition gap: DignityMoves (contract_payment_discovery, 2026-04-30): DignityMoves has $77,180,702 in California Department of Housing and Community Development award-list exposure across 3 project row(s). No direct standard agreement, payment ledger, monitoring letter, corrective-action record, or deliverable ledger was...
- `E07` Raw Form 990 artifact acquisition: DignityMoves (irs_990_raw_artifact, 2023): Latest matched Form 990 filing for DignityMoves: Employer Identification Number 871111468, tax period year 2023. Full source document downloaded: False local path: not archived. source document SHA256: not available. Internal Revenue Service object ID:...
- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- 7 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0. (year(s): 2024; subject: DignityMoves; evidence `E20`, `source_table_fac_audit`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $5,610,876 in 2021 to $32,304,888 in 2023 (+475.8%). (year(s): 2021, 2023; subject: DignityMoves; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $516,665 in 2021 to $1,572,234 in 2023 (+204.3%; $157,223 per employee using 10 employees). (year(s): 2021, 2023; subject: DignityMoves; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $4,746,724 in 2021 to $25,122,959 in 2023 (+429.3%). (year(s): 2021, 2023; subject: DignityMoves; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road. (year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves; evidence `E12`, `E66`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda, San Bernardino, Ventura: Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked. It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.

Boss-level next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### Habitat for Humanity Yuba/Sutter, Inc.

Briefing judgment: CalDS flags Habitat for Humanity Yuba/Sutter, Inc. as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Habitat for Humanity Yuba/Sutter, Inc.` says or summarizes: - https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/: Habitat for Humanity Yuba/Sutter | Habitat for Humanity California Close About Our History Board of Directors Find Your Local Affiliate Affordability Careers Advocacy Become an Advocate In The News Legislative Updates Get Involved Upcoming Events Become an Advocate... Evidence: `E27`.

What the records show:

Most relevant retrieved records:

- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings....
- `E11` California Department of Housing and Community Development Homekey/Homekey+ award rows: Habitat for Humanity Yuba/Sutter, Inc. (California Department of Housing and Community Development homelessness award record, 2026-02-13): Entity: Habitat for Humanity Yuba/Sutter, Inc.. Rank by parsed state project-award exposure: 14 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $35,086,396. Award rows: - 2024-02-13 Homekey Round 3: Merriment Village...
- `E27` Official service/program page harvest: Habitat for Humanity Yuba/Sutter, Inc. (Organization service page, 2026-04-29): Organization: Habitat for Humanity Yuba/Sutter, Inc. Official service/program pages fetched: 1 of 2. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): -...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, 2025, internal-control deficiency years=2022, not-low-risk years=2022, 2023, 2024, 2025, findings rows=9. (year(s): 2022, 2023, 2024, 2025; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E20`, `source_table_fac_audit`.)
- Executive compensation: Latest parsed return 2023 reports Joseph Hale (President & chief executive officer) of $135,098, equal to 2.93% of parsed expenses. (year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $4,335,979 in 2022 to $10,271,607 in 2023 (+136.9%). (year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $183,845 in 2022 to $1,600,872 in 2023 (+770.8%; $32,017 per employee using 50 employees). (year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $7,539,939 / total revenue $10,271,607 = 73.4%. (year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees audit-control context that can bear directly on stewardship of public funds, especially if findings, management responses, or corrective-action status remain unresolved.

What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked. It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.

Boss-level next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### Hope the Mission

Briefing judgment: CalDS flags Hope the Mission as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Hope the Mission` says or summarizes: - https://hopethemission.org/our-programs/: try Program Tiny Homes Villages Ventura County Ways To Give Menu Toggle Donate Sponsor a Tiny Home Schedule a Pick-up Donate A Vehicle DAF & Stocks Donate Goods & Services Monthly Giving Legacy Giving Amazon Wishlist Get Involved Menu Toggle Volunteer Host A Drive Partnerships News & Events... Evidence: `E55`.

What the records show:

Most relevant retrieved records:

- `E03` Contract/payment acquisition gap: Hope the Mission (contract_payment_discovery, 2026-04-30): Hope the Mission has $115,337,991 in California Department of Housing and Community Development award-list exposure across 5 project row(s). No direct standard agreement, payment ledger, monitoring letter, corrective-action record, or deliverable ledger was...
- `E08` Raw Form 990 artifact acquisition: Hope the Mission (irs_990_raw_artifact, 2023): Latest matched Form 990 filing for Hope the Mission: Employer Identification Number 272053273, tax period year 2023. Full source document downloaded: False local path: not archived. source document SHA256: not available. Internal Revenue Service object ID:...
- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- 7 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2022, 2023, 2024, findings rows=103. (year(s): 2022, 2023, 2024; subject: Hope the Mission; evidence `E20`, `source_table_fac_audit`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $150,607,803. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $21,345,117. (subject: Hope the Mission; evidence `E20`, `source_table_fac_audit`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $49,730,169 in 2022 to $119,352,333 in 2023 (+140.0%). (year(s): 2022, 2023; subject: Hope the Mission; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $19,579,583 in 2022 to $31,108,526 in 2023 (+58.9%; $32,919 per employee using 945 employees). (year(s): 2022, 2023; subject: Hope the Mission; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $102,056,068 / total revenue $119,352,333 = 85.5%. (year(s): 2023; subject: Hope the Mission; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### Lutheran Social Services of Southern California

Briefing judgment: CalDS flags Lutheran Social Services of Southern California as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Lutheran Social Services of Southern California` says or summarizes: - https://www.lsssc.org/sbd-main: Magazine Friday Inspiration 2026 Gala & Awards Contact Donate San Bernardino County San Bernardino Community Wellness Campus Big Bear • Lucerne Valley • Yucca Valley • Barstow • Trona Help when it’s needed most for California’s Largest County As the largest geographical county in the contiguous 48 states... Evidence: `E54`.

What the records show:

Most relevant retrieved records:

- `E20` Federal Audit Clearinghouse target audit-source extraction table (Parsed Federal Audit Clearinghouse audit table, 2026-04-30): Official Federal Audit Clearinghouse source data table extracts filtered to matched top-15 target EINs only. Name fallback is disabled to avoid broad false positives. Rows with no Federal Audit Clearinghouse report are coverage results, not adverse findings....
- `E54` Official service/program page harvest: Lutheran Social Services of Southern California (Organization service page, 2026-04-29): Organization: Lutheran Social Services of Southern California Official service/program pages fetched: 2 of 2. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://www.lsssc.org/sbd-main:...
- `E63` Public statement page harvest: Lutheran Social Services of Southern California (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://www.lsssc.org/articles/get-out-there-n9t2h-wk9tc-mfxze: lder: About Back Mission Services Our Team Partners Financials Folder: Ways to...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $16,957,470 / total revenue $19,838,870 = 85.5%. (year(s): 2023; subject: Lutheran Social Services of Southern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2018, 2019, 2020, not-low-risk years=2019, 2020, 2021, 2022, 2023, findings rows=10. (year(s): 2018, 2019, 2020, 2021, 2022, 2023; subject: Lutheran Social Services of Southern California; evidence `E20`, `source_table_fac_audit`.)
- Executive compensation: Latest parsed return 2023 reports DR LASHARNDA BECKWITH (PRESIDENT & chief executive officer) of $241,871, equal to 1.35% of parsed expenses. (year(s): 2023; subject: Lutheran Social Services of Southern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $9,258,039 in 2022 to $11,800,842 in 2023 (+27.5%; $43,385 per employee using 272 employees). (year(s): 2022, 2023; subject: Lutheran Social Services of Southern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus. (year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California; evidence `E12`, `E70`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`.)
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees audit-control context that can bear directly on stewardship of public funds, especially if findings, management responses, or corrective-action status remain unresolved.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review. It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### PATH Ventures

Briefing judgment: CalDS flags PATH Ventures as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: PATH Ventures` says or summarizes: - https://epath.org/path-ventures/: unty PATH Ventures PATH Enterprises News & Events Building homes, community & stable lives About PATH Ventures ​PATH Ventures is a non-profit developer of supportive and affordable housing with projects located throughout California. Founded by PATH in 2007, PATH Ventures is building across the state,... Evidence: `E26`.

What the records show:

Most relevant retrieved records:

- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E26` Official service/program page harvest: PATH Ventures (Organization service page, 2026-04-29): Organization: PATH Ventures Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://epath.org/path-ventures/: unty PATH Ventures PATH Enterprises...
- `E30` Public statement page harvest: PATH Ventures (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://epath.org/: epath.org Work with PATH Careers Vendors Volunteer Support Path Get Help Select Page Who We Are About Contact Corporate...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Executive compensation: Latest parsed return 2023 reports JENNIFER HARK-DIEtZ (President) of $423,702, equal to 7.32% of parsed expenses. (year(s): 2023; subject: PATH Ventures; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $1,461,070 in 2022 to $2,503,308 in 2023 (+71.3%; $147,253 per employee using 17 employees). (year(s): 2022, 2023; subject: PATH Ventures; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $3,032,491 in 2022 to $5,786,089 in 2023 (+90.8%). (year(s): 2022, 2023; subject: PATH Ventures; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2017, not-low-risk years=2016, 2017, findings rows=0. (year(s): 2016, 2017; subject: PATH Ventures; evidence `E20`, `source_table_fac_audit`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park. (year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures; evidence `E12`, `E40`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed. It does not prove wrongdoing; it is a source-backed review prompt.

Boss-level next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.

### Self-Help Enterprises

Briefing judgment: CalDS flags Self-Help Enterprises as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Self-Help Enterprises` says or summarizes: - https://www.selfhelpenterprises.org/: Self-Help Enterprises - Self-Help Enterprises Home About Us Programs News & Multimedia Get Involved Contact Us ✕ ☰ Search Search ✕ Home About Us Programs News & Multimedia Get Involved Contact Us Donate Facebook LinkedIn Translate Search Our Mission Service Area Our Impact Our Staff & Board Our... Evidence: `E49`.

What the records show:

Most relevant retrieved records:

- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E14` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E49` Official service/program page harvest: Self-Help Enterprises (Organization service page, 2026-04-29): Organization: Self-Help Enterprises Official service/program pages fetched: 2 of 2. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://www.selfhelpenterprises.org/: Self-Help Enterprises -...
- 4 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Financial growth: Internal Revenue Service parsed revenue moved from $41,610,602 in 2022 to $65,987,549 in 2023 (+58.6%). (year(s): 2022, 2023; subject: Self-Help Enterprises; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $35,659,831 in 2022 to $59,181,040 in 2023 (+66.0%). (year(s): 2022, 2023; subject: Self-Help Enterprises; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2024, not-low-risk years=2025, findings rows=3. (year(s): 2024, 2025; subject: Self-Help Enterprises; evidence `E20`, `source_table_fac_audit`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $101,329,080. Top parsed program: CAPITAL MAGNET FUND at $6,135,000. (subject: Self-Help Enterprises; evidence `E20`, `source_table_fac_audit`.)
- Off-scope activity: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes. (year(s): 2023; subject: Self-Help Enterprises; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Fresno, Merced, Tulare: Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations. It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.

Boss-level next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.

### Service First Northern California

Briefing judgment: CalDS flags Service First Northern California as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Service First Northern California` says or summarizes: - https://servicefirstnc.org/: on - Modesto Skip to content Call Us: 209-644-6300 Email: info@servicefirstnc.org Home Who We Are Our Team What We Do Outpatient Alcohol and Drug Treatment DUI Program Representative Payee Services Aquatic Therapy and Wellness Program Supportive Living Services “Options” Learning Center Transportation... Evidence: `E31`.

What the records show:

Most relevant retrieved records:

- `E31` Official service/program page harvest: Service First Northern California (Organization service page, 2026-04-29): Organization: Service First Northern California Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://servicefirstnc.org/: on - Modesto Skip to...
- `E32` Public statement page harvest: Service First Northern California (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://servicefirstnc.org/: on - Modesto Skip to content Call Us: 209-644-6300 Email: info@servicefirstnc.org Home Who We Are Our Team What We Do...
- `E43` California Department of Housing and Community Development Homekey/Homekey+ award rows: Service First Northern California (California Department of Housing and Community Development homelessness award record, 2026-01-27): Entity: Service First Northern California. Rank by parsed state project-award exposure: 13 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $35,579,520. Award rows: - 2026-01-27 Homekey+: The Hunter House in Stockton,...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Financial growth: Internal Revenue Service parsed revenue moved from $4,639,426 in 2022 to $7,264,326 in 2023 (+56.6%). (year(s): 2022, 2023; subject: Service First Northern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $3,105,229 in 2022 to $5,227,631 in 2023 (+68.3%; $41,489 per employee using 126 employees). (year(s): 2022, 2023; subject: Service First Northern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Executive compensation: Latest parsed return 2023 reports VERNELL HILL JR (chief executive officer) of $130,000, equal to 1.72% of parsed expenses. (year(s): 2023; subject: Service First Northern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $5,390,623 in 2022 to $7,561,906 in 2023 (+40.3%). (year(s): 2022, 2023; subject: Service First Northern California; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House. (year(s): 2026; subject: Service First Northern California; evidence `E12`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: San Joaquin: San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status, Public-funds concentration. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations. It does not prove wrongdoing; it is a source-backed review prompt.

Boss-level next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.

### Swords to Plowshares

Briefing judgment: CalDS flags Swords to Plowshares as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Swords to Plowshares` says or summarizes: - https://www.swords-to-plowshares.org/: e housing programs 90,000 Community meals served to increase veterans' food security $15M Won in lifetime income for veterans with disabilities + free VA healthcare for life Need assistance? Learn more about our wraparound supportive services and connect with us to access housing, employment,... Evidence: `E38`.

What the records show:

Most relevant retrieved records:

- `E38` Official service/program page harvest: Swords to Plowshares (Organization service page, 2026-04-29): Organization: Swords to Plowshares Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://www.swords-to-plowshares.org/: e housing programs 90,000...
- `E52` Public statement page harvest: Swords to Plowshares (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://www.swords-to-plowshares.org/about/vision-for-impact/care: ership Financials Careers Contact us News DONATE get care Donate today Donate...
- `E56` California Department of Housing and Community Development Homekey/Homekey+ award rows: Swords to Plowshares (California Department of Housing and Community Development homelessness award record, 2025-09-19): Entity: Swords to Plowshares. Rank by parsed state project-award exposure: 10 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $39,044,030. Award rows: - 2025-09-19 Homekey+: 1034 Van Ness in San Francisco,
- 1 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $178,025,080. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $6,418,137. (subject: Swords to Plowshares; evidence `E20`, `source_table_fac_audit`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $2,017,562 in 2022 to $16,415,075 in 2023 (+713.6%; $64,121 per employee using 256 employees). (year(s): 2022, 2023; subject: Swords to Plowshares; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Off-scope activity: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes. (year(s): 2023; subject: Swords to Plowshares; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $26,978,728 / total revenue $37,321,790 = 72.3%. (year(s): 2023; subject: Swords to Plowshares; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness. (year(s): 2025; place: San Francisco; subject: Swords to Plowshares; evidence `E12`, `E56`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: San Francisco: San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review. It does not prove wrongdoing; it is a source-backed review prompt.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### TLCS, Inc.

Briefing judgment: CalDS flags TLCS, Inc. as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: TLCS, Inc.` says or summarizes: - https://hopecoop.org/: for those living on the street with mental health challenges. Hope Cooperative Services See our community based mental health programs designed to support individuals with psychiatric disabilities. About Us Hope Cooperative (aka TLCS) has been providing behavioral health and supportive housing services to people... Evidence: `E15`.

What the records show:

Most relevant retrieved records:

- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E15` Official service/program page harvest: TLCS, Inc. (Organization service page, 2026-04-29): Organization: TLCS, Inc. Official service/program pages fetched: 1 of 1. Matched homelessness-scope review terms: none from configured list. Service summary from official source(s): - https://hopecoop.org/: for those living on the street with mental health...
- `E16` Public statement page harvest: TLCS, Inc. (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://hopecoop.org/: for those living on the street with mental health challenges. Hope Cooperative Services See our community based mental...
- 3 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Payroll and wages: Parsed salaries/compensation/benefits moved from $12,111,985 in 2022 to $17,500,055 in 2023 (+44.5%; $40,323 per employee using 434 employees). (year(s): 2022, 2023; subject: TLCS, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $28,978,012 / total revenue $30,779,320 = 94.1%. (year(s): 2023; subject: TLCS, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $116,919,376. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $5,637,683. (subject: TLCS, Inc.; evidence `E20`, `source_table_fac_audit`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $22,008,043 in 2022 to $30,779,320 in 2023 (+39.9%). (year(s): 2022, 2023; subject: TLCS, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spending growth: Internal Revenue Service parsed expenses moved from $22,353,498 in 2022 to $28,035,199 in 2023 (+25.4%). (year(s): 2022, 2023; subject: TLCS, Inc.; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Sacramento: Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Open the cited source records for TLCS, Inc. and compare the raw source wording to this row.

### The People Concern

Briefing judgment: CalDS flags The People Concern as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: The People Concern` says or summarizes: - https://thepeopleconcern.org/homeless-services/: Homeless Services - The People Concern Facebook X Instagram Contact Get Help Careers Volunteer Donate Home About Our Work Homeless Services Sojourn Domestic Violence Services k9 Connection Arts Program Support Ways to Give Planned Giving Monthly Giving Donate to PPTFH Corporate... Evidence: `E39`.

What the records show:

Most relevant retrieved records:

- `E04` Contract/payment acquisition gap: The People Concern (contract_payment_discovery, 2026-04-30): The People Concern has $53,435,650 in California Department of Housing and Community Development award-list exposure across 2 project row(s). No direct standard agreement, payment ledger, monitoring letter, corrective-action record, or deliverable ledger was...
- `E09` Raw Form 990 artifact acquisition: The People Concern (irs_990_raw_artifact, 2023): Latest matched Form 990 filing for The People Concern: Employer Identification Number 956143865, tax period year 2023. Full source document downloaded: False local path: not archived. source document SHA256: not available. Internal Revenue Service object ID:...
- `E12` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- 5 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $71,167,481 / total revenue $83,334,236 = 85.4%. (year(s): 2023; subject: The People Concern; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community. (year(s): 2025, 2026; place: Los Angeles; subject: The People Concern; evidence `E12`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`.)
- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=none, not-low-risk years=none, findings rows=1. (subject: The People Concern; evidence `E20`, `source_table_fac_audit`.)
- Payroll and wages: Parsed salaries/compensation/benefits moved from $39,390,844 in 2022 to $52,463,892 in 2023 (+33.2%; $52,307 per employee using 1003 employees). (year(s): 2022, 2023; subject: The People Concern; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### Weingart Center Association

Briefing judgment: CalDS flags Weingart Center Association as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Weingart Center Association` says or summarizes: - https://www.weingart.org/programs: iors In the Press • On the Web Skid Row Cams FAQ DONATE The need is there. We’re here to help. Weingart Center goes beyond the emergency shelter approach by coupling comprehensive wraparound services with personalized housing solutions. As one of the best comprehensive human services organizations in... Evidence: `E28`.

What the records show:

Most relevant retrieved records:

- `E05` Contract/payment acquisition gap: Weingart Center Association (contract_payment_discovery, 2026-04-30): Weingart Center Association has $95,565,300 in California Department of Housing and Community Development award-list exposure across 3 project row(s). No direct standard agreement, payment ledger, monitoring letter, corrective-action record, or deliverable...
- `E06` Official enforcement/docket public-source search: Weingart Center Association (enforcement_docket_discovery, 2026-04-30): Official enforcement row already recovered: True. Status: citation_ready_official_row_present. Completed public official search count: 4. Possible public adverse search-hit count: 0. Public official search results: - U.S. Department of Justice official...
- `E10` Raw Form 990 artifact acquisition: Weingart Center Association (irs_990_raw_artifact, 2023): Latest matched Form 990 filing for Weingart Center Association: Employer Identification Number 956054617, tax period year 2023. Full source document downloaded: False local path: not archived. source document SHA256: not available. Internal Revenue Service...
- 9 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2021, 2023, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2020, 2021, 2022, 2023, 2024, 2025, findings rows=22. (year(s): 2020, 2021, 2022, 2023, 2024, 2025; subject: Weingart Center Association; evidence `E20`, `source_table_fac_audit`.)
- Connected-party enforcement exposure: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. (year(s): 2025; place: Los Angeles; subject: Weingart Center Association; evidence `E22`, `E21`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`, `source_table_enforcement_docket_discovery`.)
- Financial growth: Internal Revenue Service parsed revenue moved from $29,856,733 in 2022 to $107,010,585 in 2023 (+258.4%). (year(s): 2022, 2023; subject: Weingart Center Association; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $100,833,258 / total revenue $107,010,585 = 94.2%. (year(s): 2023; subject: Weingart Center Association; evidence `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby. (year(s): 2023; place: Los Angeles; subject: Weingart Center Association; evidence `E12`, `E41`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300. This is a review signal, not provider attribution. Evidence `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Direct funding verification, Facility status. These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked. It does not prove the nonprofit was charged, liable, or responsible; the cited official source controls the named-party legal status.

Boss-level next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

### Case-wide Source Gaps

These are not nonprofit organization-specific findings. They are run-level blockers that limit how strongly CalDS can rank or clear the case.

- License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
  Evidence: `E13`, `source_table_official_homelessness_outcomes`. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
  Evidence: no direct evidence ref in this row. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.


## 3. Score, Sentinel, and Case Context

Lead statement: Retrieved records show a reviewable oversight signal for Hope the Mission, Weingart Center Association focused on homelessness, housing, path.

Score: 0.0 / 100

Interpretation: low deterministic score because unresolved source gaps outweigh the retrieved source coverage under the current scoring formula.

The score is deterministic triage priority, not a probability, not a dollar loss estimate, and not a conclusion. Higher scores mean stronger retrieved-source coverage and entity linkage after missing-data and contradiction penalties.

| Field | Value |
| --- | --- |
| Support count | 90 |
| Average relevance | 0.518 |
| Source diversity | 15 |
| Hard entity links | 37 |
| Missing-data count | 23 |
| Contradiction count | 0 |

### Sentinel Gate

| Field | Value |
| --- | --- |
| Decision | DOWNGRADE_FOR_REVIEW |
| Rationale | Lead can proceed only as an internal reviewer-safe candidate with caveats. |
| Flags | legal_status_context_required, missing_data |

Sentinel repair or caution items:

- Use exact legal status and named-party scope from official sources; do not convert third-party charges into entity-level conclusions.
- Preserve missing-data caveats in the review packet.

### Case Summary

- Case ID: `live_ca_homelessness_top15_2026_04_29`
- Jurisdiction: California
- Objective: Using official California Department of Housing and Community Development Homekey and Homekey+ award lists, official homelessness outcome series, and public organization pages, identify reviewer-safe possible waste, fraud, abuse, or mismanagement screening signals among the top source-listed homelessness nonprofit co-applicants by state project-award exposure. Keep the result internal, source-cited, and clear that co-applicant project-award exposure is not the same as verified direct payment to the nonprofit.
- Named entities: Hope the Mission, Weingart Center Association, DignityMoves, The People Concern, California Supportive Housing, Self-Help Enterprises, PATH Ventures, Abode Housing Development, TLCS, Inc., Swords to Plowshares, Community Revitalization and Development Corporation, Burbank Housing Development Corporation, Service First Northern California, Habitat for Humanity Yuba/Sutter, Inc., Lutheran Social Services of Southern California
- Allowed source types: state_homelessness_award, source_extraction_state_homeless_award_table, source_extraction_official_outcome_table, source_extraction_spend_vs_results_table, org_service_page, public_statement_source, irs_990_summary, irs_990_xml, source_extraction_irs_990_table, fac_audit_summary, fac_audit_pdf, fac_findings, fac_federal_awards, source_extraction_fac_audit_table, source_extraction_fac_award_table, county_contract_or_monitoring, source_extraction_enforcement_docket_table, enforcement_or_docket_source, source_extraction_social_web_table, social_media_source
- Review packet: `[internal local artifact]

## 4. Case Dossier Orientation

Status: `PENDING` human review required

This dossier compiles existing CalDS workflow artifacts into a human-readable case file. It is an internal possible waste, fraud, abuse, or mismanagement screening aid, not a formal finding or outside-facing conclusion.

Every substantive row below is tied to a risk indicator, evidence item, source URI, checksum, or durable artifact path. Raw source documents and canonical records remain controlling.

Dossier mode: downgraded internal review dossier with caveats preserved

## 5. Evidence Detail By Entity

This section preserves the system opinion and source-fact detail behind the briefing memo. It remains an internal possible waste, fraud, abuse, or mismanagement screening opinion, not a formal allegation or outside-facing conclusion.

### Abode Housing Development

CalDS flags Abode Housing Development as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Executive compensation: Latest parsed return 2023 reports LOUIS CHICOINE (EXECUTIVE DIRECTOR) of $300,007, equal to 4.72% of parsed expenses.
   - When/where: year(s): 2023; subject: Abode Housing Development
   - How it triggered: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

2. High - Financial growth: Internal Revenue Service parsed revenue moved from $7,841,164 in 2022 to $13,604,800 in 2023 (+73.5%).
   - When/where: year(s): 2022, 2023; subject: Abode Housing Development
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

3. Medium - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2020, not-low-risk years=2018, 2019, 2021, 2022, findings rows=0.
   - When/where: year(s): 2018, 2019, 2020, 2021, 2022; subject: Abode Housing Development
   - How it triggered: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Medium - Payroll and wages: Parsed salaries/compensation/benefits moved from $2,022,176 in 2022 to $2,552,716 in 2023 (+26.2%).
   - When/where: year(s): 2022, 2023; subject: Abode Housing Development
   - How it triggered: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

5. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments.
   - When/where: year(s): 2025; place: Santa Clara; subject: Abode Housing Development
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

6. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Abode Housing Development
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E12`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### Burbank Housing Development Corporation

CalDS flags Burbank Housing Development Corporation as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Executive compensation: Latest parsed return 2023 reports LAWRANCE FLORIN (chief executive officer) of $549,817, equal to 2.13% of parsed expenses.
   - When/where: year(s): 2023; subject: Burbank Housing Development Corporation
   - How it triggered: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

2. High - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $215,420,651. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $16,702,443.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Medium - Spend-versus-results: Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852.
   - When/where: year(s): 2023, 2024, 2025; place: Napa, Sonoma; subject: Burbank Housing Development Corporation
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Napa, Sonoma'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

4. Medium - Spending growth: Internal Revenue Service parsed expenses moved from $18,810,477 in 2022 to $25,771,273 in 2023 (+37.0%).
   - When/where: year(s): 2022, 2023; subject: Burbank Housing Development Corporation
   - How it triggered: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

5. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive.
   - When/where: year(s): 2025; subject: Burbank Housing Development Corporation
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E36`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

6. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E12`, `E36`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### California Supportive Housing

CalDS flags California Supportive Housing as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Spend-versus-results: California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, Sacramento'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - State homelessness award exposure: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing.
   - When/where: year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E73`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E12`, `E73`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

4. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

5. Data gap - Facility status: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: California Supportive Housing
   - How it triggered: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

6. Data gap - Financial growth: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Case-wide

CalDS flags Case-wide as a source-gap review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Data gap - License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
   - When/where: subject: Case-wide
   - How it triggered: Data gap License/adverse-action history screen via test 'California Department of Health Care Services adverse-action page machine readability'. Data status: non_machine_readable_source.
   - Evidence: `E13`, `source_table_official_homelessness_outcomes`; source: [internal local artifact]
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

2. Data gap - Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
   - When/where: subject: Case-wide
   - How it triggered: Data gap Public attention and traffic screen via test 'Social media and website traffic coverage'. Data status: missing_required_attention_sources.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

3. Low - Spend-versus-results: Official outcome series are ingested and joined into 12 entity/county context rows. These rows remain contextual and are not provider-attributable results.
   - When/where: subject: Case-wide
   - How it triggered: Low Spend-versus-results screen via test 'Outcome-denominator coverage for homelessness, drug use, crime, and treatment results'. Data status: observed.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Community Revitalization and Development Corporation

CalDS flags Community Revitalization and Development Corporation as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Executive compensation: Latest parsed return 2023 reports WILLIAM D RUTLEDGE (PRESIDENT) of $151,354, equal to 13.02% of parsed expenses.
   - When/where: year(s): 2023; subject: Community Revitalization and Development Corporation
   - How it triggered: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

2. High - Financial growth: Internal Revenue Service parsed revenue moved from $1,559,120 in 2022 to $6,055,016 in 2023 (+288.4%).
   - When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

3. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $243,093 in 2022 to $358,911 in 2023 (+47.6%; $89,728 per employee using 4 employees).
   - When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

4. Medium - Spend-versus-results: Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496.
   - When/where: year(s): 2023, 2024, 2025; place: Amador, Solano; subject: Community Revitalization and Development Corporation
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Amador, Solano'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spending growth: Internal Revenue Service parsed expenses moved from $955,555 in 2022 to $1,162,854 in 2023 (+21.7%).
   - When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
   - How it triggered: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

6. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons.
   - When/where: year(s): 2025; subject: Community Revitalization and Development Corporation
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E69`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### DignityMoves

CalDS flags DignityMoves as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0.
   - When/where: year(s): 2024; subject: DignityMoves
   - How it triggered: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

2. High - Financial growth: Internal Revenue Service parsed revenue moved from $5,610,876 in 2021 to $32,304,888 in 2023 (+475.8%).
   - When/where: year(s): 2021, 2023; subject: DignityMoves
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

3. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $516,665 in 2021 to $1,572,234 in 2023 (+204.3%; $157,223 per employee using 10 employees).
   - When/where: year(s): 2021, 2023; subject: DignityMoves
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

4. High - Spend-versus-results: DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, San Bernardino, Ventura'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. High - Spending growth: Internal Revenue Service parsed expenses moved from $4,746,724 in 2021 to $25,122,959 in 2023 (+429.3%).
   - When/where: year(s): 2021, 2023; subject: DignityMoves
   - How it triggered: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

6. High - State homelessness award exposure: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E66`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Habitat for Humanity Yuba/Sutter, Inc.

CalDS flags Habitat for Humanity Yuba/Sutter, Inc. as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, 2025, internal-control deficiency years=2022, not-low-risk years=2022, 2023, 2024, 2025, findings rows=9.
   - When/where: year(s): 2022, 2023, 2024, 2025; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

2. High - Executive compensation: Latest parsed return 2023 reports Joseph Hale (President & chief executive officer) of $135,098, equal to 2.93% of parsed expenses.
   - When/where: year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

3. High - Financial growth: Internal Revenue Service parsed revenue moved from $4,335,979 in 2022 to $10,271,607 in 2023 (+136.9%).
   - When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

4. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $183,845 in 2022 to $1,600,872 in 2023 (+770.8%; $32,017 per employee using 50 employees).
   - When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

5. Medium - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $7,539,939 / total revenue $10,271,607 = 73.4%.
   - When/where: year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

6. Medium - Spending growth: Internal Revenue Service parsed expenses moved from $3,551,102 in 2022 to $4,616,592 in 2023 (+30.0%).
   - When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### Hope the Mission

CalDS flags Hope the Mission as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2022, 2023, 2024, findings rows=103.
   - When/where: year(s): 2022, 2023, 2024; subject: Hope the Mission
   - How it triggered: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

2. High - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $150,607,803. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $21,345,117.
   - When/where: subject: Hope the Mission
   - How it triggered: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. High - Financial growth: Internal Revenue Service parsed revenue moved from $49,730,169 in 2022 to $119,352,333 in 2023 (+140.0%).
   - When/where: year(s): 2022, 2023; subject: Hope the Mission
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

4. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $19,579,583 in 2022 to $31,108,526 in 2023 (+58.9%; $32,919 per employee using 945 employees).
   - When/where: year(s): 2022, 2023; subject: Hope the Mission
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

5. High - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $102,056,068 / total revenue $119,352,333 = 85.5%.
   - When/where: year(s): 2023; subject: Hope the Mission
   - How it triggered: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

6. High - Spend-versus-results: Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Hope the Mission
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Lutheran Social Services of Southern California

CalDS flags Lutheran Social Services of Southern California as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $16,957,470 / total revenue $19,838,870 = 85.5%.
   - When/where: year(s): 2023; subject: Lutheran Social Services of Southern California
   - How it triggered: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. Medium - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2018, 2019, 2020, not-low-risk years=2019, 2020, 2021, 2022, 2023, findings rows=10.
   - When/where: year(s): 2018, 2019, 2020, 2021, 2022, 2023; subject: Lutheran Social Services of Southern California
   - How it triggered: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Medium - Executive compensation: Latest parsed return 2023 reports DR LASHARNDA BECKWITH (PRESIDENT & chief executive officer) of $241,871, equal to 1.35% of parsed expenses.
   - When/where: year(s): 2023; subject: Lutheran Social Services of Southern California
   - How it triggered: Medium Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

4. Medium - Payroll and wages: Parsed salaries/compensation/benefits moved from $9,258,039 in 2022 to $11,800,842 in 2023 (+27.5%; $43,385 per employee using 272 employees).
   - When/where: year(s): 2022, 2023; subject: Lutheran Social Services of Southern California
   - How it triggered: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

5. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus.
   - When/where: year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E70`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

6. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E12`, `E70`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### PATH Ventures

CalDS flags PATH Ventures as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Executive compensation: Latest parsed return 2023 reports JENNIFER HARK-DIEtZ (President) of $423,702, equal to 7.32% of parsed expenses.
   - When/where: year(s): 2023; subject: PATH Ventures
   - How it triggered: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

2. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $1,461,070 in 2022 to $2,503,308 in 2023 (+71.3%; $147,253 per employee using 17 employees).
   - When/where: year(s): 2022, 2023; subject: PATH Ventures
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

3. High - Spending growth: Internal Revenue Service parsed expenses moved from $3,032,491 in 2022 to $5,786,089 in 2023 (+90.8%).
   - When/where: year(s): 2022, 2023; subject: PATH Ventures
   - How it triggered: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

4. Medium - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2017, not-low-risk years=2016, 2017, findings rows=0.
   - When/where: year(s): 2016, 2017; subject: PATH Ventures
   - How it triggered: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

5. Medium - Spend-versus-results: PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: PATH Ventures
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park.
   - When/where: year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E40`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Self-Help Enterprises

CalDS flags Self-Help Enterprises as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Financial growth: Internal Revenue Service parsed revenue moved from $41,610,602 in 2022 to $65,987,549 in 2023 (+58.6%).
   - When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

2. High - Spending growth: Internal Revenue Service parsed expenses moved from $35,659,831 in 2022 to $59,181,040 in 2023 (+66.0%).
   - When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
   - How it triggered: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

3. Medium - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2024, not-low-risk years=2025, findings rows=3.
   - When/where: year(s): 2024, 2025; subject: Self-Help Enterprises
   - How it triggered: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $101,329,080. Top parsed program: CAPITAL MAGNET FUND at $6,135,000.
   - When/where: subject: Self-Help Enterprises
   - How it triggered: Medium Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

5. Medium - Off-scope activity: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes.
   - When/where: year(s): 2023; subject: Self-Help Enterprises
   - How it triggered: Medium Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

6. Medium - Payroll and wages: Parsed salaries/compensation/benefits moved from $13,090,709 in 2022 to $16,817,659 in 2023 (+28.5%; $74,745 per employee using 225 employees).
   - When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
   - How it triggered: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Service First Northern California

CalDS flags Service First Northern California as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Financial growth: Internal Revenue Service parsed revenue moved from $4,639,426 in 2022 to $7,264,326 in 2023 (+56.6%).
   - When/where: year(s): 2022, 2023; subject: Service First Northern California
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

2. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $3,105,229 in 2022 to $5,227,631 in 2023 (+68.3%; $41,489 per employee using 126 employees).
   - When/where: year(s): 2022, 2023; subject: Service First Northern California
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

3. Medium - Executive compensation: Latest parsed return 2023 reports VERNELL HILL JR (chief executive officer) of $130,000, equal to 1.72% of parsed expenses.
   - When/where: year(s): 2023; subject: Service First Northern California
   - How it triggered: Medium Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

4. Medium - Spend-versus-results: Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520.
   - When/where: year(s): 2023, 2024, 2025; place: San Joaquin; subject: Service First Northern California
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Joaquin'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

5. Medium - Spending growth: Internal Revenue Service parsed expenses moved from $5,390,623 in 2022 to $7,561,906 in 2023 (+40.3%).
   - When/where: year(s): 2022, 2023; subject: Service First Northern California
   - How it triggered: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

6. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House.
   - When/where: year(s): 2026; subject: Service First Northern California
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Swords to Plowshares

CalDS flags Swords to Plowshares as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $178,025,080. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $6,418,137.
   - When/where: subject: Swords to Plowshares
   - How it triggered: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $2,017,562 in 2022 to $16,415,075 in 2023 (+713.6%; $64,121 per employee using 256 employees).
   - When/where: year(s): 2022, 2023; subject: Swords to Plowshares
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

3. Medium - Off-scope activity: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes.
   - When/where: year(s): 2023; subject: Swords to Plowshares
   - How it triggered: Medium Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.

4. Medium - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $26,978,728 / total revenue $37,321,790 = 72.3%.
   - When/where: year(s): 2023; subject: Swords to Plowshares
   - How it triggered: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

5. Medium - Spend-versus-results: Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030.
   - When/where: year(s): 2023, 2024, 2025; place: San Francisco; subject: Swords to Plowshares
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Francisco'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness.
   - When/where: year(s): 2025; place: San Francisco; subject: Swords to Plowshares
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E56`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### TLCS, Inc.

CalDS flags TLCS, Inc. as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Payroll and wages: Parsed salaries/compensation/benefits moved from $12,111,985 in 2022 to $17,500,055 in 2023 (+44.5%; $40,323 per employee using 434 employees).
   - When/where: year(s): 2022, 2023; subject: TLCS, Inc.
   - How it triggered: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

2. High - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $28,978,012 / total revenue $30,779,320 = 94.1%.
   - When/where: year(s): 2023; subject: TLCS, Inc.
   - How it triggered: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Medium - Federal award exposure: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $116,919,376. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $5,637,683.
   - When/where: subject: TLCS, Inc.
   - How it triggered: Medium Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

4. Medium - Financial growth: Internal Revenue Service parsed revenue moved from $22,008,043 in 2022 to $30,779,320 in 2023 (+39.9%).
   - When/where: year(s): 2022, 2023; subject: TLCS, Inc.
   - How it triggered: Medium Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

5. Medium - Spend-versus-results: TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000.
   - When/where: year(s): 2023, 2024, 2025; place: Sacramento; subject: TLCS, Inc.
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Sacramento'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. Medium - Spending growth: Internal Revenue Service parsed expenses moved from $22,353,498 in 2022 to $28,035,199 in 2023 (+25.4%).
   - When/where: year(s): 2022, 2023; subject: TLCS, Inc.
   - How it triggered: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### The People Concern

CalDS flags The People Concern as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $71,167,481 / total revenue $83,334,236 = 85.4%.
   - When/where: year(s): 2023; subject: The People Concern
   - How it triggered: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. High - Spend-versus-results: The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: The People Concern
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. High - State homelessness award exposure: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community.
   - When/where: year(s): 2025, 2026; place: Los Angeles; subject: The People Concern
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

4. Medium - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=none, not-low-risk years=none, findings rows=1.
   - When/where: subject: The People Concern
   - How it triggered: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

5. Medium - Payroll and wages: Parsed salaries/compensation/benefits moved from $39,390,844 in 2022 to $52,463,892 in 2023 (+33.2%; $52,307 per employee using 1003 employees).
   - When/where: year(s): 2022, 2023; subject: The People Concern
   - How it triggered: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

6. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: The People Concern
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E12`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Weingart Center Association

CalDS flags Weingart Center Association as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Audit controls: Federal Audit Clearinghouse summary reports material weakness years=2021, 2023, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2020, 2021, 2022, 2023, 2024, 2025, findings rows=22.
   - When/where: year(s): 2020, 2021, 2022, 2023, 2024, 2025; subject: Weingart Center Association
   - How it triggered: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
   - Evidence: `E20`, `source_table_fac_audit`; source: [internal local artifact]
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

2. High - Connected-party enforcement exposure: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive.
   - When/where: year(s): 2025; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High Connected-party enforcement exposure screen via test 'Official federal criminal-case source and City project linkage screen'. Data status: third_party_charged_presumption_of_innocence.
   - Evidence: `E22`, `E21`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`, `source_table_enforcement_docket_discovery`; source: https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf; [internal local artifact] [internal local artifact]
   - Why it matters: An official charge or indictment connected to a public-funded project or transaction chain is a hard deep-review trigger because the reviewer must verify named parties, payment flow, controls, and whether public dollars were exposed.

3. High - Financial growth: Internal Revenue Service parsed revenue moved from $29,856,733 in 2022 to $107,010,585 in 2023 (+258.4%).
   - When/where: year(s): 2022, 2023; subject: Weingart Center Association
   - How it triggered: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.

4. High - Public-funds concentration: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $100,833,258 / total revenue $107,010,585 = 94.2%.
   - When/where: year(s): 2023; subject: Weingart Center Association
   - How it triggered: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
   - Evidence: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

5. High - Spend-versus-results: Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

6. High - State homelessness award exposure: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby.
   - When/where: year(s): 2023; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E12`, `E41`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.


## 6. Flagged Review Matrix

Methodology: Waste, fraud, abuse, and mismanagement risk-screening matrix generated from parsed Internal Revenue Service Form 990 and ProPublica Nonprofit Explorer API summaries, Federal Audit Clearinghouse, California Department of Health Care Services facility-status, California Department of Housing and Community Development Homekey/Homekey+ state-award, official enforcement/docket records, county/document index, and retrieved service-page records. The matrix tests observable risk proxies: year-over-year financial growth, spending growth, public-funds concentration, executive compensation, payroll scale, political/lobbying indicators, audit-control flags, enforcement/docket source flags including connected-party official charges, award concentration, facility closure patterns, homelessness-scope web-language checks, official county or Continuum of Care outcome context, and remaining provider-attributable outcome gaps.

Risk scale: Indicator levels: High=immediate reviewer follow-up, Medium=review queue, Low=context only, Data gap=required source missing or not parsed. Levels are screening priorities, not findings or allegations.

| Risk level | Count |
| --- | --- |
| High | 47 |
| Medium | 47 |
| Data gap | 39 |
| Low | 92 |

High and medium rows are review priorities. Data-gap rows are source-collection blockers. Low rows are not expanded here unless they are needed for context.

### High Rows

#### High-1: DignityMoves - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0.
- When/where: year(s): 2024; subject: DignityMoves
- How this triggered review: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=2024, internal-control deficiency years=none, not-low-risk years=2024, findings rows=0. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### High-2: Habitat for Humanity Yuba/Sutter, Inc. - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, 2025, internal-control deficiency years=2022, not-low-risk years=2022, 2023, 2024, 2025, findings rows=9.
- When/where: year(s): 2022, 2023, 2024, 2025; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, 2025, internal-control deficiency years=2022, not-low-risk years=2022, 2023, 2024, 2025, findings rows=9. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### High-3: Hope the Mission - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2022, 2023, 2024, findings rows=103.
- When/where: year(s): 2022, 2023, 2024; subject: Hope the Mission
- How this triggered review: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=2022, 2023, 2024, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2022, 2023, 2024, findings rows=103. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### High-4: Weingart Center Association - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=2021, 2023, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2020, 2021, 2022, 2023, 2024, 2025, findings rows=22.
- When/where: year(s): 2020, 2021, 2022, 2023, 2024, 2025; subject: Weingart Center Association
- How this triggered review: High Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=2021, 2023, internal-control deficiency years=2022, 2023, 2024, not-low-risk years=2020, 2021, 2022, 2023, 2024, 2025, findings rows=22. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### High-5: Weingart Center Association - Connected-party enforcement exposure

- Test: Official federal criminal-case source and City project linkage screen
- What CalDS found: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive.
- When/where: year(s): 2025; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High Connected-party enforcement exposure screen via test 'Official federal criminal-case source and City project linkage screen'. Data status: third_party_charged_presumption_of_innocence.
- Evidence refs: `E22`, `E21`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`, `source_table_enforcement_docket_discovery`
- Source URI(s): https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf; [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. This source fact matches the implemented connected-party enforcement exposure screen and should stay in the active review queue.
- Why this matters: An official charge or indictment connected to a public-funded project or transaction chain is a hard deep-review trigger because the reviewer must verify named parties, payment flow, controls, and whether public dollars were exposed.
- What this flags: Open the federal press release, City Clerk Homekey authorization, and 2026 operations report; verify case number, named parties, property address, project agreements, payment flows, due diligence records, and whether any official source names Weingart as charged or only as transaction counterparty/operator.
- What this does not prove: It does not prove the nonprofit was charged, liable, or responsible; the cited official source controls the named-party legal status.
- Human next step: Verify charging documents, docket status, named parties, property or project relationship, payment records, due diligence files, and internal controls before any entity-level conclusion.
- Caveat: The official federal source charges Taylor, not Weingart Center Association.
- Caveat: The row is a deep-dive trigger because public homelessness funds and a Weingart-linked project appear in the official-source chain.
- Caveat: A criminal charge is an allegation; every defendant is presumed innocent unless and until proven guilty in court.
- Caveat: Use exact legal status from the official source; do not convert third-party charges into entity-level findings.
- Caveat: A connected-party charge is a mandatory deep-review trigger, not a finding that the nonprofit was charged or liable.

#### High-6: Abode Housing Development - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports LOUIS CHICOINE (EXECUTIVE DIRECTOR) of $300,007, equal to 4.72% of parsed expenses.
- When/where: year(s): 2023; subject: Abode Housing Development
- How this triggered review: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports LOUIS CHICOINE (EXECUTIVE DIRECTOR) of $300,007, equal to 4.72% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-7: Burbank Housing Development Corporation - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports LAWRANCE FLORIN (chief executive officer) of $549,817, equal to 2.13% of parsed expenses.
- When/where: year(s): 2023; subject: Burbank Housing Development Corporation
- How this triggered review: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports LAWRANCE FLORIN (chief executive officer) of $549,817, equal to 2.13% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-8: Community Revitalization and Development Corporation - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports WILLIAM D RUTLEDGE (PRESIDENT) of $151,354, equal to 13.02% of parsed expenses.
- When/where: year(s): 2023; subject: Community Revitalization and Development Corporation
- How this triggered review: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports WILLIAM D RUTLEDGE (PRESIDENT) of $151,354, equal to 13.02% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-9: Habitat for Humanity Yuba/Sutter, Inc. - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports Joseph Hale (President & chief executive officer) of $135,098, equal to 2.93% of parsed expenses.
- When/where: year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports Joseph Hale (President & chief executive officer) of $135,098, equal to 2.93% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-10: PATH Ventures - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports JENNIFER HARK-DIEtZ (President) of $423,702, equal to 7.32% of parsed expenses.
- When/where: year(s): 2023; subject: PATH Ventures
- How this triggered review: High Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports JENNIFER HARK-DIEtZ (President) of $423,702, equal to 7.32% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### High-11: Burbank Housing Development Corporation - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $215,420,651. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $16,702,443.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $215,420,651. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $16,702,443. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### High-12: Hope the Mission - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $150,607,803. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $21,345,117.
- When/where: subject: Hope the Mission
- How this triggered review: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $150,607,803. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $21,345,117. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### High-13: Swords to Plowshares - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $178,025,080. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $6,418,137.
- When/where: subject: Swords to Plowshares
- How this triggered review: High Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $178,025,080. Top parsed program: VA SUPPORTIVE SERVICES FOR VETERAN FAMILIES PROGRAM at $6,418,137. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### High-14: Abode Housing Development - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $7,841,164 in 2022 to $13,604,800 in 2023 (+73.5%).
- When/where: year(s): 2022, 2023; subject: Abode Housing Development
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $7,841,164 in 2022 to $13,604,800 in 2023 (+73.5%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-15: Community Revitalization and Development Corporation - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $1,559,120 in 2022 to $6,055,016 in 2023 (+288.4%).
- When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $1,559,120 in 2022 to $6,055,016 in 2023 (+288.4%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-16: DignityMoves - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $5,610,876 in 2021 to $32,304,888 in 2023 (+475.8%).
- When/where: year(s): 2021, 2023; subject: DignityMoves
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $5,610,876 in 2021 to $32,304,888 in 2023 (+475.8%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-17: Habitat for Humanity Yuba/Sutter, Inc. - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $4,335,979 in 2022 to $10,271,607 in 2023 (+136.9%).
- When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $4,335,979 in 2022 to $10,271,607 in 2023 (+136.9%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-18: Hope the Mission - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $49,730,169 in 2022 to $119,352,333 in 2023 (+140.0%).
- When/where: year(s): 2022, 2023; subject: Hope the Mission
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $49,730,169 in 2022 to $119,352,333 in 2023 (+140.0%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-19: Self-Help Enterprises - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $41,610,602 in 2022 to $65,987,549 in 2023 (+58.6%).
- When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $41,610,602 in 2022 to $65,987,549 in 2023 (+58.6%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-20: Service First Northern California - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $4,639,426 in 2022 to $7,264,326 in 2023 (+56.6%).
- When/where: year(s): 2022, 2023; subject: Service First Northern California
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $4,639,426 in 2022 to $7,264,326 in 2023 (+56.6%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-21: Weingart Center Association - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $29,856,733 in 2022 to $107,010,585 in 2023 (+258.4%).
- When/where: year(s): 2022, 2023; subject: Weingart Center Association
- How this triggered review: High Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $29,856,733 in 2022 to $107,010,585 in 2023 (+258.4%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-22: Community Revitalization and Development Corporation - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $243,093 in 2022 to $358,911 in 2023 (+47.6%; $89,728 per employee using 4 employees).
- When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $243,093 in 2022 to $358,911 in 2023 (+47.6%; $89,728 per employee using 4 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Community Revitalization and Development Corporation and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-23: DignityMoves - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $516,665 in 2021 to $1,572,234 in 2023 (+204.3%; $157,223 per employee using 10 employees).
- When/where: year(s): 2021, 2023; subject: DignityMoves
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $516,665 in 2021 to $1,572,234 in 2023 (+204.3%; $157,223 per employee using 10 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for DignityMoves and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-24: Habitat for Humanity Yuba/Sutter, Inc. - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $183,845 in 2022 to $1,600,872 in 2023 (+770.8%; $32,017 per employee using 50 employees).
- When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $183,845 in 2022 to $1,600,872 in 2023 (+770.8%; $32,017 per employee using 50 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Habitat for Humanity Yuba/Sutter, Inc. and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-25: Hope the Mission - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $19,579,583 in 2022 to $31,108,526 in 2023 (+58.9%; $32,919 per employee using 945 employees).
- When/where: year(s): 2022, 2023; subject: Hope the Mission
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $19,579,583 in 2022 to $31,108,526 in 2023 (+58.9%; $32,919 per employee using 945 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Hope the Mission and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-26: PATH Ventures - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $1,461,070 in 2022 to $2,503,308 in 2023 (+71.3%; $147,253 per employee using 17 employees).
- When/where: year(s): 2022, 2023; subject: PATH Ventures
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $1,461,070 in 2022 to $2,503,308 in 2023 (+71.3%; $147,253 per employee using 17 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for PATH Ventures and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-27: Service First Northern California - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $3,105,229 in 2022 to $5,227,631 in 2023 (+68.3%; $41,489 per employee using 126 employees).
- When/where: year(s): 2022, 2023; subject: Service First Northern California
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $3,105,229 in 2022 to $5,227,631 in 2023 (+68.3%; $41,489 per employee using 126 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Service First Northern California and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-28: Swords to Plowshares - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $2,017,562 in 2022 to $16,415,075 in 2023 (+713.6%; $64,121 per employee using 256 employees).
- When/where: year(s): 2022, 2023; subject: Swords to Plowshares
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $2,017,562 in 2022 to $16,415,075 in 2023 (+713.6%; $64,121 per employee using 256 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Swords to Plowshares and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-29: TLCS, Inc. - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $12,111,985 in 2022 to $17,500,055 in 2023 (+44.5%; $40,323 per employee using 434 employees).
- When/where: year(s): 2022, 2023; subject: TLCS, Inc.
- How this triggered review: High Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $12,111,985 in 2022 to $17,500,055 in 2023 (+44.5%; $40,323 per employee using 434 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for TLCS, Inc. and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### High-30: Hope the Mission - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $102,056,068 / total revenue $119,352,333 = 85.5%.
- When/where: year(s): 2023; subject: Hope the Mission
- How this triggered review: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $102,056,068 / total revenue $119,352,333 = 85.5%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-31: Lutheran Social Services of Southern California - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $16,957,470 / total revenue $19,838,870 = 85.5%.
- When/where: year(s): 2023; subject: Lutheran Social Services of Southern California
- How this triggered review: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $16,957,470 / total revenue $19,838,870 = 85.5%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-32: TLCS, Inc. - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $28,978,012 / total revenue $30,779,320 = 94.1%.
- When/where: year(s): 2023; subject: TLCS, Inc.
- How this triggered review: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $28,978,012 / total revenue $30,779,320 = 94.1%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-33: The People Concern - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $71,167,481 / total revenue $83,334,236 = 85.4%.
- When/where: year(s): 2023; subject: The People Concern
- How this triggered review: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $71,167,481 / total revenue $83,334,236 = 85.4%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-34: Weingart Center Association - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $100,833,258 / total revenue $107,010,585 = 94.2%.
- When/where: year(s): 2023; subject: Weingart Center Association
- How this triggered review: High Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $100,833,258 / total revenue $107,010,585 = 94.2%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### High-35: California Supportive Housing - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda, Sacramento
- What CalDS found: California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, Sacramento'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-36: DignityMoves - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda, San Bernardino, Ventura
- What CalDS found: DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, San Bernardino, Ventura'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-37: Hope the Mission - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Hope the Mission
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-38: The People Concern - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: The People Concern
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-39: Weingart Center Association - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-40: DignityMoves - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $4,746,724 in 2021 to $25,122,959 in 2023 (+429.3%).
- When/where: year(s): 2021, 2023; subject: DignityMoves
- How this triggered review: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $4,746,724 in 2021 to $25,122,959 in 2023 (+429.3%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-41: PATH Ventures - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $3,032,491 in 2022 to $5,786,089 in 2023 (+90.8%).
- When/where: year(s): 2022, 2023; subject: PATH Ventures
- How this triggered review: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $3,032,491 in 2022 to $5,786,089 in 2023 (+90.8%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-42: Self-Help Enterprises - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $35,659,831 in 2022 to $59,181,040 in 2023 (+66.0%).
- When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
- How this triggered review: High Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $35,659,831 in 2022 to $59,181,040 in 2023 (+66.0%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### High-43: California Supportive Housing - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing.
- When/where: year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E73`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-44: DignityMoves - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E66`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-45: Hope the Mission - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn.
- When/where: year(s): 2023, 2024; place: Los Angeles; subject: Hope the Mission
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E61`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-46: The People Concern - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community.
- When/where: year(s): 2025, 2026; place: Los Angeles; subject: The People Concern
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-47: Weingart Center Association - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby.
- When/where: year(s): 2023; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E41`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

### Medium Rows

#### Medium-1: Abode Housing Development - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2020, not-low-risk years=2018, 2019, 2021, 2022, findings rows=0.
- When/where: year(s): 2018, 2019, 2020, 2021, 2022; subject: Abode Housing Development
- How this triggered review: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2020, not-low-risk years=2018, 2019, 2021, 2022, findings rows=0. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-2: Lutheran Social Services of Southern California - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2018, 2019, 2020, not-low-risk years=2019, 2020, 2021, 2022, 2023, findings rows=10.
- When/where: year(s): 2018, 2019, 2020, 2021, 2022, 2023; subject: Lutheran Social Services of Southern California
- How this triggered review: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2018, 2019, 2020, not-low-risk years=2019, 2020, 2021, 2022, 2023, findings rows=10. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-3: PATH Ventures - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2017, not-low-risk years=2016, 2017, findings rows=0.
- When/where: year(s): 2016, 2017; subject: PATH Ventures
- How this triggered review: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2017, not-low-risk years=2016, 2017, findings rows=0. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-4: Self-Help Enterprises - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2024, not-low-risk years=2025, findings rows=3.
- When/where: year(s): 2024, 2025; subject: Self-Help Enterprises
- How this triggered review: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=2024, not-low-risk years=2025, findings rows=3. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-5: The People Concern - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=none, not-low-risk years=none, findings rows=1.
- When/where: subject: The People Concern
- How this triggered review: Medium Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Federal Audit Clearinghouse summary reports material weakness years=none, internal-control deficiency years=none, not-low-risk years=none, findings rows=1. This source fact matches the implemented audit controls screen and should stay in the active review queue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Open the audit source documents and row-level Federal Audit Clearinghouse findings to verify finding status, program, agency, questioned costs, repeat status, and corrective-action response.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.
- Caveat: Federal Audit Clearinghouse flags are audit-context signals; they must be interpreted at report year and program level.

#### Medium-6: Lutheran Social Services of Southern California - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports DR LASHARNDA BECKWITH (PRESIDENT & chief executive officer) of $241,871, equal to 1.35% of parsed expenses.
- When/where: year(s): 2023; subject: Lutheran Social Services of Southern California
- How this triggered review: Medium Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports DR LASHARNDA BECKWITH (PRESIDENT & chief executive officer) of $241,871, equal to 1.35% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### Medium-7: Service First Northern California - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports VERNELL HILL JR (chief executive officer) of $130,000, equal to 1.72% of parsed expenses.
- When/where: year(s): 2023; subject: Service First Northern California
- How this triggered review: Medium Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports VERNELL HILL JR (chief executive officer) of $130,000, equal to 1.72% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### Medium-8: Weingart Center Association - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: Latest parsed return 2023 reports SENATOR KEVIN MURRAY RETIRED (PRESIDENT & chief executive officer) of $432,188, equal to 1.52% of parsed expenses.
- When/where: year(s): 2023; subject: Weingart Center Association
- How this triggered review: Medium Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports SENATOR KEVIN MURRAY RETIRED (PRESIDENT & chief executive officer) of $432,188, equal to 1.52% of parsed expenses. This source fact matches the implemented executive compensation screen and should stay in the active review queue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Compare compensation to board approval process, market survey disclosure, related-organization pay, and peer organizations before any conclusion.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: High compensation can be explainable by size, clinical complexity, related-organization structures, or one-time items.

#### Medium-9: Self-Help Enterprises - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $101,329,080. Top parsed program: CAPITAL MAGNET FUND at $6,135,000.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Medium Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $101,329,080. Top parsed program: CAPITAL MAGNET FUND at $6,135,000. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-10: TLCS, Inc. - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $116,919,376. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $5,637,683.
- When/where: subject: TLCS, Inc.
- How this triggered review: Medium Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $116,919,376. Top parsed program: MEDICAL ASSISTANCE PROGRAM at $5,637,683. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-11: Weingart Center Association - Federal award exposure

- Test: Federal Audit Clearinghouse cumulative award amount in retrieved reports
- What CalDS found: Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $82,058,846. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $10,200,000.
- When/where: subject: Weingart Center Association
- How this triggered review: Medium Federal award exposure screen via test 'Federal Audit Clearinghouse cumulative award amount in retrieved reports'. Data status: observed.
- Evidence refs: `E20`, `source_table_fac_audit`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed Federal Audit Clearinghouse award amount total across retrieved reports is $82,058,846. Top parsed program: CORONAVIRUS STATE AND LOCAL FISCAL RECOVERY FUNDS at $10,200,000. This source fact matches the implemented federal award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Use large award totals to prioritize allowable-cost, subrecipient, and deliverable testing; do not infer performance from amount alone.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Award exposure is a materiality signal, not an adverse finding.

#### Medium-12: TLCS, Inc. - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: Internal Revenue Service parsed revenue moved from $22,008,043 in 2022 to $30,779,320 in 2023 (+39.9%).
- When/where: year(s): 2022, 2023; subject: TLCS, Inc.
- How this triggered review: Medium Financial growth screen via test 'Year-over-year total revenue growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed revenue moved from $22,008,043 in 2022 to $30,779,320 in 2023 (+39.9%). This source fact matches the implemented financial growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-13: DignityMoves - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes.
- When/where: year(s): 2023; subject: DignityMoves
- How this triggered review: Medium Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes. This source fact matches the implemented off-scope activity screen and should stay in the active review queue.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If either indicator is yes, inspect the full return, schedules, funding restrictions, and cost allocation before escalation.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: A yes indicator can reflect disclosed permissible activity; the reviewer must test allowability and funding source.

#### Medium-14: Self-Help Enterprises - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes.
- When/where: year(s): 2023; subject: Self-Help Enterprises
- How this triggered review: Medium Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes. This source fact matches the implemented off-scope activity screen and should stay in the active review queue.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If either indicator is yes, inspect the full return, schedules, funding restrictions, and cost allocation before escalation.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: A yes indicator can reflect disclosed permissible activity; the reviewer must test allowability and funding source.

#### Medium-15: Swords to Plowshares - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes.
- When/where: year(s): 2023; subject: Swords to Plowshares
- How this triggered review: Medium Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed return 2023 reports PoliticalCampaignActyInd=no and LobbyingActivitiesInd=yes. This source fact matches the implemented off-scope activity screen and should stay in the active review queue.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: If either indicator is yes, inspect the full return, schedules, funding restrictions, and cost allocation before escalation.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: A yes indicator can reflect disclosed permissible activity; the reviewer must test allowability and funding source.

#### Medium-16: Abode Housing Development - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $2,022,176 in 2022 to $2,552,716 in 2023 (+26.2%).
- When/where: year(s): 2022, 2023; subject: Abode Housing Development
- How this triggered review: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $2,022,176 in 2022 to $2,552,716 in 2023 (+26.2%). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Abode Housing Development and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-17: Lutheran Social Services of Southern California - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $9,258,039 in 2022 to $11,800,842 in 2023 (+27.5%; $43,385 per employee using 272 employees).
- When/where: year(s): 2022, 2023; subject: Lutheran Social Services of Southern California
- How this triggered review: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $9,258,039 in 2022 to $11,800,842 in 2023 (+27.5%; $43,385 per employee using 272 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Lutheran Social Services of Southern California and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-18: Self-Help Enterprises - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $13,090,709 in 2022 to $16,817,659 in 2023 (+28.5%; $74,745 per employee using 225 employees).
- When/where: year(s): 2022, 2023; subject: Self-Help Enterprises
- How this triggered review: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $13,090,709 in 2022 to $16,817,659 in 2023 (+28.5%; $74,745 per employee using 225 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Self-Help Enterprises and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-19: The People Concern - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $39,390,844 in 2022 to $52,463,892 in 2023 (+33.2%; $52,307 per employee using 1003 employees).
- When/where: year(s): 2022, 2023; subject: The People Concern
- How this triggered review: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $39,390,844 in 2022 to $52,463,892 in 2023 (+33.2%; $52,307 per employee using 1003 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for The People Concern and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-20: Weingart Center Association - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: Parsed salaries/compensation/benefits moved from $6,690,949 in 2022 to $8,564,051 in 2023 (+28.0%; $44,145 per employee using 194 employees).
- When/where: year(s): 2022, 2023; subject: Weingart Center Association
- How this triggered review: Medium Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Parsed salaries/compensation/benefits moved from $6,690,949 in 2022 to $8,564,051 in 2023 (+28.0%; $44,145 per employee using 194 employees). This source fact matches the implemented payroll and wages screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Compare payroll growth with staffing changes, wage requirements, vacancy rates, service units, and contract deliverables.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Weingart Center Association and compare the raw source wording to this row.
- Caveat: This is a spending efficiency trigger, not a compensation reasonableness finding.

#### Medium-21: DignityMoves - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $24,931,590 / total revenue $32,304,888 = 77.2%.
- When/where: year(s): 2023; subject: DignityMoves
- How this triggered review: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $24,931,590 / total revenue $32,304,888 = 77.2%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### Medium-22: Habitat for Humanity Yuba/Sutter, Inc. - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $7,539,939 / total revenue $10,271,607 = 73.4%.
- When/where: year(s): 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $7,539,939 / total revenue $10,271,607 = 73.4%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### Medium-23: Self-Help Enterprises - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $47,497,751 / total revenue $65,987,549 = 72.0%.
- When/where: year(s): 2023; subject: Self-Help Enterprises
- How this triggered review: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $47,497,751 / total revenue $65,987,549 = 72.0%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### Medium-24: Swords to Plowshares - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: Latest parsed Internal Revenue Service row with both fields is 2023: government grants $26,978,728 / total revenue $37,321,790 = 72.3%.
- When/where: year(s): 2023; subject: Swords to Plowshares
- How this triggered review: Medium Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Latest parsed Internal Revenue Service row with both fields is 2023: government grants $26,978,728 / total revenue $37,321,790 = 72.3%. This source fact matches the implemented public-funds concentration screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Prioritize tracing grant terms, allowable costs, subawards, and reported service outputs for high public-funds exposure.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Public-funds concentration is an oversight-priority signal, not an allegation.

#### Medium-25: Burbank Housing Development Corporation - Spend-versus-results

- Test: County outcome movement and entity spending context: Napa, Sonoma
- What CalDS found: Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852.
- When/where: year(s): 2023, 2024, 2025; place: Napa, Sonoma; subject: Burbank Housing Development Corporation
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Napa, Sonoma'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-26: Community Revitalization and Development Corporation - Spend-versus-results

- Test: County outcome movement and entity spending context: Amador, Solano
- What CalDS found: Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496.
- When/where: year(s): 2023, 2024, 2025; place: Amador, Solano; subject: Community Revitalization and Development Corporation
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Amador, Solano'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-27: PATH Ventures - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: PATH Ventures
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-28: Self-Help Enterprises - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno, Merced, Tulare
- What CalDS found: Self-Help Enterprises has state-award project geography in Fresno, Merced, Tulare; official county or Continuum of Care context flags Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909.
- When/where: year(s): 2023, 2024, 2025; place: Fresno, Merced, Tulare; subject: Self-Help Enterprises
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Fresno, Merced, Tulare'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Self-Help Enterprises has state-award project geography in Fresno, Merced, Tulare; official county or Continuum of Care context flags Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-29: Service First Northern California - Spend-versus-results

- Test: County outcome movement and entity spending context: San Joaquin
- What CalDS found: Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520.
- When/where: year(s): 2023, 2024, 2025; place: San Joaquin; subject: Service First Northern California
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Joaquin'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-30: Swords to Plowshares - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030.
- When/where: year(s): 2023, 2024, 2025; place: San Francisco; subject: Swords to Plowshares
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Francisco'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-31: TLCS, Inc. - Spend-versus-results

- Test: County outcome movement and entity spending context: Sacramento
- What CalDS found: TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000.
- When/where: year(s): 2023, 2024, 2025; place: Sacramento; subject: TLCS, Inc.
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Sacramento'. Data status: observed_contextual_join.
- Evidence refs: `E13`, `E14`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-32: Burbank Housing Development Corporation - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $18,810,477 in 2022 to $25,771,273 in 2023 (+37.0%).
- When/where: year(s): 2022, 2023; subject: Burbank Housing Development Corporation
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $18,810,477 in 2022 to $25,771,273 in 2023 (+37.0%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-33: Community Revitalization and Development Corporation - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $955,555 in 2022 to $1,162,854 in 2023 (+21.7%).
- When/where: year(s): 2022, 2023; subject: Community Revitalization and Development Corporation
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $955,555 in 2022 to $1,162,854 in 2023 (+21.7%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-34: Habitat for Humanity Yuba/Sutter, Inc. - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $3,551,102 in 2022 to $4,616,592 in 2023 (+30.0%).
- When/where: year(s): 2022, 2023; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $3,551,102 in 2022 to $4,616,592 in 2023 (+30.0%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-35: Hope the Mission - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $40,688,656 in 2022 to $59,922,411 in 2023 (+47.3%).
- When/where: year(s): 2022, 2023; subject: Hope the Mission
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $40,688,656 in 2022 to $59,922,411 in 2023 (+47.3%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-36: Service First Northern California - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $5,390,623 in 2022 to $7,561,906 in 2023 (+40.3%).
- When/where: year(s): 2022, 2023; subject: Service First Northern California
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $5,390,623 in 2022 to $7,561,906 in 2023 (+40.3%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-37: TLCS, Inc. - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: Internal Revenue Service parsed expenses moved from $22,353,498 in 2022 to $28,035,199 in 2023 (+25.4%).
- When/where: year(s): 2022, 2023; subject: TLCS, Inc.
- How this triggered review: Medium Spending growth screen via test 'Year-over-year total expense growth'. Data status: observed.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Internal Revenue Service parsed expenses moved from $22,353,498 in 2022 to $28,035,199 in 2023 (+25.4%). This source fact matches the implemented spending growth screen and should stay in the active review queue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: Growth can be legitimate; it becomes useful only when compared with scope, staffing, service volume, and outcome data.

#### Medium-38: Abode Housing Development - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments.
- When/where: year(s): 2025; place: Santa Clara; subject: Abode Housing Development
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-39: Burbank Housing Development Corporation - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive.
- When/where: year(s): 2025; subject: Burbank Housing Development Corporation
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E36`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-40: Community Revitalization and Development Corporation - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons.
- When/where: year(s): 2025; subject: Community Revitalization and Development Corporation
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E69`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-41: Habitat for Humanity Yuba/Sutter, Inc. - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates.
- When/where: year(s): 2024, 2025, 2026; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E11`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-42: Lutheran Social Services of Southern California - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus.
- When/where: year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E70`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-43: PATH Ventures - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park.
- When/where: year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E40`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-44: Self-Help Enterprises - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village.
- When/where: year(s): 2025; place: Fresno; subject: Self-Help Enterprises
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E67`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-45: Service First Northern California - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House.
- When/where: year(s): 2026; subject: Service First Northern California
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-46: Swords to Plowshares - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness.
- When/where: year(s): 2025; place: San Francisco; subject: Swords to Plowshares
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E56`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-47: TLCS, Inc. - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion.
- When/where: year(s): 2023; place: Sacramento; subject: TLCS, Inc.
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E12`, `E37`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

### Data gap Rows

#### Data gap-1: Abode Housing Development - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-2: Burbank Housing Development Corporation - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E36`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-3: California Supportive Housing - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E73`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-4: Community Revitalization and Development Corporation - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Community Revitalization and Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E69`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Community Revitalization and Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-5: DignityMoves - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for DignityMoves, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E66`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for DignityMoves, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-6: Habitat for Humanity Yuba/Sutter, Inc. - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Habitat for Humanity Yuba/Sutter, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E11`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Habitat for Humanity Yuba/Sutter, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-7: Hope the Mission - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Hope the Mission, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E61`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Hope the Mission, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-8: Lutheran Social Services of Southern California - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E70`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-9: PATH Ventures - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for PATH Ventures, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E40`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for PATH Ventures, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-10: Self-Help Enterprises - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Self-Help Enterprises, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E67`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Self-Help Enterprises, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-11: Service First Northern California - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Service First Northern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Service First Northern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-12: Swords to Plowshares - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Swords to Plowshares, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E56`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Swords to Plowshares, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-13: TLCS, Inc. - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for TLCS, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E37`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for TLCS, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-14: The People Concern - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: The People Concern
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-15: Weingart Center Association - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Weingart Center Association, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E12`, `E41`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Weingart Center Association, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-16: California Supportive Housing - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-17: Abode Housing Development - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Abode Housing Development
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-18: Burbank Housing Development Corporation - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-19: California Supportive Housing - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: California Supportive Housing
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-20: Community Revitalization and Development Corporation - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-21: DignityMoves - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: DignityMoves
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-22: Habitat for Humanity Yuba/Sutter, Inc. - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-23: Hope the Mission - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Hope the Mission
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-24: Lutheran Social Services of Southern California - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-25: PATH Ventures - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: PATH Ventures
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-26: Self-Help Enterprises - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Self-Help Enterprises
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-27: Service First Northern California - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Service First Northern California
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-28: Swords to Plowshares - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Swords to Plowshares
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-29: TLCS, Inc. - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: TLCS, Inc.
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-30: The People Concern - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: The People Concern
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-31: Weingart Center Association - Facility status

- Test: California Department of Health Care Services active/closed facility-status ratio
- What CalDS found: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
- When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Weingart Center Association
- How this triggered review: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed California Department of Health Care Services facility-status summary row is present for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.
- What this flags: Recover California Department of Health Care Services facility rows and adverse-status/licensing history before facility-level ranking.
- What this does not prove: It does not prove current capacity loss or adverse entity status; facility-level California Department of Health Care Services records must be verified.
- Human next step: Request or retrieve California Department of Health Care Services facility license/status history and adverse-status records for the named facilities before entity-level use.

#### Data gap-32: California Supportive Housing - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-33: Case-wide - License/adverse-action history

- Test: California Department of Health Care Services adverse-action page machine readability
- What CalDS found: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
- When/where: subject: Case-wide
- How this triggered review: Data gap License/adverse-action history screen via test 'California Department of Health Care Services adverse-action page machine readability'. Data status: non_machine_readable_source.
- Evidence refs: `E13`, `source_table_official_homelessness_outcomes`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a data blocker because California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Archive the pages and pursue a row export or page-specific parser before ranking probation, suspension, revocation, or NOV history.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Existing California Department of Health Care Services Active/Closed facility status remains available, but it is not the same as adverse-action history.

#### Data gap-34: California Supportive Housing - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when a homelessness-funded entity appears to describe voter, citizenship, immigration, advocacy, or political work that may need contract-scope, grant-scope, funding-source, or cost-allocation review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope or unlawful activity; contract, grant, funding-source, and accounting records must be checked.
- Human next step: Compare public statements to homelessness contract scopes, grant restrictions, funding source, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-35: California Supportive Housing - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-36: Case-wide - Public attention and traffic

- Test: Social media and website traffic coverage
- What CalDS found: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
- When/where: subject: Case-wide
- How this triggered review: Data gap Public attention and traffic screen via test 'Social media and website traffic coverage'. Data status: missing_required_attention_sources.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Add a governed source policy for traffic/social metrics and preserve collection timestamps before using attention patterns as risk proxies.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Traffic and social metrics are volatile and can be misleading without source timestamps and normalization.

#### Data gap-37: California Supportive Housing - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-38: Service First Northern California - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-39: California Supportive Housing - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: `E18`, `source_table_irs_990_propublica`, `source_table_irs_990_raw_artifacts`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

## 7. Evidence Citation Ledger

Use this ledger to move from the readable case file back to source records. The packet-local `E##` labels are reading aids only; internal evidence IDs and checksums preserve replayability.

| Ref | Internal evidence ID | Record ID | Source type | Source URI | Published | Checksum |
| --- | --- | --- | --- | --- | --- | --- |
| `E01` | `evidence_005b3b922e1587e8` | `contract_payment_discovery_california_supportive_housing` | contract_payment_discovery | https://www.hcd.ca.gov/funding/homekey/funding-overview | 2026-04-30 | `41342662d15a98dd04444d8c4091bffb86eec8d92203377a1da293629f146ee5` |
| `E02` | `evidence_eed56b8b976b5cea` | `contract_payment_discovery_dignitymoves` | contract_payment_discovery | https://www.hcd.ca.gov/funding/homekey/funding-overview | 2026-04-30 | `918455949ff81683eee73e5c1e1a94666c6ef4fe6b0ba758e1a1bb8993f20ad2` |
| `E03` | `evidence_1cde2e75545d024f` | `contract_payment_discovery_hope_the_mission` | contract_payment_discovery | https://www.hcd.ca.gov/funding/homekey/funding-overview | 2026-04-30 | `6e6050bc2bf31feb6e4d8036c4d950ae42a7ae672c7550c1471a1dc2980c05ee` |
| `E04` | `evidence_173b3ea25c8c9a43` | `contract_payment_discovery_the_people_concern` | contract_payment_discovery | https://www.hcd.ca.gov/funding/homekey/funding-overview | 2026-04-30 | `3cc5df21fce4850e120554551ae8b594e15ba6184cf68c60d01aee240e1aab2f` |
| `E05` | `evidence_766f33f5d680d693` | `contract_payment_discovery_weingart_center_association` | contract_payment_discovery | https://www.hcd.ca.gov/funding/homekey/funding-overview | 2026-04-30 | `d32ea8e0575d16751a7c32b45c30b7f461f7973e55852406ac364f6f416e349a` |
| `E06` | `evidence_f6fe5044b5956788` | `enforcement_docket_discovery_weingart_center_association` | enforcement_docket_discovery | https://www.justice.gov/ | 2026-04-30 | `9fcdbc0bb4a6fd5ae6c361cd285b78dea625041a8cddabc1003afb43de1ec966` |
| `E07` | `evidence_3622ed0c56bb35d3` | `irs_990_raw_artifacts_dignitymoves` | irs_990_raw_artifact | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_07A.zip | 2023 | `aa0168c4feea5405893e4f9669d2505f77a5a0e030712e9c1a6c5d67e365f710` |
| `E08` | `evidence_384504f2ff2abdc2` | `irs_990_raw_artifacts_hope_the_mission` | irs_990_raw_artifact | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_11A.zip | 2023 | `01c6dd4892b1cbd29e1cb6776db1ff5249a29b638ca5732db56e6a8fed34d060` |
| `E09` | `evidence_53777fca47214e77` | `irs_990_raw_artifacts_the_people_concern` | irs_990_raw_artifact | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_05A.zip | 2023 | `57597a630a03e75f47e51664b4c682d2688c7f5909dd3d72db3b5fe8d77a03fb` |
| `E10` | `evidence_428b3b165581dce8` | `irs_990_raw_artifacts_weingart_center_association` | irs_990_raw_artifact | https://apps.irs.gov/pub/epostcard/990/xml/2024/2024_TEOS_XML_03A.zip | 2023 | `df0dcae0f4694645eb7c7b5ae0f71437e98afd66930a89cb652b75b1d8add891` |
| `E11` | `evidence_1048a1de8993c191` | `state_homeless_awards_habitat_yuba_sutter` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2026-02-13 | `45b904c642eb366c3093e57757316c9e120ee711d89a9d83bed994ea9e4ae21d` |
| `E12` | `evidence_bce512e847005680` | `source_table_state_homeless_awards` | Parsed California state homelessness award table | [internal local artifact] | 2026-02-18 | `8d191dbfde06fb7793cc5e68c4a93245aca4d42881a237a93e29c9e9e62793e3` |
| `E13` | `evidence_142daa7dc667d610` | `source_table_official_homelessness_outcomes` | Parsed official outcome source table | [internal local artifact] | 2025-12-22 | `dff6860347c8121ce00a6dd1ed287fcfc2c3d61b0a418780f1aaf48a896b331a` |
| `E14` | `evidence_0805dc6501798c59` | `source_table_spend_vs_results_join` | Parsed spend-versus-results join | [internal local artifact] | 2026-04-29 | `6f03de5c56fcfa038ef2ad195bb60eada268f5764cd0bc445581059bd201ac26` |
| `E15` | `evidence_cafb34496b1fd25c` | `org_service_pages_tlcs_inc` | Organization service page | https://hopecoop.org/ | 2026-04-29 | `52f439bafbe1a0081d86a1bc2e6b1c7bdf09075470734375b42b05880a179141` |
| `E16` | `evidence_a16718fccd04fc89` | `public_statements_tlcs_inc` | Public statement source | https://hopecoop.org/ | 2026-04-29 | `1ee3cac5d50a90e8ba0864df86ee6ed1b8a6672805cfbe1da14abcd6f7dae879` |
| `E17` | `evidence_131fde5817e9adcf` | `irs_990_summary_habitat_yuba_sutter` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/680301692 | 2023 | `5d28263ef59ef08aab19caf2aedf911ad0b493d3a221728688dbdece2467e1dd` |
| `E18` | `evidence_233d6224ad913c35` | `source_table_irs_990_propublica` | Parsed Internal Revenue Service source table | [internal local artifact] | 2026-04-30 | `a9b2a390f7fd92474136f8462529f971bd7d5346b28312e02fc27896ebc3e82f` |
| `E19` | `evidence_f5f386615a437838` | `fac_audit_summary_burbank_housing_development_corporation` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `752bdeb153160439941b9a639df39785b65b6ee083583756a5bbddef0f45bd4a` |
| `E20` | `evidence_0fcd1ff141bbb5b6` | `source_table_fac_audit` | Parsed Federal Audit Clearinghouse audit table | [internal local artifact] | 2026-04-30 | `4444efaad7b5287b65fc650b966a546b8fcf58afdd9c034964aaa4b58c4b7eb2` |
| `E21` | `evidence_a98f846f1a9e2142` | `source_table_enforcement_docket` | Parsed enforcement and docket source table | [internal local artifact] | 2025-10-16 | `f4c44abe7ad057468dbfc230a54a5cfd9ec00bd7881f5e46a6eddae353b498b2` |
| `E22` | `evidence_dd6ada01aecefd53` | `enforcement_docket_weingart_center_association_1` | Official enforcement or docket source | https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf | 2025-10-16 | `4704d83cf192b49b41a868106f4774b607fd7d38d74e54c7fc8127d1f80cf145` |
| `E23` | `evidence_2458d3752f003308` | `public_statements_weingart_center` | Public statement source | https://www.weingart.org/ | 2026-04-29 | `2b008aab7a0605be9b4fa5af2c23b2b15e10edf48cd76614e3d9e6eb9bc732dd` |
| `E24` | `evidence_188e118a28be58ea` | `org_service_pages_abode_housing_development` | Organization service page | https://abode.org/housing-development | 2026-04-29 | `760bf54cf390ebfd88b9ea6e369c126c5a3e94966aa583173493fdae2cde0303` |
| `E25` | `evidence_2769543baa080f29` | `org_service_pages_burbank_housing_development` | Organization service page | https://burbankhousing.org/our-story/ | 2026-04-29 | `bdc978988f690ff2bb368c7368dadd763a8772fc4a3fc7e00b6d46f6ec77c241` |
| `E26` | `evidence_e647304cfc8b3931` | `org_service_pages_path_ventures` | Organization service page | https://epath.org/path-ventures/ | 2026-04-29 | `91dfc7a21e6bea124a899ad6dc94434b9a0dad13d048ed489285e2ca90906e5e` |
| `E27` | `evidence_250e3dfcd1e5d44a` | `org_service_pages_habitat_yuba_sutter` | Organization service page | https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/ | 2026-04-29 | `0f0c1b043fb53e7db762ec1b3d1b67aa7970fe76008c98aefea0a760b752d07c` |
| `E28` | `evidence_ae92c466d8e8476f` | `org_service_pages_weingart_center` | Organization service page | https://www.weingart.org/programs | 2026-04-29 | `9f5b80f62a6b025b0b16a939fa7c692fba91cd84c33670c8a743e482a562efcf` |
| `E29` | `evidence_2eda3cd66f12275b` | `public_statements_burbank_housing_development` | Public statement source | https://burbankhousing.org/ | 2026-04-29 | `9ad1ac08fc76f8318e09795bd23f93ad051a607f2a100d023df0c1676d011f58` |
| `E30` | `evidence_21eed3bff9cc8ebf` | `public_statements_path_ventures` | Public statement source | https://epath.org/ | 2026-04-29 | `ba19a586152c256a829211f5c5706fd1e133984234cf837e12b472aaecf2f0bf` |
| `E31` | `evidence_d7924b278aec997b` | `org_service_pages_service_first_northern_california` | Organization service page | https://servicefirstnc.org/ | 2026-04-29 | `f8c83a1012058eb37f28dca78699cf5ab0a550f4df5424d87f529ae20468bee9` |
| `E32` | `evidence_682ea8fc025c5746` | `public_statements_service_first_northern_california` | Public statement source | https://servicefirstnc.org/ | 2026-04-29 | `b170016b03b80dad1f83572def44e5381530a2faf14bcfbc8bdf453b286bfc95` |
| `E33` | `evidence_f0b1400eed295288` | `public_statements_habitat_yuba_sutter` | Public statement source | https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/ | 2026-04-29 | `19bdcce1bf7868431963321cce280ad28c17ddf9d714ace5d6435c930b3c29f6` |
| `E34` | `evidence_232787342f64c195` | `public_statements_abode_housing_development` | Public statement source | https://abode.org/ | 2026-04-29 | `09ebac11dd62d9db67de498f0fdc1fc9f5dd82ff20c97e7b66db444d683ef58d` |
| `E35` | `evidence_44d3689fffc4a697` | `state_homeless_awards_abode_housing_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-07-15 | `bba7d0b713962be2cf152366b3e572cdcd32e7a26b3ca888c9a93023b5535356` |
| `E36` | `evidence_75f192ba0054fd88` | `state_homeless_awards_burbank_housing_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-09-19 | `0d79f95ebf76d5ed59b0c694e96c25c71f4a11a86abc28c907318063f22ce6b3` |
| `E37` | `evidence_1eb3b3056136055c` | `state_homeless_awards_tlcs_inc` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-09-26 | `4bf939b3f70c1ddd896e7175b33fd5e932169beba8a7c7dca949a390242f86d4` |
| `E38` | `evidence_0a8f04f2248c7b80` | `org_service_pages_swords_to_plowshares` | Organization service page | https://www.swords-to-plowshares.org/ | 2026-04-29 | `ede63193eaa8435c500527cc6400411df36ef269c4124c22943a79e06ffd0d1c` |
| `E39` | `evidence_0dce0630fa0849bd` | `org_service_pages_the_people_concern` | Organization service page | https://www.thepeopleconcern.org/homeless-services/ | 2026-04-29 | `eff37e12040c98a16ba6afad5c1a21f5c66ae664cfb998456dd5e92c87f90d61` |
| `E40` | `evidence_38d6af06b83bd975` | `state_homeless_awards_path_ventures` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-02-13 | `25674aa8d84f4c723318411d9efd71684e1d1fd4f4c8f764df2020c17074831e` |
| `E41` | `evidence_f0448c16860a5d6c` | `state_homeless_awards_weingart_center` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-11-21 | `a53399b5cd34b8716358d253bf73fd9f6f7ee2b2e6d9b337d74c658c0c09ce7f` |
| `E42` | `evidence_731f163ff4510833` | `public_statements_the_people_concern` | Public statement source | https://www.thepeopleconcern.org/ | 2026-04-29 | `98542059d2a46f8cfe741e3e393fe0667784fab2496aa267645816565e9d83e1` |
| `E43` | `evidence_55d7dc7cff493ad8` | `state_homeless_awards_service_first_northern_california` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-01-27 | `040d16453983171df88116ffb9c9c9d0d5d4153d1f9792ec2f32da65258c884d` |
| `E44` | `evidence_8b4fc978f950b95b` | `irs_990_summary_burbank_housing_development` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/942837785 | 2023 | `50997d57686fc59769b858a130c7174ab0fb4829796fcbe873e0efc23bc29dfd` |
| `E45` | `evidence_e979765d9e128120` | `irs_990_summary_tlcs_inc` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/942777955 | 2023 | `39587efee570110ad688818ba99e0e7b4b95614147cd59702661e3be00bd8c86` |
| `E46` | `evidence_433e852ee665ebed` | `irs_990_summary_weingart_center` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/956054617 | 2023 | `2a00304db8f306c518be3fc67bdb3b2130b99007e2bd6ac9e1a617317813c927` |
| `E47` | `evidence_544fb1c9184dc642` | `state_homeless_awards_the_people_concern` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-02-13 | `cbc494a65b069d7ede1133a7acec89b9c576eb4ee12aa302b32e5ea5d432899f` |
| `E48` | `evidence_c9c8eb40cb05a9cb` | `irs_990_summary_abode_housing_development` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/943205085 | 2023 | `5c02a392837cfa9fd9c46b4b6216e3ea84817aca117073f39db509bd8e8a194e` |
| `E49` | `evidence_b95722b77e6b082b` | `org_service_pages_self_help_enterprises` | Organization service page | https://www.selfhelpenterprises.org/ | 2026-04-29 | `d4426b06fedb23b164f24a2ee14e8ecbd1b5c91c83c2e26378181ee21d71ada6` |
| `E50` | `evidence_0984aea4b07ebbf3` | `public_statements_self_help_enterprises` | Public statement source | https://www.selfhelpenterprises.org/ | 2026-04-29 | `5ad503cd45343db6eb49971958ceea57376b7bf893900cff1c9bebef698ea2d9` |
| `E51` | `evidence_8caaa10f30fb98c7` | `public_statements_hope_the_mission` | Public statement source | https://hopethemission.org/ | 2026-04-29 | `d8a6f8dead43a4d380e4023d8d8f1cef3fda1c99b7482bb2d3330e6b60ae0948` |
| `E52` | `evidence_0b171610226846f6` | `public_statements_swords_to_plowshares` | Public statement source | https://www.swords-to-plowshares.org/about/vision-for-impact/care/ | 2026-04-29 | `f16be1b01a6e237deb594674ccef54dfaa834ceca17431993df031f9c3b1a228` |
| `E53` | `evidence_a077fab522fe6dcf` | `irs_990_summary_path_ventures` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/201892523 | 2023 | `e79a0f341089a5c88c750ecc734b3798a7046da7c2e2e039f9892411df79e7c8` |
| `E54` | `evidence_be366d4c459aaf0b` | `org_service_pages_lutheran_social_services_socal` | Organization service page | https://www.lsssc.org/sbd-main | 2026-04-29 | `a73e27647151275415ef7a282823a308b39ef04bbfa273bff9a9a565dd18c418` |
| `E55` | `evidence_526d288dfe58028f` | `org_service_pages_hope_the_mission` | Organization service page | https://hopethemission.org/our-programs/ | 2026-04-29 | `b446f2278cea4547b60d6864dfc737d3cc6131e3e70335b93fd38f035287e234` |
| `E56` | `evidence_d07d0633d28cc7be` | `state_homeless_awards_swords_to_plowshares` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-09-19 | `1f2f4620555bb66820ac506afdd96cfd37e98065a97d27575917647f2a21a39f` |
| `E57` | `evidence_18d8b8b88f4c95e8` | `irs_990_summary_service_first_northern_california` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/680367046 | 2023 | `d444c8b16c72a6b4ba44d9c3165fbc0d88cf8f08865b83e085c08eb0b03997a7` |
| `E58` | `evidence_56497e8e72e1ad7d` | `org_service_pages_dignitymoves` | Organization service page | https://dignitymoves.org/interim-supportive-housing/ | 2026-04-29 | `e2b7179210fb980a412f5247e583f502cb19237bae808ea626c986c2187e2cbd` |
| `E59` | `evidence_3a962d61b382c325` | `org_service_pages_california_supportive_housing` | Organization service page | https://www.cshousing.org/ | 2026-04-29 | `a856cc6a81cbc631fd555f40ccea4046225ff4f8d659bc01c6b9fe57471dd2e5` |
| `E60` | `evidence_9c14d587a64d78d0` | `public_statements_dignitymoves` | Public statement source | https://dignitymoves.org/ | 2026-04-29 | `2a942e98c10c575a3f6c098868818fcaefa7a7f2e3aa4e3b2f1f0b6e598d1275` |
| `E61` | `evidence_d38585b558543270` | `state_homeless_awards_hope_the_mission` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2024-02-06 | `d7a3bc3d3d226842c55b5b799583a869e38ebc47dd0b95c96e6614ba91a9f7e2` |
| `E62` | `evidence_ec989ce56b09d724` | `irs_990_summary_swords_to_plowshares` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/942260626 | 2023 | `5fd6f79c73826cc97e45ce1e6f31afa3431abd7a5a971bd5a048f1172c956023` |
| `E63` | `evidence_d374147638de4534` | `public_statements_lutheran_social_services_socal` | Public statement source | https://www.lsssc.org/articles/get-out-there-n9t2h-wk9tc-mfxze | 2026-04-29 | `da1e58ec13ea693342d790721dc344759bf27ae93f33c6a19d4e7c79b4302971` |
| `E64` | `evidence_0160b19cb7ca12a2` | `public_statements_california_supportive_housing` | Public statement source | https://www.cshousing.org/ | 2026-04-29 | `52b324ce5e2e670a1c64f844139b93a0767a3a365b64b8f7fe5cd4031b6c58fe` |
| `E65` | `evidence_50df8f04241367e6` | `irs_990_summary_the_people_concern` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/956143865 | 2023 | `3aead2d382d520dc9fd4adcbddd063205fb48d4d517e0b7a2fd5f7a1669c2331` |
| `E66` | `evidence_b51d9b36ed16b264` | `state_homeless_awards_dignitymoves` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2025-07-15 | `8323304285a3a93f2dcaec057385d211b942ec939e5dbde8fab444b8efca7662` |
| `E67` | `evidence_ff713a8964d9dc78` | `state_homeless_awards_self_help_enterprises` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-11-13 | `fdc710b4478327304e3550394ec05b9dd9a80d91ade37287ece59e2ac29312b0` |
| `E68` | `evidence_2292027178590488` | `org_service_pages_community_revitalization_development` | Organization service page | https://crdc.org/ | 2026-04-29 | `beaf42a1917a91309e8682c73549d031f9a658aa45290a48f59b06b2595211cc` |
| `E69` | `evidence_fbeac7721ad9b6dd` | `state_homeless_awards_community_revitalization_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-10-13 | `d87941b1eaa28768e8e7c2fa67a2e7bf27e00e7ade1528fd3f116fc3ca122643` |
| `E70` | `evidence_87e6b98bab1e1c6a` | `state_homeless_awards_lutheran_social_services_socal` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-12-19 | `accc0fad2f5fbbb0ba6f4374fad5cdc99d70d67c9a19dd42162681abdb2cb300` |
| `E71` | `evidence_0a02f85b3fb345f0` | `irs_990_summary_hope_the_mission` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/272053273 | 2023 | `2d8518f88a56a8bdac78ab222632a74ba0a69195b4eefa61dd08a70a972bdbb4` |
| `E72` | `evidence_fd190914a214839d` | `public_statements_community_revitalization_development` | Public statement source | https://crdc.org/ | 2026-04-29 | `6d8e7b494429bb05d3bfe93d603d7fac365700c089bbdd503202cb779ce6963e` |
| `E73` | `evidence_666cf8667742c815` | `state_homeless_awards_california_supportive_housing` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2025-12-16 | `70a7b707f384c0dc41b2af73fe8fd8ea81ccbc096f59acc5c1828977fbd233b4` |
| `E74` | `evidence_3b72a38236a0f2f0` | `fac_audit_summary_abode_housing_development` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `9489bf9bcd5c5cb5bcb514c4ad9ca0366d72bac663f777413956425e05c27263` |
| `E75` | `evidence_f668a3897c5a32fd` | `fac_audit_summary_weingart_center_association` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `3a0a1d814d682ec1dab8fe0401a8a3930fcb199cfb40c2d14b2f94ef00626a8a` |
| `E76` | `evidence_9b49f00144fcc754` | `irs_990_summary_self_help_enterprises` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/941592676 | 2023 | `ed87fd3047dab4401e7a5cd711cb5ea2395378c33f3f8a49d313969e75ae0f46` |
| `E77` | `evidence_ec50ba17df173295` | `fac_audit_summary_path_ventures` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `bef7efa5f3b3f815c0a3b00eac56502d97814ed4016e93baf21482af6711e549` |
| `E78` | `evidence_d4b7c9b9f8ce236e` | `fac_audit_summary_self_help_enterprises` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `6d5db75d3b3a4f746f804b3b3ed2f25e0f8d6f69adf6a9ba8cdbab50710385e7` |
| `E79` | `evidence_0bf5dcdfc277d46b` | `fac_audit_summary_tlcs_inc` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `1a245f108876c74bc24038028c3344ec978d29190b87c0cba8550041613b54f3` |
| `E80` | `evidence_4f8d007d3de3cc4e` | `irs_990_summary_dignitymoves` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/871111468 | 2023 | `86822a82a928600316928e145d959c28c56ebb2d18ac4a42c1c1ddaaf0fd4cb5` |
| `E81` | `evidence_9035ffbe03cad94c` | `fac_audit_summary_habitat_for_humanity_yuba_sutter_inc` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `ea5c4b4b1f7d65979384d373c12d2c56dd8e00cf553b447a3b52f0f7c194562d` |
| `E82` | `evidence_b5d2ed6b7ef10ee7` | `irs_990_summary_community_revitalization_development` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/680248670 | 2023 | `2dba159b08bdd56bc59a4048608f0ff5d00323d34ed6c6d26796a303b59d403d` |
| `E83` | `evidence_a1d05c5bbbd25871` | `irs_990_summary_lutheran_social_services_socal` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/952225798 | 2023 | `659f7f4f1cac7994a351815f8600bda40d5c4f43ad4121e10df0e263044675cf` |
| `E84` | `evidence_6206f174c3df7354` | `fac_audit_summary_dignitymoves` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `bb1bbb78e960d7be14606d48e69403ba775e010867d097921f6f660746c842e2` |
| `E85` | `evidence_dffbf334dd5cf6cc` | `fac_audit_summary_community_revitalization_and_development_corporation` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `ebfb11384ff705c388c9e61100d3a7e6c1552850c517f1177b79dc47edf55ff1` |
| `E86` | `evidence_4a7db10e73bbf403` | `fac_audit_summary_lutheran_social_services_of_southern_california` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `6aecc94fda7efbfbdeb523da493d15eb5be274276f11f0b7f1c3f2ed75af8dc4` |
| `E87` | `evidence_f37bb48fb24ec2ad` | `irs_990_summary_california_supportive_housing` | Internal Revenue Service Form 990 summary | https://projects.propublica.org/nonprofits/organizations/884329113 | 2026-04-30 | `46a8f987872615cc460907428dd0a2671d3184094ff2b0f0c964091eb5dd3783` |
| `E88` | `evidence_1ba7ccd4947f5547` | `fac_audit_summary_service_first_northern_california` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `6ea27016190dec22197fe5d261eb014b0bf1558445b3c404c52d881d8e9ff639` |
| `E89` | `evidence_b1cb9ff6105b38b7` | `fac_audit_summary_california_supportive_housing` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `ad37c6739bef9304b449a4c608e8590a765c44b902cf9eccbb99e40f87fa4563` |
| `E90` | `evidence_3c6367addd9d5820` | `fac_audit_summary_hope_the_mission` | Federal Audit Clearinghouse audit summary | https://www.fac.gov/data/download/current/ | 2026-04-30 | `e510d79ef7261a1602ff9f142fe0f34ce76d05ce249772094f0a0405098899a4` |

### Source Coverage Snapshot

| Source class | Count |
| --- | --- |
| Internal Revenue Service Form 990 summary | 15 |
| Organization service page | 15 |
| Public statement source | 15 |
| California Department of Housing and Community Development homelessness award record | 15 |
| Federal Audit Clearinghouse audit summary | 13 |
| contract_payment_discovery | 5 |
| irs_990_raw_artifact | 4 |
| enforcement_docket_discovery | 1 |
| Official enforcement or docket source | 1 |
| Parsed enforcement and docket source table | 1 |
| Parsed Federal Audit Clearinghouse audit table | 1 |
| Parsed Internal Revenue Service source table | 1 |
| Parsed official outcome source table | 1 |
| Parsed spend-versus-results join | 1 |
| Parsed California state homelessness award table | 1 |

## 8. Human-Only Next Steps

These actions are outside the current CalDS runtime. They require a human reviewer or authorized records process before any escalation beyond internal review.

1. Open the review packet and verify each priority row against the cited evidence ledger before changing case status.
2. Resolve sentinel caution: Use exact legal status and named-party scope from official sources; do not convert third-party charges into entity-level conclusions.
3. Resolve sentinel caution: Preserve missing-data caveats in the review packet.
4. Verify raw Internal Revenue Service machine-readable filing data or official return images for revenue, expenses, grants, officer compensation, and year-over-year movement.
5. Open Federal Audit Clearinghouse audit source documents and findings tables to confirm audit year, finding status, federal agency, questioned-cost fields, and management response.
6. Request county contract files, monitoring letters, corrective-action status, deliverables, and provider-level outcome records for the same year window.
7. Benchmark officer and key employee compensation against comparable organizations and verify documented approval procedures.
8. Compare harvested public statements and web pages to homelessness grant scopes, contract restrictions, funding sources, and accounting records; treat statements as context until dollars and scope are linked.
9. For connected-party enforcement rows, verify the official charging record, docket status, named parties, nonprofit relationship, transaction documents, and public-dollar flow before any entity-level statement.

## 9. Artifact References

These are the durable workflow artifacts used by the compiler.

| Artifact | Path |
| --- | --- |
| acquisition_ledger.json | `[internal local artifact] |
| case_dossier.json | `[internal local artifact] |
| case_dossier.md | `[internal local artifact] |
| case_request.json | `[internal local artifact] |
| case_scope.json | `[internal local artifact] |
| citation_verification.json | `[internal local artifact] |
| completion_guard.json | `[internal local artifact] |
| context_handoff_ledger.json | `[internal local artifact] |
| entity_network_analysis.json | `[internal local artifact] |
| entity_triage_results.json | `[internal local artifact] |
| evidence_analysis.json | `[internal local artifact] |
| evidence_bundle.json | `[internal local artifact] |
| forensic_findings.json | `[internal local artifact] |
| forensic_investigation_plan.json | `[internal local artifact] |
| lead_candidate.json | `[internal local artifact] |
| oversight_risk_matrix.json | `[internal local artifact] |
| retrieval_plan.json | `[internal local artifact] |
| review_decision.json | `[internal local artifact] |
| review_packet.json | `[internal local artifact] |
| review_packet.md | `[internal local artifact] |
| run_readiness.json | `[internal local artifact] |
| search_hits.json | `[internal local artifact] |
| sentinel_decision.json | `[internal local artifact] |
| task_case_compiler.json | `[internal local artifact] |
| task_case_director.json | `[internal local artifact] |
| task_citation_verifier.json | `[internal local artifact] |
| task_completion_guard.json | `[internal local artifact] |
| task_context_steward.json | `[internal local artifact] |
| task_entity_network_analyst.json | `[internal local artifact] |
| task_evidence_analyst.json | `[internal local artifact] |
| task_forensic_synthesis_analyst.json | `[internal local artifact] |
| task_lead_scorer.json | `[internal local artifact] |
| task_retrieval_strategist.json | `[internal local artifact] |
| task_review_packager.json | `[internal local artifact] |
| task_sentinel.json | `[internal local artifact] |
| task_triage_screener.json | `[internal local artifact] |

## 10. Human Review Required

The workflow remains paused. A reviewer must explicitly approve, downgrade, repair, or reject this case before any outside-facing use.
