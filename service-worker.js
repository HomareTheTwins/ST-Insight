const CACHE_NAME = "ST-Insight-v1";

const urlsToCache = [
  "/ST-Insight/",
  "/ST-Insight/index.html",
  "/ST-Insight/style.css",

  "/ST-Insight/js/app.js",
  "/ST-Insight/js/history.js",
  "/ST-Insight/js/serve.js",
  "/ST-Insight/js/state.js",
  "/ST-Insight/js/ui.js",

  "/ST-Insight/manifest.json"
];

// インストール時にキャッシュ
self.addEventListener("install",(e)=>{

	e.waitUntil(
		caches.open(CACHE_NAME).then(cache=>{
			return cache.addAll(urlsToCache);
    })
  );
});

// リクエスト時にキャッシュ優先
self.addEventListener("fetch",(e)=>{

	e.respondWith(
		caches.match(e.request).then(res=>{
			return res || fetch(e.request)
		})
	)
})