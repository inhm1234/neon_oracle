self.addEventListener("install",()=>self.skipWaiting());

self.addEventListener("fetch",function(e){
  e.respondWith(fetch(e.request).catch(()=>cacheFirst(e.request)));
});

function cacheFirst(req){
  return caches.match(req);
}