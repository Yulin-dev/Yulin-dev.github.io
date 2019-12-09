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

var precacheConfig = [["2019/11/10/markdown手册/index.html","9d395493fbd3fca75f91c85052cb15fc"],["2019/11/10/基于Butterfly的建站日志/index.html","bbbf209c3ac2ee16d0e0a8206a265b50"],["2019/11/12/ebook开发日志/index.html","820fe70a69806710b623a281e96db496"],["2019/11/12/开发备忘录/index.html","b90fe2e5b0fb263a2be8b207708cf07c"],["2019/11/25/数据库/index.html","c496854c7fc20e2c9cb19168e52efb5a"],["2019/11/26/Bug Daily/index.html","3a633e4f1c0f12fcb220c7b7959ff740"],["2019/11/26/DB2/index.html","09ab5cf32b09d321e58d6fc129c3b68a"],["2019/11/26/NGSIM数据集/index.html","6398189ef524764770e3ff575d1320c5"],["2019/11/26/分布式计算/index.html","6b13e2a0cbd7e17a438fa54d401308bf"],["2019/11/26/南三阁/index.html","9a2c06fbe845c9aecfa14b185404901a"],["2019/11/26/大数据/index.html","07062b29818076812fb334d7403a7620"],["2019/11/26/挖个坑埋点土/index.html","62d68da0e977e76bf897775ebf00f87f"],["2019/11/26/文本编辑器/index.html","8196e47de7ba4d619b88b20d59988096"],["2019/11/26/爬虫/index.html","58f07a24511ce1990a267d7c202b0751"],["2019/11/26/计算机网络/index.html","3fb1c241459a86da4a6e9d15c4bfac8e"],["2019/11/26/计算机网络实验/index.html","af0bb0bd28011a0e6a703af97471af97"],["2019/11/26/长短句/index.html","8968909296a3d1d69c9a0f26d87ee4ca"],["2019/11/27/编译原理/index.html","cbbcc24b429bf66505d42c62d0abe4cd"],["2019/11/27/软件工程/index.html","45ce38d43c7ab17b1cfa7dca4fa1607c"],["archives/2019/11/index.html","5c7f080c2e97428f95352ac1e2ea3c2d"],["archives/2019/11/page/2/index.html","77530ada38bc767aca0130fc09ac0171"],["archives/2019/index.html","cb15218478947cafc61007118ef656a6"],["archives/2019/page/2/index.html","999e0037737bc5c1b0a424fb092c2518"],["archives/index.html","ad4aa64f55b91513fad6764be7a7c6f2"],["archives/page/2/index.html","515e5d1f2587eb3dd9337ba99704203d"],["categories/Lab/index.html","5459009574d5a6a5d2ffcd3bc7865fde"],["categories/index.html","da5b3f3408a2f71f3832872366a2a599"],["categories/分布式计算/index.html","57cfb78b52ae714473c3df17540436d7"],["categories/南三阁/index.html","9c9643bc909347545747fded71f4955c"],["categories/大数据/index.html","bf30546cc69b3ba09454e3668fcfa702"],["categories/学习笔记/index.html","53bf854eb11e134f2ac18030833089bd"],["categories/工具/index.html","6a98627fa14ac7ae2aec590b1f329067"],["categories/开发日志/index.html","aa773e18029fa5d61c7b72d025c2bf7a"],["categories/手册/index.html","f5d80b49573d3fa25c6c0c67148f502d"],["categories/数据库/index.html","a50ed68dca720e10512f0fa547595141"],["categories/文哲/index.html","8c191ccc96df1548f7ec7e1d657c0bfc"],["categories/爬虫/index.html","fff33450a2463fe41a928cffd6ffcaf1"],["categories/计算机网络/index.html","f324d9f47f1167e2d32a68dde091b7bd"],["categories/课程/index.html","2555468d95b9efcc9bcafd49988007d8"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","e4378180770891712fb96a3e2a395243"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","1cf60c087c103ea74e2e53c549a046d8"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","d8b90db2d04a6d4cfbdb3a36c3b0fbad"],["tags/Bug/index.html","7e68256345570a0bd5627af722c6f413"],["tags/DB2/index.html","b9711c43f147051a998d2027cc296014"],["tags/NGSIM-数据集/index.html","daa66c19c62840f4e45cddaba4d268f8"],["tags/debug/index.html","749a6f3f4e230249077a9f085000d1f4"],["tags/index.html","8f35626a0cceecce7ff934681c6b28f4"],["tags/分布式计算/index.html","751e863eeeab8c11228c1ff6468b2c00"],["tags/南三阁/index.html","1e29a81748ecaf2bd87dbdc1bd1ab718"],["tags/大数据/index.html","b605a1f2e918547e230e920363ad38de"],["tags/学习笔记/index.html","fe388db21ec154358653920a82e4e91d"],["tags/建站日志-Butterfly/index.html","ca4de3204e6b60ccc2329e6f18f0835e"],["tags/手册/index.html","545d6fb2e6ad78de6c4ec87ade1bfb63"],["tags/数据库/index.html","d1e208bb8ba893b8eb14eba23843b21e"],["tags/文本编辑器使用手册/index.html","cf676270132b1906d70f34576c1f87a7"],["tags/爬虫/index.html","978607b56eb21b9a20c881210e1000e4"],["tags/编译原理/index.html","fbd90c3c5636f849914831491ae8f42a"],["tags/计算机网络/index.html","45dafe011e7d113f1c7b337a3dd5a449"],["tags/计算机网络实验报告/index.html","3e99a8bada355d4f6a2514da93c00829"],["tags/软件工程/index.html","0217935b4db8cfdd5e024fc2acfbefdb"],["tags/长短句/index.html","a1d83bfe5b817c434c34d2c89866a6ef"]];
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







