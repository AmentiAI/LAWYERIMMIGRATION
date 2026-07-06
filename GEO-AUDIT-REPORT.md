# GEO Audit Report: Law Office of Jacquelyn R. Goncalves

**Audit Date:** 2026-07-06
**URL:** https://www.jacqlaw.com
**Business Type:** Local Business — Solo Immigration Law Firm (YMYL)
**Pages Analyzed:** 8 live pages fetched + full source review of all 34 sitemap routes (+ 10 undeployed `/local/*` pages)
**Prior audit:** 2026-06-20 (59/100) — see deltas noted below

---

## Executive Summary

**Overall GEO Score: 58/100 (Poor — bordering Fair)**

The site has genuinely strong technical bones — server-side rendered content, a clean site-wide `LegalService`/`WebSite`/`Attorney` JSON-LD graph, consistent NAP, unblocked AI crawlers, and content-rich topic pages (~1,400 words each) in an AI-friendly Q&A format. What holds the score down is **near-invisibility to AI as a recognized entity** (off-site presence is directory listings only, and search engines aren't confident she even practices immigration law), **thin E-E-A-T credentials** on a Your-Money-Your-Life legal site, and **wasted structured-data opportunities** — the topic pages already contain structured FAQ data that is never emitted as `FAQPage` schema. Two regressions since the 2026-06-20 audit lowered Technical GEO: `/contact` + `/consultation` are canonicalizing to the homepage (now fixed in the working tree), and the 10 `/local/*` pages 404 in production.

### Score Breakdown

| Category | Score | Weight | Weighted Score | vs. 06-20 |
|---|---|---|---|---|
| AI Citability | 72/100 | 25% | 18.0 | +4 |
| Brand Authority | 40/100 | 20% | 8.0 | +2 |
| Content E-E-A-T | 55/100 | 20% | 11.0 | −3 |
| Technical GEO | 62/100 | 15% | 9.3 | −18 |
| Schema & Structured Data | 58/100 | 10% | 5.8 | −4 |
| Platform Optimization | 42/100 | 10% | 4.2 | −6 |
| **Overall GEO Score** | | | **56.3 → 58/100** | −1 |

> Technical GEO dropped mainly because this audit verified two live defects the prior audit did not catch: the homepage-canonical duplication on `/contact` + `/consultation`, and the `/local/*` 404s (the deployed sitemap has only 34 URLs, none of them `/local/*`).

---

## Critical Issues (Fix Immediately)

None at the "site is invisible" level — AI crawlers are allowed, content is server-rendered and indexable, and core schema is present. The problems below are High/Medium optimization gaps.

---

## High Priority Issues (Fix Within 1 Week)

1. **No `FAQPage` schema on the immigration topic pages** — `/immigration/i-130`, `/n-400`, `/i-485`, etc. render visible FAQ sections ("Family Petition Questions") and the data already exists in structured form (`faq?: { q: string; a: string }[]` in `src/lib/keyword-pages.ts:224`). Only `/faq` emits `FAQPage` markup. These topic pages are the most citable content on the site for Google AI Overviews / ChatGPT / Perplexity, and the markup is being left on the table.

2. **`/contact` and `/consultation` were canonicalizing to the homepage** (live). Both were `"use client"` pages that inherited the homepage's title + `canonical`, so Google treated them as duplicates of the homepage. **Already fixed in the working tree** (split into server `page.tsx` + client content with unique metadata) — commit and deploy.

3. **10 `/local/*` location pages return HTTP 404 in production** (e.g. `/local/immigration-lawyer-mystic-ct`). They exist in source and in `sitemap.ts`, but the deployed sitemap has only 34 URLs and no `/local/*` routes. A whole tier of well-differentiated, location-targeted pages is built but unshipped — deploy them.

4. **No `llms.txt` file** — `https://www.jacqlaw.com/llms.txt` returns 404. This is the emerging standard for telling AI systems what the site is and which pages to prioritize.

5. **Weak entity recognition** — a web search for the attorney surfaces only lawyer directories (Justia, LawInfo, Super Lawyers), and the search engine's own summary said those entries "focus on other legal matters rather than immigration law specifically." AI systems are not confident who she is or what she does — the core reason the firm won't be *named/recommended* in AI answers.

---

## Medium Priority Issues (Fix Within 1 Month)

1. **No `Service` schema on the 12 `/services/*` pages** — only the global org graph is present. Each service page should emit a `Service` entity linked to the `LegalService` provider.
2. **No `BreadcrumbList` schema** anywhere, despite breadcrumb UI on service and topic pages.
3. **Thin credential signals on YMYL content** — the About page mentions "experience," "founded," and languages, but no bar admission, law school, J.D., or year admitted were found. Legal content is held to Google's highest E-E-A-T bar.
4. **No author attribution or published/updated dates** on the topic pages — AI systems weight named expertise and freshness.
5. **Google Business Profile not confirmed / not strongly surfaced** — the #1 local + AI-Overview trust signal for a local firm.

---

## Low Priority Issues (Optimize When Possible)

1. Add an explicit self-canonical to the homepage (currently correctly inherited from the layout; explicit is more robust).
2. Three Mystic synonym pages (`immigration-lawyer-` / `-attorney-` / `-law-firm-mystic-ct`) target near-identical intent; content is differentiated today, but monitor Search Console for clustering and consolidate if Google collapses them to one canonical.
3. Add `sameAs` links (Justia, Super Lawyers, LinkedIn, Google Business Profile) to the `Attorney`/`LegalService` schema to reinforce the entity graph.
4. Add `speakable` schema to key Q&A blocks for voice/AI-assistant surfacing.

---

## Category Deep Dives

### AI Citability (72/100)
**Strong.** Topic pages are server-rendered (~1,403 words in raw HTML on `/immigration/i-130`), use clear H2/H3 hierarchy, and present information in extractable Q&A and "X vs. Y" formats ("Immediate Relatives vs. Preference Categories," "Common Reasons USCIS Issues RFEs") — exactly the passage structure AI systems quote. **Improve:** add a 2–3 sentence direct-answer summary at the top of each topic page (definition-style: "Form I-130 is…"), and convert dense paragraphs into more list/table blocks.

### Brand Authority (40/100)
**Weak.** Off-site presence is limited to legal directories (Justia, LawInfo, Lawyers.com, Super Lawyers). No Wikipedia, notable press, or Reddit/YouTube footprint, and no strongly surfaced Google Business Profile. NAP is consistent (12 Roosevelt Ave Ste 9B, Mystic CT 06355 · (860) 471-3023), which helps. This is the biggest lever on whether AI *names and recommends* the firm.

### Content E-E-A-T (55/100)
**Mixed — the weak link for a YMYL legal site.** Experience/trust signals exist (personal attorney service, bilingual EN/ES/PT, disclaimer present). Missing: explicit **credentials** (bar admission state + year, law school, J.D.), an authoritative bylined bio with a photo, client outcomes/testimonials with schema, and dates on content.

### Technical GEO (62/100)
`robots.txt` correctly allows all crawlers (`User-agent: * / Allow: /`), blocking only `/admin/` and `/api/`; content is SSR; canonicals on service/topic pages are correct and self-referential. **Deductions:** missing `llms.txt`, `/local/*` 404 in production, and the (now fixed-locally) contact/consultation homepage-canonical duplication still live until deployed.

### Schema & Structured Data (58/100)
Solid global graph on every page: `LegalService` (address, hours, `areaServed`, `knowsLanguage`), `WebSite`, `Attorney`. `/faq` correctly emits `FAQPage` (11 Q&A). **Gaps:** no `FAQPage` on topic pages (data already exists), no `Service` schema on service pages, no `BreadcrumbList`, no per-page `sameAs`.

### Platform Optimization (42/100)
Indexed in the legal directories AI models lean on for local-lawyer queries (Justia, Super Lawyers) — a foundation. Absent from Wikipedia, YouTube, Reddit; GBP signal unconfirmed. AI Overviews readiness will jump once `FAQPage` schema ships on the topic pages.

---

## Quick Wins (Implement This Week)

1. **Emit `FAQPage` schema on every topic page that has `faq` data** — the array already exists in `keyword-pages.ts`; map it into JSON-LD in `src/app/immigration/[slug]/page.tsx`. ~1 hour, biggest AI-visibility return.
2. **Deploy the contact/consultation canonical fix + the 10 `/local/*` pages** — commit the working-tree changes and confirm all `/local/*` URLs return 200 and appear in the live sitemap.
3. **Add `llms.txt`** at the site root (run the `geo-llmstxt` skill to generate it).
4. **Add `Service` + `BreadcrumbList` schema** to the 12 service pages.
5. **Strengthen the About page** with bar admission (state + year), law school/J.D., headshot, and bylined bio — then link it via `sameAs` in the `Attorney` schema.

## 30-Day Action Plan

### Week 1: Structured Data & Deployment
- [x] Add `FAQPage` schema to all `/immigration/*` topic pages — done via `FaqBlock` in `src/components/keywords/shared.tsx` (auto-emits on all 16 topic pages); pending deploy
- [ ] Commit + deploy the contact/consultation metadata fix
- [ ] Deploy the 10 `/local/*` pages; verify 200s and sitemap inclusion
- [x] Generate and publish `llms.txt` — done at `public/llms.txt`; pending deploy

### Week 2: E-E-A-T & On-Page Trust
- [ ] Rewrite About page with full credentials, headshot, and byline
- [ ] Add `sameAs` (Justia, Super Lawyers, LinkedIn, GBP) to `Attorney`/`LegalService` schema
- [ ] Add direct-answer summary blocks to the top of each topic page
- [ ] Add `Service` + `BreadcrumbList` schema to service pages

### Week 3: Local & Platform Presence
- [ ] Claim/optimize Google Business Profile (categories, hours, services, photos, posts)
- [ ] Complete/optimize Justia, Super Lawyers, Avvo, LinkedIn with consistent NAP
- [ ] Request reviews; add `Review`/`AggregateRating` schema once collected

### Week 4: Content Authority & Indexing
- [ ] Publish 2–3 in-depth, dated, bylined guides (e.g., "I-130 timeline 2026," "Marriage green card evidence checklist")
- [ ] Resubmit sitemap in Search Console; Request Indexing on key pages
- [ ] Verify `NEXT_PUBLIC_SITE_URL` matches production domain exactly (prevents canonical drift)
- [ ] Re-run this audit and compare deltas

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| / | Law Office of Jacquelyn R. Goncalves | Meta desc + full org JSON-LD present; homepage canonical inherited (OK) |
| /robots.txt | — | Correct; allows AI crawlers, blocks /admin /api |
| /sitemap.xml | — | 34 URLs; **missing all /local/* routes** |
| /llms.txt | — | **404 — missing** |
| /about | About | E-E-A-T: no bar/J.D./credentials found |
| /faq | FAQ | `FAQPage` schema present (11 Q&A) — good |
| /services/family-based-petitions | Family Based Petitions | Correct canonical; **no `Service` schema** |
| /immigration/i-130 | I-130 topic | ~1,403 words SSR, visible FAQ, **no `FAQPage` schema** |
| /local/immigration-lawyer-mystic-ct | — | **404 — page not deployed** |

_Scoring reflects the live production site as of the audit date; the contact/consultation canonical fix exists in the working tree but is not yet deployed._
