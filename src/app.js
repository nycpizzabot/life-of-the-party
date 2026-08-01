import { buildDeck, normalizeGuests, progress } from './core.js';
import { CONTENT } from './content.js';

const form = document.querySelector('#deck-form');
const cards = document.querySelector('#cards');
const bar = document.querySelector('#progress-bar');
const label = document.querySelector('#progress-label');
const title = document.querySelector('#deck-title');
const minutes = document.querySelector('#minutes');
const output = document.querySelector('#minutes-output');
const newsStatus = document.querySelector('#news-status');
let settings = { event: 'drinks', guests: [], mood: 'curious', minutes: 10 };
let offsets = {};
let liveNews = [];
let deck = buildDeck({ ...settings, news: liveNews });
let completed = new Set();

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}

function sourceMarkup(source) {
  if (!source || source.label === 'Original prompt' || source.label === 'Original clean joke' || source.label === 'Original framing prompt' || source.label === 'Original phone prompt') {
    return `<span class="source-note">${escapeHtml(source?.label || 'Original prompt')}</span>`;
  }
  return `<a class="source-link" href="${source.url}" target="_blank" rel="noreferrer">Source: ${escapeHtml(source.label)} ↗</a>`;
}

function render() {
  cards.innerHTML = deck.map((card, index) => `
    <article class="deck-card ${card.color} ${completed.has(index) ? 'explored' : ''}" data-index="${index}">
      <div class="card-head"><span class="card-number">0${index + 1}</span><span class="card-icon">${card.icon}</span><span class="card-label">${card.label}</span></div>
      <span class="card-type">${escapeHtml(card.type)} · ${card.itemIndex + 1}/${card.itemCount}</span>
      <strong>${escapeHtml(card.itemTitle)}</strong>
      <p>${escapeHtml(card.detail)}</p>
      <div class="card-footer">${sourceMarkup(card.source)}<button class="card-action" data-action="next" type="button">Next idea →</button></div>
      <button class="explore-button" data-action="explore" type="button">${completed.has(index) ? 'Explored ✓' : 'Mark explored'}</button>
    </article>`).join('');
  const percent = progress(completed.size, deck.length);
  bar.style.width = `${percent}%`;
  label.textContent = `${completed.size} of ${deck.length} explored`;
}

function rebuild() {
  deck = buildDeck({ ...settings, offsets, news: liveNews });
  render();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  settings = {
    event: data.get('event'),
    guests: normalizeGuests(data.get('guests') || ''),
    mood: data.get('mood'),
    minutes: Number(data.get('minutes'))
  };
  offsets = {};
  completed = new Set();
  title.textContent = `${settings.event === 'date' ? 'Date night' : settings.event[0].toUpperCase() + settings.event.slice(1)} deck`;
  rebuild();
});

cards.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  const cardElement = event.target.closest('[data-index]');
  if (!action || !cardElement) return;
  const index = Number(cardElement.dataset.index);
  const moduleId = deck[index].id.split('-')[0];
  if (action === 'next') {
    offsets[moduleId] = (offsets[moduleId] || 0) + 1;
    rebuild();
  } else if (action === 'explore') {
    completed.has(index) ? completed.delete(index) : completed.add(index);
    render();
  }
});

cards.addEventListener('pointermove', (event) => {
  const card = event.target.closest('.deck-card');
  if (!card || event.pointerType === 'touch') return;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.setProperty('--ry', `${x * 5}deg`);
  card.style.setProperty('--rx', `${y * -5}deg`);
});
cards.addEventListener('pointerleave', () => cards.querySelectorAll('.deck-card').forEach((card) => {
  card.style.removeProperty('--ry');
  card.style.removeProperty('--rx');
}));

minutes.addEventListener('input', () => output.textContent = `${minutes.value} minutes`);
document.querySelector('#reset').addEventListener('click', () => { completed = new Set(); offsets = {}; rebuild(); });

// Keep this as a lightweight invariant for the demo content library.
if (Object.values(CONTENT).some((items) => items.length < 10)) console.warn('Every content module should contain at least 10 items.');

async function loadLiveNews() {
  if (!newsStatus) return;
  newsStatus.textContent = 'Updating news…';
  newsStatus.classList.add('is-loading');
  try {
    const response = await fetch('/api/news', { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`News request failed: ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.items) || payload.items.length < 3) throw new Error('Not enough live items');
    liveNews = payload.items;
    newsStatus.textContent = `Live · updated ${payload.updatedLabel || 'just now'}`;
    newsStatus.classList.remove('is-loading', 'is-fallback');
    rebuild();
  } catch (error) {
    newsStatus.textContent = 'Using the latest saved pulse';
    newsStatus.classList.remove('is-loading');
    newsStatus.classList.add('is-fallback');
    console.warn('Live news unavailable; using curated fallback.', error);
  }
}

render();
loadLiveNews();
