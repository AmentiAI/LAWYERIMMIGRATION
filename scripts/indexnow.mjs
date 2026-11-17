// Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver) after a deploy.
// Usage: npm run indexnow
// The key file lives at public/92c125144269595df92765cb36eea39e.txt and must be deployed before running.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jacqlaw.com";
const KEY = "92c125144269595df92765cb36eea39e";

const sitemap = await fetch(`${SITE_URL}/sitemap.xml`).then((res) => res.text());
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok) process.exit(1);
