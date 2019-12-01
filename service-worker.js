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

var precacheConfig = [["2019/11/10/markdown手册/index.html","6645cb96649b119bad5fda4873a8ddbb"],["2019/11/10/基于Butterfly的建站日志/index.html","bd4ccc4b509c61945270704475cc95d4"],["2019/11/12/ebook开发日志/index.html","467c4a09c2856a3b40bde40cf8fbc8d5"],["2019/11/12/开发备忘录/index.html","1f1bff13a66cbdbedafd76d884a2c148"],["2019/11/25/数据库/index.html","07f45144d819865967ed4077ef9a3c66"],["2019/11/26/Bug Daily/index.html","d7d60d4224e6aeb0a6074b453ef211a4"],["2019/11/26/DB2/index.html","bec7ece7cab714fa3e16608a7523df09"],["2019/11/26/NGSIM换道/index.html","07b9931bc32f549754254a6d5f4d0284"],["2019/11/26/分布式计算/index.html","78290ccaea37d37f0ed2064517d8604b"],["2019/11/26/南三阁/index.html","a42e5be7906ed320a60daab91aea45f0"],["2019/11/26/大数据/index.html","f190a4cde6df9c5d837b2b2de9ccf593"],["2019/11/26/文本编辑器/index.html","e72f5fdf82b7fa7b9954de88c2ebd616"],["2019/11/26/爬虫/index.html","a72229ff639330aab3d78ac7d08055dd"],["2019/11/26/计算机网络/index.html","85f42e40f5f862f7b941fc633700f7e1"],["2019/11/26/计算机网络实验/index.html","62636dd9db6ba491157caac460b72092"],["2019/11/26/长短句/index.html","4f3acc9341d97e8b9c06c3aadcecaad2"],["2019/11/27/编译原理/index.html","715feb82a8cd006d4b6a69d93bcadff2"],["2019/11/27/软件工程课程笔记/index.html","6f77038be7f6ae8f78dded5da9bd0c80"],["archives/2019/11/index.html","fca65286b07b8c4e936324844cbfe193"],["archives/2019/11/page/2/index.html","63bec7488d61bc418fe480cebd605a12"],["archives/2019/index.html","c42d120ac477387b4e86ec60061010a1"],["archives/2019/page/2/index.html","021899a5d83a4067e778f5c5f120841a"],["archives/index.html","9f01c473f86f818ce16380766ea576d0"],["archives/page/2/index.html","35b71c76396acaab3a2374c95b861513"],["categories/NGSIM/index.html","dbd41168483486889eaef25bb0571d90"],["categories/index.html","2b0c022cf15e9e074a42c09052111324"],["categories/分布式计算/index.html","458913851bd9c1a388264924e78c8fef"],["categories/南三阁/index.html","cc266311d8f81522bbf4425485085290"],["categories/大数据/index.html","69c789930a2278638fbb141760ed6aba"],["categories/学习笔记/index.html","ed4d8db453e75c76012e12f8194c9f31"],["categories/工具/index.html","5ae242709837cbdd5f6f29bf19558ce6"],["categories/开发日志/index.html","80a1238b5e7d70e8d3877d1c9d4bcacc"],["categories/手册/index.html","a8a002a76f5b8daa5fc61165910cdd8f"],["categories/数据库/index.html","4686f515c550e04ff89d685379ea26e4"],["categories/文哲/index.html","dcdcbda25365b6604bfe174931b1a3ba"],["categories/爬虫/index.html","25ad35551a5f61c278e2b9c620bb4442"],["categories/编译原理/index.html","9d778559840b62ce7168bf87cbd8a6b0"],["categories/计算机网络/index.html","52f20455322b73c7613766ae0af68507"],["categories/软件工程/index.html","db0021d244a284158cf29faabfe0142f"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","2cfba46585aafed1f518c3b05d4302ab"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","bc9d548e95190552c50d3798cf91d49e"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","6886d8440fd8a783bbae82749571d22b"],["tags/Bug/index.html","83d73e0d9df123ffd732d4c71e0a9ef4"],["tags/DB2/index.html","7d539bef1f6b7c47e8f24071f7bdee35"],["tags/NGSIM/index.html","86762b46f78ebb13ff9c0dedb9c63d59"],["tags/debug/index.html","2c8c9e664340e6f1fceff5764e936684"],["tags/index.html","ce12a6187f333c157a064c40cf8bac84"],["tags/分布式计算/index.html","7193fe1c74442f363bafbfcd6281aa17"],["tags/南三阁/index.html","656fb9c49abec27fdacc44981b173dfd"],["tags/大数据/index.html","4d8555223855b94543b4fffe14797be7"],["tags/学习笔记/index.html","ddf5beb47058fcfd279f85499220d5a2"],["tags/建站日志-Butterfly/index.html","5699c328d653531ccb1d2040ed3e2e39"],["tags/手册/index.html","b693abc86689df32587ff27583903e91"],["tags/数据库/index.html","3073fb2a367a137f7d20b4f59b2b1f2e"],["tags/文本编辑器使用手册/index.html","6f74b40dfefbfed6dc87eb9e2bf457ee"],["tags/爬虫/index.html","76c0ed9099624d92bec504431e4158d0"],["tags/编译原理/index.html","057285cb1be3a690b8a0491c409fa9d5"],["tags/计算机网络/index.html","787e29792426ea8edff3a5ce7759ef7a"],["tags/计算机网络实验报告/index.html","6add6c34f560cfb6e12ae7d1d726763c"],["tags/软件工程-课堂笔记/index.html","f22efc2baef1b83b5720843f4ccb58f8"],["tags/长短句/index.html","ecd074cd65c4749f839144300f84b552"]];
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







