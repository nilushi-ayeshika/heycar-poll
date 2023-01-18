let cacheData = 'appV1'
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/bundle.js',
        '/static/js/vendors~main.chunk.js',
        '/static/js/main.chunk.js',
        '/index.html',
        'https://polls.apiblueprint.org/questions?page=1',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        '/question/',
        '/',
      ])
    })
  )
})

this.addEventListener('fetch', (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
        let requestUrl = event.request.clone()
        fetch(requestUrl)
      })
    )
  }
})
