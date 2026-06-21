# GEO Audit Report: Law Office of Jacquelyn R. Goncalves

**Audit Date:** 2026-06-20
**URL:** https://www.jacqlaw.com
**Business Type:** Local Business + Legal Services (single-attorney immigration law firm, Mystic, CT)
**Pages Analyzed:** 34 (full sitemap: 7 core pages, 14 service pages, 13 immigration topic pages)

---

## Executive Summary

**Overall GEO Score: 59/100 (Poor — upper boundary, nearly Fair)**

The site has a **strong technical and schema foundation** — clean server-side-rendered Next.js, valid `LegalService` / `WebSite` / `Attorney` JSON-LD on every page, a complete sitemap, AI-crawler-friendly `robots.txt`, and well-written, directly-quotable content. The score is held down by two things AI engines weigh heavily: **thin content depth** (most topic pages run ~550 words with no dates, sources, or author attribution) and **near-zero off-site brand authority** (no `sameAs` social links, no aggregated reviews, no third-party citations, no Wikipedia/Reddit/YouTube presence). The single highest-leverage fix is adding **`FAQPage` schema to the 27 service/topic pages that already contain Q&A content** but currently emit none.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 68/100 | 25% | 17.0 |
| Brand Authority | 38/100 | 20% | 7.6 |
| Content E-E-A-T | 58/100 | 20% | 11.6 |
| Technical GEO | 80/100 | 15% | 12.0 |
| Schema & Structured Data | 62/100 | 10% | 6.2 |
| Platform Optimization | 48/100 | 10% | 4.8 |
| **Overall GEO Score** | | | **59/100** |

---

## Critical Issues (Fix Immediately)

*None.* No AI crawlers are blocked, content is server-rendered and indexable, key pages return 200, and structured data is present. This is a healthy baseline — the work ahead is optimization, not rescue.

---

## High Priority Issues (Fix Within 1 Week)

1. **FAQ content exists on 27 pages but `FAQPage` schema is emitted on only 1.**
   `faqPageJsonLd()` is wired into `/faq` only (`src/app/faq/page.tsx`). Every service page and immigration topic page (e.g. `/immigration/i-130` has a "Family Petition Questions" Q&A block) renders its FAQ as plain HTML with no structured data. FAQ schema is one of the most reliable ways to win AI Overview and ChatGPT citations for question-shaped queries.
   **Fix:** Generate per-page `FAQPage` JSON-LD from each topic/service page's existing Q&A data and inject `<JsonLd>` in `src/app/immigration/[slug]/page.tsx` and `src/app/services/[slug]/page.tsx`.

2. **No `llms.txt` file.** `https://www.jacqlaw.com/llms.txt` returns 404. This emerging standard gives AI systems a curated map of your most important pages and a plain-language description of the practice.
   **Fix:** Add an `src/app/llms.txt/route.ts` (or static `public/llms.txt`) listing the firm description, core pages, and the service/topic page index.

3. **No author/attorney attribution on content pages.** Topic and service pages contain substantive legal explanations but carry no byline, no "reviewed by Attorney Jacquelyn R. Goncalves," and no link to her bio. AI engines use authorship to assess E-E-A-T before citing legal content.
   **Fix:** Add a visible "Written/reviewed by Jacquelyn R. Goncalves, Immigration Attorney →" attribution block (linking `/about`) to the shared topic/service layout, and reflect it with `author`/`Person` schema.

4. **`Attorney` schema node is sparse and `sameAs` is absent everywhere.** The `Attorney` graph node in `src/lib/structured-data.ts` has only `name`, `worksFor`, `url`. There are no `sameAs` links (Google Business Profile, LinkedIn, Avvo, Justia, state bar profile) on either the Attorney or LegalService node — these are the primary signals AI uses for entity recognition.
   **Fix:** Enrich the `Attorney` node with `jobTitle`, `image`, `description`, `alumniOf`, `knowsAbout`, and `sameAs[]`; add `sameAs[]` to the `LegalService` node.

---

## Medium Priority Issues (Fix Within 1 Month)

5. **`breadcrumbJsonLd()` is defined but never called.** It exists in `src/lib/structured-data.ts:99` but no page uses it. Breadcrumb structured data helps AI engines understand site hierarchy and is shown in AI/SERP results. Wire it into the service and immigration topic pages.

6. **No review/rating signals.** Two testimonials exist in `constants.ts` (initials only), but there is no `AggregateRating` or `Review` schema, and no off-site review aggregation. AI engines lean heavily on review signals when recommending local service providers.

7. **`LegalService` schema missing `geo` coordinates and `hasMap`.** The `PostalAddress` is complete, but adding `GeoCoordinates` and a Google Maps link strengthens local entity grounding for "immigration lawyer near me" style AI answers.

8. **Content depth is thin.** Topic pages average ~550 words. AI engines preferentially cite comprehensive pages. Expand the highest-intent pages (I-130, N-400, I-485, marriage petitions, fiancé visa) to 900–1,500 words with more sub-questions, process timelines, and concrete eligibility criteria.

