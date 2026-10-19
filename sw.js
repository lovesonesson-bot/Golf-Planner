var N="sg-v1",A=["./","index.html","manifest.webmanifest","icon.svg","https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css","https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(N).then(function(c){return c.addAll(A)}))});
self.addEventListener("fetch",function(e){
 var u=new URL(e.request.url);
 if(u.origin===location.origin){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))}
 else if(u.hostname==="cdnjs.cloudflare.com"){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))}
});
