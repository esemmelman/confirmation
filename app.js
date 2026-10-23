'use strict';
// Every fresh page load starts at Chapter 1 with no selected verse.
history.replaceState(null, '', location.pathname + location.search + '#chapter-1');
let chapters = [];
let returnToVerse = false;
function renderChapter() {
  const showNote = location.hash === '#note-1-1';
  document.body.classList.toggle('note-mode', showNote);
  document.getElementById('chapter-view').hidden = showNote;
  document.getElementById('note-view').hidden = !showNote;
  document.getElementById('verse-panel').hidden = !showNote;
  if (showNote) {
    const verse = chapters.find(item => item.number === 1)?.verses[0];
    if (!verse) return;
    document.getElementById('detail-verse').textContent = `1  ${verse.text}`;
    const paragraphs = verseNotes['1-1'].paragraphs.map(runs => {
      const p = document.createElement('p');
      runs.forEach(run => {
        const element = document.createElement(run.bold ? 'strong' : 'span');
        element.textContent = run.text;
        p.append(element);
      });
      return p;
    });
    document.getElementById('note-content').replaceChildren(...paragraphs);
    document.getElementById('breadcrumb').textContent = 'VERSE 1:1';
    document.title = 'Genesis 1:1 · Study note';
    returnToVerse = true;
    window.scrollTo(0, 0);
    document.getElementById('note-back').focus();
    return;
  }
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
    const paragraph = document.createElement('div');
    paragraph.className = 'verse';
    paragraph.tabIndex = 0;
    paragraph.setAttribute('role', 'button');
    paragraph.addEventListener('keydown', event => {
      if (event.target === paragraph && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        paragraph.click();
      }
    });
    paragraph.setAttribute('aria-pressed', 'false');
    paragraph.addEventListener('click', () => {
      const selection = window.getSelection();
      if (selection && !selection.isCollapsed &&
          (paragraph.contains(selection.anchorNode) || paragraph.contains(selection.focusNode))) {
        return;
      }
      const wasSelected = paragraph.classList.contains('selected');
      document.querySelectorAll('.verse.selected').forEach(item => {
        item.classList.remove('selected');
        item.setAttribute('aria-pressed', 'false');
      });
      if (!wasSelected) {
        paragraph.classList.add('selected');
        paragraph.setAttribute('aria-pressed', 'true');
      }
    });
    const label = document.createElement('span');
    label.className = 'verse-number';
    label.textContent = verse.number;
    label.setAttribute('aria-label', `Verse ${verse.number}`);
    const text = document.createElement('span');
    text.className = 'verse-text';
    text.textContent = verse.text;
    if (number === 1 && verse.number === 1) {
      const star = document.createElement('a');
      star.className = 'note-star';
      star.href = '#note-1-1';
      star.textContent = ' *';
      star.setAttribute('aria-label', 'Open study note for Genesis 1:1');
      star.addEventListener('click', event => event.stopPropagation());
      text.append(star);
      paragraph.id = 'verse-1-1';
      if (returnToVerse) {
        paragraph.classList.add('selected');
        paragraph.setAttribute('aria-pressed', 'true');
      }
    }
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
  if (returnToVerse) {
    document.getElementById('verse-1-1')?.focus();
    returnToVerse = false;
  }
}
window.addEventListener('hashchange', renderChapter);
fetch('chapters.json?v=1.3.6').then(response => {
  if (!response.ok) throw new Error('Chapter request failed');
  return response.json();
}).then(data => { chapters = data; renderChapter(); }).catch(() => {
  document.getElementById('verses').replaceChildren();
  document.getElementById('error').hidden = false;
});
