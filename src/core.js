import { CONTENT, SNAPSHOT_DATE } from './content.js';

export const MODULES = [
  { id: 'room', icon: '◉', title: 'Room read', label: 'For your crew', description: 'Thought starters shaped around how to make room for people.', color: 'coral' },
  { id: 'pulse', icon: '↗', title: 'News pulse', label: 'For your point of view', description: 'Real topics with context, a source, and a counterpoint.', color: 'lime' },
  { id: 'spark', icon: '✦', title: 'Conversation sparks', label: 'For the lull', description: 'Conversation starters with enough texture to make them yours.', color: 'blue' },
  { id: 'host', icon: '⌁', title: 'Phone-ready ideas', label: 'For the moment', description: 'Useful things to look up, show, or share without hijacking the room.', color: 'violet' },
  { id: 'grace', icon: '→', title: 'Clean jokes', label: 'For the exit ramp', description: 'Original, low-stakes lines for a lighter moment or a graceful close.', color: 'gold' }
];

export { CONTENT, SNAPSHOT_DATE };

export function normalizeGuests(value) {
  return value.split(',').map((name) => name.trim()).filter(Boolean).slice(0, 8);
}

export function eventLabel(event) {
  return ({ dinner: 'Dinner', drinks: 'Drinks', birthday: 'Birthday', date: 'Date night' })[event] || 'Tonight';
}

export function buildDeck({ event = 'drinks', guests = [], mood = 'curious', minutes = 10, offsets = {}, news = [] }) {
  return MODULES.map((module, index) => {
    const ideas = module.id === 'pulse' && news.length ? news : CONTENT[module.id];
    const itemIndex = ((offsets[module.id] || 0) + ideas.length) % ideas.length;
    const item = ideas[itemIndex];
    return {
      ...module,
      id: `${module.id}-${event}-${index}`,
      kicker: `${eventLabel(event)} · ${minutes} minute reset`,
      itemIndex,
      itemCount: ideas.length,
      type: item.type || 'Topic',
      itemTitle: item.title,
      detail: item.body,
      source: item.source,
      snapshotDate: module.id === 'pulse' ? (item.snapshotDate || SNAPSHOT_DATE) : null,
      mood
    };
  });
}

export function progress(completed, total) {
  if (!total) return 0;
  return Math.round((completed / total) * 100);
}
