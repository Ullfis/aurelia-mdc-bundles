/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["tabs"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["tabs"] = factory();
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
      return __webpack_require__(__webpack_require__.s = 99);
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
      100: (function(module, __webpack_exports__, __webpack_require__) {
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
        var __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__ = __webpack_require__(104);
        __webpack_require__.d(__webpack_exports__, "MDCTabBarScrollerFoundation", function() {
          return __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__["b"];
        });
        __webpack_require__.d(__webpack_exports__, "MDCTabBarScroller", function() {
          return __WEBPACK_IMPORTED_MODULE_2__tab_bar_scroller__["a"];
        });
      }),
      101: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      102: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__material_animation__ = __webpack_require__(8);
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
              this.adapter_.setStyleForIndicator(Object(__WEBPACK_IMPORTED_MODULE_1__material_animation__["getCorrectPropertyName"])(window, 'transform'), transformValue);
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
      }),
      103: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      104: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MDCTabBarScroller;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_animation__ = __webpack_require__(8);
        var __WEBPACK_IMPORTED_MODULE_1__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_2__tab_bar__ = __webpack_require__(28);
        var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(105);
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
                return new __WEBPACK_IMPORTED_MODULE_2__tab_bar__["a"](root);
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
                  _this2.tabBarEl_.style.setProperty(Object(__WEBPACK_IMPORTED_MODULE_0__material_animation__["getCorrectPropertyName"])(window, 'transform'), value);
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
      }),
      105: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(106);
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
      }),
      106: (function(module, __webpack_exports__, __webpack_require__) {
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
      26: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MDCTab;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(27);
        var __WEBPACK_IMPORTED_MODULE_3__foundation__ = __webpack_require__(101);
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
            _this.ripple_ = __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].attachTo(_this.root_);
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
      }),
      27: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return cssClasses;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return strings;
        });
        var cssClasses = {ACTIVE: 'mdc-tab--active'};
        var strings = {SELECTED_EVENT: 'MDCTab:selected'};
      }),
      28: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MDCTabBar;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__tab__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(102);
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
                return new __WEBPACK_IMPORTED_MODULE_1__tab__["a"](el);
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
                  return _this3.listen(__WEBPACK_IMPORTED_MODULE_1__tab__["b"].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
                },
                unbindOnMDCTabSelectedEvent: function unbindOnMDCTabSelectedEvent() {
                  return _this3.unlisten(__WEBPACK_IMPORTED_MODULE_1__tab__["b"].strings.SELECTED_EVENT, _this3.tabSelectedHandler_);
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
      8: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "transformStyleProperties", function() {
          return transformStyleProperties;
        });
        __webpack_require__.d(__webpack_exports__, "getCorrectEventName", function() {
          return getCorrectEventName;
        });
        __webpack_require__.d(__webpack_exports__, "getCorrectPropertyName", function() {
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
      }),
      99: (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(100);
      })
    });
  });
})(require('process'));
