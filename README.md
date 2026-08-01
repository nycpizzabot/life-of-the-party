# Life of the Party

A pre-game ritual for more intentional social plans: a five-card briefing deck that helps someone arrive **curious, informed, and attentive** before drinks, dinner, a birthday, or date night.

> This is a portfolio prototype, not a production recommendation engine. It includes a curated content snapshot: evergreen prompts and original clean jokes, plus dated news topics and phone-ready source links. News is not automatically refreshed in this static build.

## Product point of view

Most tools frame social preparation as performance: say the clever thing, know the right thing, optimize the room. **Life of the Party** takes the opposite view: the best conversationalist makes room for others. The deck offers lightweight prompts, context, and an intentional exit—not scripts.

## What is in this prototype

- An editorial, mobile-responsive landing experience
- A configurable five-card “tonight's deck” for drinks, dinner, birthdays, and dates
- **50 concrete content items**: 10 thought starters, 10 dated news topics, 10 conversation starters, 10 phone-ready ideas, and 10 original clean jokes
- Source links on researched news and phone-ready cards, with a visible snapshot/freshness label
- Live News Pulse updates through a server-side `/api/news` RSS proxy (15-minute edge cache plus stale-while-revalidate), with curated fallback content if fewer than three feeds respond
- “Next idea” controls so each module can be browsed instead of showing one placeholder sentence
- Guest-name prompts remain client-side (not sent to the news proxy; no persistence)
- Completion state and progress feedback
- Pure core rules with Node's built-in test runner
- Product brief with hypotheses, metrics, safety guardrails, and next steps

## Run it

```bash
npm test
npm run check
npm run build
npm start
```

The app is intentionally dependency-light. `npm run build` emits deployable static files in `dist/`.

## Content and provenance

The content library lives in [`src/content.js`](src/content.js). Each module has at least 10 items and every item has a type plus a provenance label. The News Pulse snapshot was assembled from live RSS feeds checked on **August 1, 2026** (NPR, The New York Times Technology, BBC News, The Guardian, and NASA). Evergreen social prompts and jokes are marked as original rather than presented as reported facts. The static app intentionally asks users to follow a source before treating a news card as current.

## Portfolio talking points

- **Problem framing:** shifted from “be interesting” to reducing pre-social anxiety while supporting genuine connection.
- **Interaction design:** turned a routine-app card metaphor into a brief, configurable pre-event flow.
- **Responsible AI/news product thinking:** the news module specifies context and a counterpoint; a real AI system must show provenance, uncertainty, and source controls.
- **Measurement:** the success metric is not time in app. See the product brief for the balanced scorecard.

## Key product decisions

1. **No people profiling.** Guest names are prompts to jog the user's own memory, not data for inference.
2. **No “winning the conversation” score.** Progress means cards explored, not social performance.
3. **Demo content is explicitly fictional.** The prototype demonstrates the interaction model without invented news claims.
4. **Connection is the outcome.** A real discovery plan should test whether users feel calmer and more present—not merely more prepared.

## Next iterations

- User-curated source packs with article provenance and recency labels
- A “bring / ask / notice” card based on explicit user notes, never scraped contacts
- Calendar opt-in with per-event review
- Post-event reflection measuring presence and connection with strong privacy defaults

See [`docs/product-brief.md`](docs/product-brief.md) for the full product case.
