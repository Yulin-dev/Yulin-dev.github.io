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

var precacheConfig = [["2019/11/10/markdown手册/index.html","436061bc7ef0b9fadc6894c234c4f503"],["2019/11/10/基于Butterfly的建站日志/index.html","a5b654bd88f209cf896f56c2a3ebcbb6"],["2019/11/12/ebook开发日志/index.html","56024a466e4f85642a020d1696f975bd"],["2019/11/12/开发备忘录/index.html","0ea7bf32ace27d176285bbcca828574a"],["2019/11/25/数据库/index.html","6a3554d2229c0df7b8b588e4270b8cfa"],["2019/11/26/Bug Daily/index.html","a3d131b688a7b1efbd6f63fbc5327484"],["2019/11/26/DB2/index.html","d9625d98b10b63676996c554ce3e7e5a"],["2019/11/26/NGSIM数据集/index.html","91df9f1a63d776518112faec012d3541"],["2019/11/26/iBook开发笔记/index.html","ee6d8a7cef7c8a8c80c40fa2f18f5c91"],["2019/11/26/分布式计算/index.html","57a00c8a4b8468ba16332a4c895ed726"],["2019/11/26/南三阁/index.html","4b97ea96e07c0965523b6fba29efb282"],["2019/11/26/大数据/index.html","b0655f840428c9a9b8f02ef35a83ddaf"],["2019/11/26/挖个坑埋点土/index.html","ebd8139bc80bdd8eb31936ad25672b8a"],["2019/11/26/文本编辑器/index.html","1dcb47047be0176606343f537b119aea"],["2019/11/26/爬虫/index.html","cac79a5b2983decc7b5af9d9766514c3"],["2019/11/26/计算机网络/index.html","55788619bb11f602ba6f1a51f207f795"],["2019/11/26/计算机网络实验/index.html","b55108bcb0eca4f40d51f96d2cef0c6e"],["2019/11/26/长短句/index.html","07f02ef4d6061c3bcef79eff40b1640b"],["2019/11/27/编译原理/index.html","15528c4f903d1110d5b31722afce1a57"],["2019/11/27/软件工程/index.html","54686c3f6a2770ddba45d12905dbb4a6"],["archives/2019/11/index.html","536ba36d6ebd5d5436b5897d154a4ed9"],["archives/2019/11/page/2/index.html","800505d5d69c47116aeb99c3c5e269ca"],["archives/2019/index.html","f7e7c0c28fb9f3e40f908fc3f2c16bd4"],["archives/2019/page/2/index.html","ad5bbaf5ba7da66799e9afacaf7cb6f9"],["archives/index.html","602f86134488b23b2bf18d5b40a2098a"],["archives/page/2/index.html","450f5b9bf06319fb4d8666d3fa36da86"],["categories/Lab/index.html","5075b65b59e53bae84c820c882b197b4"],["categories/index.html","be170ce41a203f6d6d8a73bbcb488d4f"],["categories/分布式计算/index.html","09670bc7ec507cdcd34d30b3b1d0946a"],["categories/南三阁/index.html","8766c3e993b3133f84f713aa61e011ba"],["categories/大数据/index.html","708e84effb609199cc6adadf6ec80b25"],["categories/学习笔记/index.html","4dd74baa4346ede884c0e1cdeee42f9f"],["categories/工具/index.html","8f13c40db20cf6d61355c0423f74b7ba"],["categories/开发日志/index.html","7480f4ce425655d88ed70f1c4da016d7"],["categories/开发笔记/index.html","27843d83b341416dc406651ea6af3be8"],["categories/手册/index.html","f929df825ac7bd93b3a0fd1ad6e2eb33"],["categories/数据库/index.html","3523ffbb05e8c7e012d147f7d9357bba"],["categories/文哲/index.html","641deb11f566bb3e4b4d3265b32870c4"],["categories/爬虫/index.html","d5ace3080dc4ccc2e001086ad852300d"],["categories/计算机网络/index.html","3c2d10d6a9d4dc48653e23ea28ecf5ee"],["categories/课程/index.html","1f4abdfbe5981c7203ee2d5205707b61"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","0b0f46a498309be38ea705b71b833266"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","7388b3f1ef288af43074083022e5e591"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","ef46b17872f0a1f7ffe8f87edf8f206e"],["tags/Bug/index.html","e18bd114287fcd70ca40f1571464a1da"],["tags/DB2/index.html","8cf640c31bed85c4c0dc1c3d40f60518"],["tags/NGSIM-数据集/index.html","de36b7b972ece3fa562b2b672f68892e"],["tags/debug/index.html","9938f24a1e9f108a021d97da594d0149"],["tags/index.html","4960420ae14dbe487e3d7e4b934ff646"],["tags/分布式计算/index.html","dd83b58beef951b638a7d3a0b6da506b"],["tags/南三阁/index.html","f9f39bb2bf1b1991ad44a1406538d54b"],["tags/大数据/index.html","abb3cd714052224816260fa8f4bf612e"],["tags/学习笔记/index.html","1bcf3b880fa73dedfaca036e3e550beb"],["tags/建站日志-Butterfly/index.html","4ae5889228388c101ab01e791f3da67f"],["tags/开发笔记/index.html","aa63e3dc23be3c895db7c5a4a129d117"],["tags/手册/index.html","4f0c94e42ecba61225f62d0ad901c0e1"],["tags/数据库/index.html","9b53eaf9f68daacbb2e763c3c68e87e0"],["tags/文本编辑器使用手册/index.html","846f3e0d07612599d9c242ce481a5cd3"],["tags/爬虫/index.html","beeb320ae9a4c4b8e861c39a78df703a"],["tags/编译原理/index.html","7df7bf3f233f8897f89ef182635f1f88"],["tags/计算机网络/index.html","baaf74b82f2666c7f47bb998c5ca8fdc"],["tags/计算机网络实验报告/index.html","696fca27ff67a965d038ef56192645af"],["tags/软件工程/index.html","89fcdf68a0e10dc8e09d2a1289de8a4e"],["tags/长短句/index.html","26e191529f8cddacf85c616f3e078e34"]];
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







