# Confirmation · Genesis

A responsive reader for Genesis chapters 1–3 from the supplied Google Doc. Select Chp. 1, Chp. 2, or Chp. 3 in the left menu to read its verses. Chapter links support browser history and direct linking.

## Publishing

GitHub Actions automatically deploys each push to `main` to GitHub Pages. Edit the files, commit, and push to publish an update. The text is a snapshot of the source document; changes to Google Docs are not automatically imported. Chapter text is stored in `chapters.json`.

## Local preview

Run `python -m http.server 8000` in this directory, then open http://localhost:8000.
