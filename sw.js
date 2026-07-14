const CACHE = "mtcoder-v1";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "script.js",
  "manifest.webmanifest",
  "assets/icons/favicon.ico",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png"
];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e) => {
  const { request } = e;
  if (request.method !== "GET") return;
  e.respondWith(
    fetch(request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(request).then((r) => r || caches.match("index.html")))
  );
});
