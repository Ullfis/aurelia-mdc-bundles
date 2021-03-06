/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["mdc"] = factory();
    else
      root["mdc"] = factory();
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
      return __webpack_require__(__webpack_require__.s = 36);
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
      var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(1);
      __webpack_require__.d(__webpack_exports__, "MDCFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCComponent", function() {
        return __WEBPACK_IMPORTED_MODULE_1__component__["a"];
      });
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCRipple", function() {
        return MDCRipple;
      });
      __webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function() {
        return RippleCapableSurface;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(15);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(39);
      var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(6);
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
              containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
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
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCSelectionControlState", function() {
        return MDCSelectionControlState;
      });
      __webpack_require__.d(__webpack_exports__, "MDCSelectionControl", function() {
        return MDCSelectionControl;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_ripple_index__ = __webpack_require__(3);
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "c", function() {
        return transformStyleProperties;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return getCorrectEventName;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return getCorrectPropertyName;
      });
      var VendorPropertyMapType = void 0;
      var eventTypeMap = {
        'animationstart': {
          noPrefix: 'animationstart',
          webkitPrefix: 'webkitAnimationStart',
          styleProperty: 'animation'
        },
        'animationend': {
          noPrefix: 'animationend',
          webkitPrefix: 'webkitAnimationEnd',
          styleProperty: 'animation'
        },
        'animationiteration': {
          noPrefix: 'animationiteration',
          webkitPrefix: 'webkitAnimationIteration',
          styleProperty: 'animation'
        },
        'transitionend': {
          noPrefix: 'transitionend',
          webkitPrefix: 'webkitTransitionEnd',
          styleProperty: 'transition'
        }
      };
      var cssPropertyMap = {
        'animation': {
          noPrefix: 'animation',
          webkitPrefix: '-webkit-animation'
        },
        'transform': {
          noPrefix: 'transform',
          webkitPrefix: '-webkit-transform'
        },
        'transition': {
          noPrefix: 'transition',
          webkitPrefix: '-webkit-transition'
        }
      };
      function hasProperShape(windowObj) {
        return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
      }
      function eventFoundInMaps(eventType) {
        return eventType in eventTypeMap || eventType in cssPropertyMap;
      }
      function getJavaScriptEventName(eventType, map, el) {
        return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
      }
      function getAnimationName(windowObj, eventType) {
        if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
          return eventType;
        }
        var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
        var el = windowObj['document']['createElement']('div');
        var eventName = '';
        if (map === eventTypeMap) {
          eventName = getJavaScriptEventName(eventType, map, el);
        } else {
          eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
        }
        return eventName;
      }
      var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];
      function getCorrectEventName(windowObj, eventType) {
        return getAnimationName(windowObj, eventType);
      }
      function getCorrectPropertyName(windowObj, eventType) {
        return getAnimationName(windowObj, eventType);
      }
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
      var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(58);
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return __WEBPACK_IMPORTED_MODULE_0__constants__["a"];
      });
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(59);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
      });
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_exports__["remapEvent"] = remapEvent;
      __webpack_exports__["getTransformPropertyName"] = getTransformPropertyName;
      __webpack_exports__["supportsCssCustomProperties"] = supportsCssCustomProperties;
      __webpack_exports__["applyPassive"] = applyPassive;
      __webpack_exports__["saveElementTabState"] = saveElementTabState;
      __webpack_exports__["restoreElementTabState"] = restoreElementTabState;
      var TAB_DATA = 'data-mdc-tabindex';
      var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';
      var storedTransformPropertyName_ = void 0;
      var supportsPassive_ = void 0;
      function remapEvent(eventName) {
        var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
        if (!('ontouchstart' in globalObj.document)) {
          switch (eventName) {
            case 'touchstart':
              return 'pointerdown';
            case 'touchmove':
              return 'pointermove';
            case 'touchend':
              return 'pointerup';
            default:
              return eventName;
          }
        }
        return eventName;
      }
      function getTransformPropertyName() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (storedTransformPropertyName_ === undefined || forceRefresh) {
          var el = globalObj.document.createElement('div');
          var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
          storedTransformPropertyName_ = transformPropertyName;
        }
        return storedTransformPropertyName_;
      }
      function supportsCssCustomProperties() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        if ('CSS' in globalObj) {
          return globalObj.CSS.supports('(--color: red)');
        }
        return false;
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
      function saveElementTabState(el) {
        if (el.hasAttribute('tabindex')) {
          el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
        }
        el.setAttribute(TAB_DATA_HANDLED, true);
      }
      function restoreElementTabState(el) {
        if (el.hasAttribute(TAB_DATA_HANDLED)) {
          if (el.hasAttribute(TAB_DATA)) {
            el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
            el.removeAttribute(TAB_DATA);
          } else {
            el.removeAttribute('tabindex');
          }
          el.removeAttribute(TAB_DATA_HANDLED);
        }
      }
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(78);
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
      var MDCLineRippleFoundation = function(_MDCFoundation) {
        _inherits(MDCLineRippleFoundation, _MDCFoundation);
        _createClass(MDCLineRippleFoundation, null, [{
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
              hasClass: function hasClass() {},
              setAttr: function setAttr() {},
              registerEventHandler: function registerEventHandler() {},
              deregisterEventHandler: function deregisterEventHandler() {}
            });
          }
        }]);
        function MDCLineRippleFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCLineRippleFoundation);
          var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));
          _this.transitionEndHandler_ = function(evt) {
            return _this.handleTransitionEnd(evt);
          };
          return _this;
        }
        _createClass(MDCLineRippleFoundation, [{
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
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_DEACTIVATING);
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_ACTIVE);
          }
        }, {
          key: 'setRippleCenter',
          value: function setRippleCenter(xCoordinate) {
            var attributeString = 'transform-origin: ' + xCoordinate + 'px center';
            this.adapter_.setAttr('style', attributeString);
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_DEACTIVATING);
          }
        }, {
          key: 'handleTransitionEnd',
          value: function handleTransitionEnd(evt) {
            var isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_DEACTIVATING);
            if (evt.propertyName === 'opacity') {
              if (isDeactivating) {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].LINE_RIPPLE_DEACTIVATING);
              }
            }
          }
        }]);
        return MDCLineRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCLineRippleFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCMenu", function() {
        return MDCMenu;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(79);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(80);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(22);
      __webpack_require__.d(__webpack_exports__, "MDCMenuFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "AnchorMargin", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "Corner", function() {
        return __WEBPACK_IMPORTED_MODULE_3__constants__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "CornerBit", function() {
        return __WEBPACK_IMPORTED_MODULE_3__constants__["b"];
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
      var MDCMenu = function(_MDCComponent) {
        _inherits(MDCMenu, _MDCComponent);
        function MDCMenu() {
          var _ref;
          _classCallCheck(this, MDCMenu);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCMenu.__proto__ || Object.getPrototypeOf(MDCMenu)).call.apply(_ref, [this].concat(args)));
          _this.previousFocus_;
          return _this;
        }
        _createClass(MDCMenu, [{
          key: 'show',
          value: function show() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$focusIndex = _ref2.focusIndex,
                focusIndex = _ref2$focusIndex === undefined ? null : _ref2$focusIndex;
            this.foundation_.open({focusIndex: focusIndex});
          }
        }, {
          key: 'hide',
          value: function hide() {
            this.foundation_.close();
          }
        }, {
          key: 'setAnchorCorner',
          value: function setAnchorCorner(corner) {
            this.foundation_.setAnchorCorner(corner);
          }
        }, {
          key: 'setAnchorMargin',
          value: function setAnchorMargin(margin) {
            this.foundation_.setAnchorMargin(margin);
          }
        }, {
          key: 'getOptionByIndex',
          value: function getOptionByIndex(index) {
            var items = this.items;
            if (index < items.length) {
              return this.items[index];
            } else {
              return null;
            }
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["b"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              hasNecessaryDom: function hasNecessaryDom() {
                return Boolean(_this2.itemsContainer_);
              },
              getAttributeForEventTarget: function getAttributeForEventTarget(target, attributeName) {
                return target.getAttribute(attributeName);
              },
              getInnerDimensions: function getInnerDimensions() {
                var itemsContainer = _this2.itemsContainer_;
                return {
                  width: itemsContainer.offsetWidth,
                  height: itemsContainer.offsetHeight
                };
              },
              hasAnchor: function hasAnchor() {
                return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
              },
              getAnchorDimensions: function getAnchorDimensions() {
                return _this2.root_.parentElement.getBoundingClientRect();
              },
              getWindowDimensions: function getWindowDimensions() {
                return {
                  width: window.innerWidth,
                  height: window.innerHeight
                };
              },
              getNumberOfItems: function getNumberOfItems() {
                return _this2.items.length;
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.root_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.root_.removeEventListener(type, handler);
              },
              registerBodyClickHandler: function registerBodyClickHandler(handler) {
                return document.body.addEventListener('click', handler);
              },
              deregisterBodyClickHandler: function deregisterBodyClickHandler(handler) {
                return document.body.removeEventListener('click', handler);
              },
              getIndexForEventTarget: function getIndexForEventTarget(target) {
                return _this2.items.indexOf(target);
              },
              notifySelected: function notifySelected(evtData) {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b"].strings.SELECTED_EVENT, {
                  index: evtData.index,
                  item: _this2.items[evtData.index]
                });
              },
              notifyCancel: function notifyCancel() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b"].strings.CANCEL_EVENT, {});
              },
              saveFocus: function saveFocus() {
                _this2.previousFocus_ = document.activeElement;
              },
              restoreFocus: function restoreFocus() {
                if (_this2.previousFocus_) {
                  _this2.previousFocus_.focus();
                }
              },
              isFocused: function isFocused() {
                return document.activeElement === _this2.root_;
              },
              focus: function focus() {
                return _this2.root_.focus();
              },
              getFocusedItemIndex: function getFocusedItemIndex() {
                return _this2.items.indexOf(document.activeElement);
              },
              focusItemAtIndex: function focusItemAtIndex(index) {
                return _this2.items[index].focus();
              },
              isRtl: function isRtl() {
                return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
              },
              setTransformOrigin: function setTransformOrigin(origin) {
                _this2.root_.style[Object(__WEBPACK_IMPORTED_MODULE_1__util__["a"])(window) + '-origin'] = origin;
              },
              setPosition: function setPosition(position) {
                _this2.root_.style.left = 'left' in position ? position.left : null;
                _this2.root_.style.right = 'right' in position ? position.right : null;
                _this2.root_.style.top = 'top' in position ? position.top : null;
                _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
              },
              setMaxHeight: function setMaxHeight(height) {
                _this2.root_.style.maxHeight = height;
              },
              setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
                return _this2.items[index].setAttribute(attr, value);
              },
              rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
                return _this2.items[index].removeAttribute(attr);
              },
              addClassForOptionAtIndex: function addClassForOptionAtIndex(index, className) {
                return _this2.items[index].classList.add(className);
              },
              rmClassForOptionAtIndex: function rmClassForOptionAtIndex(index, className) {
                return _this2.items[index].classList.remove(className);
              }
            });
          }
        }, {
          key: 'open',
          get: function get() {
            return this.foundation_.isOpen();
          },
          set: function set(value) {
            if (value) {
              this.foundation_.open();
            } else {
              this.foundation_.close();
            }
          }
        }, {
          key: 'itemsContainer_',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["b"].strings.ITEMS_SELECTOR);
          }
        }, {
          key: 'items',
          get: function get() {
            var itemsContainer = this.itemsContainer_;
            return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
          }
        }, {
          key: 'selectedItemIndex',
          set: function set(index) {
            this.foundation_.setSelectedIndex(index);
          },
          get: function get() {
            return this.foundation_.getSelectedIndex();
          }
        }, {
          key: 'rememberSelection',
          set: function set(rememberSelection) {
            this.foundation_.setRememberSelection(rememberSelection);
          }
        }, {
          key: 'quickOpen',
          set: function set(quickOpen) {
            this.foundation_.setQuickOpen(quickOpen);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCMenu(root);
          }
        }]);
        return MDCMenu;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(101);
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
        function MDCTextFieldHelperTextFoundation(adapter) {
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
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(32);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(102);
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
        function MDCTextFieldIconFoundation(adapter) {
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
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(33);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(103);
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
        function MDCTextFieldLabelFoundation(adapter) {
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
            var _MDCTextFieldLabelFou = MDCTextFieldLabelFoundation.cssClasses,
                LABEL_FLOAT_ABOVE = _MDCTextFieldLabelFou.LABEL_FLOAT_ABOVE,
                LABEL_SHAKE = _MDCTextFieldLabelFou.LABEL_SHAKE;
            if (!!value || isFocused) {
              this.adapter_.addClass(LABEL_FLOAT_ABOVE);
            } else if (!isBadInput) {
              this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
              this.adapter_.removeClass(LABEL_SHAKE);
            }
          }
        }]);
        return MDCTextFieldLabelFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTextFieldLabelFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(34);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(35);
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
        function MDCTextFieldOutlineFoundation(adapter) {
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
          key: "containsEventTarget",
          value: function containsEventTarget(target) {}
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCChip;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(17);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(45);
      var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(18);
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
      var MDCChip = function(_MDCComponent) {
        _inherits(MDCChip, _MDCComponent);
        function MDCChip() {
          var _ref;
          _classCallCheck(this, MDCChip);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCChip.__proto__ || Object.getPrototypeOf(MDCChip)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](_this.root_);
          return _this;
        }
        _createClass(MDCChip, [{
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCChip.prototype.__proto__ || Object.getPrototypeOf(MDCChip.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"](_extends({
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              },
              notifyInteraction: function notifyInteraction() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_4__constants__["a"].INTERACTION_EVENT, {chip: _this2}, true);
              }
            }));
          }
        }, {
          key: 'ripple',
          get: function get() {
            return this.ripple_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCChip(root);
          }
        }]);
        return MDCChip;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
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
      var MDCChipAdapter = function() {
        function MDCChipAdapter() {
          _classCallCheck(this, MDCChipAdapter);
        }
        _createClass(MDCChipAdapter, [{
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}
        }, {
          key: "notifyInteraction",
          value: function notifyInteraction() {}
        }]);
        return MDCChipAdapter;
      }();
      var _unused_webpack_default_export = (MDCChipAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return strings;
      });
      var strings = {INTERACTION_EVENT: 'MDCChip:interaction'};
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
      var MDCChipSetAdapter = function() {
        function MDCChipSetAdapter() {
          _classCallCheck(this, MDCChipSetAdapter);
        }
        _createClass(MDCChipSetAdapter, [{
          key: "hasClass",
          value: function hasClass(className) {}
        }]);
        return MDCChipSetAdapter;
      }();
      var _unused_webpack_default_export = (MDCChipSetAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCLineRipple", function() {
        return MDCLineRipple;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(9);
      __webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function() {
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
      var MDCLineRipple = function(_MDCComponent) {
        _inherits(MDCLineRipple, _MDCComponent);
        function MDCLineRipple() {
          _classCallCheck(this, MDCLineRipple);
          return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
        }
        _createClass(MDCLineRipple, [{
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
          key: 'setRippleCenter',
          value: function setRippleCenter(xCoordinate) {
            this.foundation_.setRippleCenter(xCoordinate);
          }
        }, {
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
              registerEventHandler: function registerEventHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              }
            }));
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCLineRipple(root);
          }
        }]);
        return MDCLineRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
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
      var MDCLineRippleAdapter = function() {
        function MDCLineRippleAdapter() {
          _classCallCheck(this, MDCLineRippleAdapter);
        }
        _createClass(MDCLineRippleAdapter, [{
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
          key: "registerEventHandler",
          value: function registerEventHandler(evtType, handler) {}
        }, {
          key: "deregisterEventHandler",
          value: function deregisterEventHandler(evtType, handler) {}
        }]);
        return MDCLineRippleAdapter;
      }();
      var _unused_webpack_default_export = (MDCLineRippleAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "c", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "e", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "d", function() {
        return numbers;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return CornerBit;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return Corner;
      });
      var cssClasses = {
        ROOT: 'mdc-menu',
        OPEN: 'mdc-menu--open',
        ANIMATING_OPEN: 'mdc-menu--animating-open',
        ANIMATING_CLOSED: 'mdc-menu--animating-closed',
        SELECTED_LIST_ITEM: 'mdc-list-item--selected'
      };
      var strings = {
        ITEMS_SELECTOR: '.mdc-menu__items',
        SELECTED_EVENT: 'MDCMenu:selected',
        CANCEL_EVENT: 'MDCMenu:cancel',
        ARIA_DISABLED_ATTR: 'aria-disabled'
      };
      var numbers = {
        SELECTED_TRIGGER_DELAY: 50,
        TRANSITION_OPEN_DURATION: 120,
        TRANSITION_CLOSE_DURATION: 75,
        MARGIN_TO_EDGE: 32,
        ANCHOR_TO_MENU_WIDTH_RATIO: 0.67,
        OFFSET_TO_MENU_HEIGHT_RATIO: 0.1
      };
      var CornerBit = {
        BOTTOM: 1,
        CENTER: 2,
        RIGHT: 4,
        FLIP_RTL: 8
      };
      var Corner = {
        TOP_LEFT: 0,
        TOP_RIGHT: CornerBit.RIGHT,
        BOTTOM_LEFT: CornerBit.BOTTOM,
        BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
        TOP_START: CornerBit.FLIP_RTL,
        TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
        BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
        BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {
        BOTTOM_LINE: 'mdc-select__bottom-line',
        BOTTOM_LINE_ACTIVE: 'mdc-select__bottom-line--active',
        BOX: 'mdc-select--box',
        DISABLED: 'mdc-select--disabled',
        LABEL_FLOAT_ABOVE: 'mdc-select__label--float-above',
        OPEN: 'mdc-select--open',
        ROOT: 'mdc-select',
        SCROLL_LOCK: 'mdc-select-scroll-lock'
      };
      var strings = {
        CHANGE_EVENT: 'MDCSelect:change',
        BOTTOM_LINE_SELECTOR: '.mdc-select__bottom-line',
        LABEL_SELECTOR: '.mdc-select__label',
        MENU_SELECTOR: '.mdc-select__menu',
        SURFACE_SELECTOR: '.mdc-select__surface',
        SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text'
      };
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
        ACTIVE: 'mdc-slider--active',
        DISABLED: 'mdc-slider--disabled',
        DISCRETE: 'mdc-slider--discrete',
        FOCUS: 'mdc-slider--focus',
        IN_TRANSIT: 'mdc-slider--in-transit',
        IS_DISCRETE: 'mdc-slider--discrete',
        HAS_TRACK_MARKER: 'mdc-slider--display-markers'
      };
      var strings = {
        TRACK_SELECTOR: '.mdc-slider__track',
        TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
        LAST_TRACK_MARKER_SELECTOR: '.mdc-slider__track-marker:last-child',
        THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
        PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
        ARIA_VALUEMIN: 'aria-valuemin',
        ARIA_VALUEMAX: 'aria-valuemax',
        ARIA_VALUENOW: 'aria-valuenow',
        ARIA_DISABLED: 'aria-disabled',
        STEP_DATA_ATTR: 'data-step',
        CHANGE_EVENT: 'MDCSlider:change',
        INPUT_EVENT: 'MDCSlider:input'
      };
      var numbers = {PAGE_FACTOR: 4};
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
      var MDCSliderAdapter = function() {
        function MDCSliderAdapter() {
          _classCallCheck(this, MDCSliderAdapter);
        }
        _createClass(MDCSliderAdapter, [{
          key: "hasClass",
          value: function hasClass(className) {}
        }, {
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "getAttribute",
          value: function getAttribute(name) {}
        }, {
          key: "setAttribute",
          value: function setAttribute(name, value) {}
        }, {
          key: "removeAttribute",
          value: function removeAttribute(name) {}
        }, {
          key: "computeBoundingRect",
          value: function computeBoundingRect() {}
        }, {
          key: "getTabIndex",
          value: function getTabIndex() {}
        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(type, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(type, handler) {}
        }, {
          key: "registerThumbContainerInteractionHandler",
          value: function registerThumbContainerInteractionHandler(type, handler) {}
        }, {
          key: "deregisterThumbContainerInteractionHandler",
          value: function deregisterThumbContainerInteractionHandler(type, handler) {}
        }, {
          key: "registerBodyInteractionHandler",
          value: function registerBodyInteractionHandler(type, handler) {}
        }, {
          key: "deregisterBodyInteractionHandler",
          value: function deregisterBodyInteractionHandler(type, handler) {}
        }, {
          key: "registerResizeHandler",
          value: function registerResizeHandler(handler) {}
        }, {
          key: "deregisterResizeHandler",
          value: function deregisterResizeHandler(handler) {}
        }, {
          key: "notifyInput",
          value: function notifyInput() {}
        }, {
          key: "notifyChange",
          value: function notifyChange() {}
        }, {
          key: "setThumbContainerStyleProperty",
          value: function setThumbContainerStyleProperty(propertyName, value) {}
        }, {
          key: "setTrackStyleProperty",
          value: function setTrackStyleProperty(propertyName, value) {}
        }, {
          key: "setMarkerValue",
          value: function setMarkerValue(value) {}
        }, {
          key: "appendTrackMarkers",
          value: function appendTrackMarkers(numMarkers) {}
        }, {
          key: "removeTrackMarkers",
          value: function removeTrackMarkers() {}
        }, {
          key: "setLastTrackMarkersStyleProperty",
          value: function setLastTrackMarkersStyleProperty(propertyName, value) {}
        }, {
          key: "isRTL",
          value: function isRTL() {}
        }]);
        return MDCSliderAdapter;
      }();
      var _unused_webpack_default_export = (MDCSliderAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTab;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(94);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
      });
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
      var MDCTab = function(_MDCComponent) {
        _inherits(MDCTab, _MDCComponent);
        _createClass(MDCTab, [{
          key: 'computedWidth',
          get: function get() {
            return this.foundation_.getComputedWidth();
          }
        }, {
          key: 'computedLeft',
          get: function get() {
            return this.foundation_.getComputedLeft();
          }
        }, {
          key: 'isActive',
          get: function get() {
            return this.foundation_.isActive();
          },
          set: function set(isActive) {
            this.foundation_.setActive(isActive);
          }
        }, {
          key: 'preventDefaultOnClick',
          get: function get() {
            return this.foundation_.preventsDefaultOnClick();
          },
          set: function set(preventDefaultOnClick) {
            this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTab(root);
          }
        }]);
        function MDCTab() {
          var _ref;
          _classCallCheck(this, MDCTab);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCTab.__proto__ || Object.getPrototypeOf(MDCTab)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].attachTo(_this.root_);
          return _this;
        }
        _createClass(MDCTab, [{
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCTab.prototype.__proto__ || Object.getPrototypeOf(MDCTab.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.root_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.root_.removeEventListener(type, handler);
              },
              getOffsetWidth: function getOffsetWidth() {
                return _this2.root_.offsetWidth;
              },
              getOffsetLeft: function getOffsetLeft() {
                return _this2.root_.offsetLeft;
              },
              notifySelected: function notifySelected() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.SELECTED_EVENT, {tab: _this2}, true);
              }
            });
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.isActive = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].ACTIVE);
          }
        }, {
          key: 'measureSelf',
          value: function measureSelf() {
            this.foundation_.measureSelf();
          }
        }]);
        return MDCTab;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {ACTIVE: 'mdc-tab--active'};
      var strings = {SELECTED_EVENT: 'MDCTab:selected'};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTabBar;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__tab_index__ = __webpack_require__(26);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(95);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
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
      var MDCTabBar = function(_MDCComponent) {
        _inherits(MDCTabBar, _MDCComponent);
        function MDCTabBar() {
          _classCallCheck(this, MDCTabBar);
          return _possibleConstructorReturn(this, (MDCTabBar.__proto__ || Object.getPrototypeOf(MDCTabBar)).apply(this, arguments));
        }
        _createClass(MDCTabBar, [{
          key: 'initialize',
          value: function initialize() {
            var _this2 = this;
            var tabFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_1__tab_index__["a"](el);
            };
            this.indicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.INDICATOR_SELECTOR);
            this.tabs_ = this.gatherTabs_(tabFactory);
            this.tabSelectedHandler_ = function(_ref) {
              var detail = _ref.detail;
              var tab = detail.tab;
              _this2.setActiveTab_(tab, true);
            };
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              bindOnMDCTabSelectedEvent: function bindOnMDCTabSelectedEvent() {
                return _this3.listen(__WEBPACK_IMPORTED_MODULE_1__tab_index__["b"].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
              },
              unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {
                return _this3.unlisten(__WEBPACK_IMPORTED_MODULE_1__tab_index__["b"].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              getOffsetWidth: function getOffsetWidth() {
                return _this3.root_.offsetWidth;
              },
              setStyleForIndicator: function setStyleForIndicator(propertyName, value) {
                return _this3.indicator_.style.setProperty(propertyName, value);
              },
              getOffsetWidthForIndicator: function getOffsetWidthForIndicator() {
                return _this3.indicator_.offsetWidth;
              },
              notifyChange: function notifyChange(evtData) {
                return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.CHANGE_EVENT, evtData);
              },
              getNumberOfTabs: function getNumberOfTabs() {
                return _this3.tabs.length;
              },
              isTabActiveAtIndex: function isTabActiveAtIndex(index) {
                return _this3.tabs[index].isActive;
              },
              setTabActiveAtIndex: function setTabActiveAtIndex(index, isActive) {
                _this3.tabs[index].isActive = isActive;
              },
              isDefaultPreventedOnClickForTabAtIndex: function isDefaultPreventedOnClickForTabAtIndex(index) {
                return _this3.tabs[index].preventDefaultOnClick;
              },
              setPreventDefaultOnClickForTabAtIndex: function setPreventDefaultOnClickForTabAtIndex(index, preventDefaultOnClick) {
                _this3.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
              },
              measureTabAtIndex: function measureTabAtIndex(index) {
                return _this3.tabs[index].measureSelf();
              },
              getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex(index) {
                return _this3.tabs[index].computedWidth;
              },
              getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex(index) {
                return _this3.tabs[index].computedLeft;
              }
            });
          }
        }, {
          key: 'gatherTabs_',
          value: function gatherTabs_(tabFactory) {
            var tabElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.TAB_SELECTOR));
            return tabElements.map(function(el) {
              return tabFactory(el);
            });
          }
        }, {
          key: 'setActiveTabIndex_',
          value: function setActiveTabIndex_(activeTabIndex, notifyChange) {
            this.foundation_.switchToTabAtIndex(activeTabIndex, notifyChange);
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }
        }, {
          key: 'setActiveTab_',
          value: function setActiveTab_(activeTab, notifyChange) {
            var indexOfTab = this.tabs.indexOf(activeTab);
            if (indexOfTab < 0) {
              throw new Error('Invalid tab component given as activeTab: Tab not found within this component\'s tab list');
            }
            this.setActiveTabIndex_(indexOfTab, notifyChange);
          }
        }, {
          key: 'tabs',
          get: function get() {
            return this.tabs_;
          }
        }, {
          key: 'activeTab',
          get: function get() {
            var activeIndex = this.foundation_.getActiveTabIndex();
            return this.tabs[activeIndex];
          },
          set: function set(tab) {
            this.setActiveTab_(tab, false);
          }
        }, {
          key: 'activeTabIndex',
          get: function get() {
            return this.foundation_.getActiveTabIndex();
          },
          set: function set(index) {
            this.setActiveTabIndex_(index, false);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTabBar(root);
          }
        }]);
        return MDCTabBar;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
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
      var strings = {
        ARIA_CONTROLS: 'aria-controls',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-text-field__label',
        ICON_SELECTOR: '.mdc-text-field__icon',
        OUTLINE_SELECTOR: '.mdc-text-field__outline',
        BOTTOM_LINE_SELECTOR: '.mdc-line-ripple'
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
      var __WEBPACK_IMPORTED_MODULE_0__material_line_ripple_foundation__ = __webpack_require__(9);
      var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(11);
      var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(12);
      var __WEBPACK_IMPORTED_MODULE_3__label_foundation__ = __webpack_require__(13);
      var __WEBPACK_IMPORTED_MODULE_4__outline_foundation__ = __webpack_require__(14);
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
          key: 'getNativeInput',
          value: function getNativeInput() {}
        }, {
          key: 'isFocused',
          value: function isFocused() {}
        }, {
          key: 'isRtl',
          value: function isRtl() {}
        }, {
          key: 'activateLineRipple',
          value: function activateLineRipple() {}
        }, {
          key: 'deactivateLineRipple',
          value: function deactivateLineRipple() {}
        }, {
          key: 'setLineRippleTransformOrigin',
          value: function setLineRippleTransformOrigin(normalizedX) {}
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      var __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__ = __webpack_require__(37);
      var __WEBPACK_IMPORTED_MODULE_1__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_2__material_checkbox_index__ = __webpack_require__(38);
      var __WEBPACK_IMPORTED_MODULE_3__material_chips_index__ = __webpack_require__(44);
      var __WEBPACK_IMPORTED_MODULE_4__material_dialog_index__ = __webpack_require__(49);
      var __WEBPACK_IMPORTED_MODULE_5__material_drawer_index__ = __webpack_require__(55);
      var __WEBPACK_IMPORTED_MODULE_6__material_form_field_index__ = __webpack_require__(64);
      var __WEBPACK_IMPORTED_MODULE_7__material_grid_list_index__ = __webpack_require__(68);
      var __WEBPACK_IMPORTED_MODULE_8__material_icon_toggle_index__ = __webpack_require__(71);
      var __WEBPACK_IMPORTED_MODULE_9__material_linear_progress_index__ = __webpack_require__(75);
      var __WEBPACK_IMPORTED_MODULE_10__material_line_ripple_index__ = __webpack_require__(20);
      var __WEBPACK_IMPORTED_MODULE_11__material_menu_index__ = __webpack_require__(10);
      var __WEBPACK_IMPORTED_MODULE_12__material_radio_index__ = __webpack_require__(82);
      var __WEBPACK_IMPORTED_MODULE_13__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_14__material_select_index__ = __webpack_require__(86);
      var __WEBPACK_IMPORTED_MODULE_15__material_selection_control_index__ = __webpack_require__(4);
      var __WEBPACK_IMPORTED_MODULE_16__material_slider_index__ = __webpack_require__(88);
      var __WEBPACK_IMPORTED_MODULE_17__material_snackbar_index__ = __webpack_require__(90);
      var __WEBPACK_IMPORTED_MODULE_18__material_tabs_index__ = __webpack_require__(93);
      var __WEBPACK_IMPORTED_MODULE_19__material_textfield_index__ = __webpack_require__(100);
      var __WEBPACK_IMPORTED_MODULE_20__material_toolbar_index__ = __webpack_require__(109);
      __webpack_require__.d(__webpack_exports__, "autoInit", function() {
        return __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "base", function() {
        return __WEBPACK_IMPORTED_MODULE_1__material_base_index__;
      });
      __webpack_require__.d(__webpack_exports__, "lineRipple", function() {
        return __WEBPACK_IMPORTED_MODULE_10__material_line_ripple_index__;
      });
      __webpack_require__.d(__webpack_exports__, "checkbox", function() {
        return __WEBPACK_IMPORTED_MODULE_2__material_checkbox_index__;
      });
      __webpack_require__.d(__webpack_exports__, "chips", function() {
        return __WEBPACK_IMPORTED_MODULE_3__material_chips_index__;
      });
      __webpack_require__.d(__webpack_exports__, "dialog", function() {
        return __WEBPACK_IMPORTED_MODULE_4__material_dialog_index__;
      });
      __webpack_require__.d(__webpack_exports__, "drawer", function() {
        return __WEBPACK_IMPORTED_MODULE_5__material_drawer_index__;
      });
      __webpack_require__.d(__webpack_exports__, "formField", function() {
        return __WEBPACK_IMPORTED_MODULE_6__material_form_field_index__;
      });
      __webpack_require__.d(__webpack_exports__, "gridList", function() {
        return __WEBPACK_IMPORTED_MODULE_7__material_grid_list_index__;
      });
      __webpack_require__.d(__webpack_exports__, "iconToggle", function() {
        return __WEBPACK_IMPORTED_MODULE_8__material_icon_toggle_index__;
      });
      __webpack_require__.d(__webpack_exports__, "linearProgress", function() {
        return __WEBPACK_IMPORTED_MODULE_9__material_linear_progress_index__;
      });
      __webpack_require__.d(__webpack_exports__, "menu", function() {
        return __WEBPACK_IMPORTED_MODULE_11__material_menu_index__;
      });
      __webpack_require__.d(__webpack_exports__, "radio", function() {
        return __WEBPACK_IMPORTED_MODULE_12__material_radio_index__;
      });
      __webpack_require__.d(__webpack_exports__, "ripple", function() {
        return __WEBPACK_IMPORTED_MODULE_13__material_ripple_index__;
      });
      __webpack_require__.d(__webpack_exports__, "select", function() {
        return __WEBPACK_IMPORTED_MODULE_14__material_select_index__;
      });
      __webpack_require__.d(__webpack_exports__, "selectionControl", function() {
        return __WEBPACK_IMPORTED_MODULE_15__material_selection_control_index__;
      });
      __webpack_require__.d(__webpack_exports__, "slider", function() {
        return __WEBPACK_IMPORTED_MODULE_16__material_slider_index__;
      });
      __webpack_require__.d(__webpack_exports__, "snackbar", function() {
        return __WEBPACK_IMPORTED_MODULE_17__material_snackbar_index__;
      });
      __webpack_require__.d(__webpack_exports__, "tabs", function() {
        return __WEBPACK_IMPORTED_MODULE_18__material_tabs_index__;
      });
      __webpack_require__.d(__webpack_exports__, "textField", function() {
        return __WEBPACK_IMPORTED_MODULE_19__material_textfield_index__;
      });
      __webpack_require__.d(__webpack_exports__, "toolbar", function() {
        return __WEBPACK_IMPORTED_MODULE_20__material_toolbar_index__;
      });
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCLineRipple', __WEBPACK_IMPORTED_MODULE_10__material_line_ripple_index__["MDCLineRipple"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCCheckbox', __WEBPACK_IMPORTED_MODULE_2__material_checkbox_index__["MDCCheckbox"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCChip', __WEBPACK_IMPORTED_MODULE_3__material_chips_index__["MDCChip"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCChipSet', __WEBPACK_IMPORTED_MODULE_3__material_chips_index__["MDCChipSet"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCDialog', __WEBPACK_IMPORTED_MODULE_4__material_dialog_index__["MDCDialog"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCPersistentDrawer', __WEBPACK_IMPORTED_MODULE_5__material_drawer_index__["MDCPersistentDrawer"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCTemporaryDrawer', __WEBPACK_IMPORTED_MODULE_5__material_drawer_index__["MDCTemporaryDrawer"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCFormField', __WEBPACK_IMPORTED_MODULE_6__material_form_field_index__["MDCFormField"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCRipple', __WEBPACK_IMPORTED_MODULE_13__material_ripple_index__["MDCRipple"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCGridList', __WEBPACK_IMPORTED_MODULE_7__material_grid_list_index__["MDCGridList"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCIconToggle', __WEBPACK_IMPORTED_MODULE_8__material_icon_toggle_index__["MDCIconToggle"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCLinearProgress', __WEBPACK_IMPORTED_MODULE_9__material_linear_progress_index__["MDCLinearProgress"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCRadio', __WEBPACK_IMPORTED_MODULE_12__material_radio_index__["MDCRadio"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCSnackbar', __WEBPACK_IMPORTED_MODULE_17__material_snackbar_index__["MDCSnackbar"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCTab', __WEBPACK_IMPORTED_MODULE_18__material_tabs_index__["MDCTab"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCTabBar', __WEBPACK_IMPORTED_MODULE_18__material_tabs_index__["MDCTabBar"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCTextField', __WEBPACK_IMPORTED_MODULE_19__material_textfield_index__["MDCTextField"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCMenu', __WEBPACK_IMPORTED_MODULE_11__material_menu_index__["MDCMenu"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCSelect', __WEBPACK_IMPORTED_MODULE_14__material_select_index__["MDCSelect"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCSlider', __WEBPACK_IMPORTED_MODULE_16__material_slider_index__["MDCSlider"]);
      __WEBPACK_IMPORTED_MODULE_0__material_auto_init_index__["a"].register('MDCToolbar', __WEBPACK_IMPORTED_MODULE_20__material_toolbar_index__["MDCToolbar"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_exports__["a"] = mdcAutoInit;
      var registry = Object.create(null);
      var CONSOLE_WARN = console.warn.bind(console);
      function _emit(evtType, evtData) {
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
        document.dispatchEvent(evt);
      }
      function mdcAutoInit() {
        var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CONSOLE_WARN;
        var nodes = root.querySelectorAll('[data-mdc-auto-init]');
        for (var i = 0,
            node; node = nodes[i]; i++) {
          var ctorName = node.dataset.mdcAutoInit;
          if (!ctorName) {
            throw new Error('(mdc-auto-init) Constructor name must be given.');
          }
          var Ctor = registry[ctorName];
          if (typeof Ctor !== 'function') {
            throw new Error('(mdc-auto-init) Could not find constructor in registry for ' + ctorName);
          }
          if (node[ctorName]) {
            warn('(mdc-auto-init) Component already initialized for ' + node + '. Skipping...');
            continue;
          }
          var component = Ctor.attachTo(node);
          Object.defineProperty(node, ctorName, {
            value: component,
            writable: false,
            enumerable: false,
            configurable: true
          });
        }
        _emit('MDCAutoInit:End', {});
      }
      mdcAutoInit.register = function(componentName, Ctor) {
        var warn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONSOLE_WARN;
        if (typeof Ctor !== 'function') {
          throw new Error('(mdc-auto-init) Invalid Ctor value ' + Ctor + '. Expected function');
        }
        if (registry[componentName]) {
          warn('(mdc-auto-init) Overriding registration for ' + componentName + ' with ' + Ctor + '. ' + ('Was: ' + registry[componentName]));
        }
        registry[componentName] = Ctor;
      };
      mdcAutoInit.deregister = function(componentName) {
        delete registry[componentName];
      };
      mdcAutoInit.deregisterAll = function() {
        Object.keys(registry).forEach(this.deregister, this);
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCCheckbox", function() {
        return MDCCheckbox;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_animation_index__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(4);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(41);
      var __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_5__material_ripple_util__ = __webpack_require__(6);
      __webpack_require__.d(__webpack_exports__, "MDCCheckboxFoundation", function() {
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
      var MDCCheckbox = function(_MDCComponent) {
        _inherits(MDCCheckbox, _MDCComponent);
        _createClass(MDCCheckbox, [{
          key: 'nativeCb_',
          get: function get() {
            var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.NATIVE_CONTROL_SELECTOR;
            var cbEl = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            return cbEl;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCCheckbox(root);
          }
        }]);
        function MDCCheckbox() {
          var _ref;
          _classCallCheck(this, MDCCheckbox);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = _this.initRipple_();
          return _this;
        }
        _createClass(MDCCheckbox, [{
          key: 'initRipple_',
          value: function initRipple_() {
            var _this2 = this;
            var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_5__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
            var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"].createAdapter(this), {
              isUnbounded: function isUnbounded() {
                return true;
              },
              isSurfaceActive: function isSurfaceActive() {
                return _this2.nativeCb_[MATCHES](':active');
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.nativeCb_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.nativeCb_.removeEventListener(type, handler);
              },
              computeBoundingRect: function computeBoundingRect() {
                var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
                    left = _root_$getBoundingCli.left,
                    top = _root_$getBoundingCli.top;
                var DIM = 40;
                return {
                  top: top,
                  left: left,
                  right: left + DIM,
                  bottom: top + DIM,
                  width: DIM,
                  height: DIM
                };
              }
            });
            var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRippleFoundation"](adapter);
            return new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"](this.root_, foundation);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
                return _this3.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["a"])(window, 'animationend'), handler);
              },
              deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
                return _this3.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["a"])(window, 'animationend'), handler);
              },
              registerChangeHandler: function registerChangeHandler(handler) {
                return _this3.nativeCb_.addEventListener('change', handler);
              },
              deregisterChangeHandler: function deregisterChangeHandler(handler) {
                return _this3.nativeCb_.removeEventListener('change', handler);
              },
              getNativeControl: function getNativeControl() {
                return _this3.nativeCb_;
              },
              forceLayout: function forceLayout() {
                return _this3.root_.offsetWidth;
              },
              isAttachedToDOM: function isAttachedToDOM() {
                return Boolean(_this3.root_.parentNode);
              }
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'ripple',
          get: function get() {
            return this.ripple_;
          }
        }, {
          key: 'checked',
          get: function get() {
            return this.foundation_.isChecked();
          },
          set: function set(checked) {
            this.foundation_.setChecked(checked);
          }
        }, {
          key: 'indeterminate',
          get: function get() {
            return this.foundation_.isIndeterminate();
          },
          set: function set(indeterminate) {
            this.foundation_.setIndeterminate(indeterminate);
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
          key: 'value',
          get: function get() {
            return this.foundation_.getValue();
          },
          set: function set(value) {
            this.foundation_.setValue(value);
          }
        }]);
        return MDCCheckbox;
      }(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(15);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(40);
      var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(6);
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
      var activatedTargets = [];
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
              containsEventTarget: function containsEventTarget() {},
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
            var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function(target) {
              return _this9.adapter_.containsEventTarget(target);
            });
            if (hasActivatedChild) {
              this.resetActivationState_();
              return;
            }
            if (e) {
              activatedTargets.push(e.target);
              this.registerDeactivationHandlers_(e);
            }
            requestAnimationFrame(function() {
              activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this9.adapter_.isSurfaceActive() : true;
              if (activationState.wasElementMadeActive) {
                _this9.animateActivation_();
              } else {
                _this9.activationState_ = _this9.defaultActivationState_();
              }
              activatedTargets = [];
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
            var _activationState_ = this.activationState_,
                activationEvent = _activationState_.activationEvent,
                wasActivatedByPointer = _activationState_.wasActivatedByPointer;
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
            var _activationState_2 = this.activationState_,
                hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                isActivated = _activationState_2.isActivated;
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
            var _this15 = this;
            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);
            var getBoundedRadius = function getBoundedRadius() {
              var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };
            this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
            this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
            this.fgScale_ = this.maxRadius_ / this.initialSize_;
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(4);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(42);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(43);
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
      var CB_PROTO_PROPS = ['checked', 'indeterminate'];
      var MDCCheckboxFoundation = function(_MDCFoundation) {
        _inherits(MDCCheckboxFoundation, _MDCFoundation);
        _createClass(MDCCheckboxFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerAnimationEndHandler: function registerAnimationEndHandler() {},
              deregisterAnimationEndHandler: function deregisterAnimationEndHandler() {},
              registerChangeHandler: function registerChangeHandler() {},
              deregisterChangeHandler: function deregisterChangeHandler() {},
              getNativeControl: function getNativeControl() {},
              forceLayout: function forceLayout() {},
              isAttachedToDOM: function isAttachedToDOM() {}
            });
          }
        }]);
        function MDCCheckboxFoundation(adapter) {
          _classCallCheck(this, MDCCheckboxFoundation);
          var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));
          _this.currentCheckState_ = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INIT;
          _this.currentAnimationClass_ = '';
          _this.animEndLatchTimer_ = 0;
          _this.animEndHandler_ = function() {
            return _this.handleAnimationEnd();
          };
          _this.changeHandler_ = function() {
            return _this.handleChange();
          };
          return _this;
        }
        _createClass(MDCCheckboxFoundation, [{
          key: 'init',
          value: function init() {
            this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].UPGRADED);
            this.adapter_.registerChangeHandler(this.changeHandler_);
            this.installPropertyChangeHooks_();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterChangeHandler(this.changeHandler_);
            this.uninstallPropertyChangeHooks_();
          }
        }, {
          key: 'isChecked',
          value: function isChecked() {
            return this.getNativeControl_().checked;
          }
        }, {
          key: 'setChecked',
          value: function setChecked(checked) {
            this.getNativeControl_().checked = checked;
          }
        }, {
          key: 'isIndeterminate',
          value: function isIndeterminate() {
            return this.getNativeControl_().indeterminate;
          }
        }, {
          key: 'setIndeterminate',
          value: function setIndeterminate(indeterminate) {
            this.getNativeControl_().indeterminate = indeterminate;
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.getNativeControl_().disabled;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            this.getNativeControl_().disabled = disabled;
            if (disabled) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].DISABLED);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].DISABLED);
            }
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.getNativeControl_().value;
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.getNativeControl_().value = value;
          }
        }, {
          key: 'handleAnimationEnd',
          value: function handleAnimationEnd() {
            var _this2 = this;
            clearTimeout(this.animEndLatchTimer_);
            this.animEndLatchTimer_ = setTimeout(function() {
              _this2.adapter_.removeClass(_this2.currentAnimationClass_);
              _this2.adapter_.deregisterAnimationEndHandler(_this2.animEndHandler_);
            }, __WEBPACK_IMPORTED_MODULE_3__constants__["b"].ANIM_END_LATCH_MS);
          }
        }, {
          key: 'handleChange',
          value: function handleChange() {
            this.transitionCheckState_();
          }
        }, {
          key: 'installPropertyChangeHooks_',
          value: function installPropertyChangeHooks_() {
            var _this3 = this;
            var nativeCb = this.getNativeControl_();
            var cbProto = Object.getPrototypeOf(nativeCb);
            CB_PROTO_PROPS.forEach(function(controlState) {
              var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
              if (validDescriptor(desc)) {
                var nativeCbDesc = {
                  get: desc.get,
                  set: function set(state) {
                    desc.set.call(nativeCb, state);
                    _this3.transitionCheckState_();
                  },
                  configurable: desc.configurable,
                  enumerable: desc.enumerable
                };
                Object.defineProperty(nativeCb, controlState, nativeCbDesc);
              }
            });
          }
        }, {
          key: 'uninstallPropertyChangeHooks_',
          value: function uninstallPropertyChangeHooks_() {
            var nativeCb = this.getNativeControl_();
            var cbProto = Object.getPrototypeOf(nativeCb);
            CB_PROTO_PROPS.forEach(function(controlState) {
              var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
              if (validDescriptor(desc)) {
                Object.defineProperty(nativeCb, controlState, desc);
              }
            });
          }
        }, {
          key: 'transitionCheckState_',
          value: function transitionCheckState_() {
            var nativeCb = this.adapter_.getNativeControl();
            if (!nativeCb) {
              return;
            }
            var oldState = this.currentCheckState_;
            var newState = this.determineCheckState_(nativeCb);
            if (oldState === newState) {
              return;
            }
            if (this.currentAnimationClass_.length > 0) {
              clearTimeout(this.animEndLatchTimer_);
              this.adapter_.forceLayout();
              this.adapter_.removeClass(this.currentAnimationClass_);
            }
            this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
            this.currentCheckState_ = newState;
            if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
              this.adapter_.addClass(this.currentAnimationClass_);
              this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
            }
          }
        }, {
          key: 'determineCheckState_',
          value: function determineCheckState_(nativeCb) {
            var TRANSITION_STATE_INDETERMINATE = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INDETERMINATE,
                TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_CHECKED,
                TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_UNCHECKED;
            if (nativeCb.indeterminate) {
              return TRANSITION_STATE_INDETERMINATE;
            }
            return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
          }
        }, {
          key: 'getTransitionAnimationClass_',
          value: function getTransitionAnimationClass_(oldState, newState) {
            var TRANSITION_STATE_INIT = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_INIT,
                TRANSITION_STATE_CHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_CHECKED,
                TRANSITION_STATE_UNCHECKED = __WEBPACK_IMPORTED_MODULE_3__constants__["c"].TRANSITION_STATE_UNCHECKED;
            var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
                ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
                ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
                ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
                ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
                ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
                ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;
            switch (oldState) {
              case TRANSITION_STATE_INIT:
                if (newState === TRANSITION_STATE_UNCHECKED) {
                  return '';
                }
              case TRANSITION_STATE_UNCHECKED:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
              case TRANSITION_STATE_CHECKED:
                return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
              default:
                return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
            }
          }
        }, {
          key: 'getNativeControl_',
          value: function getNativeControl_() {
            return this.adapter_.getNativeControl() || {
              checked: false,
              indeterminate: false,
              disabled: false,
              value: null
            };
          }
        }]);
        return MDCCheckboxFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      function validDescriptor(inputPropDesc) {
        return !!inputPropDesc && typeof inputPropDesc.set === 'function';
      }
      __webpack_exports__["a"] = (MDCCheckboxFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_selection_control_index__ = __webpack_require__(4);
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
      var MDCCheckboxAdapter = function() {
        function MDCCheckboxAdapter() {
          _classCallCheck(this, MDCCheckboxAdapter);
        }
        _createClass(MDCCheckboxAdapter, [{
          key: 'addClass',
          value: function addClass(className) {}
        }, {
          key: 'removeClass',
          value: function removeClass(className) {}
        }, {
          key: 'registerAnimationEndHandler',
          value: function registerAnimationEndHandler(handler) {}
        }, {
          key: 'deregisterAnimationEndHandler',
          value: function deregisterAnimationEndHandler(handler) {}
        }, {
          key: 'registerChangeHandler',
          value: function registerChangeHandler(handler) {}
        }, {
          key: 'deregisterChangeHandler',
          value: function deregisterChangeHandler(handler) {}
        }, {
          key: 'getNativeControl',
          value: function getNativeControl() {}
        }, {
          key: 'forceLayout',
          value: function forceLayout() {}
        }, {
          key: 'isAttachedToDOM',
          value: function isAttachedToDOM() {}
        }]);
        return MDCCheckboxAdapter;
      }();
      var _unused_webpack_default_export = (MDCCheckboxAdapter);
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
      var ROOT = 'mdc-checkbox';
      var cssClasses = {
        UPGRADED: 'mdc-checkbox--upgraded',
        CHECKED: 'mdc-checkbox--checked',
        INDETERMINATE: 'mdc-checkbox--indeterminate',
        DISABLED: 'mdc-checkbox--disabled',
        ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
        ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
        ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
        ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
        ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
        ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
      };
      var strings = {
        NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
        TRANSITION_STATE_INIT: 'init',
        TRANSITION_STATE_CHECKED: 'checked',
        TRANSITION_STATE_UNCHECKED: 'unchecked',
        TRANSITION_STATE_INDETERMINATE: 'indeterminate'
      };
      var numbers = {ANIM_END_LATCH_MS: 250};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      var __WEBPACK_IMPORTED_MODULE_0__chip_index__ = __webpack_require__(16);
      var __WEBPACK_IMPORTED_MODULE_1__chip_set_index__ = __webpack_require__(46);
      __webpack_require__.d(__webpack_exports__, "MDCChipFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_0__chip_index__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCChip", function() {
        return __WEBPACK_IMPORTED_MODULE_0__chip_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCChipSetFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__chip_set_index__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCChipSet", function() {
        return __WEBPACK_IMPORTED_MODULE_1__chip_set_index__["a"];
      });
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(17);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(18);
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
      var MDCChipFoundation = function(_MDCFoundation) {
        _inherits(MDCChipFoundation, _MDCFoundation);
        _createClass(MDCChipFoundation, null, [{
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              notifyInteraction: function notifyInteraction() {}
            });
          }
        }]);
        function MDCChipFoundation(adapter) {
          _classCallCheck(this, MDCChipFoundation);
          var _this = _possibleConstructorReturn(this, (MDCChipFoundation.__proto__ || Object.getPrototypeOf(MDCChipFoundation)).call(this, _extends(MDCChipFoundation.defaultAdapter, adapter)));
          _this.interactionHandler_ = function(evt) {
            return _this.handleInteraction_(evt);
          };
          return _this;
        }
        _createClass(MDCChipFoundation, [{
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
          key: 'handleInteraction_',
          value: function handleInteraction_(evt) {
            if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
              this.adapter_.notifyInteraction();
            }
          }
        }]);
        return MDCChipFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCChipFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCChipSet;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(19);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(47);
      var __WEBPACK_IMPORTED_MODULE_3__chip_index__ = __webpack_require__(16);
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
      var MDCChipSet = function(_MDCComponent) {
        _inherits(MDCChipSet, _MDCComponent);
        function MDCChipSet() {
          var _ref;
          _classCallCheck(this, MDCChipSet);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCChipSet.__proto__ || Object.getPrototypeOf(MDCChipSet)).call.apply(_ref, [this].concat(args)));
          _this.chips;
          return _this;
        }
        _createClass(MDCChipSet, [{
          key: 'initialize',
          value: function initialize() {
            var chipFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_3__chip_index__["a"](el);
            };
            this.chips = this.instantiateChips_(chipFactory);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.chips.forEach(function(chip) {
              chip.destroy();
            });
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"](_extends({hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              }}));
          }
        }, {
          key: 'instantiateChips_',
          value: function instantiateChips_(chipFactory) {
            var chipElements = [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.CHIP_SELECTOR));
            return chipElements.map(function(el) {
              return chipFactory(el);
            });
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCChipSet(root);
          }
        }]);
        return MDCChipSet;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(19);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(48);
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
      var MDCChipSetFoundation = function(_MDCFoundation) {
        _inherits(MDCChipSetFoundation, _MDCFoundation);
        _createClass(MDCChipSetFoundation, null, [{
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({hasClass: function hasClass() {}});
          }
        }]);
        function MDCChipSetFoundation(adapter) {
          _classCallCheck(this, MDCChipSetFoundation);
          return _possibleConstructorReturn(this, (MDCChipSetFoundation.__proto__ || Object.getPrototypeOf(MDCChipSetFoundation)).call(this, _extends(MDCChipSetFoundation.defaultAdapter, adapter)));
        }
        return MDCChipSetFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCChipSetFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return strings;
      });
      var strings = {CHIP_SELECTOR: '.mdc-chip'};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCDialog", function() {
        return MDCDialog;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(50);
      var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(52);
      __webpack_require__.d(__webpack_exports__, "MDCDialogFoundation", function() {
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
      var MDCDialog = function(_MDCComponent) {
        _inherits(MDCDialog, _MDCComponent);
        function MDCDialog() {
          _classCallCheck(this, MDCDialog);
          return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
        }
        _createClass(MDCDialog, [{
          key: 'initialize',
          value: function initialize() {
            this.focusTrap_ = __WEBPACK_IMPORTED_MODULE_3__util__["createFocusTrapInstance"](this.dialogSurface_, this.acceptButton_);
            this.footerBtnRipples_ = [];
            var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
            for (var i = 0,
                footerBtn; footerBtn = footerBtns[i]; i++) {
              this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](footerBtn));
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.footerBtnRipples_.forEach(function(ripple) {
              return ripple.destroy();
            });
            _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'show',
          value: function show() {
            this.foundation_.open();
          }
        }, {
          key: 'close',
          value: function close() {
            this.foundation_.close();
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              addBodyClass: function addBodyClass(className) {
                return document.body.classList.add(className);
              },
              removeBodyClass: function removeBodyClass(className) {
                return document.body.classList.remove(className);
              },
              eventTargetHasClass: function eventTargetHasClass(target, className) {
                return target.classList.contains(className);
              },
              registerInteractionHandler: function registerInteractionHandler(evt, handler) {
                return _this2.root_.addEventListener(evt, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
                return _this2.root_.removeEventListener(evt, handler);
              },
              registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
                return _this2.dialogSurface_.addEventListener(evt, handler);
              },
              deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
                return _this2.dialogSurface_.removeEventListener(evt, handler);
              },
              registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
                return document.addEventListener('keydown', handler);
              },
              deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
                return document.removeEventListener('keydown', handler);
              },
              registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
                return _this2.dialogSurface_.addEventListener('transitionend', handler);
              },
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
                return _this2.dialogSurface_.removeEventListener('transitionend', handler);
              },
              notifyAccept: function notifyAccept() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.ACCEPT_EVENT);
              },
              notifyCancel: function notifyCancel() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.CANCEL_EVENT);
              },
              trapFocusOnSurface: function trapFocusOnSurface() {
                return _this2.focusTrap_.activate();
              },
              untrapFocusOnSurface: function untrapFocusOnSurface() {
                return _this2.focusTrap_.deactivate();
              },
              isDialog: function isDialog(el) {
                return el === _this2.dialogSurface_;
              },
              layoutFooterRipples: function layoutFooterRipples() {
                return _this2.footerBtnRipples_.forEach(function(ripple) {
                  return ripple.layout();
                });
              }
            });
          }
        }, {
          key: 'open',
          get: function get() {
            return this.foundation_.isOpen();
          }
        }, {
          key: 'acceptButton_',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.ACCEPT_SELECTOR);
          }
        }, {
          key: 'dialogSurface_',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.DIALOG_SURFACE_SELECTOR);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCDialog(root);
          }
        }]);
        return MDCDialog;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(51);
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
      var MDCDialogFoundation = function(_MDCFoundation) {
        _inherits(MDCDialogFoundation, _MDCFoundation);
        _createClass(MDCDialogFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              addBodyClass: function addBodyClass() {},
              removeBodyClass: function removeBodyClass() {},
              eventTargetHasClass: function eventTargetHasClass() {
                return (false);
              },
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() {},
              deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() {},
              registerDocumentKeydownHandler: function registerDocumentKeydownHandler() {},
              deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() {},
              registerTransitionEndHandler: function registerTransitionEndHandler() {},
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler() {},
              notifyAccept: function notifyAccept() {},
              notifyCancel: function notifyCancel() {},
              trapFocusOnSurface: function trapFocusOnSurface() {},
              untrapFocusOnSurface: function untrapFocusOnSurface() {},
              isDialog: function isDialog() {
                return (false);
              },
              layoutFooterRipples: function layoutFooterRipples() {}
            };
          }
        }]);
        function MDCDialogFoundation(adapter) {
          _classCallCheck(this, MDCDialogFoundation);
          var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, _extends(MDCDialogFoundation.defaultAdapter, adapter)));
          _this.isOpen_ = false;
          _this.componentClickHandler_ = function(evt) {
            if (_this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a"].BACKDROP)) {
              _this.cancel(true);
            }
          };
          _this.dialogClickHandler_ = function(evt) {
            return _this.handleDialogClick_(evt);
          };
          _this.documentKeydownHandler_ = function(evt) {
            if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
              _this.cancel(true);
            }
          };
          _this.transitionEndHandler_ = function(evt) {
            return _this.handleTransitionEnd_(evt);
          };
          return _this;
        }
        _createClass(MDCDialogFoundation, [{
          key: 'destroy',
          value: function destroy() {
            if (this.isOpen_) {
              this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
              this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
              this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
              this.adapter_.untrapFocusOnSurface();
              this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
              this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
              this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
              this.enableScroll_();
            }
          }
        }, {
          key: 'open',
          value: function open() {
            this.isOpen_ = true;
            this.disableScroll_();
            this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
            this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
            this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
            this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
            this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
            this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
          }
        }, {
          key: 'close',
          value: function close() {
            this.isOpen_ = false;
            this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
            this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
            this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
            this.adapter_.untrapFocusOnSurface();
            this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
            this.adapter_.addClass(MDCDialogFoundation.cssClasses.ANIMATING);
            this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
          }
        }, {
          key: 'isOpen',
          value: function isOpen() {
            return this.isOpen_;
          }
        }, {
          key: 'accept',
          value: function accept(shouldNotify) {
            if (shouldNotify) {
              this.adapter_.notifyAccept();
            }
            this.close();
          }
        }, {
          key: 'cancel',
          value: function cancel(shouldNotify) {
            if (shouldNotify) {
              this.adapter_.notifyCancel();
            }
            this.close();
          }
        }, {
          key: 'handleDialogClick_',
          value: function handleDialogClick_(evt) {
            var target = evt.target;
            if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACCEPT_BTN)) {
              this.accept(true);
            } else if (this.adapter_.eventTargetHasClass(target, __WEBPACK_IMPORTED_MODULE_1__constants__["a"].CANCEL_BTN)) {
              this.cancel(true);
            }
          }
        }, {
          key: 'handleTransitionEnd_',
          value: function handleTransitionEnd_(evt) {
            if (this.adapter_.isDialog(evt.target)) {
              this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
              this.adapter_.removeClass(MDCDialogFoundation.cssClasses.ANIMATING);
              if (this.isOpen_) {
                this.adapter_.trapFocusOnSurface();
                this.adapter_.layoutFooterRipples();
              } else {
                this.enableScroll_();
              }
              ;
            }
            ;
          }
        }, {
          key: 'disableScroll_',
          value: function disableScroll_() {
            this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }, {
          key: 'enableScroll_',
          value: function enableScroll_() {
            this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }]);
        return MDCDialogFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
      __webpack_exports__["a"] = (MDCDialogFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {
        ROOT: 'mdc-dialog',
        OPEN: 'mdc-dialog--open',
        ANIMATING: 'mdc-dialog--animating',
        BACKDROP: 'mdc-dialog__backdrop',
        SCROLL_LOCK: 'mdc-dialog-scroll-lock',
        ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
        CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
      };
      var strings = {
        OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
        DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
        ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept',
        ACCEPT_EVENT: 'MDCDialog:accept',
        CANCEL_EVENT: 'MDCDialog:cancel'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_exports__["createFocusTrapInstance"] = createFocusTrapInstance;
      var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(53);
      var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
      function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
        var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;
        return focusTrapFactory(surfaceEl, {
          initialFocus: acceptButtonEl,
          clickOutsideDeactivates: true
        });
      }
    }), (function(module, exports, __webpack_require__) {
      var tabbable = __webpack_require__(54);
      var listeningFocusTrap = null;
      function focusTrap(element, userOptions) {
        var tabbableNodes = [];
        var nodeFocusedBeforeActivation = null;
        var active = false;
        var paused = false;
        var container = (typeof element === 'string') ? document.querySelector(element) : element;
        var config = userOptions || {};
        config.returnFocusOnDeactivate = (userOptions && userOptions.returnFocusOnDeactivate !== undefined) ? userOptions.returnFocusOnDeactivate : true;
        config.escapeDeactivates = (userOptions && userOptions.escapeDeactivates !== undefined) ? userOptions.escapeDeactivates : true;
        var trap = {
          activate: activate,
          deactivate: deactivate,
          pause: pause,
          unpause: unpause
        };
        return trap;
        function activate(activateOptions) {
          if (active)
            return;
          var defaultedActivateOptions = {onActivate: (activateOptions && activateOptions.onActivate !== undefined) ? activateOptions.onActivate : config.onActivate};
          active = true;
          paused = false;
          nodeFocusedBeforeActivation = document.activeElement;
          if (defaultedActivateOptions.onActivate) {
            defaultedActivateOptions.onActivate();
          }
          addListeners();
          return trap;
        }
        function deactivate(deactivateOptions) {
          if (!active)
            return;
          var defaultedDeactivateOptions = {
            returnFocus: (deactivateOptions && deactivateOptions.returnFocus !== undefined) ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
            onDeactivate: (deactivateOptions && deactivateOptions.onDeactivate !== undefined) ? deactivateOptions.onDeactivate : config.onDeactivate
          };
          removeListeners();
          if (defaultedDeactivateOptions.onDeactivate) {
            defaultedDeactivateOptions.onDeactivate();
          }
          if (defaultedDeactivateOptions.returnFocus) {
            setTimeout(function() {
              tryFocus(nodeFocusedBeforeActivation);
            }, 0);
          }
          active = false;
          paused = false;
          return this;
        }
        function pause() {
          if (paused || !active)
            return;
          paused = true;
          removeListeners();
        }
        function unpause() {
          if (!paused || !active)
            return;
          paused = false;
          addListeners();
        }
        function addListeners() {
          if (!active)
            return;
          if (listeningFocusTrap) {
            listeningFocusTrap.pause();
          }
          listeningFocusTrap = trap;
          updateTabbableNodes();
          tryFocus(firstFocusNode());
          document.addEventListener('focus', checkFocus, true);
          document.addEventListener('click', checkClick, true);
          document.addEventListener('mousedown', checkPointerDown, true);
          document.addEventListener('touchstart', checkPointerDown, true);
          document.addEventListener('keydown', checkKey, true);
          return trap;
        }
        function removeListeners() {
          if (!active || listeningFocusTrap !== trap)
            return;
          document.removeEventListener('focus', checkFocus, true);
          document.removeEventListener('click', checkClick, true);
          document.removeEventListener('mousedown', checkPointerDown, true);
          document.removeEventListener('touchstart', checkPointerDown, true);
          document.removeEventListener('keydown', checkKey, true);
          listeningFocusTrap = null;
          return trap;
        }
        function getNodeForOption(optionName) {
          var optionValue = config[optionName];
          var node = optionValue;
          if (!optionValue) {
            return null;
          }
          if (typeof optionValue === 'string') {
            node = document.querySelector(optionValue);
            if (!node) {
              throw new Error('`' + optionName + '` refers to no known node');
            }
          }
          if (typeof optionValue === 'function') {
            node = optionValue();
            if (!node) {
              throw new Error('`' + optionName + '` did not return a node');
            }
          }
          return node;
        }
        function firstFocusNode() {
          var node;
          if (getNodeForOption('initialFocus') !== null) {
            node = getNodeForOption('initialFocus');
          } else if (container.contains(document.activeElement)) {
            node = document.activeElement;
          } else {
            node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
          }
          if (!node) {
            throw new Error('You can\'t have a focus-trap without at least one focusable element');
          }
          return node;
        }
        function checkPointerDown(e) {
          if (config.clickOutsideDeactivates && !container.contains(e.target)) {
            deactivate({returnFocus: false});
          }
        }
        function checkClick(e) {
          if (config.clickOutsideDeactivates)
            return;
          if (container.contains(e.target))
            return;
          e.preventDefault();
          e.stopImmediatePropagation();
        }
        function checkFocus(e) {
          if (container.contains(e.target))
            return;
          e.preventDefault();
          e.stopImmediatePropagation();
          if (typeof e.target.blur === 'function')
            e.target.blur();
        }
        function checkKey(e) {
          if (e.key === 'Tab' || e.keyCode === 9) {
            handleTab(e);
          }
          if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
            deactivate();
          }
        }
        function handleTab(e) {
          e.preventDefault();
          updateTabbableNodes();
          var currentFocusIndex = tabbableNodes.indexOf(e.target);
          var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
          var firstTabbableNode = tabbableNodes[0];
          if (e.shiftKey) {
            if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
              return tryFocus(lastTabbableNode);
            }
            return tryFocus(tabbableNodes[currentFocusIndex - 1]);
          }
          if (e.target === lastTabbableNode)
            return tryFocus(firstTabbableNode);
          tryFocus(tabbableNodes[currentFocusIndex + 1]);
        }
        function updateTabbableNodes() {
          tabbableNodes = tabbable(container);
        }
      }
      function isEscapeEvent(e) {
        return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
      }
      function tryFocus(node) {
        if (!node || !node.focus)
          return;
        node.focus();
        if (node.tagName.toLowerCase() === 'input') {
          node.select();
        }
      }
      module.exports = focusTrap;
    }), (function(module, exports) {
      module.exports = function(el) {
        var basicTabbables = [];
        var orderedTabbables = [];
        var isUnavailable = createIsUnavailable();
        var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];
        var candidates = el.querySelectorAll(candidateSelectors);
        var candidate,
            candidateIndex;
        for (var i = 0,
            l = candidates.length; i < l; i++) {
          candidate = candidates[i];
          candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;
          if (candidateIndex < 0 || (candidate.tagName === 'INPUT' && candidate.type === 'hidden') || candidate.disabled || isUnavailable(candidate)) {
            continue;
          }
          if (candidateIndex === 0) {
            basicTabbables.push(candidate);
          } else {
            orderedTabbables.push({
              tabIndex: candidateIndex,
              node: candidate
            });
          }
        }
        var tabbableNodes = orderedTabbables.sort(function(a, b) {
          return a.tabIndex - b.tabIndex;
        }).map(function(a) {
          return a.node;
        });
        Array.prototype.push.apply(tabbableNodes, basicTabbables);
        return tabbableNodes;
      };
      function createIsUnavailable() {
        var isOffCache = [];
        function isOff(node, nodeComputedStyle) {
          if (node === document.documentElement)
            return false;
          for (var i = 0,
              length = isOffCache.length; i < length; i++) {
            if (isOffCache[i][0] === node)
              return isOffCache[i][1];
          }
          nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);
          var result = false;
          if (nodeComputedStyle.display === 'none') {
            result = true;
          } else if (node.parentNode) {
            result = isOff(node.parentNode);
          }
          isOffCache.push([node, result]);
          return result;
        }
        return function isUnavailable(node) {
          if (node === document.documentElement)
            return false;
          var computedStyle = window.getComputedStyle(node);
          if (isOff(node, computedStyle))
            return true;
          return computedStyle.visibility === 'hidden';
        };
      }
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(8);
      var __WEBPACK_IMPORTED_MODULE_1__temporary__ = __webpack_require__(56);
      __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawer", function() {
        return __WEBPACK_IMPORTED_MODULE_1__temporary__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTemporaryDrawerFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__temporary__["b"];
      });
      var __WEBPACK_IMPORTED_MODULE_2__persistent__ = __webpack_require__(61);
      __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawer", function() {
        return __WEBPACK_IMPORTED_MODULE_2__persistent__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCPersistentDrawerFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_2__persistent__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "util", function() {
        return __WEBPACK_IMPORTED_MODULE_0__util__;
      });
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTemporaryDrawer;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(57);
      var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCTemporaryDrawer = function(_MDCComponent) {
        _inherits(MDCTemporaryDrawer, _MDCComponent);
        function MDCTemporaryDrawer() {
          _classCallCheck(this, MDCTemporaryDrawer);
          return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
        }
        _createClass(MDCTemporaryDrawer, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            var _MDCTemporaryDrawerFo = __WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings,
                FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
                OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              addBodyClass: function addBodyClass(className) {
                return document.body.classList.add(className);
              },
              removeBodyClass: function removeBodyClass(className) {
                return document.body.classList.remove(className);
              },
              eventTargetHasClass: function eventTargetHasClass(target, className) {
                return target.classList.contains(className);
              },
              hasNecessaryDom: function hasNecessaryDom() {
                return Boolean(_this2.drawer);
              },
              registerInteractionHandler: function registerInteractionHandler(evt, handler) {
                return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
                return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
                return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
              },
              deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
                return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
              },
              registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
                return _this2.drawer.addEventListener('transitionend', handler);
              },
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
                return _this2.drawer.removeEventListener('transitionend', handler);
              },
              registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
                return document.addEventListener('keydown', handler);
              },
              deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
                return document.removeEventListener('keydown', handler);
              },
              getDrawerWidth: function getDrawerWidth() {
                return _this2.drawer.offsetWidth;
              },
              setTranslateX: function setTranslateX(value) {
                return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
              },
              updateCssVariable: function updateCssVariable(value) {
                if (__WEBPACK_IMPORTED_MODULE_2__util__["supportsCssCustomProperties"]()) {
                  _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
                }
              },
              getFocusableElements: function getFocusableElements() {
                return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
              },
              saveElementTabState: function saveElementTabState(el) {
                return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
              },
              restoreElementTabState: function restoreElementTabState(el) {
                return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
              },
              makeElementUntabbable: function makeElementUntabbable(el) {
                return el.setAttribute('tabindex', -1);
              },
              notifyOpen: function notifyOpen() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.OPEN_EVENT);
              },
              notifyClose: function notifyClose() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.CLOSE_EVENT);
              },
              isRtl: function isRtl() {
                return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
              },
              isDrawer: function isDrawer(el) {
                return el === _this2.drawer;
              }
            });
          }
        }, {
          key: 'open',
          get: function get() {
            return this.foundation_.isOpen();
          },
          set: function set(value) {
            if (value) {
              this.foundation_.open();
            } else {
              this.foundation_.close();
            }
          }
        }, {
          key: 'drawer',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.DRAWER_SELECTOR);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTemporaryDrawer(root);
          }
        }]);
        return MDCTemporaryDrawer;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(7);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(60);
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
      var MDCTemporaryDrawerFoundation = function(_MDCSlidableDrawerFou) {
        _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);
        _createClass(MDCTemporaryDrawerFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b"].defaultAdapter, {
              addBodyClass: function addBodyClass() {},
              removeBodyClass: function removeBodyClass() {},
              isDrawer: function isDrawer() {
                return false;
              },
              updateCssVariable: function updateCssVariable() {},
              eventTargetHasClass: function eventTargetHasClass() {
                return (false);
              }
            });
          }
        }]);
        function MDCTemporaryDrawerFoundation(adapter) {
          _classCallCheck(this, MDCTemporaryDrawerFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, _extends(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));
          _this.componentClickHandler_ = function(evt) {
            if (_this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ROOT)) {
              _this.close(true);
            }
          };
          return _this;
        }
        _createClass(MDCTemporaryDrawerFoundation, [{
          key: 'init',
          value: function init() {
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);
            this.adapter_.updateCssVariable(0);
            this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);
            this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
            this.enableScroll_();
          }
        }, {
          key: 'open',
          value: function open() {
            this.disableScroll_();
            this.adapter_.updateCssVariable('');
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
          }
        }, {
          key: 'close',
          value: function close() {
            this.adapter_.updateCssVariable('');
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
          }
        }, {
          key: 'prepareForTouchEnd_',
          value: function prepareForTouchEnd_() {
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);
            this.adapter_.updateCssVariable('');
          }
        }, {
          key: 'updateDrawer_',
          value: function updateDrawer_() {
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);
            var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
            this.adapter_.updateCssVariable(newOpacity);
          }
        }, {
          key: 'isRootTransitioningEventTarget_',
          value: function isRootTransitioningEventTarget_(el) {
            return this.adapter_.isDrawer(el);
          }
        }, {
          key: 'handleTransitionEnd_',
          value: function handleTransitionEnd_(evt) {
            _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'handleTransitionEnd_', this).call(this, evt);
            if (!this.isOpen_) {
              this.enableScroll_();
            }
          }
        }, {
          key: 'disableScroll_',
          value: function disableScroll_() {
            this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }, {
          key: 'enableScroll_',
          value: function enableScroll_() {
            this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }]);
        return MDCTemporaryDrawerFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b"]);
      __webpack_exports__["a"] = (MDCTemporaryDrawerFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return FOCUSABLE_ELEMENTS;
      });
      var FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCSlidableDrawerFoundation;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
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
      var MDCSlidableDrawerFoundation = function(_MDCFoundation) {
        _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);
        _createClass(MDCSlidableDrawerFoundation, null, [{
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              hasClass: function hasClass() {},
              hasNecessaryDom: function hasNecessaryDom() {
                return (false);
              },
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              registerDrawerInteractionHandler: function registerDrawerInteractionHandler() {},
              deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() {},
              registerTransitionEndHandler: function registerTransitionEndHandler() {},
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler() {},
              registerDocumentKeydownHandler: function registerDocumentKeydownHandler() {},
              deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() {},
              setTranslateX: function setTranslateX() {},
              getFocusableElements: function getFocusableElements() {},
              saveElementTabState: function saveElementTabState() {},
              restoreElementTabState: function restoreElementTabState() {},
              makeElementUntabbable: function makeElementUntabbable() {},
              notifyOpen: function notifyOpen() {},
              notifyClose: function notifyClose() {},
              isRtl: function isRtl() {
                return (false);
              },
              getDrawerWidth: function getDrawerWidth() {
                return (0);
              }
            };
          }
        }]);
        function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
          _classCallCheck(this, MDCSlidableDrawerFoundation);
          var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, _extends(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));
          _this.rootCssClass_ = rootCssClass;
          _this.animatingCssClass_ = animatingCssClass;
          _this.openCssClass_ = openCssClass;
          _this.transitionEndHandler_ = function(evt) {
            return _this.handleTransitionEnd_(evt);
          };
          _this.inert_ = false;
          _this.componentTouchStartHandler_ = function(evt) {
            return _this.handleTouchStart_(evt);
          };
          _this.componentTouchMoveHandler_ = function(evt) {
            return _this.handleTouchMove_(evt);
          };
          _this.componentTouchEndHandler_ = function(evt) {
            return _this.handleTouchEnd_(evt);
          };
          _this.documentKeydownHandler_ = function(evt) {
            if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
              _this.close();
            }
          };
          return _this;
        }
        _createClass(MDCSlidableDrawerFoundation, [{
          key: 'init',
          value: function init() {
            var ROOT = this.rootCssClass_;
            var OPEN = this.openCssClass_;
            if (!this.adapter_.hasClass(ROOT)) {
              throw new Error(ROOT + ' class required in root element.');
            }
            if (!this.adapter_.hasNecessaryDom()) {
              throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
            }
            if (this.adapter_.hasClass(OPEN)) {
              this.isOpen_ = true;
            } else {
              this.detabinate_();
              this.isOpen_ = false;
            }
            this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
            this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
            this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
            this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
            this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
            this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
          }
        }, {
          key: 'open',
          value: function open() {
            this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
            this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
            this.adapter_.addClass(this.animatingCssClass_);
            this.adapter_.addClass(this.openCssClass_);
            this.retabinate_();
            if (!this.isOpen_) {
              this.adapter_.notifyOpen();
            }
            this.isOpen_ = true;
          }
        }, {
          key: 'close',
          value: function close() {
            this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
            this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
            this.adapter_.addClass(this.animatingCssClass_);
            this.adapter_.removeClass(this.openCssClass_);
            this.detabinate_();
            if (this.isOpen_) {
              this.adapter_.notifyClose();
            }
            this.isOpen_ = false;
          }
        }, {
          key: 'isOpen',
          value: function isOpen() {
            return this.isOpen_;
          }
        }, {
          key: 'detabinate_',
          value: function detabinate_() {
            if (this.inert_) {
              return;
            }
            var elements = this.adapter_.getFocusableElements();
            if (elements) {
              for (var i = 0; i < elements.length; i++) {
                this.adapter_.saveElementTabState(elements[i]);
                this.adapter_.makeElementUntabbable(elements[i]);
              }
            }
            this.inert_ = true;
          }
        }, {
          key: 'retabinate_',
          value: function retabinate_() {
            if (!this.inert_) {
              return;
            }
            var elements = this.adapter_.getFocusableElements();
            if (elements) {
              for (var i = 0; i < elements.length; i++) {
                this.adapter_.restoreElementTabState(elements[i]);
              }
            }
            this.inert_ = false;
          }
        }, {
          key: 'handleTouchStart_',
          value: function handleTouchStart_(evt) {
            if (!this.adapter_.hasClass(this.openCssClass_)) {
              return;
            }
            if (evt.pointerType && evt.pointerType !== 'touch') {
              return;
            }
            this.direction_ = this.adapter_.isRtl() ? -1 : 1;
            this.drawerWidth_ = this.adapter_.getDrawerWidth();
            this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
            this.currentX_ = this.startX_;
            this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
          }
        }, {
          key: 'handleTouchMove_',
          value: function handleTouchMove_(evt) {
            if (evt.pointerType && evt.pointerType !== 'touch') {
              return;
            }
            this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
          }
        }, {
          key: 'handleTouchEnd_',
          value: function handleTouchEnd_(evt) {
            if (evt.pointerType && evt.pointerType !== 'touch') {
              return;
            }
            this.prepareForTouchEnd_();
            if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: 'prepareForTouchEnd_',
          value: function prepareForTouchEnd_() {
            cancelAnimationFrame(this.updateRaf_);
            this.adapter_.setTranslateX(null);
          }
        }, {
          key: 'updateDrawer_',
          value: function updateDrawer_() {
            this.updateRaf_ = requestAnimationFrame(this.updateDrawer_.bind(this));
            this.adapter_.setTranslateX(this.newPosition_);
          }
        }, {
          key: 'isRootTransitioningEventTarget_',
          value: function isRootTransitioningEventTarget_() {
            return false;
          }
        }, {
          key: 'handleTransitionEnd_',
          value: function handleTransitionEnd_(evt) {
            if (this.isRootTransitioningEventTarget_(evt.target)) {
              this.adapter_.removeClass(this.animatingCssClass_);
              this.adapter_.deregisterTransitionEndHandler(this.transitionEndHandler_);
            }
          }
        }, {
          key: 'newPosition_',
          get: function get() {
            var newPos = null;
            if (this.direction_ === 1) {
              newPos = Math.min(0, this.currentX_ - this.startX_);
            } else {
              newPos = Math.max(0, this.currentX_ - this.startX_);
            }
            return newPos;
          }
        }]);
        return MDCSlidableDrawerFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(7);
      var cssClasses = {
        ROOT: 'mdc-drawer--temporary',
        OPEN: 'mdc-drawer--open',
        ANIMATING: 'mdc-drawer--animating',
        SCROLL_LOCK: 'mdc-drawer-scroll-lock'
      };
      var strings = {
        DRAWER_SELECTOR: '.mdc-drawer--temporary .mdc-drawer__drawer',
        OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
        FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable_index__["a"],
        OPEN_EVENT: 'MDCTemporaryDrawer:open',
        CLOSE_EVENT: 'MDCTemporaryDrawer:close'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCPersistentDrawer;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(62);
      var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(8);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCPersistentDrawer = function(_MDCComponent) {
        _inherits(MDCPersistentDrawer, _MDCComponent);
        function MDCPersistentDrawer() {
          _classCallCheck(this, MDCPersistentDrawer);
          return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
        }
        _createClass(MDCPersistentDrawer, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            var FOCUSABLE_ELEMENTS = __WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.FOCUSABLE_ELEMENTS;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              hasNecessaryDom: function hasNecessaryDom() {
                return Boolean(_this2.drawer);
              },
              registerInteractionHandler: function registerInteractionHandler(evt, handler) {
                return _this2.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
                return _this2.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
                return _this2.drawer.addEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
              },
              deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
                return _this2.drawer.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__util__["remapEvent"](evt), handler);
              },
              registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
                return _this2.root_.addEventListener('transitionend', handler);
              },
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
                return _this2.root_.removeEventListener('transitionend', handler);
              },
              registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
                return document.addEventListener('keydown', handler);
              },
              deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
                return document.removeEventListener('keydown', handler);
              },
              getDrawerWidth: function getDrawerWidth() {
                return _this2.drawer.offsetWidth;
              },
              setTranslateX: function setTranslateX(value) {
                return _this2.drawer.style.setProperty(__WEBPACK_IMPORTED_MODULE_2__util__["getTransformPropertyName"](), value === null ? null : 'translateX(' + value + 'px)');
              },
              getFocusableElements: function getFocusableElements() {
                return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
              },
              saveElementTabState: function saveElementTabState(el) {
                return __WEBPACK_IMPORTED_MODULE_2__util__["saveElementTabState"](el);
              },
              restoreElementTabState: function restoreElementTabState(el) {
                return __WEBPACK_IMPORTED_MODULE_2__util__["restoreElementTabState"](el);
              },
              makeElementUntabbable: function makeElementUntabbable(el) {
                return el.setAttribute('tabindex', -1);
              },
              notifyOpen: function notifyOpen() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.OPEN_EVENT);
              },
              notifyClose: function notifyClose() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.CLOSE_EVENT);
              },
              isRtl: function isRtl() {
                return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
              },
              isDrawer: function isDrawer(el) {
                return el === _this2.drawer;
              }
            });
          }
        }, {
          key: 'open',
          get: function get() {
            return this.foundation_.isOpen();
          },
          set: function set(value) {
            if (value) {
              this.foundation_.open();
            } else {
              this.foundation_.close();
            }
          }
        }, {
          key: 'drawer',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.DRAWER_SELECTOR);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCPersistentDrawer(root);
          }
        }]);
        return MDCPersistentDrawer;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(7);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(63);
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
      var MDCPersistentDrawerFoundation = function(_MDCSlidableDrawerFou) {
        _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);
        _createClass(MDCPersistentDrawerFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return _extends(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b"].defaultAdapter, {isDrawer: function isDrawer() {
                return false;
              }});
          }
        }]);
        function MDCPersistentDrawerFoundation(adapter) {
          _classCallCheck(this, MDCPersistentDrawerFoundation);
          return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, _extends(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
        }
        _createClass(MDCPersistentDrawerFoundation, [{
          key: 'isRootTransitioningEventTarget_',
          value: function isRootTransitioningEventTarget_(el) {
            return this.adapter_.isDrawer(el);
          }
        }]);
        return MDCPersistentDrawerFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__slidable_index__["b"]);
      __webpack_exports__["a"] = (MDCPersistentDrawerFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var __WEBPACK_IMPORTED_MODULE_0__slidable_index__ = __webpack_require__(7);
      var cssClasses = {
        ROOT: 'mdc-drawer--persistent',
        OPEN: 'mdc-drawer--open',
        ANIMATING: 'mdc-drawer--animating'
      };
      var strings = {
        DRAWER_SELECTOR: '.mdc-drawer--persistent .mdc-drawer__drawer',
        FOCUSABLE_ELEMENTS: __WEBPACK_IMPORTED_MODULE_0__slidable_index__["a"],
        OPEN_EVENT: 'MDCPersistentDrawer:open',
        CLOSE_EVENT: 'MDCPersistentDrawer:close'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCFormField", function() {
        return MDCFormField;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(65);
      var __WEBPACK_IMPORTED_MODULE_2__material_selection_control_index__ = __webpack_require__(4);
      __webpack_require__.d(__webpack_exports__, "MDCFormFieldFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCFormField = function(_MDCComponent) {
        _inherits(MDCFormField, _MDCComponent);
        _createClass(MDCFormField, [{
          key: 'input',
          set: function set(input) {
            this.input_ = input;
          },
          get: function get() {
            return this.input_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCFormField(root);
          }
        }]);
        function MDCFormField() {
          var _ref;
          _classCallCheck(this, MDCFormField);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).call.apply(_ref, [this].concat(args)));
          _this.input_;
          return _this;
        }
        _createClass(MDCFormField, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.label_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.label_.removeEventListener(type, handler);
              },
              activateInputRipple: function activateInputRipple() {
                if (_this2.input_ && _this2.input_.ripple) {
                  _this2.input_.ripple.activate();
                }
              },
              deactivateInputRipple: function deactivateInputRipple() {
                if (_this2.input_ && _this2.input_.ripple) {
                  _this2.input_.ripple.deactivate();
                }
              }
            });
          }
        }, {
          key: 'label_',
          get: function get() {
            var LABEL_SELECTOR = __WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.LABEL_SELECTOR;
            return (this.root_.querySelector(LABEL_SELECTOR));
          }
        }]);
        return MDCFormField;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(66);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(67);
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
      var MDCFormFieldFoundation = function(_MDCFoundation) {
        _inherits(MDCFormFieldFoundation, _MDCFoundation);
        _createClass(MDCFormFieldFoundation, null, [{
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
            return {
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              activateInputRipple: function activateInputRipple() {},
              deactivateInputRipple: function deactivateInputRipple() {}
            };
          }
        }]);
        function MDCFormFieldFoundation(adapter) {
          _classCallCheck(this, MDCFormFieldFoundation);
          var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, _extends(MDCFormFieldFoundation.defaultAdapter, adapter)));
          _this.clickHandler_ = function() {
            return _this.handleClick_();
          };
          return _this;
        }
        _createClass(MDCFormFieldFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerInteractionHandler('click', this.clickHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
          }
        }, {
          key: 'handleClick_',
          value: function handleClick_() {
            var _this2 = this;
            this.adapter_.activateInputRipple();
            requestAnimationFrame(function() {
              return _this2.adapter_.deactivateInputRipple();
            });
          }
        }]);
        return MDCFormFieldFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCFormFieldFoundation);
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
      var MDCFormFieldAdapter = function() {
        function MDCFormFieldAdapter() {
          _classCallCheck(this, MDCFormFieldAdapter);
        }
        _createClass(MDCFormFieldAdapter, [{
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(type, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(type, handler) {}
        }, {
          key: "activateInputRipple",
          value: function activateInputRipple() {}
        }, {
          key: "deactivateInputRipple",
          value: function deactivateInputRipple() {}
        }]);
        return MDCFormFieldAdapter;
      }();
      var _unused_webpack_default_export = (MDCFormFieldAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {ROOT: 'mdc-form-field'};
      var strings = {LABEL_SELECTOR: '.mdc-form-field > label'};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCGridList", function() {
        return MDCGridList;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(69);
      __webpack_require__.d(__webpack_exports__, "MDCGridListFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCGridList = function(_MDCComponent) {
        _inherits(MDCGridList, _MDCComponent);
        function MDCGridList() {
          _classCallCheck(this, MDCGridList);
          return _possibleConstructorReturn(this, (MDCGridList.__proto__ || Object.getPrototypeOf(MDCGridList)).apply(this, arguments));
        }
        _createClass(MDCGridList, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              getOffsetWidth: function getOffsetWidth() {
                return _this2.root_.offsetWidth;
              },
              getNumberOfTiles: function getNumberOfTiles() {
                return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.TILE_SELECTOR).length;
              },
              getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
                return _this2.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.TILE_SELECTOR)[index].offsetWidth;
              },
              setStyleForTilesElement: function setStyleForTilesElement(property, value) {
                _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.TILES_SELECTOR).style[property] = value;
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              }
            });
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCGridList(root);
          }
        }]);
        return MDCGridList;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(70);
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
      var MDCGridListFoundation = function(_MDCFoundation) {
        _inherits(MDCGridListFoundation, _MDCFoundation);
        _createClass(MDCGridListFoundation, null, [{
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              getOffsetWidth: function getOffsetWidth() {
                return (0);
              },
              getNumberOfTiles: function getNumberOfTiles() {
                return (0);
              },
              getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
                return (0);
              },
              setStyleForTilesElement: function setStyleForTilesElement() {},
              registerResizeHandler: function registerResizeHandler() {},
              deregisterResizeHandler: function deregisterResizeHandler() {}
            };
          }
        }]);
        function MDCGridListFoundation(adapter) {
          _classCallCheck(this, MDCGridListFoundation);
          var _this = _possibleConstructorReturn(this, (MDCGridListFoundation.__proto__ || Object.getPrototypeOf(MDCGridListFoundation)).call(this, _extends(MDCGridListFoundation.defaultAdapter, adapter)));
          _this.resizeHandler_ = function() {
            return _this.alignCenter();
          };
          _this.resizeFrame_ = 0;
          return _this;
        }
        _createClass(MDCGridListFoundation, [{
          key: 'init',
          value: function init() {
            this.alignCenter();
            this.adapter_.registerResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'alignCenter',
          value: function alignCenter() {
            var _this2 = this;
            if (this.resizeFrame_ !== 0) {
              cancelAnimationFrame(this.resizeFrame_);
            }
            this.resizeFrame_ = requestAnimationFrame(function() {
              _this2.alignCenter_();
              _this2.resizeFrame_ = 0;
            });
          }
        }, {
          key: 'alignCenter_',
          value: function alignCenter_() {
            if (this.adapter_.getNumberOfTiles() == 0) {
              return;
            }
            var gridWidth = this.adapter_.getOffsetWidth();
            var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
            var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
            this.adapter_.setStyleForTilesElement('width', tilesWidth + 'px');
          }
        }]);
        return MDCGridListFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
      __webpack_exports__["a"] = (MDCGridListFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return strings;
      });
      var strings = {
        TILES_SELECTOR: '.mdc-grid-list__tiles',
        TILE_SELECTOR: '.mdc-grid-tile'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCIconToggle", function() {
        return MDCIconToggle;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(72);
      var __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__ = __webpack_require__(3);
      __webpack_require__.d(__webpack_exports__, "MDCIconToggleFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCIconToggle = function(_MDCComponent) {
        _inherits(MDCIconToggle, _MDCComponent);
        _createClass(MDCIconToggle, null, [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCIconToggle(root);
          }
        }]);
        function MDCIconToggle() {
          var _ref;
          _classCallCheck(this, MDCIconToggle);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = _this.initRipple_();
          return _this;
        }
        _createClass(MDCIconToggle, [{
          key: 'initRipple_',
          value: function initRipple_() {
            var _this2 = this;
            var adapter = _extends(__WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["MDCRipple"].createAdapter(this), {
              isUnbounded: function isUnbounded() {
                return true;
              },
              isSurfaceActive: function isSurfaceActive() {
                return _this2.foundation_.isKeyboardActivated();
              },
              computeBoundingRect: function computeBoundingRect() {
                var dim = 48;
                var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
                    left = _root_$getBoundingCli.left,
                    top = _root_$getBoundingCli.top;
                return {
                  left: left,
                  top: top,
                  width: dim,
                  height: dim,
                  right: left + dim,
                  bottom: left + dim
                };
              }
            });
            var foundation = new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["MDCRippleFoundation"](adapter);
            return new __WEBPACK_IMPORTED_MODULE_2__material_ripple_index__["MDCRipple"](this.root_, foundation);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              addClass: function addClass(className) {
                return _this3.iconEl_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.iconEl_.classList.remove(className);
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this3.root_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this3.root_.removeEventListener(type, handler);
              },
              setText: function setText(text) {
                return _this3.iconEl_.textContent = text;
              },
              getTabIndex: function getTabIndex() {
                return (_this3.root_.tabIndex);
              },
              setTabIndex: function setTabIndex(tabIndex) {
                return _this3.root_.tabIndex = tabIndex;
              },
              getAttr: function getAttr(name, value) {
                return _this3.root_.getAttribute(name, value);
              },
              setAttr: function setAttr(name, value) {
                return _this3.root_.setAttribute(name, value);
              },
              rmAttr: function rmAttr(name) {
                return _this3.root_.removeAttribute(name);
              },
              notifyChange: function notifyChange(evtData) {
                return _this3.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.CHANGE_EVENT, evtData);
              }
            });
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.on = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.ARIA_PRESSED) === 'true';
            this.disabled = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.ARIA_DISABLED) === 'true';
          }
        }, {
          key: 'refreshToggleData',
          value: function refreshToggleData() {
            this.foundation_.refreshToggleData();
          }
        }, {
          key: 'iconEl_',
          get: function get() {
            var sel = this.root_.dataset['iconInnerSelector'];
            return sel ? this.root_.querySelector(sel) : this.root_;
          }
        }, {
          key: 'ripple',
          get: function get() {
            return this.ripple_;
          }
        }, {
          key: 'on',
          get: function get() {
            return this.foundation_.isOn();
          },
          set: function set(isOn) {
            this.foundation_.toggle(isOn);
          }
        }, {
          key: 'disabled',
          get: function get() {
            return this.foundation_.isDisabled();
          },
          set: function set(isDisabled) {
            this.foundation_.setDisabled(isDisabled);
          }
        }]);
        return MDCIconToggle;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(73);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(74);
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
      var MDCIconToggleFoundation = function(_MDCFoundation) {
        _inherits(MDCIconToggleFoundation, _MDCFoundation);
        _createClass(MDCIconToggleFoundation, null, [{
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
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              setText: function setText() {},
              getTabIndex: function getTabIndex() {
                return (0);
              },
              setTabIndex: function setTabIndex() {},
              getAttr: function getAttr() {
                return ('');
              },
              setAttr: function setAttr() {},
              rmAttr: function rmAttr() {},
              notifyChange: function notifyChange() {}
            };
          }
        }]);
        function MDCIconToggleFoundation(adapter) {
          _classCallCheck(this, MDCIconToggleFoundation);
          var _this = _possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));
          _this.on_ = false;
          _this.disabled_ = false;
          _this.savedTabIndex_ = -1;
          _this.toggleOnData_ = null;
          _this.toggleOffData_ = null;
          _this.clickHandler_ = function() {
            return _this.toggleFromEvt_();
          };
          _this.isHandlingKeydown_ = false;
          _this.keydownHandler_ = function(evt) {
            if (isSpace(evt)) {
              _this.isHandlingKeydown_ = true;
              return evt.preventDefault();
            }
          };
          _this.keyupHandler_ = function(evt) {
            if (isSpace(evt)) {
              _this.isHandlingKeydown_ = false;
              _this.toggleFromEvt_();
            }
          };
          return _this;
        }
        _createClass(MDCIconToggleFoundation, [{
          key: 'init',
          value: function init() {
            this.refreshToggleData();
            this.savedTabIndex_ = this.adapter_.getTabIndex();
            this.adapter_.registerInteractionHandler('click', this.clickHandler_);
            this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
            this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
          }
        }, {
          key: 'refreshToggleData',
          value: function refreshToggleData() {
            var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
                DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
                DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;
            this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
            this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
            this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
            this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
          }
        }, {
          key: 'toggleFromEvt_',
          value: function toggleFromEvt_() {
            this.toggle();
            var isOn = this.on_;
            this.adapter_.notifyChange({isOn: isOn});
          }
        }, {
          key: 'isOn',
          value: function isOn() {
            return this.on_;
          }
        }, {
          key: 'toggle',
          value: function toggle() {
            var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;
            this.on_ = isOn;
            var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
                ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
                ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;
            if (this.on_) {
              this.adapter_.setAttr(ARIA_PRESSED, 'true');
            } else {
              this.adapter_.setAttr(ARIA_PRESSED, 'false');
            }
            var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
                classToRemove = _ref.cssClass;
            if (classToRemove) {
              this.adapter_.removeClass(classToRemove);
            }
            var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
                content = _ref2.content,
                label = _ref2.label,
                cssClass = _ref2.cssClass;
            if (cssClass) {
              this.adapter_.addClass(cssClass);
            }
            if (content) {
              this.adapter_.setText(content);
            }
            if (label) {
              this.adapter_.setAttr(ARIA_LABEL, label);
            }
          }
        }, {
          key: 'parseJsonDataAttr_',
          value: function parseJsonDataAttr_(dataAttr) {
            var val = this.adapter_.getAttr(dataAttr);
            if (!val) {
              return {};
            }
            return (JSON.parse(val));
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.disabled_;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(isDisabled) {
            this.disabled_ = isDisabled;
            var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
            var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;
            if (this.disabled_) {
              this.savedTabIndex_ = this.adapter_.getTabIndex();
              this.adapter_.setTabIndex(-1);
              this.adapter_.setAttr(ARIA_DISABLED, 'true');
              this.adapter_.addClass(DISABLED);
            } else {
              this.adapter_.setTabIndex(this.savedTabIndex_);
              this.adapter_.rmAttr(ARIA_DISABLED);
              this.adapter_.removeClass(DISABLED);
            }
          }
        }, {
          key: 'isKeyboardActivated',
          value: function isKeyboardActivated() {
            return this.isHandlingKeydown_;
          }
        }]);
        return MDCIconToggleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      var KeyboardKey = void 0;
      function isSpace(keyboardKey) {
        return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
      }
      var IconToggleState = function IconToggleState() {
        _classCallCheck(this, IconToggleState);
      };
      IconToggleState.prototype.label;
      IconToggleState.prototype.content;
      IconToggleState.prototype.cssClass;
      __webpack_exports__["a"] = (MDCIconToggleFoundation);
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
      var MDCIconToggleAdapter = function() {
        function MDCIconToggleAdapter() {
          _classCallCheck(this, MDCIconToggleAdapter);
        }
        _createClass(MDCIconToggleAdapter, [{
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(type, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(type, handler) {}
        }, {
          key: "setText",
          value: function setText(text) {}
        }, {
          key: "getTabIndex",
          value: function getTabIndex() {}
        }, {
          key: "setTabIndex",
          value: function setTabIndex(tabIndex) {}
        }, {
          key: "getAttr",
          value: function getAttr(name) {}
        }, {
          key: "setAttr",
          value: function setAttr(name, value) {}
        }, {
          key: "rmAttr",
          value: function rmAttr(name) {}
        }, {
          key: "notifyChange",
          value: function notifyChange(evtData) {}
        }]);
        return MDCIconToggleAdapter;
      }();
      var IconToggleEvent = void 0;
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {
        ROOT: 'mdc-icon-toggle',
        DISABLED: 'mdc-icon-toggle--disabled'
      };
      var strings = {
        DATA_TOGGLE_ON: 'data-toggle-on',
        DATA_TOGGLE_OFF: 'data-toggle-off',
        ARIA_PRESSED: 'aria-pressed',
        ARIA_DISABLED: 'aria-disabled',
        ARIA_LABEL: 'aria-label',
        CHANGE_EVENT: 'MDCIconToggle:change'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCLinearProgress", function() {
        return MDCLinearProgress;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(76);
      __webpack_require__.d(__webpack_exports__, "MDCLinearProgressFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCLinearProgress = function(_MDCComponent) {
        _inherits(MDCLinearProgress, _MDCComponent);
        function MDCLinearProgress() {
          _classCallCheck(this, MDCLinearProgress);
          return _possibleConstructorReturn(this, (MDCLinearProgress.__proto__ || Object.getPrototypeOf(MDCLinearProgress)).apply(this, arguments));
        }
        _createClass(MDCLinearProgress, [{
          key: 'open',
          value: function open() {
            this.foundation_.open();
          }
        }, {
          key: 'close',
          value: function close() {
            this.foundation_.close();
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              getPrimaryBar: function getPrimaryBar() {
                return _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.PRIMARY_BAR_SELECTOR);
              },
              getBuffer: function getBuffer() {
                return _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.BUFFER_SELECTOR);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              setStyle: function setStyle(el, styleProperty, value) {
                return el.style[styleProperty] = value;
              }
            });
          }
        }, {
          key: 'determinate',
          set: function set(value) {
            this.foundation_.setDeterminate(value);
          }
        }, {
          key: 'progress',
          set: function set(value) {
            this.foundation_.setProgress(value);
          }
        }, {
          key: 'buffer',
          set: function set(value) {
            this.foundation_.setBuffer(value);
          }
        }, {
          key: 'reverse',
          set: function set(value) {
            this.foundation_.setReverse(value);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCLinearProgress(root);
          }
        }]);
        return MDCLinearProgress;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__material_animation_index__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(77);
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
      var MDCLinearProgressFoundation = function(_MDCFoundation) {
        _inherits(MDCLinearProgressFoundation, _MDCFoundation);
        _createClass(MDCLinearProgressFoundation, null, [{
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
            return {
              addClass: function addClass() {},
              getPrimaryBar: function getPrimaryBar() {},
              getBuffer: function getBuffer() {},
              hasClass: function hasClass() {
                return (false);
              },
              removeClass: function removeClass() {},
              setStyle: function setStyle() {}
            };
          }
        }]);
        function MDCLinearProgressFoundation(adapter) {
          _classCallCheck(this, MDCLinearProgressFoundation);
          return _possibleConstructorReturn(this, (MDCLinearProgressFoundation.__proto__ || Object.getPrototypeOf(MDCLinearProgressFoundation)).call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
        }
        _createClass(MDCLinearProgressFoundation, [{
          key: 'init',
          value: function init() {
            this.determinate_ = !this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].INDETERMINATE_CLASS);
            this.reverse_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].REVERSED_CLASS);
            this.progress_ = 0;
          }
        }, {
          key: 'setDeterminate',
          value: function setDeterminate(isDeterminate) {
            this.determinate_ = isDeterminate;
            if (this.determinate_) {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].INDETERMINATE_CLASS);
              this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
            } else {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].INDETERMINATE_CLASS);
              this.setScale_(this.adapter_.getPrimaryBar(), 1);
              this.setScale_(this.adapter_.getBuffer(), 1);
            }
          }
        }, {
          key: 'setProgress',
          value: function setProgress(value) {
            this.progress_ = value;
            if (this.determinate_) {
              this.setScale_(this.adapter_.getPrimaryBar(), value);
            }
          }
        }, {
          key: 'setBuffer',
          value: function setBuffer(value) {
            if (this.determinate_) {
              this.setScale_(this.adapter_.getBuffer(), value);
            }
          }
        }, {
          key: 'setReverse',
          value: function setReverse(isReversed) {
            this.reverse_ = isReversed;
            if (this.reverse_) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].REVERSED_CLASS);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].REVERSED_CLASS);
            }
          }
        }, {
          key: 'open',
          value: function open() {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].CLOSED_CLASS);
          }
        }, {
          key: 'close',
          value: function close() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].CLOSED_CLASS);
          }
        }, {
          key: 'setScale_',
          value: function setScale_(el, scaleValue) {
            var _this2 = this;
            var value = 'scaleX(' + scaleValue + ')';
            __WEBPACK_IMPORTED_MODULE_1__material_animation_index__["c"].forEach(function(transformStyleProperty) {
              _this2.adapter_.setStyle(el, transformStyleProperty, value);
            });
          }
        }]);
        return MDCLinearProgressFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
      __webpack_exports__["a"] = (MDCLinearProgressFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {
        CLOSED_CLASS: 'mdc-linear-progress--closed',
        INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
        REVERSED_CLASS: 'mdc-linear-progress--reversed'
      };
      var strings = {
        PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
        BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      var cssClasses = {
        LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
        LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return getTransformPropertyName;
      });
      var storedTransformPropertyName_ = void 0;
      function getTransformPropertyName(globalObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (storedTransformPropertyName_ === undefined || forceRefresh) {
          var el = globalObj.document.createElement('div');
          var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
          storedTransformPropertyName_ = transformPropertyName;
        }
        return storedTransformPropertyName_;
      }
      function clamp(value) {
        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return Math.min(max, Math.max(min, value));
      }
      function bezierProgress(time, x1, y1, x2, y2) {
        return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
      }
      function getBezierCoordinate_(t, c1, c2) {
        if (t === 0 || t === 1) {
          return t;
        }
        var ic0 = t * c1;
        var ic1 = c1 + t * (c2 - c1);
        var ic2 = c2 + t * (1 - c2);
        ic0 += t * (ic1 - ic0);
        ic1 += t * (ic2 - ic1);
        return ic0 + t * (ic1 - ic0);
      }
      function solvePositionFromXValue_(xVal, x1, x2) {
        var EPSILON = 1e-6;
        var MAX_ITERATIONS = 8;
        if (xVal <= 0) {
          return 0;
        } else if (xVal >= 1) {
          return 1;
        }
        var t = xVal;
        var tMin = 0;
        var tMax = 1;
        var value = 0;
        for (var i = 0; i < MAX_ITERATIONS; i++) {
          value = getBezierCoordinate_(t, x1, x2);
          var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
          if (Math.abs(value - xVal) < EPSILON) {
            return t;
          } else if (Math.abs(derivative) < EPSILON) {
            break;
          } else {
            if (value < xVal) {
              tMin = t;
            } else {
              tMax = t;
            }
            t -= (value - xVal) / derivative;
          }
        }
        for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
          if (value < xVal) {
            tMin = t;
            t = (t + tMax) / 2;
          } else {
            tMax = t;
            t = (t + tMin) / 2;
          }
          value = getBezierCoordinate_(t, x1, x2);
        }
        return t;
      }
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return MDCMenuFoundation;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return AnchorMargin;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(81);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(22);
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
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
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
      var AnchorMargin = void 0;
      var AutoLayoutMeasurements = void 0;
      var MDCMenuFoundation = function(_MDCFoundation) {
        _inherits(MDCMenuFoundation, _MDCFoundation);
        _createClass(MDCMenuFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["e"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["d"];
          }
        }, {
          key: 'Corner',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              hasClass: function hasClass() {
                return false;
              },
              hasNecessaryDom: function hasNecessaryDom() {
                return false;
              },
              getAttributeForEventTarget: function getAttributeForEventTarget() {},
              getInnerDimensions: function getInnerDimensions() {
                return {};
              },
              hasAnchor: function hasAnchor() {
                return false;
              },
              getAnchorDimensions: function getAnchorDimensions() {
                return {};
              },
              getWindowDimensions: function getWindowDimensions() {
                return {};
              },
              getNumberOfItems: function getNumberOfItems() {
                return 0;
              },
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              registerBodyClickHandler: function registerBodyClickHandler() {},
              deregisterBodyClickHandler: function deregisterBodyClickHandler() {},
              getIndexForEventTarget: function getIndexForEventTarget() {
                return 0;
              },
              notifySelected: function notifySelected() {},
              notifyCancel: function notifyCancel() {},
              saveFocus: function saveFocus() {},
              restoreFocus: function restoreFocus() {},
              isFocused: function isFocused() {
                return false;
              },
              focus: function focus() {},
              getFocusedItemIndex: function getFocusedItemIndex() {
                return -1;
              },
              focusItemAtIndex: function focusItemAtIndex() {},
              isRtl: function isRtl() {
                return false;
              },
              setTransformOrigin: function setTransformOrigin() {},
              setPosition: function setPosition() {},
              setMaxHeight: function setMaxHeight() {},
              setAttrForOptionAtIndex: function setAttrForOptionAtIndex() {},
              rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() {},
              addClassForOptionAtIndex: function addClassForOptionAtIndex() {},
              rmClassForOptionAtIndex: function rmClassForOptionAtIndex() {}
            });
          }
        }]);
        function MDCMenuFoundation(adapter) {
          _classCallCheck(this, MDCMenuFoundation);
          var _this = _possibleConstructorReturn(this, (MDCMenuFoundation.__proto__ || Object.getPrototypeOf(MDCMenuFoundation)).call(this, _extends(MDCMenuFoundation.defaultAdapter, adapter)));
          _this.clickHandler_ = function(evt) {
            return _this.handlePossibleSelected_(evt);
          };
          _this.keydownHandler_ = function(evt) {
            return _this.handleKeyboardDown_(evt);
          };
          _this.keyupHandler_ = function(evt) {
            return _this.handleKeyboardUp_(evt);
          };
          _this.documentClickHandler_ = function(evt) {
            return _this.handleDocumentClick_(evt);
          };
          _this.isOpen_ = false;
          _this.openAnimationEndTimerId_ = 0;
          _this.closeAnimationEndTimerId_ = 0;
          _this.selectedTriggerTimerId_ = 0;
          _this.animationRequestId_ = 0;
          _this.dimensions_;
          _this.itemHeight_;
          _this.anchorCorner_ = __WEBPACK_IMPORTED_MODULE_2__constants__["a"].TOP_START;
          _this.anchorMargin_ = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
          _this.measures_ = null;
          _this.selectedIndex_ = -1;
          _this.rememberSelection_ = false;
          _this.quickOpen_ = false;
          _this.keyDownWithinMenu_ = false;
          return _this;
        }
        _createClass(MDCMenuFoundation, [{
          key: 'init',
          value: function init() {
            var _MDCMenuFoundation$cs = MDCMenuFoundation.cssClasses,
                ROOT = _MDCMenuFoundation$cs.ROOT,
                OPEN = _MDCMenuFoundation$cs.OPEN;
            if (!this.adapter_.hasClass(ROOT)) {
              throw new Error(ROOT + ' class required in root element.');
            }
            if (!this.adapter_.hasNecessaryDom()) {
              throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
            }
            if (this.adapter_.hasClass(OPEN)) {
              this.isOpen_ = true;
            }
            this.adapter_.registerInteractionHandler('click', this.clickHandler_);
            this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
            this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            clearTimeout(this.selectedTriggerTimerId_);
            clearTimeout(this.openAnimationEndTimerId_);
            clearTimeout(this.closeAnimationEndTimerId_);
            cancelAnimationFrame(this.animationRequestId_);
            this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
            this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
            this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
            this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
          }
        }, {
          key: 'setAnchorCorner',
          value: function setAnchorCorner(corner) {
            this.anchorCorner_ = corner;
          }
        }, {
          key: 'setAnchorMargin',
          value: function setAnchorMargin(margin) {
            this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
            this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
            this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
            this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
          }
        }, {
          key: 'setRememberSelection',
          value: function setRememberSelection(rememberSelection) {
            this.rememberSelection_ = rememberSelection;
            this.setSelectedIndex(-1);
          }
        }, {
          key: 'setQuickOpen',
          value: function setQuickOpen(quickOpen) {
            this.quickOpen_ = quickOpen;
          }
        }, {
          key: 'focusOnOpen_',
          value: function focusOnOpen_(focusIndex) {
            if (focusIndex === null) {
              if (this.rememberSelection_ && this.selectedIndex_ >= 0) {
                this.adapter_.focusItemAtIndex(this.selectedIndex_);
                return;
              }
              this.adapter_.focus();
              if (!this.adapter_.isFocused()) {
                this.adapter_.focusItemAtIndex(0);
              }
            } else {
              this.adapter_.focusItemAtIndex(focusIndex);
            }
          }
        }, {
          key: 'handleDocumentClick_',
          value: function handleDocumentClick_(evt) {
            var el = evt.target;
            while (el && el !== document.documentElement) {
              if (this.adapter_.getIndexForEventTarget(el) !== -1) {
                return;
              }
              el = el.parentNode;
            }
            this.adapter_.notifyCancel();
            this.close(evt);
          }
        }, {
          key: 'handleKeyboardDown_',
          value: function handleKeyboardDown_(evt) {
            if (evt.altKey || evt.ctrlKey || evt.metaKey) {
              return true;
            }
            var keyCode = evt.keyCode,
                key = evt.key,
                shiftKey = evt.shiftKey;
            var isTab = key === 'Tab' || keyCode === 9;
            var isArrowUp = key === 'ArrowUp' || keyCode === 38;
            var isArrowDown = key === 'ArrowDown' || keyCode === 40;
            var isSpace = key === 'Space' || keyCode === 32;
            var isEnter = key === 'Enter' || keyCode === 13;
            this.keyDownWithinMenu_ = isEnter || isSpace;
            var focusedItemIndex = this.adapter_.getFocusedItemIndex();
            var lastItemIndex = this.adapter_.getNumberOfItems() - 1;
            if (shiftKey && isTab && focusedItemIndex === 0) {
              this.adapter_.focusItemAtIndex(lastItemIndex);
              evt.preventDefault();
              return false;
            }
            if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
              this.adapter_.focusItemAtIndex(0);
              evt.preventDefault();
              return false;
            }
            if (isArrowUp || isArrowDown || isSpace) {
              evt.preventDefault();
            }
            if (isArrowUp) {
              if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
                this.adapter_.focusItemAtIndex(lastItemIndex);
              } else {
                this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
              }
            } else if (isArrowDown) {
              if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
                this.adapter_.focusItemAtIndex(0);
              } else {
                this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
              }
            }
            return true;
          }
        }, {
          key: 'handleKeyboardUp_',
          value: function handleKeyboardUp_(evt) {
            if (evt.altKey || evt.ctrlKey || evt.metaKey) {
              return true;
            }
            var keyCode = evt.keyCode,
                key = evt.key;
            var isEnter = key === 'Enter' || keyCode === 13;
            var isSpace = key === 'Space' || keyCode === 32;
            var isEscape = key === 'Escape' || keyCode === 27;
            if (isEnter || isSpace) {
              if (this.keyDownWithinMenu_) {
                this.handlePossibleSelected_(evt);
              }
              this.keyDownWithinMenu_ = false;
            }
            if (isEscape) {
              this.adapter_.notifyCancel();
              this.close();
            }
            return true;
          }
        }, {
          key: 'handlePossibleSelected_',
          value: function handlePossibleSelected_(evt) {
            var _this2 = this;
            if (this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["e"].ARIA_DISABLED_ATTR) === 'true') {
              return;
            }
            var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
            if (targetIndex < 0) {
              return;
            }
            if (this.selectedTriggerTimerId_) {
              return;
            }
            this.selectedTriggerTimerId_ = setTimeout(function() {
              _this2.selectedTriggerTimerId_ = 0;
              _this2.close();
              if (_this2.rememberSelection_) {
                _this2.setSelectedIndex(targetIndex);
              }
              _this2.adapter_.notifySelected({index: targetIndex});
            }, __WEBPACK_IMPORTED_MODULE_2__constants__["d"].SELECTED_TRIGGER_DELAY);
          }
        }, {
          key: 'getAutoLayoutMeasurements_',
          value: function getAutoLayoutMeasurements_() {
            var anchorRect = this.adapter_.getAnchorDimensions();
            var viewport = this.adapter_.getWindowDimensions();
            return {
              viewport: viewport,
              viewportDistance: {
                top: anchorRect.top,
                right: viewport.width - anchorRect.right,
                left: anchorRect.left,
                bottom: viewport.height - anchorRect.bottom
              },
              anchorHeight: anchorRect.height,
              anchorWidth: anchorRect.width,
              menuHeight: this.dimensions_.height,
              menuWidth: this.dimensions_.width
            };
          }
        }, {
          key: 'getOriginCorner_',
          value: function getOriginCorner_() {
            var corner = __WEBPACK_IMPORTED_MODULE_2__constants__["a"].TOP_LEFT;
            var _measures_ = this.measures_,
                viewportDistance = _measures_.viewportDistance,
                anchorHeight = _measures_.anchorHeight,
                anchorWidth = _measures_.anchorWidth,
                menuHeight = _measures_.menuHeight,
                menuWidth = _measures_.menuWidth;
            var isBottomAligned = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM);
            var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
            var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;
            var topOverflow = menuHeight - availableTop;
            var bottomOverflow = menuHeight - availableBottom;
            if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
              corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM;
            }
            var isRtl = this.adapter_.isRtl();
            var isFlipRtl = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].FLIP_RTL);
            var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].RIGHT);
            var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
            var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
            var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;
            var leftOverflow = menuWidth - availableLeft;
            var rightOverflow = menuWidth - availableRight;
            if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
              corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b"].RIGHT;
            }
            return corner;
          }
        }, {
          key: 'getHorizontalOriginOffset_',
          value: function getHorizontalOriginOffset_(corner) {
            var anchorWidth = this.measures_.anchorWidth;
            var isRightAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].RIGHT);
            var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].RIGHT);
            var x = 0;
            if (isRightAligned) {
              var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;
              x = rightOffset;
            } else {
              var leftOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
              x = leftOffset;
            }
            return x;
          }
        }, {
          key: 'getVerticalOriginOffset_',
          value: function getVerticalOriginOffset_(corner) {
            var _measures_2 = this.measures_,
                viewport = _measures_2.viewport,
                viewportDistance = _measures_2.viewportDistance,
                anchorHeight = _measures_2.anchorHeight,
                menuHeight = _measures_2.menuHeight;
            var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM);
            var MARGIN_TO_EDGE = MDCMenuFoundation.numbers.MARGIN_TO_EDGE;
            var avoidVerticalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM);
            var canOverlapVertically = !avoidVerticalOverlap;
            var y = 0;
            if (isBottomAligned) {
              y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
              if (canOverlapVertically && menuHeight > viewportDistance.top + anchorHeight) {
                y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.top + anchorHeight));
              }
            } else {
              y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
              if (canOverlapVertically && menuHeight > viewportDistance.bottom + anchorHeight) {
                y = -(Math.min(menuHeight, viewport.height - MARGIN_TO_EDGE) - (viewportDistance.bottom + anchorHeight));
              }
            }
            return y;
          }
        }, {
          key: 'getMenuMaxHeight_',
          value: function getMenuMaxHeight_(corner) {
            var maxHeight = 0;
            var viewportDistance = this.measures_.viewportDistance;
            var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM);
            if (this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM) {
              if (isBottomAligned) {
                maxHeight = viewportDistance.top + this.anchorMargin_.top;
              } else {
                maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom;
              }
            }
            return maxHeight;
          }
        }, {
          key: 'autoPosition_',
          value: function autoPosition_() {
            var _position;
            if (!this.adapter_.hasAnchor()) {
              return;
            }
            this.measures_ = this.getAutoLayoutMeasurements_();
            var corner = this.getOriginCorner_();
            var maxMenuHeight = this.getMenuMaxHeight_(corner);
            var verticalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM ? 'bottom' : 'top';
            var horizontalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].RIGHT ? 'right' : 'left';
            var horizontalOffset = this.getHorizontalOriginOffset_(corner);
            var verticalOffset = this.getVerticalOriginOffset_(corner);
            var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset + 'px' : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset + 'px' : '0'), _position);
            var _measures_3 = this.measures_,
                anchorWidth = _measures_3.anchorWidth,
                menuHeight = _measures_3.menuHeight,
                menuWidth = _measures_3.menuWidth;
            if (anchorWidth / menuWidth > __WEBPACK_IMPORTED_MODULE_2__constants__["d"].ANCHOR_TO_MENU_WIDTH_RATIO) {
              horizontalAlignment = 'center';
            }
            if (!(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM) && Math.abs(verticalOffset / menuHeight) > __WEBPACK_IMPORTED_MODULE_2__constants__["d"].OFFSET_TO_MENU_HEIGHT_RATIO) {
              var verticalOffsetPercent = Math.abs(verticalOffset / menuHeight) * 100;
              var originPercent = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b"].BOTTOM ? 100 - verticalOffsetPercent : verticalOffsetPercent;
              verticalAlignment = Math.round(originPercent * 100) / 100 + '%';
            }
            this.adapter_.setTransformOrigin(horizontalAlignment + ' ' + verticalAlignment);
            this.adapter_.setPosition(position);
            this.adapter_.setMaxHeight(maxMenuHeight ? maxMenuHeight + 'px' : '');
            this.measures_ = null;
          }
        }, {
          key: 'open',
          value: function open() {
            var _this3 = this;
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$focusIndex = _ref.focusIndex,
                focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;
            this.adapter_.saveFocus();
            if (!this.quickOpen_) {
              this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
            }
            this.animationRequestId_ = requestAnimationFrame(function() {
              _this3.dimensions_ = _this3.adapter_.getInnerDimensions();
              _this3.autoPosition_();
              _this3.adapter_.addClass(MDCMenuFoundation.cssClasses.OPEN);
              _this3.focusOnOpen_(focusIndex);
              _this3.adapter_.registerBodyClickHandler(_this3.documentClickHandler_);
              if (!_this3.quickOpen_) {
                _this3.openAnimationEndTimerId_ = setTimeout(function() {
                  _this3.openAnimationEndTimerId_ = 0;
                  _this3.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_OPEN);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d"].TRANSITION_OPEN_DURATION);
              }
            });
            this.isOpen_ = true;
          }
        }, {
          key: 'close',
          value: function close() {
            var _this4 = this;
            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var targetIsDisabled = evt ? this.adapter_.getAttributeForEventTarget(evt.target, __WEBPACK_IMPORTED_MODULE_2__constants__["e"].ARIA_DISABLED_ATTR) === 'true' : false;
            if (targetIsDisabled) {
              return;
            }
            this.adapter_.deregisterBodyClickHandler(this.documentClickHandler_);
            if (!this.quickOpen_) {
              this.adapter_.addClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
            }
            requestAnimationFrame(function() {
              _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.OPEN);
              if (!_this4.quickOpen_) {
                _this4.closeAnimationEndTimerId_ = setTimeout(function() {
                  _this4.closeAnimationEndTimerId_ = 0;
                  _this4.adapter_.removeClass(MDCMenuFoundation.cssClasses.ANIMATING_CLOSED);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d"].TRANSITION_CLOSE_DURATION);
              }
            });
            this.isOpen_ = false;
            this.adapter_.restoreFocus();
          }
        }, {
          key: 'isOpen',
          value: function isOpen() {
            return this.isOpen_;
          }
        }, {
          key: 'getSelectedIndex',
          value: function getSelectedIndex() {
            return this.selectedIndex_;
          }
        }, {
          key: 'setSelectedIndex',
          value: function setSelectedIndex(index) {
            if (index === this.selectedIndex_) {
              return;
            }
            var prevSelectedIndex = this.selectedIndex_;
            if (prevSelectedIndex >= 0) {
              this.adapter_.rmAttrForOptionAtIndex(prevSelectedIndex, 'aria-selected');
              this.adapter_.rmClassForOptionAtIndex(prevSelectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["c"].SELECTED_LIST_ITEM);
            }
            this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfItems() ? index : -1;
            if (this.selectedIndex_ >= 0) {
              this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
              this.adapter_.addClassForOptionAtIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["c"].SELECTED_LIST_ITEM);
            }
          }
        }]);
        return MDCMenuFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
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
      var MDCMenuAdapter = function() {
        function MDCMenuAdapter() {
          _classCallCheck(this, MDCMenuAdapter);
        }
        _createClass(MDCMenuAdapter, [{
          key: "addClass",
          value: function addClass(className) {}
        }, {
          key: "removeClass",
          value: function removeClass(className) {}
        }, {
          key: "hasClass",
          value: function hasClass(className) {}
        }, {
          key: "hasNecessaryDom",
          value: function hasNecessaryDom() {}
        }, {
          key: "getAttributeForEventTarget",
          value: function getAttributeForEventTarget(target, attributeName) {}
        }, {
          key: "getInnerDimensions",
          value: function getInnerDimensions() {}
        }, {
          key: "hasAnchor",
          value: function hasAnchor() {}
        }, {
          key: "getAnchorDimensions",
          value: function getAnchorDimensions() {}
        }, {
          key: "getWindowDimensions",
          value: function getWindowDimensions() {}
        }, {
          key: "getNumberOfItems",
          value: function getNumberOfItems() {}
        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(type, handler) {}
        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(type, handler) {}
        }, {
          key: "registerBodyClickHandler",
          value: function registerBodyClickHandler(handler) {}
        }, {
          key: "deregisterBodyClickHandler",
          value: function deregisterBodyClickHandler(handler) {}
        }, {
          key: "getIndexForEventTarget",
          value: function getIndexForEventTarget(target) {}
        }, {
          key: "notifySelected",
          value: function notifySelected(evtData) {}
        }, {
          key: "notifyCancel",
          value: function notifyCancel() {}
        }, {
          key: "saveFocus",
          value: function saveFocus() {}
        }, {
          key: "restoreFocus",
          value: function restoreFocus() {}
        }, {
          key: "isFocused",
          value: function isFocused() {}
        }, {
          key: "focus",
          value: function focus() {}
        }, {
          key: "getFocusedItemIndex",
          value: function getFocusedItemIndex() {}
        }, {
          key: "focusItemAtIndex",
          value: function focusItemAtIndex(index) {}
        }, {
          key: "isRtl",
          value: function isRtl() {}
        }, {
          key: "setTransformOrigin",
          value: function setTransformOrigin(origin) {}
        }, {
          key: "setPosition",
          value: function setPosition(position) {}
        }, {
          key: "setMaxHeight",
          value: function setMaxHeight(height) {}
        }, {
          key: "setAttrForOptionAtIndex",
          value: function setAttrForOptionAtIndex(index, attr, value) {}
        }, {
          key: "rmAttrForOptionAtIndex",
          value: function rmAttrForOptionAtIndex(index, attr) {}
        }, {
          key: "addClassForOptionAtIndex",
          value: function addClassForOptionAtIndex(index, className) {}
        }, {
          key: "rmClassForOptionAtIndex",
          value: function rmClassForOptionAtIndex(index, className) {}
        }]);
        return MDCMenuAdapter;
      }();
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCRadio", function() {
        return MDCRadio;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(4);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(83);
      var __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__ = __webpack_require__(3);
      __webpack_require__.d(__webpack_exports__, "MDCRadioFoundation", function() {
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
      var MDCRadio = function(_MDCComponent) {
        _inherits(MDCRadio, _MDCComponent);
        _createClass(MDCRadio, [{
          key: 'checked',
          get: function get() {
            return this.foundation_.isChecked();
          },
          set: function set(checked) {
            this.foundation_.setChecked(checked);
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
          key: 'value',
          get: function get() {
            return this.foundation_.getValue();
          },
          set: function set(value) {
            this.foundation_.setValue(value);
          }
        }, {
          key: 'ripple',
          get: function get() {
            return this.ripple_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCRadio(root);
          }
        }]);
        function MDCRadio() {
          var _ref;
          _classCallCheck(this, MDCRadio);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));
          _this.ripple_ = _this.initRipple_();
          return _this;
        }
        _createClass(MDCRadio, [{
          key: 'initRipple_',
          value: function initRipple_() {
            var _this2 = this;
            var adapter = _extends(__WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["MDCRipple"].createAdapter(this), {
              isUnbounded: function isUnbounded() {
                return true;
              },
              isSurfaceActive: function isSurfaceActive() {
                return false;
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.nativeControl_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.nativeControl_.removeEventListener(type, handler);
              },
              computeBoundingRect: function computeBoundingRect() {
                var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
                    left = _root_$getBoundingCli.left,
                    top = _root_$getBoundingCli.top;
                var DIM = 40;
                return {
                  top: top,
                  left: left,
                  right: left + DIM,
                  bottom: top + DIM,
                  width: DIM,
                  height: DIM
                };
              }
            });
            var foundation = new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["MDCRippleFoundation"](adapter);
            return new __WEBPACK_IMPORTED_MODULE_3__material_ripple_index__["MDCRipple"](this.root_, foundation);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.ripple_.destroy();
            _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a"]({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              getNativeControl: function getNativeControl() {
                return _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.NATIVE_CONTROL_SELECTOR);
              }
            });
          }
        }, {
          key: 'nativeControl_',
          get: function get() {
            var NATIVE_CONTROL_SELECTOR = __WEBPACK_IMPORTED_MODULE_2__foundation__["a"].strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
            return el;
          }
        }]);
        return MDCRadio;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__material_selection_control_index__ = __webpack_require__(4);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(84);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(85);
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
      var MDCRadioFoundation = function(_MDCFoundation) {
        _inherits(MDCRadioFoundation, _MDCFoundation);
        function MDCRadioFoundation() {
          _classCallCheck(this, MDCRadioFoundation);
          return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
        }
        _createClass(MDCRadioFoundation, [{
          key: 'isChecked',
          value: function isChecked() {
            return this.getNativeControl_().checked;
          }
        }, {
          key: 'setChecked',
          value: function setChecked(checked) {
            this.getNativeControl_().checked = checked;
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.getNativeControl_().disabled;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
            this.getNativeControl_().disabled = disabled;
            if (disabled) {
              this.adapter_.addClass(DISABLED);
            } else {
              this.adapter_.removeClass(DISABLED);
            }
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.getNativeControl_().value;
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.getNativeControl_().value = value;
          }
        }, {
          key: 'getNativeControl_',
          value: function getNativeControl_() {
            return this.adapter_.getNativeControl() || {
              checked: false,
              disabled: false,
              value: null
            };
          }
        }], [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_3__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              getNativeControl: function getNativeControl() {}
            });
          }
        }]);
        return MDCRadioFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCRadioFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_selection_control_index__ = __webpack_require__(4);
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
      var MDCRadioAdapter = function() {
        function MDCRadioAdapter() {
          _classCallCheck(this, MDCRadioAdapter);
        }
        _createClass(MDCRadioAdapter, [{
          key: 'addClass',
          value: function addClass(className) {}
        }, {
          key: 'removeClass',
          value: function removeClass(className) {}
        }, {
          key: 'getNativeControl',
          value: function getNativeControl() {}
        }]);
        return MDCRadioAdapter;
      }();
      var _unused_webpack_default_export = (MDCRadioAdapter);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      var strings = {NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'};
      var cssClasses = {
        ROOT: 'mdc-radio',
        DISABLED: 'mdc-radio--disabled'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCSelect", function() {
        return MDCSelect;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__material_menu_index__ = __webpack_require__(10);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(87);
      var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(23);
      __webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
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
      var MDCSelect = function(_MDCComponent) {
        _inherits(MDCSelect, _MDCComponent);
        function MDCSelect() {
          _classCallCheck(this, MDCSelect);
          return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
        }
        _createClass(MDCSelect, [{
          key: 'item',
          value: function item(index) {
            return this.options[index] || null;
          }
        }, {
          key: 'nameditem',
          value: function nameditem(key) {
            for (var i = 0,
                options = this.options,
                option; option = options[i]; i++) {
              if (option.id === key || option.getAttribute('name') === key) {
                return option;
              }
            }
            return null;
          }
        }, {
          key: 'initialize',
          value: function initialize() {
            var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_2__material_menu_index__["MDCMenu"](el);
            };
            this.surface_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].SURFACE_SELECTOR);
            this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].LABEL_SELECTOR);
            this.bottomLine_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].BOTTOM_LINE_SELECTOR);
            this.selectedText_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].SELECTED_TEXT_SELECTOR);
            this.menuEl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].MENU_SELECTOR);
            this.menu_ = menuFactory(this.menuEl_);
            this.ripple = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](this.surface_);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              addClassToLabel: function addClassToLabel(className) {
                return _this2.label_.classList.add(className);
              },
              removeClassFromLabel: function removeClassFromLabel(className) {
                return _this2.label_.classList.remove(className);
              },
              addClassToBottomLine: function addClassToBottomLine(className) {
                return _this2.bottomLine_.classList.add(className);
              },
              removeClassFromBottomLine: function removeClassFromBottomLine(className) {
                return _this2.bottomLine_.classList.remove(className);
              },
              setBottomLineAttr: function setBottomLineAttr(attr, value) {
                return _this2.bottomLine_.setAttribute(attr, value);
              },
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              rmAttr: function rmAttr(attr, value) {
                return _this2.root_.removeAttribute(attr, value);
              },
              computeBoundingRect: function computeBoundingRect() {
                return _this2.surface_.getBoundingClientRect();
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return _this2.surface_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.surface_.removeEventListener(type, handler);
              },
              focus: function focus() {
                return _this2.surface_.focus();
              },
              makeTabbable: function makeTabbable() {
                _this2.surface_.tabIndex = 0;
              },
              makeUntabbable: function makeUntabbable() {
                _this2.surface_.tabIndex = -1;
              },
              getComputedStyleValue: function getComputedStyleValue(prop) {
                return window.getComputedStyle(_this2.surface_).getPropertyValue(prop);
              },
              setStyle: function setStyle(propertyName, value) {
                return _this2.surface_.style.setProperty(propertyName, value);
              },
              create2dRenderingContext: function create2dRenderingContext() {
                return document.createElement('canvas').getContext('2d');
              },
              setMenuElStyle: function setMenuElStyle(propertyName, value) {
                return _this2.menuEl_.style.setProperty(propertyName, value);
              },
              setMenuElAttr: function setMenuElAttr(attr, value) {
                return _this2.menuEl_.setAttribute(attr, value);
              },
              rmMenuElAttr: function rmMenuElAttr(attr) {
                return _this2.menuEl_.removeAttribute(attr);
              },
              getMenuElOffsetHeight: function getMenuElOffsetHeight() {
                return _this2.menuEl_.offsetHeight;
              },
              openMenu: function openMenu(focusIndex) {
                return _this2.menu_.show({focusIndex: focusIndex});
              },
              isMenuOpen: function isMenuOpen() {
                return _this2.menu_.open;
              },
              setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
                _this2.selectedText_.textContent = selectedTextContent;
              },
              getNumberOfOptions: function getNumberOfOptions() {
                return _this2.options.length;
              },
              getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
                return _this2.options[index].textContent;
              },
              getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
                return _this2.options[index].id || _this2.options[index].textContent;
              },
              setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
                return _this2.options[index].setAttribute(attr, value);
              },
              rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
                return _this2.options[index].removeAttribute(attr);
              },
              getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
                return _this2.options[index].offsetTop;
              },
              registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
                return _this2.menu_.listen(type, handler);
              },
              deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
                return _this2.menu_.unlisten(type, handler);
              },
              notifyChange: function notifyChange() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.CHANGE_EVENT, _this2);
              },
              getWindowInnerHeight: function getWindowInnerHeight() {
                return window.innerHeight;
              },
              addBodyClass: function addBodyClass(className) {
                return document.body.classList.add(className);
              },
              removeBodyClass: function removeBodyClass(className) {
                return document.body.classList.remove(className);
              }
            });
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var selectedOption = this.selectedOptions[0];
            var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
            if (idx >= 0) {
              this.selectedIndex = idx;
            }
            if (this.root_.getAttribute('aria-disabled') === 'true') {
              this.disabled = true;
            }
          }
        }, {
          key: 'value',
          get: function get() {
            return this.foundation_.getValue();
          }
        }, {
          key: 'options',
          get: function get() {
            return this.menu_.items;
          }
        }, {
          key: 'selectedOptions',
          get: function get() {
            return this.root_.querySelectorAll('[aria-selected]');
          }
        }, {
          key: 'selectedIndex',
          get: function get() {
            return this.foundation_.getSelectedIndex();
          },
          set: function set(selectedIndex) {
            this.foundation_.setSelectedIndex(selectedIndex);
          }
        }, {
          key: 'disabled',
          get: function get() {
            return this.foundation_.isDisabled();
          },
          set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCSelect(root);
          }
        }]);
        return MDCSelect;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(23);
      var __WEBPACK_IMPORTED_MODULE_2__material_menu_index__ = __webpack_require__(10);
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
      var OPENER_KEYS = [{
        key: 'ArrowUp',
        keyCode: 38,
        forType: 'keydown'
      }, {
        key: 'ArrowDown',
        keyCode: 40,
        forType: 'keydown'
      }, {
        key: 'Space',
        keyCode: 32,
        forType: 'keyup'
      }];
      var MDCSelectFoundation = function(_MDCFoundation) {
        _inherits(MDCSelectFoundation, _MDCFoundation);
        _createClass(MDCSelectFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              addClassToLabel: function addClassToLabel() {},
              removeClassFromLabel: function removeClassFromLabel() {},
              addClassToBottomLine: function addClassToBottomLine() {},
              removeClassFromBottomLine: function removeClassFromBottomLine() {},
              setBottomLineAttr: function setBottomLineAttr() {},
              addBodyClass: function addBodyClass() {},
              removeBodyClass: function removeBodyClass() {},
              setAttr: function setAttr() {},
              rmAttr: function rmAttr() {},
              computeBoundingRect: function computeBoundingRect() {
                return ({
                  left: 0,
                  top: 0
                });
              },
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              focus: function focus() {},
              makeTabbable: function makeTabbable() {},
              makeUntabbable: function makeUntabbable() {},
              getComputedStyleValue: function getComputedStyleValue() {
                return ('');
              },
              setStyle: function setStyle() {},
              create2dRenderingContext: function create2dRenderingContext() {
                return ({
                  font: '',
                  measureText: function measureText() {
                    return {width: 0};
                  }
                });
              },
              setMenuElStyle: function setMenuElStyle() {},
              setMenuElAttr: function setMenuElAttr() {},
              rmMenuElAttr: function rmMenuElAttr() {},
              getMenuElOffsetHeight: function getMenuElOffsetHeight() {
                return (0);
              },
              openMenu: function openMenu() {},
              isMenuOpen: function isMenuOpen() {
                return (false);
              },
              setSelectedTextContent: function setSelectedTextContent() {},
              getNumberOfOptions: function getNumberOfOptions() {
                return (0);
              },
              getTextForOptionAtIndex: function getTextForOptionAtIndex() {
                return ('');
              },
              getValueForOptionAtIndex: function getValueForOptionAtIndex() {
                return ('');
              },
              setAttrForOptionAtIndex: function setAttrForOptionAtIndex() {},
              rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() {},
              getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
                return (0);
              },
              registerMenuInteractionHandler: function registerMenuInteractionHandler() {},
              deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() {},
              notifyChange: function notifyChange() {},
              getWindowInnerHeight: function getWindowInnerHeight() {
                return (0);
              }
            };
          }
        }]);
        function MDCSelectFoundation(adapter) {
          _classCallCheck(this, MDCSelectFoundation);
          var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));
          _this.ctx_ = null;
          _this.selectedIndex_ = -1;
          _this.disabled_ = false;
          _this.isFocused_ = false;
          _this.animationRequestId_ = 0;
          _this.displayHandler_ = function(evt) {
            evt.preventDefault();
            if (!_this.adapter_.isMenuOpen()) {
              _this.open_();
            }
          };
          _this.displayViaKeyboardHandler_ = function(evt) {
            return _this.handleDisplayViaKeyboard_(evt);
          };
          _this.selectionHandler_ = function(_ref) {
            var detail = _ref.detail;
            var index = detail.index;
            if (index !== _this.selectedIndex_) {
              _this.setSelectedIndex(index);
              _this.adapter_.notifyChange();
            }
            _this.close_();
          };
          _this.cancelHandler_ = function() {
            _this.close_();
            if (_this.selectedIndex_ === -1) {
              _this.adapter_.removeClassFromLabel(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].LABEL_FLOAT_ABOVE);
            }
          };
          return _this;
        }
        _createClass(MDCSelectFoundation, [{
          key: 'init',
          value: function init() {
            this.ctx_ = this.adapter_.create2dRenderingContext();
            this.adapter_.registerInteractionHandler('click', this.displayHandler_);
            this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
            this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
            this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu_index__["MDCMenuFoundation"].strings.SELECTED_EVENT, this.selectionHandler_);
            this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu_index__["MDCMenuFoundation"].strings.CANCEL_EVENT, this.cancelHandler_);
            this.resize();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.ctx_ = null;
            cancelAnimationFrame(this.animationRequestId_);
            this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
            this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
            this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
            this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu_index__["MDCMenuFoundation"].strings.SELECTED_EVENT, this.selectionHandler_);
            this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu_index__["MDCMenuFoundation"].strings.CANCEL_EVENT, this.cancelHandler_);
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
          }
        }, {
          key: 'getSelectedIndex',
          value: function getSelectedIndex() {
            return this.selectedIndex_;
          }
        }, {
          key: 'setSelectedIndex',
          value: function setSelectedIndex(index) {
            var prevSelectedIndex = this.selectedIndex_;
            if (prevSelectedIndex >= 0) {
              this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
            }
            this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
            var selectedTextContent = '';
            if (this.selectedIndex_ >= 0) {
              selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
              this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
            }
            this.adapter_.setSelectedTextContent(selectedTextContent);
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.disabled_;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;
            this.disabled_ = disabled;
            if (this.disabled_) {
              this.adapter_.addClass(DISABLED);
              this.adapter_.setAttr('aria-disabled', 'true');
              this.adapter_.makeUntabbable();
            } else {
              this.adapter_.removeClass(DISABLED);
              this.adapter_.rmAttr('aria-disabled');
              this.adapter_.makeTabbable();
            }
          }
        }, {
          key: 'resize',
          value: function resize() {
            var font = this.adapter_.getComputedStyleValue('font');
            var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
            if (font) {
              this.ctx_.font = font;
            } else {
              var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
              var fontSize = this.adapter_.getComputedStyleValue('font-size');
              this.ctx_.font = fontSize + ' ' + primaryFontFamily;
            }
            var maxTextLength = 0;
            for (var i = 0,
                l = this.adapter_.getNumberOfOptions(); i < l; i++) {
              var surfacePaddingRight = parseInt(this.adapter_.getComputedStyleValue('padding-right'), 10);
              var surfacePaddingLeft = parseInt(this.adapter_.getComputedStyleValue('padding-left'), 10);
              var selectBoxAddedPadding = surfacePaddingRight + surfacePaddingLeft;
              var txt = this.adapter_.getTextForOptionAtIndex(i).trim();
              var _ctx_$measureText = this.ctx_.measureText(txt),
                  width = _ctx_$measureText.width;
              var addedSpace = letterSpacing * txt.length;
              maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace + selectBoxAddedPadding));
            }
            this.adapter_.setStyle('width', maxTextLength + 'px');
          }
        }, {
          key: 'open_',
          value: function open_() {
            var _this2 = this;
            this.disableScroll_();
            var OPEN = MDCSelectFoundation.cssClasses.OPEN;
            var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;
            this.setMenuStylesForOpenAtIndex_(focusIndex);
            this.adapter_.addClassToLabel(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].LABEL_FLOAT_ABOVE);
            this.adapter_.addClassToBottomLine(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].BOTTOM_LINE_ACTIVE);
            this.adapter_.addClass(OPEN);
            this.animationRequestId_ = requestAnimationFrame(function() {
              _this2.adapter_.openMenu(focusIndex);
              _this2.isFocused_ = true;
            });
          }
        }, {
          key: 'setMenuStylesForOpenAtIndex_',
          value: function setMenuStylesForOpenAtIndex_(index) {
            var innerHeight = this.adapter_.getWindowInnerHeight();
            var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
                left = _adapter_$computeBoun.left,
                top = _adapter_$computeBoun.top;
            this.adapter_.setMenuElAttr('aria-hidden', 'true');
            this.adapter_.setMenuElStyle('display', 'block');
            var menuHeight = this.adapter_.getMenuElOffsetHeight();
            var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
            this.adapter_.setMenuElStyle('display', '');
            this.adapter_.rmMenuElAttr('aria-hidden');
            var adjustedTop = top - itemOffsetTop;
            var overflowsTop = adjustedTop < 0;
            var overflowsBottom = adjustedTop + menuHeight > innerHeight;
            if (overflowsTop) {
              adjustedTop = 0;
            } else if (overflowsBottom) {
              adjustedTop = Math.max(0, innerHeight - menuHeight);
            }
            ;
            this.adapter_.setMenuElStyle('left', left + 'px');
            this.adapter_.setMenuElStyle('top', adjustedTop + 'px');
            this.adapter_.setMenuElStyle('transform-origin', 'center ' + itemOffsetTop + 'px');
          }
        }, {
          key: 'close_',
          value: function close_() {
            var OPEN = MDCSelectFoundation.cssClasses.OPEN;
            this.adapter_.removeClass(OPEN);
            this.adapter_.removeClassFromBottomLine(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].BOTTOM_LINE_ACTIVE);
            this.adapter_.focus();
            this.enableScroll_();
          }
        }, {
          key: 'handleDisplayViaKeyboard_',
          value: function handleDisplayViaKeyboard_(evt) {
            var EVENT_PHASE_AT_TARGET = 2;
            if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
              return;
            }
            var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
            if (isSpaceDown) {
              evt.preventDefault();
            }
            var isOpenerKey = OPENER_KEYS.some(function(_ref2) {
              var key = _ref2.key,
                  keyCode = _ref2.keyCode,
                  forType = _ref2.forType;
              return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
            });
            if (isOpenerKey) {
              this.displayHandler_(evt);
            }
          }
        }, {
          key: 'disableScroll_',
          value: function disableScroll_() {
            this.adapter_.addBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }, {
          key: 'enableScroll_',
          value: function enableScroll_() {
            this.adapter_.removeBodyClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].SCROLL_LOCK);
          }
        }]);
        return MDCSelectFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
      __webpack_exports__["a"] = (MDCSelectFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCSlider", function() {
        return MDCSlider;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(24);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(25);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(89);
      __webpack_require__.d(__webpack_exports__, "MDCSliderFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
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
      var MDCSlider = function(_MDCComponent) {
        _inherits(MDCSlider, _MDCComponent);
        _createClass(MDCSlider, null, [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCSlider(root);
          }
        }]);
        function MDCSlider() {
          var _ref;
          _classCallCheck(this, MDCSlider);
          for (var _len = arguments.length,
              args = Array(_len),
              _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = MDCSlider.__proto__ || Object.getPrototypeOf(MDCSlider)).call.apply(_ref, [this].concat(args)));
          _this.thumbContainer_;
          _this.track_;
          _this.pinValueMarker_;
          _this.trackMarkerContainer_;
          return _this;
        }
        _createClass(MDCSlider, [{
          key: 'initialize',
          value: function initialize() {
            this.thumbContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].THUMB_CONTAINER_SELECTOR);
            this.track_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].TRACK_SELECTOR);
            this.pinValueMarker_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].PIN_VALUE_MARKER_SELECTOR);
            this.trackMarkerContainer_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].TRACK_MARKER_CONTAINER_SELECTOR);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              getAttribute: function getAttribute(name) {
                return _this2.root_.getAttribute(name);
              },
              setAttribute: function setAttribute(name, value) {
                return _this2.root_.setAttribute(name, value);
              },
              removeAttribute: function removeAttribute(name) {
                return _this2.root_.removeAttribute(name);
              },
              computeBoundingRect: function computeBoundingRect() {
                return _this2.root_.getBoundingClientRect();
              },
              getTabIndex: function getTabIndex() {
                return _this2.root_.tabIndex;
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                _this2.root_.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                _this2.root_.removeEventListener(type, handler);
              },
              registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
                _this2.thumbContainer_.addEventListener(type, handler);
              },
              deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
                _this2.thumbContainer_.removeEventListener(type, handler);
              },
              registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
                document.body.addEventListener(type, handler);
              },
              deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
                document.body.removeEventListener(type, handler);
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                window.removeEventListener('resize', handler);
              },
              notifyInput: function notifyInput() {
                _this2.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].INPUT_EVENT, _this2);
              },
              notifyChange: function notifyChange() {
                _this2.emit(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].CHANGE_EVENT, _this2);
              },
              setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
                _this2.thumbContainer_.style.setProperty(propertyName, value);
              },
              setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
                _this2.track_.style.setProperty(propertyName, value);
              },
              setMarkerValue: function setMarkerValue(value) {
                _this2.pinValueMarker_.innerText = value;
              },
              appendTrackMarkers: function appendTrackMarkers(numMarkers) {
                var frag = document.createDocumentFragment();
                for (var i = 0; i < numMarkers; i++) {
                  var marker = document.createElement('div');
                  marker.classList.add('mdc-slider__track-marker');
                  frag.appendChild(marker);
                }
                _this2.trackMarkerContainer_.appendChild(frag);
              },
              removeTrackMarkers: function removeTrackMarkers() {
                while (_this2.trackMarkerContainer_.firstChild) {
                  _this2.trackMarkerContainer_.removeChild(_this2.trackMarkerContainer_.firstChild);
                }
              },
              setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty(propertyName, value) {
                var lastTrackMarker = _this2.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].LAST_TRACK_MARKER_SELECTOR);
                lastTrackMarker.style.setProperty(propertyName, value);
              },
              isRTL: function isRTL() {
                return getComputedStyle(_this2.root_).direction === 'rtl';
              }
            });
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var origValueNow = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].ARIA_VALUENOW));
            this.min = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].ARIA_VALUEMIN)) || this.min;
            this.max = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].ARIA_VALUEMAX)) || this.max;
            this.step = parseFloat(this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].STEP_DATA_ATTR)) || this.step;
            this.value = origValueNow || this.value;
            this.disabled = this.root_.hasAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].ARIA_DISABLED) && this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_1__constants__["c"].ARIA_DISABLED) !== 'false';
            this.foundation_.setupTrackMarker();
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }
        }, {
          key: 'stepUp',
          value: function stepUp() {
            var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;
            this.value += amount;
          }
        }, {
          key: 'stepDown',
          value: function stepDown() {
            var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.step || 1;
            this.value -= amount;
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
          key: 'min',
          get: function get() {
            return this.foundation_.getMin();
          },
          set: function set(min) {
            this.foundation_.setMin(min);
          }
        }, {
          key: 'max',
          get: function get() {
            return this.foundation_.getMax();
          },
          set: function set(max) {
            this.foundation_.setMax(max);
          }
        }, {
          key: 'step',
          get: function get() {
            return this.foundation_.getStep();
          },
          set: function set(step) {
            this.foundation_.setStep(step);
          }
        }, {
          key: 'disabled',
          get: function get() {
            return this.foundation_.isDisabled();
          },
          set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
          }
        }]);
        return MDCSlider;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(24);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(25);
      var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_3__material_base_foundation__ = __webpack_require__(0);
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
      var KEY_IDS = {
        ARROW_LEFT: 'ArrowLeft',
        ARROW_RIGHT: 'ArrowRight',
        ARROW_UP: 'ArrowUp',
        ARROW_DOWN: 'ArrowDown',
        HOME: 'Home',
        END: 'End',
        PAGE_UP: 'PageUp',
        PAGE_DOWN: 'PageDown'
      };
      var MOVE_EVENT_MAP = {
        'mousedown': 'mousemove',
        'touchstart': 'touchmove',
        'pointerdown': 'pointermove'
      };
      var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
      var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
      var MDCSliderFoundation = function(_MDCFoundation) {
        _inherits(MDCSliderFoundation, _MDCFoundation);
        _createClass(MDCSliderFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_0__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_0__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_0__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return ({
              hasClass: function hasClass() {
                return (false);
              },
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              getAttribute: function getAttribute() {
                return (null);
              },
              setAttribute: function setAttribute() {},
              removeAttribute: function removeAttribute() {},
              computeBoundingRect: function computeBoundingRect() {
                return ({
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0
                });
              },
              getTabIndex: function getTabIndex() {
                return (0);
              },
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() {},
              deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() {},
              registerBodyInteractionHandler: function registerBodyInteractionHandler() {},
              deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() {},
              registerResizeHandler: function registerResizeHandler() {},
              deregisterResizeHandler: function deregisterResizeHandler() {},
              notifyInput: function notifyInput() {},
              notifyChange: function notifyChange() {},
              setThumbContainerStyleProperty: function setThumbContainerStyleProperty() {},
              setTrackStyleProperty: function setTrackStyleProperty() {},
              setMarkerValue: function setMarkerValue() {},
              appendTrackMarkers: function appendTrackMarkers() {},
              removeTrackMarkers: function removeTrackMarkers() {},
              setLastTrackMarkersStyleProperty: function setLastTrackMarkersStyleProperty() {},
              isRTL: function isRTL() {
                return (false);
              }
            });
          }
        }]);
        function MDCSliderFoundation(adapter) {
          _classCallCheck(this, MDCSliderFoundation);
          var _this = _possibleConstructorReturn(this, (MDCSliderFoundation.__proto__ || Object.getPrototypeOf(MDCSliderFoundation)).call(this, _extends(MDCSliderFoundation.defaultAdapter, adapter)));
          _this.rect_ = null;
          _this.savedTabIndex_ = NaN;
          _this.active_ = false;
          _this.inTransit_ = false;
          _this.isDiscrete_ = false;
          _this.hasTrackMarker_ = false;
          _this.handlingThumbTargetEvt_ = false;
          _this.min_ = 0;
          _this.max_ = 100;
          _this.step_ = 0;
          _this.value_ = 0;
          _this.disabled_ = false;
          _this.preventFocusState_ = false;
          _this.updateUIFrame_ = 0;
          _this.thumbContainerPointerHandler_ = function() {
            _this.handlingThumbTargetEvt_ = true;
          };
          _this.interactionStartHandler_ = function(evt) {
            return _this.handleDown_(evt);
          };
          _this.keydownHandler_ = function(evt) {
            return _this.handleKeydown_(evt);
          };
          _this.focusHandler_ = function() {
            return _this.handleFocus_();
          };
          _this.blurHandler_ = function() {
            return _this.handleBlur_();
          };
          _this.resizeHandler_ = function() {
            return _this.layout();
          };
          return _this;
        }
        _createClass(MDCSliderFoundation, [{
          key: 'init',
          value: function init() {
            var _this2 = this;
            this.isDiscrete_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].IS_DISCRETE);
            this.hasTrackMarker_ = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].HAS_TRACK_MARKER);
            DOWN_EVENTS.forEach(function(evtName) {
              return _this2.adapter_.registerInteractionHandler(evtName, _this2.interactionStartHandler_);
            });
            this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            DOWN_EVENTS.forEach(function(evtName) {
              _this2.adapter_.registerThumbContainerInteractionHandler(evtName, _this2.thumbContainerPointerHandler_);
            });
            this.adapter_.registerResizeHandler(this.resizeHandler_);
            this.layout();
            if (this.isDiscrete_ && this.getStep() == 0) {
              this.step_ = 1;
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            DOWN_EVENTS.forEach(function(evtName) {
              _this3.adapter_.deregisterInteractionHandler(evtName, _this3.interactionStartHandler_);
            });
            this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
            DOWN_EVENTS.forEach(function(evtName) {
              _this3.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this3.thumbContainerPointerHandler_);
            });
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'setupTrackMarker',
          value: function setupTrackMarker() {
            if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() != 0) {
              var min = this.getMin();
              var max = this.getMax();
              var step = this.getStep();
              var numMarkers = (max - min) / step;
              var indivisible = Math.ceil(numMarkers) !== numMarkers;
              if (indivisible) {
                numMarkers = Math.ceil(numMarkers);
              }
              this.adapter_.removeTrackMarkers();
              this.adapter_.appendTrackMarkers(numMarkers);
              if (indivisible) {
                var lastStepRatio = (max - numMarkers * step) / step + 1;
                var flex = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["b"])(window, 'flex');
                this.adapter_.setLastTrackMarkersStyleProperty(flex, String(lastStepRatio));
              }
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.rect_ = this.adapter_.computeBoundingRect();
            this.updateUIForCurrentValue_();
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.value_;
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.setValue_(value, false);
          }
        }, {
          key: 'getMax',
          value: function getMax() {
            return this.max_;
          }
        }, {
          key: 'setMax',
          value: function setMax(max) {
            if (max < this.min_) {
              throw new Error('Cannot set max to be less than the slider\'s minimum value');
            }
            this.max_ = max;
            this.setValue_(this.value_, false, true);
            this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c"].ARIA_VALUEMAX, String(this.max_));
            this.setupTrackMarker();
          }
        }, {
          key: 'getMin',
          value: function getMin() {
            return this.min_;
          }
        }, {
          key: 'setMin',
          value: function setMin(min) {
            if (min > this.max_) {
              throw new Error('Cannot set min to be greater than the slider\'s maximum value');
            }
            this.min_ = min;
            this.setValue_(this.value_, false, true);
            this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c"].ARIA_VALUEMIN, String(this.min_));
            this.setupTrackMarker();
          }
        }, {
          key: 'getStep',
          value: function getStep() {
            return this.step_;
          }
        }, {
          key: 'setStep',
          value: function setStep(step) {
            if (step < 0) {
              throw new Error('Step cannot be set to a negative number');
            }
            if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
              step = 1;
            }
            this.step_ = step;
            this.setValue_(this.value_, false, true);
            this.setupTrackMarker();
          }
        }, {
          key: 'isDisabled',
          value: function isDisabled() {
            return this.disabled_;
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            this.disabled_ = disabled;
            this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].DISABLED, this.disabled_);
            if (this.disabled_) {
              this.savedTabIndex_ = this.adapter_.getTabIndex();
              this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c"].ARIA_DISABLED, 'true');
              this.adapter_.removeAttribute('tabindex');
            } else {
              this.adapter_.removeAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c"].ARIA_DISABLED);
              if (!isNaN(this.savedTabIndex_)) {
                this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
              }
            }
          }
        }, {
          key: 'handleDown_',
          value: function handleDown_(evt) {
            var _this4 = this;
            if (this.disabled_) {
              return;
            }
            this.preventFocusState_ = true;
            this.setInTransit_(!this.handlingThumbTargetEvt_);
            this.handlingThumbTargetEvt_ = false;
            this.setActive_(true);
            var moveHandler = function moveHandler(evt) {
              _this4.handleMove_(evt);
            };
            var upHandler = function upHandler() {
              _this4.handleUp_();
              _this4.adapter_.deregisterBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
              UP_EVENTS.forEach(function(evtName) {
                return _this4.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
              });
            };
            this.adapter_.registerBodyInteractionHandler(MOVE_EVENT_MAP[evt.type], moveHandler);
            UP_EVENTS.forEach(function(evtName) {
              return _this4.adapter_.registerBodyInteractionHandler(evtName, upHandler);
            });
            this.setValueFromEvt_(evt);
          }
        }, {
          key: 'handleMove_',
          value: function handleMove_(evt) {
            evt.preventDefault();
            this.setValueFromEvt_(evt);
          }
        }, {
          key: 'handleUp_',
          value: function handleUp_() {
            this.setActive_(false);
            this.adapter_.notifyChange();
          }
        }, {
          key: 'getPageX_',
          value: function getPageX_(evt) {
            if (evt.targetTouches && evt.targetTouches.length > 0) {
              return evt.targetTouches[0].pageX;
            }
            return evt.pageX;
          }
        }, {
          key: 'setValueFromEvt_',
          value: function setValueFromEvt_(evt) {
            var pageX = this.getPageX_(evt);
            var value = this.computeValueFromPageX_(pageX);
            this.setValue_(value, true);
          }
        }, {
          key: 'computeValueFromPageX_',
          value: function computeValueFromPageX_(pageX) {
            var max = this.max_,
                min = this.min_;
            var xPos = pageX - this.rect_.left;
            var pctComplete = xPos / this.rect_.width;
            if (this.adapter_.isRTL()) {
              pctComplete = 1 - pctComplete;
            }
            return min + pctComplete * (max - min);
          }
        }, {
          key: 'handleKeydown_',
          value: function handleKeydown_(evt) {
            var keyId = this.getKeyId_(evt);
            var value = this.getValueForKeyId_(keyId);
            if (isNaN(value)) {
              return;
            }
            evt.preventDefault();
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].FOCUS);
            this.setValue_(value, true);
            this.adapter_.notifyChange();
          }
        }, {
          key: 'getKeyId_',
          value: function getKeyId_(kbdEvt) {
            if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
              return KEY_IDS.ARROW_LEFT;
            }
            if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
              return KEY_IDS.ARROW_RIGHT;
            }
            if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
              return KEY_IDS.ARROW_UP;
            }
            if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
              return KEY_IDS.ARROW_DOWN;
            }
            if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
              return KEY_IDS.HOME;
            }
            if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
              return KEY_IDS.END;
            }
            if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
              return KEY_IDS.PAGE_UP;
            }
            if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
              return KEY_IDS.PAGE_DOWN;
            }
            return '';
          }
        }, {
          key: 'getValueForKeyId_',
          value: function getValueForKeyId_(keyId) {
            var max = this.max_,
                min = this.min_,
                step = this.step_;
            var delta = step || (max - min) / 100;
            var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);
            if (valueNeedsToBeFlipped) {
              delta = -delta;
            }
            switch (keyId) {
              case KEY_IDS.ARROW_LEFT:
              case KEY_IDS.ARROW_DOWN:
                return this.value_ - delta;
              case KEY_IDS.ARROW_RIGHT:
              case KEY_IDS.ARROW_UP:
                return this.value_ + delta;
              case KEY_IDS.HOME:
                return this.min_;
              case KEY_IDS.END:
                return this.max_;
              case KEY_IDS.PAGE_UP:
                return this.value_ + delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b"].PAGE_FACTOR;
              case KEY_IDS.PAGE_DOWN:
                return this.value_ - delta * __WEBPACK_IMPORTED_MODULE_0__constants__["b"].PAGE_FACTOR;
              default:
                return NaN;
            }
          }
        }, {
          key: 'handleFocus_',
          value: function handleFocus_() {
            if (this.preventFocusState_) {
              return;
            }
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].FOCUS);
          }
        }, {
          key: 'handleBlur_',
          value: function handleBlur_() {
            this.preventFocusState_ = false;
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].FOCUS);
          }
        }, {
          key: 'setValue_',
          value: function setValue_(value, shouldFireInput) {
            var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            if (value === this.value_ && !force) {
              return;
            }
            var min = this.min_,
                max = this.max_;
            var valueSetToBoundary = value === min || value === max;
            if (this.step_ && !valueSetToBoundary) {
              value = this.quantize_(value);
            }
            if (value < min) {
              value = min;
            } else if (value > max) {
              value = max;
            }
            this.value_ = value;
            this.adapter_.setAttribute(__WEBPACK_IMPORTED_MODULE_0__constants__["c"].ARIA_VALUENOW, String(this.value_));
            this.updateUIForCurrentValue_();
            if (shouldFireInput) {
              this.adapter_.notifyInput();
              if (this.isDiscrete_) {
                this.adapter_.setMarkerValue(value);
              }
            }
          }
        }, {
          key: 'quantize_',
          value: function quantize_(value) {
            var numSteps = Math.round(value / this.step_);
            var quantizedVal = numSteps * this.step_;
            return quantizedVal;
          }
        }, {
          key: 'updateUIForCurrentValue_',
          value: function updateUIForCurrentValue_() {
            var _this5 = this;
            var max = this.max_,
                min = this.min_,
                value = this.value_;
            var pctComplete = (value - min) / (max - min);
            var translatePx = pctComplete * this.rect_.width;
            if (this.adapter_.isRTL()) {
              translatePx = this.rect_.width - translatePx;
            }
            var transformProp = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["b"])(window, 'transform');
            var transitionendEvtName = Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a"])(window, 'transitionend');
            if (this.inTransit_) {
              var onTransitionEnd = function onTransitionEnd() {
                _this5.setInTransit_(false);
                _this5.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
              };
              this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd);
            }
            this.updateUIFrame_ = requestAnimationFrame(function() {
              _this5.adapter_.setThumbContainerStyleProperty(transformProp, 'translateX(' + translatePx + 'px) translateX(-50%)');
              _this5.adapter_.setTrackStyleProperty(transformProp, 'scaleX(' + pctComplete + ')');
            });
          }
        }, {
          key: 'setActive_',
          value: function setActive_(active) {
            this.active_ = active;
            this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].ACTIVE, this.active_);
          }
        }, {
          key: 'setInTransit_',
          value: function setInTransit_(inTransit) {
            this.inTransit_ = inTransit;
            this.toggleClass_(__WEBPACK_IMPORTED_MODULE_0__constants__["a"].IN_TRANSIT, this.inTransit_);
          }
        }, {
          key: 'toggleClass_',
          value: function toggleClass_(className, shouldBePresent) {
            if (shouldBePresent) {
              this.adapter_.addClass(className);
            } else {
              this.adapter_.removeClass(className);
            }
          }
        }]);
        return MDCSliderFoundation;
      }(__WEBPACK_IMPORTED_MODULE_3__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCSliderFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCSnackbar", function() {
        return MDCSnackbar;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(91);
      var __WEBPACK_IMPORTED_MODULE_2__material_animation_index__ = __webpack_require__(5);
      __webpack_require__.d(__webpack_exports__, "MDCSnackbarFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
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
      var MDCSnackbar = function(_MDCComponent) {
        _inherits(MDCSnackbar, _MDCComponent);
        function MDCSnackbar() {
          _classCallCheck(this, MDCSnackbar);
          return _possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
        }
        _createClass(MDCSnackbar, [{
          key: 'show',
          value: function show(data) {
            this.foundation_.show(data);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            var _MDCSnackbarFoundatio = __WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings,
                TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
                ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;
            var getText = function getText() {
              return _this2.root_.querySelector(TEXT_SELECTOR);
            };
            var getActionButton = function getActionButton() {
              return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
            };
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              setAriaHidden: function setAriaHidden() {
                return _this2.root_.setAttribute('aria-hidden', 'true');
              },
              unsetAriaHidden: function unsetAriaHidden() {
                return _this2.root_.removeAttribute('aria-hidden');
              },
              setActionAriaHidden: function setActionAriaHidden() {
                return getActionButton().setAttribute('aria-hidden', 'true');
              },
              unsetActionAriaHidden: function unsetActionAriaHidden() {
                return getActionButton().removeAttribute('aria-hidden');
              },
              setActionText: function setActionText(text) {
                getActionButton().textContent = text;
              },
              setMessageText: function setMessageText(text) {
                getText().textContent = text;
              },
              setFocus: function setFocus() {
                return getActionButton().focus();
              },
              visibilityIsHidden: function visibilityIsHidden() {
                return document.hidden;
              },
              registerCapturedBlurHandler: function registerCapturedBlurHandler(handler) {
                return getActionButton().addEventListener('blur', handler, true);
              },
              deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler(handler) {
                return getActionButton().removeEventListener('blur', handler, true);
              },
              registerVisibilityChangeHandler: function registerVisibilityChangeHandler(handler) {
                return document.addEventListener('visibilitychange', handler);
              },
              deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler(handler) {
                return document.removeEventListener('visibilitychange', handler);
              },
              registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
                return document.body.addEventListener(evt, handler, true);
              },
              deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
                return document.body.removeEventListener(evt, handler, true);
              },
              registerActionClickHandler: function registerActionClickHandler(handler) {
                return getActionButton().addEventListener('click', handler);
              },
              deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
                return getActionButton().removeEventListener('click', handler);
              },
              registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
                return _this2.root_.addEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a"])(window, 'transitionend'), handler);
              },
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
                return _this2.root_.removeEventListener(Object(__WEBPACK_IMPORTED_MODULE_2__material_animation_index__["a"])(window, 'transitionend'), handler);
              },
              notifyShow: function notifyShow() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.SHOW_EVENT);
              },
              notifyHide: function notifyHide() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.HIDE_EVENT);
              }
            });
          }
        }, {
          key: 'dismissesOnAction',
          get: function get() {
            return this.foundation_.dismissesOnAction();
          },
          set: function set(dismissesOnAction) {
            this.foundation_.setDismissOnAction(dismissesOnAction);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCSnackbar(root);
          }
        }]);
        return MDCSnackbar;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(92);
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
      var MDCSnackbarFoundation = function(_MDCFoundation) {
        _inherits(MDCSnackbarFoundation, _MDCFoundation);
        _createClass(MDCSnackbarFoundation, [{
          key: 'active',
          get: function get() {
            return this.active_;
          }
        }], [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["c"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              setAriaHidden: function setAriaHidden() {},
              unsetAriaHidden: function unsetAriaHidden() {},
              setActionAriaHidden: function setActionAriaHidden() {},
              unsetActionAriaHidden: function unsetActionAriaHidden() {},
              setActionText: function setActionText() {},
              setMessageText: function setMessageText() {},
              setFocus: function setFocus() {},
              visibilityIsHidden: function visibilityIsHidden() {
                return (false);
              },
              registerCapturedBlurHandler: function registerCapturedBlurHandler() {},
              deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler() {},
              registerVisibilityChangeHandler: function registerVisibilityChangeHandler() {},
              deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler() {},
              registerCapturedInteractionHandler: function registerCapturedInteractionHandler() {},
              deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler() {},
              registerActionClickHandler: function registerActionClickHandler() {},
              deregisterActionClickHandler: function deregisterActionClickHandler() {},
              registerTransitionEndHandler: function registerTransitionEndHandler() {},
              deregisterTransitionEndHandler: function deregisterTransitionEndHandler() {},
              notifyShow: function notifyShow() {},
              notifyHide: function notifyHide() {}
            };
          }
        }]);
        function MDCSnackbarFoundation(adapter) {
          _classCallCheck(this, MDCSnackbarFoundation);
          var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));
          _this.active_ = false;
          _this.actionWasClicked_ = false;
          _this.dismissOnAction_ = true;
          _this.firstFocus_ = true;
          _this.pointerDownRecognized_ = false;
          _this.snackbarHasFocus_ = false;
          _this.snackbarData_ = null;
          _this.queue_ = [];
          _this.actionClickHandler_ = function() {
            _this.actionWasClicked_ = true;
            _this.invokeAction_();
          };
          _this.visibilitychangeHandler_ = function() {
            clearTimeout(_this.timeoutId_);
            _this.snackbarHasFocus_ = true;
            if (!_this.adapter_.visibilityIsHidden()) {
              setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b"].MESSAGE_TIMEOUT);
            }
          };
          _this.interactionHandler_ = function(evt) {
            if (evt.type == 'touchstart' || evt.type == 'mousedown') {
              _this.pointerDownRecognized_ = true;
            }
            _this.handlePossibleTabKeyboardFocus_(evt);
            if (evt.type == 'focus') {
              _this.pointerDownRecognized_ = false;
            }
          };
          _this.blurHandler_ = function() {
            clearTimeout(_this.timeoutId_);
            _this.snackbarHasFocus_ = false;
            _this.timeoutId_ = setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b"].MESSAGE_TIMEOUT);
          };
          return _this;
        }
        _createClass(MDCSnackbarFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerActionClickHandler(this.actionClickHandler_);
            this.adapter_.setAriaHidden();
            this.adapter_.setActionAriaHidden();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this2 = this;
            this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
            this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
            this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
            ['touchstart', 'mousedown', 'focus'].forEach(function(evtType) {
              _this2.adapter_.deregisterCapturedInteractionHandler(evtType, _this2.interactionHandler_);
            });
          }
        }, {
          key: 'dismissesOnAction',
          value: function dismissesOnAction() {
            return this.dismissOnAction_;
          }
        }, {
          key: 'setDismissOnAction',
          value: function setDismissOnAction(dismissOnAction) {
            this.dismissOnAction_ = !!dismissOnAction;
          }
        }, {
          key: 'show',
          value: function show(data) {
            var _this3 = this;
            if (!data) {
              throw new Error('Please provide a data object with at least a message to display.');
            }
            if (!data.message) {
              throw new Error('Please provide a message to be displayed.');
            }
            if (data.actionHandler && !data.actionText) {
              throw new Error('Please provide action text with the handler.');
            }
            if (this.active) {
              this.queue_.push(data);
              return;
            }
            clearTimeout(this.timeoutId_);
            this.snackbarData_ = data;
            this.firstFocus_ = true;
            this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
            this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
            ['touchstart', 'mousedown', 'focus'].forEach(function(evtType) {
              _this3.adapter_.registerCapturedInteractionHandler(evtType, _this3.interactionHandler_);
            });
            var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTIVE,
                MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].MULTILINE,
                ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTION_ON_BOTTOM;
            this.adapter_.setMessageText(this.snackbarData_.message);
            if (this.snackbarData_.multiline) {
              this.adapter_.addClass(MULTILINE);
              if (this.snackbarData_.actionOnBottom) {
                this.adapter_.addClass(ACTION_ON_BOTTOM);
              }
            }
            if (this.snackbarData_.actionHandler) {
              this.adapter_.setActionText(this.snackbarData_.actionText);
              this.actionHandler_ = this.snackbarData_.actionHandler;
              this.setActionHidden_(false);
            } else {
              this.setActionHidden_(true);
              this.actionHandler_ = null;
              this.adapter_.setActionText(null);
            }
            this.active_ = true;
            this.adapter_.addClass(ACTIVE);
            this.adapter_.unsetAriaHidden();
            this.adapter_.notifyShow();
            this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || __WEBPACK_IMPORTED_MODULE_1__constants__["b"].MESSAGE_TIMEOUT);
          }
        }, {
          key: 'handlePossibleTabKeyboardFocus_',
          value: function handlePossibleTabKeyboardFocus_() {
            var hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;
            if (hijackFocus) {
              this.setFocusOnAction_();
            }
            this.firstFocus_ = false;
          }
        }, {
          key: 'setFocusOnAction_',
          value: function setFocusOnAction_() {
            this.adapter_.setFocus();
            this.snackbarHasFocus_ = true;
            this.firstFocus_ = false;
          }
        }, {
          key: 'invokeAction_',
          value: function invokeAction_() {
            try {
              if (!this.actionHandler_) {
                return;
              }
              this.actionHandler_();
            } finally {
              if (this.dismissOnAction_) {
                this.cleanup_();
              }
            }
          }
        }, {
          key: 'cleanup_',
          value: function cleanup_() {
            var _this4 = this;
            var allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;
            if (allowDismissal) {
              var ACTIVE = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTIVE,
                  MULTILINE = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].MULTILINE,
                  ACTION_ON_BOTTOM = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTION_ON_BOTTOM;
              this.adapter_.removeClass(ACTIVE);
              var handler = function handler() {
                clearTimeout(_this4.timeoutId_);
                _this4.adapter_.deregisterTransitionEndHandler(handler);
                _this4.adapter_.removeClass(MULTILINE);
                _this4.adapter_.removeClass(ACTION_ON_BOTTOM);
                _this4.setActionHidden_(true);
                _this4.adapter_.setAriaHidden();
                _this4.active_ = false;
                _this4.snackbarHasFocus_ = false;
                _this4.adapter_.notifyHide();
                _this4.showNext_();
              };
              this.adapter_.registerTransitionEndHandler(handler);
            }
          }
        }, {
          key: 'showNext_',
          value: function showNext_() {
            if (!this.queue_.length) {
              return;
            }
            this.show(this.queue_.shift());
          }
        }, {
          key: 'setActionHidden_',
          value: function setActionHidden_(isHidden) {
            if (isHidden) {
              this.adapter_.setActionAriaHidden();
            } else {
              this.adapter_.unsetActionAriaHidden();
            }
          }
        }]);
        return MDCSnackbarFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);
      __webpack_exports__["a"] = (MDCSnackbarFoundation);
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
        ROOT: 'mdc-snackbar',
        TEXT: 'mdc-snackbar__text',
        ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
        ACTION_BUTTON: 'mdc-snackbar__action-button',
        ACTIVE: 'mdc-snackbar--active',
        MULTILINE: 'mdc-snackbar--multiline',
        ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
      };
      var strings = {
        TEXT_SELECTOR: '.mdc-snackbar__text',
        ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
        ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
        SHOW_EVENT: 'MDCSnackbar:show',
        HIDE_EVENT: 'MDCSnackbar:hide'
      };
      var numbers = {MESSAGE_TIMEOUT: 2750};
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      var __WEBPACK_IMPORTED_MODULE_0__tab__ = __webpack_require__(26);
      __webpack_require__.d(__webpack_exports__, "MDCTabFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_0__tab__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTab", function() {
        return __WEBPACK_IMPORTED_MODULE_0__tab__["a"];
      });
      var __WEBPACK_IMPORTED_MODULE_1__tab_bar__ = __webpack_require__(28);
      __webpack_require__.d(__webpack_exports__, "MDCTabBarFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__tab_bar__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTabBar", function() {
        return __WEBPACK_IMPORTED_MODULE_1__tab_bar__["a"];
      });
      var __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__ = __webpack_require__(97);
      __webpack_require__.d(__webpack_exports__, "MDCTabBarScrollerFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTabBarScroller", function() {
        return __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__["a"];
      });
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(27);
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
      var MDCTabFoundation = function(_MDCFoundation) {
        _inherits(MDCTabFoundation, _MDCFoundation);
        _createClass(MDCTabFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerInteractionHandler: function registerInteractionHandler() {},
              deregisterInteractionHandler: function deregisterInteractionHandler() {},
              getOffsetWidth: function getOffsetWidth() {
                return (0);
              },
              getOffsetLeft: function getOffsetLeft() {
                return (0);
              },
              notifySelected: function notifySelected() {}
            };
          }
        }]);
        function MDCTabFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          _classCallCheck(this, MDCTabFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTabFoundation.__proto__ || Object.getPrototypeOf(MDCTabFoundation)).call(this, _extends(MDCTabFoundation.defaultAdapter, adapter)));
          _this.computedWidth_ = 0;
          _this.computedLeft_ = 0;
          _this.isActive_ = false;
          _this.preventDefaultOnClick_ = false;
          _this.clickHandler_ = function(evt) {
            if (_this.preventDefaultOnClick_) {
              evt.preventDefault();
            }
            _this.adapter_.notifySelected();
          };
          _this.keydownHandler_ = function(evt) {
            if (evt.key && evt.key === 'Enter' || evt.keyCode === 13) {
              _this.adapter_.notifySelected();
            }
          };
          return _this;
        }
        _createClass(MDCTabFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerInteractionHandler('click', this.clickHandler_);
            this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
            this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
          }
        }, {
          key: 'getComputedWidth',
          value: function getComputedWidth() {
            return this.computedWidth_;
          }
        }, {
          key: 'getComputedLeft',
          value: function getComputedLeft() {
            return this.computedLeft_;
          }
        }, {
          key: 'isActive',
          value: function isActive() {
            return this.isActive_;
          }
        }, {
          key: 'setActive',
          value: function setActive(isActive) {
            this.isActive_ = isActive;
            if (this.isActive_) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTIVE);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_1__constants__["a"].ACTIVE);
            }
          }
        }, {
          key: 'preventsDefaultOnClick',
          value: function preventsDefaultOnClick() {
            return this.preventDefaultOnClick_;
          }
        }, {
          key: 'setPreventDefaultOnClick',
          value: function setPreventDefaultOnClick(preventDefaultOnClick) {
            this.preventDefaultOnClick_ = preventDefaultOnClick;
          }
        }, {
          key: 'measureSelf',
          value: function measureSelf() {
            this.computedWidth_ = this.adapter_.getOffsetWidth();
            this.computedLeft_ = this.adapter_.getOffsetLeft();
          }
        }]);
        return MDCTabFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTabFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__material_animation_index__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(96);
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
      var MDCTabBarFoundation = function(_MDCFoundation) {
        _inherits(MDCTabBarFoundation, _MDCFoundation);
        _createClass(MDCTabBarFoundation, null, [{
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
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              bindOnMDCTabSelectedEvent: function bindOnMDCTabSelectedEvent() {},
              unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {},
              registerResizeHandler: function registerResizeHandler() {},
              deregisterResizeHandler: function deregisterResizeHandler() {},
              getOffsetWidth: function getOffsetWidth() {
                return (0);
              },
              setStyleForIndicator: function setStyleForIndicator() {},
              getOffsetWidthForIndicator: function getOffsetWidthForIndicator() {
                return (0);
              },
              notifyChange: function notifyChange() {},
              getNumberOfTabs: function getNumberOfTabs() {
                return (0);
              },
              isTabActiveAtIndex: function isTabActiveAtIndex() {
                return (false);
              },
              setTabActiveAtIndex: function setTabActiveAtIndex() {},
              isDefaultPreventedOnClickForTabAtIndex: function isDefaultPreventedOnClickForTabAtIndex() {
                return (false);
              },
              setPreventDefaultOnClickForTabAtIndex: function setPreventDefaultOnClickForTabAtIndex() {},
              measureTabAtIndex: function measureTabAtIndex() {},
              getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex() {
                return (0);
              },
              getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex() {
                return (0);
              }
            };
          }
        }]);
        function MDCTabBarFoundation(adapter) {
          _classCallCheck(this, MDCTabBarFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTabBarFoundation.__proto__ || Object.getPrototypeOf(MDCTabBarFoundation)).call(this, _extends(MDCTabBarFoundation.defaultAdapter, adapter)));
          _this.isIndicatorShown_ = false;
          _this.computedWidth_ = 0;
          _this.computedLeft_ = 0;
          _this.activeTabIndex_ = 0;
          _this.layoutFrame_ = 0;
          _this.resizeHandler_ = function() {
            return _this.layout();
          };
          return _this;
        }
        _createClass(MDCTabBarFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].UPGRADED);
            this.adapter_.bindOnMDCTabSelectedEvent();
            this.adapter_.registerResizeHandler(this.resizeHandler_);
            var activeTabIndex = this.findActiveTabIndex_();
            if (activeTabIndex >= 0) {
              this.activeTabIndex_ = activeTabIndex;
            }
            this.layout();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a"].UPGRADED);
            this.adapter_.unbindOnMDCTabSelectedEvent();
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        }, {
          key: 'layoutInternal_',
          value: function layoutInternal_() {
            var _this2 = this;
            this.forEachTabIndex_(function(index) {
              return _this2.adapter_.measureTabAtIndex(index);
            });
            this.computedWidth_ = this.adapter_.getOffsetWidth();
            this.layoutIndicator_();
          }
        }, {
          key: 'layoutIndicator_',
          value: function layoutIndicator_() {
            var isIndicatorFirstRender = !this.isIndicatorShown_;
            if (isIndicatorFirstRender) {
              this.adapter_.setStyleForIndicator('transition', 'none');
            }
            var translateAmtForActiveTabLeft = this.adapter_.getComputedLeftForTabAtIndex(this.activeTabIndex_);
            var scaleAmtForActiveTabWidth = this.adapter_.getComputedWidthForTabAtIndex(this.activeTabIndex_) / this.adapter_.getOffsetWidth();
            var transformValue = 'translateX(' + translateAmtForActiveTabLeft + 'px) scale(' + scaleAmtForActiveTabWidth + ', 1)';
            this.adapter_.setStyleForIndicator(Object(__WEBPACK_IMPORTED_MODULE_1__material_animation_index__["b"])(window, 'transform'), transformValue);
            if (isIndicatorFirstRender) {
              this.adapter_.getOffsetWidthForIndicator();
              this.adapter_.setStyleForIndicator('transition', '');
              this.adapter_.setStyleForIndicator('visibility', 'visible');
              this.isIndicatorShown_ = true;
            }
          }
        }, {
          key: 'findActiveTabIndex_',
          value: function findActiveTabIndex_() {
            var _this3 = this;
            var activeTabIndex = -1;
            this.forEachTabIndex_(function(index) {
              if (_this3.adapter_.isTabActiveAtIndex(index)) {
                activeTabIndex = index;
                return true;
              }
            });
            return activeTabIndex;
          }
        }, {
          key: 'forEachTabIndex_',
          value: function forEachTabIndex_(iterator) {
            var numTabs = this.adapter_.getNumberOfTabs();
            for (var index = 0; index < numTabs; index++) {
              var shouldBreak = iterator(index);
              if (shouldBreak) {
                break;
              }
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this4 = this;
            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function() {
              _this4.layoutInternal_();
              _this4.layoutFrame_ = 0;
            });
          }
        }, {
          key: 'switchToTabAtIndex',
          value: function switchToTabAtIndex(index, shouldNotify) {
            var _this5 = this;
            if (index === this.activeTabIndex_) {
              return;
            }
            if (index < 0 || index >= this.adapter_.getNumberOfTabs()) {
              throw new Error('Out of bounds index specified for tab: ' + index);
            }
            var prevActiveTabIndex = this.activeTabIndex_;
            this.activeTabIndex_ = index;
            requestAnimationFrame(function() {
              if (prevActiveTabIndex >= 0) {
                _this5.adapter_.setTabActiveAtIndex(prevActiveTabIndex, false);
              }
              _this5.adapter_.setTabActiveAtIndex(_this5.activeTabIndex_, true);
              _this5.layoutIndicator_();
              if (shouldNotify) {
                _this5.adapter_.notifyChange({activeTabIndex: _this5.activeTabIndex_});
              }
            });
          }
        }, {
          key: 'getActiveTabIndex',
          value: function getActiveTabIndex() {
            return this.findActiveTabIndex_();
          }
        }]);
        return MDCTabBarFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTabBarFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {UPGRADED: 'mdc-tab-bar-upgraded'};
      var strings = {
        TAB_SELECTOR: '.mdc-tab',
        INDICATOR_SELECTOR: '.mdc-tab-bar__indicator',
        CHANGE_EVENT: 'MDCTabBar:change'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return MDCTabBarScroller;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_animation_index__ = __webpack_require__(5);
      var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_2__tab_bar_index__ = __webpack_require__(28);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(98);
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return __WEBPACK_IMPORTED_MODULE_3__foundation__["a"];
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
      var MDCTabBarScroller = function(_MDCComponent) {
        _inherits(MDCTabBarScroller, _MDCComponent);
        function MDCTabBarScroller() {
          _classCallCheck(this, MDCTabBarScroller);
          return _possibleConstructorReturn(this, (MDCTabBarScroller.__proto__ || Object.getPrototypeOf(MDCTabBarScroller)).apply(this, arguments));
        }
        _createClass(MDCTabBarScroller, [{
          key: 'initialize',
          value: function initialize() {
            var tabBarFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(root) {
              return new __WEBPACK_IMPORTED_MODULE_2__tab_bar_index__["a"](root);
            };
            this.scrollFrame_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.FRAME_SELECTOR);
            this.tabBarEl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.TABS_SELECTOR);
            this.forwardIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.INDICATOR_FORWARD_SELECTOR);
            this.backIndicator_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__foundation__["a"].strings.INDICATOR_BACK_SELECTOR);
            this.tabBar_ = tabBarFactory(this.tabBarEl_);
          }
        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_3__foundation__["a"]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              eventTargetHasClass: function eventTargetHasClass(target, className) {
                return target.classList.contains(className);
              },
              addClassToForwardIndicator: function addClassToForwardIndicator(className) {
                return _this2.forwardIndicator_.classList.add(className);
              },
              removeClassFromForwardIndicator: function removeClassFromForwardIndicator(className) {
                return _this2.forwardIndicator_.classList.remove(className);
              },
              addClassToBackIndicator: function addClassToBackIndicator(className) {
                return _this2.backIndicator_.classList.add(className);
              },
              removeClassFromBackIndicator: function removeClassFromBackIndicator(className) {
                return _this2.backIndicator_.classList.remove(className);
              },
              isRTL: function isRTL() {
                return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
              },
              registerBackIndicatorClickHandler: function registerBackIndicatorClickHandler(handler) {
                return _this2.backIndicator_.addEventListener('click', handler);
              },
              deregisterBackIndicatorClickHandler: function deregisterBackIndicatorClickHandler(handler) {
                return _this2.backIndicator_.removeEventListener('click', handler);
              },
              registerForwardIndicatorClickHandler: function registerForwardIndicatorClickHandler(handler) {
                return _this2.forwardIndicator_.addEventListener('click', handler);
              },
              deregisterForwardIndicatorClickHandler: function deregisterForwardIndicatorClickHandler(handler) {
                return _this2.forwardIndicator_.removeEventListener('click', handler);
              },
              registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
                return _this2.root_.addEventListener(evt, handler, true);
              },
              deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
                return _this2.root_.removeEventListener(evt, handler, true);
              },
              registerWindowResizeHandler: function registerWindowResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterWindowResizeHandler: function deregisterWindowResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              getNumberOfTabs: function getNumberOfTabs() {
                return _this2.tabBar.tabs.length;
              },
              getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex(index) {
                return _this2.tabBar.tabs[index].computedWidth;
              },
              getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex(index) {
                return _this2.tabBar.tabs[index].computedLeft;
              },
              getOffsetWidthForScrollFrame: function getOffsetWidthForScrollFrame() {
                return _this2.scrollFrame_.offsetWidth;
              },
              getScrollLeftForScrollFrame: function getScrollLeftForScrollFrame() {
                return _this2.scrollFrame_.scrollLeft;
              },
              setScrollLeftForScrollFrame: function setScrollLeftForScrollFrame(scrollLeftAmount) {
                return _this2.scrollFrame_.scrollLeft = scrollLeftAmount;
              },
              getOffsetWidthForTabBar: function getOffsetWidthForTabBar() {
                return _this2.tabBarEl_.offsetWidth;
              },
              setTransformStyleForTabBar: function setTransformStyleForTabBar(value) {
                _this2.tabBarEl_.style.setProperty(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation_index__["b"])(window, 'transform'), value);
              },
              getOffsetLeftForEventTarget: function getOffsetLeftForEventTarget(target) {
                return target.offsetLeft;
              },
              getOffsetWidthForEventTarget: function getOffsetWidthForEventTarget(target) {
                return target.offsetWidth;
              }
            });
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }
        }, {
          key: 'tabBar',
          get: function get() {
            return this.tabBar_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCTabBarScroller(root);
          }
        }]);
        return MDCTabBarScroller;
      }(__WEBPACK_IMPORTED_MODULE_1__material_base_component__["a"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(99);
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
      var MDCTabBarScrollerFoundation = function(_MDCFoundation) {
        _inherits(MDCTabBarScrollerFoundation, _MDCFoundation);
        _createClass(MDCTabBarScrollerFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              eventTargetHasClass: function eventTargetHasClass() {
                return (false);
              },
              addClassToForwardIndicator: function addClassToForwardIndicator() {},
              removeClassFromForwardIndicator: function removeClassFromForwardIndicator() {},
              addClassToBackIndicator: function addClassToBackIndicator() {},
              removeClassFromBackIndicator: function removeClassFromBackIndicator() {},
              isRTL: function isRTL() {
                return (false);
              },
              registerBackIndicatorClickHandler: function registerBackIndicatorClickHandler() {},
              deregisterBackIndicatorClickHandler: function deregisterBackIndicatorClickHandler() {},
              registerForwardIndicatorClickHandler: function registerForwardIndicatorClickHandler() {},
              deregisterForwardIndicatorClickHandler: function deregisterForwardIndicatorClickHandler() {},
              registerCapturedInteractionHandler: function registerCapturedInteractionHandler() {},
              deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler() {},
              registerWindowResizeHandler: function registerWindowResizeHandler() {},
              deregisterWindowResizeHandler: function deregisterWindowResizeHandler() {},
              getNumberOfTabs: function getNumberOfTabs() {
                return (0);
              },
              getComputedWidthForTabAtIndex: function getComputedWidthForTabAtIndex() {
                return (0);
              },
              getComputedLeftForTabAtIndex: function getComputedLeftForTabAtIndex() {
                return (0);
              },
              getOffsetWidthForScrollFrame: function getOffsetWidthForScrollFrame() {
                return (0);
              },
              getScrollLeftForScrollFrame: function getScrollLeftForScrollFrame() {
                return (0);
              },
              setScrollLeftForScrollFrame: function setScrollLeftForScrollFrame() {},
              getOffsetWidthForTabBar: function getOffsetWidthForTabBar() {
                return (0);
              },
              setTransformStyleForTabBar: function setTransformStyleForTabBar() {},
              getOffsetLeftForEventTarget: function getOffsetLeftForEventTarget() {
                return (0);
              },
              getOffsetWidthForEventTarget: function getOffsetWidthForEventTarget() {
                return (0);
              }
            };
          }
        }]);
        function MDCTabBarScrollerFoundation(adapter) {
          _classCallCheck(this, MDCTabBarScrollerFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTabBarScrollerFoundation.__proto__ || Object.getPrototypeOf(MDCTabBarScrollerFoundation)).call(this, _extends(MDCTabBarScrollerFoundation.defaultAdapter, adapter)));
          _this.pointerDownRecognized_ = false;
          _this.currentTranslateOffset_ = 0;
          _this.focusedTarget_ = null;
          _this.layoutFrame_ = 0;
          _this.scrollFrameScrollLeft_ = 0;
          _this.forwardIndicatorClickHandler_ = function(evt) {
            return _this.scrollForward(evt);
          };
          _this.backIndicatorClickHandler_ = function(evt) {
            return _this.scrollBack(evt);
          };
          _this.resizeHandler_ = function() {
            return _this.layout();
          };
          _this.interactionHandler_ = function(evt) {
            if (evt.type == 'touchstart' || evt.type == 'mousedown') {
              _this.pointerDownRecognized_ = true;
            }
            _this.handlePossibleTabKeyboardFocus_(evt);
            if (evt.type == 'focus') {
              _this.pointerDownRecognized_ = false;
            }
          };
          return _this;
        }
        _createClass(MDCTabBarScrollerFoundation, [{
          key: 'init',
          value: function init() {
            var _this2 = this;
            this.adapter_.registerBackIndicatorClickHandler(this.backIndicatorClickHandler_);
            this.adapter_.registerForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
            this.adapter_.registerWindowResizeHandler(this.resizeHandler_);
            ['touchstart', 'mousedown', 'focus'].forEach(function(evtType) {
              _this2.adapter_.registerCapturedInteractionHandler(evtType, _this2.interactionHandler_);
            });
            this.layout();
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;
            this.adapter_.deregisterBackIndicatorClickHandler(this.backIndicatorClickHandler_);
            this.adapter_.deregisterForwardIndicatorClickHandler(this.forwardIndicatorClickHandler_);
            this.adapter_.deregisterWindowResizeHandler(this.resizeHandler_);
            ['touchstart', 'mousedown', 'focus'].forEach(function(evtType) {
              _this3.adapter_.deregisterCapturedInteractionHandler(evtType, _this3.interactionHandler_);
            });
          }
        }, {
          key: 'scrollBack',
          value: function scrollBack() {
            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            if (evt) {
              evt.preventDefault();
            }
            var tabWidthAccumulator = 0;
            var scrollTargetIndex = 0;
            for (var i = this.adapter_.getNumberOfTabs() - 1; i > 0; i--) {
              var tabOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(i);
              var tabBarWidthLessTabOffsetLeft = this.adapter_.getOffsetWidthForTabBar() - tabOffsetLeft;
              var tabIsNotOccluded = tabOffsetLeft > this.currentTranslateOffset_;
              if (this.isRTL_()) {
                tabIsNotOccluded = tabBarWidthLessTabOffsetLeft > this.currentTranslateOffset_;
              }
              if (tabIsNotOccluded) {
                continue;
              }
              tabWidthAccumulator += this.adapter_.getComputedWidthForTabAtIndex(i);
              var scrollTargetDetermined = tabWidthAccumulator > this.adapter_.getOffsetWidthForScrollFrame();
              if (scrollTargetDetermined) {
                scrollTargetIndex = this.isRTL_() ? i + 1 : i;
                break;
              }
            }
            this.scrollToTabAtIndex(scrollTargetIndex);
          }
        }, {
          key: 'scrollForward',
          value: function scrollForward() {
            var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            if (evt) {
              evt.preventDefault();
            }
            var scrollFrameOffsetWidth = this.adapter_.getOffsetWidthForScrollFrame() + this.currentTranslateOffset_;
            var scrollTargetIndex = 0;
            for (var i = 0; i < this.adapter_.getNumberOfTabs(); i++) {
              var tabOffsetLeftAndWidth = this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
              var scrollTargetDetermined = tabOffsetLeftAndWidth > scrollFrameOffsetWidth;
              if (this.isRTL_()) {
                var frameOffsetAndTabWidth = scrollFrameOffsetWidth - this.adapter_.getComputedWidthForTabAtIndex(i);
                var _tabOffsetLeftAndWidth = this.adapter_.getComputedLeftForTabAtIndex(i) + this.adapter_.getComputedWidthForTabAtIndex(i);
                var tabRightOffset = this.adapter_.getOffsetWidthForTabBar() - _tabOffsetLeftAndWidth;
                scrollTargetDetermined = tabRightOffset > frameOffsetAndTabWidth;
              }
              if (scrollTargetDetermined) {
                scrollTargetIndex = i;
                break;
              }
            }
            this.scrollToTabAtIndex(scrollTargetIndex);
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this4 = this;
            cancelAnimationFrame(this.layoutFrame_);
            this.scrollFrameScrollLeft_ = this.adapter_.getScrollLeftForScrollFrame();
            this.layoutFrame_ = requestAnimationFrame(function() {
              return _this4.layout_();
            });
          }
        }, {
          key: 'isRTL_',
          value: function isRTL_() {
            return this.adapter_.isRTL();
          }
        }, {
          key: 'handlePossibleTabKeyboardFocus_',
          value: function handlePossibleTabKeyboardFocus_(evt) {
            if (!this.adapter_.eventTargetHasClass(evt.target, __WEBPACK_IMPORTED_MODULE_1__constants__["a"].TAB) || this.pointerDownRecognized_) {
              return;
            }
            var resetAmt = this.isRTL_() ? this.scrollFrameScrollLeft_ : 0;
            this.adapter_.setScrollLeftForScrollFrame(resetAmt);
            this.focusedTarget_ = evt.target;
            var scrollFrameWidth = this.adapter_.getOffsetWidthForScrollFrame();
            var tabBarWidth = this.adapter_.getOffsetWidthForTabBar();
            var leftEdge = this.adapter_.getOffsetLeftForEventTarget(this.focusedTarget_);
            var rightEdge = leftEdge + this.adapter_.getOffsetWidthForEventTarget(this.focusedTarget_);
            var shouldScrollBack = rightEdge <= this.currentTranslateOffset_;
            var shouldScrollForward = rightEdge > this.currentTranslateOffset_ + scrollFrameWidth;
            if (this.isRTL_()) {
              var normalizedLeftOffset = tabBarWidth - leftEdge;
              shouldScrollBack = leftEdge >= tabBarWidth - this.currentTranslateOffset_;
              shouldScrollForward = normalizedLeftOffset > scrollFrameWidth + this.currentTranslateOffset_;
            }
            if (shouldScrollForward) {
              this.scrollForward();
            } else if (shouldScrollBack) {
              this.scrollBack();
            }
            this.pointerDownRecognized_ = false;
          }
        }, {
          key: 'layout_',
          value: function layout_() {
            var frameWidth = this.adapter_.getOffsetWidthForScrollFrame();
            var isOverflowing = this.adapter_.getOffsetWidthForTabBar() > frameWidth;
            if (!isOverflowing) {
              this.currentTranslateOffset_ = 0;
            }
            this.shiftFrame_();
            this.updateIndicatorEnabledStates_();
          }
        }, {
          key: 'scrollToTabAtIndex',
          value: function scrollToTabAtIndex(index) {
            var _this5 = this;
            var scrollTargetOffsetLeft = this.adapter_.getComputedLeftForTabAtIndex(index);
            var scrollTargetOffsetWidth = this.adapter_.getComputedWidthForTabAtIndex(index);
            this.currentTranslateOffset_ = this.normalizeForRTL_(scrollTargetOffsetLeft, scrollTargetOffsetWidth);
            requestAnimationFrame(function() {
              return _this5.shiftFrame_();
            });
          }
        }, {
          key: 'normalizeForRTL_',
          value: function normalizeForRTL_(left, width) {
            return this.isRTL_() ? this.adapter_.getOffsetWidthForTabBar() - (left + width) : left;
          }
        }, {
          key: 'shiftFrame_',
          value: function shiftFrame_() {
            var shiftAmount = this.isRTL_() ? this.currentTranslateOffset_ : -this.currentTranslateOffset_;
            this.adapter_.setTransformStyleForTabBar('translateX(' + shiftAmount + 'px)');
            this.updateIndicatorEnabledStates_();
          }
        }, {
          key: 'updateIndicatorEnabledStates_',
          value: function updateIndicatorEnabledStates_() {
            var INDICATOR_ENABLED = __WEBPACK_IMPORTED_MODULE_1__constants__["a"].INDICATOR_ENABLED;
            if (this.currentTranslateOffset_ === 0) {
              this.adapter_.removeClassFromBackIndicator(INDICATOR_ENABLED);
            } else {
              this.adapter_.addClassToBackIndicator(INDICATOR_ENABLED);
            }
            var remainingTabBarWidth = this.adapter_.getOffsetWidthForTabBar() - this.currentTranslateOffset_;
            if (remainingTabBarWidth > this.adapter_.getOffsetWidthForScrollFrame()) {
              this.adapter_.addClassToForwardIndicator(INDICATOR_ENABLED);
            } else {
              this.adapter_.removeClassFromForwardIndicator(INDICATOR_ENABLED);
            }
          }
        }]);
        return MDCTabBarScrollerFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCTabBarScrollerFoundation);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, "a", function() {
        return cssClasses;
      });
      __webpack_require__.d(__webpack_exports__, "b", function() {
        return strings;
      });
      var cssClasses = {
        INDICATOR_FORWARD: 'mdc-tab-bar-scroller__indicator--forward',
        INDICATOR_BACK: 'mdc-tab-bar-scroller__indicator--back',
        INDICATOR_ENABLED: 'mdc-tab-bar-scroller__indicator--enabled',
        TAB: 'mdc-tab'
      };
      var strings = {
        FRAME_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame',
        TABS_SELECTOR: '.mdc-tab-bar-scroller__scroll-frame__tabs',
        TAB_SELECTOR: '.mdc-tab',
        INDICATOR_FORWARD_SELECTOR: '.mdc-tab-bar-scroller__indicator--forward',
        INDICATOR_BACK_SELECTOR: '.mdc-tab-bar-scroller__indicator--back'
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCTextField", function() {
        return MDCTextField;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(3);
      var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(6);
      var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(29);
      var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(30);
      var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(104);
      var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(20);
      var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(105);
      var __WEBPACK_IMPORTED_MODULE_8__icon_index__ = __webpack_require__(106);
      var __WEBPACK_IMPORTED_MODULE_9__label_index__ = __webpack_require__(107);
      var __WEBPACK_IMPORTED_MODULE_10__outline_index__ = __webpack_require__(108);
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function() {
        return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function() {
        return __WEBPACK_IMPORTED_MODULE_8__icon_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_8__icon_index__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldLabel", function() {
        return __WEBPACK_IMPORTED_MODULE_9__label_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldLabelFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_9__label_index__["b"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldOutline", function() {
        return __WEBPACK_IMPORTED_MODULE_10__outline_index__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "MDCTextFieldOutlineFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_10__outline_index__["b"];
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
          _this.lineRipple_;
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
              return new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](el, foundation);
            };
            var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__["MDCLineRipple"](el);
            };
            var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a"](el);
            };
            var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_8__icon_index__["a"](el);
            };
            var _this2 = this;
            var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_9__label_index__["a"](el);
            };
            var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function(el) {
              return new __WEBPACK_IMPORTED_MODULE_10__outline_index__["a"](el);
            };
            this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].INPUT_SELECTOR);
            var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].LABEL_SELECTOR);
            if (labelElement) {
              this.label_ = labelFactory(labelElement);
            }
            var lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].BOTTOM_LINE_SELECTOR);
            if (lineRippleElement) {
              this.lineRipple_ = lineRippleFactory(lineRippleElement);
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
              var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].createAdapter(rippleCapableSurface), {
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
              var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRippleFoundation"](adapter);
              this.ripple = rippleFactory(rippleRoot, foundation);
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            if (this.ripple) {
              this.ripple.destroy();
            }
            if (this.lineRipple_) {
              this.lineRipple_.destroy();
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
              isFocused: function isFocused() {
                return document.activeElement === _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["c"].INPUT_SELECTOR);
              },
              isRtl: function isRtl() {
                return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
              },
              activateLineRipple: function activateLineRipple() {
                if (_this3.lineRipple_) {
                  _this3.lineRipple_.activate();
                }
              },
              deactivateLineRipple: function deactivateLineRipple() {
                if (_this3.lineRipple_) {
                  _this3.lineRipple_.deactivate();
                }
              },
              setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
                if (_this3.lineRipple_) {
                  _this3.lineRipple_.setRippleCenter(normalizedX);
                }
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
      var __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_foundation__ = __webpack_require__(9);
      var __WEBPACK_IMPORTED_MODULE_3__helper_text_foundation__ = __webpack_require__(11);
      var __WEBPACK_IMPORTED_MODULE_4__icon_foundation__ = __webpack_require__(12);
      var __WEBPACK_IMPORTED_MODULE_5__label_foundation__ = __webpack_require__(13);
      var __WEBPACK_IMPORTED_MODULE_6__outline_foundation__ = __webpack_require__(14);
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
              getNativeInput: function getNativeInput() {},
              isFocused: function isFocused() {},
              isRtl: function isRtl() {},
              activateLineRipple: function activateLineRipple() {},
              deactivateLineRipple: function deactivateLineRipple() {},
              setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {}
            });
          }
        }]);
        function MDCTextFieldFoundation(adapter) {
          var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          _classCallCheck(this, MDCTextFieldFoundation);
          var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));
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
            return _this.setTransformOrigin(evt);
          };
          _this.textFieldInteractionHandler_ = function() {
            return _this.handleTextFieldInteraction();
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
            this.adapter_.activateLineRipple();
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
          key: 'setTransformOrigin',
          value: function setTransformOrigin(evt) {
            var targetClientRect = evt.target.getBoundingClientRect();
            var evtCoords = {
              x: evt.clientX,
              y: evt.clientY
            };
            var normalizedX = evtCoords.x - targetClientRect.left;
            this.adapter_.setLineRippleTransformOrigin(normalizedX);
          }
        }, {
          key: 'autoCompleteFocus',
          value: function autoCompleteFocus() {
            if (!this.receivedUserInput_) {
              this.activateFocus();
            }
          }
        }, {
          key: 'deactivateFocus',
          value: function deactivateFocus() {
            this.isFocused_ = false;
            this.adapter_.deactivateLineRipple();
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
        return MDCTextFieldHelperText;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(31);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(11);
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
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(32);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(12);
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
      var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(33);
      var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(13);
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
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(35);
      var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(34);
      var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(14);
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
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_require__.d(__webpack_exports__, "MDCToolbar", function() {
        return MDCToolbar;
      });
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(2);
      var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(110);
      var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(112);
      __webpack_require__.d(__webpack_exports__, "MDCToolbarFoundation", function() {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
      });
      __webpack_require__.d(__webpack_exports__, "util", function() {
        return __WEBPACK_IMPORTED_MODULE_2__util__;
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
      var MDCToolbar = function(_MDCComponent) {
        _inherits(MDCToolbar, _MDCComponent);
        function MDCToolbar() {
          _classCallCheck(this, MDCToolbar);
          return _possibleConstructorReturn(this, (MDCToolbar.__proto__ || Object.getPrototypeOf(MDCToolbar)).apply(this, arguments));
        }
        _createClass(MDCToolbar, [{
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;
            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a"]({
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              registerScrollHandler: function registerScrollHandler(handler) {
                return window.addEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              deregisterScrollHandler: function deregisterScrollHandler(handler) {
                return window.removeEventListener('scroll', handler, __WEBPACK_IMPORTED_MODULE_2__util__["applyPassive"]());
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              getViewportWidth: function getViewportWidth() {
                return window.innerWidth;
              },
              getViewportScrollY: function getViewportScrollY() {
                return window.pageYOffset;
              },
              getOffsetHeight: function getOffsetHeight() {
                return _this2.root_.offsetHeight;
              },
              getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
                return _this2.firstRowElement_.offsetHeight;
              },
              notifyChange: function notifyChange(evtData) {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.CHANGE_EVENT, evtData);
              },
              setStyle: function setStyle(property, value) {
                return _this2.root_.style.setProperty(property, value);
              },
              setStyleForTitleElement: function setStyleForTitleElement(property, value) {
                return _this2.titleElement_.style.setProperty(property, value);
              },
              setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement(property, value) {
                return _this2.firstRowElement_.style.setProperty(property, value);
              },
              setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement(property, value) {
                if (_this2.fixedAdjustElement) {
                  _this2.fixedAdjustElement.style.setProperty(property, value);
                }
              }
            });
          }
        }, {
          key: 'firstRowElement_',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.FIRST_ROW_SELECTOR);
          }
        }, {
          key: 'titleElement_',
          get: function get() {
            return this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_1__foundation__["a"].strings.TITLE_SELECTOR);
          }
        }, {
          key: 'fixedAdjustElement',
          set: function set(fixedAdjustElement) {
            this.fixedAdjustElement_ = fixedAdjustElement;
            this.foundation_.updateAdjustElementStyles();
          },
          get: function get() {
            return this.fixedAdjustElement_;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCToolbar(root);
          }
        }]);
        return MDCToolbar;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(111);
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
      var MDCToolbarFoundation = function(_MDCFoundation) {
        _inherits(MDCToolbarFoundation, _MDCFoundation);
        _createClass(MDCToolbarFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["a"];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["c"];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__constants__["b"];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              hasClass: function hasClass() {
                return (false);
              },
              addClass: function addClass() {},
              removeClass: function removeClass() {},
              registerScrollHandler: function registerScrollHandler() {},
              deregisterScrollHandler: function deregisterScrollHandler() {},
              registerResizeHandler: function registerResizeHandler() {},
              deregisterResizeHandler: function deregisterResizeHandler() {},
              getViewportWidth: function getViewportWidth() {
                return (0);
              },
              getViewportScrollY: function getViewportScrollY() {
                return (0);
              },
              getOffsetHeight: function getOffsetHeight() {
                return (0);
              },
              getFirstRowElementOffsetHeight: function getFirstRowElementOffsetHeight() {
                return (0);
              },
              notifyChange: function notifyChange() {},
              setStyle: function setStyle() {},
              setStyleForTitleElement: function setStyleForTitleElement() {},
              setStyleForFlexibleRowElement: function setStyleForFlexibleRowElement() {},
              setStyleForFixedAdjustElement: function setStyleForFixedAdjustElement() {}
            };
          }
        }]);
        function MDCToolbarFoundation(adapter) {
          _classCallCheck(this, MDCToolbarFoundation);
          var _this = _possibleConstructorReturn(this, (MDCToolbarFoundation.__proto__ || Object.getPrototypeOf(MDCToolbarFoundation)).call(this, _extends(MDCToolbarFoundation.defaultAdapter, adapter)));
          _this.resizeHandler_ = function() {
            return _this.checkRowHeight_();
          };
          _this.scrollHandler_ = function() {
            return _this.updateToolbarStyles_();
          };
          _this.checkRowHeightFrame_ = 0;
          _this.scrollFrame_ = 0;
          _this.executedLastChange_ = false;
          _this.calculations_ = {
            toolbarRowHeight: 0,
            toolbarRatio: 0,
            flexibleExpansionRatio: 0,
            maxTranslateYRatio: 0,
            scrollThresholdRatio: 0,
            toolbarHeight: 0,
            flexibleExpansionHeight: 0,
            maxTranslateYDistance: 0,
            scrollThreshold: 0
          };
          _this.fixed_ = false;
          _this.fixedLastrow_ = false;
          _this.hasFlexibleRow_ = false;
          _this.useFlexDefaultBehavior_ = false;
          return _this;
        }
        _createClass(MDCToolbarFoundation, [{
          key: 'init',
          value: function init() {
            this.fixed_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED);
            this.fixedLastrow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FIXED_LASTROW) & this.fixed_;
            this.hasFlexibleRow_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.TOOLBAR_ROW_FLEXIBLE);
            if (this.hasFlexibleRow_) {
              this.useFlexDefaultBehavior_ = this.adapter_.hasClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR);
            }
            this.initKeyRatio_();
            this.setKeyHeights_();
            this.adapter_.registerResizeHandler(this.resizeHandler_);
            this.adapter_.registerScrollHandler(this.scrollHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            this.adapter_.deregisterScrollHandler(this.scrollHandler_);
          }
        }, {
          key: 'updateAdjustElementStyles',
          value: function updateAdjustElementStyles() {
            if (this.fixed_) {
              this.adapter_.setStyleForFixedAdjustElement('margin-top', this.calculations_.toolbarHeight + 'px');
            }
          }
        }, {
          key: 'getFlexibleExpansionRatio_',
          value: function getFlexibleExpansionRatio_(scrollTop) {
            var delta = 0.0001;
            return Math.max(0, 1 - scrollTop / (this.calculations_.flexibleExpansionHeight + delta));
          }
        }, {
          key: 'checkRowHeight_',
          value: function checkRowHeight_() {
            var _this2 = this;
            cancelAnimationFrame(this.checkRowHeightFrame_);
            this.checkRowHeightFrame_ = requestAnimationFrame(function() {
              return _this2.setKeyHeights_();
            });
          }
        }, {
          key: 'setKeyHeights_',
          value: function setKeyHeights_() {
            var newToolbarRowHeight = this.getRowHeight_();
            if (newToolbarRowHeight !== this.calculations_.toolbarRowHeight) {
              this.calculations_.toolbarRowHeight = newToolbarRowHeight;
              this.calculations_.toolbarHeight = this.calculations_.toolbarRatio * this.calculations_.toolbarRowHeight;
              this.calculations_.flexibleExpansionHeight = this.calculations_.flexibleExpansionRatio * this.calculations_.toolbarRowHeight;
              this.calculations_.maxTranslateYDistance = this.calculations_.maxTranslateYRatio * this.calculations_.toolbarRowHeight;
              this.calculations_.scrollThreshold = this.calculations_.scrollThresholdRatio * this.calculations_.toolbarRowHeight;
              this.updateAdjustElementStyles();
              this.updateToolbarStyles_();
            }
          }
        }, {
          key: 'updateToolbarStyles_',
          value: function updateToolbarStyles_() {
            var _this3 = this;
            cancelAnimationFrame(this.scrollFrame_);
            this.scrollFrame_ = requestAnimationFrame(function() {
              var scrollTop = _this3.adapter_.getViewportScrollY();
              var hasScrolledOutOfThreshold = _this3.scrolledOutOfThreshold_(scrollTop);
              if (hasScrolledOutOfThreshold && _this3.executedLastChange_) {
                return;
              }
              var flexibleExpansionRatio = _this3.getFlexibleExpansionRatio_(scrollTop);
              _this3.updateToolbarFlexibleState_(flexibleExpansionRatio);
              if (_this3.fixedLastrow_) {
                _this3.updateToolbarFixedState_(scrollTop);
              }
              if (_this3.hasFlexibleRow_) {
                _this3.updateFlexibleRowElementStyles_(flexibleExpansionRatio);
              }
              _this3.executedLastChange_ = hasScrolledOutOfThreshold;
              _this3.adapter_.notifyChange({flexibleExpansionRatio: flexibleExpansionRatio});
            });
          }
        }, {
          key: 'scrolledOutOfThreshold_',
          value: function scrolledOutOfThreshold_(scrollTop) {
            return scrollTop > this.calculations_.scrollThreshold;
          }
        }, {
          key: 'initKeyRatio_',
          value: function initKeyRatio_() {
            var toolbarRowHeight = this.getRowHeight_();
            var firstRowMaxRatio = this.adapter_.getFirstRowElementOffsetHeight() / toolbarRowHeight;
            this.calculations_.toolbarRatio = this.adapter_.getOffsetHeight() / toolbarRowHeight;
            this.calculations_.flexibleExpansionRatio = firstRowMaxRatio - 1;
            this.calculations_.maxTranslateYRatio = this.fixedLastrow_ ? this.calculations_.toolbarRatio - firstRowMaxRatio : 0;
            this.calculations_.scrollThresholdRatio = (this.fixedLastrow_ ? this.calculations_.toolbarRatio : firstRowMaxRatio) - 1;
          }
        }, {
          key: 'getRowHeight_',
          value: function getRowHeight_() {
            var breakpoint = MDCToolbarFoundation.numbers.TOOLBAR_MOBILE_BREAKPOINT;
            return this.adapter_.getViewportWidth() < breakpoint ? MDCToolbarFoundation.numbers.TOOLBAR_ROW_MOBILE_HEIGHT : MDCToolbarFoundation.numbers.TOOLBAR_ROW_HEIGHT;
          }
        }, {
          key: 'updateToolbarFlexibleState_',
          value: function updateToolbarFlexibleState_(flexibleExpansionRatio) {
            this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
            this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
            if (flexibleExpansionRatio === 1) {
              this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MAX);
            } else if (flexibleExpansionRatio === 0) {
              this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FLEXIBLE_MIN);
            }
          }
        }, {
          key: 'updateToolbarFixedState_',
          value: function updateToolbarFixedState_(scrollTop) {
            var translateDistance = Math.max(0, Math.min(scrollTop - this.calculations_.flexibleExpansionHeight, this.calculations_.maxTranslateYDistance));
            this.adapter_.setStyle('transform', 'translateY(' + -translateDistance + 'px)');
            if (translateDistance === this.calculations_.maxTranslateYDistance) {
              this.adapter_.addClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
            } else {
              this.adapter_.removeClass(MDCToolbarFoundation.cssClasses.FIXED_AT_LAST_ROW);
            }
          }
        }, {
          key: 'updateFlexibleRowElementStyles_',
          value: function updateFlexibleRowElementStyles_(flexibleExpansionRatio) {
            if (this.fixed_) {
              var height = this.calculations_.flexibleExpansionHeight * flexibleExpansionRatio;
              this.adapter_.setStyleForFlexibleRowElement('height', height + this.calculations_.toolbarRowHeight + 'px');
            }
            if (this.useFlexDefaultBehavior_) {
              this.updateElementStylesDefaultBehavior_(flexibleExpansionRatio);
            }
          }
        }, {
          key: 'updateElementStylesDefaultBehavior_',
          value: function updateElementStylesDefaultBehavior_(flexibleExpansionRatio) {
            var maxTitleSize = MDCToolbarFoundation.numbers.MAX_TITLE_SIZE;
            var minTitleSize = MDCToolbarFoundation.numbers.MIN_TITLE_SIZE;
            var currentTitleSize = (maxTitleSize - minTitleSize) * flexibleExpansionRatio + minTitleSize;
            this.adapter_.setStyleForTitleElement('font-size', currentTitleSize + 'rem');
          }
        }]);
        return MDCToolbarFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      __webpack_exports__["a"] = (MDCToolbarFoundation);
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
        FIXED: 'mdc-toolbar--fixed',
        FIXED_LASTROW: 'mdc-toolbar--fixed-lastrow-only',
        FIXED_AT_LAST_ROW: 'mdc-toolbar--fixed-at-last-row',
        TOOLBAR_ROW_FLEXIBLE: 'mdc-toolbar--flexible',
        FLEXIBLE_DEFAULT_BEHAVIOR: 'mdc-toolbar--flexible-default-behavior',
        FLEXIBLE_MAX: 'mdc-toolbar--flexible-space-maximized',
        FLEXIBLE_MIN: 'mdc-toolbar--flexible-space-minimized'
      };
      var strings = {
        TITLE_SELECTOR: '.mdc-toolbar__title',
        FIRST_ROW_SELECTOR: '.mdc-toolbar__row:first-child',
        CHANGE_EVENT: 'MDCToolbar:change'
      };
      var numbers = {
        MAX_TITLE_SIZE: 2.125,
        MIN_TITLE_SIZE: 1.25,
        TOOLBAR_ROW_HEIGHT: 64,
        TOOLBAR_ROW_MOBILE_HEIGHT: 56,
        TOOLBAR_MOBILE_BREAKPOINT: 600
      };
    }), (function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
      __webpack_exports__["applyPassive"] = applyPassive;
      var supportsPassive_ = void 0;
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
    })]);
  });
})(require('process'));
