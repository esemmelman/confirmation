# Confirmation · Genesis

A responsive reader for Genesis chapters 1–3 from the supplied Google Doc. Select Chp. 1, Chp. 2, or Chp. 3 in the left menu to read its verses. Chapter links support browser history and direct linking.

## Publishing

GitHub Actions automatically deploys each push to `main` to GitHub Pages. Edit the files, commit, and push to publish an update. Each page load reads the latest chapters and Notes tab directly from the public Google Doc, matching note labels such as `1-1`. Keep the document shared as anyone with the link can view. The app preserves note paragraphs and bold text and replaces punctuation dashes in verses with periods. If Google is unavailable, the app labels and displays the saved copies in `chapters.json` and `notes.js`.

The reader renders `chapters.js` and `notes.js` immediately, then refreshes from Google in the background with an eight-second deadline. Updating the saved chapter text requires regenerating `chapters.js` from `chapters.json`. A slow or unavailable Google Doc never blocks reading or chapter navigation.

## Local preview

An asterisk appears on a selected verse only when its chapter-verse label has content in the Google Doc Notes tab. The study view displays only that note, preserving its paragraphs and bold text. `notes.js` is a saved copy of the same tab for immediate and offline display. The separate Google Doc Commentary tab is study material and is not appended to asterisk notes.

Run `python -m http.server 8000` in this directory, then open http://localhost:8000.
