/* OCNA exam engine — 40 questions / 60 minutes, one-way (no going back),
   instant explanation optional, final score + review. */

const LETTERS = ['A', 'B', 'C', 'D'];
let order = [];        // shuffled indices
let cur = 0;           // current position
let answers = [];      // chosen option per question (or -1)
let instant = true;    // show explanation immediately
let timerId = null;
let remaining = EXAM_META.minutes * 60;
let finished = false;

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function fmt(s) {
  const m = Math.floor(s / 60), x = s % 60;
  return `${m}:${String(x).padStart(2, '0')}`;
}

function startExam() {
  instant = document.getElementById('instant-chk').checked;
  order = shuffle(QUESTIONS.map((_, i) => i));
  answers = new Array(QUESTIONS.length).fill(-1);
  cur = 0; finished = false;
  remaining = EXAM_META.minutes * 60;
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('exam-screen').style.display = 'block';
  timerId = setInterval(tick, 1000);
  render();
}

function tick() {
  remaining--;
  const el = document.getElementById('timer');
  el.textContent = '⏱ ' + fmt(remaining);
  el.classList.toggle('low', remaining <= 300);
  if (remaining <= 0) finish();
}

function render() {
  const qi = order[cur];
  const q = QUESTIONS[qi];
  document.getElementById('q-pos').textContent = `ข้อ ${cur + 1} / ${QUESTIONS.length}`;
  document.getElementById('q-topic').innerHTML = `<span class="tag-ch">${q.t}</span>`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-text-th').textContent = q.th ? q.th : q.q_th;

  const chosen = answers[cur];
  const opts = document.getElementById('opts');
  opts.innerHTML = q.c.map((c, i) => {
    let cls = 'opt';
    if (chosen >= 0) {
      if (i === q.a) cls += ' correct';
      else if (i === chosen) cls += ' wrong';
    }
    return `<button class="${cls}" data-i="${i}" ${chosen >= 0 ? 'disabled' : ''}>
      <span class="key">${LETTERS[i]}</span>
      <span>${c}<span class="th">${q.c_th[i]}</span></span>
    </button>`;
  }).join('');

  opts.querySelectorAll('.opt').forEach(b => b.onclick = () => pick(+b.dataset.i));

  const ex = document.getElementById('explain');
  ex.classList.remove('show');
  ex.innerHTML = `<b>💡 เฉลย:</b> <span class="en">${q.e}</span><span class="th">${q.e_th}</span>`;

  const nextBtn = document.getElementById('next-btn');
  nextBtn.disabled = chosen < 0;
  nextBtn.textContent = cur === QUESTIONS.length - 1 ? 'ดูผลสอบ →' : 'ข้อต่อไป →';

  document.getElementById('q-dots').innerHTML = order.map((_, i) => {
    let cls = '';
    if (i === cur) cls = 'cur';
    if (answers[i] >= 0) cls = answers[i] === QUESTIONS[order[i]].a ? 'ok' : 'bad';
    return `<i class="${cls}">${i + 1}</i>`;
  }).join('');

  document.getElementById('progress-bar').style.width =
    (Object.values(answers).filter(v => v >= 0).length / QUESTIONS.length * 100) + '%';
}

function pick(i) {
  const qi = order[cur];
  const q = QUESTIONS[qi];
  answers[cur] = i;
  // lock options visually
  document.querySelectorAll('#opts .opt').forEach((b, idx) => {
    b.disabled = true;
    if (idx === q.a) b.classList.add('correct');
    else if (idx === i) b.classList.add('wrong');
  });
  if (instant) document.getElementById('explain').classList.add('show');
  document.getElementById('next-btn').disabled = false;
  document.getElementById('progress-bar').style.width =
    (answers.filter(v => v >= 0).length / QUESTIONS.length * 100) + '%';
  document.getElementById('q-dots').innerHTML = order.map((_, idx) => {
    let cls = '';
    if (idx === cur) cls = 'cur';
    if (answers[idx] >= 0) cls = answers[idx] === QUESTIONS[order[idx]].a ? 'ok' : 'bad';
    return `<i class="${cls}">${idx + 1}</i>`;
  }).join('');
}

function next() {
  if (cur === QUESTIONS.length - 1) { finish(); return; }
  cur++;
  render();
}

function finish() {
  if (finished) return;
  finished = true;
  clearInterval(timerId);
  const total = QUESTIONS.length;
  let right = 0;
  const detail = order.map((qi, pos) => {
    const q = QUESTIONS[qi];
    const ok = answers[pos] === q.a;
    if (ok) right++;
    return { q, chosen: answers[pos], ok };
  });
  const pct = Math.round(right / total * 100);
  const passed = pct >= EXAM_META.pass;

  document.getElementById('exam-screen').style.display = 'none';
  const rs = document.getElementById('result-screen');
  rs.style.display = 'block';
  rs.innerHTML = `
    <div class="q-card result">
      <h2>📋 ผลสอบ OCNA — Routing & Switching</h2>
      <div class="score-ring" style="--p:${pct}"><div><b>${pct}%</b><span>${right} / ${total} ข้อ</span></div></div>
      <div class="${passed ? 'pass' : 'fail'}">${passed ? '✅ ผ่าน! (เกณฑ์ 65%)' : '❌ ยังไม่ผ่าน (เกณฑ์ 65%)'}</div>
      <p style="color:var(--mut);margin-top:8px">ใช้เวลา ${fmt(EXAM_META.minutes * 60 - remaining)} / ${EXAM_META.minutes} นาที</p>
      <div class="mode-row">
        <button class="btn btn-primary" onclick="location.reload()">ทำใหม่อีกครั้ง</button>
        <a class="btn btn-ghost" href="summary.html">📖 ทวนสรุปเนื้อหา</a>
      </div>
      <div class="review">
        <h3 style="margin:26px 0 14px">🔎 ตรวจทุกข้อ</h3>
        ${detail.map((d, i) => `
          <div class="review-item">
            <div class="rq">${i + 1}. ${d.q.q}</div>
            <div class="ra"><span class="th" style="display:block;color:var(--mut);font-size:.9rem">${d.q.q_th}</span>
              คำตอบของคุณ: <b class="${d.ok ? 'ok' : 'bad'}">${d.chosen >= 0 ? LETTERS[d.chosen] + '. ' + d.q.c[d.chosen] : 'ไม่ได้ตอบ'}</b>
              ${d.ok ? '' : `<br>คำตอบที่ถูก: <b class="ok">${LETTERS[d.q.a]}. ${d.q.c[d.q.a]}</b>`}
            </div>
            <div class="re">💡 ${d.q.e}<br><span style="opacity:.8">${d.q.e_th}</span></div>
          </div>`).join('')}
      </div>
    </div>`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const sb = document.getElementById('start-btn');
  if (sb) sb.onclick = startExam;
  const nb = document.getElementById('next-btn');
  if (nb) nb.onclick = next;
  document.getElementById('timer').textContent = '⏱ ' + fmt(EXAM_META.minutes * 60);
});
