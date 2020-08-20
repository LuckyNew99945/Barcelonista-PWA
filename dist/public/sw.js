importScripts("precache-manifest.33d73ad75a4271b10d5afcd17f17ed98.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

console.log('hello from service worker');

workbox.routing.registerRoute(
  /https:\/\/api\.football-data\.org/,
  workbox.strategies.networkFirst()
);

workbox.precaching.precacheAndRoute(self.__precacheManifest);

