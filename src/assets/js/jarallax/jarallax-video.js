/*!
 * Video Extension for Jarallax v2.0.2 (https://github.com/nk-o/jarallax)
 * Copyright 2022 nK <https://nkdev.info>
 * Licensed under MIT (https://github.com/nk-o/jarallax/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.jarallaxVideo = factory());
})(this, (function () { 'use strict';

  /*!
   * Name    : Video Worker
   * Version : 2.0.0
   * Author  : nK <https://nkdev.info>
   * GitHub  : https://github.com/nk-o/video-worker
   */

  /* eslint-disable import/no-mutable-exports */

  /* eslint-disable no-restricted-globals */
  let win$1;

  if (typeof window !== 'undefined') {
    win$1 = window;
  } else if (typeof global !== 'undefined') {
    win$1 = global;
  } else if (typeof self !== 'undefined') {
    win$1 = self;
  } else {
    win$1 = {};
  }

  var global$1$1 = win$1; // Deferred
  // thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery

  function Deferred() {
    this.doneCallbacks = [];
    this.failCallbacks = [];
  }

  Deferred.prototype = {
    execute(list, args) {
      let i = list.length; // eslint-disable-next-line no-param-reassign

      args = Array.prototype.slice.call(args);

      while (i) {
        i -= 1;
        list[i].apply(null, args);
      }
    },

    resolve(...args) {
      this.execute(this.doneCallbacks, args);
    },

    reject(...args) {
      this.execute(this.failCallbacks, args);
    },

    done(callback) {
      this.doneCallbacks.push(callback);
    },

    fail(callback) {
      this.failCallbacks.push(callback);
    }

  };
  let ID = 0;
  let YoutubeAPIadded = 0;
  let VimeoAPIadded = 0;
  let loadingYoutubePlayer = 0;
  let loadingVimeoPlayer = 0;
  const loadingYoutubeDefer = /*#__PURE__*/new Deferred();
  const loadingVimeoDefer = /*#__PURE__*/new Deferred();

  class VideoWorker {
    constructor(url, options) {
      const self = this;
      self.url = url;
      self.options_default = {
        autoplay: false,
        loop: false,
        mute: false,
        volume: 100,
        showControls: true,
        accessibilityHidden: false,
        // start / end video time in seconds
        startTime: 0,
        endTime: 0
      };
      self.options = self.extend({}, self.options_default, options); // Fix wrong option name.
      // Thanks to https://github.com/nk-o/video-worker/issues/13.

      if (typeof self.options.showContols !== 'undefined') {
        self.options.showControls = self.options.showContols;
        delete self.options.showContols;
      } // check URL


      self.videoID = self.parseURL(url); // init

      if (self.videoID) {
        self.ID = ID;
        ID += 1;
        self.loadAPI();
        self.init();
      }
    } // Extend like jQuery.extend
    // eslint-disable-next-line class-methods-use-this


    extend(...args) {
      const out = args[0] || {};
      Object.keys(args).forEach(i => {
        if (!args[i]) {
          return;
        }

        Object.keys(args[i]).forEach(key => {
          out[key] = args[i][key];
        });
      });
      return out;
    }

    parseURL(url) {
      // parse youtube ID
      function getYoutubeID(ytUrl) {
        // eslint-disable-next-line no-useless-escape
        const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
        const match = ytUrl.match(regExp);
        return match && match[1].length === 11 ? match[1] : false;
      } // parse vimeo ID


      function getVimeoID(vmUrl) {
        // eslint-disable-next-line no-useless-escape
        const regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
        const match = vmUrl.match(regExp);
        return match && match[3] ? match[3] : false;
      } // parse local string


      function getLocalVideos(locUrl) {
        // eslint-disable-next-line no-useless-escape
        const videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
        const result = {};
        let ready = 0;
        videoFormats.forEach(val => {
          // eslint-disable-next-line no-useless-escape
          const match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);

          if (match && match[1] && match[2]) {
            // eslint-disable-next-line prefer-destructuring
            result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
            ready = 1;
          }
        });
        return ready ? result : false;
      }

      const Youtube = getYoutubeID(url);
      const Vimeo = getVimeoID(url);
      const Local = getLocalVideos(url);

      if (Youtube) {
        this.type = 'youtube';
        return Youtube;
      }

      if (Vimeo) {
        this.type = 'vimeo';
        return Vimeo;
      }

      if (Local) {
        this.type = 'local';
        return Local;
      }

      return false;
    }

    isValid() {
      return !!this.videoID;
    } // events


    on(name, callback) {
      this.userEventsList = this.userEventsList || []; // add new callback in events list

      (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
    }

    off(name, callback) {
      if (!this.userEventsList || !this.userEventsList[name]) {
        return;
      }

      if (!callback) {
        delete this.userEventsList[name];
      } else {
        this.userEventsList[name].forEach((val, key) => {
          if (val === callback) {
            this.userEventsList[name][key] = false;
          }
        });
      }
    }

    fire(name, ...args) {
      if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
        this.userEventsList[name].forEach(val => {
          // call with all arguments
          if (val) {
            val.apply(this, args);
          }
        });
      }
    }

    play(start) {
      const self = this;

      if (!self.player) {
        return;
      }

      if (self.type === 'youtube' && self.player.playVideo) {
        if (typeof start !== 'undefined') {
          self.player.seekTo(start || 0);
        }

        if (global$1$1.YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
          self.player.playVideo();
        }
      }

      if (self.type === 'vimeo') {
        if (typeof start !== 'undefined') {
          self.player.setCurrentTime(start);
        }

        self.player.getPaused().then(paused => {
          if (paused) {
            self.player.play();
          }
        });
      }

      if (self.type === 'local') {
        if (typeof start !== 'undefined') {
          self.player.currentTime = start;
        }

        if (self.player.paused) {
          self.player.play();
        }
      }
    }

    pause() {
      const self = this;

      if (!self.player) {
        return;
      }

      if (self.type === 'youtube' && self.player.pauseVideo) {
        if (global$1$1.YT.PlayerState.PLAYING === self.player.getPlayerState()) {
          self.player.pauseVideo();
        }
      }

      if (self.type === 'vimeo') {
        self.player.getPaused().then(paused => {
          if (!paused) {
            self.player.pause();
          }
        });
      }

      if (self.type === 'local') {
        if (!self.player.paused) {
          self.player.pause();
        }
      }
    }

    mute() {
      const self = this;

      if (!self.player) {
        return;
      }

      if (self.type === 'youtube' && self.player.mute) {
        self.player.mute();
      }

      if (self.type === 'vimeo' && self.player.setVolume) {
        self.player.setVolume(0);
      }

      if (self.type === 'local') {
        self.$video.muted = true;
      }
    }

    unmute() {
      const self = this;

      if (!self.player) {
        return;
      }

      if (self.type === 'youtube' && self.player.mute) {
        self.player.unMute();
      }

      if (self.type === 'vimeo' && self.player.setVolume) {
        self.player.setVolume(self.options.volume);
      }

      if (self.type === 'local') {
        self.$video.muted = false;
      }
    }

    setVolume(volume = false) {
      const self = this;

      if (!self.player || !volume) {
        return;
      }

      if (self.type === 'youtube' && self.player.setVolume) {
        self.player.setVolume(volume);
      }

      if (self.type === 'vimeo' && self.player.setVolume) {
        self.player.setVolume(volume);
      }

      if (self.type === 'local') {
        self.$video.volume = volume / 100;
      }
    }

    getVolume(callback) {
      const self = this;

      if (!self.player) {
        callback(false);
        return;
      }

      if (self.type === 'youtube' && self.player.getVolume) {
        callback(self.player.getVolume());
      }

      if (self.type === 'vimeo' && self.player.getVolume) {
        self.player.getVolume().then(volume => {
          callback(volume);
        });
      }

      if (self.type === 'local') {
        callback(self.$video.volume * 100);
      }
    }

    getMuted(callback) {
      const self = this;

      if (!self.player) {
        callback(null);
        return;
      }

      if (self.type === 'youtube' && self.player.isMuted) {
        callback(self.player.isMuted());
      }

      if (self.type === 'vimeo' && self.player.getVolume) {
        self.player.getVolume().then(volume => {
          callback(!!volume);
        });
      }

      if (self.type === 'local') {
        callback(self.$video.muted);
      }
    }

    getImageURL(callback) {
      const self = this;

      if (self.videoImage) {
        callback(self.videoImage);
        return;
      }

      if (self.type === 'youtube') {
        const availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
        let step = 0;
        const tempImg = new Image();

        tempImg.onload = function () {
          // if no thumbnail, youtube add their own image with width = 120px
          if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
            // ok
            self.videoImage = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
            callback(self.videoImage);
          } else {
            // try another size
            step += 1;
            this.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
          }
        };

        tempImg.src = `https://img.youtube.com/vi/${self.videoID}/${availableSizes[step]}.jpg`;
      }

      if (self.type === 'vimeo') {
        let request = new XMLHttpRequest(); // https://vimeo.com/api/oembed.json?url=https://vimeo.com/235212527

        request.open('GET', `https://vimeo.com/api/oembed.json?url=${self.url}`, true);

        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
              // Success!
              const response = JSON.parse(this.responseText);

              if (response.thumbnail_url) {
                self.videoImage = response.thumbnail_url;
                callback(self.videoImage);
              }
            }
          }
        };

        request.send();
        request = null;
      }
    } // fallback to the old version.


    getIframe(callback) {
      this.getVideo(callback);
    }

    getVideo(callback) {
      const self = this; // return generated video block

      if (self.$video) {
        callback(self.$video);
        return;
      } // generate new video block


      self.onAPIready(() => {
        let hiddenDiv;

        if (!self.$video) {
          hiddenDiv = document.createElement('div');
          hiddenDiv.style.display = 'none';
        } // Youtube


        if (self.type === 'youtube') {
          self.playerOptions = {
            // GDPR Compliance.
            host: 'https://www.youtube-nocookie.com',
            videoId: self.videoID,
            playerVars: {
              autohide: 1,
              rel: 0,
              autoplay: 0,
              // autoplay enable on mobile devices
              playsinline: 1
            }
          }; // hide controls

          if (!self.options.showControls) {
            self.playerOptions.playerVars.iv_load_policy = 3;
            self.playerOptions.playerVars.modestbranding = 1;
            self.playerOptions.playerVars.controls = 0;
            self.playerOptions.playerVars.showinfo = 0;
            self.playerOptions.playerVars.disablekb = 1;
          } // events


          let ytStarted;
          let ytProgressInterval;
          self.playerOptions.events = {
            onReady(e) {
              // mute
              if (self.options.mute) {
                e.target.mute();
              } else if (self.options.volume) {
                e.target.setVolume(self.options.volume);
              } // autoplay


              if (self.options.autoplay) {
                self.play(self.options.startTime);
              }

              self.fire('ready', e); // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
              // https://github.com/nk-o/video-worker/issues/2

              if (self.options.loop && !self.options.endTime) {
                const secondsOffset = 0.1;
                self.options.endTime = self.player.getDuration() - secondsOffset;
              } // volumechange


              setInterval(() => {
                self.getVolume(volume => {
                  if (self.options.volume !== volume) {
                    self.options.volume = volume;
                    self.fire('volumechange', e);
                  }
                });
              }, 150);
            },

            onStateChange(e) {
              // loop
              if (self.options.loop && e.data === global$1$1.YT.PlayerState.ENDED) {
                self.play(self.options.startTime);
              }

              if (!ytStarted && e.data === global$1$1.YT.PlayerState.PLAYING) {
                ytStarted = 1;
                self.fire('started', e);
              }

              if (e.data === global$1$1.YT.PlayerState.PLAYING) {
                self.fire('play', e);
              }

              if (e.data === global$1$1.YT.PlayerState.PAUSED) {
                self.fire('pause', e);
              }

              if (e.data === global$1$1.YT.PlayerState.ENDED) {
                self.fire('ended', e);
              } // progress check


              if (e.data === global$1$1.YT.PlayerState.PLAYING) {
                ytProgressInterval = setInterval(() => {
                  self.fire('timeupdate', e); // check for end of video and play again or stop

                  if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                    if (self.options.loop) {
                      self.play(self.options.startTime);
                    } else {
                      self.pause();
                    }
                  }
                }, 150);
              } else {
                clearInterval(ytProgressInterval);
              }
            },

            onError(e) {
              self.fire('error', e);
            }

          };
          const firstInit = !self.$video;

          if (firstInit) {
            const div = document.createElement('div');
            div.setAttribute('id', self.playerID);
            hiddenDiv.appendChild(div);
            document.body.appendChild(hiddenDiv);
          }

          self.player = self.player || new global$1$1.YT.Player(self.playerID, self.playerOptions);

          if (firstInit) {
            self.$video = document.getElementById(self.playerID); // add accessibility attributes

            if (self.options.accessibilityHidden) {
              self.$video.setAttribute('tabindex', '-1');
              self.$video.setAttribute('aria-hidden', 'true');
            } // get video width and height


            self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
            self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
          }
        } // Vimeo


        if (self.type === 'vimeo') {
          self.playerOptions = {
            // GDPR Compliance.
            dnt: 1,
            id: self.videoID,
            autopause: 0,
            transparent: 0,
            autoplay: self.options.autoplay ? 1 : 0,
            loop: self.options.loop ? 1 : 0,
            muted: self.options.mute ? 1 : 0
          };

          if (self.options.volume) {
            self.playerOptions.volume = self.options.volume;
          } // hide controls


          if (!self.options.showControls) {
            self.playerOptions.badge = 0;
            self.playerOptions.byline = 0;
            self.playerOptions.portrait = 0;
            self.playerOptions.title = 0;
            self.playerOptions.background = 1;
          }

          if (!self.$video) {
            let playerOptionsString = '';
            Object.keys(self.playerOptions).forEach(key => {
              if (playerOptionsString !== '') {
                playerOptionsString += '&';
              }

              playerOptionsString += `${key}=${encodeURIComponent(self.playerOptions[key])}`;
            }); // we need to create iframe manually because when we create it using API
            // js events won't triggers after iframe moved to another place

            self.$video = document.createElement('iframe');
            self.$video.setAttribute('id', self.playerID);
            self.$video.setAttribute('src', `https://player.vimeo.com/video/${self.videoID}?${playerOptionsString}`);
            self.$video.setAttribute('frameborder', '0');
            self.$video.setAttribute('mozallowfullscreen', '');
            self.$video.setAttribute('allowfullscreen', '');
            self.$video.setAttribute('title', 'Vimeo video player'); // add accessibility attributes

            if (self.options.accessibilityHidden) {
              self.$video.setAttribute('tabindex', '-1');
              self.$video.setAttribute('aria-hidden', 'true');
            }

            hiddenDiv.appendChild(self.$video);
            document.body.appendChild(hiddenDiv);
          }

          self.player = self.player || new global$1$1.Vimeo.Player(self.$video, self.playerOptions); // set current time for autoplay

          if (self.options.startTime && self.options.autoplay) {
            self.player.setCurrentTime(self.options.startTime);
          } // get video width and height


          self.player.getVideoWidth().then(width => {
            self.videoWidth = width || 1280;
          });
          self.player.getVideoHeight().then(height => {
            self.videoHeight = height || 720;
          }); // events

          let vmStarted;
          self.player.on('timeupdate', e => {
            if (!vmStarted) {
              self.fire('started', e);
              vmStarted = 1;
            }

            self.fire('timeupdate', e); // check for end of video and play again or stop

            if (self.options.endTime) {
              if (self.options.endTime && e.seconds >= self.options.endTime) {
                if (self.options.loop) {
                  self.play(self.options.startTime);
                } else {
                  self.pause();
                }
              }
            }
          });
          self.player.on('play', e => {
            self.fire('play', e); // check for the start time and start with it

            if (self.options.startTime && e.seconds === 0) {
              self.play(self.options.startTime);
            }
          });
          self.player.on('pause', e => {
            self.fire('pause', e);
          });
          self.player.on('ended', e => {
            self.fire('ended', e);
          });
          self.player.on('loaded', e => {
            self.fire('ready', e);
          });
          self.player.on('volumechange', e => {
            self.fire('volumechange', e);
          });
          self.player.on('error', e => {
            self.fire('error', e);
          });
        } // Local


        function addSourceToLocal(element, src, type) {
          const source = document.createElement('source');
          source.src = src;
          source.type = type;
          element.appendChild(source);
        }

        if (self.type === 'local') {
          if (!self.$video) {
            self.$video = document.createElement('video'); // show controls

            if (self.options.showControls) {
              self.$video.controls = true;
            } // mute


            if (self.options.mute) {
              self.$video.muted = true;
            } else if (self.$video.volume) {
              self.$video.volume = self.options.volume / 100;
            } // loop


            if (self.options.loop) {
              self.$video.loop = true;
            } // autoplay enable on mobile devices


            self.$video.setAttribute('playsinline', '');
            self.$video.setAttribute('webkit-playsinline', ''); // add accessibility attributes

            if (self.options.accessibilityHidden) {
              self.$video.setAttribute('tabindex', '-1');
              self.$video.setAttribute('aria-hidden', 'true');
            }

            self.$video.setAttribute('id', self.playerID);
            hiddenDiv.appendChild(self.$video);
            document.body.appendChild(hiddenDiv);
            Object.keys(self.videoID).forEach(key => {
              addSourceToLocal(self.$video, self.videoID[key], `video/${key}`);
            });
          }

          self.player = self.player || self.$video;
          let locStarted;
          self.player.addEventListener('playing', e => {
            if (!locStarted) {
              self.fire('started', e);
            }

            locStarted = 1;
          });
          self.player.addEventListener('timeupdate', function (e) {
            self.fire('timeupdate', e); // check for end of video and play again or stop

            if (self.options.endTime) {
              if (self.options.endTime && this.currentTime >= self.options.endTime) {
                if (self.options.loop) {
                  self.play(self.options.startTime);
                } else {
                  self.pause();
                }
              }
            }
          });
          self.player.addEventListener('play', e => {
            self.fire('play', e);
          });
          self.player.addEventListener('pause', e => {
            self.fire('pause', e);
          });
          self.player.addEventListener('ended', e => {
            self.fire('ended', e);
          });
          self.player.addEventListener('loadedmetadata', function () {
            // get video width and height
            self.videoWidth = this.videoWidth || 1280;
            self.videoHeight = this.videoHeight || 720;
            self.fire('ready'); // autoplay

            if (self.options.autoplay) {
              self.play(self.options.startTime);
            }
          });
          self.player.addEventListener('volumechange', e => {
            self.getVolume(volume => {
              self.options.volume = volume;
            });
            self.fire('volumechange', e);
          });
          self.player.addEventListener('error', e => {
            self.fire('error', e);
          });
        }

        callback(self.$video);
      });
    }

    init() {
      const self = this;
      self.playerID = `VideoWorker-${self.ID}`;
    }

    loadAPI() {
      const self = this;

      if (YoutubeAPIadded && VimeoAPIadded) {
        return;
      }

      let src = ''; // load Youtube API

      if (self.type === 'youtube' && !YoutubeAPIadded) {
        YoutubeAPIadded = 1;
        src = 'https://www.youtube.com/iframe_api';
      } // load Vimeo API


      if (self.type === 'vimeo' && !VimeoAPIadded) {
        VimeoAPIadded = 1; // Useful when Vimeo API added using RequireJS https://github.com/nk-o/video-worker/pull/7

        if (typeof global$1$1.Vimeo !== 'undefined') {
          return;
        }

        src = 'https://player.vimeo.com/api/player.js';
      }

      if (!src) {
        return;
      } // add script in head section


      let tag = document.createElement('script');
      let head = document.getElementsByTagName('head')[0];
      tag.src = src;
      head.appendChild(tag);
      head = null;
      tag = null;
    }

    onAPIready(callback) {
      const self = this; // Youtube

      if (self.type === 'youtube') {
        // Listen for global YT player callback
        if ((typeof global$1$1.YT === 'undefined' || global$1$1.YT.loaded === 0) && !loadingYoutubePlayer) {
          // Prevents Ready event from being called twice
          loadingYoutubePlayer = 1; // Creates deferred so, other players know when to wait.

          global$1$1.onYouTubeIframeAPIReady = function () {
            global$1$1.onYouTubeIframeAPIReady = null;
            loadingYoutubeDefer.resolve('done');
            callback();
          };
        } else if (typeof global$1$1.YT === 'object' && global$1$1.YT.loaded === 1) {
          callback();
        } else {
          loadingYoutubeDefer.done(() => {
            callback();
          });
        }
      } // Vimeo


      if (self.type === 'vimeo') {
        if (typeof global$1$1.Vimeo === 'undefined' && !loadingVimeoPlayer) {
          loadingVimeoPlayer = 1;
          const vimeoInterval = setInterval(() => {
            if (typeof global$1$1.Vimeo !== 'undefined') {
              clearInterval(vimeoInterval);
              loadingVimeoDefer.resolve('done');
              callback();
            }
          }, 20);
        } else if (typeof global$1$1.Vimeo !== 'undefined') {
          callback();
        } else {
          loadingVimeoDefer.done(() => {
            callback();
          });
        }
      } // Local


      if (self.type === 'local') {
        callback();
      }
    }

  }

  function ready(callback) {
    if ('complete' === document.readyState || 'interactive' === document.readyState) {
      // Already ready or interactive, execute callback
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback, {
        capture: true,
        once: true,
        passive: true
      });
    }
  }

  /* eslint-disable import/no-mutable-exports */

  /* eslint-disable no-restricted-globals */
  let win;

  if ('undefined' !== typeof window) {
    win = window;
  } else if ('undefined' !== typeof global) {
    win = global;
  } else if ('undefined' !== typeof self) {
    win = self;
  } else {
    win = {};
  }

  var global$1 = win;

  function jarallaxVideo(jarallax = global$1.jarallax) {
    if ('undefined' === typeof jarallax) {
      return;
    }

    const Jarallax = jarallax.constructor; // append video after when block will be visible.

    const defOnScroll = Jarallax.prototype.onScroll;

    Jarallax.prototype.onScroll = function () {
      const self = this;
      defOnScroll.apply(self);
      const isReady = !self.isVideoInserted && self.video && (!self.options.videoLazyLoading || self.isElementInViewport) && !self.options.disableVideo();

      if (isReady) {
        self.isVideoInserted = true;
        self.video.getVideo(video => {
          const $parent = video.parentNode;
          self.css(video, {
            position: self.image.position,
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            width: '100%',
            height: '100%',
            maxWidth: 'none',
            maxHeight: 'none',
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform,opacity',
            margin: 0,
            zIndex: -1
          });
          self.$video = video; // add Poster attribute to self-hosted video

          if ('local' === self.video.type) {
            if (self.image.src) {
              self.$video.setAttribute('poster', self.image.src);
            } else if (self.image.$item && 'IMG' === self.image.$item.tagName && self.image.$item.src) {
              self.$video.setAttribute('poster', self.image.$item.src);
            }
          } // insert video tag


          self.image.$container.appendChild(video); // remove parent video element (created by VideoWorker)

          $parent.parentNode.removeChild($parent); // call onVideoInsert event

          if (self.options.onVideoInsert) {
            self.options.onVideoInsert.call(self);
          }
        });
      }
    }; // cover video


    const defCoverImage = Jarallax.prototype.coverImage;

    Jarallax.prototype.coverImage = function () {
      const self = this;
      const imageData = defCoverImage.apply(self);
      const node = self.image.$item ? self.image.$item.nodeName : false;

      if (imageData && self.video && node && ('IFRAME' === node || 'VIDEO' === node)) {
        let h = imageData.image.height;
        let w = h * self.image.width / self.image.height;
        let ml = (imageData.container.width - w) / 2;
        let mt = imageData.image.marginTop;

        if (imageData.container.width > w) {
          w = imageData.container.width;
          h = w * self.image.height / self.image.width;
          ml = 0;
          mt += (imageData.image.height - h) / 2;
        } // add video height over than need to hide controls


        if ('IFRAME' === node) {
          h += 400;
          mt -= 200;
        }

        self.css(self.$video, {
          width: `${w}px`,
          marginLeft: `${ml}px`,
          height: `${h}px`,
          marginTop: `${mt}px`
        });
      }

      return imageData;
    }; // init video


    const defInitImg = Jarallax.prototype.initImg;

    Jarallax.prototype.initImg = function () {
      const self = this;
      const defaultResult = defInitImg.apply(self);

      if (!self.options.videoSrc) {
        self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
      }

      if (self.options.videoSrc) {
        self.defaultInitImgResult = defaultResult;
        return true;
      }

      return defaultResult;
    };

    const defCanInitParallax = Jarallax.prototype.canInitParallax;

    Jarallax.prototype.canInitParallax = function () {
      const self = this;
      let defaultResult = defCanInitParallax.apply(self);

      if (!self.options.videoSrc) {
        return defaultResult;
      } // Init video api


      const video = new VideoWorker(self.options.videoSrc, {
        autoplay: true,
        loop: self.options.videoLoop,
        showControls: false,
        accessibilityHidden: true,
        startTime: self.options.videoStartTime || 0,
        endTime: self.options.videoEndTime || 0,
        mute: self.options.videoVolume ? 0 : 1,
        volume: self.options.videoVolume || 0
      }); // call onVideoWorkerInit event

      if (self.options.onVideoWorkerInit) {
        self.options.onVideoWorkerInit.call(self, video);
      }

      function resetDefaultImage() {
        if (self.image.$default_item) {
          self.image.$item = self.image.$default_item;
          self.image.$item.style.display = 'block'; // set image width and height

          self.coverImage();
          self.onScroll();
        }
      }

      if (video.isValid()) {
        // Force enable parallax.
        // When the parallax disabled on mobile devices, we still need to display videos.
        // https://github.com/nk-o/jarallax/issues/159
        if (this.options.disableParallax()) {
          defaultResult = true;
          self.image.position = 'absolute';
          self.options.type = 'scroll';
          self.options.speed = 1;
        } // if parallax will not be inited, we can add thumbnail on background.


        if (!defaultResult) {
          if (!self.defaultInitImgResult) {
            video.getImageURL(url => {
              // save default user styles
              const curStyle = self.$item.getAttribute('style');

              if (curStyle) {
                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
              } // set new background


              self.css(self.$item, {
                'background-image': `url("${url}")`,
                'background-position': 'center',
                'background-size': 'cover'
              });
            });
          } // init video

        } else {
          video.on('ready', () => {
            if (self.options.videoPlayOnlyVisible) {
              const oldOnScroll = self.onScroll;

              self.onScroll = function () {
                oldOnScroll.apply(self);

                if (!self.videoError && (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded)) {
                  if (self.isVisible()) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              };
            } else {
              video.play();
            }
          });
          video.on('started', () => {
            self.image.$default_item = self.image.$item;
            self.image.$item = self.$video; // set video width and height

            self.image.width = self.video.videoWidth || 1280;
            self.image.height = self.video.videoHeight || 720;
            self.coverImage();
            self.onScroll(); // hide image

            if (self.image.$default_item) {
              self.image.$default_item.style.display = 'none';
            }
          });
          video.on('ended', () => {
            self.videoEnded = true;

            if (!self.options.videoLoop) {
              // show default image if Loop disabled.
              resetDefaultImage();
            }
          });
          video.on('error', () => {
            self.videoError = true; // show default image if video loading error.

            resetDefaultImage();
          });
          self.video = video; // set image if not exists

          if (!self.defaultInitImgResult) {
            // set empty image on self-hosted video if not defined
            self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

            if ('local' !== video.type) {
              video.getImageURL(url => {
                self.image.bgImage = `url("${url}")`;
                self.init();
              });
              return false;
            }
          }
        }
      }

      return defaultResult;
    }; // Destroy video parallax


    const defDestroy = Jarallax.prototype.destroy;

    Jarallax.prototype.destroy = function () {
      const self = this;

      if (self.image.$default_item) {
        self.image.$item = self.image.$default_item;
        delete self.image.$default_item;
      }

      defDestroy.apply(self);
    };
  }

  jarallaxVideo(); // data-jarallax-video initialization

  ready(() => {
    if ('undefined' !== typeof global$1.jarallax) {
      global$1.jarallax(document.querySelectorAll('[data-jarallax-video]'));
    }
  }); // We should add VideoWorker globally, since some project uses it.

  if (!global$1.VideoWorker) {
    global$1.VideoWorker = VideoWorker;
  }

  return jarallaxVideo;

}));
//# sourceMappingURL=jarallax-video.js.map
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (callback) {

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		// Already ready or interactive, execute callback
		callback.call();
	} else if (document.attachEvent) {
		// Old browsers
		document.attachEvent('onreadystatechange', function () {
			if (document.readyState === 'interactive') callback.call();
		});
	} else if (document.addEventListener) {
		// Modern browsers
		document.addEventListener('DOMContentLoaded', callback);
	}
};

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined") {
    win = self;
} else {
    win = {};
}

