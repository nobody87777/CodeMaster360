This folder is reserved for reusable HTML snippets/partials.

This is a static site with no build step, so there's no template
mechanism that can "include" a file from here into index.html
automatically — that would require a static site generator or a bit
of JavaScript (e.g. fetch + innerHTML), which was out of scope for a
faithful, framework-free conversion.

Note on the icons specifically: the page uses ~20 inline `<svg>` icons
(from the Lucide icon set). They were intentionally kept inline in
index.html rather than extracted into separate files here or in
assets/icons/. Each icon uses `stroke="currentColor"` to inherit its
color from the surrounding Tailwind text-color class, and a few use
`group-hover:` utilities that only work while the SVG is a real
descendant of its parent button in the DOM. Moving them to standalone
files and loading them via `<img>` would make them opaque images that
can no longer inherit color or react to hover state, which would
visibly change the design — so they were left as-is per the
"don't change colors/animations" requirement.
