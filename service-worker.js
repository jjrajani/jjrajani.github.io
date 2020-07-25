"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","2ce0067507a8ddf20cea67a6f4fb323f"],["static/css/main.75ef2ca4.css","fa6854966d20c6ea825b83d85650a57e"],["static/js/main.edb3863f.js","071952e53b4c984e4a0ed54f7bdba7f9"],["static/media/ADP.deef05ad.png","deef05add4de39444e863ddc6dd50417"],["static/media/ADP_small.4e9211f3.png","4e9211f3e6413f63445aaaddab613e8a"],["static/media/PSP.0a901ceb.png","0a901ceb28e8155ab0f74f7b95619372"],["static/media/PSP_small.dfe64335.png","dfe64335976abcb59298e36751f37f1d"],["static/media/cage-smash-ss.69a827e0.png","69a827e00ffada147669923228bd3561"],["static/media/cage-smash-ss_small.375c1147.png","375c11471e5caa04b432ba822cfdff38"],["static/media/code_two.6adeb33d.png","6adeb33d6a05836e3980220e9b101432"],["static/media/collaborate.4a80f89e.png","4a80f89ef2d7e79bf8284b8dd0bd09a0"],["static/media/culturalink.8f7d12fa.png","8f7d12face003a1b3c7e4819a56f7fda"],["static/media/culturalink_small.1ec2582b.png","1ec2582b865707ad731cd07fe679860c"],["static/media/eureka_meal_planner.acd5172a.png","acd5172a67e31b37673c235a2edb3425"],["static/media/eureka_meal_planner_small.498cbe10.png","498cbe100a2633c4887bc7fd0169aa24"],["static/media/finger_point.785ecc77.png","785ecc77ed3d3c20f424088762572704"],["static/media/humdrum_grill.34add34f.png","34add34fac5747ab7670ee5b03faca1e"],["static/media/lost-in-the-trees.b4108e52.png","b4108e52c812105d645624212a477365"],["static/media/mail-chimp.cb994926.png","cb994926db7d9d9b79f8889147be9585"],["static/media/mail-chimp_small.237d7353.png","237d7353043932d38abae8a8da70813c"],["static/media/my-garden-ss.b2c2fbff.png","b2c2fbffb77daf65afc7ca21d8c6c8a4"],["static/media/my-garden-ss_small.bcbcebfb.png","bcbcebfb670396b6d75ece5910283649"],["static/media/my_dinova_small.7c1eb696.png","7c1eb6968d70904cd898014adc956c49"],["static/media/pineapple.cb176732.png","cb1767321f67915723880f00fd102d75"],["static/media/pineapple_small.35c18ff7.png","35c18ff771fee8aeff235c1be9d4b4ed"],["static/media/responseive_message.9be3ad7b.png","9be3ad7b6670649960036d1a4bf8a6d1"],["static/media/the_labz.740cb889.png","740cb8894713ba5f2a50f295792c2242"],["static/media/the_labz_small.0c1f7bff.png","0c1f7bffce8aa275f18464e8c279afc1"],["static/media/twin_bridges_lake.a288fc74.png","a288fc744b65b35848cb856b0d55e95d"],["static/media/twin_bridges_lake_small.635dfc3c.png","635dfc3c801dba4d7b3853164aa100fe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});