module.exports = win;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoWorker = __webpack_require__(8);

var _videoWorker2 = _interopRequireDefault(_videoWorker);

var _global = __webpack_require__(4);

var _global2 = _interopRequireDefault(_global);

var _liteReady = __webpack_require__(2);

var _liteReady2 = _interopRequireDefault(_liteReady);

var _jarallaxVideo = __webpack_require__(10);

var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// add video worker globally to fallback jarallax < 1.10 versions
_global2.default.VideoWorker = _global2.default.VideoWorker || _videoWorker2.default;

(0, _jarallaxVideo2.default)();

// data-jarallax-video initialization
(0, _liteReady2.default)(function () {
    if (typeof jarallax !== 'undefined') {
        jarallax(document.querySelectorAll('[data-jarallax-video]'));
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(9);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Deferred
// thanks http://stackoverflow.com/questions/18096715/implement-deferred-object-without-using-jquery
function Deferred() {
    this._done = [];
    this._fail = [];
}
Deferred.prototype = {
    execute: function execute(list, args) {
        var i = list.length;
        args = Array.prototype.slice.call(args);
        while (i--) {
            list[i].apply(null, args);
        }
    },
    resolve: function resolve() {
        this.execute(this._done, arguments);
    },
    reject: function reject() {
        this.execute(this._fail, arguments);
    },
    done: function done(callback) {
        this._done.push(callback);
    },
    fail: function fail(callback) {
        this._fail.push(callback);
    }
};

var ID = 0;
var YoutubeAPIadded = 0;
var VimeoAPIadded = 0;
var loadingYoutubePlayer = 0;
var loadingVimeoPlayer = 0;
var loadingYoutubeDefer = new Deferred();
var loadingVimeoDefer = new Deferred();

var VideoWorker = function () {
    function VideoWorker(url, options) {
        _classCallCheck(this, VideoWorker);

        var self = this;

        self.url = url;

        self.options_default = {
            autoplay: false,
            loop: false,
            mute: false,
            volume: 100,
            showContols: true,

            // start / end video time in seconds
            startTime: 0,
            endTime: 0
        };

        self.options = self.extend({}, self.options_default, options);

        // check URL
        self.videoID = self.parseURL(url);

        // init
        if (self.videoID) {
            self.ID = ID++;
            self.loadAPI();
            self.init();
        }
    }

    // Extend like jQuery.extend


    _createClass(VideoWorker, [{
        key: 'extend',
        value: function extend(out) {
            var _arguments = arguments;

            out = out || {};
            Object.keys(arguments).forEach(function (i) {
                if (!_arguments[i]) {
                    return;
                }
                Object.keys(_arguments[i]).forEach(function (key) {
                    out[key] = _arguments[i][key];
                });
            });
            return out;
        }
    }, {
        key: 'parseURL',
        value: function parseURL(url) {
            // parse youtube ID
            function getYoutubeID(ytUrl) {
                // eslint-disable-next-line no-useless-escape
                var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                var match = ytUrl.match(regExp);
                return match && match[1].length === 11 ? match[1] : false;
            }

            // parse vimeo ID
            function getVimeoID(vmUrl) {
                // eslint-disable-next-line no-useless-escape
                var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
                var match = vmUrl.match(regExp);
                return match && match[3] ? match[3] : false;
            }

            // parse local string
            function getLocalVideos(locUrl) {
                // eslint-disable-next-line no-useless-escape
                var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
                var result = {};
                var ready = 0;
                videoFormats.forEach(function (val) {
                    // eslint-disable-next-line no-useless-escape
                    var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                    if (match && match[1] && match[2]) {
                        // eslint-disable-next-line prefer-destructuring
                        result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
                        ready = 1;
                    }
                });
                return ready ? result : false;
            }

            var Youtube = getYoutubeID(url);
            var Vimeo = getVimeoID(url);
            var Local = getLocalVideos(url);

            if (Youtube) {
                this.type = 'youtube';
                return Youtube;
            } else if (Vimeo) {
                this.type = 'vimeo';
                return Vimeo;
            } else if (Local) {
                this.type = 'local';
                return Local;
            }

            return false;
        }
    }, {
        key: 'isValid',
        value: function isValid() {
            return !!this.videoID;
        }

        // events

    }, {
        key: 'on',
        value: function on(name, callback) {
            this.userEventsList = this.userEventsList || [];

            // add new callback in events list
            (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
        }
    }, {
        key: 'off',
        value: function off(name, callback) {
            var _this = this;

            if (!this.userEventsList || !this.userEventsList[name]) {
                return;
            }

            if (!callback) {
                delete this.userEventsList[name];
            } else {
                this.userEventsList[name].forEach(function (val, key) {
                    if (val === callback) {
                        _this.userEventsList[name][key] = false;
                    }
                });
            }
        }
    }, {
        key: 'fire',
        value: function fire(name) {
            var _this2 = this;

            var args = [].slice.call(arguments, 1);
            if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
                this.userEventsList[name].forEach(function (val) {
                    // call with all arguments
                    if (val) {
                        val.apply(_this2, args);
                    }
                });
            }
        }
    }, {
        key: 'play',
        value: function play(start) {
            var self = this;
            if (!self.player) {
                return;
            }

            if (self.type === 'youtube' && self.player.playVideo) {
                if (typeof start !== 'undefined') {
                    self.player.seekTo(start || 0);
                }
                if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                    self.player.playVideo();
                }
            }

            if (self.type === 'vimeo') {
                if (typeof start !== 'undefined') {
                    self.player.setCurrentTime(start);
                }
                self.player.getPaused().then(function (paused) {
                    if (paused) {
                        self.player.play();
                    }
                });
            }

            if (self.type === 'local') {
                if (typeof start !== 'undefined') {
                    self.player.currentTime = start;
                }
                if (self.player.paused) {
                    self.player.play();
                }
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            var self = this;
            if (!self.player) {
                return;
            }

            if (self.type === 'youtube' && self.player.pauseVideo) {
                if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                    self.player.pauseVideo();
                }
            }

            if (self.type === 'vimeo') {
                self.player.getPaused().then(function (paused) {
                    if (!paused) {
                        self.player.pause();
                    }
                });
            }

            if (self.type === 'local') {
                if (!self.player.paused) {
                    self.player.pause();
                }
            }
        }
    }, {
        key: 'mute',
        value: function mute() {
            var self = this;
            if (!self.player) {
                return;
            }

            if (self.type === 'youtube' && self.player.mute) {
                self.player.mute();
            }

            if (self.type === 'vimeo' && self.player.setVolume) {
                self.player.setVolume(0);
            }

            if (self.type === 'local') {
                self.$video.muted = true;
            }
        }
    }, {
        key: 'unmute',
        value: function unmute() {
            var self = this;
            if (!self.player) {
                return;
            }

            if (self.type === 'youtube' && self.player.mute) {
                self.player.unMute();
            }

            if (self.type === 'vimeo' && self.player.setVolume) {
                self.player.setVolume(self.options.volume);
            }

            if (self.type === 'local') {
                self.$video.muted = false;
            }
        }
    }, {
        key: 'setVolume',
        value: function setVolume() {
            var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var self = this;
            if (!self.player || !volume) {
                return;
            }

            if (self.type === 'youtube' && self.player.setVolume) {
                self.player.setVolume(volume);
            }

            if (self.type === 'vimeo' && self.player.setVolume) {
                self.player.setVolume(volume);
            }

            if (self.type === 'local') {
                self.$video.volume = volume / 100;
            }
        }
    }, {
        key: 'getVolume',
        value: function getVolume(callback) {
            var self = this;
            if (!self.player) {
                callback(false);
                return;
            }

            if (self.type === 'youtube' && self.player.getVolume) {
                callback(self.player.getVolume());
            }

            if (self.type === 'vimeo' && self.player.getVolume) {
                self.player.getVolume().then(function (volume) {
                    callback(volume);
                });
            }

            if (self.type === 'local') {
                callback(self.$video.volume * 100);
            }
        }
    }, {
        key: 'getMuted',
        value: function getMuted(callback) {
            var self = this;
            if (!self.player) {
                callback(null);
                return;
            }

            if (self.type === 'youtube' && self.player.isMuted) {
                callback(self.player.isMuted());
            }

            if (self.type === 'vimeo' && self.player.getVolume) {
                self.player.getVolume().then(function (volume) {
                    callback(!!volume);
                });
            }

            if (self.type === 'local') {
                callback(self.$video.muted);
            }
        }
    }, {
        key: 'getImageURL',
        value: function getImageURL(callback) {
            var self = this;

            if (self.videoImage) {
                callback(self.videoImage);
                return;
            }

            if (self.type === 'youtube') {
                var availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
                var step = 0;

                var tempImg = new Image();
                tempImg.onload = function () {
                    // if no thumbnail, youtube add their own image with width = 120px
                    if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                        // ok
                        self.videoImage = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                        callback(self.videoImage);
                    } else {
                        // try another size
                        step++;
                        this.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                    }
                };
                tempImg.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
            }

            if (self.type === 'vimeo') {
                var request = new XMLHttpRequest();
                request.open('GET', 'https://vimeo.com/api/v2/video/' + self.videoID + '.json', true);
                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status >= 200 && this.status < 400) {
                            // Success!
                            var response = JSON.parse(this.responseText);
                            self.videoImage = response[0].thumbnail_large;
                            callback(self.videoImage);
                        } else {
                            // Error :(
                        }
                    }
                };
                request.send();
                request = null;
            }
        }

        // fallback to the old version.

    }, {
        key: 'getIframe',
        value: function getIframe(callback) {
            this.getVideo(callback);
        }
    }, {
        key: 'getVideo',
        value: function getVideo(callback) {
            var self = this;

            // return generated video block
            if (self.$video) {
                callback(self.$video);
                return;
            }

            // generate new video block
            self.onAPIready(function () {
                var hiddenDiv = void 0;
                if (!self.$video) {
                    hiddenDiv = document.createElement('div');
                    hiddenDiv.style.display = 'none';
                }

                // Youtube
                if (self.type === 'youtube') {
                    self.playerOptions = {};
                    self.playerOptions.videoId = self.videoID;
                    self.playerOptions.playerVars = {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0,
                        // autoplay enable on mobile devices
                        playsinline: 1
                    };

                    // hide controls
                    if (!self.options.showContols) {
                        self.playerOptions.playerVars.iv_load_policy = 3;
                        self.playerOptions.playerVars.modestbranding = 1;
                        self.playerOptions.playerVars.controls = 0;
                        self.playerOptions.playerVars.showinfo = 0;
                        self.playerOptions.playerVars.disablekb = 1;
                    }

                    // events
                    var ytStarted = void 0;
                    var ytProgressInterval = void 0;
                    self.playerOptions.events = {
                        onReady: function onReady(e) {
                            // mute
                            if (self.options.mute) {
                                e.target.mute();
                            } else if (self.options.volume) {
                                e.target.setVolume(self.options.volume);
                            }

                            // autoplay
                            if (self.options.autoplay) {
                                self.play(self.options.startTime);
                            }
                            self.fire('ready', e);

                            // For seamless loops, set the endTime to 0.1 seconds less than the video's duration
                            // https://github.com/nk-o/video-worker/issues/2
                            if (self.options.loop && !self.options.endTime) {
                                var secondsOffset = 0.1;
                                self.options.endTime = self.player.getDuration() - secondsOffset;
                            }

                            // volumechange
                            setInterval(function () {
                                self.getVolume(function (volume) {
                                    if (self.options.volume !== volume) {
                                        self.options.volume = volume;
                                        self.fire('volumechange', e);
                                    }
                                });
                            }, 150);
                        },
                        onStateChange: function onStateChange(e) {
                            // loop
                            if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                                self.play(self.options.startTime);
                            }
                            if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                                ytStarted = 1;
                                self.fire('started', e);
                            }
                            if (e.data === YT.PlayerState.PLAYING) {
                                self.fire('play', e);
                            }
                            if (e.data === YT.PlayerState.PAUSED) {
                                self.fire('pause', e);
                            }
                            if (e.data === YT.PlayerState.ENDED) {
                                self.fire('ended', e);
                            }

                            // progress check
                            if (e.data === YT.PlayerState.PLAYING) {
                                ytProgressInterval = setInterval(function () {
                                    self.fire('timeupdate', e);

                                    // check for end of video and play again or stop
                                    if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                        if (self.options.loop) {
                                            self.play(self.options.startTime);
                                        } else {
                                            self.pause();
                                        }
                                    }
                                }, 150);
                            } else {
                                clearInterval(ytProgressInterval);
                            }
                        }
                    };

                    var firstInit = !self.$video;
                    if (firstInit) {
                        var div = document.createElement('div');
                        div.setAttribute('id', self.playerID);
                        hiddenDiv.appendChild(div);
                        document.body.appendChild(hiddenDiv);
                    }
                    self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);
                    if (firstInit) {
                        self.$video = document.getElementById(self.playerID);

                        // get video width and height
                        self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                        self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                    }
                }

                // Vimeo
                if (self.type === 'vimeo') {
                    self.playerOptions = {
                        id: self.videoID,
                        autopause: 0,
                        transparent: 0,
                        autoplay: self.options.autoplay ? 1 : 0,
                        loop: self.options.loop ? 1 : 0,
                        muted: self.options.mute ? 1 : 0
                    };

                    if (self.options.volume) {
                        self.playerOptions.volume = self.options.volume;
                    }

                    // hide controls
                    if (!self.options.showContols) {
                        self.playerOptions.badge = 0;
                        self.playerOptions.byline = 0;
                        self.playerOptions.portrait = 0;
                        self.playerOptions.title = 0;
                    }

                    if (!self.$video) {
                        var playerOptionsString = '';
                        Object.keys(self.playerOptions).forEach(function (key) {
                            if (playerOptionsString !== '') {
                                playerOptionsString += '&';
                            }
                            playerOptionsString += key + '=' + encodeURIComponent(self.playerOptions[key]);
                        });

                        // we need to create iframe manually because when we create it using API
                        // js events won't triggers after iframe moved to another place
                        self.$video = document.createElement('iframe');
                        self.$video.setAttribute('id', self.playerID);
                        self.$video.setAttribute('src', 'https://player.vimeo.com/video/' + self.videoID + '?' + playerOptionsString);
                        self.$video.setAttribute('frameborder', '0');
                        self.$video.setAttribute('mozallowfullscreen', '');
                        self.$video.setAttribute('allowfullscreen', '');

                        hiddenDiv.appendChild(self.$video);
                        document.body.appendChild(hiddenDiv);
                    }
                    self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions);

                    // set current time for autoplay
                    if (self.options.startTime && self.options.autoplay) {
                        self.player.setCurrentTime(self.options.startTime);
                    }

                    // get video width and height
                    self.player.getVideoWidth().then(function (width) {
                        self.videoWidth = width || 1280;
                    });
                    self.player.getVideoHeight().then(function (height) {
                        self.videoHeight = height || 720;
                    });

                    // events
                    var vmStarted = void 0;
                    self.player.on('timeupdate', function (e) {
                        if (!vmStarted) {
                            self.fire('started', e);
                            vmStarted = 1;
                        }

                        self.fire('timeupdate', e);

                        // check for end of video and play again or stop
                        if (self.options.endTime) {
                            if (self.options.endTime && e.seconds >= self.options.endTime) {
                                if (self.options.loop) {
                                    self.play(self.options.startTime);
                                } else {
                                    self.pause();
                                }
                            }
                        }
                    });
                    self.player.on('play', function (e) {
                        self.fire('play', e);

                        // check for the start time and start with it
                        if (self.options.startTime && e.seconds === 0) {
                            self.play(self.options.startTime);
                        }
                    });
                    self.player.on('pause', function (e) {
                        self.fire('pause', e);
                    });
                    self.player.on('ended', function (e) {
                        self.fire('ended', e);
                    });
                    self.player.on('loaded', function (e) {
                        self.fire('ready', e);
                    });
                    self.player.on('volumechange', function (e) {
                        self.fire('volumechange', e);
                    });
                }

                // Local
                function addSourceToLocal(element, src, type) {
                    var source = document.createElement('source');
                    source.src = src;
                    source.type = type;
                    element.appendChild(source);
                }
                if (self.type === 'local') {
                    if (!self.$video) {
                        self.$video = document.createElement('video');

                        // show controls
                        if (self.options.showContols) {
                            self.$video.controls = true;
                        }

                        // mute
                        if (self.options.mute) {
                            self.$video.muted = true;
                        } else if (self.$video.volume) {
                            self.$video.volume = self.options.volume / 100;
                        }

                        // loop
                        if (self.options.loop) {
                            self.$video.loop = true;
                        }

                        // autoplay enable on mobile devices
                        self.$video.setAttribute('playsinline', '');
                        self.$video.setAttribute('webkit-playsinline', '');

                        self.$video.setAttribute('id', self.playerID);
                        hiddenDiv.appendChild(self.$video);
                        document.body.appendChild(hiddenDiv);

                        Object.keys(self.videoID).forEach(function (key) {
                            addSourceToLocal(self.$video, self.videoID[key], 'video/' + key);
                        });
                    }

                    self.player = self.player || self.$video;

                    var locStarted = void 0;
                    self.player.addEventListener('playing', function (e) {
                        if (!locStarted) {
                            self.fire('started', e);
                        }
                        locStarted = 1;
                    });
                    self.player.addEventListener('timeupdate', function (e) {
                        self.fire('timeupdate', e);

                        // check for end of video and play again or stop
                        if (self.options.endTime) {
                            if (self.options.endTime && this.currentTime >= self.options.endTime) {
                                if (self.options.loop) {
                                    self.play(self.options.startTime);
                                } else {
                                    self.pause();
                                }
                            }
                        }
                    });
                    self.player.addEventListener('play', function (e) {
                        self.fire('play', e);
                    });
                    self.player.addEventListener('pause', function (e) {
                        self.fire('pause', e);
                    });
                    self.player.addEventListener('ended', function (e) {
                        self.fire('ended', e);
                    });
                    self.player.addEventListener('loadedmetadata', function () {
                        // get video width and height
                        self.videoWidth = this.videoWidth || 1280;
                        self.videoHeight = this.videoHeight || 720;

                        self.fire('ready');

                        // autoplay
                        if (self.options.autoplay) {
                            self.play(self.options.startTime);
                        }
                    });
                    self.player.addEventListener('volumechange', function (e) {
                        self.getVolume(function (volume) {
                            self.options.volume = volume;
                        });
                        self.fire('volumechange', e);
                    });
                }
                callback(self.$video);
            });
        }
    }, {
        key: 'init',
        value: function init() {
            var self = this;

            self.playerID = 'VideoWorker-' + self.ID;
        }
    }, {
        key: 'loadAPI',
        value: function loadAPI() {
            var self = this;

            if (YoutubeAPIadded && VimeoAPIadded) {
                return;
            }

            var src = '';

            // load Youtube API
            if (self.type === 'youtube' && !YoutubeAPIadded) {
                YoutubeAPIadded = 1;
                src = 'https://www.youtube.com/iframe_api';
            }

            // load Vimeo API
            if (self.type === 'vimeo' && !VimeoAPIadded) {
                VimeoAPIadded = 1;
                src = 'https://player.vimeo.com/api/player.js';
            }

            if (!src) {
                return;
            }

            // add script in head section
            var tag = document.createElement('script');
            var head = document.getElementsByTagName('head')[0];
            tag.src = src;

            head.appendChild(tag);

            head = null;
            tag = null;
        }
    }, {
        key: 'onAPIready',
        value: function onAPIready(callback) {
            var self = this;

            // Youtube
            if (self.type === 'youtube') {
                // Listen for global YT player callback
                if ((typeof YT === 'undefined' || YT.loaded === 0) && !loadingYoutubePlayer) {
                    // Prevents Ready event from being called twice
                    loadingYoutubePlayer = 1;

                    // Creates deferred so, other players know when to wait.
                    window.onYouTubeIframeAPIReady = function () {
                        window.onYouTubeIframeAPIReady = null;
                        loadingYoutubeDefer.resolve('done');
                        callback();
                    };
                } else if ((typeof YT === 'undefined' ? 'undefined' : _typeof(YT)) === 'object' && YT.loaded === 1) {
                    callback();
                } else {
                    loadingYoutubeDefer.done(function () {
                        callback();
                    });
                }
            }

            // Vimeo
            if (self.type === 'vimeo') {
                if (typeof Vimeo === 'undefined' && !loadingVimeoPlayer) {
                    loadingVimeoPlayer = 1;
                    var vimeoInterval = setInterval(function () {
                        if (typeof Vimeo !== 'undefined') {
                            clearInterval(vimeoInterval);
                            loadingVimeoDefer.resolve('done');
                            callback();
                        }
                    }, 20);
                } else if (typeof Vimeo !== 'undefined') {
                    callback();
                } else {
                    loadingVimeoDefer.done(function () {
                        callback();
                    });
                }
            }

            // Local
            if (self.type === 'local') {
                callback();
            }
        }
    }]);

    return VideoWorker;
}();

