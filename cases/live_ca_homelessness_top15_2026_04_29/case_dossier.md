# Case Dossier: Live web case: top California homelessness nonprofits by state Homekey award exposure

## 1. Supervisor Brief

Bottom line: CalDS keeps Weingart Center Association at the top of this 15-entity case for possible waste, fraud, abuse, or mismanagement review because the top source-backed trigger is: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. Evidence: `E08`, `E07`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`. The lead score is 7.67 / 100 and the sentinel posture is `DOWNGRADE_FOR_REVIEW`; this is a review priority, not a formal conclusion.

### What CalDS Found First

- `E08` Official enforcement/docket triage source: Weingart Center Association (Official enforcement or docket source, 2025-10-16): An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for... Source: https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf
- `E07` Parsed official enforcement and docket source table (Parsed enforcement and docket source table, 2025-10-16): Official enforcement and docket source table for top-15 homelessness triage. This table creates deep-dive triggers only. It does not create legal conclusions. { "case_id": "live_ca_homelessness_top15_2026_04_29", "created_at": "2026-04-30T14:09:17+00:00",... Source: [internal local artifact]
- `E03` Official homelessness outcome-source manifest (Parsed official outcome source table, 2025-12-22): Official homelessness outcome-source manifest for spend-versus-results review. The CA System Performance Measures dataset says the metrics help assess progress toward preventing, reducing, and ending homelessness. CalDS uses these rows as geography-level... Source: [internal local artifact]
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without direct program outcome records. | entity | county |... Source: [internal local artifact]
- 46 additional evidence item(s) are in the citation ledger.

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

- Completion guard status: PASS_WITH_BLOCKERS.
- Required source-family checks: 35; hits: 16; unresolved blockers: 19.
- Top unresolved acquisition blockers:
  - Hope the Mission: irs_990 - No citation-ready irs_990 record was recovered for Hope the Mission in the current corpus.
  - Hope the Mission: audit - No citation-ready audit record was recovered for Hope the Mission in the current corpus.
  - Hope the Mission: enforcement_or_docket - No citation-ready enforcement_or_docket record was recovered for Hope the Mission in the current corpus.
  - Hope the Mission: county_contract_monitoring - No citation-ready county_contract_monitoring record was recovered for Hope the Mission in the current corpus.
  - Weingart Center Association: irs_990 - No citation-ready irs_990 record was recovered for Weingart Center Association in the current corpus.
  - Weingart Center Association: audit - No citation-ready audit record was recovered for Weingart Center Association in the current corpus.
  - Weingart Center Association: county_contract_monitoring - No citation-ready county_contract_monitoring record was recovered for Weingart Center Association in the current corpus.
  - DignityMoves: irs_990 - No citation-ready irs_990 record was recovered for DignityMoves in the current corpus.
  - +11 additional blocker(s) in `acquisition_ledger.json`.
- Guard note: Completion guard records both hits and misses; misses are blockers, not clearance.
- Guard note: Dossier compilation may proceed only because unresolved source gaps are preserved for human review.

### Why This Is On A Reviewer's Desk

- CalDS flags Weingart Center Association / Enforcement and docket history: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. Evidence: `E08`, `E07`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`. The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- CalDS flags California Supportive Housing / Spend-versus-results: California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854. Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`. Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- CalDS flags DignityMoves / Spend-versus-results: DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702. Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`. Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- CalDS flags Hope the Mission / Spend-versus-results: Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991. Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`. Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- Source blockers to resolve before stronger ranking: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 8 other source area(s). These are collection blockers, not adverse findings.

### Decision Needed

- Human-review state: `PENDING`. The workflow is paused until a reviewer approves, downgrades, repairs, or rejects the case.
- Score: 7.67 / 100. Low deterministic score because unresolved source gaps outweigh the retrieved source coverage under the current formula.
- Sentinel: `DOWNGRADE_FOR_REVIEW`. Lead can proceed only as an internal reviewer-safe candidate with caveats.
- Immediate reviewer action: Open the cited source records for Weingart Center Association and compare the raw source wording to this row.

### What This Does Not Prove

- This dossier does not make a formal finding of waste, fraud, or abuse. It identifies possible screening questions and source blockers for human review.
- County or Continuum of Care outcomes are contextual unless provider-attributable outcome records are recovered and linked.
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

### California Supportive Housing

Briefing judgment: CalDS flags California Supportive Housing as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: California Supportive Housing` says or summarizes: - https://www.cshousing.org/: Home Search this site Embedded Files Skip to main content Skip to navigation Home About Us Projects Contact Us Home About Us Projects Contact Us More Home About Us Projects Contact Us California Supportive Housing Adding supportive and affordable communities one at a time Welcome to California Supportive... Evidence: `E37`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E37` Official service/program page harvest: California Supportive Housing (Organization service page, 2026-04-29): Organization: California Supportive Housing Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://www.cshousing.org/: Home Search this site Embedded Files Skip to main content Skip to navigation Home About Us...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing. (year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing; evidence `E02`, `E49`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda, Sacramento: Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### DignityMoves

Briefing judgment: CalDS flags DignityMoves as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: DignityMoves` says or summarizes: - https://dignitymoves.org/interim-supportive-housing/: Homes for the Homeless | Interim Supportive Housing Capacity to Scale Challenge Donate Get Involved We’re Hiring! Who We Are Our Leadership Board & Advisors Lived Experience Advisory Board Our Partners What We Do Our Mission: A Future Without Street Homelessness Our Interim... Evidence: `E36`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E36` Official service/program page harvest: DignityMoves (Organization service page, 2026-04-29): Organization: DignityMoves Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://dignitymoves.org/interim-supportive-housing/: Homes for the Homeless | Interim Supportive Housing Capacity to Scale Challenge Donate...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road. (year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves; evidence `E02`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Alameda, San Bernardino, Ventura: Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Hope the Mission

