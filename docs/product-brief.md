# Product brief — Life of the Party

## User and job
**Primary user:** a socially engaged person who enjoys seeing friends but sometimes arrives mentally scattered, over-prepared, or worried about conversational lulls.

**Job to be done:** *Before I meet friends, help me transition into a curious, grounded social mode so I can contribute thoughtfully without performing.*

## Hypothesis
A short, user-configured deck that offers one people-centered prompt, one sourced news context, one conversation spark, one host-oriented action, and one exit cue will increase a user's reported readiness and presence more than a generic pre-event feed.

## MVP scope
- Select event type, optional first names, mood, and prep time.
- Generate a five-card deck from a curated library of 50 concrete items: 10 thought starters, 10 dated news topics, 10 conversation starters, 10 phone-ready ideas, and 10 original clean jokes.
- Let users cycle through 10 items per card and see non-judgmental progress.
- Show provenance links for reported/current content and label the news freshness state.
- Refresh News Pulse through a server-side RSS proxy with a curated fallback when feeds fail.
- Keep input client-side in the prototype.

## North-star and success metrics
**North-star:** percentage of completed plans followed by a voluntary “I felt more present” response.

**Leading metric:** deck completion before the planned event.

**Counter-metrics / guardrails:**
- Do not optimize minutes spent or cards completed at the expense of user comfort.
- Track “felt scripted or pressured” and “information felt trustworthy.”
- Measure repeat use only after a positive presence signal.
- Require user confirmation before any calendar, contact, or source integration.

## AI and newsroom constraints
If a later version uses AI or news data:
- Treat generated content as proposals, never facts or social advice.
- Each news prompt must present publisher, publication time, a source link, and uncertainty/counterpoint where appropriate.
- Editors or a trusted source policy must control what is eligible; users can hide topics and sources.
- Never infer personality, relationship quality, beliefs, or social ranking from contacts, messages, attendance, or engagement.
- Never frame people as “leads,” recommend manipulation, or score social performance.

## Non-goals and risks
- Not a dating coach, networking CRM, news reader, or therapy product.
- Avoid advice that treats social anxiety as a productivity problem.
- Avoid stale or sensational context; freshness and provenance are user-visible requirements.
- Privacy risk rises sharply with calendar/contact import; keep those paths opt-in and reviewable.

## Discovery plan
1. Conduct 8–10 interviews about the 30 minutes before social plans: anxieties, rituals, desired help, and red lines.
2. Test two low-fidelity flows: calm transition vs. “be interesting” optimization. Measure perceived pressure and usefulness.
3. Concierge-test curated cards with a small cohort; collect post-event reflection the next morning.
4. Prototype provenance UI for the news card and test trust comprehension before adding any generative layer.

## Experiment
**Question:** Does a 5–10 minute deck improve self-reported presence without increasing pressure?

- **Population:** opt-in adult users with a social plan in the next 24 hours.
- **Variants:** generic inspiration feed vs. configurable five-card deck.
- **Primary outcome:** post-event presence score.
- **Stop condition:** any material increase in “felt judged/pressured” or concern about social data use.
