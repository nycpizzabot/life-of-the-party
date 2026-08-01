import test from 'node:test';
import assert from 'node:assert/strict';
import { buildDeck, normalizeGuests, progress } from './core.js';

test('normalizes, trims, and caps guest names', () => {
  assert.deepEqual(normalizeGuests(' Ana, , Bo, Cy '), ['Ana', 'Bo', 'Cy']);
  assert.equal(normalizeGuests('a,b,c,d,e,f,g,h,i').length, 8);
});

test('builds a complete five-card deck with researched content', () => {
  const deck = buildDeck({ event: 'dinner', guests: ['Ana'], mood: 'calm', minutes: 15 });
  assert.equal(deck.length, 5);
  assert.equal(deck.every((card) => card.itemCount >= 10), true);
  assert.equal(deck.every((card) => card.type), true);
  assert.match(deck[1].kicker, /Dinner/);
});

test('uses live news items when provided', () => {
  const deck = buildDeck({ news: [{ type: 'Live topic', title: 'Fresh headline', body: 'A live story.', source: { label: 'Test Feed', url: 'https://example.com/story' } }] });
  assert.equal(deck[1].itemTitle, 'Fresh headline');
  assert.equal(deck[1].itemCount, 1);
});

test('reports bounded deck completion percentage', () => {
  assert.equal(progress(3, 5), 60);
  assert.equal(progress(0, 0), 0);
});
