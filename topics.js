// Shared list of topics (one page per booklet). ready:false = shown greyed as "בקרוב".
const TOPICS = [
  {slug:'misc',        name:'בעיות שונות',   ready:true},
  {slug:'growth',      name:'גדילה ודעיכה',  ready:true},
  {slug:'geometry',    name:'גיאומטריה',     ready:true},
  {slug:'probability', name:'הסתברות',       ready:true},
  {slug:'trig',        name:'טריגונומטריה',  ready:true},
  {slug:'statistics',  name:'סטטיסטיקה',     ready:true},
];

// Renders the topic links into #topics. `here` = slug of the current page ('' on the home page).
function renderTopics(here){
  const box = document.getElementById('topics'); if (!box) return;
  const base = here ? '../' : '';
  let h = `<a class="tp home${here?'':' cur'}" href="${base}">כל הנושאים</a>`;
  TOPICS.forEach(t => {
    if (!t.ready) h += `<span class="tp off" title="בקרוב">${t.name}</span>`;
    else h += `<a class="tp${t.slug===here?' cur':''}" href="${base}${t.slug}/"${t.slug===here?' aria-current="page"':''}>${t.name}</a>`;
  });
  box.innerHTML = h;
  const c = box.querySelector('.cur');   // center the current topic horizontally (no vertical scroll)
  if (c) box.scrollLeft += (c.getBoundingClientRect().left + c.offsetWidth/2) - (box.getBoundingClientRect().left + box.clientWidth/2);
}
