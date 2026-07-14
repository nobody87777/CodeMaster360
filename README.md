# MultitaskCoder — Static Site

Clean multi-file build ready for GitHub Pages.

## Structure
```
/
├── index.html              # Markup only
├── style.css               # All styles
├── script.js               # All behaviour + PWA registration
├── sw.js                   # Service worker (offline cache)
├── manifest.webmanifest    # PWA manifest
├── assets/
│   ├── images/
│   ├── icons/              # PWA + favicon
│   ├── fonts/
│   └── videos/
├── pages/                  # Extra HTML pages (optional)
├── components/             # Reusable HTML snippets (optional)
└── pdfs/                   # Downloadable PDFs (optional)
```

## Run locally
Just open `index.html` in a browser, or serve the folder:
```
python3 -m http.server
```

## Deploy on GitHub Pages
1. Push this folder to a repo.
2. Settings → Pages → Deploy from branch → `/root`.
3. Done — all paths are relative.
