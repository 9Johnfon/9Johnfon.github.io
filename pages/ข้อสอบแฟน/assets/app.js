/* ===== ข้อสอบแฟน — app.js ===== */

/* ---------- Mini Markdown (รองรับ h2/h3, list, table, quote, bold, code, hr) ---------- */
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function inline(s){
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>')
    .replace(/`([^`]+)`/g,'<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,'<a href="$2">$1</a>');
}
function md(src){
  const lines = String(src||'').split(/\r?\n/);
  let out=[], i=0, list=null, table=null;
  const closeList=()=>{ if(list){ out.push(list==='ul'?'</ul>':'</ol>'); list=null; } };
  const closeTable=()=>{ if(table){ out.push('</tbody></table>'); table=null; } };
  const flush=()=>{ closeList(); closeTable(); };

  while(i<lines.length){
    let ln=lines[i];
    // table
    if(/^\s*\|.*\|\s*$/.test(ln)){
      const cells=r=>r.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());
      const head=cells(ln);
      const isSep=lines[i+1] && /^\s*\|[\s:\-|]+\|\s*$/.test(lines[i+1]);
      closeList();
      out.push('<table><thead><tr>'+head.map(h=>'<th>'+inline(h)+'</th>').join('')+'</tr></thead><tbody>');
      table=1; i+= isSep?2:1;
      while(i<lines.length && /^\s*\|.*\|\s*$/.test(lines[i])){
        const cs=cells(lines[i]);
        out.push('<tr>'+head.map((_,k)=>'<td>'+inline(cs[k]||'')+'</td>').join('')+'</tr>'); i++;
      }
      out.push('</tbody></table>'); table=null; continue;
    }
    // heading
    if(/^##\s+/.test(ln)){ flush(); out.push('<h2>'+inline(ln.replace(/^##\s+/,''))+'</h2>'); i++; continue; }
    if(/^###\s+/.test(ln)){ flush(); out.push('<h3>'+inline(ln.replace(/^###\s+/,''))+'</h3>'); i++; continue; }
    if(/^#\s+/.test(ln)){ flush(); out.push('<h2>'+inline(ln.replace(/^#\s+/,''))+'</h2>'); i++; continue; }
    // hr
    if(/^\s*---+\s*$/.test(ln)){ flush(); out.push('<hr>'); i++; continue; }
    // quote
    if(/^\s*>\s?/.test(ln)){ flush(); let q=[]; while(i<lines.length && /^\s*>\s?/.test(lines[i])){ q.push(lines[i].replace(/^\s*>\s?/,'')); i++; } out.push('<blockquote>'+md(q.join('\n'))+'</blockquote>'); continue; }
    // unordered list
    if(/^\s*[-*•]\s+/.test(ln)){ closeTable(); if(list!=='ul'){ closeList(); out.push('<ul>'); list='ul'; }
      out.push('<li>'+inline(ln.replace(/^\s*[-*•]\s+/,''))+'</li>'); i++; continue; }
    // ordered list
    if(/^\s*\d+[.)]\s+/.test(ln)){ closeTable(); if(list!=='ol'){ closeList(); out.push('<ol>'); list='ol'; }
      out.push('<li>'+inline(ln.replace(/^\s*\d+[.)]\s+/,''))+'</li>'); i++; continue; }
    // blank
    if(!ln.trim()){ flush(); i++; continue; }
    // paragraph
    flush(); let p=[ln]; i++;
    while(i<lines.length && lines[i].trim() && !/^(#{1,3}\s|\s*[-*•]\s|\s*\d+[.)]\s|\s*>|\s*\|)/.test(lines[i]) && !/^\s*---+\s*$/.test(lines[i])){ p.push(lines[i]); i++; }
    out.push('<p>'+inline(p.join(' '))+'</p>');
  }
  flush();
  return out.join('\n');
}
function countSections(s){
  return (String(s||'').match(/^##\s+/gm)||[]).length;
}

/* ---------- Shared ---------- */
function getParam(k){ return new URLSearchParams(location.search).get(k); }
function bookById(id){ return BOOKS.find(b=>b.id===id); }
function totalQ(){ return BOOKS.reduce((n,b)=>n+b.questions.length,0); }
const KEYS = ['ก','ข','ค','ง','จ'];

/* ---------- Summary page ---------- */
function initSummary(){
  const side=document.getElementById('side');
  const body=document.getElementById('summary-body');
  const actions=document.getElementById('summary-actions');
  const bar=document.getElementById('readbar');
  const want=getParam('r');
  const cur = bookById(want) ? want : BOOKS[0].id;

  side.insertAdjacentHTML('beforeend', BOOKS.map(b=>`
    <a href="summary.html?r=${b.id}" class="${b.id===cur?'active':''}">
      <span>${b.icon||'📄'}</span> ${b.title}<span class="n">${b.questions.length}</span>
    </a>`).join(''));

  const b=bookById(cur);
  document.title = b.title + ' — สรุปเนื้อหา';
  body.innerHTML = `
    <span class="pill">บทที่ ${b.no}</span>
    <h1>${b.title}</h1>
    ${b.source?`<p style="color:#5a6478;font-size:15px;margin-top:-6px">ที่มา: ${b.source}</p>`:''}
    <div class="md">${md(b.summary)}</div>`;

  actions.innerHTML = `
    <a class="btn btn-primary" href="exam.html?r=${b.id}">✍️ ทำข้อสอบบทนี้ (${b.questions.length} ข้อ)</a>
    <button class="btn btn-ghost" onclick="window.print()">🖨️ พิมพ์/บันทึก PDF</button>`;

  const onScroll=()=>{
    const h=document.documentElement;
    const pct=Math.round(h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100);
    bar.style.width=Math.min(100,Math.max(0,pct))+'%';
  };
  document.addEventListener('scroll',onScroll,{passive:true}); onScroll();
}

/* ---------- Exam page ---------- */
function initExam(){
  const root=document.getElementById('quiz-root');
  const preset=getParam('r');
  const allMode=getParam('all')==='1';

  if(allMode) setTimeout(()=>startQuiz(BOOKS.map(b=>b.id),'all',true,true),0);

  const saved=loadHistory();

  root.innerHTML=`
    <div class="panel">
      <h2 style="margin-top:0">✍️ ตั้งค่าข้อสอบ</h2>
      <p class="field-hint">เลือกบทที่ต้องการ (เลือกได้หลายบท) หรือกด "ข้อสอบรวมทุกบท"</p>

      <div class="field-label">📚 บทที่ต้องการ</div>
      <div class="opt-group" id="pick">
        ${BOOKS.map(b=>`<button class="chip ${preset===b.id?'on':''}" data-id="${b.id}">${b.icon||'📄'} ${b.title} <span style="opacity:.7">(${b.questions.length})</span></button>`).join('')}
        <button class="chip" data-id="__all__">🔥 ทุกบท (${totalQ()})</button>
      </div>

      <div class="field-label">🔢 จำนวนข้อ</div>
      <div class="opt-group" id="cnt">
        <button class="chip on" data-v="all">ทั้งหมด</button>
        <button class="chip" data-v="10">10 ข้อ (สุ่ม)</button>
        <button class="chip" data-v="20">20 ข้อ (สุ่ม)</button>
        <button class="chip" data-v="30">30 ข้อ (สุ่ม)</button>
      </div>

      <div class="field-label">⚡ โหมดเฉลย</div>
      <div class="opt-group" id="mode">
        <button class="chip on" data-v="end">เฉลยตอนจบทั้งชุด</button>
        <button class="chip" data-v="immediate">เฉลยทันทีทุกข้อ</button>
      </div>

      <button class="btn btn-primary btn-block" id="go">🚀 เริ่มทำข้อสอบ</button>

      ${Object.keys(saved).length?`
      <div class="field-label" style="margin-top:22px">🏆 สถิติล่าสุดของคุณ</div>
      <div class="result-stats">
        ${Object.entries(saved).slice(0,6).map(([id,r])=>{
          const b=bookById(id); if(!b) return '';
          return `<div class="stat ${r.pct>=70?'ok':'bad'}"><b>${r.pct}%</b><span>${b.title}</span></div>`;
        }).join('')}
      </div>`:''}
    </div>`;

  const pick=root.querySelector('#pick');
  pick.addEventListener('click',e=>{
    const c=e.target.closest('.chip'); if(!c) return;
    if(c.dataset.id==='__all__'){
      const on=!c.classList.contains('on');
      pick.querySelectorAll('.chip').forEach(x=>x.classList.toggle('on',on&&x.dataset.id==='__all__'));
      if(on) pick.querySelectorAll('.chip:not([data-id="__all__"])').forEach(x=>x.classList.remove('on'));
    }else{
      pick.querySelector('[data-id="__all__"]').classList.remove('on');
      c.classList.toggle('on');
    }
  });
  const chipGroup=(id,cb)=>root.querySelector(id).addEventListener('click',e=>{
    const c=e.target.closest('.chip'); if(!c) return;
    root.querySelectorAll(id+' .chip').forEach(x=>x.classList.remove('on'));
    c.classList.add('on'); cb&&cb(c.dataset.v);
  });
  chipGroup('#cnt'); chipGroup('#mode');

  root.querySelector('#go').addEventListener('click',()=>{
    let ids=[...pick.querySelectorAll('.chip.on')].map(x=>x.dataset.id);
    if(!ids.length||ids[0]==='__all__') ids=BOOKS.map(b=>b.id);
    const cnt=root.querySelector('#cnt .chip.on').dataset.v;
    const mode=root.querySelector('#mode .chip.on').dataset.v;
    startQuiz(ids,cnt,mode==='immediate',false);
  });
}

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }

function startQuiz(ids,countN,immediate,fromAll){
  const pool=[];
  ids.forEach(id=>{ const b=bookById(id); if(b) b.questions.forEach((q,i)=>pool.push({...q,book:b})); });
  if(!pool.length){ alert('ยังไม่มีข้อสอบในบทนี้'); return; }
  shuffle(pool);
  const n = countN==='all' ? pool.length : Math.min(+countN,pool.length);
  const qs=pool.slice(0,n);

  const st={qs,i:0,sel:Array(qs.length).fill(null),done:Array(qs.length).fill(false),immediate,ids,countN};
  renderQuiz(st);
}

function renderQuiz(st){
  const root=document.getElementById('quiz-root');
  const q=st.qs[st.i];
  const sel=st.sel[st.i];
  const done=st.done[st.i];
  const book=q.book;
  const answered=st.done.filter(Boolean).length;

  root.innerHTML=`
    <div class="panel">
      <div class="q-top">
        <span class="q-count">ข้อ ${st.i+1} / ${st.qs.length}</span>
        <span class="q-topic">${book.icon||'📄'} ${book.title}</span>
        ${st.immediate?'<span class="q-topic" style="margin-left:auto">⚡ เฉลยทันที</span>':''}
      </div>
      <div class="bar"><i style="width:${(answered/st.qs.length*100)}%"></i></div>
      <div class="q-text">${esc(q.q)}</div>
      <div class="choices">
        ${q.choices.map((c,k)=>{
          let cls='choice';
          if(done){
            if(k===q.answer) cls+=' correct';
            else if(k===sel) cls+=' wrong';
          } else if(sel===k) cls+=' sel';
          return `<button class="${cls}" data-k="${k}" ${done?'disabled':''}>
            <span class="k">${KEYS[k]||k+1}</span><span>${esc(c)}</span></button>`;
        }).join('')}
      </div>
      ${done?explainBox(q,sel):''}
      <div class="q-nav">
        <button class="btn btn-ghost" id="prev" ${st.i===0?'disabled':''}>⬅️ ย้อนกลับ</button>
        ${st.i<st.qs.length-1
          ?`<button class="btn btn-primary" id="next">${(st.immediate||done)?'ข้อต่อไป ➡️':'ยังไม่ตอบ (ข้าม) ➡️'}</button>`
          :`<button class="btn btn-primary" id="finish">🏁 ดูผลการทำ</button>`}
      </div>
      <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
        ${st.qs.map((_,k)=>{
          let s='background:var(--line);';
          if(k===st.i) s='background:var(--brand);color:#fff;';
          else if(st.done[k]) s=st.sel[k]===st.qs[k].answer?'background:var(--ok);color:#fff;':'background:var(--bad);color:#fff;';
          else if(st.sel[k]!==null) s='background:var(--warn);color:#fff;';
          return `<button data-j="${k}" class="chip jump" style="width:36px;height:32px;padding:0;font-size:13px;${s}">${k+1}</button>`;
        }).join('')}
      </div>
    </div>`;

  root.querySelectorAll('.choice').forEach(el=>el.addEventListener('click',()=>{
    const k=+el.dataset.k;
    st.sel[st.i]=k;
    if(st.immediate){ st.done[st.i]=true; }
    renderQuiz(st);
  }));
  const prev=root.querySelector('#prev'); if(prev) prev.onclick=()=>{ st.i--; renderQuiz(st); };
  const next=root.querySelector('#next'); if(next) next.onclick=()=>{ if(!st.done[st.i]&&st.sel[st.i]!==null&&!st.immediate){ st.done[st.i]=true; renderQuiz(st); return;} st.i++; renderQuiz(st); };
  const fin=root.querySelector('#finish'); if(fin) fin.onclick=()=>{
    st.qs.forEach((_,k)=>{ if(!st.done[k]&&st.sel[k]!==null) st.done[k]=true; });
    showResult(st);
  };
  root.querySelectorAll('.jump').forEach(el=>el.onclick=()=>{ st.i=+el.dataset.j; renderQuiz(st); });
  window.scrollTo({top:0,behavior:'smooth'});
}

function explainBox(q,sel){
  const right = sel===q.answer;
  const head = right?'✅ <b>ถูกต้อง!</b>' : (sel===null?'⏱️ <b>ไม่ได้ตอบ</b>':'❌ <b>ผิด</b>');
  const ans = `<b>คำตอบ:</b> ${KEYS[q.answer]||q.answer+1}. ${esc(q.choices[q.answer])}`;
  return `<div class="explain ${right?'ok':(sel===null?'':'bad')}">${head} — ${ans}${q.explain?'<br>'+esc(q.explain):''}</div>`;
}

function showResult(st){
  const root=document.getElementById('quiz-root');
  const right=st.qs.filter((q,k)=>st.sel[k]===q.answer).length;
  const pct=Math.round(right/st.qs.length*100);
  const wrongIdx=st.qs.map((q,k)=>k).filter(k=>st.sel[k]!==st.qs[k].answer);

  // save history per book
  const perBook={};
  st.qs.forEach((q,k)=>{ const id=q.book.id; perBook[id]=perBook[id]||[0,0]; perBook[id][1]++; if(st.sel[k]===q.answer) perBook[id][0]++; });
  const hist=loadHistory();
  Object.entries(perBook).forEach(([id,[ok,tot]])=>{
    const p=Math.round(ok/tot*100);
    if(!hist[id]||p>=hist[id].pct) hist[id]={pct:p,ok:ok,tot:tot,at:Date.now()};
  });
  saveHistory(hist);

  const msg = pct>=90?'🎓 เก่งมาก! พร้อมสอบสุด ๆ' : pct>=70?'👏 ผ่าน! เกือบ perfect' : pct>=50?'💪 พอไหว ทบทวนอีกนิด' : '📖 กลับไปอ่านสรุปแล้วลองใหม่นะ';

  root.innerHTML=`
    <div class="panel">
      <div class="result-hero">
        <div class="score-ring" style="--p:${pct}"><span>${pct}%<small>${right}/${st.qs.length} ข้อ</small></span></div>
        <h2 style="margin:8px 0 0">${msg}</h2>
        <div class="result-stats">
          <div class="stat ok"><b>${right}</b><span>ถูก</span></div>
          <div class="stat bad"><b>${wrongIdx.length}</b><span>ผิด</span></div>
          <div class="stat"><b>${st.qs.length}</b><span>ทั้งหมด</span></div>
        </div>
        <div class="result-stats">
          ${Object.entries(perBook).map(([id,[ok,tot]])=>{
            const b=bookById(id); const p=Math.round(ok/tot*100);
            return `<div class="stat ${p>=70?'ok':'bad'}"><b>${p}%</b><span>${b.title}</span></div>`;
          }).join('')}
        </div>
      </div>

      ${wrongIdx.length?`
        <h3 style="margin-top:20px">📕 ข้อที่ต้องทบทวน (${wrongIdx.length})</h3>
        ${wrongIdx.map(k=>{
          const q=st.qs[k]; const sel=st.sel[k];
          return `<div class="review-item r-bad">
            <div class="q">${k+1}. ${esc(q.q)} <span class="pill">${q.book.title}</span></div>
            <div class="a">คำตอบของคุณ: <b class="bad">${sel===null?'ไม่ได้ตอบ':esc(q.choices[sel])}</b></div>
            <div class="a">คำตอบที่ถูก: <b class="ok">${esc(q.choices[q.answer])}</b></div>
            ${q.explain?`<div class="e">💡 ${esc(q.explain)}</div>`:''}
          </div>`;
        }).join('')}
        <div style="margin-top:14px"><a class="btn btn-ghost" href="summary.html?r=${st.ids[0]}">📖 กลับไปอ่านสรุป</a></div>
      `:`
        <div class="review-item r-ok" style="margin-top:16px;text-align:center">🎉 ตอบถูกทุกข้อ — สอบผ่านชัวร์!</div>
      `}

      <div class="q-nav" style="margin-top:22px">
        <button class="btn btn-primary" id="again">🔁 ทำข้อสอบชุดใหม่</button>
        <a class="btn btn-ghost" href="index.html">🏠 หน้าแรก</a>
      </div>
    </div>`;
  root.querySelector('#again').onclick=()=>location.href='exam.html';
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ---------- History ---------- */
function loadHistory(){ try{ return JSON.parse(localStorage.getItem('exam_history')||'{}'); }catch(e){ return {}; } }
function saveHistory(h){ try{ localStorage.setItem('exam_history',JSON.stringify(h)); }catch(e){} }