9. **No freshness signals.** No visible "Last updated" date and no `dateModified` in schema on any content page (the live "© 2026" reads as a placeholder). Immigration law changes frequently; dated content is more trusted and more cited by AI.

10. **No `Service` schema on service pages.** The 14 `/services/[slug]` pages describe distinct offerings but emit no `Service` structured data tied back to the `LegalService` provider.

---

## Low Priority Issues (Optimize When Possible)

11. **Homepage meta description not detected in rendered text** — verify `siteConfig.description` is actually emitted (it is configured in `layout.tsx`; confirm in production `<head>`).
12. **Single OG image sitewide** — per-page OG images for major service/topic pages would improve social/AI link previews.
13. **`robots.txt` could explicitly name AI crawlers.** Currently `User-agent: *  Allow: /`, which permits them — but explicitly allowing `GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`, and `Google-Extended` documents intent and future-proofs.
14. **Testimonials use initials only** ("CL", "AS") — full first name + last initial + verifiable source (Google review) would raise trust weight.
15. **No Speakable schema** on FAQ/answer content for voice-assistant surfacing.

---

## Category Deep Dives

### AI Citability (68/100)
**Strengths:** Content is genuinely well-built for extraction. Clear single H1 per page, logical H2/H3 hierarchy, and self-contained factual statements that read like direct answers — e.g. *"Spouses, unmarried children under 21, and parents of U.S. citizens are immediate relatives"* and *"An approved petition generally remains valid indefinitely as long as the petitioner remains eligible."* The FAQ answers in `constants.ts` are model-quality citable passages: complete, specific, and standalone.
**Gaps:** Pages are short, so there are fewer citable passages per page than competitors. No dates reduce perceived reliability. No statistics, no source citations to USCIS/government pages (linking authoritative sources both helps users and signals trustworthiness to AI).
**Quick rewrite pattern:** Lead each topic page with a 40–60 word bolded "direct answer" summary immediately under the H1 before the narrative — this is the passage AI engines extract most often.

### Brand Authority (38/100)
**Strengths:** Consistent NAP (name/address/phone) across the site and schema; clear single-attorney entity.
**Gaps:** A brand search surfaces only directory listings (Justia, Super Lawyers, LawInfo, Martindale) and a state bar legal notice — **no owned social profiles, no Google Business reviews, no Wikipedia, no Reddit/YouTube/LinkedIn footprint** linked from the site. With no `sameAs` links anywhere, AI systems have little to anchor the firm as a recognized entity.
**Actions:** Claim/optimize Google Business Profile, Avvo, Justia, and LinkedIn; add all of them to `sameAs[]`; begin collecting Google reviews; publish a few authoritative answers on Reddit (r/immigration) and a short YouTube intro — all of these are sources AI engines cite.

### Content E-E-A-T (58/100)
**Strengths:** The `/about` page conveys real experience — six years U.S. Navy service, MBA + JD, English degree, trilingual (English/Spanish/Portuguese), concierge direct-attorney model. Two detailed testimonials. Complete, trustworthy contact info and hours.
**Gaps:** No bar admission listed, no law school named, no years-in-practice, no author bylines on substantive legal pages, no outbound citations to USCIS, no content dates. For YMYL (legal) content, these are exactly the trust signals Google and AI engines look for.
**Actions:** Add bar admissions + admitting jurisdictions, law school, year admitted, and a per-page "reviewed by attorney" attribution; cite official USCIS sources on procedural claims.

### Technical GEO (80/100)
**Strengths:** Next.js App Router with server-side rendering (content is in the HTML, not JS-gated), valid `robots.txt` (allow-all, admin/api disallowed), `sitemap.xml` with all 34 pages, `metadataBase`, canonical URLs, complete Open Graph + Twitter Card tags, per-page `generateMetadata`, mobile viewport, HTTPS. No AI crawlers blocked.
**Gaps:** Missing `llms.txt`; no explicit AI-crawler allowlist; sitemap `lastmod` shows a single bulk date (2026-06-20), which can read as non-genuine freshness.
**This is the strongest category — the foundation is solid.**

