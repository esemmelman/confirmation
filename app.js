'use strict';
let chapters = [];
function renderChapter() {
  const match = location.hash.match(/^#chapter-([123])$/);
  const number = match ? Number(match[1]) : 1;
  const chapter = chapters.find(item => item.number === number);
  if (!chapter) return;
  document.querySelectorAll('[data-chapter]').forEach(link => {
    if (Number(link.dataset.chapter) === number) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.getElementById('chapter-title').textContent = `Chapter ${number}`;
  document.getElementById('breadcrumb').textContent = `CHAPTER ${number}`;
  document.getElementById('position').textContent = `${number} / 3`;
  document.title = `Genesis ${number}`;
  const verses = chapter.verses.map(verse => {
    const paragraph = document.createElement('p');
    paragraph.className = 'verse';
    const label = document.createElement('span');
    label.className = 'verse-number';
    label.textContent = verse.number;
    label.setAttribute('aria-label', `Verse ${verse.number}`);
    const text = document.createElement('span');
    text.className = 'verse-text';
    text.textContent = verse.text;
    paragraph.append(label, text);
    return paragraph;
  });
  document.getElementById('verses').replaceChildren(...verses);
  for (const [id, target] of [['previous', number - 1], ['next', number + 1]]) {
    const link = document.getElementById(id);
    link.hidden = target < 1 || target > 3;
    link.href = `#chapter-${target}`;
  }
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', renderChapter);
fetch('chapters.json?v=1.1.0').then(response => {
  if (!response.ok) throw new Error('Chapter request failed');
  return response.json();
}).then(data => { chapters = data; renderChapter(); }).catch(() => {
  document.getElementById('verses').replaceChildren();
  document.getElementById('error').hidden = false;
});
