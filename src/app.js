import { buildDeck, normalizeGuests, progress } from './core.js';

const form = document.querySelector('#deck-form');
const cards = document.querySelector('#cards');
const bar = document.querySelector('#progress-bar');
const label = document.querySelector('#progress-label');
const title = document.querySelector('#deck-title');
const minutes = document.querySelector('#minutes');
const output = document.querySelector('#minutes-output');
let deck = buildDeck({});
let completed = new Set();

function render() {
  cards.innerHTML = deck.map((card, index) => `<button class="deck-card ${card.color} ${completed.has(index) ? 'explored' : ''}" data-index="${index}" type="button"><span class="card-number">0${index + 1}</span><span class="card-icon">${card.icon}</span><span class="card-label">${card.label}</span><strong>${card.title}</strong><p>${card.detail}</p><span class="card-action">${completed.has(index) ? 'Explored ✓' : 'Tap to explore →'}</span></button>`).join('');
  const percent = progress(completed.size, deck.length);
  bar.style.width = `${percent}%`;
  label.textContent = `${completed.size} of ${deck.length} explored`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const eventType = data.get('event');
  const guestList = normalizeGuests(data.get('guests') || '');
  deck = buildDeck({ event: eventType, guests: guestList, mood: data.get('mood'), minutes: Number(data.get('minutes')) });
  completed = new Set();
  title.textContent = `${eventType === 'date' ? 'Date night' : eventType[0].toUpperCase() + eventType.slice(1)} deck`;
  render();
});

cards.addEventListener('click', (event) => {
  const button = event.target.closest('[data-index]');
  if (!button) return;
  const index = Number(button.dataset.index);
  completed.has(index) ? completed.delete(index) : completed.add(index);
  render();
});

minutes.addEventListener('input', () => output.textContent = `${minutes.value} minutes`);
document.querySelector('#reset').addEventListener('click', () => { completed = new Set(); render(); });
render();
