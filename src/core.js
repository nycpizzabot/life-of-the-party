export const MODULES = [
  { id: 'room', icon: '◉', title: 'Room read', label: 'For your crew', description: 'A few warm questions shaped around who is coming.', color: 'coral' },
  { id: 'pulse', icon: '↗', title: 'News pulse', label: 'For your point of view', description: 'Context, not headlines: useful threads with a counterpoint.', color: 'lime' },
  { id: 'spark', icon: '✦', title: 'Conversation sparks', label: 'For the lull', description: 'Interesting prompts with enough texture to make them yours.', color: 'blue' },
  { id: 'host', icon: '⌁', title: 'Host signal', label: 'For the moment', description: 'A small gesture: what to bring, ask, or notice.', color: 'violet' },
  { id: 'grace', icon: '→', title: 'Graceful exit', label: 'For later', description: 'A low-friction way to leave while the energy is still good.', color: 'gold' }
];

export function normalizeGuests(value) {
  return value.split(',').map((name) => name.trim()).filter(Boolean).slice(0, 8);
}

export function eventLabel(event) {
  return ({ dinner: 'Dinner', drinks: 'Drinks', birthday: 'Birthday', date: 'Date night' })[event] || 'Tonight';
}

export function buildDeck({ event = 'drinks', guests = [], mood = 'curious', minutes = 10 }) {
  const people = guests.length ? guests : ['your people'];
  const lead = people.slice(0, 2).join(' and ');
  const socialTone = mood === 'playful' ? 'light, unexpected' : mood === 'calm' ? 'warm, low-stakes' : 'curious, thoughtful';
  return MODULES.map((module, index) => ({
    ...module,
    id: `${module.id}-${event}-${index}`,
    kicker: `${eventLabel(event)} · ${minutes} minute reset`,
    detail: module.id === 'room' ? `Start with ${lead}. Ask a question that lets everyone be the expert on their own life.` :
      module.id === 'pulse' ? `Bring one ${socialTone} idea—not a hot take. Pair it with “what do you make of that?”` :
      module.id === 'spark' ? `Keep this in your back pocket: “What have you changed your mind about lately?”` :
      module.id === 'host' ? `Notice the small work of the night. Offer one specific, useful thing before you settle in.` :
      `Pick your moment, say you had a great time, and leave with an easy next step.`
  }));
}

export function progress(completed, total) {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
}
