# MultitaskCoder — Static Site

Complete static project ready for GitHub Pages.

## Structure
```
/
├── index.html
├── style.css
├── script.js
├── manifest.webmanifest
├── sw.js
├── .nojekyll
├── README.md
└── assets/
    ├── images/
    ├── icons/         (icon-192.png, icon-512.png)
    ├── fonts/
    └── videos/
├── pages/
├── components/
└── pdfs/
```

## Run locally
Open `index.html` directly, or serve with:
```
python3 -m http.server 8000
```
(Service worker requires http://, not file://)

## Deploy to GitHub Pages
1. Push these files to a repo
2. Settings → Pages → Source: `main` branch, root `/`
3. Done — the `.nojekyll` file ensures files are served as-is
