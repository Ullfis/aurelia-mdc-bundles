/* */ 
"format cjs";
(function(process) {
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
      module.exports = factory();
    else if (typeof define === 'function' && define.amd)
      define([], factory);
    else if (typeof exports === 'object')
      exports["dialog"] = factory();
    else
      root["mdc"] = root["mdc"] || {}, root["mdc"]["dialog"] = factory();
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
      return __webpack_require__(__webpack_require__.s = 46);
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
      46: (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(47);
      }),
      47: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_require__.d(__webpack_exports__, "MDCDialog", function() {
          return MDCDialog;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(48);
        var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(50);
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
                this.footerBtnRipples_.push(new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](footerBtn));
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
        }(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCComponent"]);
      }),
      48: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base__ = __webpack_require__(4);
        var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(49);
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
        }(__WEBPACK_IMPORTED_MODULE_0__material_base__["MDCFoundation"]);
        __webpack_exports__["a"] = (MDCDialogFoundation);
      }),
      49: (function(module, __webpack_exports__, __webpack_require__) {
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
      50: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {value: true});
        __webpack_exports__["createFocusTrapInstance"] = createFocusTrapInstance;
        var __WEBPACK_IMPORTED_MODULE_0_focus_trap__ = __webpack_require__(51);
        var __WEBPACK_IMPORTED_MODULE_0_focus_trap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_focus_trap__);
        function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
          var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_focus_trap___default.a;
          return focusTrapFactory(surfaceEl, {
            initialFocus: acceptButtonEl,
            clickOutsideDeactivates: true
          });
        }
      }),
      51: (function(module, exports, __webpack_require__) {
        var tabbable = __webpack_require__(52);
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
      }),
      52: (function(module, exports) {
        module.exports = function(el, options) {
          options = options || {};
          var elementDocument = el.ownerDocument;
          var basicTabbables = [];
          var orderedTabbables = [];
          var isUnavailable = createIsUnavailable(elementDocument);
          var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];
          var candidates = el.querySelectorAll(candidateSelectors);
          if (options.includeContainer) {
            var matches = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            if (candidateSelectors.some(function(candidateSelector) {
              return matches.call(el, candidateSelector);
            })) {
              candidates = Array.prototype.slice.apply(candidates);
              candidates.unshift(el);
            }
          }
          var candidate,
              candidateIndex;
          for (var i = 0,
              l = candidates.length; i < l; i++) {
            candidate = candidates[i];
            candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;
            if (candidateIndex < 0 || (candidate.tagName === 'INPUT' && candidate.type === 'hidden') || candidate.disabled || isUnavailable(candidate, elementDocument)) {
              continue;
            }
            if (candidateIndex === 0) {
              basicTabbables.push(candidate);
            } else {
              orderedTabbables.push({
                index: i,
                tabIndex: candidateIndex,
                node: candidate
              });
            }
          }
          var tabbableNodes = orderedTabbables.sort(function(a, b) {
            return a.tabIndex === b.tabIndex ? a.index - b.index : a.tabIndex - b.tabIndex;
          }).map(function(a) {
            return a.node;
          });
          Array.prototype.push.apply(tabbableNodes, basicTabbables);
          return tabbableNodes;
        };
        function createIsUnavailable(elementDocument) {
          var isOffCache = [];
          function isOff(node, nodeComputedStyle) {
            if (node === elementDocument.documentElement)
              return false;
            for (var i = 0,
                length = isOffCache.length; i < length; i++) {
              if (isOffCache[i][0] === node)
                return isOffCache[i][1];
            }
            nodeComputedStyle = nodeComputedStyle || elementDocument.defaultView.getComputedStyle(node);
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
            if (node === elementDocument.documentElement)
              return false;
            var computedStyle = elementDocument.defaultView.getComputedStyle(node);
            if (isOff(node, computedStyle))
              return true;
            return computedStyle.visibility === 'hidden';
          };
        }
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
      })
    });
  });
})(require('process'));
