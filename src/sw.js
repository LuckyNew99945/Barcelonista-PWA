console.log('hello from service worker');

workbox.routing.registerRoute(
  /https:\/\/api\.football-data\.org/,
  workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);
