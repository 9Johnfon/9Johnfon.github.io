/* OCNA site — fully in Thai */
/* No language toggle — content is Thai throughout */

function renderBookGrid() {
  const grid = document.getElementById('book-grid');
  if (!grid) return;
  grid.innerHTML = SUMMARY.map(b => `
    <div class="card">
      <span class="ico">${b.icon}</span>
      <span class="tag">บทที่ ${b.id.replace('ch', '')}</span>
      <h3>${b.title_th}</h3>
      <div class="card-links">
        <a href="summary.html#${b.id}">📖 อ่านสรุป</a>
        <a href="exam.html">✍️ ทำข้อสอบ</a>
      </div>
    </div>`).join('');
}

function renderMeta() {
  document.querySelectorAll('[data-meta]').forEach(el => {
    const k = el.dataset.meta;
    el.textContent = EXAM_META[k] !== undefined ? EXAM_META[k] : el.textContent;
  });
}

/* ---- Summary page: Thai only ---- */
function renderSummary() {
  const root = document.getElementById('summary-root');
  if (!root) return;
  root.innerHTML = SUMMARY.map(b => `
    <section class="sum-chapter" id="${b.id}">
      <div class="sum-head" onclick="this.parentElement.classList.toggle('open')">
        <span class="ico">${b.icon}</span>
        <h3>${b.title_th}</h3>
        <span class="chev">▼</span>
      </div>
      <div class="sum-body">
        <ul>${b.body_th.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </section>`).join('');
  // deep link
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) { el.classList.add('open'); setTimeout(() => el.scrollIntoView({behavior:'smooth'}), 120); }
  }
  const all = document.getElementById('expand-all');
  if (all) all.onclick = () => {
    const anyClosed = [...document.querySelectorAll('.sum-chapter')].some(s => !s.classList.contains('open'));
    document.querySelectorAll('.sum-chapter').forEach(s => s.classList.toggle('open', anyClosed));
    all.textContent = anyClosed ? '📄 ย่อทั้งหมด' : '📖 กางทั้งหมด';
  };
}

document.addEventListener('DOMContentLoaded', () => {
  renderMeta();
  renderBookGrid();
  renderSummary();
});
