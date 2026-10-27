# Confirmation · Genesis

A responsive reader for Genesis chapters 1–3 from the supplied Google Doc. Select Chp. 1, Chp. 2, or Chp. 3 in the left menu to read its verses. Chapter links support browser history and direct linking.

## Publishing

GitHub Actions automatically deploys each push to `main` to GitHub Pages. Edit the files, commit, and push to publish an update. Each page load reads the latest chapters and Notes tab directly from the public Google Doc, matching note labels such as `1-1`. Keep the document shared as anyone with the link can view. The app preserves note paragraphs and bold text and replaces punctuation dashes in verses with periods. If Google is unavailable, the app labels and displays the saved copies in `chapters.json` and `notes.js`.

## Local preview

Every verse has an asterisk after selection. Its study view preserves the live document notes and adds source entries with bold names, plain text, and two blank lines between entries. The × removes only that source entry for that verse, persisting in the current browser using localStorage (or for the current visit if storage is blocked).

`commentaries.js` contains concise paraphrases from the existing Genesis 1 study material for Rashi, S’forno, Ramban, Unkelos, and Rabbi Steinsaltz, with links to the checked passages. Related comments and verses with no separate entry are identified. Plaut Torah, Etz Chaim Torah, and chapters 2–3 still require source text; these entries explicitly state that text has not been supplied. They must not be treated as completed commentary coverage. Live Google Doc refreshes do not replace this commentary data.

Run `python -m http.server 8000` in this directory, then open http://localhost:8000.
