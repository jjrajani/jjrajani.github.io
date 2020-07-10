"use strict";
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
var precacheConfig = [
    ["index.html", "296cb6b494bbbf7d1271a3c533737f4b"],
    ["static/css/main.75ef2ca4.css", "fa6854966d20c6ea825b83d85650a57e"],
    ["static/js/main.e19e7608.js", "779a9326ea03dac2f30a6886a93d235d"],
    ["static/media/ADP.deef05ad.png", "deef05add4de39444e863ddc6dd50417"],
    ["static/media/PSP.0a901ceb.png", "0a901ceb28e8155ab0f74f7b95619372"],
    [
      "static/media/cage-smash-ss.69a827e0.png",
      "69a827e00ffada147669923228bd3561"
    ],
    ["static/media/code_two.6adeb33d.png", "6adeb33d6a05836e3980220e9b101432"],
    [
      "static/media/collaborate.4a80f89e.png",
      "4a80f89ef2d7e79bf8284b8dd0bd09a0"
    ],
    [
      "static/media/culturalink.8f7d12fa.png",
      "8f7d12face003a1b3c7e4819a56f7fda"
    ],
    [
      "static/media/finger_point.785ecc77.png",
      "785ecc77ed3d3c20f424088762572704"
    ],
    [
      "static/media/humdrum_grill.34add34f.png",
      "34add34fac5747ab7670ee5b03faca1e"
    ],
    [
      "static/media/lost-in-the-trees.b4108e52.png",
      "b4108e52c812105d645624212a477365"
    ],
    [
      "static/media/mail-chimp.cb994926.png",
      "cb994926db7d9d9b79f8889147be9585"
    ],
    [
      "static/media/my-garden-ss.b2c2fbff.png",
      "b2c2fbffb77daf65afc7ca21d8c6c8a4"
    ],
    ["static/media/pineapple.cb176732.png", "cb1767321f67915723880f00fd102d75"],
    [
      "static/media/responseive_message.9be3ad7b.png",
      "9be3ad7b6670649960036d1a4bf8a6d1"
    ],
    ["static/media/the_labz.740cb889.png", "740cb8894713ba5f2a50f295792c2242"],
    [
      "static/media/twin_bridges_lake.a288fc74.png",
      "a288fc744b65b35848cb856b0d55e95d"
    ]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, t) {
    var a = new URL(e);
    return "/" === a.pathname.slice(-1) && (a.pathname += t), a.toString();
  },
  cleanResponse = function(e) {
    return e.redirected
      ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
          return new Response(t, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function(e, t, a, n) {
    var r = new URL(e);
    return (
      (n && r.pathname.match(n)) ||
        (r.search +=
          (r.search ? "&" : "") +
          encodeURIComponent(t) +
          "=" +
          encodeURIComponent(a)),
      r.toString()
    );
  },
  isPathWhitelisted = function(e, t) {
    if (0 === e.length) return !0;
    var a = new URL(t).pathname;
    return e.some(function(e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, t) {
    var a = new URL(e);
    return (
      (a.hash = ""),
      (a.search = a.search
        .slice(1)
        .split("&")
        .map(function(e) {
          return e.split("=");
        })
        .filter(function(e) {
          return t.every(function(t) {
            return !t.test(e[0]);
          });
        })
        .map(function(e) {
          return e.join("=");
        })
        .join("&")),
      a.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var t = e[0],
        a = e[1],
        n = new URL(t, self.location),
        r = createCacheKey(n, hashParamName, a, /\.\w{8}\./);
      return [n.toString(), r];
    })
  );
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!t.has(a)) {
                var n = new Request(a, { credentials: "same-origin" });
                return fetch(n).then(function(t) {
                  if (!t.ok)
                    throw new Error(
                      "Request for " +
                        a +
                        " returned a response with status " +
                        t.status
                    );
                  return cleanResponse(t).then(function(t) {
                    return e.put(a, t);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(
      caches
        .open(cacheName)
        .then(function(e) {
          return e.keys().then(function(a) {
            return Promise.all(
              a.map(function(a) {
                if (!t.has(a.url)) return e.delete(a);
              })
            );
          });
        })
        .then(function() {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function(e) {
    if ("GET" === e.request.method) {
      var t,
        a = stripIgnoredUrlParameters(
          e.request.url,
          ignoreUrlParametersMatching
        );
      t = urlsToCacheKeys.has(a);
      t ||
        ((a = addDirectoryIndex(a, "index.html")),
        (t = urlsToCacheKeys.has(a)));
      !t &&
        "navigate" === e.request.mode &&
        isPathWhitelisted(["^(?!\\/__).*"], e.request.url) &&
        ((a = new URL("/index.html", self.location).toString()),
        (t = urlsToCacheKeys.has(a))),
        t &&
          e.respondWith(
            caches
              .open(cacheName)
              .then(function(e) {
                return e.match(urlsToCacheKeys.get(a)).then(function(e) {
                  if (e) return e;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function(t) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    e.request.url,
                    t
                  ),
                  fetch(e.request)
                );
              })
          );
    }
  });
