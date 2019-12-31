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

var precacheConfig = [["2019/11/10/markdown手册/index.html","f832f40fa014c5c5c3782d43a20ff67c"],["2019/11/10/基于Butterfly的建站日志/index.html","115f7e406905b62d30e6864001cc51fb"],["2019/11/11/DB2-数据库最新研究/index.html","3260aec405e14848a5084759332f08d6"],["2019/11/12/ebook开发日志/index.html","fdb19df7d694ed6538fccb11ed19116d"],["2019/11/12/开发备忘录/index.html","10968df1621b6c0e0d8bc331de7faa5e"],["2019/11/25/数据库/index.html","0b7bd12edd230a94c126e20cb629050b"],["2019/11/26/Bug Daily/index.html","e071daa701d6ad8c619c6b7bdde7dde0"],["2019/11/26/DB2/index.html","ef9be70ea40a48b01033f3a55457ba4e"],["2019/11/26/NGSIM数据集/index.html","3acc0f5b76e2fb44abf71cf2264aa4b8"],["2019/11/26/iBook开发笔记/index.html","a6e4fd0d988dc9d11b252ef846a69dab"],["2019/11/26/iWork需求规约/index.html","f4fa133a0470dfce0358d06a811d7e5b"],["2019/11/26/分布式计算/index.html","ddd5e2b3943d71f59e067fbcda9e38f5"],["2019/11/26/南三阁/index.html","47268e187aafa5926e6172b0e5802147"],["2019/11/26/大数据/index.html","e8c7cfa56f324379292a86c0fd2b9b83"],["2019/11/26/挖个坑埋点土/index.html","9c8c26b5ef05a4718a52114368851b53"],["2019/11/26/文本编辑器/index.html","072682d98637f72c19585861103eb352"],["2019/11/26/爬虫/index.html","38e1c8be07b1f37027ab1a7b77779712"],["2019/11/26/编译原理复习/index.html","d055b1b19c7f1e15ab63e377c16e3769"],["2019/11/26/计算机网络/index.html","63a17694375a5c9538bcd42745023acd"],["2019/11/26/计算机网络MOOC/index.html","20c544534d4b0aa4478681ec3a60c612"],["2019/11/26/计算机网络实验/index.html","d95a05b9476491a94277c2f0c1f9fbc6"],["2019/11/26/长短句/index.html","ff06f065dcdd996f16f134b350f4a53d"],["2019/11/27/编译原理/index.html","b9050c858e0e70446d357f399cddd01f"],["2019/11/27/软件工程/index.html","d128d0ad2c9d24b5071c627d7786efcf"],["2019/12/15/iWork需求分析规约/index.html","e761dd6ded73f0171191f9824ce5f85f"],["archives/2019/11/index.html","0d08e9abc6874cea5498710c8fc1da1f"],["archives/2019/11/page/2/index.html","b46175c0f9f8b050afea5631c503f5e9"],["archives/2019/11/page/3/index.html","c1100185c7fe45e8f6e579b28eeda4f5"],["archives/2019/12/index.html","c252b90352c33e55b08614daa8326fdb"],["archives/2019/index.html","342d647f86ff246e3d0aab6ef3e73358"],["archives/2019/page/2/index.html","ba0a615f0213140ea8e98ab6d3fc8b15"],["archives/2019/page/3/index.html","72f9d0fd5bb68900a927d8bf8a80c9f6"],["archives/index.html","16e892c471beb5e40e6c2c4fcbee4663"],["archives/page/2/index.html","8f97e098b7bbc0cb56c0956c75cd02d9"],["archives/page/3/index.html","6b16240ce16bca0d7a58f39c7a9f1278"],["categories/Lab/index.html","b2a15c48d8e6ff91c1b078cb22ed8a03"],["categories/index.html","ad13a0aaaf4c850dbd711f02aca819f1"],["categories/分布式计算/index.html","d1efc8d9e02adedfe546d2a933352dab"],["categories/南三阁/index.html","5a48ae53e922050ee9544ad67dc2981a"],["categories/大数据/index.html","4fdf151561e4ea50793f37ed76fd063e"],["categories/学习笔记/index.html","97c2c5188e3de7defed88b399acca806"],["categories/工具/index.html","90d471233f70f15defe43d7f5d9670a2"],["categories/开发日志/index.html","a56d5e92fe9d89970d6cd0287215ae59"],["categories/开发笔记/index.html","6942aed3e044f33ebb4b8d109cf47612"],["categories/手册/index.html","2d0f8164ed41eda4c5d5e7a5a07fef1a"],["categories/数据库/index.html","91993707ca7f5bdf69dc1e1f07fd4634"],["categories/文哲/index.html","37766ac1897ce07934a87bbb291da8bf"],["categories/爬虫/index.html","a362036705f81aab32223403e5ee5c47"],["categories/编译原理/index.html","b4f11dfffe60645eaa0381d7af276d3d"],["categories/计算机网络/index.html","a74b22a3ed8d19926ffc722a7106ca24"],["categories/课程/index.html","537fa0eeb61618f2916a3ea88cc02e79"],["categories/软件工程文档/index.html","3afcefac4f801c6f4155c5101797a915"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","6e4dcaa5c7e0c12f055e9b2be89bd4bd"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","36e07942d9cc066f938165f880aefd61"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","31eac76f0622ac921dd9461368ced1c9"],["page/3/index.html","a8b960636b0e04dd92ddc400d60b43e7"],["tags/Bug/index.html","5cd3fe74d57b3f25576a14b0fcb5c89c"],["tags/DB2/index.html","9f0424ca0f01036139ef0781954f573b"],["tags/NGSIM-数据集/index.html","afb0de4a0f7fc72746f2bd7368e215e7"],["tags/debug/index.html","039f6cd35a899616df8ed3c9b9e52197"],["tags/index.html","28d0dbc0704a987b4f1869bac68fc5bf"],["tags/分布式计算/index.html","b3398aa339fa8485eb0df3c2626e40a8"],["tags/南三阁/index.html","11b0976b36a6ed0ca964cab83db97848"],["tags/大数据/index.html","6ca842420c65bee493088ff3de86579f"],["tags/学习笔记/index.html","4fa4930cab7b53456c5d54bb39a83778"],["tags/建站日志-Butterfly/index.html","c79659df97719c71f2e5b7adca6c9ef2"],["tags/开发笔记/index.html","c8abf7eade155889a67e695c2d036947"],["tags/手册/index.html","7f59e69814749167a03356362364cdd9"],["tags/数据库/index.html","12f4571815830e04487a9a23dddbf393"],["tags/文本编辑器使用手册/index.html","80d10d12e1131f972048c40c6fe568fe"],["tags/爬虫/index.html","30deb350e027dccf4748d4eb678b6146"],["tags/编译原理/index.html","96cbbde0a0e82ac51a60cc61c59599d3"],["tags/编译原理PPT复习笔记/index.html","85be894a17726b7f9e507973544bca14"],["tags/计算机网络/index.html","1840e93a7050f568151fa58314d9744f"],["tags/计算机网络MOOC/index.html","11b9d63c9a7e9d8a98a41cb91accdffd"],["tags/计算机网络实验报告/index.html","a8ea7a49ffd2669ec336d41c079baff6"],["tags/软件工程/index.html","f6d5571d513f04629300d4534f20e819"],["tags/软件工程文档/index.html","7fcc7174f09e8e17f42493b2dc818b44"],["tags/长短句/index.html","8cf14f4b0851bb590cd5d37c5523e1ab"]];
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







