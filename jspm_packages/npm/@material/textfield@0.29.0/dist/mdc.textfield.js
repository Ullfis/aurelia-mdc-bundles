/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["textfield"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["textfield"] = factory();
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
      return __webpack_require__(__webpack_require__.s = 107);
    })([(function(module, __webpack_exports__, __webpack_require__) {
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
          key: "registerDocumentInteractionHandler",
          value: function registerDocumentInteractionHandler(evtType, handler) {}
        }, {
          key: "deregisterDocumentInteractionHandler",
          value: function deregisterDocumentInteractionHandler(evtType, handler) {}
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
    }), , (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCRipple", function() {
        return MDCRipple;
      });
      __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() {
        return RippleCapableSurface;
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
          key: 'setUnbounded_',
          value: function setUnbounded_() {
            this.foundation_.setUnbounded(this.unbounded_);
          }
        }, {
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
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
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
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];
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
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {},
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {},
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
          _this.activateHandler_ = function(e) {
            return _this.activate_(e);
          };
          _this.deactivateHandler_ = function(e) {
            return _this.deactivate_(e);
          };
          _this.focusHandler_ = function() {
            return requestAnimationFrame(function() {
              return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          };
          _this.blurHandler_ = function() {
            return requestAnimationFrame(function() {
              return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
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
          _this.previousActivationEvent_ = null;
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
            this.registerRootHandlers_();
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
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            if (!this.isSupported_()) {
              return;
            }
            this.deregisterRootHandlers_();
            this.deregisterDeactivationHandlers_();
            var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                ROOT = _MDCRippleFoundation$2.ROOT,
                UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;
            requestAnimationFrame(function() {
              _this3.adapter_.removeClass(ROOT);
              _this3.adapter_.removeClass(UNBOUNDED);
              _this3.removeCssVars_();
            });
          }
        }, {
          key: 'registerRootHandlers_',
          value: function registerRootHandlers_() {
            var _this4 = this;
            ACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
            });
            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'registerDeactivationHandlers_',
          value: function registerDeactivationHandlers_(e) {
            var _this5 = this;
            if (e.type === 'keydown') {
              this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
            } else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(type) {
                _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
              });
            }
          }
        }, {
          key: 'deregisterRootHandlers_',
          value: function deregisterRootHandlers_() {
            var _this6 = this;
            ACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
            });
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'deregisterDeactivationHandlers_',
          value: function deregisterDeactivationHandlers_() {
            var _this7 = this;
            this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(type) {
              _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
            });
          }
        }, {
          key: 'removeCssVars_',
          value: function removeCssVars_() {
            var _this8 = this;
            var strings = MDCRippleFoundation.strings;
            Object.keys(strings).forEach(function(k) {
              if (k.indexOf('VAR_') === 0) {
                _this8.adapter_.updateCssVariable(strings[k], null);
              }
            });
          }
        }, {
          key: 'activate_',
          value: function activate_(e) {
            var _this9 = this;
            if (this.adapter_.isSurfaceDisabled()) {
              return;
            }
            var activationState = this.activationState_;
            if (activationState.isActivated) {
              return;
            }
            var previousActivationEvent = this.previousActivationEvent_;
            var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
            if (isSameInteraction) {
              return;
            }
            activationState.isActivated = true;
            activationState.isProgrammatic = e === null;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
            if (e) {
              this.registerDeactivationHandlers_(e);
            }
            requestAnimationFrame(function() {
              activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this9.adapter_.isSurfaceActive() : true;
              if (activationState.wasElementMadeActive) {
                _this9.animateActivation_();
              } else {
                _this9.activationState_ = _this9.defaultActivationState_();
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
            var _this10 = this;
            var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
            var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
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
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function() {
              return _this10.activationTimerCallback_();
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
            var _this11 = this;
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _activationState_ = this.activationState_,
                hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
                isActivated = _activationState_.isActivated;
            var activationHasEnded = hasDeactivationUXRun || !isActivated;
            if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter_.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                _this11.adapter_.removeClass(FG_DEACTIVATION);
              }, __WEBPACK_IMPORTED_MODULE_2__constants__["b"].FG_DEACTIVATION_MS);
            }
          }
        }, {
          key: 'rmBoundedActivationClasses_',
          value: function rmBoundedActivationClasses_() {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
          }
        }, {
          key: 'resetActivationState_',
          value: function resetActivationState_() {
            var _this12 = this;
            this.previousActivationEvent_ = this.activationState_.activationEvent;
            this.activationState_ = this.defaultActivationState_();
            setTimeout(function() {
              return _this12.previousActivationEvent_ = null;
            }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
          }
        }, {
          key: 'deactivate_',
          value: function deactivate_(e) {
            var _this13 = this;
            var activationState = this.activationState_;
            if (!activationState.isActivated) {
              return;
            }
            var state = _extends({}, activationState);
            if (activationState.isProgrammatic) {
              var evtObject = null;
              requestAnimationFrame(function() {
                return _this13.animateDeactivation_(evtObject, state);
              });
              this.resetActivationState_();
            } else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function() {
                _this13.activationState_.hasDeactivationUXRun = true;
                _this13.animateDeactivation_(e, state);
                _this13.resetActivationState_();
              });
            }
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
            if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this14 = this;
            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function() {
              _this14.layoutInternal_();
              _this14.layoutFrame_ = 0;
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
            var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;
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
        }, {
          key: 'setUnbounded',
          value: function setUnbounded(unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
            if (unbounded) {
              this.adapter_.addClass(UNBOUNDED);
            } else {
              this.adapter_.removeClass(UNBOUNDED);
            }
          }
        }]);
        return MDCRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCRippleFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
      };
      var strings = {
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
      };
      var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        TAP_DELAY_MS: 300
      };
    }), , , , , , , , , , , (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(109);
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
      var MDCTextFieldBottomLineFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldBottomLineFoundation, _MDCFoundation);
        _createClass(MDCTextFieldBottomLineFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              setAttr: function setAttr() {},
              registerEventHandler: function registerEventHandler() {},
              deregisterEventHandler: function deregisterEventHandler() {},
              notifyAnimationEnd: function notifyAnimationEnd() {}
            });
          }
        }]);
        function MDCTextFieldBottomLineFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTextFieldBottomLineFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTextFieldBottomLineFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldBottomLineFoundation)).call(this, _extends(MDCTextFieldBottomLineFoundation.defaultAdapter, adapter)));
          _this.transitionEndHandler_ = function(evt) {
            return _this.handleTransitionEnd(evt);
          };
          return _this;
        }
        _createClass(MDCTextFieldBottomLineFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].BOTTOM_LINE_ACTIVE);
          }
        }, {
          key: 'setTransformOrigin',
          value: function setTransformOrigin(evt) {
            var targetClientRect = evt.target.getBoundingClientRect();
            var evtCoords = {
              x: evt.clientX,
              y: evt.clientY
            };
            var normalizedX = evtCoords.x - targetClientRect.left;
            var attributeString = 'transform-origin: ' + normalizedX + 'px center';
            this.adapter_.setAttr('style', attributeString);
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].BOTTOM_LINE_ACTIVE);
          }
        }, {
          key: 'handleTransitionEnd',
          value: function handleTransitionEnd(evt) {
            if (evt.propertyName === 'opacity') {
              this.adapter_.notifyAnimationEnd();
            }
          }
        }]);
        return MDCTextFieldBottomLineFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldBottomLineFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(32);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(110);
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
      var MDCTextFieldHelperTextFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);
        _createClass(MDCTextFieldHelperTextFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              hasClass: function hasClass() {},
              setAttr: function setAttr() {},
              removeAttr: function removeAttr() {},
              setContent: function setContent() {}
            });
          }
        }]);
        function MDCTextFieldHelperTextFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTextFieldHelperTextFoundation);
          return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
        }
        _createClass(MDCTextFieldHelperTextFoundation, [{
          key: 'setContent',
          value: function setContent(content) {
            this.adapter_.setContent(content);
          }
        }, {
          key: 'setPersistent',
          value: function setPersistent(isPersistent) {
            if (isPersistent) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_PERSISTENT);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_PERSISTENT);
            }
          }
        }, {
          key: 'setValidation',
          value: function setValidation(isValidation) {
            if (isValidation) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_VALIDATION_MSG);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_VALIDATION_MSG);
            }
          }
        }, {
          key: 'showToScreenReader',
          value: function showToScreenReader() {
            this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b"].ARIA_HIDDEN);
          }
        }, {
          key: 'setValidity',
          value: function setValidity(inputIsValid) {
            var helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_PERSISTENT);
            var helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].HELPER_TEXT_VALIDATION_MSG);
            var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
            if (validationMsgNeedsDisplay) {
              this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b"].ROLE, 'alert');
            } else {
              this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b"].ROLE);
            }
            if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
              this.hide_();
            }
          }
        }, {
          key: 'hide_',
          value: function hide_() {
            this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b"].ARIA_HIDDEN, 'true');
          }
        }]);
        return MDCTextFieldHelperTextFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldHelperTextFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(33);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(111);
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
      var MDCTextFieldIconFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldIconFoundation, _MDCFoundation);
        _createClass(MDCTextFieldIconFoundation, null, [{
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              setAttr: function setAttr() {},
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              notifyIconAction: function notifyIconAction() {}
            });
          }
        }]);
        function MDCTextFieldIconFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTextFieldIconFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, _extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));
          _this.interactionHandler_ = function(evt) {
            return _this.handleInteraction(evt);
          };
          return _this;
        }
        _createClass(MDCTextFieldIconFoundation, [{
          key: 'init',
          value: function init() {
            var _this2 = this;
            ['click', 'keydown'].forEach(function(evtType) {
              _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            ['click', 'keydown'].forEach(function(evtType) {
              _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
            });
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            if (disabled) {
              this.adapter_.setAttr('tabindex', '-1');
            } else {
              this.adapter_.setAttr('tabindex', '0');
            }
          }
        }, {
          key: 'handleInteraction',
          value: function handleInteraction(evt) {
            if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
              this.adapter_.notifyIconAction();
            }
          }
        }]);
        return MDCTextFieldIconFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldIconFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(34);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(112);
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
      var MDCTextFieldLabelFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldLabelFoundation, _MDCFoundation);
        _createClass(MDCTextFieldLabelFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              getWidth: function getWidth() {}
            });
          }
        }]);
        function MDCTextFieldLabelFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTextFieldLabelFoundation);
          return _possibleConstructorReturn(this, (MDCTextFieldLabelFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldLabelFoundation)).call(this, _extends(MDCTextFieldLabelFoundation.defaultAdapter, adapter)));
        }
        _createClass(MDCTextFieldLabelFoundation, [{
          key: 'getWidth',
          value: function getWidth() {
            return this.adapter_.getWidth();
          }
        }, {
          key: 'styleShake',
          value: function styleShake(isValid, isFocused) {
            var LABEL_SHAKE = MDCTextFieldLabelFoundation.cssClasses.LABEL_SHAKE;
            if (isValid || isFocused) {
              this.adapter_.removeClass(LABEL_SHAKE);
            } else {
              this.adapter_.addClass(LABEL_SHAKE);
            }
          }
        }, {
          key: 'styleFloat',
          value: function styleFloat(value, isFocused, isBadInput) {
            var LABEL_FLOAT_ABOVE = MDCTextFieldLabelFoundation.cssClasses.LABEL_FLOAT_ABOVE;
            if (!!value || isFocused) {
              this.adapter_.addClass(LABEL_FLOAT_ABOVE);
            } else if (!isBadInput) {
              this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            }
          }
        }]);
        return MDCTextFieldLabelFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldLabelFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(35);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(36);
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
      var MDCTextFieldOutlineFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldOutlineFoundation, _MDCFoundation);
        _createClass(MDCTextFieldOutlineFoundation, null, [{
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              getWidth: function getWidth() {},
              getHeight: function getHeight() {},
              setOutlinePathAttr: function setOutlinePathAttr() {},
              getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
            });
          }
        }]);
        function MDCTextFieldOutlineFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTextFieldOutlineFoundation);
          return _possibleConstructorReturn(this, (MDCTextFieldOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldOutlineFoundation)).call(this, _extends(MDCTextFieldOutlineFoundation.defaultAdapter, adapter)));
        }
        _createClass(MDCTextFieldOutlineFoundation, [{
          key: 'updateSvgPath',
          value: function updateSvgPath(labelWidth) {
            var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
            var radius = parseFloat(radiusStyleValue);
            var width = this.adapter_.getWidth();
            var height = this.adapter_.getHeight();
            var cornerWidth = radius + 1.2;
            var leadingStrokeLength = Math.abs(11 - cornerWidth);
            var paddedLabelWidth = labelWidth + 8;
            var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;
            var path = void 0;
            if (!isRtl) {
              path = 'M' + (cornerWidth + leadingStrokeLength + paddedLabelWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedLabelWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
            } else {
              path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedLabelWidth - leadingStrokeLength);
            }
            this.adapter_.setOutlinePathAttr(path);
          }
        }]);
        return MDCTextFieldOutlineFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldOutlineFoundation);
    }), , , , , , , (function(module, __webpack_exports__, __webpack_require__) {
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
      var strings = {
        ARIA_CONTROLS: 'aria-controls',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-text-field__label',
        ICON_SELECTOR: '.mdc-text-field__icon',
        OUTLINE_SELECTOR: '.mdc-text-field__outline',
        BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line'
      };
      var cssClasses = {
        ROOT: 'mdc-text-field',
        UPGRADED: 'mdc-text-field--upgraded',
        DISABLED: 'mdc-text-field--disabled',
        DENSE: 'mdc-text-field--dense',
        FOCUSED: 'mdc-text-field--focused',
        INVALID: 'mdc-text-field--invalid',
        BOX: 'mdc-text-field--box',
        OUTLINED: 'mdc-text-field--outlined'
      };
      var numbers = {
        LABEL_SCALE: 0.75,
        DENSE_LABEL_SCALE: 0.923
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__bottom_line_foundation__ = __webpack_require__(18);
      var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(19);
      var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(20);
      var __WEBPACK_IMPORTED_MODULE_3__label_foundation__ = __webpack_require__(21);
      var __WEBPACK_IMPORTED_MODULE_4__outline_foundation__ = __webpack_require__(22);
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
      var NativeInputType = void 0;
      var FoundationMapType = void 0;
      var MDCTextFieldAdapter = function() {
        function MDCTextFieldAdapter() {
          _classCallCheck(this, MDCTextFieldAdapter);
        }
        _createClass(MDCTextFieldAdapter, [{
          key: 'addClass',
          value: function addClass(className) {}
        }, {
          key: 'removeClass',
          value: function removeClass(className) {}
        }, {
          key: 'hasClass',
          value: function hasClass(className) {}
        }, {
          key: 'registerTextFieldInteractionHandler',
          value: function registerTextFieldInteractionHandler(type, handler) {}
        }, {
          key: 'deregisterTextFieldInteractionHandler',
          value: function deregisterTextFieldInteractionHandler(type, handler) {}
        }, {
          key: 'registerInputInteractionHandler',
          value: function registerInputInteractionHandler(evtType, handler) {}
        }, {
          key: 'deregisterInputInteractionHandler',
          value: function deregisterInputInteractionHandler(evtType, handler) {}
        }, {
          key: 'registerBottomLineEventHandler',
          value: function registerBottomLineEventHandler(evtType, handler) {}
        }, {
          key: 'deregisterBottomLineEventHandler',
          value: function deregisterBottomLineEventHandler(evtType, handler) {}
        }, {
          key: 'getNativeInput',
          value: function getNativeInput() {}
        }, {
          key: 'isFocused',
          value: function isFocused() {}
        }, {
          key: 'isRtl',
          value: function isRtl() {}
        }]);
        return MDCTextFieldAdapter;
      }();
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var MDCTextFieldBottomLineAdapter = function() {
        function MDCTextFieldBottomLineAdapter() {
          _classCallCheck(this, MDCTextFieldBottomLineAdapter);
        }
        _createClass(MDCTextFieldBottomLineAdapter, [{
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "setAttr",
          value: function setAttr(attr, value) {}
        }, {
          key: "registerEventHandler",
          value: function registerEventHandler(evtType, handler) {}
        }, {
          key: "deregisterEventHandler",
          value: function deregisterEventHandler(evtType, handler) {}
        }, {
          key: "notifyAnimationEnd",
          value: function notifyAnimationEnd() {}
        }]);
        return MDCTextFieldBottomLineAdapter;
      }();
      var _unused_webpack_default_export = (MDCTextFieldBottomLineAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var MDCTextFieldHelperTextAdapter = function() {
        function MDCTextFieldHelperTextAdapter() {
          _classCallCheck(this, MDCTextFieldHelperTextAdapter);
        }
        _createClass(MDCTextFieldHelperTextAdapter, [{
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "hasClass",
          value: function hasClass(className) {}
        }, {
          key: "setAttr",
          value: function setAttr(attr, value) {}
        }, {
          key: "removeAttr",
          value: function removeAttr(attr) {}
        }, {
          key: "setContent",
          value: function setContent(content) {}
        }]);
        return MDCTextFieldHelperTextAdapter;
      }();
      var _unused_webpack_default_export = (MDCTextFieldHelperTextAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var MDCTextFieldIconAdapter = function() {
        function MDCTextFieldIconAdapter() {
          _classCallCheck(this, MDCTextFieldIconAdapter);
        }
        _createClass(MDCTextFieldIconAdapter, [{
          key: "setAttr",
          value: function setAttr(attr, value) {}
        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}
        }, {
          key: "notifyIconAction",
          value: function notifyIconAction() {}
        }]);
        return MDCTextFieldIconAdapter;
      }();
      var _unused_webpack_default_export = (MDCTextFieldIconAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var MDCTextFieldLabelAdapter = function() {
        function MDCTextFieldLabelAdapter() {
          _classCallCheck(this, MDCTextFieldLabelAdapter);
        }
        _createClass(MDCTextFieldLabelAdapter, [{
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "getWidth",
          value: function getWidth() {}
        }]);
        return MDCTextFieldLabelAdapter;
      }();
      var _unused_webpack_default_export = (MDCTextFieldLabelAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
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
      var MDCTextFieldOutlineAdapter = function() {
        function MDCTextFieldOutlineAdapter() {
          _classCallCheck(this, MDCTextFieldOutlineAdapter);
        }
        _createClass(MDCTextFieldOutlineAdapter, [{
          key: "getWidth",
          value: function getWidth() {}
        }, {
          key: "getHeight",
          value: function getHeight() {}
        }, {
          key: "setOutlinePathAttr",
          value: function setOutlinePathAttr(value) {}
        }, {
          key: "getIdleOutlineStyleValue",
          value: function getIdleOutlineStyleValue(propertyName) {}
        }]);
        return MDCTextFieldOutlineAdapter;
      }();
      var _unused_webpack_default_export = (MDCTextFieldOutlineAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return strings;
      });
      var strings = {
        PATH_SELECTOR: '.mdc-text-field__outline-path',
        IDLE_OUTLINE_SELECTOR: '.mdc-text-field__idle-outline'
      };
    }), , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , (function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(108);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCTextField", function() {
        return MDCTextField;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(29);
      var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(30);
      var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(113);
      var __WEBPACK_IMPORTED_MODULE_6__bottom_line__ = __webpack_require__(114);
      var __WEBPACK_IMPORTED_MODULE_7__helper_text__ = __webpack_require__(115);
      var __WEBPACK_IMPORTED_MODULE_8__icon__ = __webpack_require__(116);
      var __WEBPACK_IMPORTED_MODULE_9__label__ = __webpack_require__(117);
      var __WEBPACK_IMPORTED_MODULE_10__outline__ = __webpack_require__(118);
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldBottomLine", function() {
        return __WEBPACK_IMPORTED_MODULE_6__bottom_line__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldBottomLineFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_6__bottom_line__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() {
        return __WEBPACK_IMPORTED_MODULE_7__helper_text__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_7__helper_text__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() {
        return __WEBPACK_IMPORTED_MODULE_8__icon__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_8__icon__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldLabel", function() {
        return __WEBPACK_IMPORTED_MODULE_9__label__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldLabelFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_9__label__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldOutline", function() {
        return __WEBPACK_IMPORTED_MODULE_10__outline__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldOutlineFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_10__outline__["b"];
      });
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
      var _get = function get(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === undefined) {
            return undefined;
          }
          return getter.call(receiver);
        }
      };
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
      var MDCTextField = function(_MDCComponent) {
        _inherits(MDCTextField, _MDCComponent);
        function MDCTextField() {
          var _ref;
          _classCallCheck(this, MDCTextField);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));
          _this.input_;
          _this.ripple;
          _this.bottomLine_;
          _this.helperText_;
          _this.icon_;
          _this.label_;
          _this.outline_;
          return _this;
        }
        _createClass(MDCTextField, [{
          key: 'initialize',
          value: function initialize() {
            var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(el, foundation) {
              return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](el, foundation);
            };
            var bottomLineFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_6__bottom_line__["a"](el);
            };
            var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_7__helper_text__["a"](el);
            };
            var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_8__icon__["a"](el);
            };
            var _this2 = this;
            var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_9__label__["a"](el);
            };
            var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_10__outline__["a"](el);
            };
            this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].INPUT_SELECTOR);
            var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].LABEL_SELECTOR);
            if (labelElement) {
              this.label_ = labelFactory(labelElement);
            }
            var bottomLineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].BOTTOM_LINE_SELECTOR);
            if (bottomLineElement) {
              this.bottomLine_ = bottomLineFactory(bottomLineElement);
            }
            var outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].OUTLINE_SELECTOR);
            if (outlineElement) {
              this.outline_ = outlineFactory(outlineElement);
            }
            if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].ARIA_CONTROLS)) {
              var helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].ARIA_CONTROLS));
              if (helperTextElement) {
                this.helperText_ = helperTextFactory(helperTextElement);
              }
            }
            var iconElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].ICON_SELECTOR);
            if (iconElement) {
              this.icon_ = iconFactory(iconElement);
            }
            this.ripple = null;
            if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].BOX) || this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].OUTLINED)) {
              var rippleCapableSurface = outlineElement ? this.outline_ : this;
              var rippleRoot = outlineElement ? outlineElement : this.root_;
              var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
              var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(rippleCapableSurface), {
                isSurfaceActive: function isSurfaceActive() {
                  return _this2.input_[MATCHES](':active');
                },
                registerInteractionHandler: function registerInteractionHandler(type, handler) {
                  return _this2.input_.addEventListener(type, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                  return _this2.input_.removeEventListener(type, handler);
                }
              });
              var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRippleFoundation"](adapter);
              this.ripple = rippleFactory(rippleRoot, foundation);
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            if (this.ripple) {
              this.ripple.destroy();
            }
            if (this.bottomLine_) {
              this.bottomLine_.destroy();
            }
            if (this.helperText_) {
              this.helperText_.destroy();
            }
            if (this.icon_) {
              this.icon_.destroy();
            }
            if (this.label_) {
              this.label_.destroy();
            }
            if (this.outline_) {
              this.outline_.destroy();
            }
            _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'initialSyncWithDom',
          value: function initialSyncWithDom() {
            this.disabled = this.input_.disabled;
          }
        }, {
          key: 'layout',
          value: function layout() {
            if (this.outline_) {
              this.foundation_.updateOutline();
            }
            if (this.ripple) {
              this.ripple.layout();
            }
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a"](_extends({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this3.root_.classList.contains(className);
              },
              registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
                return _this3.root_.addEventListener(evtType, handler);
              },
              deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
                return _this3.root_.removeEventListener(evtType, handler);
              },
              registerBottomLineEventHandler: function registerBottomLineEventHandler(evtType, handler) {
                if (_this3.bottomLine_) {
                  _this3.bottomLine_.listen(evtType, handler);
                }
              },
              deregisterBottomLineEventHandler: function deregisterBottomLineEventHandler(evtType, handler) {
                if (_this3.bottomLine_) {
                  _this3.bottomLine_.unlisten(evtType, handler);
                }
              },
              isFocused: function isFocused() {
                return document.activeElement === _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].INPUT_SELECTOR);
              },
              isRtl: function isRtl() {
                return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
              }
            }, this.getInputAdapterMethods_()), this.getFoundationMap_());
          }
        }, {
          key: 'getInputAdapterMethods_',
          value: function getInputAdapterMethods_() {
            var _this4 = this;
            return {
              registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
                return _this4.input_.addEventListener(evtType, handler);
              },
              deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
                return _this4.input_.removeEventListener(evtType, handler);
              },
              getNativeInput: function getNativeInput() {
                return _this4.input_;
              }
            };
          }
        }, {
          key: 'getFoundationMap_',
          value: function getFoundationMap_() {
            return {
              bottomLine: this.bottomLine_ ? this.bottomLine_.foundation : undefined,
              helperText: this.helperText_ ? this.helperText_.foundation : undefined,
              icon: this.icon_ ? this.icon_.foundation : undefined,
              label: this.label_ ? this.label_.foundation : undefined,
              outline: this.outline_ ? this.outline_.foundation : undefined
            };
          }
        }, {
          key: 'value',
          get: function get() {
            return this.foundation_.getValue();
          },
          set: function set(value) {
            this.foundation_.setValue(value);
          }
        }, {
          key: 'disabled',
          get: function get() {
            return this.foundation_.isDisabled();
          },
          set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
          }
        }, {
          key: 'valid',
          get: function get() {
            return this.foundation_.isValid();
          },
          set: function set(valid) {
            this.foundation_.setValid(valid);
          }
        }, {
          key: 'required',
          get: function get() {
            return this.foundation_.isRequired();
          },
          set: function set(required) {
            this.foundation_.setRequired(required);
          }
        }, {
          key: 'helperTextContent',
          set: function set(content) {
            this.foundation_.setHelperTextContent(content);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextField(root);
          }
        }]);
        return MDCTextField;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      var strings = {ANIMATION_END_EVENT: 'MDCTextFieldBottomLine:animation-end'};
      var cssClasses = {BOTTOM_LINE_ACTIVE: 'mdc-text-field__bottom-line--active'};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      var strings = {
        ARIA_HIDDEN: 'aria-hidden',
        ROLE: 'role'
      };
      var cssClasses = {
        HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
        HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return strings;
      });
      var strings = {ICON_EVENT: 'MDCTextField:icon'};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      var cssClasses = {
        LABEL_FLOAT_ABOVE: 'mdc-text-field__label--float-above',
        LABEL_SHAKE: 'mdc-text-field__label--shake'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(30);
      var __WEBPACK_IMPORTED_MODULE_2__bottom_line_foundation__ = __webpack_require__(18);
      var __WEBPACK_IMPORTED_MODULE_3__helper_text_foundation__ = __webpack_require__(19);
      var __WEBPACK_IMPORTED_MODULE_4__icon_foundation__ = __webpack_require__(20);
      var __WEBPACK_IMPORTED_MODULE_5__label_foundation__ = __webpack_require__(21);
      var __WEBPACK_IMPORTED_MODULE_6__outline_foundation__ = __webpack_require__(22);
      var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(29);
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
      var MDCTextFieldFoundation = function(_MDCFoundation) {
        _inherits(MDCTextFieldFoundation, _MDCFoundation);
        _createClass(MDCTextFieldFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_7__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_7__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_7__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              hasClass: function hasClass() {},
              registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
              deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
              registerInputInteractionHandler: function registerInputInteractionHandler() {},
              deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
              registerBottomLineEventHandler: function registerBottomLineEventHandler() {},
              deregisterBottomLineEventHandler: function deregisterBottomLineEventHandler() {},
              getNativeInput: function getNativeInput() {},
              isFocused: function isFocused() {},
              isRtl: function isRtl() {}
            });
          }
        }]);
        function MDCTextFieldFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, MDCTextFieldFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));
          _this.bottomLine_ = foundationMap.bottomLine;
          _this.helperText_ = foundationMap.helperText;
          _this.icon_ = foundationMap.icon;
          _this.label_ = foundationMap.label;
          _this.outline_ = foundationMap.outline;
          _this.isFocused_ = false;
          _this.receivedUserInput_ = false;
          _this.useCustomValidityChecking_ = false;
          _this.isValid_ = true;
          _this.inputFocusHandler_ = function() {
            return _this.activateFocus();
          };
          _this.inputBlurHandler_ = function() {
            return _this.deactivateFocus();
          };
          _this.inputInputHandler_ = function() {
            return _this.autoCompleteFocus();
          };
          _this.setPointerXOffset_ = function(evt) {
            return _this.setBottomLineTransformOrigin(evt);
          };
          _this.textFieldInteractionHandler_ = function() {
            return _this.handleTextFieldInteraction();
          };
          _this.bottomLineAnimationEndHandler_ = function() {
            return _this.handleBottomLineAnimationEnd();
          };
          return _this;
        }
        _createClass(MDCTextFieldFoundation, [{
          key: 'init',
          value: function init() {
            var _this2 = this;
            this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
            if (this.label_ && this.getValue()) {
              this.label_.styleFloat(this.getValue(), this.isFocused_, this.isBadInput_());
            }
            if (this.adapter_.isFocused()) {
              this.inputFocusHandler_();
            }
            this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
            this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
            this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
            ['mousedown', 'touchstart'].forEach(function(evtType) {
              _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
            });
            ['click', 'keydown'].forEach(function(evtType) {
              _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
            });
            this.adapter_.registerBottomLineEventHandler(__WEBPACK_IMPORTED_MODULE_2__bottom_line_foundation__["a"].strings.ANIMATION_END_EVENT, this.bottomLineAnimationEndHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
            this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
            this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
            this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
            ['mousedown', 'touchstart'].forEach(function(evtType) {
              _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
            });
            ['click', 'keydown'].forEach(function(evtType) {
              _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
            });
            this.adapter_.deregisterBottomLineEventHandler(__WEBPACK_IMPORTED_MODULE_2__bottom_line_foundation__["a"].strings.ANIMATION_END_EVENT, this.bottomLineAnimationEndHandler_);
          }
        }, {
          key: 'handleTextFieldInteraction',
          value: function handleTextFieldInteraction() {
            if (this.adapter_.getNativeInput().disabled) {
              return;
            }
            this.receivedUserInput_ = true;
          }
        }, {
          key: 'updateOutline',
          value: function updateOutline() {
            if (!this.outline_ || !this.label_) {
              return;
            }
            var isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_7__constants__["a"].DENSE);
            var labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_7__constants__["b"].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_7__constants__["b"].LABEL_SCALE;
            var labelWidth = this.label_.getWidth() * labelScale;
            var isRtl = this.adapter_.isRtl();
            this.outline_.updateSvgPath(labelWidth, isRtl);
          }
        }, {
          key: 'activateFocus',
          value: function activateFocus() {
            this.isFocused_ = true;
            this.styleFocused_(this.isFocused_);
            if (this.bottomLine_) {
              this.bottomLine_.activate();
            }
            if (this.outline_) {
              this.updateOutline();
            }
            if (this.label_) {
              this.label_.styleShake(this.isValid(), this.isFocused_);
              this.label_.styleFloat(this.getValue(), this.isFocused_, this.isBadInput_());
            }
            if (this.helperText_) {
              this.helperText_.showToScreenReader();
            }
          }
        }, {
          key: 'setBottomLineTransformOrigin',
          value: function setBottomLineTransformOrigin(evt) {
            if (this.bottomLine_) {
              this.bottomLine_.setTransformOrigin(evt);
            }
          }
        }, {
          key: 'autoCompleteFocus',
          value: function autoCompleteFocus() {
            if (!this.receivedUserInput_) {
              this.activateFocus();
            }
          }
        }, {
          key: 'handleBottomLineAnimationEnd',
          value: function handleBottomLineAnimationEnd() {
            if (!this.isFocused_ && this.bottomLine_) {
              this.bottomLine_.deactivate();
            }
          }
        }, {
          key: 'deactivateFocus',
          value: function deactivateFocus() {
            this.isFocused_ = false;
            var input = this.getNativeInput_();
            var shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
            var isValid = this.isValid();
            this.styleValidity_(isValid);
            this.styleFocused_(this.isFocused_);
            if (this.label_) {
              this.label_.styleShake(this.isValid(), this.isFocused_);
              this.label_.styleFloat(this.getValue(), this.isFocused_, this.isBadInput_());
            }
            if (shouldRemoveLabelFloat) {
              this.receivedUserInput_ = false;
            }
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.getNativeInput_().value;
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.getNativeInput_().value = value;
            var isValid = this.isValid();
            this.styleValidity_(isValid);
            if (this.label_) {
              this.label_.styleShake(isValid, this.isFocused_);
              this.label_.styleFloat(this.getValue(), this.isFocused_, this.isBadInput_());
            }
          }
        }, {
          key: 'isValid',
          value: function isValid() {
            return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
          }
        }, {
          key: 'setValid',
          value: function setValid(isValid) {
            this.useCustomValidityChecking_ = true;
            this.isValid_ = isValid;
            isValid = this.isValid();
            this.styleValidity_(isValid);
            if (this.label_) {
              this.label_.styleShake(isValid, this.isFocused_);
            }
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.getNativeInput_().disabled;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            this.getNativeInput_().disabled = disabled;
            this.styleDisabled_(disabled);
          }
        }, {
          key: 'isRequired',
          value: function isRequired() {
            return this.getNativeInput_().required;
          }
        }, {
          key: 'setRequired',
          value: function setRequired(isRequired) {
            this.getNativeInput_().required = isRequired;
            this.styleValidity_(this.isValid());
          }
        }, {
          key: 'setHelperTextContent',
          value: function setHelperTextContent(content) {
            if (this.helperText_) {
              this.helperText_.setContent(content);
            }
          }
        }, {
          key: 'isBadInput_',
          value: function isBadInput_() {
            return this.getNativeInput_().validity.badInput;
          }
        }, {
          key: 'isNativeInputValid_',
          value: function isNativeInputValid_() {
            return this.getNativeInput_().validity.valid;
          }
        }, {
          key: 'styleValidity_',
          value: function styleValidity_(isValid) {
            var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;
            if (isValid) {
              this.adapter_.removeClass(INVALID);
            } else {
              this.adapter_.addClass(INVALID);
            }
            if (this.helperText_) {
              this.helperText_.setValidity(isValid);
            }
          }
        }, {
          key: 'styleFocused_',
          value: function styleFocused_(isFocused) {
            var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;
            if (isFocused) {
              this.adapter_.addClass(FOCUSED);
            } else {
              this.adapter_.removeClass(FOCUSED);
            }
          }
        }, {
          key: 'styleDisabled_',
          value: function styleDisabled_(isDisabled) {
            var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
                DISABLED = _MDCTextFieldFoundati.DISABLED,
                INVALID = _MDCTextFieldFoundati.INVALID;
            if (isDisabled) {
              this.adapter_.addClass(DISABLED);
              this.adapter_.removeClass(INVALID);
            } else {
              this.adapter_.removeClass(DISABLED);
            }
            if (this.icon_) {
              this.icon_.setDisabled(isDisabled);
            }
          }
        }, {
          key: 'getNativeInput_',
          value: function getNativeInput_() {
            return this.adapter_.getNativeInput() || {
              value: '',
              disabled: false,
              validity: {
                badInput: false,
                valid: true
              }
            };
          }
        }]);
        return MDCTextFieldFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTextFieldBottomLine;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(18);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
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
      var MDCTextFieldBottomLine = function(_MDCComponent) {
        _inherits(MDCTextFieldBottomLine, _MDCComponent);
        function MDCTextFieldBottomLine() {
          _classCallCheck(this, MDCTextFieldBottomLine);
          return _possibleConstructorReturn(this, (MDCTextFieldBottomLine.__proto__ || Object.getPrototypeOf(MDCTextFieldBottomLine)).apply(this, arguments));
        }
        _createClass(MDCTextFieldBottomLine, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              registerEventHandler: function registerEventHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              },
              notifyAnimationEnd: function notifyAnimationEnd() {
                _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.ANIMATION_END_EVENT, {});
              }
            }));
          }
        }, {
          key: 'foundation',
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextFieldBottomLine(root);
          }
        }]);
        return MDCTextFieldBottomLine;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTextFieldHelperText;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(32);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(19);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
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
      var MDCTextFieldHelperText = function(_MDCComponent) {
        _inherits(MDCTextFieldHelperText, _MDCComponent);
        function MDCTextFieldHelperText() {
          _classCallCheck(this, MDCTextFieldHelperText);
          return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
        }
        _createClass(MDCTextFieldHelperText, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              removeAttr: function removeAttr(attr) {
                return _this2.root_.removeAttribute(attr);
              },
              setContent: function setContent(content) {
                _this2.root_.textContent = content;
              }
            }));
          }
        }, {
          key: 'foundation',
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextFieldHelperText(root);
          }
        }]);
        return MDCTextFieldHelperText;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTextFieldIcon;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(33);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(20);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
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
      var MDCTextFieldIcon = function(_MDCComponent) {
        _inherits(MDCTextFieldIcon, _MDCComponent);
        function MDCTextFieldIcon() {
          _classCallCheck(this, MDCTextFieldIcon);
          return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
        }
        _createClass(MDCTextFieldIcon, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](_extends({
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              },
              notifyIconAction: function notifyIconAction() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.ICON_EVENT, {}, true);
              }
            }));
          }
        }, {
          key: 'foundation',
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextFieldIcon(root);
          }
        }]);
        return MDCTextFieldIcon;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTextFieldLabel;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(34);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(21);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
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
      var MDCTextFieldLabel = function(_MDCComponent) {
        _inherits(MDCTextFieldLabel, _MDCComponent);
        function MDCTextFieldLabel() {
          _classCallCheck(this, MDCTextFieldLabel);
          return _possibleConstructorReturn(this, (MDCTextFieldLabel.__proto__ || Object.getPrototypeOf(MDCTextFieldLabel)).apply(this, arguments));
        }
        _createClass(MDCTextFieldLabel, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              getWidth: function getWidth() {
                return _this2.root_.offsetWidth;
              }
            }));
          }
        }, {
          key: 'foundation',
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextFieldLabel(root);
          }
        }]);
        return MDCTextFieldLabel;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTextFieldOutline;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(36);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(35);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(22);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
      });
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
      var MDCTextFieldOutline = function(_MDCComponent) {
        _inherits(MDCTextFieldOutline, _MDCComponent);
        function MDCTextFieldOutline() {
          _classCallCheck(this, MDCTextFieldOutline);
          return _possibleConstructorReturn(this, (MDCTextFieldOutline.__proto__ || Object.getPrototypeOf(MDCTextFieldOutline)).apply(this, arguments));
        }
        _createClass(MDCTextFieldOutline, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"](_extends({
              getWidth: function getWidth() {
                return _this2.root_.offsetWidth;
              },
              getHeight: function getHeight() {
                return _this2.root_.offsetHeight;
              },
              setOutlinePathAttr: function setOutlinePathAttr(value) {
                var path = _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].PATH_SELECTOR);
                path.setAttribute('d', value);
              },
              getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
                var idleOutlineElement = _this2.root_.parentNode.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].IDLE_OUTLINE_SELECTOR);
                if (idleOutlineElement) {
                  return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
                }
              }
            }));
          }
        }, {
          key: 'foundation',
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTextFieldOutline(root);
          }
        }]);
        return MDCTextFieldOutline;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    })]);
  });
})(require('process'));
