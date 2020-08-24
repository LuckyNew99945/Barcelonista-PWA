importScripts("precache-manifest.d36de8790b3ceb8e0b12c9f236e13543.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

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

