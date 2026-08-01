const FEEDS = [
  { name: 'NPR', url: 'https://feeds.npr.org/1001/rss.xml' },
  { name: 'NYT Technology', url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml' },
  { name: 'BBC News', url: 'https://feeds.bbci.co.uk/news/rss.xml' },
  { name: 'The Guardian', url: 'https://www.theguardian.com/world/rss' },
  { name: 'NASA', url: 'https://www.nasa.gov/feed/' }
];

function decode(value = '') {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
    .replace(/&#x27;/gi, "'").replace(/\s+/g, ' ').trim();
}

function field(block, name) {
  const match = block.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
  return match ? decode(match[1]) : '';
}

function parseFeed(xml, feed) {
  return [...xml.matchAll(/<item(?:\s[^>]*)?>([\s\S]*?)<\/item>/gi)].slice(0, 8).map((match) => {
    const block = match[1];
    const title = field(block, 'title');
    const link = field(block, 'link');
    const description = field(block, 'description');
    const published = field(block, 'pubDate') || field(block, 'dc:date');
    return {
      type: 'Live topic',
      title,
      body: description ? `${description.slice(0, 230)} Ask: what do you make of it?` : 'A fresh story worth bringing into the room. Ask: what would you want to understand better?',
      source: { label: `${feed.name}${published ? ` · ${new Date(published).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}` : ''}`, url: link },
      snapshotDate: 'Live RSS snapshot'
    };
  }).filter((item) => item.title && /^https?:\/\//.test(item.source.url));
}

export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const results = await Promise.allSettled(FEEDS.map(async (feed) => {
    const upstream = await fetch(feed.url, {
      headers: { 'User-Agent': 'Life-of-the-Party/1.0 (+https://github.com/nycpizzabot/life-of-the-party)' },
      signal: AbortSignal.timeout(7000)
    });
    if (!upstream.ok) throw new Error(`${feed.name}: ${upstream.status}`);
    return parseFeed(await upstream.text(), feed);
  }));

  const items = results.flatMap((result) => result.status === 'fulfilled' ? result.value : []);
  const unique = [...new Map(items.map((item) => [item.source.url, item])).values()].slice(0, 10);
  response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  return response.status(unique.length >= 3 ? 200 : 503).json({
    items: unique,
    updatedLabel: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    feeds: FEEDS.map((feed) => feed.name),
    fallback: unique.length < 3
  });
}
