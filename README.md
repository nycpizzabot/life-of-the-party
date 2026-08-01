# Life of the Party

A pre-dinner briefing deck for showing up curious, informed, and ready to make room for other people. It is a learning exercise in turning “help me be more interesting” into a calmer product: five cards, concrete prompts, and no score for social performance.

## What this explores

- Content design for social situations
- A lightweight card interaction model in vanilla JavaScript
- Motion that adds delight without making the experience feel like a game show
- Provenance and uncertainty in a news-oriented product
- A server-side RSS proxy for fresh News Pulse cards
- Privacy boundaries around guest names and personal context

## Live news

The News Pulse card calls `/api/news`, which gathers current RSS items from NPR, The New York Times Technology, BBC News, The Guardian, and NASA. The endpoint caches responses for 15 minutes and the app falls back to the curated content library if feeds fail. Guest names never go to that endpoint.

## Run it

```bash
npm test
npm run check
npm run build
npm start
```

The app is intentionally dependency-light. `src/content.js` contains the curated library; `api/news.js` contains the live-feed experiment.

## What is deliberately unresolved

This is not a recommendation engine, a news reader, or a social-performance coach. The next useful research is whether people feel more present after using it—and whether any card makes them feel scripted or pressured.
