
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('cache').then(function (cache) {
      return cache.match(event.request).then(function (response) {
        // console.log('cache request: ' + event.request.url)
        var fetchPromise = fetch(event.request).then(
          function (networkResponse) {
            // if we got a response from the cache, update the cache
            // console.log(
            //   'fetch completed: ' + event.request.url,
            //   networkResponse
            // )
            if (networkResponse) {
              // console.debug(
              //   'updated cached page: ' + event.request.url,
              //   networkResponse
              // )
              cache.put(event.request, networkResponse.clone())
            }
            return networkResponse
          },
          function (event) {
            // rejected promise - just ignore it, we're offline!
            // console.log('Error in fetch()', event)
            event.waitUntil(
              caches.open('cache').then(function (cache) {
                // our cache here is named *cache* in the caches.open()
                return cache.addAll([
                  //cache.addAll(), takes a list of URLs, then fetches them from the server and adds the response to the cache.
                  // add your entire site to the cache- as in the code below; for offline access
                  '/', // do not remove this
                  '/index.html', //default
                  '/index.html?homescreen=1', //default
                  '/?homescreen=1', //default
                  'assets/codes/css/style.css', // configure as by your site ; just an example
                  'assets/images/icons/icon-72x72.png',
                  'assets/images/icons/icon-96x96.png',
                  'assets/images/icons/icon-128x128.png',
                  'assets/images/icons/icon-144x144.png',
                  'assets/images/icons/icon-152x152.png',
                  'assets/images/icons/icon-192x192.png',
                  'assets/images/icons/icon-384x384.png',
                  'assets/images/icons/icon-512x512.png', // add more icons path below as in this line. Check out the icons path in the icons folder.

                  // Do not replace/delete/edit the service-worker.js/ and manifest.js paths below
                  'manifest.js',
                  //These are links to the extenal social media buttons that should be cached; we have used twitter's as an example
                  'https://platform.twitter.com/widgets.js',
                ])
              })
            )
          }
        )
        // respond from the cache, or the network
        return response || fetchPromise
      })
    })
  )
})

self.addEventListener('message', event => {
  if (!event.data) {
    return
  }

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break;
    default:
      // NOOP
      break;
  }
})
