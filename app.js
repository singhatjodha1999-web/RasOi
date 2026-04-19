// ─── STATE ───────────────────────────────────────────────
let activeFilter = 'all';   // all | veg | nonveg | jain
let activeCat    = 'all';   // all | breakfast | main | snacks | sweet | rice | bread | soup | drinks
let searchQuery  = '';
let sortMode     = 'default';

// ─── DOM REFS ────────────────────────────────────────────
const grid         = document.getElementById('recipeGrid');
const noResults    = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const modalOverlay = document.getElementById('modalOverlay');
const modal        = document.getElementById('modal');
const searchInput  = document.getElementById('searchInput');
const sortSelect   = document.getElementById('sortSelect');
const loader       = document.getElementById('loader');
const menuToggle   = document.getElementById('menuToggle');
const mobileNav    = document.getElementById('mobileNav');

// ─── LOADER ──────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    animateCards();
  }, 1200);
});

// ─── MOBILE MENU ─────────────────────────────────────────
menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// ─── NAV FILTER BUTTONS ──────────────────────────────────
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.remove('active');
    // activate ALL buttons with same data-filter (header + mobile)
    document.querySelectorAll(`.nav-btn[data-filter="${btn.dataset.filter}"]`).forEach(b => b.classList.add('active'));
    activeFilter = btn.dataset.filter;
    mobileNav.classList.remove('open');
    render();
  });
});

// ─── CATEGORY PILLS ──────────────────────────────────────
document.querySelectorAll('.cat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.cat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeCat = pill.dataset.cat;
    render();
  });
});

// ─── SEARCH ──────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  render();
});

// ─── SORT ────────────────────────────────────────────────
sortSelect.addEventListener('change', () => {
  sortMode = sortSelect.value;
  render();
});

// ─── FILTER + SORT LOGIC ─────────────────────────────────
function getFiltered() {
  let list = RECIPES.filter(r => {
    const matchType = activeFilter === 'all' || r.type === activeFilter;
    const matchCat  = activeCat === 'all' || r.cat === activeCat;
    const matchSearch = !searchQuery ||
      r.name.toLowerCase().includes(searchQuery) ||
      r.desc.toLowerCase().includes(searchQuery) ||
      r.ingredients.join(' ').toLowerCase().includes(searchQuery);
    return matchType && matchCat && matchSearch;
  });

  if (sortMode === 'time-asc')  list.sort((a,b) => a.time - b.time);
  if (sortMode === 'time-desc') list.sort((a,b) => b.time - a.time);
  if (sortMode === 'name')      list.sort((a,b) => a.name.localeCompare(b.name));

  return list;
}

// ─── RENDER GRID ─────────────────────────────────────────
function render() {
  const list = getFiltered();
  grid.innerHTML = '';

  if (list.length === 0) {
    noResults.classList.remove('hidden');
    resultsCount.textContent = 'No recipes found';
    return;
  }

  noResults.classList.add('hidden');
  resultsCount.textContent = `Showing ${list.length} recipe${list.length > 1 ? 's' : ''}`;

  list.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = `recipe-card ${r.type}`;
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="card-emoji">${r.emoji}</div>
      <div class="card-badge badge-${r.type}">${badgeLabel(r.type)}</div>
      <h3 class="card-title">${r.name}</h3>
      <p class="card-desc">${r.desc}</p>
      <div class="card-footer">
        <span class="card-meta">⏱ ${r.time} min</span>
        <span class="card-meta">👥 ${r.serves} serves</span>
        <button class="card-btn" onclick="openModal(${r.id})">View Recipe →</button>
      </div>
    `;
    grid.appendChild(card);
  });

  animateCards();
}

function badgeLabel(type) {
  return type === 'veg' ? '🌿 Veg' : type === 'nonveg' ? '🍗 Non-Veg' : '☮️ Jain';
}

// ─── MODAL ───────────────────────────────────────────────
function openModal(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  document.getElementById('modalEmoji').textContent    = r.emoji;
  document.getElementById('modalBadge').textContent    = badgeLabel(r.type);
  document.getElementById('modalBadge').className      = `modal-badge badge-${r.type}`;
  document.getElementById('modalTitle').textContent    = r.name;
  document.getElementById('modalMeta').innerHTML       =
    `<span>⏱ ${r.time} min</span> <span>👥 ${r.serves} servings</span> <span class="cat-label">${r.cat}</span>`;

  const ingList = document.getElementById('modalIngredients');
  ingList.innerHTML = r.ingredients.map(i => `<li>${i}</li>`).join('');

  const stepList = document.getElementById('modalSteps');
  stepList.innerHTML = r.steps.map(s => `<li>${s}</li>`).join('');

  const tipsWrap = document.getElementById('modalTipsWrap');
  if (r.tips) {
    document.getElementById('modalTips').textContent = r.tips;
    tipsWrap.style.display = 'block';
  } else {
    tipsWrap.style.display = 'none';
  }

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── CARD ANIMATIONS ─────────────────────────────────────
function animateCards() {
  document.querySelectorAll('.recipe-card').forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(24px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 60);
  });
}

// ─── HEADER SCROLL SHADOW ────────────────────────────────
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── INIT ─────────────────────────────────────────────────
render();
