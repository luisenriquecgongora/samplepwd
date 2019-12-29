const staticCacheName = 'sitestatic';
const assets = [
  '',
  'index.html',
  'js/app.js',
  'js/ui.js',
  'js/materialize.min.js',
  'css/styles.css',
  'css/materialize.min.css',
  'img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons'
];

self.addEventListener('install',(evt)=>{
  evt.waitUntil(
    caches.open(staticCacheName)
    .then((cache)=>{
      console.log('caching shell assets');
      cache.addAll(assets)
      .then((cached)=>{
        console.log(cached);
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  );
})

self.addEventListener('activate',(evt)=>{
  console.log('service worker has been activated');
})

self.addEventListener('fetch',(evt)=>{
  evt.respondWith(
    caches.match(evt.request).then((cacheRes)=>{
      return cacheRes || fetch(evt.request);
    })
  );
});
