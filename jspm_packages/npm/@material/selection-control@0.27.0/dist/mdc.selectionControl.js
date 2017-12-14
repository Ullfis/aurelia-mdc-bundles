/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["selectionControl"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["selectionControl"] = factory();
  })(this, function() {
    return (function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
          Object.defineProperty(exports, name, {
            configurable: false,
            enumerable: true,
            get: getter
          });
        }
      };
      __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
          return module['default'];
        } : function getModuleExports() {
          return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "/assets/";
      return __webpack_require__(__webpack_require__.s = 83);
    })({
      0: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var MDCFoundation = function() {
          _createClass(MDCFoundation, null, [{
            key: "cssClasses",
            get: function get() {
              return {};
            }
          }, {
            key: "strings",
            get: function get() {
              return {};
            }
          }, {
            key: "numbers",
            get: function get() {
              return {};
            }
          }, {
            key: "defaultAdapter",
            get: function get() {
              return {};
            }
          }]);
          function MDCFoundation() {
            var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck(this, MDCFoundation);
            this.adapter_ = adapter;
          }
          _createClass(MDCFoundation, [{
            key: "init",
            value: function init() {}
          }, {
            key: "destroy",
            value: function destroy() {}
          }]);
          return MDCFoundation;
        }();
        __webpack_exports__["a"] = (MDCFoundation);
      }),
      1: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var MDCComponent = function() {
          _createClass(MDCComponent, null, [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a"]());
            }
          }]);
          function MDCComponent(root) {
            var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            _classCallCheck(this, MDCComponent);
            this.root_ = root;
            for (var _len = arguments.length,
                args = Array(_len > 2 ? _len - 2 : 0),
                _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }
            this.initialize.apply(this, args);
            this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
            this.foundation_.init();
            this.initialSyncWithDOM();
          }
          _createClass(MDCComponent, [{
            key: 'initialize',
            value: function initialize() {}
          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {}
          }, {
            key: 'destroy',
            value: function destroy() {
              this.foundation_.destroy();
            }
          }, {
            key: 'listen',
            value: function listen(evtType, handler) {
              this.root_.addEventListener(evtType, handler);
            }
          }, {
            key: 'unlisten',
            value: function unlisten(evtType, handler) {
              this.root_.removeEventListener(evtType, handler);
            }
          }, {
            key: 'emit',
            value: function emit(evtType, evtData) {
              var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
              var evt = void 0;
              if (typeof CustomEvent === 'function') {
                evt = new CustomEvent(evtType, {
                  detail: evtData,
                  bubbles: shouldBubble
                });
              } else {
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(evtType, shouldBubble, false, evtData);
              }
              this.root_.dispatchEvent(evt);
            }
          }]);
          return MDCComponent;
        }();
        __webpack_exports__["a"] = (MDCComponent);
      }),
      2: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "supportsCssVariables", function() {
          return supportsCssVariables;
        });
        __webpack_require__.d(__webpack_exports__, "applyPassive", function() {
          return applyPassive;
        });
        __webpack_require__.d(__webpack_exports__, "getMatchesProperty", function() {
          return getMatchesProperty;
        });
        __webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function() {
          return getNormalizedEventCoords;
        });
        var supportsCssVariables_ = void 0;
        var supportsPassive_ = void 0;
        function detectEdgePseudoVarBug(windowObj) {
          var document = windowObj.document;
          var node = document.createElement('div');
          node.className = 'mdc-ripple-surface--test-edge-var-bug';
          document.body.appendChild(node);
          var computedStyle = windowObj.getComputedStyle(node);
          var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
          node.remove();
          return hasPseudoVarBug;
        }
        function supportsCssVariables(windowObj) {
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables_;
          }
          var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
          if (!supportsFunctionPresent) {
            return;
          }
          var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
          var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
          if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
          } else {
            supportsCssVariables_ = false;
          }
          return supportsCssVariables_;
        }
        function applyPassive() {
          var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported = false;
            try {
              globalObj.document.addEventListener('test', null, {get passive() {
                  isSupported = true;
                }});
            } catch (e) {}
            supportsPassive_ = isSupported;
          }
          return supportsPassive_ ? {passive: true} : false;
        }
        function getMatchesProperty(HTMLElementPrototype) {
          return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function(p) {
            return p in HTMLElementPrototype;
          }).pop();
        }
        function getNormalizedEventCoords(ev, pageOffset, clientRect) {
          var x = pageOffset.x,
              y = pageOffset.y;
          var documentX = x + clientRect.left;
          var documentY = y + clientRect.top;
          var normalizedX = void 0;
          var normalizedY = void 0;
          if (ev.type === 'touchstart') {
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
          } else {
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
          }
          return {
            x: normalizedX,
            y: normalizedY
          };
        }
      }),
      3: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var MDCRippleAdapter = function() {
          function MDCRippleAdapter() {
            _classCallCheck(this, MDCRippleAdapter);
          }
          _createClass(MDCRippleAdapter, [{
            key: "browserSupportsCssVars",
            value: function browserSupportsCssVars() {}
          }, {
            key: "isUnbounded",
            value: function isUnbounded() {}
          }, {
            key: "isSurfaceActive",
            value: function isSurfaceActive() {}
          }, {
            key: "isSurfaceDisabled",
            value: function isSurfaceDisabled() {}
          }, {
            key: "addClass",
            value: function addClass(className) {}
          }, {
            key: "removeClass",
            value: function removeClass(className) {}
          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}
          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}
          }, {
            key: "registerResizeHandler",
            value: function registerResizeHandler(handler) {}
          }, {
            key: "deregisterResizeHandler",
            value: function deregisterResizeHandler(handler) {}
          }, {
            key: "updateCssVariable",
            value: function updateCssVariable(varName, value) {}
          }, {
            key: "computeBoundingRect",
            value: function computeBoundingRect() {}
          }, {
            key: "getWindowPageOffset",
            value: function getWindowPageOffset() {}
          }]);
          return MDCRippleAdapter;
        }();
        var _unused_webpack_default_export = (MDCRippleAdapter);
      }),
      5: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "MDCRipple", function() {
          return MDCRipple;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(6);
        var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        __webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function() {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "util", function() {
          return __WEBPACK_IMPORTED_MODULE_3__util__;
        });
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var MDCRipple = function(_MDCComponent) {
          _inherits(MDCRipple, _MDCComponent);
          function MDCRipple() {
            var _ref;
            _classCallCheck(this, MDCRipple);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));
            _this.disabled = false;
            _this.unbounded_;
            return _this;
          }
          _createClass(MDCRipple, [{
            key: 'activate',
            value: function activate() {
              this.foundation_.activate();
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }
          }, {
            key: 'layout',
            value: function layout() {
              this.foundation_.layout();
            }
          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](MDCRipple.createAdapter(this));
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
            }
          }, {
            key: 'unbounded',
            get: function get() {
              return this.unbounded_;
            },
            set: function set(unbounded) {
              var UNBOUNDED = __WEBPACK_IMPORTED_MODULE_2__foundation__["a"].cssClasses.UNBOUNDED;
              this.unbounded_ = Boolean(unbounded);
              if (this.unbounded_) {
                this.root_.classList.add(UNBOUNDED);
              } else {
                this.root_.classList.remove(UNBOUNDED);
              }
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$isUnbounded = _ref2.isUnbounded,
                  isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;
              var ripple = new MDCRipple(root);
              if (isUnbounded !== undefined) {
                ripple.unbounded = isUnbounded;
              }
              return ripple;
            }
          }, {
            key: 'createAdapter',
            value: function createAdapter(instance) {
              var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);
              return {
                browserSupportsCssVars: function browserSupportsCssVars() {
                  return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
                },
                isUnbounded: function isUnbounded() {
                  return instance.unbounded;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return instance.root_[MATCHES](':active');
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                  return instance.disabled;
                },
                addClass: function addClass(className) {
                  return instance.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return instance.root_.classList.remove(className);
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerResizeHandler: function registerResizeHandler(handler) {
                  return window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function deregisterResizeHandler(handler) {
                  return window.removeEventListener('resize', handler);
                },
                updateCssVariable: function updateCssVariable(varName, value) {
                  return instance.root_.style.setProperty(varName, value);
                },
                computeBoundingRect: function computeBoundingRect() {
                  return instance.root_.getBoundingClientRect();
                },
                getWindowPageOffset: function getWindowPageOffset() {
                  return {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                  };
                }
              };
            }
          }]);
          return MDCRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
        var RippleCapableSurface = function RippleCapableSurface() {
          _classCallCheck(this, RippleCapableSurface);
        };
        RippleCapableSurface.prototype.root_;
        RippleCapableSurface.prototype.unbounded;
        RippleCapableSurface.prototype.disabled;
      }),
      6: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(7);
        var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {
              value: subClass,
              enumerable: false,
              writable: true,
              configurable: true
            }});
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var ActivationStateType = void 0;
        var ListenerInfoType = void 0;
        var ListenersType = void 0;
        var PointType = void 0;
        var DEACTIVATION_ACTIVATION_PAIRS = {
          mouseup: 'mousedown',
          pointerup: 'pointerdown',
          touchend: 'touchstart',
          keyup: 'keydown',
          blur: 'focus'
        };
        var MDCRippleFoundation = function(_MDCFoundation) {
          _inherits(MDCRippleFoundation, _MDCFoundation);
          _createClass(MDCRippleFoundation, null, [{
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c"];
            }
          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b"];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                browserSupportsCssVars: function browserSupportsCssVars() {},
                isUnbounded: function isUnbounded() {},
                isSurfaceActive: function isSurfaceActive() {},
                isSurfaceDisabled: function isSurfaceDisabled() {},
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                registerInteractionHandler: function registerInteractionHandler() {},
                deregisterInteractionHandler: function deregisterInteractionHandler() {},
                registerResizeHandler: function registerResizeHandler() {},
                deregisterResizeHandler: function deregisterResizeHandler() {},
                updateCssVariable: function updateCssVariable() {},
                computeBoundingRect: function computeBoundingRect() {},
                getWindowPageOffset: function getWindowPageOffset() {}
              };
            }
          }]);
          function MDCRippleFoundation(adapter) {
            _classCallCheck(this, MDCRippleFoundation);
            var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));
            _this.layoutFrame_ = 0;
            _this.frame_ = {
              width: 0,
              height: 0
            };
            _this.activationState_ = _this.defaultActivationState_();
            _this.xfDuration_ = 0;
            _this.initialSize_ = 0;
            _this.maxRadius_ = 0;
            _this.listenerInfos_ = [{
              activate: 'touchstart',
              deactivate: 'touchend'
            }, {
              activate: 'pointerdown',
              deactivate: 'pointerup'
            }, {
              activate: 'mousedown',
              deactivate: 'mouseup'
            }, {
              activate: 'keydown',
              deactivate: 'keyup'
            }, {
              focus: 'focus',
              blur: 'blur'
            }];
            _this.listeners_ = {
              activate: function activate(e) {
                return _this.activate_(e);
              },
              deactivate: function deactivate(e) {
                return _this.deactivate_(e);
              },
              focus: function focus() {
                return requestAnimationFrame(function() {
                  return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                });
              },
              blur: function blur() {
                return requestAnimationFrame(function() {
                  return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                });
              }
            };
            _this.resizeHandler_ = function() {
              return _this.layout();
            };
            _this.unboundedCoords_ = {
              left: 0,
              top: 0
            };
            _this.fgScale_ = 0;
            _this.activationTimer_ = 0;
            _this.fgDeactivationRemovalTimer_ = 0;
            _this.activationAnimationHasEnded_ = false;
            _this.activationTimerCallback_ = function() {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
            };
            return _this;
          }
          _createClass(MDCRippleFoundation, [{
            key: 'isSupported_',
            value: function isSupported_() {
              return this.adapter_.browserSupportsCssVars();
            }
          }, {
            key: 'defaultActivationState_',
            value: function defaultActivationState_() {
              return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationStartTime: 0,
                activationEvent: null,
                isProgrammatic: false
              };
            }
          }, {
            key: 'init',
            value: function init() {
              var _this2 = this;
              if (!this.isSupported_()) {
                return;
              }
              this.addEventListeners_();
              var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;
              requestAnimationFrame(function() {
                _this2.adapter_.addClass(ROOT);
                if (_this2.adapter_.isUnbounded()) {
                  _this2.adapter_.addClass(UNBOUNDED);
                }
                _this2.layoutInternal_();
              });
            }
          }, {
            key: 'addEventListeners_',
            value: function addEventListeners_() {
              var _this3 = this;
              this.listenerInfos_.forEach(function(info) {
                Object.keys(info).forEach(function(k) {
                  _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
                });
              });
              this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
          }, {
            key: 'activate_',
            value: function activate_(e) {
              var _this4 = this;
              if (this.adapter_.isSurfaceDisabled()) {
                return;
              }
              var activationState = this.activationState_;
              if (activationState.isActivated) {
                return;
              }
              activationState.isActivated = true;
              activationState.isProgrammatic = e === null;
              activationState.activationEvent = e;
              activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
              activationState.activationStartTime = Date.now();
              requestAnimationFrame(function() {
                activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
                if (activationState.wasElementMadeActive) {
                  _this4.animateActivation_();
                } else {
                  _this4.activationState_ = _this4.defaultActivationState_();
                }
              });
            }
          }, {
            key: 'activate',
            value: function activate() {
              var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              this.activate_(event);
            }
          }, {
            key: 'animateActivation_',
            value: function animateActivation_() {
              var _this5 = this;
              var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
                  VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
                  VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
              var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
                  BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
                  FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
                  FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
              var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
              var translateStart = '';
              var translateEnd = '';
              if (!this.adapter_.isUnbounded()) {
                var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                    startPoint = _getFgTranslationCoor.startPoint,
                    endPoint = _getFgTranslationCoor.endPoint;
                translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
                translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
              }
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
              clearTimeout(this.activationTimer_);
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.rmBoundedActivationClasses_();
              this.adapter_.removeClass(FG_DEACTIVATION);
              this.adapter_.computeBoundingRect();
              this.adapter_.addClass(BG_ACTIVE_FILL);
              this.adapter_.addClass(FG_ACTIVATION);
              this.activationTimer_ = setTimeout(function() {
                return _this5.activationTimerCallback_();
              }, DEACTIVATION_TIMEOUT_MS);
            }
          }, {
            key: 'getFgTranslationCoordinates_',
            value: function getFgTranslationCoordinates_() {
              var activationState = this.activationState_;
              var activationEvent = activationState.activationEvent,
                  wasActivatedByPointer = activationState.wasActivatedByPointer;
              var startPoint = void 0;
              if (wasActivatedByPointer) {
                startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
              } else {
                startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2
                };
              }
              startPoint = {
                x: startPoint.x - this.initialSize_ / 2,
                y: startPoint.y - this.initialSize_ / 2
              };
              var endPoint = {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2
              };
              return {
                startPoint: startPoint,
                endPoint: endPoint
              };
            }
          }, {
            key: 'runDeactivationUXLogicIfReady_',
            value: function runDeactivationUXLogicIfReady_() {
              var _this6 = this;
              var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
              var _activationState_ = this.activationState_,
                  hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
                  isActivated = _activationState_.isActivated;
              var activationHasEnded = hasDeactivationUXRun || !isActivated;
              if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                  _this6.adapter_.removeClass(FG_DEACTIVATION);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["b"].FG_DEACTIVATION_MS);
              }
            }
          }, {
            key: 'rmBoundedActivationClasses_',
            value: function rmBoundedActivationClasses_() {
              var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                  BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
                  FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
              this.adapter_.removeClass(BG_ACTIVE_FILL);
              this.adapter_.removeClass(FG_ACTIVATION);
              this.activationAnimationHasEnded_ = false;
              this.adapter_.computeBoundingRect();
            }
          }, {
            key: 'deactivate_',
            value: function deactivate_(e) {
              var _this7 = this;
              var activationState = this.activationState_;
              if (!activationState.isActivated) {
                return;
              }
              if (activationState.isProgrammatic) {
                var evtObject = null;
                var _state = _extends({}, activationState);
                requestAnimationFrame(function() {
                  return _this7.animateDeactivation_(evtObject, _state);
                });
                this.activationState_ = this.defaultActivationState_();
                return;
              }
              var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
              var expectedActivationType = activationState.activationEvent.type;
              var needsDeactivationUX = actualActivationType === expectedActivationType;
              var needsActualDeactivation = needsDeactivationUX;
              if (activationState.wasActivatedByPointer) {
                needsActualDeactivation = e.type === 'mouseup';
              }
              var state = _extends({}, activationState);
              requestAnimationFrame(function() {
                if (needsDeactivationUX) {
                  _this7.activationState_.hasDeactivationUXRun = true;
                  _this7.animateDeactivation_(e, state);
                }
                if (needsActualDeactivation) {
                  _this7.activationState_ = _this7.defaultActivationState_();
                }
              });
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
              this.deactivate_(event);
            }
          }, {
            key: 'animateDeactivation_',
            value: function animateDeactivation_(e, _ref) {
              var wasActivatedByPointer = _ref.wasActivatedByPointer,
                  wasElementMadeActive = _ref.wasElementMadeActive;
              var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;
              if (wasActivatedByPointer || wasElementMadeActive) {
                this.adapter_.removeClass(BG_FOCUSED);
                this.runDeactivationUXLogicIfReady_();
              }
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this8 = this;
              if (!this.isSupported_()) {
                return;
              }
              this.removeEventListeners_();
              var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$5.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;
              requestAnimationFrame(function() {
                _this8.adapter_.removeClass(ROOT);
                _this8.adapter_.removeClass(UNBOUNDED);
                _this8.removeCssVars_();
              });
            }
          }, {
            key: 'removeEventListeners_',
            value: function removeEventListeners_() {
              var _this9 = this;
              this.listenerInfos_.forEach(function(info) {
                Object.keys(info).forEach(function(k) {
                  _this9.adapter_.deregisterInteractionHandler(info[k], _this9.listeners_[k]);
                });
              });
              this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }
          }, {
            key: 'removeCssVars_',
            value: function removeCssVars_() {
              var _this10 = this;
              var strings = MDCRippleFoundation.strings;
              Object.keys(strings).forEach(function(k) {
                if (k.indexOf('VAR_') === 0) {
                  _this10.adapter_.updateCssVariable(strings[k], null);
                }
              });
            }
          }, {
            key: 'layout',
            value: function layout() {
              var _this11 = this;
              if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
              }
              this.layoutFrame_ = requestAnimationFrame(function() {
                _this11.layoutInternal_();
                _this11.layoutFrame_ = 0;
              });
            }
          }, {
            key: 'layoutInternal_',
            value: function layoutInternal_() {
              this.frame_ = this.adapter_.computeBoundingRect();
              var maxDim = Math.max(this.frame_.height, this.frame_.width);
              var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));
              this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
              this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
              this.fgScale_ = this.maxRadius_ / this.initialSize_;
              this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
              this.updateLayoutCssVars_();
            }
          }, {
            key: 'updateLayoutCssVars_',
            value: function updateLayoutCssVars_() {
              var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
                  VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
                  VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
                  VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
                  VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;
              this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
              this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
              if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                  left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                  top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                };
                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
              }
            }
          }]);
          return MDCRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
        __webpack_exports__["a"] = (MDCRippleFoundation);
      }),
      7: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return cssClasses;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return strings;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return numbers;
        });
        var cssClasses = {
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
        };
        var strings = {
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
        };
        var numbers = {
          PADDING: 10,
          INITIAL_ORIGIN_SCALE: 0.6,
          DEACTIVATION_TIMEOUT_MS: 225,
          FG_DEACTIVATION_MS: 150
        };
      }),
      83: (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(9);
      }),
      9: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "MDCSelectionControlState", function() {
          return MDCSelectionControlState;
        });
        __webpack_require__.d(__webpack_exports__, "MDCSelectionControl", function() {
          return MDCSelectionControl;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_ripple__ = __webpack_require__(5);
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var MDCSelectionControlState = void 0;
        var MDCSelectionControl = function() {
          function MDCSelectionControl() {
            _classCallCheck(this, MDCSelectionControl);
          }
          _createClass(MDCSelectionControl, [{
            key: 'ripple',
            get: function get() {}
          }]);
          return MDCSelectionControl;
        }();
      })
    });
  });
})(require('process'));
