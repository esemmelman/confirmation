'use strict';
// Every fresh page load starts at Chapter 1 with no selected verse.
history.replaceState(null, '', location.pathname + location.search + '#chapter-1');
let chapters = [];
let returnToVerse = null;
const removalKey = 'genesis-removed-commentaries-v1';
let removedCommentaries;
try {
  const saved = JSON.parse(localStorage.getItem(removalKey) || '[]');
  removedCommentaries = new Set(Array.isArray(saved) ? saved.filter(item => typeof item === 'string') : []);
} catch { removedCommentaries = new Set(); }
function commentaryElements(verseKey) {
  return (verseCommentaries[verseKey] || []).filter(entry => !removedCommentaries.has(`${verseKey}:${entry.id}`)).map(entry => {
    const paragraph = document.createElement('p');
    paragraph.className = 'commentary-entry';
    const name = document.createElement('strong');
    name.textContent = entry.name;
    const text = document.createElement('span');
    text.textContent = ' ' + (entry.text || 'Commentary text has not been supplied for this verse.');
    paragraph.append(name, text);
    if (entry.url) {
      const link = document.createElement('a');
      link.href = entry.url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.className = 'commentary-source';
      link.textContent = ' Source ↗';
      link.setAttribute('aria-label', `Read ${entry.name} source for Genesis ${verseKey.replace('-', ':')}`);
      paragraph.append(link);
    }
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'remove-commentary';
    remove.textContent = '×';
    remove.setAttribute('aria-label', `Remove ${entry.name} commentary for Genesis ${verseKey.replace('-', ':')}`);
    remove.addEventListener('click', () => {
      removedCommentaries.add(`${verseKey}:${entry.id}`);
      try { localStorage.setItem(removalKey, JSON.stringify([...removedCommentaries])); }
      catch { /* Removal still works for this visit if storage is unavailable. */ }
      const next = paragraph.nextElementSibling?.querySelector('button') || paragraph.previousElementSibling?.querySelector('button');
      paragraph.remove();
      (next || document.getElementById('note-back')).focus();
    });
    paragraph.append(remove);
    return paragraph;
  });
}
function renderChapter() {
  const noteMatch = location.hash.match(/^#note-(\d+)-(\d+)$/);
  const noteKey = noteMatch ? `${Number(noteMatch[1])}-${Number(noteMatch[2])}` : null;
  const noteVerse = noteMatch ? chapters.find(item => item.number === Number(noteMatch[1]))?.verses.find(item => item.number === Number(noteMatch[2])) : null;
  const showNote = Boolean(noteKey && (verseNotes[noteKey] || verseCommentaries[noteKey]) && noteVerse);
  document.body.classList.toggle('note-mode', showNote);
  document.getElementById('chapter-view').hidden = showNote;
  document.getElementById('note-view').hidden = !showNote;
  document.getElementById('verse-panel').hidden = !showNote;
  if (showNote) {
    const chapterNumber = Number(noteMatch[1]);
    const verse = noteVerse;
    document.getElementById('note-back').href = `#chapter-${chapterNumber}`;
    document.getElementById('note-view').setAttribute('aria-label', `Genesis ${chapterNumber}:${verse.number} study note`);
    document.getElementById('detail-verse').textContent = `${verse.number}  ${verse.text}`;
    const paragraphs = (verseNotes[noteKey]?.paragraphs || []).map(runs => {
      const p = document.createElement('p');
      runs.forEach(run => {
        const element = document.createElement(run.bold ? 'strong' : 'span');
        element.textContent = run.text;
        p.append(element);
      });
      return p;
    });
    const introduction = document.createElement('p');
    introduction.className = 'commentary-introduction';
    introduction.textContent = 'Commentaries below are concise summaries. Unavailable texts are marked. The × removes an entry in this browser.';
    document.getElementById('note-content').replaceChildren(...paragraphs, introduction, ...commentaryElements(noteKey));
    document.getElementById('breadcrumb').textContent = `VERSE ${chapterNumber}:${verse.number}`;
    document.title = `Genesis ${chapterNumber}:${verse.number} · Study note`;
    returnToVerse = noteKey;
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
    const verseKey = `${number}-${verse.number}`;
    paragraph.id = `verse-${verseKey}`;
    if (verseNotes[verseKey]?.paragraphs.length || verseCommentaries[verseKey]) {
      const star = document.createElement('a');
      star.className = 'note-star';
      star.href = `#note-${verseKey}`;
      star.textContent = ' *';
      star.setAttribute('aria-label', `Open study note for Genesis ${number}:${verse.number}`);
      star.addEventListener('click', event => event.stopPropagation());
      text.append(star);
      if (returnToVerse === verseKey) {
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
    document.getElementById(`verse-${returnToVerse}`)?.focus();
    returnToVerse = null;
  }
}
window.addEventListener('hashchange', renderChapter);
async function initialize() {
  const status = document.getElementById('sync-status');
  try {
    const latest = await loadLatestDocument();
    chapters = latest.chapters;
    Object.keys(verseNotes).forEach(key => delete verseNotes[key]);
    Object.assign(verseNotes, latest.notes);
    status.textContent = 'Latest document loaded';
  } catch (error) {
    try {
      const response = await fetch('chapters.json?v=1.5.0');
      if (!response.ok) throw new Error('Saved chapter request failed');
      chapters = await response.json();
      status.textContent = 'Google Doc unavailable. Showing saved text; reload to retry.';
    } catch {
      status.textContent = '';
      document.getElementById('verses').replaceChildren();
      document.getElementById('error').hidden = false;
      return;
    }
  }
  renderChapter();
}
initialize();
