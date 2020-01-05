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

var precacheConfig = [["2019/11/10/markdown手册/index.html","3977cc4be7268f13af2d1f4b8402aee5"],["2019/11/10/基于Butterfly的建站日志/index.html","5b0bb482d740a65e6637f53ced144ac9"],["2019/11/11/DB2-数据库最新研究/index.html","2adce46c0f1025cff7847910fdd16875"],["2019/11/12/ebook开发日志/index.html","4dd802d68a0889d26001506fe2a21be9"],["2019/11/12/开发备忘录/index.html","c93412dcdbf31957f2df5f1a5872b006"],["2019/11/25/数据库/index.html","c34ce6fc3c66d407bb6d968948e30a48"],["2019/11/26/Bug Daily/index.html","0ec4e3e80f780f64ddfd124c04af1c9f"],["2019/11/26/DB2/index.html","d80154f54007b9570dc3c15a42b66251"],["2019/11/26/NGSIM数据集/index.html","88915ec847678f5c2905a35cb6b78ecd"],["2019/11/26/iBook开发笔记/index.html","78728525b8c83f52acc2e6a6606134d2"],["2019/11/26/iWork需求规约/index.html","e6139701330b87d19b5056c9200281b0"],["2019/11/26/分布式计算/index.html","45140c3e752fd6be5d422501db41e8e5"],["2019/11/26/南三阁/index.html","8b7ead70afcf561f4245f1bcd2243584"],["2019/11/26/大数据/index.html","c929b2b45a2d7dee6ed23f0ab6157d4f"],["2019/11/26/挖个坑埋点土/index.html","4235123a8fd8478b25d5a170d60aeffc"],["2019/11/26/文本编辑器/index.html","6555caa863057eacd4c7018041614365"],["2019/11/26/爬虫/index.html","647320ecfe40adfa6a47a51582bfafbd"],["2019/11/26/编译原理复习/index.html","61096030b1dc7c46bcf075e5c6239fe0"],["2019/11/26/计算机网络/index.html","0c7b34cd18f3708661bbc8a0fe06f4b4"],["2019/11/26/计算机网络MOOC/index.html","6ee07512c2ac31ec1fd63d2f72a86747"],["2019/11/26/计算机网络实验/index.html","1572d9dc2291944ace1bb18f55a9fcbd"],["2019/11/26/长短句/index.html","ad4cd5a801dce74b6f2c5b4ebd7e66f7"],["2019/11/27/编译原理/index.html","026ec379e98ded2d6823f4f479b2ea67"],["2019/11/27/软件工程/index.html","95733d8ed20187e33921a3867e25d440"],["2019/12/15/iWork需求分析规约/index.html","b833df3cceed803f5c1d3b8b3bce1279"],["archives/2019/11/index.html","b12a73e2bd9fe38f16f6d0189f309248"],["archives/2019/11/page/2/index.html","7bb5e3aac8425eb6a48f30b1869653e2"],["archives/2019/11/page/3/index.html","e6fef52fd4f0621eeacea1c97882d900"],["archives/2019/12/index.html","4b028d2fb0c6e93e53d1c893f31e699a"],["archives/2019/index.html","459e2a049c175fa3cfedf3f28a37c707"],["archives/2019/page/2/index.html","c699054edc4e5624b1e67d80570f7c29"],["archives/2019/page/3/index.html","644813d3cc3e5210a9e1932d51ec2982"],["archives/index.html","f4819411bcb7b4a67feb8dff1c8390f7"],["archives/page/2/index.html","3917bef9a8e803b4202d5537efccfc44"],["archives/page/3/index.html","ad6a4739ef80561ee9ef5688178bf27c"],["categories/Lab/index.html","c5bf99707767a3c08be304692520fe66"],["categories/index.html","de844c9333ae4a6b451500e7ac6eca37"],["categories/分布式计算/index.html","631e31eb02cdbd42a794703b21f5f651"],["categories/南三阁/index.html","66f09888b0c2a64216a6333e84c7f809"],["categories/大数据/index.html","79d597f471dbb9c6262d8fbd3421025e"],["categories/学习笔记/index.html","4930c633ef71cd6ec83285392849c571"],["categories/工具/index.html","7944f0582b17c33a5ca66f050d7d00e1"],["categories/开发日志/index.html","6186faf590eaba21186bf7afdea6b178"],["categories/开发笔记/index.html","966c81fdfa08c93dad3cb7d03fa28831"],["categories/手册/index.html","afaec8936ff2336805499906f0445770"],["categories/数据库/index.html","762ba1ac7523cf6fd90c09a5007a9c8d"],["categories/文哲/index.html","432752552931de0bf6686b6d2aa46bdd"],["categories/爬虫/index.html","99a10bd2153b14c0a41426f020522adb"],["categories/编译原理/index.html","eb2a492edc8451172ec8d9d42473f4a0"],["categories/计算机网络/index.html","2026b4019b43917de57a219f5e051011"],["categories/课程/index.html","1b41302234bef4dfc773ae351f96958c"],["categories/软件工程文档/index.html","8551de6e89424eda1e9bdd29b78d349f"],["css/index.css","6f6c00e328089f3ccc63001130e1ac22"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["img/7B68EDBB6A69033CEC626E1734045BCD.jpg","7b68edbb6a69033cec626e1734045bcd"],["img/Background.jpg","a24e6058865a294774bee76cc024548a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","af7cf60cdee78860adbe584823db34e0"],["img/avatar_v1.png","9eee8b7f139e0b0ddad209d66d3577a3"],["img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["img/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["index.html","64f85f2787408857ae24b65675bdf426"],["js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["js/main.js","fad811598880d938c0e617c40e7aeb94"],["js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["link/index.html","865c8ce6a923924b6710677076558a07"],["live2dw/assets/moc/wanko.1024/texture_00.png","10b7047251205db46fdac7632b5d4642"],["live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["page/2/index.html","c7aaaad2c213be55e9cf673c478b8c80"],["page/3/index.html","aff8f283a85205a1cf78e94b70e8fff2"],["tags/Bug/index.html","8bd77297a4df0d15bce19a91b665652a"],["tags/DB2/index.html","ed0b768243244920ff76df8b919d7669"],["tags/NGSIM-数据集/index.html","478b96d73be968bfe20dddae474c743a"],["tags/debug/index.html","d3576918dfc50d352b1fa81988fc0fbe"],["tags/index.html","12f8b01ba67172a1ceee303588ed7387"],["tags/分布式计算/index.html","8a9085e2ada8b12ea1096c798c013185"],["tags/南三阁/index.html","0c9480d98dbd37d3aa0d0c5fb4ef5d6a"],["tags/大数据/index.html","ff0d099088e9d19a511d591807586425"],["tags/学习笔记/index.html","36ec79f10ac77fc99c9059f2864d90ea"],["tags/建站日志-Butterfly/index.html","3175344a81eb33a599c34c0ece41364e"],["tags/开发笔记/index.html","eb6fb9cb824d6d056e896f2ba94a3c32"],["tags/手册/index.html","59206f760f9e48b0c9c6ec14f01fe9d4"],["tags/数据库/index.html","aa1dbc3720ebf2b2c4aa1a434b7e46c6"],["tags/文本编辑器使用手册/index.html","2a6519f6bc62b81f0a3f430363de7548"],["tags/爬虫/index.html","7b660adb5d6112aabc757973ee74741f"],["tags/编译原理/index.html","fcfe177c9ff4bf6a0fc4306a07ea20b4"],["tags/编译原理PPT复习笔记/index.html","b853bb4e3b2c24809740bf642067d733"],["tags/计算机网络/index.html","333aad0956fb6f558f53b04d0d3fd462"],["tags/计算机网络MOOC/index.html","7642450c5b3453d772011ff19ed33914"],["tags/计算机网络实验报告/index.html","a95363da2d6c64be6beb92c709ac5a09"],["tags/软件工程/index.html","3badf6cd353bf72d6c510b6b8897f786"],["tags/软件工程文档/index.html","e6c6d642f1218853d926daf148e87f2a"],["tags/长短句/index.html","17605e2300024b21eefc46b1e3fbe87a"]];
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







