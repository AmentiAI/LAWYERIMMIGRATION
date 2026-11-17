# GEO Audit Report: Law Office of Jacquelyn R. Goncalves

**Audit Date:** 2026-10-02
**URL:** https://www.jacqlaw.com
**Business Type:** Local Business (solo immigration law firm, YMYL)
**Pages Analyzed:** 50 HTML pages crawled from the sitemap (65 URLs in total, including 9 llms text files), plus robots.txt, llms.txt, response headers and a review of the source code
**Prior audits:** 2026-06-20 (59) · 2026-07-06 (58) · 2026-07-13 (59)

---

## Executive Summary

**Overall GEO Score: 43/100 (Poor)**

**What works:** the technical foundation is strong.
- Pages are fully server-rendered.
- All AI crawlers are allowed.
- llms.txt is clean.
- Canonicals are self-referencing, every page has one H1, and FAQPage schema is on 33 pages.
- The hidden footer-link problem from the July audit is **fixed on the live site**, and the 12 keyword pages are now deployed.

**What drags the score down:**
1. **Several legal statements are out of date.** These are YMYL errors (pages whose mistakes can harm readers). The worst one could lead a reader to work without authorization.
2. **The firm barely exists as an entity off-site.** There is no `sameAs`, no Google Business Profile or reviews that we could confirm, and the Justia listing describes non-immigration practice areas.
3. **There are 22 overlapping `/local/` keyword pages.** Search engines can treat these as doorway pages.

> **Why the score dropped from 59.** The site did not get worse. Most of the drop comes from stricter scoring in this audit.
> - Brand Authority was checked against live search results. Name searches return other people named "Jacquelyn Goncalves" and a non-immigration Justia listing.
> - E-E-A-T now penalizes legal facts we confirmed are outdated.
> - Schema now penalizes the `Attorney` type being used for a person and the duplicate entities on `/local/` pages.
>
> Read the July scores as optimistic, and treat this audit as the new baseline.

### Score Breakdown

| Category | Score | Weight | Weighted Score | vs. 07-13 |
|---|---|---|---|---|
| AI Citability | 56/100 | 25% | 14.0 | −22 |
| Brand Authority | 10/100 | 20% | 2.0 | −30 |
| Content E-E-A-T | 31/100 | 20% | 6.2 | −24 |
| Technical GEO | 88/100 | 15% | 13.2 | +30 |
| Schema & Structured Data | 31/100 | 10% | 3.1 | −39 |
| Platform Optimization | 49/100 | 10% | 4.9 | +3 |
| **Overall GEO Score** | | | **43.4 → 43/100** | −16 |

---

## Critical Issues (Fix Immediately)

### 1. Outdated, harmful EAD auto-extension guidance (verified)

These pages tell readers that an expired EAD plus the I-797C receipt lets them keep working for up to 180 days:
- `/services/work-permit-renewal`
- `/immigration/i-765`

A DHS interim final rule published **October 30, 2025** ended automatic EAD extensions for most renewals filed on or after that date. There are narrow exceptions, such as TPS-related EADs and STEM OPT.

A reader who follows this text could work without authorization. Rewrite the passages at:
- `src/components/services/pages/WorkPermitRenewalService.tsx:62-69` and `:176`
- `src/components/keywords/topics/I765Topic.tsx:51-52` and `:118-140`
- `src/lib/keyword-pages.ts:431`

