# GEO Audit Report: Law Office of Jacquelyn R. Goncalves

**Audit Date:** 2026-07-13
**URL:** https://www.jacqlaw.com
**Business Type:** Local Business — Solo Immigration Law Firm (YMYL)
**Pages Analyzed:** Live homepage, robots, sitemap (44 URLs), llms.txt, /about, /faq, a service page, a topic page, and a /local page — plus working-tree review
**Prior audits:** 2026-06-20 (59) · 2026-07-06 (58)

---

## Executive Summary

**Overall GEO Score: 59/100 (Poor — bordering Fair)**

Since the 2026-07-06 audit a deploy shipped real wins that are now **live**: `llms.txt`, `FAQPage` schema on the immigration topic pages, self-canonicals on `/contact` and `/consultation`, and the 10 original `/local/*` landing pages (now returning 200 and included in the sitemap). Those lifted AI Citability and Schema meaningfully. **But the same deploy left a critical problem exposed** — the footer contains ~55 links colored `text-olive-950` on an `olive-950` background (invisible hidden text/links), which is a Google spam-policy violation that can trigger a manual action and deindex the site. That single issue is why the composite score barely moved despite the gains. Fix it (the fix already exists in the working tree) and the site is comfortably in "Fair" territory.

### Score Breakdown

| Category | Score | Weight | Weighted | vs. 07-06 |
|---|---|---|---|---|
| AI Citability | 78/100 | 25% | 19.5 | +6 |
| Brand Authority | 40/100 | 20% | 8.0 | 0 |
| Content E-E-A-T | 55/100 | 20% | 11.0 | 0 |
| Technical GEO | 58/100 | 15% | 8.7 | −4 |
| Schema & Structured Data | 70/100 | 10% | 7.0 | +12 |
| Platform Optimization | 46/100 | 10% | 4.6 | +4 |
| **Overall GEO Score** | | | **58.8 → 59/100** | +1 |

---

## Critical Issues (Fix Immediately)

1. **Hidden text / links in the footer (spam-policy violation).** The live homepage has ~55 links styled `text-olive-950` on an `olive-950` footer — text colored to match the background, invisible to users but present for crawlers (the immigration-topic and `/local/*` link rows). Google's spam policies explicitly prohibit this and it can result in a **manual action that deindexes the whole site** — catastrophic for a site already struggling to get indexed. **The fix is already committed in the working tree** (links converted to visible muted `white/45`); it just needs to **deploy**. Until it deploys, this is the top risk on the site.

---

## High Priority Issues (Fix Within 1 Week)

1. **12 new keyword landing pages built but not deployed.** `/local/immigration-attorney`, `/us-immigration`, `/immigration-office`, `/immigration-law-firm`, the Bridgeport and Hartford city pages, `green-card-renewal-lawyer`, etc. all return **404 in production** (live sitemap = 44 URLs; should be ~56 after deploy). Deploy to unlock them, then resubmit the sitemap.
2. **Weak entity/brand authority.** Unchanged since last audit — off-site presence is legal directories only (Justia, Super Lawyers), no Wikipedia/Reddit/YouTube, and Google Business Profile is unconfirmed. This is the main reason AI won't recommend the firm by name.
3. **No attorney credentials on the About page (YMYL).** Still no bar admission, law school, J.D., or "Esq." found. For a legal site this is a core trust gap.

---

## Medium Priority Issues (Fix Within 1 Month)

1. **No `Service` schema on the 12 `/services/*` pages** — still only the global org graph; confirmed absent on the live service page.
2. **No `BreadcrumbList` schema** anywhere, despite breadcrumb UI.
3. **No author attribution or published/updated dates** on topic/service content.
4. **Google Business Profile** not confirmed/optimized — the #1 local + AI-Overview trust signal.
5. **Near-synonym `/local` clustering risk** — monitor the Mystic lawyer/attorney/law-firm trio (and the new synonym pages) in Search Console for "duplicate, Google chose different canonical."

---

## Low Priority Issues (Optimize When Possible)

1. Add explicit self-canonical to the homepage (currently inherited).
2. Add `sameAs` (Justia, Super Lawyers, LinkedIn, GBP) to the `Attorney`/`LegalService` schema.
3. Add `speakable` schema to key Q&A blocks.
4. Some pages could use a 2–3 sentence direct-answer summary at the very top.