### Schema & Structured Data (62/100)
**Strengths:** A clean `@graph` of `LegalService` + `WebSite` + `Attorney` is emitted site-wide via `layout.tsx`, with proper `@id` cross-references, `address`, `openingHoursSpecification`, `areaServed`, `knowsLanguage`, and `priceRange`. `FAQPage` schema is valid on `/faq`.
**Gaps:** FAQPage only on one page despite 27 pages with FAQ content (issue #1); `breadcrumbJsonLd` unused; no `sameAs`; sparse `Attorney` node; no `geo`, `AggregateRating`, `Review`, `Service`, or `Person` author schema; no `dateModified`.
**This is the highest-ROI category to improve — the helpers are mostly already written.**

### Platform Optimization (48/100)
- **Google AI Overviews:** Best-positioned surface — strong local schema + NAP. Will improve sharply once FAQ schema and reviews are added.
- **ChatGPT / OAI-SearchBot:** Crawlable, but thin authority/citations limit citation likelihood.
- **Perplexity:** Rewards source-cited, dated, comprehensive content — current pages are too thin and undated.
- **Gemini:** Tied to Google entity signals (GBP, reviews) that are currently absent off-site.
- **Bing Copilot:** Crawlable; would benefit from Bing Places listing in `sameAs`.

---

## Quick Wins (Implement This Week)

1. **Add `FAQPage` JSON-LD to all topic/service pages** that already render Q&A — reuse the existing `faqPageJsonLd()` pattern. *Highest single GEO gain available.*
2. **Publish `llms.txt`** at the site root listing the firm summary + page index.
3. **Add `sameAs[]`** (Google Business Profile, LinkedIn, Avvo, Justia, state bar) to the `LegalService` and `Attorney` nodes in `src/lib/structured-data.ts`.
4. **Wire up the existing `breadcrumbJsonLd()`** on service and immigration topic pages.
5. **Add an attorney attribution block** ("Reviewed by Jacquelyn R. Goncalves, Immigration Attorney →") linking `/about` on every content page.

## 30-Day Action Plan

### Week 1: Structured Data Sweep
- [ ] Emit per-page `FAQPage` schema on all 27 service/topic pages with Q&A
- [ ] Create and publish `llms.txt`
- [ ] Enrich `Attorney` node (`jobTitle`, `image`, `description`, `alumniOf`, `knowsAbout`) and add `sameAs[]` to both `Attorney` and `LegalService`
- [ ] Wire `breadcrumbJsonLd()` into service + topic page layouts

### Week 2: E-E-A-T & Trust Signals
- [ ] Add bar admissions, law school, year admitted, years-in-practice to `/about` + Attorney schema
- [ ] Add "reviewed by attorney" attribution block to shared content layout
- [ ] Add `GeoCoordinates` + `hasMap` to `LegalService`; embed a Google Map on `/contact`
- [ ] Add visible "Last updated" dates + `dateModified` schema to content pages

### Week 3: Off-Site Authority
- [ ] Claim/optimize Google Business Profile; request reviews from past clients
- [ ] Create/complete LinkedIn, Avvo, Justia profiles; link all in `sameAs[]`
- [ ] Add `AggregateRating`/`Review` schema once verifiable reviews exist
- [ ] Publish one helpful answer thread on r/immigration referencing expertise

### Week 4: Content Depth
- [ ] Expand top 5 highest-intent pages (I-130, N-400, I-485, marriage petitions, fiancé visa) to 900–1,500 words
- [ ] Add a bolded 40–60 word "direct answer" summary under each topic-page H1
- [ ] Add outbound citations to official USCIS pages on procedural claims
- [ ] Add `Service` schema to the 14 service pages
- [ ] Add per-page OG images for major pages

---

## Appendix: Pages Analyzed

| URL | Type | Key GEO Issues |
|---|---|---|
| `/` | Home | Has LegalService/WebSite/Attorney schema; no FAQPage despite homepage FAQs |
| `/about` | About | Good experience signals; missing bar/school/years, no Person/author schema |
| `/services` | Index | OK; children lack Service schema |
| `/faq` | FAQ | ✅ Only page with FAQPage schema |
| `/contact` | Contact | NAP good; no geo coords, no map embed |
| `/consultation` | Booking | Functional; minimal schema |
| `/immigration` | Index | OK; children lack FAQPage/breadcrumb schema |
| `/immigration/i-130` | Topic | Q&A present, **no FAQPage schema**, no date, no author, ~550 words |
| `/immigration/n-400` | Topic | Same as above |
| `/immigration/i-485` | Topic | Same as above |
| `/immigration/i-864` | Topic | Same as above |
| `/immigration/i-765` | Topic | Same as above |
| `/immigration/i-90` | Topic | Same as above |
| `/immigration/marriage-petitions` | Topic | Same as above |
| `/immigration/green-card-petitions` | Topic | Same as above |
| `/immigration/fiance-visa` | Topic | Same as above |
| `/immigration/naturalization-criminal-history` | Topic | Same as above |
| `/immigration/removal-of-conditions-divorce` | Topic | Same as above |
| `/immigration/petition-for-spouse` | Topic | Same as above |
| `/immigration/petition-for-children` | Topic | Same as above |
| `/immigration/petition-for-parents` | Topic | Same as above |
| `/immigration/petition-for-sibling` | Topic | Same as above |
| `/services/family-based-petitions` | Service | No Service/FAQPage/breadcrumb schema |
| `/services/adjustment-of-status` | Service | Same as above |
| `/services/consular-processing` | Service | Same as above |
| `/services/removal-of-conditions` | Service | Same as above |
| `/services/citizenship-naturalization` | Service | Same as above |
| `/services/fiance-petitions` | Service | Same as above |
| `/services/work-permit-renewal` | Service | Same as above |
| `/services/green-card-renewal` | Service | Same as above |
| `/services/vawa` | Service | Same as above |
| `/services/daca-renewal` | Service | Same as above |
| `/services/e2-investment-visa` | Service | Same as above |
| `/services/b1-b2-renewal` | Service | Same as above |

*Fetch failures: none. `llms.txt` returned 404 (expected — file does not exist).*
