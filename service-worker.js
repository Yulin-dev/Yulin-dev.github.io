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

var precacheConfig = [["2019/11/10/markdown手册/index.html","75bb567a67ce963ee4506f5e3c994f6f"],["2019/11/10/基于Butterfly的建站日志/index.html","49d00d5d393bd5b58d50f085b05027e8"],["2019/11/12/ebook开发日志/index.html","7905d246d879204f23702e3b2eb2ab1d"],["2019/11/12/开发备忘录/index.html","23d655f600b69726425f47202075e78a"],["2019/11/25/数据库/index.html","4494a9a337da26d2c221b157d6c650af"],["2019/11/26/Bug Daily/index.html","2a23229362f9fa8c83a95a14cd5e9fd8"],["2019/11/26/DB2/index.html","71c900e411d9b4a8e24ca4370bfe0867"],["2019/11/26/NGSIM数据集/index.html","9e8ceb80644387fe44ff91f9aecfdd6b"],["2019/11/26/分布式计算/index.html","5a13d357e6f4149d5770ec8dfd6ca165"],["2019/11/26/南三阁/index.html","5d567591cacb9ee217922c890100cb3a"],["2019/11/26/大数据/index.html","70c130386d42b305bcff75df92a65072"],["2019/11/26/文本编辑器/index.html","2765c54bb528d67f988affcb72d936d3"],["2019/11/26/爬虫/index.html","54f64b50b58dff01035550268361a03a"],["2019/11/26/计算机网络/index.html","545aac597702bd274a0f470958accd95"],["2019/11/26/计算机网络实验/index.html","f412efa8c20ee90aa4faf2e5a2dc6792"],["2019/11/26/长短句/index.html","5d4fd24f93b6123b522307cd8f44e914"],["2019/11/27/编译原理/index.html","a7635d2ef2f9230d4d5842d91e8f0df0"],["2019/11/27/软件工程课程笔记/index.html","9477f0ef8ba26760dbc1437fe6c77bcf"],["archives/2019/11/index.html","c08a8f2870ea06eb3bb9e15652050306"],["archives/2019/11/page/2/index.html","a6c81d3c845413742aedcfd80ff89c1f"],["archives/2019/index.html","0625293bd1cb81f272f241cf842c11bc"],["archives/2019/page/2/index.html","2a84c7f04f0a11b72530d9393e62182b"],["archives/index.html","71ed7c41c6ddca579eda282530ded2ad"],["archives/page/2/index.html","0b2ab1ffd9f14f9550fc557c02ceeaab"],["categories/Lab/index.html","84212f77f19bd649fceb51a4af11d46c"],["categories/index.html","f6c2df219de769ba217bdc62a44e3cab"],["categories/分布式计算/index.html","6a26426b67c0fe1bbc6e9f221589e505"],["categories/南三阁/index.html","3070eb6cdc803870717ada2ba4b4e5c8"],["categories/大数据/index.html","25edbe676afd49be193550e7f1752415"],["categories/学习笔记/index.html","a909a57d2464acd0291a5a6db2dc5af5"],["categories/工具/index.html","e7cb8c0102a8120d7ff4d7299a234dd3"],["categories/开发日志/index.html","6f399af5f24ab8cd22e1f03898dc10b9"],["categories/手册/index.html","0c20c3a8099dee268bcecb9a1920e0b1"],["categories/数据库/index.html","b5cafb11747505fa692bbdbc2a535bd7"],["categories/文哲/index.html","7d323a30d276c6dc9fa33b0ab7fe263b"],["categories/爬虫/index.html","68a6a204e4ce44e4b5567dbbdebb571d"],["categories/计算机网络/index.html","8cd5d2d26cd360f8def9f8744efcf0aa"],["categories/课程/index.html","000e738a580ceded5c038e43f483add9"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","dc29f0160ee61f1ff53a150a3b346eb2"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","b6dd0cfd189a54551e15308b2646c3b0"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","7293d77eb92f82a0b30746a00708f265"],["tags/Bug/index.html","4042e562707ef0382c2b12411ace7bc3"],["tags/DB2/index.html","c069e5fdddd7783da0db43595a9e0251"],["tags/NGSIM-数据集/index.html","8770ca5ffcb3c33b6a6c421b5f74afbc"],["tags/debug/index.html","bddc324f038b3bce86a04911af423c65"],["tags/index.html","f01e4d2a3011b5fd5d1232d83bd6038b"],["tags/分布式计算/index.html","804f6f4828df19c982ce385f3ce22561"],["tags/南三阁/index.html","6ca8263208fae7551bb8a3f626272c72"],["tags/大数据/index.html","50cd03dad8debffb5fe63eea062281ac"],["tags/学习笔记/index.html","35c44783150b0551ce1a8387e1c2c58c"],["tags/建站日志-Butterfly/index.html","f089d5d57a78802ad5b842b554de8c32"],["tags/手册/index.html","bfba21c0fa29509ed241067911991a05"],["tags/数据库/index.html","03e00a1a44eec01abbb61e1f8363f45f"],["tags/文本编辑器使用手册/index.html","2c111f08cac81338a6b490081ec0d2b4"],["tags/爬虫/index.html","5a76d9e14b75523545e750e7b64652dc"],["tags/编译原理/index.html","119e9f24298a375661de2abcbebc5fb5"],["tags/计算机网络/index.html","153e6dab9148f03ddbb4f6b3e94a8455"],["tags/计算机网络实验报告/index.html","7e92ba151fb8a41e349de0cdad9043bc"],["tags/软件工程/index.html","5f9c9d421251f815a6252343fc291276"],["tags/长短句/index.html","412b4aee3795835b0f9afd5045a6a169"]];
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







