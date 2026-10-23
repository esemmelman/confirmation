'use strict';
const sourceDocumentId = '1r-7YdhEpg_04QjzadfveJejzvSoJPBsuAOuKBHcplQE';
function parseChapterText(text) {
  const result = [];
  let chapter, verse;
  for (const raw of text.replace(/^\uFEFF/, '').split(/\r\n|\r|\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const heading = line.match(/^Chp\.\s*([123])\s*$/i);
    if (heading) {
      chapter = { number: Number(heading[1]), verses: [] };
      result.push(chapter);
      verse = null;
      continue;
    }
    if (!chapter) continue;
    const match = line.match(/^(\d+)\]\s*(.*)$/);
    if (match) {
      verse = { number: Number(match[1]), text: match[2] };
      chapter.verses.push(verse);
    } else if (verse) verse.text += '\n' + line;
  }
  if (result.length !== 3 || new Set(result.map(c => c.number)).size !== 3 ||
      result.some(c => !c.verses.length || c.verses.some(v => !v.text.trim()))) {
    throw new Error('The document does not contain three readable chapters.');
  }
  for (const chapter of result) for (const verse of chapter.verses) {
    verse.text = verse.text.replace(/\s*(?:[—–]|(?<!\w)-(?!\w))\s*/g, '. ').trim();
  }
  return result;
}
function parseNoteParagraphs(paragraphs) {
  const notes = {};
  let key = null;
  for (const original of paragraphs) {
    let runs = original.map(run => ({ ...run }));
    const text = runs.map(run => run.text).join('');
    const heading = text.match(/^\s*(\d+)\s*[-–—]\s*(\d+)(?:\s+|[:.]\s*|$)/);
    if (heading) {
      key = `${Number(heading[1])}-${Number(heading[2])}`;
      notes[key] ??= { title: key, paragraphs: [] };
      let skip = heading[0].length;
      runs = runs.map(run => {
        const count = Math.min(skip, run.text.length);
        skip -= count;
        return { ...run, text: run.text.slice(count) };
      }).filter(run => run.text);
    }
    if (key && runs.some(run => run.text.trim())) notes[key].paragraphs.push(runs);
  }
  for (const key of Object.keys(notes)) if (!notes[key].paragraphs.length) delete notes[key];
  return notes;
}
function parseNotesHtml(html) {
  // Parse in an inert document. Only plain text and bold emphasis reach the app.
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const boldClasses = new Set();
  for (const style of doc.querySelectorAll('style')) {
    for (const rule of style.textContent.matchAll(/\.([\w-]+)\s*\{([^}]+)\}/g)) {
      if (/font-weight\s*:\s*(?:bold|[6-9]00)\b/.test(rule[2])) boldClasses.add(rule[1]);
    }
  }
  const paragraphs = [...doc.body.querySelectorAll('p,h1,h2,h3,h4,h5,h6,li')].map(p => {
    const runs = [];
    function visit(node, inheritedBold) {
      if (node.nodeType === 3) { runs.push({ text: node.textContent, bold: inheritedBold }); return; }
      if (node.nodeType !== 1 || /^(SCRIPT|STYLE|IFRAME)$/.test(node.tagName)) return;
      if (node.tagName === 'BR') { runs.push({ text: '\n', bold: inheritedBold }); return; }
      const bold = inheritedBold || /^(B|STRONG)$/.test(node.tagName) ||
        [...node.classList].some(name => boldClasses.has(name)) ||
        /font-weight\s*:\s*(?:bold|[6-9]00)\b/.test(node.getAttribute('style') || '');
      node.childNodes.forEach(child => visit(child, bold));
    }
    visit(p, false);
    return runs;
  });
  return parseNoteParagraphs(paragraphs);
}
async function fetchDocumentTab(tab, format) {
  const url = new URL(`https://docs.google.com/document/d/${sourceDocumentId}/export`);
  url.search = new URLSearchParams({ format, tab, fresh: String(Date.now()) });
  const response = await fetch(url, { cache: 'no-store', credentials: 'omit', signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error('Google document request failed.');
  const content = await response.text();
  if (format === 'txt' && /<html/i.test(content)) throw new Error('Document requires sign-in.');
  if (format === 'html' && !/doc-content/.test(content)) throw new Error('Notes document unavailable.');
  return content;
}
async function loadLatestDocument() {
  const [chapterText, notesHtml] = await Promise.all([
    fetchDocumentTab('t.0', 'txt'),
    fetchDocumentTab('t.2b82ehkrvz5z', 'html')
  ]);
  return { chapters: parseChapterText(chapterText), notes: parseNotesHtml(notesHtml) };
}
