self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", () => {
  // 캐시를 사용하지 않습니다.
  // 기존 service worker 파일은 보관하되, 현재 프로젝트에서는 오프라인 캐시 기능을 비활성화합니다.
});