exports.default = VideoWorker;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = jarallaxVideo;

var _videoWorker = __webpack_require__(8);

var _videoWorker2 = _interopRequireDefault(_videoWorker);

var _global = __webpack_require__(4);

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jarallaxVideo() {
    var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;

    if (typeof jarallax === 'undefined') {
        return;
    }

    var Jarallax = jarallax.constructor;

    // append video after init Jarallax
    var defInit = Jarallax.prototype.init;
    Jarallax.prototype.init = function () {
        var self = this;

        defInit.apply(self);

        if (self.video && !self.options.disableVideo()) {
            self.video.getVideo(function (video) {
                var $parent = video.parentNode;
                self.css(video, {
                    position: self.image.position,
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    width: '100%',
                    height: '100%',
                    maxWidth: 'none',
                    maxHeight: 'none',
                    margin: 0,
                    zIndex: -1
                });
                self.$video = video;
                self.image.$container.appendChild(video);

                // remove parent video element (created by VideoWorker)
                $parent.parentNode.removeChild($parent);
            });
        }
    };

    // cover video
    var defCoverImage = Jarallax.prototype.coverImage;
    Jarallax.prototype.coverImage = function () {
        var self = this;
        var imageData = defCoverImage.apply(self);
        var node = self.image.$item ? self.image.$item.nodeName : false;

        if (imageData && self.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
            var h = imageData.image.height;
            var w = h * self.image.width / self.image.height;
            var ml = (imageData.container.width - w) / 2;
            var mt = imageData.image.marginTop;

            if (imageData.container.width > w) {
                w = imageData.container.width;
                h = w * self.image.height / self.image.width;
                ml = 0;
                mt += (imageData.image.height - h) / 2;
            }

            // add video height over than need to hide controls
            if (node === 'IFRAME') {
                h += 400;
                mt -= 200;
            }

            self.css(self.$video, {
                width: w + 'px',
                marginLeft: ml + 'px',
                height: h + 'px',
                marginTop: mt + 'px'
            });
        }

        return imageData;
    };

    // init video
    var defInitImg = Jarallax.prototype.initImg;
    Jarallax.prototype.initImg = function () {
        var self = this;
        var defaultResult = defInitImg.apply(self);

        if (!self.options.videoSrc) {
            self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
        }

        if (self.options.videoSrc) {
            self.defaultInitImgResult = defaultResult;
            return true;
        }

        return defaultResult;
    };

    var defCanInitParallax = Jarallax.prototype.canInitParallax;
    Jarallax.prototype.canInitParallax = function () {
        var self = this;
        var defaultResult = defCanInitParallax.apply(self);

        if (!self.options.videoSrc) {
            return defaultResult;
        }

        var video = new _videoWorker2.default(self.options.videoSrc, {
            autoplay: true,
            loop: self.options.videoLoop,
            showContols: false,
            startTime: self.options.videoStartTime || 0,
            endTime: self.options.videoEndTime || 0,
            mute: self.options.videoVolume ? 0 : 1,
            volume: self.options.videoVolume || 0
        });

        if (video.isValid()) {
            // if parallax will not be inited, we can add thumbnail on background.
            if (!defaultResult) {
                if (!self.defaultInitImgResult) {
                    video.getImageURL(function (url) {
                        // save default user styles
                        var curStyle = self.$item.getAttribute('style');
                        if (curStyle) {
                            self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                        }

                        // set new background
                        self.css(self.$item, {
                            'background-image': 'url("' + url + '")',
                            'background-position': 'center',
                            'background-size': 'cover'
                        });
                    });
                }

                // init video
            } else {
                video.on('ready', function () {
                    if (self.options.videoPlayOnlyVisible) {
                        var oldOnScroll = self.onScroll;
                        self.onScroll = function () {
                            oldOnScroll.apply(self);
                            if (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded) {
                                if (self.isVisible()) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }
                        };
                    } else {
                        video.play();
                    }
                });

                video.on('started', function () {
                    self.image.$default_item = self.image.$item;
                    self.image.$item = self.$video;

                    // set video width and height
                    self.image.width = self.video.videoWidth || 1280;
                    self.image.height = self.video.videoHeight || 720;
                    self.coverImage();
                    self.clipContainer();
                    self.onScroll();

                    // hide image
                    if (self.image.$default_item) {
                        self.image.$default_item.style.display = 'none';
                    }
                });

                video.on('ended', function () {
                    self.videoEnded = true;

                    if (!self.options.videoLoop) {
                        // show image if Loop disabled
                        if (self.image.$default_item) {
                            self.image.$item = self.image.$default_item;
                            self.image.$item.style.display = 'block';

                            // set image width and height
                            self.coverImage();
                            self.clipContainer();
                            self.onScroll();
                        }
                    }
                });

                self.video = video;

                // set image if not exists
                if (!self.defaultInitImgResult) {
                    if (video.type !== 'local') {
                        video.getImageURL(function (url) {
                            self.image.src = url;
                            self.init();
                        });

                        return false;
                    }

                    // set empty image on local video if not defined
                    self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                    return true;
                }
            }
        }

        return defaultResult;
    };

    // Destroy video parallax
    var defDestroy = Jarallax.prototype.destroy;
    Jarallax.prototype.destroy = function () {
        var self = this;

        if (self.image.$default_item) {
            self.image.$item = self.image.$default_item;
            delete self.image.$default_item;
        }

        defDestroy.apply(self);
    };
}

/***/ })
/******/ ]);