Source: [USCIS: Interim Final Rule ending automatic EAD extensions](https://www.uscis.gov/i-9-central/form-i-9-related-news/interim-final-rule-published-to-end-the-practice-of-automatically-extending-certain-employment)

### 2. Wrong I-751 extension period

`/services/removal-of-conditions` says the receipt notice extends status for **24 months**. USCIS has issued **48-month** extensions since January 2023.

Fix the text at `src/components/services/pages/RemovalOfConditionsService.tsx:40`, `:114` and `:147`.

### 3. The firm has no linked identity off the site

- The schema has no `sameAs`, `logo` or `geo`.
- We could not confirm a Google Business Profile or any reviews.
- The Justia listing (Mystic and New London) has the correct address and phone, but its practice-area description doesn't mention immigration. Search summaries describe it as civil litigation or bankruptcy.
- The top LinkedIn result for "Jacquelyn Goncalves" is a legal assistant at another firm.

With nothing linking these profiles to this firm, AI engines can't confirm who the firm is, and they may misdescribe it.

### 4. Doorway-page risk on `/local/`

`src/lib/location-pages.ts` defines 22 keyword-variant pages. Groups of them target the same search:
- lawyer, attorney and law-firm versions for Mystic
- lawyer and attorney versions for Connecticut
- `immigration-office`, `immigration-law-office` and `immigration-law-firm`
- `immigration-attorney`, `immigration-law`, `us-immigration`, `immigration-services` and `immigration-legal-services`

Other problems with these pages:
- The Bridgeport and Hartford pages target cities where the firm has no office.
- `/local/deportation-defense-lawyer-connecticut` promotes a practice area that `/services` doesn't offer.
- All of them are linked from the footer as a keyword block.

The text on each page is unique: 5-word shingle overlap is at most 0.03. The risk comes from the pattern of near-identical intent, not from copied text.

---

## High Priority Issues

1. **Outdated civics test (verified).** `/immigration/n-400` (`N400Topic.tsx:78-79`) says the test has 100 questions, asks up to 10 and requires 6 correct. For N-400s filed on or after **October 20, 2025**, the bank is **128 questions, 20 are asked and 12 correct pass** ([Federal Register](https://www.federalregister.gov/documents/2025/09/18/2025-18050/notice-of-implementation-of-2025-naturalization-civics-test)). Also check the citizenship service page.
2. **Outdated I-90 extension (verified).** `/immigration/i-90` (`I90Topic.tsx:181`) gives a 24-month extension. Since **September 10, 2024**, the I-90 receipt extends green card validity by **36 months** ([USCIS](https://uscis.gov/newsroom/alerts/uscis-extends-green-card-validity-extension-to-36-months-for-green-card-renewals)).
3. **No bylines, review dates or `dateModified`** on any `/services/*` or `/immigration/*` page. For time-sensitive legal content, that means no freshness credit.
4. **The `/about` page is missing basic credentials.** It doesn't list law school, J.D. year, bar admissions, years in practice or memberships (AILA, CT Bar). It also has no links to LinkedIn, Avvo or the state bar lookup.
5. **No links to primary sources.** The pages have no outbound links to uscis.gov, the Visa Bulletin, the eCFR or the INA. The Visa Bulletin is mentioned more than 10 times but never linked.
6. **The `Attorney` schema type is used for the person.** In schema.org, `Attorney` is a business subtype, so the attorney appears as a second business. Change it to `Person` with `@id #attorney` (`src/lib/structured-data.ts`).
7. **Each `/local/` page emits its own Attorney entity without an `@id`** (`src/app/local/[slug]/page.tsx`). That creates 12 or more unlinked copies of the firm. Replace each with a `WebPage` whose `about` points to `#legalservice`.
8. **No Bing signals.** There is no `msvalidate.01` meta tag and no IndexNow key. ChatGPT search and Copilot both depend on Bing's index.
9. **Missing security headers.** There is no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy or Permissions-Policy. Add them through `headers()` in `next.config.ts`.
10. **The admin login is weak.** It compares the password with a plain `===` (`src/lib/auth.ts:49`) instead of a constant-time comparison, and `/api/admin/login` has no rate limit.
11. **The hero image is an unoptimized PNG.** `/images/mystic-hero.png` (117 KB) has `unoptimized` set at `src/app/page.tsx:55`. The same flag is in `LegalImage.tsx:30,43` and on the about, fiancé and spouse pages.

---

## Medium Priority Issues

1. **Thin pages:**
   - `/services/vawa`: 119 words; it doesn't mention the I-360 or eligibility.
   - `/services/b1-b2-renewal`: 148 words.
   - `/services/e2-investment-visa`: 162 words.
   - `/contact`: 157 words.
   - `/local/immigration-office`: 249 words.
   - `/local/immigration-services`: 276 words.
2. **Evasive answers about timelines.** The `/faq` and `/services/adjustment-of-status` FAQs say "processing times vary" and give no numbers.
3. **Inconsistent timelines between pages:**
   - I-129F is "8–14 months" on `/services/fiance-petitions` but "6–10 months" on `/immigration/fiance-visa`.
   - Consular processing is "12–24" in one place and "8–18 months" in another on the same page.
4. **No question-format H2 headings.** Questions appear only inside FAQ `<summary>` elements. Most content blocks run 20–60 words, short of the self-contained 134–167-word range that AI engines quote best.
5. **The testimonials are weak.** There are only two. Both are signed with initials only and come from Florida clients. Neither links to a review platform, and there is no disclaimer about prior results.
6. **The sitemap gives no real freshness signal.** Every `lastmod` is the build time. It also lists the 9 llms text and Markdown URLs, which should be removed from the sitemap.
7. **No BreadcrumbList, Service or WebPage schema.** A `breadcrumbJsonLd()` helper already exists at `structured-data.ts:99` but nothing calls it.
8. **No Reddit, YouTube or Wikidata presence.**

## Low Priority Issues

1. **Garbled answer to "What services do you offer?"** on `/` and `/faq` (`src/lib/constants.ts:113`). It lists "finance department documentation… and consultation fees" as services.
2. **Possible phone typo.** `phoneAlt` is (860) 471-**3032** and the main number is 471-**3023** (`constants.ts:12`). The alternate number is shown on the homepage and in llms.txt. If it's a typo, remove it. If it's a real line, label it.
3. **The email domain (`jacquelynrgoncalveslaw.com`) doesn't match the site domain (`jacqlaw.com`).**
4. **robots.txt nits.** It has a non-standard `Host:` line. `Disallow: /admin/` misses `/admin` itself. The `Allow: /llms*` lines are redundant.
5. **Two-hop redirects:** `http://jacqlaw.com` → `https://jacqlaw.com` → `www`, and `/attorney/` → `/attorney` → `/about`.
6. **The 404 page has two robots meta tags.**
7. **The `/n-400` page simplifies the 6-month absence rule.** The service page correctly calls it a *rebuttable presumption*.

---

## Category Deep Dives

### AI Citability (56/100)

| Page | Score | Note |
|---|---|---|
| /services/removal-of-conditions | 74 | Specific deadlines, evidence list, opens with the answer. The 24-month fact is stale |
| /immigration/n-400 | 68 | Eligibility numbers are clear. The civics test description is stale |
| /services/adjustment-of-status | 63 | Good eligibility blocks; vague FAQs |
| /immigration/i-130 | 60 | Clear definitions, but thin |
| /faq | 55 | Fees can be quoted; timeline answers are evasive |
| / | 48 | Mostly marketing copy |
| /local/immigration-lawyer-mystic-ct | 45 | Local but generic |
| /local/immigration-lawyer-hartford-ct | 30 | No facts |

**Strong passages** (AI engines can quote these as written):
- *"Form I-751 must be filed during the 90-day period immediately before your conditional card expires…"*
- *"Spouses, unmarried children under 21, and parents of U.S. citizens are immediate relatives. Visas are always available — there is no waiting line."*
- *"A 30-minute General Overview Snapshot consultation is $99. A one-hour case-planning consultation is $350…"* This pricing fact is unique to the firm.

**Rewrite example.** In `/faq`, "Some cases may take several months, while others can take longer" could become:

> "Typical USCIS timelines as of [date]: I-130 for a spouse of a U.S. citizen, about X–Y months; N-400, about X–Y months; I-751, X–Y months (status extended 48 months by the receipt notice). Check uscis.gov/processing-times for your field office."

Fill in current figures from USCIS processing times, and put a date on them.

### Brand Authority (10/100)

| Platform | Status |
|---|---|
| Wikipedia / Wikidata | Absent |
| Reddit | Absent |
| YouTube | Absent |
| LinkedIn | No company page. The personal profile isn't linked to the firm, and the top search result is a different person |
| Justia | Listing exists with correct address and phone; practice areas don't mention immigration |
| Avvo, Martindale, Super Lawyers, Google Business Profile / reviews | Couldn't confirm |

Live query tests:
- **"immigration lawyer Mystic CT":** jacqlaw.com appears at about #6. The AI summary lists the firm.
- **"green card lawyer Connecticut", "best immigration attorney southeastern Connecticut" and "immigration lawyer New London CT":** jacqlaw.com doesn't appear. Avvo, Justia, Super Lawyers, CTPost lists and competitors win these.

### Content E-E-A-T (31/100)

| Dimension | Score | Evidence |
|---|---|---|
| Experience | 7/25 | Two testimonials signed with initials; no case outcomes or volume |
| Expertise | 8/25 | INA and CFR are cited in the text, but no bar admission or J.D. is shown and pages have no bylines |
| Authoritativeness | 6/25 | No memberships, media mentions or awards; a thin /about page |
| Trustworthiness | 10/25 | HTTPS, full address and phone, and a disclaimer, but outdated legal facts, no dates and no links to primary sources |

### Technical GEO (88/100)

**Verified working:**
- Pages are prerendered on the server; the raw HTML holds about 1,190 words with headings.
- Redirects go to www with 308s.
- The 404 page returns a real 404 status.
- The homepage is 12.9 KB compressed.
- One render-blocking stylesheet, self-hosted fonts with `swap`, and GA loads `afterInteractive`.
- The admin area is `noindex`, and the API returns 401 without a login.

**Gaps:** security headers, the unoptimized hero image, `lastmod` values in the sitemap, and the robots.txt nits listed above.

PageSpeed Insights couldn't be measured because the API returned 429 (quota). Re-run it at pagespeed.web.dev.

### Schema & Structured Data (31/100)

**Present:**
- A site-wide `@graph` with LegalService, WebSite and Attorney, all with consistent `@id` values.
- FAQPage on 33 pages. Every question and answer matches the visible text exactly.
- All of it is JSON-LD that parses cleanly.

**Missing or wrong:**
- No `sameAs`, `logo`, `geo` or `hasMap`.
- `Attorney` is used where `Person` belongs.
- Duplicate entities on the `/local/` pages.
- No BreadcrumbList, Service, WebPage, Article or `dateModified`.
- The phone number isn't in E.164 format.

A ready-to-use snippet:

```ts
// src/lib/structured-data.ts — replace Attorney node
{
  "@type": "Person",
  "@id": `${url}/#attorney`,
  name: "Jacquelyn R. Goncalves",
  jobTitle: "Immigration Attorney",
  url: `${url}/about`,
  worksFor: { "@id": `${url}/#legalservice` },
  knowsLanguage: ["English", "Spanish", "Portuguese"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "[law school]" },
  hasCredential: { "@type": "EducationalOccupationalCredential", credentialCategory: "Bar admission",
    recognizedBy: { "@type": "Organization", name: "[e.g. Connecticut Judicial Branch]" } },
  sameAs: ["[LinkedIn]", "[Avvo]", "[state bar lookup]"]
}
// LegalService: add telephone "+1-860-471-3023", logo, geo, hasMap, sameAs[], founder/employee → #attorney
```

### Platform Optimization (49/100)

| Platform | Score | Biggest gap |
|---|---|---|
| Google AI Overviews | 66 | Authority and author signals |
| ChatGPT Search | 55 | Entity recognition (no `sameAs`, Bing index) |
| Bing Copilot | 45 | No Bing Webmaster verification, no IndexNow |
| Perplexity | 43 | No community presence; no freshness dates |
| Gemini | 38 | No YouTube, no Knowledge Graph entity, Google Business Profile unconfirmed |

---

## Quick Wins (Implement This Week)

1. **Correct the four outdated legal statements:** EAD auto-extension, I-751 at 48 months, the 2025 civics test and I-90 at 36 months. Add a visible "Last reviewed [date] by Jacquelyn R. Goncalves, Esq." line. This removes the YMYL risk and starts earning freshness credit.
2. **Claim and fix the off-site profiles:** Google Business Profile, Justia (change the practice areas to immigration), Avvo, LinkedIn (update the personal profile and add a company page). Then add the URLs to `sameAs` and change `Attorney` to `Person`. This is the biggest lever for Brand Authority and entity recognition.
3. **Verify the site in Bing Webmaster Tools** (`metadata.verification.other` in `layout.tsx`), submit the sitemap and add an IndexNow key. This feeds ChatGPT search and Copilot.
4. **Add the five security headers** in `next.config.ts`, and remove `unoptimized` from the hero image and from `LegalImage`.
5. **Fix the garbled services answer** (`constants.ts:113`) and settle the 3032 vs. 3023 phone number.

## 30-Day Action Plan

### Week 1: Accuracy and identity
- [ ] Rewrite the EAD, I-751, civics test and I-90 passages, citing USCIS sources
- [ ] Add a "Last reviewed" line and `dateModified` to every /services and /immigration page
- [ ] Claim and complete Google Business Profile, Justia, Avvo and LinkedIn with identical address and phone
- [ ] Change `Attorney` to `Person` and add `sameAs`, `logo` and `geo` to LegalService

### Week 2: Consolidate /local/
- [ ] Cut the 22 pages to about 6 distinct pages (Mystic, New London, Groton/Norwich, CT statewide, green card, citizenship)
- [ ] Add 301 redirects from the synonym slugs in `next.config.ts`
- [ ] Remove the footer keyword block; drop or substantiate the deportation-defense, Bridgeport and Hartford pages
- [ ] Replace each local page's Attorney schema with a WebPage plus BreadcrumbList

### Week 3: Expertise and depth
- [ ] Rebuild /about to 800+ words: law school, bar admissions, years in practice, memberships, Navy details
- [ ] Expand VAWA, E-2 and B-1/B-2 to 600+ words each, with eligibility, evidence and FAQs
- [ ] Add outbound links to USCIS form pages, the Visa Bulletin and the eCFR; publish a dated USCIS fee table
- [ ] Standardize all timelines to one dated source; replace the "processing times vary" answers

### Week 4: Structure and ecosystem
- [ ] Add Service, WebPage and BreadcrumbList schema to the /services and /immigration pages
- [ ] Turn key H2s into questions; restructure the top pages into 134–167-word answer blocks
- [ ] Bing Webmaster Tools and IndexNow; real `lastmod` dates; remove the llms URLs from the sitemap
- [ ] Start a Google review campaign; record 3 YouTube explainers (I-130, I-751 after divorce, N-400 with a criminal record)
- [ ] Admin login: `timingSafeEqual` plus rate limiting

---

## Appendix: Pages Analyzed

All 50 crawled pages returned **200**. Every one had a self-referencing canonical, `index, follow`, Open Graph and Twitter tags, exactly one H1, and no images missing alt text. Most also carry the site-wide LegalService, WebSite and Attorney schema. That leaves the issue counts below to reflect page-specific problems.

| URL | Words | Schema extras | GEO Issues |
|---|---|---|---|
| / | 926 | — | 3 (garbled services answer, alternate phone, marketing-heavy) |
| /about | 463 | — | 3 (no bar or J.D., no `sameAs` links, thin) |
| /services | 282 | — | 1 (thin directory) |
| /consultation | 247 | — | 0 |
| /contact | 157 | — | 1 (thin) |
| /faq | 1135 | FAQPage | 2 (vague timelines, garbled answer) |
| /immigration | 412 | — | 1 (no breadcrumb) |
| /services/family-based-petitions | 593 | — | 2 (no Service schema, no date) |
| /services/adjustment-of-status | 654 | — | 3 (vague FAQ, no Service schema, no date) |
| /services/consular-processing | 781 | — | 3 (inconsistent timelines, no Service schema, no date) |
| /services/removal-of-conditions | 800 | — | 3 (**24-month error**, no Service schema, no date) |
| /services/citizenship-naturalization | 954 | — | 3 (check civics test, no Service schema, no date) |
| /services/fiance-petitions | 815 | — | 3 (timeline conflict, no Service schema, no date) |
| /services/work-permit-renewal | 823 | — | 3 (**EAD auto-extension error**, no Service schema, no date) |
| /services/green-card-renewal | 333 | — | 2 (thin, no Service schema) |
| /services/vawa | 119 | — | 2 (very thin, no Service schema) |
| /services/daca-renewal | 352 | — | 2 (thin, no Service schema) |
| /services/e2-investment-visa | 162 | — | 2 (very thin, no Service schema) |
| /services/b1-b2-renewal | 148 | — | 2 (very thin, no Service schema) |
| /immigration/marriage-petitions | 937 | FAQPage | 2 (no byline or date, no source links) |
| /immigration/green-card-petitions | 688 | FAQPage | 2 |
| /immigration/fiance-visa | 693 | FAQPage | 3 (timeline conflict) |
| /immigration/i-130 | 430 | FAQPage | 3 (thin, Visa Bulletin not linked) |
| /immigration/n-400 | 490 | FAQPage | 4 (**civics test**, absence-rule simplification) |
| /immigration/i-485 | 421 | FAQPage | 3 (thin) |
| /immigration/i-864 | 556 | FAQPage | 2 |
| /immigration/i-765 | 491 | FAQPage | 3 (**EAD auto-extension error**) |
| /immigration/i-90 | 540 | FAQPage | 3 (**24 → 36-month error**) |
| /immigration/naturalization-criminal-history | 646 | FAQPage | 2 |
| /immigration/removal-of-conditions-divorce | 638 | FAQPage | 2 |
| /immigration/petition-for-spouse | 554 | FAQPage | 2 |
| /immigration/petition-for-children | 763 | FAQPage | 2 |
| /immigration/petition-for-parents | 634 | FAQPage | 2 |
| /immigration/petition-for-sibling | 651 | FAQPage | 2 |
| /local/immigration-lawyer-mystic-ct | 926 | FAQPage | 2 (duplicate Attorney entity, overlapping intent) |
| /local/immigration-attorney-mystic-ct | 764 | FAQPage | 3 (synonym of above; consolidate) |
| /local/immigration-law-firm-mystic-ct | 794 | FAQPage | 3 (synonym; consolidate) |
| /local/immigration-lawyer-connecticut | 777 | FAQPage | 2 |
| /local/immigration-attorney-connecticut | 807 | FAQPage | 3 (synonym; consolidate) |
| /local/immigration-lawyer-near-me | 795 | FAQPage | 2 |
| /local/green-card-lawyer-connecticut | 958 | FAQPage | 2 |
| /local/citizenship-lawyer-connecticut | 890 | FAQPage | 2 |
| /local/naturalization-attorney-connecticut | 873 | FAQPage | 3 (overlaps citizenship page) |
| /local/deportation-defense-lawyer-connecticut | 969 | FAQPage | 3 (practice area not on /services) |
| /local/immigration-attorney | 630 | FAQPage | 3 (generic synonym) |
| /local/immigration-law | 353 | — | 3 (thin, generic) |
| /local/us-immigration | 571 | FAQPage | 3 (generic, few facts) |
| /local/immigration-services | 276 | — | 3 (thin, generic) |
| /local/immigration-legal-services | 453 | FAQPage | 3 (generic synonym) |
| /local/immigration-office | 249 | — | 3 (thin, generic) |

**Not crawled** (beyond the 50-page cap): `/local/immigration-law-office`, `/local/immigration-law-firm`, `/local/immigration-attorney-consultation`, `/local/immigration-attorney-bridgeport-connecticut`, `/local/immigration-lawyer-hartford-ct` (the citability check sampled this one separately), `/local/green-card-renewal-lawyer`, and the 9 llms text files (validated separately).

**Fetch failures:** none. **Not measured:** PageSpeed Insights (API quota error 429).
