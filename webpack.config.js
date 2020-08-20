const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/index.html',
          to: 'index.html',
        },
        {
          from: './src/match.html',
          to: 'match.html',
        },
        {
          from: './src/player.html',
          to: 'player.html',
        },
        {
          from: './src/css/materialize.min.css',
          to: 'css/materialize.min.css',
        },
        {
          from: './src/js/materialize.min.js',
          to: 'js/materialize.min.js',
        },
        {
          from: './src/js/nav.js',
          to: 'js/nav.js',
        },
        {
          from: './src/js/api.js',
          to: 'js/api.js',
        },
        {
          from: './src/js/db.js',
          to: 'js/db.js',
        },
        {
          from: './src/js/idb.js',
          to: 'js/idb.js',
        },
        {
          from: './src/nav.html',
          to: 'nav.html',
        },
        {
          from: './src/pages/matches.html',
          to: 'pages/matches.html',
        },
        {
          from: './src/pages/players.html',
          to: 'pages/players.html',
        },
        {
          from: './src/pages/team.html',
          to: 'pages/team.html',
        },
        {
          from: './src/pages/saved-matches.html',
          to: 'pages/saved-matches.html',
        },
        {
          from: './src/pages/saved-players.html',
          to: 'pages/saved-players.html',
        },
        {
          from: './src/manifest.json',
          to: 'manifest.json',
        },
        {
          from: './src/images/logo/logo.png',
          to: 'images/logo/logo.png',
        },
        {
          from: './src/images/logo/logo96.png',
          to: 'images/logo/logo96.png',
        },
        {
          from: './src/images/logo/logo128.png',
          to: 'images/logo/logo128.png',
        },
        {
          from: './src/images/logo/logo144.png',
          to: 'images/logo/logo144.png',
        },
        {
          from: './src/images/logo/logo192.png',
          to: 'images/logo/logo192.png',
        },
        {
          from: './src/images/logo/logo256.png',
          to: 'images/logo/logo256.png',
        },
        {
          from: './src/images/logo/logo384.png',
          to: 'images/logo/logo384.png',
        },
        {
          from: './src/images/logo/logo512.png',
          to: 'images/logo/logo512.png',
        },
        {
          from: './src/push.js',
          to: 'push.js',
        },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
    }),
  ],
};
