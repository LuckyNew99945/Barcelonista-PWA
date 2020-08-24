console.log('hello from service worker');

workbox.routing.registerRoute(
  /https:\/\/api\.football-data\.org/,
  workbox.strategies.networkFirst()
);

self.addEventListener('push', (event) => {
  const title = 'Good!Now U Are Barcelonista';
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {
  ignoreUrlParametersMatching: [/.*/],
});