Briefing judgment: CalDS flags Hope the Mission as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Hope the Mission` says or summarizes: - https://hopethemission.org/our-programs/: try Program Tiny Homes Villages Ventura County Ways To Give Menu Toggle Donate Sponsor a Tiny Home Schedule a Pick-up Donate A Vehicle DAF & Stocks Donate Goods & Services Monthly Giving Legacy Giving Amazon Wishlist Get Involved Menu Toggle Volunteer Host A Drive Partnerships News & Events... Evidence: `E42`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E41` Public statement page harvest: Hope the Mission (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://hopethemission.org/: gle Donate Sponsor a Tiny Home Schedule a Pick-up Donate A Vehicle DAF & Stocks Donate Goods & Services Monthly...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn. (year(s): 2023, 2024; place: Los Angeles; subject: Hope the Mission; evidence `E02`, `E50`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### The People Concern

Briefing judgment: CalDS flags The People Concern as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: The People Concern` says or summarizes: - https://thepeopleconcern.org/homeless-services/: Homeless Services - The People Concern Facebook X Instagram Contact Get Help Careers Volunteer Donate Home About Our Work Homeless Services Sojourn Domestic Violence Services k9 Connection Arts Program Support Ways to Give Planned Giving Monthly Giving Donate to PPTFH Corporate... Evidence: `E23`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E23` Official service/program page harvest: The People Concern (Organization service page, 2026-04-29): Organization: The People Concern Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://thepeopleconcern.org/homeless-services/: Homeless Services - The People Concern Facebook X Instagram Contact Get Help Careers...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community. (year(s): 2025, 2026; place: Los Angeles; subject: The People Concern; evidence `E02`, `E30`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Weingart Center Association

Briefing judgment: CalDS flags Weingart Center Association as a high-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Weingart Center Association` says or summarizes: - https://www.weingart.org/programs: iors In the Press • On the Web Skid Row Cams FAQ DONATE The need is there. We’re here to help. Weingart Center goes beyond the emergency shelter approach by coupling comprehensive wraparound services with personalized housing solutions. As one of the best comprehensive human services organizations in... Evidence: `E13`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E09` Public statement page harvest: Weingart Center Association (Public statement source, 2026-04-29): Public or official statement pages fetched: 2 of 2. Matched review terms: none from configured list. Snippets: - https://www.weingart.org/: est comprehensive human services organizations in the western United States, Weingart Center is committed to removing...
- 4 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- Enforcement and docket history: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. (year(s): 2025; place: Los Angeles; subject: Weingart Center Association; evidence `E08`, `E07`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`.)
- State homelessness award exposure: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby. (year(s): 2023; place: Los Angeles; subject: Weingart Center Association; evidence `E02`, `E26`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Executive compensation, Facility status; plus 5 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt. It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.

Boss-level next step: Open the cited source records for Weingart Center Association and compare the raw source wording to this row.

### Abode Housing Development

Briefing judgment: CalDS flags Abode Housing Development as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Abode Housing Development` says or summarizes: - https://abode.org/housing-development: hat We Do Abode Housing Development Abode Property Management Abode Services Housing Providers Outreach Need Help? Jobs and Careers Where We Work Our Reach Alameda County Santa Clara County Napa County San Francisco County San Mateo County Santa Cruz County Solano County Sonoma County Support Our... Evidence: `E10`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E10` Official service/program page harvest: Abode Housing Development (Organization service page, 2026-04-29): Organization: Abode Housing Development Official service/program pages fetched: 2 of 2. Service summary from official source(s): - https://abode.org/housing-development: hat We Do Abode Housing Development Abode Property Management Abode Services Housing...
- `E18` Public statement page harvest: Abode Housing Development (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://abode.org/: Our Impact Data Who We Help Awards & Honors Videos Newsletters What We Do Abode Housing Development Abode Property Management...
- 1 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments. (year(s): 2025; place: Santa Clara; subject: Abode Housing Development; evidence `E02`, `E19`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`.)
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### Burbank Housing Development Corporation

Briefing judgment: CalDS flags Burbank Housing Development Corporation as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Burbank Housing Development Corporation` says or summarizes: - https://burbankhousing.org/our-story/: Our Story – Burbank Housing Skip to content Attention: Burbank Housing is hiring! To see the list of current job opportunities, please visit our careers page . Residents Applicants Donate About Us FAQs Human Resources Education 2025 Annual Report News Partner Find a Home Residents Contact Us... Evidence: `E11`.

What the records show:

Most relevant retrieved records:

- `E11` Official service/program page harvest: Burbank Housing Development Corporation (Organization service page, 2026-04-29): Organization: Burbank Housing Development Corporation Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://burbankhousing.org/our-story/: Our Story – Burbank Housing Skip to content Attention: Burbank Housing is...
- `E14` Public statement page harvest: Burbank Housing Development Corporation (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://burbankhousing.org/: oving entry to careers in the trades for Marin City residents. The program is a collaboration among Marin Housing...
- `E20` California Department of Housing and Community Development Homekey/Homekey+ award rows: Burbank Housing Development Corporation (California Department of Housing and Community Development homelessness award record, 2025-09-19): Entity: Burbank Housing Development Corporation. Rank by parsed state project-award exposure: 12 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $36,385,852. Award rows: - 2025-08-14 Homekey+: 4th and Division...

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive. (year(s): 2025; subject: Burbank Housing Development Corporation; evidence `E02`, `E20`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Napa, Sonoma: Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Community Revitalization and Development Corporation

Briefing judgment: CalDS flags Community Revitalization and Development Corporation as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Community Revitalization and Development Corporation` says or summarizes: - https://crdc.org/: CRDC Home - Community Revitalization & Development Corporation Skip to content Skip to footer HOME ABOUT US AFFORDABLE HOUSING PROJECTS CONTACT US Search Close HOME ABOUT US AFFORDABLE HOUSING PROJECTS CONTACT US We provide affordable housing for families and senior citizens. Providing Affordable Housing We focus our... Evidence: `E45`.

What the records show:

Most relevant retrieved records:

- `E45` Official service/program page harvest: Community Revitalization and Development Corporation (Organization service page, 2026-04-29): Organization: Community Revitalization and Development Corporation Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://crdc.org/: CRDC Home - Community Revitalization & Development Corporation Skip to content...
- `E46` California Department of Housing and Community Development Homekey/Homekey+ award rows: Community Revitalization and Development Corporation (California Department of Housing and Community Development homelessness award record, 2025-10-13): Entity: Community Revitalization and Development Corporation. Rank by parsed state project-award exposure: 11 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $36,535,496. Award rows: - 2025-09-19 Homekey+: Vista...
- `E48` Public statement page harvest: Community Revitalization and Development Corporation (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://crdc.org/: CRDC Home - Community Revitalization & Development Corporation Skip to content Skip to footer HOME ABOUT US AFFORDABLE HOUSING...

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons. (year(s): 2025; subject: Community Revitalization and Development Corporation; evidence `E02`, `E46`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Amador, Solano: Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Habitat for Humanity Yuba/Sutter, Inc.

Briefing judgment: CalDS flags Habitat for Humanity Yuba/Sutter, Inc. as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Habitat for Humanity Yuba/Sutter, Inc.` says or summarizes: - https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/: Habitat for Humanity Yuba/Sutter | Habitat for Humanity California Close About Our History Board of Directors Find Your Local Affiliate Affordability Careers Advocacy Become an Advocate In The News Legislative Updates Get Involved Upcoming Events Become an Advocate... Evidence: `E24`.

What the records show:

Most relevant retrieved records:

- `E01` California Department of Housing and Community Development Homekey/Homekey+ award rows: Habitat for Humanity Yuba/Sutter, Inc. (California Department of Housing and Community Development homelessness award record, 2026-02-13): Entity: Habitat for Humanity Yuba/Sutter, Inc.. Rank by parsed state project-award exposure: 14 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $35,086,396. Award rows: - 2024-02-13 Homekey Round 3: Merriment Village...
- `E24` Official service/program page harvest: Habitat for Humanity Yuba/Sutter, Inc. (Organization service page, 2026-04-29): Organization: Habitat for Humanity Yuba/Sutter, Inc. Official service/program pages fetched: 1 of 2. Service summary from official source(s): - https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/: Habitat for Humanity Yuba/Sutter | Habitat...
- `E28` Public statement page harvest: Habitat for Humanity Yuba/Sutter, Inc. (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/: Habitat for Humanity Yuba/Sutter | Habitat for Humanity California Close...

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates. (year(s): 2024, 2025, 2026; subject: Habitat for Humanity Yuba/Sutter, Inc.; evidence `E02`, `E01`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`.)
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### Lutheran Social Services of Southern California

Briefing judgment: CalDS flags Lutheran Social Services of Southern California as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Lutheran Social Services of Southern California` says or summarizes: - https://www.lsssc.org/sbd-main: Magazine Friday Inspiration 2026 Gala & Awards Contact Donate San Bernardino County San Bernardino Community Wellness Campus Big Bear • Lucerne Valley • Yucca Valley • Barstow • Trona Help when it’s needed most for California’s Largest County As the largest geographical county in the contiguous 48 states... Evidence: `E34`.

What the records show:

Most relevant retrieved records:

- `E34` Official service/program page harvest: Lutheran Social Services of Southern California (Organization service page, 2026-04-29): Organization: Lutheran Social Services of Southern California Official service/program pages fetched: 2 of 2. Service summary from official source(s): - https://www.lsssc.org/sbd-main: Magazine Friday Inspiration 2026 Gala & Awards Contact Donate San...
- `E39` Public statement page harvest: Lutheran Social Services of Southern California (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://www.lsssc.org/articles/get-out-there-n9t2h-wk9tc-mfxze: lder: About Back Mission Services Our Team Partners Financials Folder: Ways to...
- `E47` California Department of Housing and Community Development Homekey/Homekey+ award rows: Lutheran Social Services of Southern California (California Department of Housing and Community Development homelessness award record, 2023-12-19): Entity: Lutheran Social Services of Southern California. Rank by parsed state project-award exposure: 15 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $34,944,702. Award rows: - 2023-12-19 Homekey Round 3: San...

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus. (year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California; evidence `E02`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`.)
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.

### PATH Ventures

Briefing judgment: CalDS flags PATH Ventures as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: PATH Ventures` says or summarizes: - https://epath.org/path-ventures/: unty PATH Ventures PATH Enterprises News & Events Building homes, community & stable lives About PATH Ventures ​PATH Ventures is a non-profit developer of supportive and affordable housing with projects located throughout California. Founded by PATH in 2007, PATH Ventures is building across the state,... Evidence: `E12`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E12` Official service/program page harvest: PATH Ventures (Organization service page, 2026-04-29): Organization: PATH Ventures Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://epath.org/path-ventures/: unty PATH Ventures PATH Enterprises News & Events Building homes, community & stable lives About PATH...
- `E15` Public statement page harvest: PATH Ventures (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://epath.org/: epath.org Work with PATH Careers Vendors Volunteer Support Path Get Help Select Page Who We Are About Contact Corporate...
- 1 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park. (year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures; evidence `E02`, `E25`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Los Angeles: Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Self-Help Enterprises

Briefing judgment: CalDS flags Self-Help Enterprises as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Self-Help Enterprises` says or summarizes: - https://www.selfhelpenterprises.org/: Self-Help Enterprises - Self-Help Enterprises Home About Us Programs News & Multimedia Get Involved Contact Us ✕ ☰ Search Search ✕ Home About Us Programs News & Multimedia Get Involved Contact Us Donate Facebook LinkedIn Translate Search Our Mission Service Area Our Impact Our Staff & Board Our... Evidence: `E31`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E04` Deterministic state-award exposure versus homelessness outcome-context join (Parsed spend-versus-results join, 2026-04-29): Deterministic join from California Department of Housing and Community Development state project-award exposure to official county/Continuum of Care homelessness outcome context. County and Continuum of Care outcomes are not provider-attributable without...
- `E31` Official service/program page harvest: Self-Help Enterprises (Organization service page, 2026-04-29): Organization: Self-Help Enterprises Official service/program pages fetched: 2 of 2. Service summary from official source(s): - https://www.selfhelpenterprises.org/: Self-Help Enterprises - Self-Help Enterprises Home About Us Programs News & Multimedia Get...
- 2 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village. (year(s): 2025; place: Fresno; subject: Self-Help Enterprises; evidence `E02`, `E44`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Fresno, Merced, Tulare: Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Service First Northern California

Briefing judgment: CalDS flags Service First Northern California as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Service First Northern California` says or summarizes: - https://servicefirstnc.org/: on - Modesto Skip to content Call Us: 209-644-6300 Email: info@servicefirstnc.org Home Who We Are Our Team What We Do Outpatient Alcohol and Drug Treatment DUI Program Representative Payee Services Aquatic Therapy and Wellness Program Supportive Living Services “Options” Learning Center Transportation... Evidence: `E16`.

What the records show:

Most relevant retrieved records:

- `E16` Official service/program page harvest: Service First Northern California (Organization service page, 2026-04-29): Organization: Service First Northern California Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://servicefirstnc.org/: on - Modesto Skip to content Call Us: 209-644-6300 Email: info@servicefirstnc.org Home Who...
- `E17` Public statement page harvest: Service First Northern California (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://servicefirstnc.org/: on - Modesto Skip to content Call Us: 209-644-6300 Email: info@servicefirstnc.org Home Who We Are Our Team What We Do...
- `E29` California Department of Housing and Community Development Homekey/Homekey+ award rows: Service First Northern California (California Department of Housing and Community Development homelessness award record, 2026-01-27): Entity: Service First Northern California. Rank by parsed state project-award exposure: 13 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $35,579,520. Award rows: - 2026-01-27 Homekey+: The Hunter House in Stockton,...

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House. (year(s): 2026; subject: Service First Northern California; evidence `E02`, `E29`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: San Joaquin: San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Swords to Plowshares

Briefing judgment: CalDS flags Swords to Plowshares as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: Swords to Plowshares` says or summarizes: - https://www.swords-to-plowshares.org/: e housing programs 90,000 Community meals served to increase veterans' food security $15M Won in lifetime income for veterans with disabilities + free VA healthcare for life Need assistance? Learn more about our wraparound supportive services and connect with us to access housing, employment,... Evidence: `E22`.

What the records show:

Most relevant retrieved records:

- `E22` Official service/program page harvest: Swords to Plowshares (Organization service page, 2026-04-29): Organization: Swords to Plowshares Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://www.swords-to-plowshares.org/: e housing programs 90,000 Community meals served to increase veterans' food security $15M Won...
- `E33` Public statement page harvest: Swords to Plowshares (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://www.swords-to-plowshares.org/about/vision-for-impact/care: ership Financials Careers Contact us News DONATE get care Donate today Donate...
- `E35` California Department of Housing and Community Development Homekey/Homekey+ award rows: Swords to Plowshares (California Department of Housing and Community Development homelessness award record, 2025-09-19): Entity: Swords to Plowshares. Rank by parsed state project-award exposure: 10 of 15. Total Homekey/Homekey+ project-award exposure from source-listed co-applicant rows: $39,044,030. Award rows: - 2025-09-19 Homekey+: 1034 Van Ness in San Francisco,

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness. (year(s): 2025; place: San Francisco; subject: Swords to Plowshares; evidence `E02`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: San Francisco: San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### TLCS, Inc.

Briefing judgment: CalDS flags TLCS, Inc. as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject.

What the organization says or is described as doing: retrieved source `Official service/program page harvest: TLCS, Inc.` says or summarizes: - https://hopecoop.org/: for those living on the street with mental health challenges. Hope Cooperative Services See our community based mental health programs designed to support individuals with psychiatric disabilities. About Us Hope Cooperative (aka TLCS) has been providing behavioral health and supportive housing services to people... Evidence: `E05`.

What the records show:

Most relevant retrieved records:

- `E02` Parsed California Department of Housing and Community Development Homekey/Homekey+ state homelessness award exposure table (Parsed California state homelessness award table, 2026-02-18): Parsed California Department of Housing and Community Development Homekey/Homekey+ award exposure table. Methodology: rank source-listed nonprofit co-applicant names by the full project-award amount attached to each award row. This is materiality exposure,...
- `E05` Official service/program page harvest: TLCS, Inc. (Organization service page, 2026-04-29): Organization: TLCS, Inc. Official service/program pages fetched: 1 of 1. Service summary from official source(s): - https://hopecoop.org/: for those living on the street with mental health challenges. Hope Cooperative Services See our community based mental...
- `E06` Public statement page harvest: TLCS, Inc. (Public statement source, 2026-04-29): Public or official statement pages fetched: 1 of 1. Matched review terms: none from configured list. Snippets: - https://hopecoop.org/: for those living on the street with mental health challenges. Hope Cooperative Services See our community based mental...
- 1 additional matched source item(s) appear in the citation ledger.

Implemented screen results:

- State homelessness award exposure: California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion. (year(s): 2023; place: Sacramento; subject: TLCS, Inc.; evidence `E02`, `E21`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`.)
- Spend-versus-results: official county or Continuum of Care outcome context worsened in the entity's matched project geography: Sacramento: Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000. This is a review signal, not provider attribution. Evidence `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`.
- Source gaps that limit judgment: Audit controls, Direct funding verification, Enforcement and docket history, Executive compensation; plus 6 other source area(s). These gaps explain what CalDS still cannot test; they are not adverse findings by themselves.

Why this is on the review list: CalDS sees the combination reviewers care about: material public-money exposure or financial movement, plus outcome context that moved the wrong direction in matched service geographies. That does not prove provider responsibility, but it is exactly the mismatch that should be briefed up for document review.

What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review. It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.

Boss-level next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.

### Case-wide Source Gaps

These are not nonprofit organization-specific findings. They are run-level blockers that limit how strongly CalDS can rank or clear the case.

- License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
  Evidence: `E03`, `source_table_official_homelessness_outcomes`. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
  Evidence: no direct evidence ref in this row. Human action: Collect the missing source named in the row and rerun the matrix before upgrading the signal.


## 3. Score, Sentinel, and Case Context

Lead statement: Retrieved records show a reviewable oversight signal for Hope the Mission, Weingart Center Association focused on homelessness, housing, official.

Score: 7.67 / 100

Interpretation: low deterministic score because unresolved source gaps outweigh the retrieved source coverage under the current scoring formula.

The score is deterministic triage priority, not a probability, not a dollar loss estimate, and not a conclusion. Higher scores mean stronger retrieved-source coverage and entity linkage after missing-data and contradiction penalties.

| Field | Value |
| --- | --- |
| Support count | 50 |
| Average relevance | 0.505 |
| Source diversity | 8 |
| Hard entity links | 35 |
| Missing-data count | 17 |
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

CalDS flags Abode Housing Development as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments.
   - When/where: year(s): 2025; place: Santa Clara; subject: Abode Housing Development
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E19`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Abode Housing Development
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Abode Housing Development
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E19`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

4. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Abode Housing Development
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Abode Housing Development
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

6. Data gap - Facility status: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Abode Housing Development
   - How it triggered: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### Burbank Housing Development Corporation

CalDS flags Burbank Housing Development Corporation as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852.
   - When/where: year(s): 2023, 2024, 2025; place: Napa, Sonoma; subject: Burbank Housing Development Corporation
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Napa, Sonoma'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive.
   - When/where: year(s): 2025; subject: Burbank Housing Development Corporation
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E20`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E20`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Burbank Housing Development Corporation
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### California Supportive Housing

CalDS flags California Supportive Housing as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Spend-versus-results: California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, Sacramento'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - State homelessness award exposure: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing.
   - When/where: year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E49`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E49`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: California Supportive Housing
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Case-wide

CalDS flags Case-wide as a source-gap review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Data gap - License/adverse-action history: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
   - When/where: subject: Case-wide
   - How it triggered: Data gap License/adverse-action history screen via test 'California Department of Health Care Services adverse-action page machine readability'. Data status: non_machine_readable_source.
   - Evidence: `E03`, `source_table_official_homelessness_outcomes`; source: [internal local artifact]
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

2. Data gap - Public attention and traffic: No social media account metrics, website analytics, ad-library records, or third-party traffic estimates are ingested in this run.
   - When/where: subject: Case-wide
   - How it triggered: Data gap Public attention and traffic screen via test 'Social media and website traffic coverage'. Data status: missing_required_attention_sources.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

3. Low - Spend-versus-results: Official outcome series are ingested and joined into 12 entity/county context rows. These rows remain contextual and are not provider-attributable results.
   - When/where: subject: Case-wide
   - How it triggered: Low Spend-versus-results screen via test 'Outcome-denominator coverage for homelessness, drug use, crime, and treatment results'. Data status: observed.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Community Revitalization and Development Corporation

CalDS flags Community Revitalization and Development Corporation as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496.
   - When/where: year(s): 2023, 2024, 2025; place: Amador, Solano; subject: Community Revitalization and Development Corporation
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Amador, Solano'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons.
   - When/where: year(s): 2025; subject: Community Revitalization and Development Corporation
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E46`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Community Revitalization and Development Corporation
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Community Revitalization and Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Community Revitalization and Development Corporation
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E46`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Community Revitalization and Development Corporation
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Community Revitalization and Development Corporation
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### DignityMoves

CalDS flags DignityMoves as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Spend-versus-results: DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, San Bernardino, Ventura'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - State homelessness award exposure: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road.
   - When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: DignityMoves
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for DignityMoves, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: DignityMoves
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: DignityMoves
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: DignityMoves
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Habitat for Humanity Yuba/Sutter, Inc.

CalDS flags Habitat for Humanity Yuba/Sutter, Inc. as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates.
   - When/where: year(s): 2024, 2025, 2026; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E01`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Habitat for Humanity Yuba/Sutter, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E01`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

4. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

6. Data gap - Facility status: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Habitat for Humanity Yuba/Sutter, Inc.
   - How it triggered: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### Hope the Mission

CalDS flags Hope the Mission as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Spend-versus-results: Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Hope the Mission
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - State homelessness award exposure: California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn.
   - When/where: year(s): 2023, 2024; place: Los Angeles; subject: Hope the Mission
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E50`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Hope the Mission
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Hope the Mission, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Hope the Mission
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E50`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Hope the Mission
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Hope the Mission
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Lutheran Social Services of Southern California

CalDS flags Lutheran Social Services of Southern California as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus.
   - When/where: year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

2. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

3. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

4. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

6. Data gap - Facility status: No parsed California Department of Health Care Services facility-status summary row is present for this entity.
   - When/where: place: California Department of Health Care Services facility set matched to the entity; subject: Lutheran Social Services of Southern California
   - How it triggered: Data gap Facility status screen via test 'California Department of Health Care Services active/closed facility-status ratio'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Facility closures or status changes can affect capacity, access, and contract performance; the system treats a high closed-facility ratio as a service-delivery red flag.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would keep this item active until Federal Audit Clearinghouse findings, management responses, and corrective-action status are checked.

### PATH Ventures

CalDS flags PATH Ventures as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: PATH Ventures
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park.
   - When/where: year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E25`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: PATH Ventures
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for PATH Ventures, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: PATH Ventures
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E25`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: PATH Ventures
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: PATH Ventures
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Self-Help Enterprises

CalDS flags Self-Help Enterprises as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Self-Help Enterprises has state-award project geography in Fresno, Merced, Tulare; official county or Continuum of Care context flags Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909.
   - When/where: year(s): 2023, 2024, 2025; place: Fresno, Merced, Tulare; subject: Self-Help Enterprises
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Fresno, Merced, Tulare'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village.
   - When/where: year(s): 2025; place: Fresno; subject: Self-Help Enterprises
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E44`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Self-Help Enterprises
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Self-Help Enterprises, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Self-Help Enterprises
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E44`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Self-Help Enterprises
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Self-Help Enterprises
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Service First Northern California

CalDS flags Service First Northern California as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520.
   - When/where: year(s): 2023, 2024, 2025; place: San Joaquin; subject: Service First Northern California
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Joaquin'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House.
   - When/where: year(s): 2026; subject: Service First Northern California
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E29`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Service First Northern California
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Service First Northern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Service First Northern California
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E29`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Service First Northern California
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Service First Northern California
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Swords to Plowshares

CalDS flags Swords to Plowshares as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030.
   - When/where: year(s): 2023, 2024, 2025; place: San Francisco; subject: Swords to Plowshares
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Francisco'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness.
   - When/where: year(s): 2025; place: San Francisco; subject: Swords to Plowshares
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Swords to Plowshares
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Swords to Plowshares, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Swords to Plowshares
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: Swords to Plowshares
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Swords to Plowshares
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### TLCS, Inc.

CalDS flags TLCS, Inc. as a moderate-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. Medium - Spend-versus-results: TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000.
   - When/where: year(s): 2023, 2024, 2025; place: Sacramento; subject: TLCS, Inc.
   - How it triggered: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Sacramento'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. Medium - State homelessness award exposure: California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion.
   - When/where: year(s): 2023; place: Sacramento; subject: TLCS, Inc.
   - How it triggered: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E21`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: TLCS, Inc.
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for TLCS, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: TLCS, Inc.
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E21`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: TLCS, Inc.
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: TLCS, Inc.
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### The People Concern

CalDS flags The People Concern as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Spend-versus-results: The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: The People Concern
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

2. High - State homelessness award exposure: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community.
   - When/where: year(s): 2025, 2026; place: Los Angeles; subject: The People Concern
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E30`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

3. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: The People Concern
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

4. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: The People Concern
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E30`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

5. Data gap - Enforcement and docket history: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
   - When/where: subject: The People Concern
   - How it triggered: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: The People Concern
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.

### Weingart Center Association

CalDS flags Weingart Center Association as a high-priority possible waste, fraud, abuse, or mismanagement review subject. The entity is in this dossier because the current source bundle contains the specific source facts below.

Specific findings that drove the flag:

1. High - Enforcement and docket history: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive.
   - When/where: year(s): 2025; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High Enforcement and docket history screen via test 'Official federal criminal-case source and City project linkage screen'. Data status: third_party_charged_presumption_of_innocence.
   - Evidence: `E08`, `E07`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`; source: https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf; [internal local artifact]
   - Why it matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.

2. High - Spend-versus-results: Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300.
   - When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
   - Evidence: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`; source: [internal local artifact] [internal local artifact]
   - Why it matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.

3. High - State homelessness award exposure: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby.
   - When/where: year(s): 2023; place: Los Angeles; subject: Weingart Center Association
   - How it triggered: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
   - Evidence: `E02`, `E26`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.

4. Data gap - Audit controls: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
   - When/where: subject: Weingart Center Association
   - How it triggered: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.

5. Data gap - Direct funding verification: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Weingart Center Association, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
   - When/where: subject: Weingart Center Association
   - How it triggered: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
   - Evidence: `E02`, `E26`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`; source: [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
   - Why it matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.

6. Data gap - Executive compensation: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
   - When/where: subject: Weingart Center Association
   - How it triggered: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
   - Evidence: no direct evidence ref in this row; source: not listed on this row; use evidence ledger
   - Why it matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.

- The full matrix contains additional lower-priority source-backed review items for this entity.

Review stance: The system would not close this item from summary records alone; spending and footprint need provider-attributable outcome records.


## 6. Flagged Review Matrix

Methodology: Waste, fraud, abuse, and mismanagement risk-screening matrix generated from parsed Internal Revenue Service Form 990, Federal Audit Clearinghouse, California Department of Health Care Services facility-status, California Department of Housing and Community Development Homekey/Homekey+ state-award, official enforcement/docket records, county/document index, and retrieved service-page records. The matrix tests observable risk proxies: year-over-year financial growth, spending growth, public-funds concentration, executive compensation, payroll scale, political/lobbying indicators, audit-control flags, enforcement/docket source flags, award concentration, facility closure patterns, off-scope web-language checks, official county or Continuum of Care outcome context, and remaining provider-attributable outcome gaps.

Risk scale: Indicator levels: High=immediate reviewer follow-up, Medium=review queue, Low=context only, Data gap=required source missing or not parsed. Levels are screening priorities, not findings or allegations.

| Risk level | Count |
| --- | --- |
| High | 11 |
| Medium | 17 |
| Data gap | 151 |
| Low | 31 |

High and medium rows are review priorities. Data-gap rows are source-collection blockers. Low rows are not expanded here unless they are needed for context.

### High Rows

#### High-1: Weingart Center Association - Enforcement and docket history

- Test: Official federal criminal-case source and City project linkage screen
- What CalDS found: An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive.
- When/where: year(s): 2025; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High Enforcement and docket history screen via test 'Official federal criminal-case source and City project linkage screen'. Data status: third_party_charged_presumption_of_innocence.
- Evidence refs: `E08`, `E07`, `enforcement_docket_weingart_center_association_1`, `source_table_enforcement_docket`
- Source URI(s): https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf; [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because An official federal press release dated October 16, 2025 says Steven Taylor was charged with seven counts of bank fraud, one count of aggravated identity theft, and one count of money laundering, and describes a Cheviot Hills property originally acquired for $11.2 million and contracted to sell to a homeless housing developer using City of Los Angeles and State of California public funds for $27.3 million in a double-escrow transaction hidden from the lender. Los Angeles City Clerk records identify the Cheviot Hills/Shelby Homekey 3 project as Weingart-related and later describe The Weingart Shelby at 3340 Shelby Drive. This source fact matches the implemented enforcement and docket history screen and should stay in the active review queue.
- Why this matters: The row matters because it is a measurable source-backed proxy for public-funds oversight risk.
- What this flags: Open the federal press release, City Clerk Homekey authorization, and 2026 operations report; verify case number, named parties, property address, project agreements, payment flows, due diligence records, and whether any official source names Weingart as charged or only as transaction counterparty/operator.
- What this does not prove: It does not prove wrongdoing; it is a source-backed review prompt.
- Human next step: Open the cited source records for Weingart Center Association and compare the raw source wording to this row.
- Caveat: The official federal source charges Taylor, not Weingart Center Association.
- Caveat: The row is a deep-dive trigger because public homelessness funds and a Weingart-linked project appear in the official-source chain.
- Caveat: A criminal charge is an allegation; every defendant is presumed innocent unless and until proven guilty in court.
- Caveat: Use exact legal status from the official source; do not convert third-party charges into entity-level findings.

#### High-2: California Supportive Housing - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda, Sacramento
- What CalDS found: California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, Sacramento'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Supportive Housing has state-award project geography in Alameda, Sacramento; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%), Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$51,891,854. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-3: DignityMoves - Spend-versus-results

- Test: County outcome movement and entity spending context: Alameda, San Bernardino, Ventura
- What CalDS found: DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Alameda, San Bernardino, Ventura'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because DignityMoves has state-award project geography in Alameda, San Bernardino, Ventura; official county or Continuum of Care context flags Alameda Continuum of Care M1a service-system volume increased from 13,827 in Jan 2023 - Dec 2023 to 15,967 in Jul 2024 - Jun 2025 (+15.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$77,180,702. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-4: Hope the Mission - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Hope the Mission
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Hope the Mission has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$115,337,991. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-5: The People Concern - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: The People Concern
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because The People Concern has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$53,435,650. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-6: Weingart Center Association - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because Weingart Center Association has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$95,565,300. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### High-7: California Supportive Housing - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing.
- When/where: year(s): 2023, 2025; place: Alameda, Sacramento; subject: California Supportive Housing
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E49`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name California Supportive Housing as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $51,891,854. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2025. Counties: Alameda, Sacramento. Projects: CSH Enterprise Housing, CSH Elsie Housing. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-8: DignityMoves - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road.
- When/where: year(s): 2023, 2024, 2025; place: Alameda, San Bernardino, Ventura; subject: DignityMoves
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name DignityMoves as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $77,180,702. Programs: Homekey Round 3, Homekey+. Award year(s): 2023, 2024, 2025. Counties: Alameda, San Bernardino, Ventura. Projects: San Bernardino Community Wellness Campus, Dignity Village, Homekey+ Lewis Road. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-9: Hope the Mission - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn.
- When/where: year(s): 2023, 2024; place: Los Angeles; subject: Hope the Mission
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E50`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Hope the Mission as a co-applicant or project partner on 5 Homekey/Homekey+ project row(s), with total project-award exposure of $115,337,991. Programs: Homekey Round 3. Award year(s): 2023, 2024. Counties: Los Angeles. Projects: Sierra Highway PSH Portfolio, Motel 6 North Hills, Knight's Inn Palmdale, Lancaster Pathway Home, Oak Tree Inn. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-10: The People Concern - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community.
- When/where: year(s): 2025, 2026; place: Los Angeles; subject: The People Concern
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E30`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name The People Concern as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $53,435,650. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Safe Harbor I, St.Vincent Supportive Community. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### High-11: Weingart Center Association - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby.
- When/where: year(s): 2023; place: Los Angeles; subject: Weingart Center Association
- How this triggered review: High State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E26`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a high possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Weingart Center Association as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $95,565,300. Programs: Homekey Round 3. Award year(s): 2023. Counties: Los Angeles. Projects: The Weingart Sycamore, The Weingart Primrose, The Weingart Shelby. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

### Medium Rows

#### Medium-1: Burbank Housing Development Corporation - Spend-versus-results

- Test: County outcome movement and entity spending context: Napa, Sonoma
- What CalDS found: Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852.
- When/where: year(s): 2023, 2024, 2025; place: Napa, Sonoma; subject: Burbank Housing Development Corporation
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Napa, Sonoma'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Burbank Housing Development Corporation has state-award project geography in Napa, Sonoma; official county or Continuum of Care context flags Napa Continuum of Care M1a service-system volume increased from 1,090 in Jan 2023 - Dec 2023 to 1,217 in Jul 2024 - Jun 2025 (+11.7%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,385,852. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-2: Community Revitalization and Development Corporation - Spend-versus-results

- Test: County outcome movement and entity spending context: Amador, Solano
- What CalDS found: Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496.
- When/where: year(s): 2023, 2024, 2025; place: Amador, Solano; subject: Community Revitalization and Development Corporation
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Amador, Solano'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Community Revitalization and Development Corporation has state-award project geography in Amador, Solano; official county or Continuum of Care context flags Amador Continuum of Care M1a service-system volume increased from 985 in Jan 2023 - Dec 2023 to 1,253 in Jul 2024 - Jun 2025 (+27.2%), Solano Continuum of Care M1a service-system volume increased from 1,952 in Jan 2023 - Dec 2023 to 3,096 in Jul 2024 - Jun 2025 (+58.6%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$36,535,496. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-3: PATH Ventures - Spend-versus-results

- Test: County outcome movement and entity spending context: Los Angeles
- What CalDS found: PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927.
- When/where: year(s): 2023, 2024, 2025; place: Los Angeles; subject: PATH Ventures
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Los Angeles'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because PATH Ventures has state-award project geography in Los Angeles; official county or Continuum of Care context flags Los Angeles Continuum of Care M1a service-system volume increased from 97,572 in Jan 2023 - Dec 2023 to 106,676 in Jul 2024 - Jun 2025 (+9.3%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$42,672,927. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-4: Self-Help Enterprises - Spend-versus-results

- Test: County outcome movement and entity spending context: Fresno, Merced, Tulare
- What CalDS found: Self-Help Enterprises has state-award project geography in Fresno, Merced, Tulare; official county or Continuum of Care context flags Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909.
- When/where: year(s): 2023, 2024, 2025; place: Fresno, Merced, Tulare; subject: Self-Help Enterprises
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Fresno, Merced, Tulare'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Self-Help Enterprises has state-award project geography in Fresno, Merced, Tulare; official county or Continuum of Care context flags Fresno Continuum of Care M1a service-system volume increased from 11,036 in Jan 2023 - Dec 2023 to 12,709 in Jul 2024 - Jun 2025 (+15.2%), Tulare Continuum of Care M1a service-system volume increased from 5,164 in Jan 2023 - Dec 2023 to 5,910 in Jul 2024 - Jun 2025 (+14.4%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$45,193,909. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-5: Service First Northern California - Spend-versus-results

- Test: County outcome movement and entity spending context: San Joaquin
- What CalDS found: Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520.
- When/where: year(s): 2023, 2024, 2025; place: San Joaquin; subject: Service First Northern California
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Joaquin'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Service First Northern California has state-award project geography in San Joaquin; official county or Continuum of Care context flags San Joaquin Continuum of Care M1a service-system volume increased from 11,137 in Jan 2023 - Dec 2023 to 12,533 in Jul 2024 - Jun 2025 (+12.5%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$35,579,520. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-6: Swords to Plowshares - Spend-versus-results

- Test: County outcome movement and entity spending context: San Francisco
- What CalDS found: Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030.
- When/where: year(s): 2023, 2024, 2025; place: San Francisco; subject: Swords to Plowshares
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: San Francisco'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because Swords to Plowshares has state-award project geography in San Francisco; official county or Continuum of Care context flags San Francisco Continuum of Care M1a service-system volume increased from 19,118 in Jan 2023 - Dec 2023 to 21,255 in Jul 2024 - Jun 2025 (+11.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$39,044,030. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-7: TLCS, Inc. - Spend-versus-results

- Test: County outcome movement and entity spending context: Sacramento
- What CalDS found: TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000.
- When/where: year(s): 2023, 2024, 2025; place: Sacramento; subject: TLCS, Inc.
- How this triggered review: Medium Spend-versus-results screen via test 'County outcome movement and entity spending context: Sacramento'. Data status: observed_contextual_join.
- Evidence refs: `E03`, `E04`, `source_table_official_homelessness_outcomes`, `source_table_spend_vs_results_join`
- Source URI(s): [internal local artifact] [internal local artifact]
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because TLCS, Inc. has state-award project geography in Sacramento; official county or Continuum of Care context flags Sacramento Continuum of Care M1a service-system volume increased from 18,432 in Jan 2023 - Dec 2023 to 22,889 in Jul 2024 - Jun 2025 (+24.2%). Parsed entity growth context: spending=not parsed, revenue=not parsed, government grants=not parsed. State project-award exposure=$40,386,000. This source fact matches the implemented spend-versus-results screen and should stay in the active review queue.
- Why this matters: Spending growth next to worsening county-level outcomes is not provider-attributable by itself, but it is exactly the mismatch CalDS should force into review.
- What this flags: Review underlying county or Continuum of Care outcome rows, state-award project geography, contract geography, and provider-specific outcome records before drawing any conclusion.
- What this does not prove: It does not prove the entity caused county or Continuum of Care outcome movement; it flags a spend/outcome question for review.
- Human next step: Request provider-attributable utilization, completion, discharge, cost-per-service, and outcome records for the same county and year window.
- Caveat: County and Continuum of Care outcomes are not provider-attributable without direct program outcome records.
- Caveat: This join compares state project-award exposure to official geography-level homelessness service-system movement, not audited spend or client outcomes.
- Caveat: The award-list exposure total is not a verified direct-payment total to the nonprofit.

#### Medium-8: Abode Housing Development - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments.
- When/where: year(s): 2025; place: Santa Clara; subject: Abode Housing Development
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E19`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Abode Housing Development as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $41,220,000. Programs: Homekey+. Award year(s): 2025. Counties: Santa Clara. Projects: Algarve Community Apartments. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-9: Burbank Housing Development Corporation - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive.
- When/where: year(s): 2025; subject: Burbank Housing Development Corporation
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E20`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Burbank Housing Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,385,852. Programs: Homekey+. Award year(s): 2025. Counties: Napa, Sonoma. Projects: 4th and Division Apartments, 6500 Redwood Drive. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-10: Community Revitalization and Development Corporation - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons.
- When/where: year(s): 2025; subject: Community Revitalization and Development Corporation
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E46`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Community Revitalization and Development Corporation as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $36,535,496. Programs: Homekey+. Award year(s): 2025. Counties: Amador, Solano. Projects: Vista Ridge, Valley View Commons. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-11: Habitat for Humanity Yuba/Sutter, Inc. - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates.
- When/where: year(s): 2024, 2025, 2026; subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E01`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Habitat for Humanity Yuba/Sutter, Inc. as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $35,086,396. Programs: Homekey Round 3, Homekey+. Award year(s): 2024, 2025, 2026. Counties: Glenn, Sutter, Yuba. Projects: Merriment Village Apartments, Purpose Place Apartments Phase III, Innovation Housing Estates. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-12: Lutheran Social Services of Southern California - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus.
- When/where: year(s): 2023; place: San Bernardino; subject: Lutheran Social Services of Southern California
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Lutheran Social Services of Southern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $34,944,702. Programs: Homekey Round 3. Award year(s): 2023. Counties: San Bernardino. Projects: San Bernardino Community Wellness Campus. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-13: PATH Ventures - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park.
- When/where: year(s): 2025, 2026; place: Los Angeles; subject: PATH Ventures
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E25`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name PATH Ventures as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $42,672,927. Programs: Homekey+. Award year(s): 2025, 2026. Counties: Los Angeles. Projects: Path Villas East LA, PATH Villas South Park. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-14: Self-Help Enterprises - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village.
- When/where: year(s): 2025; place: Fresno; subject: Self-Help Enterprises
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E44`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Self-Help Enterprises as a co-applicant or project partner on 3 Homekey/Homekey+ project row(s), with total project-award exposure of $45,193,909. Programs: Homekey+. Award year(s): 2025. Counties: Fresno, Merced, Tulare. Projects: Crescent Meadows, La Hacienda Estates, Mercy Village. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-15: Service First Northern California - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House.
- When/where: year(s): 2026; subject: Service First Northern California
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E29`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Service First Northern California as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $35,579,520. Programs: Homekey+. Award year(s): 2026. Counties: San Joaquin. Projects: The Hunter House. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-16: Swords to Plowshares - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness.
- When/where: year(s): 2025; place: San Francisco; subject: Swords to Plowshares
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name Swords to Plowshares as a co-applicant or project partner on 1 Homekey/Homekey+ project row(s), with total project-award exposure of $39,044,030. Programs: Homekey+. Award year(s): 2025. Counties: San Francisco. Projects: 1034 Van Ness. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

#### Medium-17: TLCS, Inc. - State homelessness award exposure

- Test: Homekey/Homekey+ co-applicant project-award exposure
- What CalDS found: California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion.
- When/where: year(s): 2023; place: Sacramento; subject: TLCS, Inc.
- How this triggered review: Medium State homelessness award exposure screen via test 'Homekey/Homekey+ co-applicant project-award exposure'. Data status: observed.
- Evidence refs: `E02`, `E21`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a medium possible waste, fraud, abuse, or mismanagement review priority because California Department of Housing and Community Development award lists name TLCS, Inc. as a co-applicant or project partner on 2 Homekey/Homekey+ project row(s), with total project-award exposure of $40,386,000. Programs: Homekey Round 3. Award year(s): 2023. Counties: Sacramento. Projects: Arden Star Hotel Homekey Conversion, Rodeway Inn Homekey Conversion. This source fact matches the implemented state homelessness award exposure screen and should stay in the active review queue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Verify California Department of Housing and Community Development source rows, standard agreements, eligible applicant, co-applicant role, draw records, and any subrecipient allocation before treating project-award exposure as direct receipt.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: This is project-award exposure assigned to source-listed co-applicants; allocation among co-applicants is not stated in the award lists.
- Caveat: The screen prioritizes materiality and follow-up, not a finding that funds were mishandled.

### Data gap Rows

#### Data gap-1: Abode Housing Development - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-2: Burbank Housing Development Corporation - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-3: California Supportive Housing - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-4: Community Revitalization and Development Corporation - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-5: DignityMoves - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-6: Habitat for Humanity Yuba/Sutter, Inc. - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-7: Hope the Mission - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-8: Lutheran Social Services of Southern California - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-9: PATH Ventures - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-10: Self-Help Enterprises - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-11: Service First Northern California - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-12: Swords to Plowshares - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-13: TLCS, Inc. - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-14: The People Concern - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: The People Concern
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-15: Weingart Center Association - Audit controls

- Test: Federal Audit Clearinghouse control flags and findings
- What CalDS found: No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Audit controls screen via test 'Federal Audit Clearinghouse control flags and findings'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No Federal Audit Clearinghouse audit-control summary row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Audit-control flags are direct oversight signals; repeated or unresolved findings can indicate weak controls over public funds.
- What this flags: Recover Federal Audit Clearinghouse general, findings, awards, and audit source document records before audit-control ranking.
- What this does not prove: It does not prove a current unresolved program issue; audit year, finding status, response, and resolution must be checked.
- Human next step: Open the Federal Audit Clearinghouse audit source document and finding rows; verify current finding status, agency response, corrective action, and repeat status.

#### Data gap-16: Abode Housing Development - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E19`, `source_table_state_homeless_awards`, `state_homeless_awards_abode_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Abode Housing Development, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-17: Burbank Housing Development Corporation - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E20`, `source_table_state_homeless_awards`, `state_homeless_awards_burbank_housing_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Burbank Housing Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-18: California Supportive Housing - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E49`, `source_table_state_homeless_awards`, `state_homeless_awards_california_supportive_housing`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for California Supportive Housing, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-19: Community Revitalization and Development Corporation - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Community Revitalization and Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E46`, `source_table_state_homeless_awards`, `state_homeless_awards_community_revitalization_development`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Community Revitalization and Development Corporation, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-20: DignityMoves - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for DignityMoves, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E43`, `source_table_state_homeless_awards`, `state_homeless_awards_dignitymoves`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for DignityMoves, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-21: Habitat for Humanity Yuba/Sutter, Inc. - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Habitat for Humanity Yuba/Sutter, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E01`, `source_table_state_homeless_awards`, `state_homeless_awards_habitat_yuba_sutter`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Habitat for Humanity Yuba/Sutter, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-22: Hope the Mission - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Hope the Mission, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E50`, `source_table_state_homeless_awards`, `state_homeless_awards_hope_the_mission`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Hope the Mission, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-23: Lutheran Social Services of Southern California - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E47`, `source_table_state_homeless_awards`, `state_homeless_awards_lutheran_social_services_socal`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Lutheran Social Services of Southern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-24: PATH Ventures - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for PATH Ventures, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E25`, `source_table_state_homeless_awards`, `state_homeless_awards_path_ventures`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for PATH Ventures, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-25: Self-Help Enterprises - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Self-Help Enterprises, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E44`, `source_table_state_homeless_awards`, `state_homeless_awards_self_help_enterprises`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Self-Help Enterprises, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-26: Service First Northern California - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Service First Northern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E29`, `source_table_state_homeless_awards`, `state_homeless_awards_service_first_northern_california`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Service First Northern California, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-27: Swords to Plowshares - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Swords to Plowshares, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E35`, `source_table_state_homeless_awards`, `state_homeless_awards_swords_to_plowshares`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Swords to Plowshares, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-28: TLCS, Inc. - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for TLCS, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E21`, `source_table_state_homeless_awards`, `state_homeless_awards_tlcs_inc`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for TLCS, Inc., but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-29: The People Concern - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: The People Concern
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E30`, `source_table_state_homeless_awards`, `state_homeless_awards_the_people_concern`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for The People Concern, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-30: Weingart Center Association - Direct funding verification

- Test: State award direct-recipient and subrecipient allocation coverage
- What CalDS found: The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Weingart Center Association, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Direct funding verification screen via test 'State award direct-recipient and subrecipient allocation coverage'. Data status: missing_source_or_field.
- Evidence refs: `E02`, `E26`, `source_table_state_homeless_awards`, `state_homeless_awards_weingart_center`
- Source URI(s): [internal local artifact] https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf
- System opinion: CalDS flags this as a data blocker because The California Department of Housing and Community Development award list identifies eligible public applicant(s) and co-applicant(s) for Weingart Center Association, but this run does not recover the standard agreement, payment ledger, subrecipient ledger, or operating-cost draw records needed to verify the exact dollars received by the nonprofit. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Pull the state standard agreement, draw/payment records, and local subrecipient contracts before making direct-recipient or cost-allowability claims.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: The award-list role field supports exposure ranking but not direct-payment allocation.

#### Data gap-31: Abode Housing Development - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-32: Burbank Housing Development Corporation - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-33: California Supportive Housing - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-34: Community Revitalization and Development Corporation - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-35: DignityMoves - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-36: Habitat for Humanity Yuba/Sutter, Inc. - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-37: Hope the Mission - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-38: Lutheran Social Services of Southern California - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-39: PATH Ventures - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-40: Self-Help Enterprises - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-41: Service First Northern California - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-42: Swords to Plowshares - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-43: TLCS, Inc. - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-44: The People Concern - Enforcement and docket history

- Test: Official enforcement, prosecution, violation, and docket source coverage
- What CalDS found: No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus.
- When/where: subject: The People Concern
- How this triggered review: Data gap Enforcement and docket history screen via test 'Official enforcement, prosecution, violation, and docket source coverage'. Data status: missing_source.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No official enforcement, prosecution, violation, or docket row is present for this entity in the current corpus. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Run official enforcement and docket source acquisition before clearing or downgrading this source family.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: No recovered row is not a clearance; it only states current corpus coverage.

#### Data gap-45: Abode Housing Development - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-46: Burbank Housing Development Corporation - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-47: California Supportive Housing - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-48: Community Revitalization and Development Corporation - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-49: DignityMoves - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-50: Habitat for Humanity Yuba/Sutter, Inc. - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-51: Hope the Mission - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-52: Lutheran Social Services of Southern California - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-53: PATH Ventures - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-54: Self-Help Enterprises - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-55: Service First Northern California - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-56: Swords to Plowshares - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-57: TLCS, Inc. - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-58: The People Concern - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: The People Concern
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-59: Weingart Center Association - Executive compensation

- Test: Highest officer/key employee compensation from Form 990 Part VII
- What CalDS found: No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Executive compensation screen via test 'Highest officer/key employee compensation from Form 990 Part VII'. Data status: missing_parser_or_source_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed Part VII compensation total is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: High executive pay at a publicly funded service nonprofit is a materiality and governance question; the reviewer needs to know whether pay, approval, and outcomes line up.
- What this flags: Parse Part VII from the raw return and compare officer/key-employee pay against peers, program scale, and compensation-policy disclosures.
- What this does not prove: It does not prove compensation is improper; board approval, comparability, role scope, and peer context must be reviewed.
- Human next step: Verify the underlying Form 990 officer table, board approval process, comparability data, and related-organization compensation context.
- Caveat: The current test does not infer reasonableness; it only flags pay levels for reviewer comparison.

#### Data gap-60: Abode Housing Development - Facility status

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

#### Data gap-61: Burbank Housing Development Corporation - Facility status

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

#### Data gap-62: California Supportive Housing - Facility status

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

#### Data gap-63: Community Revitalization and Development Corporation - Facility status

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

#### Data gap-64: DignityMoves - Facility status

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

#### Data gap-65: Habitat for Humanity Yuba/Sutter, Inc. - Facility status

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

#### Data gap-66: Hope the Mission - Facility status

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

#### Data gap-67: Lutheran Social Services of Southern California - Facility status

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

#### Data gap-68: PATH Ventures - Facility status

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

#### Data gap-69: Self-Help Enterprises - Facility status

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

#### Data gap-70: Service First Northern California - Facility status

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

#### Data gap-71: Swords to Plowshares - Facility status

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

#### Data gap-72: TLCS, Inc. - Facility status

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

#### Data gap-73: The People Concern - Facility status

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

#### Data gap-74: Weingart Center Association - Facility status

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

#### Data gap-75: Abode Housing Development - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-76: Burbank Housing Development Corporation - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-77: California Supportive Housing - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-78: Community Revitalization and Development Corporation - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-79: DignityMoves - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-80: Habitat for Humanity Yuba/Sutter, Inc. - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-81: Hope the Mission - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-82: Lutheran Social Services of Southern California - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-83: PATH Ventures - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-84: Self-Help Enterprises - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-85: Service First Northern California - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-86: Swords to Plowshares - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-87: TLCS, Inc. - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-88: The People Concern - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: The People Concern
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-89: Weingart Center Association - Financial growth

- Test: Year-over-year total revenue growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Financial growth screen via test 'Year-over-year total revenue growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric revenue are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Compare the growth to contract amendments, new grants, acquisitions, service volume, and program outcomes before escalation.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-90: Case-wide - License/adverse-action history

- Test: California Department of Health Care Services adverse-action page machine readability
- What CalDS found: California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run.
- When/where: subject: Case-wide
- How this triggered review: Data gap License/adverse-action history screen via test 'California Department of Health Care Services adverse-action page machine readability'. Data status: non_machine_readable_source.
- Evidence refs: `E03`, `source_table_official_homelessness_outcomes`
- Source URI(s): [internal local artifact]
- System opinion: CalDS flags this as a data blocker because California Department of Health Care Services adverse-action pages were fetched but did not expose machine-readable target rows in static text during this run. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Archive the pages and pursue a row export or page-specific parser before ranking probation, suspension, revocation, or NOV history.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Existing California Department of Health Care Services Active/Closed facility status remains available, but it is not the same as adverse-action history.

#### Data gap-91: Abode Housing Development - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-92: Burbank Housing Development Corporation - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-93: California Supportive Housing - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-94: Community Revitalization and Development Corporation - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-95: DignityMoves - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-96: Habitat for Humanity Yuba/Sutter, Inc. - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-97: Hope the Mission - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-98: Lutheran Social Services of Southern California - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-99: PATH Ventures - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-100: Self-Help Enterprises - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-101: Service First Northern California - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-102: Swords to Plowshares - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-103: TLCS, Inc. - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-104: The People Concern - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: The People Concern
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-105: Weingart Center Association - Off-scope activity

- Test: Form 990 political campaign and lobbying indicators
- What CalDS found: No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Off-scope activity screen via test 'Form 990 political campaign and lobbying indicators'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No parsed PoliticalCampaignActyInd or LobbyingActivitiesInd field is available in the current Internal Revenue Service table for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Public claims and program language matter when they point to activities that may need contract-scope, grant-scope, or lobbying-disclosure review.
- What this flags: Parse the latest full return and review related schedules before judging whether dollars were used outside funded scope.
- What this does not prove: It does not prove spending outside allowed scope; contract, grant, and accounting records must be checked.
- Human next step: Compare public statements to contract scopes, grant restrictions, lobbying disclosures, and accounting treatment before drawing conclusions.
- Caveat: This check only covers return-level indicators; it does not inspect every program expenditure.

#### Data gap-106: Abode Housing Development - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-107: Burbank Housing Development Corporation - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-108: California Supportive Housing - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-109: Community Revitalization and Development Corporation - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-110: DignityMoves - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-111: Habitat for Humanity Yuba/Sutter, Inc. - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-112: Hope the Mission - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-113: Lutheran Social Services of Southern California - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-114: PATH Ventures - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-115: Self-Help Enterprises - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-116: Service First Northern California - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-117: Swords to Plowshares - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-118: TLCS, Inc. - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-119: The People Concern - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: The People Concern
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-120: Weingart Center Association - Payroll and wages

- Test: Year-over-year salaries, compensation, and benefits growth
- What CalDS found: No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Payroll and wages screen via test 'Year-over-year salaries, compensation, and benefits growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with parsed salaries/compensation/benefits totals are available for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: A missing source can hide the answer either way; the system keeps the issue open until the gap is resolved.
- What this flags: Parse the salaries/compensation/benefits line and compare payroll growth to headcount, contract scope, and service volume.
- What this does not prove: It does not prove a substantive issue; it identifies a source gap that blocks stronger review.
- Human next step: Collect the missing source named in the row and rerun the matrix before upgrading the signal.
- Caveat: Payroll growth alone does not show misuse; it is a spend-versus-output review trigger.

#### Data gap-121: Case-wide - Public attention and traffic

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

#### Data gap-122: Abode Housing Development - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-123: Burbank Housing Development Corporation - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-124: California Supportive Housing - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-125: Community Revitalization and Development Corporation - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-126: DignityMoves - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-127: Habitat for Humanity Yuba/Sutter, Inc. - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-128: Hope the Mission - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-129: Lutheran Social Services of Southern California - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-130: PATH Ventures - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-131: Self-Help Enterprises - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-132: Service First Northern California - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-133: Swords to Plowshares - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-134: TLCS, Inc. - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-135: The People Concern - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: The People Concern
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-136: Weingart Center Association - Public-funds concentration

- Test: Government grants as share of Form 990 revenue
- What CalDS found: No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Public-funds concentration screen via test 'Government grants as share of Form 990 revenue'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No downloaded Internal Revenue Service row in the current corpus contains both government grants and total revenue for this entity. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Large public-funds exposure raises the stakes of any control, deliverable, or outcome weakness because taxpayer dollars are material.
- What this flags: Recover the full return or schedule detail before ranking public-funds concentration.
- What this does not prove: It does not prove poor performance or misuse; it marks funding exposure that needs source and outcome review.
- Human next step: Trace award programs to contracts, grant terms, deliverables, and provider-attributable outcome reports.
- Caveat: Blank government-grant fields may reflect parser coverage or return presentation; verify against raw machine-readable filing data/source document.

#### Data gap-137: Abode Housing Development - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Abode Housing Development
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-138: Burbank Housing Development Corporation - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Burbank Housing Development Corporation
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-139: California Supportive Housing - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: California Supportive Housing
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-140: Community Revitalization and Development Corporation - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Community Revitalization and Development Corporation
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-141: DignityMoves - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: DignityMoves
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-142: Habitat for Humanity Yuba/Sutter, Inc. - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Habitat for Humanity Yuba/Sutter, Inc.
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-143: Hope the Mission - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Hope the Mission
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-144: Lutheran Social Services of Southern California - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Lutheran Social Services of Southern California
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-145: PATH Ventures - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: PATH Ventures
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-146: Self-Help Enterprises - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Self-Help Enterprises
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-147: Service First Northern California - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Service First Northern California
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-148: Swords to Plowshares - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Swords to Plowshares
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-149: TLCS, Inc. - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: TLCS, Inc.
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-150: The People Concern - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: The People Concern
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
- System opinion: CalDS flags this as a data blocker because No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none. Without the missing source, the system cannot responsibly downgrade or clear the issue.
- Why this matters: Rapid revenue or expense growth becomes a possible waste, fraud, abuse, or mismanagement review concern when it outpaces visible service capacity, documented outcomes, or clear grant-scope explanations.
- What this flags: Check whether expense growth maps to funded scope, staffing, facilities, and documented service results.
- What this does not prove: It does not prove misuse; growth can have ordinary program, accounting, merger, or grant-timing explanations.
- Human next step: Compare raw Internal Revenue Service machine-readable filing data/source document returns year over year, then separate program growth, grants, mergers, one-time receipts, and expense categories.
- Caveat: A missing year is not an adverse signal by itself, but it prevents the growth test.

#### Data gap-151: Weingart Center Association - Spending growth

- Test: Year-over-year total expense growth
- What CalDS found: No two downloaded Internal Revenue Service returns with numeric expenses are available for this entity. Available parsed years: none.
- When/where: subject: Weingart Center Association
- How this triggered review: Data gap Spending growth screen via test 'Year-over-year total expense growth'. Data status: missing_source_or_field.
- Evidence refs: no direct evidence ref in this row
- Source URI(s): not listed on this row; use evidence ledger
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
| `E01` | `evidence_1048a1de8993c191` | `state_homeless_awards_habitat_yuba_sutter` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2026-02-13 | `45b904c642eb366c3093e57757316c9e120ee711d89a9d83bed994ea9e4ae21d` |
| `E02` | `evidence_bce512e847005680` | `source_table_state_homeless_awards` | Parsed California state homelessness award table | [internal local artifact] | 2026-02-18 | `8d191dbfde06fb7793cc5e68c4a93245aca4d42881a237a93e29c9e9e62793e3` |
| `E03` | `evidence_142daa7dc667d610` | `source_table_official_homelessness_outcomes` | Parsed official outcome source table | [internal local artifact] | 2025-12-22 | `dff6860347c8121ce00a6dd1ed287fcfc2c3d61b0a418780f1aaf48a896b331a` |
| `E04` | `evidence_0805dc6501798c59` | `source_table_spend_vs_results_join` | Parsed spend-versus-results join | [internal local artifact] | 2026-04-29 | `6f03de5c56fcfa038ef2ad195bb60eada268f5764cd0bc445581059bd201ac26` |
| `E05` | `evidence_cafb34496b1fd25c` | `org_service_pages_tlcs_inc` | Organization service page | https://hopecoop.org/ | 2026-04-29 | `f8646a31b306abd3924e5a87dfdf23ccd8cbe85d6fe4e9053230b2075591acb9` |
| `E06` | `evidence_a16718fccd04fc89` | `public_statements_tlcs_inc` | Public statement source | https://hopecoop.org/ | 2026-04-29 | `1ee3cac5d50a90e8ba0864df86ee6ed1b8a6672805cfbe1da14abcd6f7dae879` |
| `E07` | `evidence_a98f846f1a9e2142` | `source_table_enforcement_docket` | Parsed enforcement and docket source table | [internal local artifact] | 2025-10-16 | `30757453891231563a104f5c06c105409cdaa4698f4afa94774615064626a3c1` |
| `E08` | `evidence_dd6ada01aecefd53` | `enforcement_docket_weingart_center_association_1` | Official enforcement or docket source | https://www.fhfaoig.gov/sites/default/files/Beverly-Hills-Man-Arrested%2C-Brentwood-Man-Charged-in-Separate-Criminal-Cases-Linked-to-Fraud-in-Public-Homelessness-Funds.pdf | 2025-10-16 | `4704d83cf192b49b41a868106f4774b607fd7d38d74e54c7fc8127d1f80cf145` |
| `E09` | `evidence_2458d3752f003308` | `public_statements_weingart_center` | Public statement source | https://www.weingart.org/ | 2026-04-29 | `2b008aab7a0605be9b4fa5af2c23b2b15e10edf48cd76614e3d9e6eb9bc732dd` |
| `E10` | `evidence_188e118a28be58ea` | `org_service_pages_abode_housing_development` | Organization service page | https://abode.org/housing-development | 2026-04-29 | `9fb041bcdf59305e2021e98bbf5bc4776bf6734129748881c5e8be2783fd8806` |
| `E11` | `evidence_2769543baa080f29` | `org_service_pages_burbank_housing_development` | Organization service page | https://burbankhousing.org/our-story/ | 2026-04-29 | `f1445a3432b08552dbc2977ac3250eb04f12ade83e553c3af70d5e09fef98556` |
| `E12` | `evidence_e647304cfc8b3931` | `org_service_pages_path_ventures` | Organization service page | https://epath.org/path-ventures/ | 2026-04-29 | `ae3c8fc5663128591c1b4a62705ecf0d029d16b3d54466bcc12dc7aa0b7a0179` |
| `E13` | `evidence_ae92c466d8e8476f` | `org_service_pages_weingart_center` | Organization service page | https://www.weingart.org/programs | 2026-04-29 | `a7e2658121aa5aed83ab58a1849fee812792b6e029dfabece03ab89c48fbec84` |
| `E14` | `evidence_2eda3cd66f12275b` | `public_statements_burbank_housing_development` | Public statement source | https://burbankhousing.org/ | 2026-04-29 | `9ad1ac08fc76f8318e09795bd23f93ad051a607f2a100d023df0c1676d011f58` |
| `E15` | `evidence_21eed3bff9cc8ebf` | `public_statements_path_ventures` | Public statement source | https://epath.org/ | 2026-04-29 | `ba19a586152c256a829211f5c5706fd1e133984234cf837e12b472aaecf2f0bf` |
| `E16` | `evidence_d7924b278aec997b` | `org_service_pages_service_first_northern_california` | Organization service page | https://servicefirstnc.org/ | 2026-04-29 | `79b3bdee97f98f2f63b306e023f7d7d6b8a53e7a783d4b27e7c7cd11b7197822` |
| `E17` | `evidence_682ea8fc025c5746` | `public_statements_service_first_northern_california` | Public statement source | https://servicefirstnc.org/ | 2026-04-29 | `b170016b03b80dad1f83572def44e5381530a2faf14bcfbc8bdf453b286bfc95` |
| `E18` | `evidence_232787342f64c195` | `public_statements_abode_housing_development` | Public statement source | https://abode.org/ | 2026-04-29 | `09ebac11dd62d9db67de498f0fdc1fc9f5dd82ff20c97e7b66db444d683ef58d` |
| `E19` | `evidence_44d3689fffc4a697` | `state_homeless_awards_abode_housing_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-07-15 | `bba7d0b713962be2cf152366b3e572cdcd32e7a26b3ca888c9a93023b5535356` |
| `E20` | `evidence_75f192ba0054fd88` | `state_homeless_awards_burbank_housing_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-09-19 | `0d79f95ebf76d5ed59b0c694e96c25c71f4a11a86abc28c907318063f22ce6b3` |
| `E21` | `evidence_1eb3b3056136055c` | `state_homeless_awards_tlcs_inc` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-09-26 | `4bf939b3f70c1ddd896e7175b33fd5e932169beba8a7c7dca949a390242f86d4` |
| `E22` | `evidence_0a8f04f2248c7b80` | `org_service_pages_swords_to_plowshares` | Organization service page | https://www.swords-to-plowshares.org/ | 2026-04-29 | `79033bb7ee492fd94ad05e4ce38681c8a212f40dcf39dec1a16196c294f5d7c3` |
| `E23` | `evidence_0dce0630fa0849bd` | `org_service_pages_the_people_concern` | Organization service page | https://www.thepeopleconcern.org/homeless-services/ | 2026-04-29 | `0fef0f1f5f444de7cbc18bee71a3abef6120c3d244339753de198eac58d3d7c1` |
| `E24` | `evidence_250e3dfcd1e5d44a` | `org_service_pages_habitat_yuba_sutter` | Organization service page | https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/ | 2026-04-29 | `3b52fd317d0bbd767851a567c319091f6a884e392d39d3d0ba63b8bfd06277d7` |
| `E25` | `evidence_38d6af06b83bd975` | `state_homeless_awards_path_ventures` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-02-13 | `25674aa8d84f4c723318411d9efd71684e1d1fd4f4c8f764df2020c17074831e` |
| `E26` | `evidence_f0448c16860a5d6c` | `state_homeless_awards_weingart_center` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-11-21 | `a53399b5cd34b8716358d253bf73fd9f6f7ee2b2e6d9b337d74c658c0c09ce7f` |
| `E27` | `evidence_731f163ff4510833` | `public_statements_the_people_concern` | Public statement source | https://www.thepeopleconcern.org/ | 2026-04-29 | `98542059d2a46f8cfe741e3e393fe0667784fab2496aa267645816565e9d83e1` |
| `E28` | `evidence_f0b1400eed295288` | `public_statements_habitat_yuba_sutter` | Public statement source | https://www.habitatca.org/affiliate/habitat-for-humanity-yubasutter/ | 2026-04-29 | `ffa71847efe650d5f6fb23800feec96b7f4c891ef2bff636f2fee6706e01861d` |
| `E29` | `evidence_55d7dc7cff493ad8` | `state_homeless_awards_service_first_northern_california` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-01-27 | `040d16453983171df88116ffb9c9c9d0d5d4153d1f9792ec2f32da65258c884d` |
| `E30` | `evidence_544fb1c9184dc642` | `state_homeless_awards_the_people_concern` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2026-02-13 | `cbc494a65b069d7ede1133a7acec89b9c576eb4ee12aa302b32e5ea5d432899f` |
| `E31` | `evidence_b95722b77e6b082b` | `org_service_pages_self_help_enterprises` | Organization service page | https://www.selfhelpenterprises.org/ | 2026-04-29 | `af65f3ed7423afbb155467747c4f47a674246619360de9ac8e31015046ee566d` |
| `E32` | `evidence_0984aea4b07ebbf3` | `public_statements_self_help_enterprises` | Public statement source | https://www.selfhelpenterprises.org/ | 2026-04-29 | `5ad503cd45343db6eb49971958ceea57376b7bf893900cff1c9bebef698ea2d9` |
| `E33` | `evidence_0b171610226846f6` | `public_statements_swords_to_plowshares` | Public statement source | https://www.swords-to-plowshares.org/about/vision-for-impact/care/ | 2026-04-29 | `f16be1b01a6e237deb594674ccef54dfaa834ceca17431993df031f9c3b1a228` |
| `E34` | `evidence_be366d4c459aaf0b` | `org_service_pages_lutheran_social_services_socal` | Organization service page | https://www.lsssc.org/sbd-main | 2026-04-29 | `9508eb6e381f384bfab2ab4b23022618bd12f9e94b7fb565ae61a45ba3cea4fe` |
| `E35` | `evidence_d07d0633d28cc7be` | `state_homeless_awards_swords_to_plowshares` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-09-19 | `1f2f4620555bb66820ac506afdd96cfd37e98065a97d27575917647f2a21a39f` |
| `E36` | `evidence_56497e8e72e1ad7d` | `org_service_pages_dignitymoves` | Organization service page | https://dignitymoves.org/interim-supportive-housing/ | 2026-04-29 | `479cfde8d0449f52e7cbecbf594a5c8f4a99f627d3edc526a08167fb9c1ebfd8` |
| `E37` | `evidence_3a962d61b382c325` | `org_service_pages_california_supportive_housing` | Organization service page | https://www.cshousing.org/ | 2026-04-29 | `3fe3ca3e6d9a79050ecae5e02024b518dfef0a323f842009a4ce3b094d2b3bb1` |
| `E38` | `evidence_9c14d587a64d78d0` | `public_statements_dignitymoves` | Public statement source | https://dignitymoves.org/ | 2026-04-29 | `2a942e98c10c575a3f6c098868818fcaefa7a7f2e3aa4e3b2f1f0b6e598d1275` |
| `E39` | `evidence_d374147638de4534` | `public_statements_lutheran_social_services_socal` | Public statement source | https://www.lsssc.org/articles/get-out-there-n9t2h-wk9tc-mfxze | 2026-04-29 | `da1e58ec13ea693342d790721dc344759bf27ae93f33c6a19d4e7c79b4302971` |
| `E40` | `evidence_0160b19cb7ca12a2` | `public_statements_california_supportive_housing` | Public statement source | https://www.cshousing.org/ | 2026-04-29 | `52b324ce5e2e670a1c64f844139b93a0767a3a365b64b8f7fe5cd4031b6c58fe` |
| `E41` | `evidence_8caaa10f30fb98c7` | `public_statements_hope_the_mission` | Public statement source | https://hopethemission.org/ | 2026-04-29 | `d8a6f8dead43a4d380e4023d8d8f1cef3fda1c99b7482bb2d3330e6b60ae0948` |
| `E42` | `evidence_526d288dfe58028f` | `org_service_pages_hope_the_mission` | Organization service page | https://hopethemission.org/our-programs/ | 2026-04-29 | `97627e3a39df79a4ac8d7722e756ce882c9531e94cdf55f2566ddde1a3406a41` |
| `E43` | `evidence_b51d9b36ed16b264` | `state_homeless_awards_dignitymoves` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2025-07-15 | `8323304285a3a93f2dcaec057385d211b942ec939e5dbde8fab444b8efca7662` |
| `E44` | `evidence_ff713a8964d9dc78` | `state_homeless_awards_self_help_enterprises` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-11-13 | `fdc710b4478327304e3550394ec05b9dd9a80d91ade37287ece59e2ac29312b0` |
| `E45` | `evidence_2292027178590488` | `org_service_pages_community_revitalization_development` | Organization service page | https://crdc.org/ | 2026-04-29 | `e4fc8903334552db034a07c14914704752c4dda9dbbfe73fa72d1dd9043210ca` |
| `E46` | `evidence_fbeac7721ad9b6dd` | `state_homeless_awards_community_revitalization_development` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf | 2025-10-13 | `d87941b1eaa28768e8e7c2fa67a2e7bf27e00e7ade1528fd3f116fc3ca122643` |
| `E47` | `evidence_87e6b98bab1e1c6a` | `state_homeless_awards_lutheran_social_services_socal` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2023-12-19 | `accc0fad2f5fbbb0ba6f4374fad5cdc99d70d67c9a19dd42162681abdb2cb300` |
| `E48` | `evidence_fd190914a214839d` | `public_statements_community_revitalization_development` | Public statement source | https://crdc.org/ | 2026-04-29 | `6d8e7b494429bb05d3bfe93d603d7fac365700c089bbdd503202cb779ce6963e` |
| `E49` | `evidence_666cf8667742c815` | `state_homeless_awards_california_supportive_housing` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/hk-plus-awardee-list.pdf https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2025-12-16 | `70a7b707f384c0dc41b2af73fe8fd8ea81ccbc096f59acc5c1828977fbd233b4` |
| `E50` | `evidence_d38585b558543270` | `state_homeless_awards_hope_the_mission` | California Department of Housing and Community Development homelessness award record | https://www.hcd.ca.gov/sites/default/files/docs/grants-and-funding/homekey/homekey-round-3-awardee-list.pdf | 2024-02-06 | `d7a3bc3d3d226842c55b5b799583a869e38ebc47dd0b95c96e6614ba91a9f7e2` |

### Source Coverage Snapshot

| Source class | Count |
| --- | --- |
| Organization service page | 15 |
| Public statement source | 15 |
| California Department of Housing and Community Development homelessness award record | 15 |
| Official enforcement or docket source | 1 |
| Parsed enforcement and docket source table | 1 |
| Parsed official outcome source table | 1 |
| Parsed spend-versus-results join | 1 |
| Parsed California state homelessness award table | 1 |

## 8. Human-Only Next Steps

These actions are outside the current CalDS runtime. They require a human reviewer or authorized records process before any escalation beyond internal review.

1. Open the review packet and verify each priority row against the cited evidence ledger before changing case status.
2. Resolve sentinel caution: Use exact legal status and named-party scope from official sources; do not convert third-party charges into entity-level conclusions.
3. Resolve sentinel caution: Preserve missing-data caveats in the review packet.
4. Request county contract files, monitoring letters, corrective-action status, deliverables, and provider-level outcome records for the same year window.
5. Benchmark officer and key employee compensation against comparable organizations and verify documented approval procedures.
6. Compare harvested public statements and web pages to grant scopes, contract restrictions, and accounting records; treat statements as context only.

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