---

## Category Deep Dives

### AI Citability (78/100) ▲
Strong and improved. Topic pages are SSR with ~1,400 words in Q&A format, `FAQPage` schema is now **live** on topic and `/local` pages, and `llms.txt` is published and well-formed. The 12 pending pages each lead with a distinct angle and add more citable, differentiated content once deployed.

### Brand Authority (40/100) ▬
Unchanged. Directory listings only; no Wikipedia, press, Reddit, or YouTube; GBP unconfirmed. NAP is consistent. This is now the biggest lever left.

### Content E-E-A-T (55/100) ▬
Unchanged and still the soft spot for a YMYL legal site. Bilingual service and personal-attorney positioning help; missing credentials, a bylined bio with photo, testimonials with `Review` schema, and content dates.

### Technical GEO (58/100) ▼
Real gains — `llms.txt` live, canonicals fixed, `/local` pages live, SSR, AI-friendly `robots.txt`. **Marked down** because the audit confirmed the live footer hidden-text issue (see Critical), which is a trust/spam problem outweighing the crawl improvements until deployed away.

### Schema & Structured Data (70/100) ▲
Big jump. Live pages now carry `LegalService` + `WebSite` + `Attorney` globally, `FAQPage` on topic and `/local` pages, and `Attorney` per `/local` page. Still missing `Service` and `BreadcrumbList`.

### Platform Optimization (46/100) ▲
AI Overviews readiness improved with `FAQPage` now live. Off-site platform presence still thin.

---

## Quick Wins (Implement This Week)

1. **Deploy the working tree.** One action clears the Critical hidden-text issue, ships the 12 new pages, and pushes the booking/LawPay/UX work live.
2. **Resubmit `sitemap.xml`** in Search Console and Request Indexing on the 12 new `/local/*` URLs once live.
3. **Add `Service` + `BreadcrumbList` schema** to the service pages.
4. **Rewrite the About page** with credentials, headshot, and a bylined bio; add `sameAs` to schema.
5. **Claim/optimize the Google Business Profile.**

## 30-Day Action Plan

### Week 1: Deploy & De-risk
- [ ] Deploy the working tree (removes hidden-text Critical; ships 12 pages)
- [ ] Verify all 22 `/local/*` URLs return 200 and appear in the sitemap
- [ ] Resubmit sitemap; Request Indexing on new pages
- [ ] Confirm the footer links render visibly on the live site

### Week 2: Schema & E-E-A-T
- [ ] Add `Service` + `BreadcrumbList` schema to `/services/*`
- [ ] About page: credentials, headshot, byline; add `sameAs` to `Attorney`/`LegalService`
- [ ] Add direct-answer summary blocks to topic pages

### Week 3: Local & Platform Authority
- [ ] Optimize Google Business Profile (categories, hours, services, photos)
- [ ] Complete Justia, Super Lawyers, Avvo, LinkedIn with consistent NAP
- [ ] Request client reviews; add `Review`/`AggregateRating` schema

### Week 4: Content & Monitoring
- [ ] Publish 2–3 dated, bylined guides (e.g., "I-130 timeline 2026")
- [ ] Review Search Console for duplicate-canonical clustering across `/local`
- [ ] Re-run this audit and compare deltas

---

## Appendix: Pages Analyzed

| URL | Status | GEO Notes |
|---|---|---|
| / | 200 | Full org JSON-LD; **~55 hidden footer links (Critical)** |
| /robots.txt | 200 | Allows AI crawlers; blocks /admin /api |
| /sitemap.xml | 200 | 44 URLs (10 original /local now included; 12 new not yet live) |
| /llms.txt | 200 | **Now live** — correct content |
| /about | 200 | No bar/J.D./credentials found |
| /faq | 200 | `FAQPage` schema present |
| /services/family-based-petitions | 200 | Correct canonical; **no `Service` schema** |
| /immigration/i-130 | 200 | `FAQPage` schema **now live** |
| /local/immigration-lawyer-mystic-ct | 200 | **Now live** — `Attorney` + `FAQPage` schema |
| /local/immigration-attorney | 404 | New page **not yet deployed** |

_Reflects the live production site as of the audit date. Newer working-tree work (12 keyword pages, footer hidden-text fix, booking/LawPay/UX changes) is built and typecheck-clean but not yet deployed._
