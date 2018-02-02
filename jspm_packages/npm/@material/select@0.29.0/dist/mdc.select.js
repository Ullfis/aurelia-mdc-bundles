/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["select"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["select"] = factory();
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
      return __webpack_require__(__webpack_require__.s = 88);
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
      10: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "getTransformPropertyName", function() {
          return getTransformPropertyName;
        });
        __webpack_require__.d(__webpack_exports__, "clamp", function() {
          return clamp;
        });
        __webpack_require__.d(__webpack_exports__, "bezierProgress", function() {
          return bezierProgress;
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
      }),
      11: (function(module, __webpack_exports__, __webpack_require__) {
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
          ROOT: 'mdc-simple-menu',
          OPEN: 'mdc-simple-menu--open',
          ANIMATING_OPEN: 'mdc-simple-menu--animating-open',
          ANIMATING_CLOSED: 'mdc-simple-menu--animating-closed',
          LIST_ITEM: 'mdc-list-item'
        };
        var strings = {
          ITEMS_SELECTOR: '.mdc-simple-menu__items',
          SELECTED_EVENT: 'MDCSimpleMenu:selected',
          CANCEL_EVENT: 'MDCSimpleMenu:cancel',
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
      }),
      13: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_1__simple__ = __webpack_require__(15);
        __webpack_require__.d(__webpack_exports__, "MDCSimpleMenu", function() {
          return __WEBPACK_IMPORTED_MODULE_1__simple__["d"];
        });
        __webpack_require__.d(__webpack_exports__, "MDCSimpleMenuFoundation", function() {
          return __WEBPACK_IMPORTED_MODULE_1__simple__["e"];
        });
        __webpack_require__.d(__webpack_exports__, "CornerBit", function() {
          return __WEBPACK_IMPORTED_MODULE_1__simple__["c"];
        });
        __webpack_require__.d(__webpack_exports__, "Corner", function() {
          return __WEBPACK_IMPORTED_MODULE_1__simple__["b"];
        });
        __webpack_require__.d(__webpack_exports__, "AnchorMargin", function() {
          return __WEBPACK_IMPORTED_MODULE_1__simple__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "util", function() {
          return __WEBPACK_IMPORTED_MODULE_0__util__;
        });
      }),
      15: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return MDCSimpleMenu;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(10);
        var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(16);
        var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(11);
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["b"];
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return __WEBPACK_IMPORTED_MODULE_3__constants__["a"];
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
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
        var MDCSimpleMenu = function(_MDCComponent) {
          _inherits(MDCSimpleMenu, _MDCComponent);
          function MDCSimpleMenu() {
            var _ref;
            _classCallCheck(this, MDCSimpleMenu);
            for (var _len = arguments.length,
                args = Array(_len),
                _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var _this = _possibleConstructorReturn(this, (_ref = MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).call.apply(_ref, [this].concat(args)));
            _this.previousFocus_;
            return _this;
          }
          _createClass(MDCSimpleMenu, [{
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
                eventTargetHasClass: function eventTargetHasClass(target, className) {
                  return target.classList.contains(className);
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
                  _this2.root_.style[Object(__WEBPACK_IMPORTED_MODULE_1__util__["getTransformPropertyName"])(window) + '-origin'] = origin;
                },
                setPosition: function setPosition(position) {
                  _this2.root_.style.left = 'left' in position ? position.left : null;
                  _this2.root_.style.right = 'right' in position ? position.right : null;
                  _this2.root_.style.top = 'top' in position ? position.top : null;
                  _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
                },
                setMaxHeight: function setMaxHeight(height) {
                  _this2.root_.style.maxHeight = height;
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
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCSimpleMenu(root);
            }
          }]);
          return MDCSimpleMenu;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a"]);
      }),
      16: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return MDCSimpleMenuFoundation;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return AnchorMargin;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(17);
        var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(11);
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
        var MDCSimpleMenuFoundation = function(_MDCFoundation) {
          _inherits(MDCSimpleMenuFoundation, _MDCFoundation);
          _createClass(MDCSimpleMenuFoundation, null, [{
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
                eventTargetHasClass: function eventTargetHasClass() {},
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
                setMaxHeight: function setMaxHeight() {}
              });
            }
          }]);
          function MDCSimpleMenuFoundation(adapter) {
            _classCallCheck(this, MDCSimpleMenuFoundation);
            var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));
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
            return _this;
          }
          _createClass(MDCSimpleMenuFoundation, [{
            key: 'init',
            value: function init() {
              var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
                  ROOT = _MDCSimpleMenuFoundat.ROOT,
                  OPEN = _MDCSimpleMenuFoundat.OPEN;
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
            key: 'focusOnOpen_',
            value: function focusOnOpen_(focusIndex) {
              if (focusIndex === null) {
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
                if (this.adapter_.eventTargetHasClass(el, __WEBPACK_IMPORTED_MODULE_2__constants__["c"].LIST_ITEM)) {
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
                this.handlePossibleSelected_(evt);
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
              var MARGIN_TO_EDGE = MDCSimpleMenuFoundation.numbers.MARGIN_TO_EDGE;
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
              this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING_OPEN);
              this.animationRequestId_ = requestAnimationFrame(function() {
                _this3.dimensions_ = _this3.adapter_.getInnerDimensions();
                _this3.autoPosition_();
                _this3.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
                _this3.focusOnOpen_(focusIndex);
                _this3.adapter_.registerBodyClickHandler(_this3.documentClickHandler_);
                _this3.openAnimationEndTimerId_ = setTimeout(function() {
                  _this3.openAnimationEndTimerId_ = 0;
                  _this3.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING_OPEN);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d"].TRANSITION_OPEN_DURATION);
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
              this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING_CLOSED);
              requestAnimationFrame(function() {
                _this4.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
                _this4.closeAnimationEndTimerId_ = setTimeout(function() {
                  _this4.closeAnimationEndTimerId_ = 0;
                  _this4.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING_CLOSED);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d"].TRANSITION_CLOSE_DURATION);
              });
              this.isOpen_ = false;
              this.adapter_.restoreFocus();
            }
          }, {
            key: 'isOpen',
            value: function isOpen() {
              return this.isOpen_;
            }
          }]);
          return MDCSimpleMenuFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
      }),
      17: (function(module, __webpack_exports__, __webpack_require__) {
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
        var MDCSimpleMenuAdapter = function() {
          function MDCSimpleMenuAdapter() {
            _classCallCheck(this, MDCSimpleMenuAdapter);
          }
          _createClass(MDCSimpleMenuAdapter, [{
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
            key: "eventTargetHasClass",
            value: function eventTargetHasClass(target, className) {}
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
          }]);
          return MDCSimpleMenuAdapter;
        }();
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
      23: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      4: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      5: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      88: (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(89);
      }),
      89: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "MDCSelect", function() {
          return MDCSelect;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__(13);
        var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(90);
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
                return new __WEBPACK_IMPORTED_MODULE_2__material_menu__["MDCSimpleMenu"](el);
              };
              this.surface_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].SURFACE_SELECTOR);
              this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].LABEL_SELECTOR);
              this.bottomLine_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].BOTTOM_LINE_SELECTOR);
              this.selectedText_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].SELECTED_TEXT_SELECTOR);
              this.menuEl_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b"].MENU_SELECTOR);
              this.menu_ = menuFactory(this.menuEl_);
              this.ripple = new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](this.surface_);
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
        }(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);
      }),
      90: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(23);
        var __WEBPACK_IMPORTED_MODULE_2__material_menu__ = __webpack_require__(13);
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
              this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["MDCSimpleMenuFoundation"].strings.SELECTED_EVENT, this.selectionHandler_);
              this.adapter_.registerMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["MDCSimpleMenuFoundation"].strings.CANCEL_EVENT, this.cancelHandler_);
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
              this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["MDCSimpleMenuFoundation"].strings.SELECTED_EVENT, this.selectionHandler_);
              this.adapter_.deregisterMenuInteractionHandler(__WEBPACK_IMPORTED_MODULE_2__material_menu__["MDCSimpleMenuFoundation"].strings.CANCEL_EVENT, this.cancelHandler_);
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
        }(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);
        __webpack_exports__["a"] = (MDCSelectFoundation);
      })
    });
  });
})(require('process'));
