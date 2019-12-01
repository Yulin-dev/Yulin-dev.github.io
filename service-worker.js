/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2019/11/10/markdown手册/index.html","3070f3ba24e2031c3915b676ea323bec"],["2019/11/10/基于Butterfly的建站日志/index.html","9afc9e36a1bc4308d9a01e34c89ffbec"],["2019/11/12/ebook开发日志/index.html","467c4a09c2856a3b40bde40cf8fbc8d5"],["2019/11/12/开发备忘录/index.html","1f1bff13a66cbdbedafd76d884a2c148"],["2019/11/25/数据库/index.html","aa10a69a697a61ae621a238d811f96db"],["2019/11/26/Bug Daily/index.html","d7d60d4224e6aeb0a6074b453ef211a4"],["2019/11/26/DB2/index.html","646c60631a99b97bb55f5d6d8bdb505a"],["2019/11/26/NGSIM换道/index.html","ba5e5e108517c74050c1b24450dd301a"],["2019/11/26/分布式计算/index.html","8d1996f461124b274151ffa317c3c843"],["2019/11/26/南三阁/index.html","8023e3e8f1de47946789b0a891709edf"],["2019/11/26/大数据/index.html","54339b18ce91cdd3eee5152d3d4d21b0"],["2019/11/26/文本编辑器/index.html","e72f5fdf82b7fa7b9954de88c2ebd616"],["2019/11/26/爬虫/index.html","a72229ff639330aab3d78ac7d08055dd"],["2019/11/26/计算机网络/index.html","3fb7e0cbe2db97e698bd803414e315c3"],["2019/11/26/计算机网络实验/index.html","242fb0430a8be6d31fe6bd2dc1868f62"],["2019/11/26/长短句/index.html","2447f1f80a233d9bffc52bb1d6d598e2"],["2019/11/27/编译原理/index.html","715feb82a8cd006d4b6a69d93bcadff2"],["2019/11/27/软件工程课程笔记/index.html","6f77038be7f6ae8f78dded5da9bd0c80"],["archives/2019/11/index.html","ffd51f5486b7e971f1ac9162bfc00054"],["archives/2019/11/page/2/index.html","90b86efae9869bcddd0caf375f44b71e"],["archives/2019/index.html","23f0d4c3b30bfc572ef17c15b4661368"],["archives/2019/page/2/index.html","397e84128d0b690ea07228e792ae66f4"],["archives/index.html","d2621c0239f3235dfae36a3d0844a12d"],["archives/page/2/index.html","d4637322d737101b716448fec462480b"],["categories/NGSIM/index.html","cb28d306c323aefe3dcc13cb0f2fa438"],["categories/index.html","d5134304bd0304be9ffd34aa3dbef05d"],["categories/分布式计算/index.html","3265fba05a7cad48643bbf569c2698f7"],["categories/南三阁/index.html","7967465869893324f6ae95c7617afeb9"],["categories/大数据/index.html","83f585b28966dbbc6bdc8083a68e12a5"],["categories/学习笔记/index.html","637496b873368da61f389040ad0f8e28"],["categories/工具/index.html","b8049c6318a5049cb014332ebe899710"],["categories/开发日志/index.html","1440c375f39497eaa783922ba969ebfe"],["categories/手册/index.html","96e99aab408e2c477205187273a0c0cd"],["categories/数据库/index.html","25ff9fe19ac0e15a5d85170da1f6c023"],["categories/文哲/index.html","2d08b0763c7c6f18f0be04b305753961"],["categories/爬虫/index.html","04189c1e9ed81a366bc154a34ccb0eb4"],["categories/编译原理/index.html","c34761b52f3186adfa0530283190b846"],["categories/计算机网络/index.html","7525026efc3508d39298587dc7ef290d"],["categories/软件工程/index.html","335460ebf816e4e31f113cec1edf3147"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","3bc6cc470404b0af5b724cdd3968b9a4"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","7ac48696b0a4ea08760c8f0beea9d78a"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","c07de1b19e235c77d896d73339ec5121"],["tags/Bug/index.html","e11b6fed486a6b8da99a18f7c8116687"],["tags/DB2/index.html","62531cc5279c7e6a4ba10ff65e245d7a"],["tags/NGSIM/index.html","bedff0feb0fb18533df8355a98bab7ad"],["tags/debug/index.html","885cb63b7d435edb302a7e9b40e5e65d"],["tags/index.html","00c2d9800ebd01c5db5d1f146d484e98"],["tags/分布式计算/index.html","021811b7a074ed4da8706604fcc066c5"],["tags/南三阁/index.html","701f202224c8537ef974d0c5a05186dc"],["tags/大数据/index.html","d092d579c5618db1defc7aae4f6a84df"],["tags/学习笔记/index.html","ce7aeff9cdee846a29a313acb552e6fc"],["tags/建站日志-Butterfly/index.html","5a2c240b6f93c81a9ccf3ee0df43f220"],["tags/手册/index.html","fd63bdb3baf48a90882a8d9b2e33de15"],["tags/数据库/index.html","60905882b3b27ff0a20ce4961b269ccf"],["tags/文本编辑器使用手册/index.html","e8245ced5c03cbecb83432abaaa18bfc"],["tags/爬虫/index.html","69860f8fd77f60cf1f4b4ad7d58e2942"],["tags/编译原理/index.html","4954a9fe510b449f2c0733794a87e365"],["tags/计算机网络/index.html","0c191957173477683ce4dfbb941f3a5d"],["tags/计算机网络实验报告/index.html","538403152165e92e5ded451eb9a40983"],["tags/软件工程-课堂笔记/index.html","d098e416b4f2f6797bf2dee27c79469a"],["tags/长短句/index.html","83b0db348f50b75e310cfc232b30f0a7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







