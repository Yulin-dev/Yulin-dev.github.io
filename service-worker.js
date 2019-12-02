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

var precacheConfig = [["2019/11/10/markdown手册/index.html","75bb567a67ce963ee4506f5e3c994f6f"],["2019/11/10/基于Butterfly的建站日志/index.html","49d00d5d393bd5b58d50f085b05027e8"],["2019/11/12/ebook开发日志/index.html","7905d246d879204f23702e3b2eb2ab1d"],["2019/11/12/开发备忘录/index.html","23d655f600b69726425f47202075e78a"],["2019/11/25/数据库/index.html","69a810f3bb7fb260daafb428cbf44d56"],["2019/11/26/Bug Daily/index.html","3d40ccb7d34233ac3beb5433c6fd372d"],["2019/11/26/DB2/index.html","764e529d88eb67865ac57f7d0aac5d81"],["2019/11/26/NGSIM数据集/index.html","0c378cdcb3c35182cbbf703afd1f4531"],["2019/11/26/分布式计算/index.html","5a8380b49cc79232df65e2ea0da97f5e"],["2019/11/26/南三阁/index.html","0041df7339e07d82b5c62519526f1309"],["2019/11/26/大数据/index.html","578cab1c9cb91aa648c1c268487d9983"],["2019/11/26/文本编辑器/index.html","f5a628019067791798e9a63932c20440"],["2019/11/26/爬虫/index.html","581cd8ce6fa4762e1ff72857321301ba"],["2019/11/26/计算机网络/index.html","3116ad510acf78321c530aa935a97e65"],["2019/11/26/计算机网络实验/index.html","198bd57f2cc33c6bb8e4aedd61d4c636"],["2019/11/26/长短句/index.html","5af44d5c831551eaefe496f8bffabc94"],["2019/11/27/编译原理/index.html","a7635d2ef2f9230d4d5842d91e8f0df0"],["2019/11/27/软件工程课程笔记/index.html","2356432f5706377cb70ff11d1f4b700e"],["archives/2019/11/index.html","cdf71e05e6af8f18e467fac975ab4d47"],["archives/2019/11/page/2/index.html","d2002f1f94345d9b8df49308eeba9a75"],["archives/2019/index.html","ab6fd47f9fe962241e051d18292aa5c3"],["archives/2019/page/2/index.html","b430df1e10b6a6c8509d061fd3677581"],["archives/index.html","05917db9f03441705753e747016fd728"],["archives/page/2/index.html","c638e9ef28300e9ddbfe68cd35406a16"],["categories/Lab/index.html","009e4dde34d528bdbb997a1e2de7b925"],["categories/index.html","cea9586749e55715da9af2c3eaf038b6"],["categories/分布式计算/index.html","6e6a8a561555d3cd574e1656db648e0c"],["categories/南三阁/index.html","221a976c5ab4f70999f1c247e7c6376a"],["categories/大数据/index.html","12acf2ec7b29bb5d1ec52f8d8ee22115"],["categories/学习笔记/index.html","1c837620bf2465d7a254a2fd6ffd1839"],["categories/工具/index.html","241575f88e9fb362bf069d2ac0e2dfeb"],["categories/开发日志/index.html","43d4fe478fbc2d92293483034a74dc31"],["categories/手册/index.html","34abbd135cb25aad56f3f5c039ca6e9c"],["categories/数据库/index.html","399db520c17eba844862715decba1302"],["categories/文哲/index.html","bcb6a0f1e0f7aa9ccc964627dfbdc728"],["categories/爬虫/index.html","d13cd283c1af5ba7cb86d9be7e53d1dc"],["categories/计算机网络/index.html","8aff7d95ff80c35bbbde348bb9d8cd02"],["categories/课程/index.html","de486c0825fdbb4cdac429be4119bdc8"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","e349d8a0e055063cb9370949cd4a5dfe"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","1ac9de8fb1e84622e37f6748f3237398"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","3dfdac1f9a66f85b86abee4e874543b5"],["tags/Bug/index.html","a0dc626649048d94ade29f84a90da3a5"],["tags/DB2/index.html","7e346b05be774c3f3cebfc8aa8ff8ca0"],["tags/NGSIM-数据集/index.html","b94953176feb28bf94adc82d3a058a7f"],["tags/debug/index.html","9895bfbad083395c2663044cee5ed9f3"],["tags/index.html","c937336efe5857d9351da14444dae6e8"],["tags/分布式计算/index.html","caa2eeb806c343d1bdca7077e9d34717"],["tags/南三阁/index.html","83e454d58412b630757ef2de177b4522"],["tags/大数据/index.html","5ce87c277cb998ac3a6dac718f91523c"],["tags/学习笔记/index.html","84c8ffcee7eebe651b93f5b94d3043ad"],["tags/建站日志-Butterfly/index.html","ec6d7a5a14cf7522d6c0324759618fe3"],["tags/手册/index.html","3338975d8adafda0f5bde01602b3af6a"],["tags/数据库/index.html","6a7d3a5b0959802cf1a97cd0073aece5"],["tags/文本编辑器使用手册/index.html","5463811aa12738a78a45091acdf186a0"],["tags/爬虫/index.html","909dbd9f6f49d694be019f8521f30cc7"],["tags/编译原理/index.html","29623dc52af3421651dcef8d01f59237"],["tags/计算机网络/index.html","4e2dc5899c9cfccafa68d6227efefa08"],["tags/计算机网络实验报告/index.html","b1822e98384337775631e888eea7545c"],["tags/软件工程/index.html","37d4bfbc040c332ba5535548f46e4fe9"],["tags/长短句/index.html","db9e1cfe07074bca14bfe152fc241854"]];
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







