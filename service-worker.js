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

var precacheConfig = [["2019/11/10/markdown手册/index.html","0451683fc6ef4c069b9d613de240c287"],["2019/11/10/基于Butterfly的建站日志/index.html","3942a396ffb1e7cc1c11ff82df4805d5"],["2019/11/12/ebook开发日志/index.html","56024a466e4f85642a020d1696f975bd"],["2019/11/12/开发备忘录/index.html","2f5105ecb2be34ee58ad9d5270dc5126"],["2019/11/25/数据库/index.html","7619e2f93e904e2e664d01b100b60292"],["2019/11/26/Bug Daily/index.html","2af33a019ed69cd348d773fef2548145"],["2019/11/26/DB2/index.html","430c0fd5d233c0b6322c6dd3f82b0ef9"],["2019/11/26/NGSIM数据集/index.html","647d69658c8be7127854a5d484fdbabe"],["2019/11/26/iBook开发笔记/index.html","789e1d7cbf35550f89674d75530ed8b4"],["2019/11/26/分布式计算/index.html","da5db505dca49bce3ae69da2f29665da"],["2019/11/26/南三阁/index.html","f680dea84c7c54be0412f2f6834d30a4"],["2019/11/26/大数据/index.html","a9760e2e36d4930b02c1b37b0fa353e0"],["2019/11/26/挖个坑埋点土/index.html","638f52851e9ad8230676248e7e9e3fb8"],["2019/11/26/文本编辑器/index.html","7f61b14cf08ce98d3c75828957fca863"],["2019/11/26/爬虫/index.html","c47bf9e5862577eaf553c0dc8608192d"],["2019/11/26/计算机网络/index.html","b1135c925731632aa1658b0a65d7d2b3"],["2019/11/26/计算机网络实验/index.html","cb6e7fe4f6970a56778919b5fad94eab"],["2019/11/26/长短句/index.html","61a68d1b3cb923d9ca58474e595b7192"],["2019/11/27/编译原理/index.html","2143b82fac30e04bc718bc195805e34d"],["2019/11/27/软件工程/index.html","82223d4b7d6459118365fdf4a1886cf9"],["archives/2019/11/index.html","d5d280af804379937de5abbefa5e94cb"],["archives/2019/11/page/2/index.html","ee8afbff1c53c0bf6870396085593733"],["archives/2019/index.html","9fea999759cae613463ad2c6146b9924"],["archives/2019/page/2/index.html","bd14bf4f47d218238bed61429e1a8ddd"],["archives/index.html","e1e701c56e922f1b1a15ce97323cc2df"],["archives/page/2/index.html","5444cf0104d5b7db51a7c5552e083324"],["categories/Lab/index.html","cb9a59ed119f3138a9f21633de33d05a"],["categories/index.html","43b30977f2d8cb8eccbc26c120dd8328"],["categories/分布式计算/index.html","edff6572bdc435b7977ef9e0f201aced"],["categories/南三阁/index.html","1b983e2dd0a2a831c72360933f09c63b"],["categories/大数据/index.html","06efcb3153095d3677b1f6ff94a1653b"],["categories/学习笔记/index.html","fb9bafadfdaaa8c04f88659557569f99"],["categories/工具/index.html","c8c4cb7c30461c129f9e19e0d2c8ce8f"],["categories/开发日志/index.html","35891cb919d837881cdb7a9ca9a99f2b"],["categories/开发笔记/index.html","82c4abb187eba9c098ff363558b21cf7"],["categories/手册/index.html","72e1ae8f44cd701859ef4ce71f8ca366"],["categories/数据库/index.html","e3547e4446429460a76f5e27bb99cefe"],["categories/文哲/index.html","95d666df37ace1bb3605fddfc7498e01"],["categories/爬虫/index.html","722371b74eb82c43957412553f415db5"],["categories/计算机网络/index.html","fe79f176d3cea47f67703cc6d2bbc7ba"],["categories/课程/index.html","1351863a698b7801d7e264b80d6c9a54"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","5cf8c54ef8e17c5f8aec237fd519a224"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","b6f1ae24fa24770fc6b0345b3b27858f"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","a3519ed5e5518a504c4afc636697659a"],["tags/Bug/index.html","b9f0eb1637ce86118dd2799e4785484b"],["tags/DB2/index.html","a3508e0e4cfd518a3859af49d2fdf86a"],["tags/NGSIM-数据集/index.html","5337fea6008fa262dfde341cd68330da"],["tags/debug/index.html","e069576acc38fb925c796be313d04370"],["tags/index.html","c228c41ec557fc5d3cb3a78340922845"],["tags/分布式计算/index.html","e51285d844de7de5984a5b4a1e83b3af"],["tags/南三阁/index.html","5682c322fa10bcd4591e7f51f3180a5c"],["tags/大数据/index.html","41d38df75f89ce8dc637009d8e31d933"],["tags/学习笔记/index.html","cd840e329176087e06677d968e2ee6b8"],["tags/建站日志-Butterfly/index.html","0369664bd335b13fbf545b8ac262239d"],["tags/开发笔记/index.html","c93a13cf5c642448a2bc21bbad157411"],["tags/手册/index.html","fbe4b45e2c848d332d2c0d9cc57cd070"],["tags/数据库/index.html","695b161954264fad26b26b1a9ebba3e4"],["tags/文本编辑器使用手册/index.html","4a6e55c003aae0df6a9fb3bd74826e9d"],["tags/爬虫/index.html","9b79fb62a7a5502c2f38c03721ac0a0c"],["tags/编译原理/index.html","623841fcb2032792eb6265f25caa81be"],["tags/计算机网络/index.html","46eeeda88ecadfaf020ddf389b5ab48a"],["tags/计算机网络实验报告/index.html","590d7d02011b6fda5178e29405c28660"],["tags/软件工程/index.html","22699f7aced024756f2b06e7c0762936"],["tags/长短句/index.html","a9704b12657a455f09651f49609cf244"]];
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







