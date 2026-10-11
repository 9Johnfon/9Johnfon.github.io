/* Assemble staging/*.json → assets/data.js (BOOKS array) — nursing site */
const fs = require('fs');
const path = require('path');
const STG = __dirname;
const OUT = path.join(STG, '..', 'assets', 'data.js');

const ORDER = ['ch11', 'ch12', 'ch13', 'ch14', 'ch15', 'ch16', 'ch17'];
const EXPLICIT_ICONS = { ch11: null }; // filled from file

function load(name) {
  const p = path.join(STG, name + '.json');
  if (!fs.existsSync(p)) throw new Error('missing ' + p);
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function validate(b, tag) {
  const errs = [];
  if (!b.id || !b.no || !b.title) errs.push('missing id/no/title');
  if (!b.summary || b.summary.length < 400) errs.push('summary too short: ' + (b.summary || '').length);
  if (!Array.isArray(b.questions) || b.questions.length < 8) errs.push('questions < 8');
  (b.questions || []).forEach((q, i) => {
    if (!q.q) errs.push(`q${i} no text`);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) errs.push(`q${i} choices!=4`);
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer > 3) errs.push(`q${i} bad answer`);
    if (!q.explain) errs.push(`q${i} no explain`);
  });
  if (errs.length) throw new Error(`[${tag}] ` + errs.join('; '));
}

const books = [];
for (const id of ORDER) {
  let b;
  try { b = load(id); } catch (e) { console.log('SKIP ' + id + ': ' + e.message); continue; }
  // merge vision extras
  for (const extra of [id + '_v']) {
    try {
      const v = load(extra);
      b.summary = (b.summary || '') + '\n\n' + (v.summary || '');
      b.questions = (b.questions || []).concat(v.questions || []);
      if (!b.source.includes(v.source || '')) b.source = (b.source || '') + ' + ' + (v.source || '');
      console.log(`merged ${extra}: +${v.questions.length} Q`);
    } catch (e) { /* no extra */ }
  }
  validate(b, id);
  books.push(b);
}

if (books.length !== 7) {
  console.log('WARN books =', books.length, books.map(b => b.id).join(','));
}
const total = books.reduce((n, b) => n + b.questions.length, 0);
const header = '/* auto-generated — สรุป + ข้อสอบ จากเอกสารชุดใหม่ (บท 11-17) */\nconst BOOKS = ';
fs.writeFileSync(OUT, header + JSON.stringify(books, null, 1) + ';\n');
console.log('WROTE', OUT);
console.log('books:', books.map(b => `${b.no}:${b.title}(${b.questions.length}Q)`).join(' | '));
console.log('TOTAL QUESTIONS:', total);
