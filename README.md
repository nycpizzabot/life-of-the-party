# Life of the Party

A pre-game ritual for more intentional social plans: a five-card briefing deck that helps someone arrive **curious, informed, and attentive** before drinks, dinner, a birthday, or date night.

> This is a portfolio prototype—not a production recommendation engine. All content is fictional and deliberately avoids claims of personalized social insight.

## Product point of view

Most tools frame social preparation as performance: say the clever thing, know the right thing, optimize the room. **Life of the Party** takes the opposite view: the best conversationalist makes room for others. The deck offers lightweight prompts, context, and an intentional exit—not scripts.

## What is in this prototype

- An editorial, mobile-responsive landing experience
- A configurable five-card “tonight's deck” for drinks, dinner, birthdays, and dates
- Guest-name prompts that remain client-side (no network calls, no persistence)
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
