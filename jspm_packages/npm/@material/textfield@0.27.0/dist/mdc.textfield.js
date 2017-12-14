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
        __webpack_require__.d(__webpack_exports__, "MDCTextField", function() {
          return MDCTextField;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__material_ripple__ = __webpack_require__(5);
        var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(2);
        var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(25);
        var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(103);
        var __WEBPACK_IMPORTED_MODULE_6__bottom_line__ = __webpack_require__(104);
        var __WEBPACK_IMPORTED_MODULE_7__helper_text__ = __webpack_require__(105);
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
            _this.label_;
            _this.ripple;
            _this.bottomLine_;
            _this.helperText_;
            _this.icon_;
            return _this;
          }
          _createClass(MDCTextField, [{
            key: 'initialize',
            value: function initialize() {
              var _this2 = this;
              var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function(el, foundation) {
                return new __WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"](el, foundation);
              };
              var bottomLineFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(el) {
                return new __WEBPACK_IMPORTED_MODULE_6__bottom_line__["a"](el);
              };
              this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].INPUT_SELECTOR);
              this.label_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].LABEL_SELECTOR);
              this.ripple = null;
              if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].BOX)) {
                var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
                var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple__["MDCRipple"].createAdapter(this), {
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
                this.ripple = rippleFactory(this.root_, foundation);
              }
              ;
              if (!this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].TEXTAREA)) {
                var bottomLineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].BOTTOM_LINE_SELECTOR);
                if (bottomLineElement) {
                  this.bottomLine_ = bottomLineFactory(bottomLineElement);
                }
              }
              ;
              if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].ARIA_CONTROLS)) {
                var helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].ARIA_CONTROLS));
                if (helperTextElement) {
                  this.helperText_ = new __WEBPACK_IMPORTED_MODULE_7__helper_text__["a"](helperTextElement);
                }
              }
              if (!this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["a"].TEXT_FIELD_ICON)) {
                this.icon_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["b"].ICON_SELECTOR);
              }
              ;
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
              _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
            }
          }, {
            key: 'initialSyncWithDom',
            value: function initialSyncWithDom() {
              this.disabled = this.input_.disabled;
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
                addClassToLabel: function addClassToLabel(className) {
                  var label = _this3.label_;
                  if (label) {
                    label.classList.add(className);
                  }
                },
                removeClassFromLabel: function removeClassFromLabel(className) {
                  var label = _this3.label_;
                  if (label) {
                    label.classList.remove(className);
                  }
                },
                eventTargetHasClass: function eventTargetHasClass(target, className) {
                  return target.classList.contains(className);
                },
                registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.addEventListener(evtType, handler);
                },
                deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.removeEventListener(evtType, handler);
                },
                notifyIconAction: function notifyIconAction() {
                  return _this3.emit(__WEBPACK_IMPORTED_MODULE_5__foundation__["a"].strings.ICON_EVENT, {});
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
                }
              }, this.getInputAdapterMethods_(), this.getIconAdapterMethods_()), this.getFoundationMap_());
            }
          }, {
            key: 'getIconAdapterMethods_',
            value: function getIconAdapterMethods_() {
              var _this4 = this;
              return {setIconAttr: function setIconAttr(name, value) {
                  if (_this4.icon_) {
                    _this4.icon_.setAttribute(name, value);
                  }
                }};
            }
          }, {
            key: 'getInputAdapterMethods_',
            value: function getInputAdapterMethods_() {
              var _this5 = this;
              return {
                registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
                  return _this5.input_.addEventListener(evtType, handler);
                },
                deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
                  return _this5.input_.removeEventListener(evtType, handler);
                },
                getNativeInput: function getNativeInput() {
                  return _this5.input_;
                }
              };
            }
          }, {
            key: 'getFoundationMap_',
            value: function getFoundationMap_() {
              return {
                bottomLine: this.bottomLine_ ? this.bottomLine_.foundation : undefined,
                helperText: this.helperText_ ? this.helperText_.foundation : undefined
              };
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
            set: function set(valid) {
              this.foundation_.setValid(valid);
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
      }),
      101: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return strings;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return cssClasses;
        });
        var strings = {ANIMATION_END_EVENT: 'MDCTextFieldBottomLine:animation-end'};
        var cssClasses = {BOTTOM_LINE_ACTIVE: 'mdc-text-field__bottom-line--active'};
      }),
      102: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      103: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(26);
        var __WEBPACK_IMPORTED_MODULE_2__bottom_line_foundation__ = __webpack_require__(18);
        var __WEBPACK_IMPORTED_MODULE_3__helper_text_foundation__ = __webpack_require__(19);
        var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(25);
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
              return __WEBPACK_IMPORTED_MODULE_4__constants__["a"];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_4__constants__["b"];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return ({
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                addClassToLabel: function addClassToLabel() {},
                removeClassFromLabel: function removeClassFromLabel() {},
                setIconAttr: function setIconAttr() {},
                eventTargetHasClass: function eventTargetHasClass() {},
                registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
                deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
                notifyIconAction: function notifyIconAction() {},
                registerInputInteractionHandler: function registerInputInteractionHandler() {},
                deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
                registerBottomLineEventHandler: function registerBottomLineEventHandler() {},
                deregisterBottomLineEventHandler: function deregisterBottomLineEventHandler() {},
                getNativeInput: function getNativeInput() {}
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
            _this.isFocused_ = false;
            _this.receivedUserInput_ = false;
            _this.useCustomValidityChecking_ = false;
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
            _this.textFieldInteractionHandler_ = function(evt) {
              return _this.handleTextFieldInteraction(evt);
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
              if (this.getNativeInput_().value) {
                this.adapter_.addClassToLabel(MDCTextFieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
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
            value: function handleTextFieldInteraction(evt) {
              if (this.adapter_.getNativeInput().disabled) {
                return;
              }
              this.receivedUserInput_ = true;
              var target = evt.target,
                  type = evt.type;
              var TEXT_FIELD_ICON = MDCTextFieldFoundation.cssClasses.TEXT_FIELD_ICON;
              var targetIsIcon = this.adapter_.eventTargetHasClass(target, TEXT_FIELD_ICON);
              var eventTriggersNotification = type === 'click' || evt.key === 'Enter' || evt.keyCode === 13;
              if (targetIsIcon && eventTriggersNotification) {
                this.adapter_.notifyIconAction();
              }
            }
          }, {
            key: 'activateFocus',
            value: function activateFocus() {
              var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
                  FOCUSED = _MDCTextFieldFoundati.FOCUSED,
                  LABEL_FLOAT_ABOVE = _MDCTextFieldFoundati.LABEL_FLOAT_ABOVE,
                  LABEL_SHAKE = _MDCTextFieldFoundati.LABEL_SHAKE;
              this.adapter_.addClass(FOCUSED);
              if (this.bottomLine_) {
                this.bottomLine_.activate();
              }
              this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
              this.adapter_.removeClassFromLabel(LABEL_SHAKE);
              if (this.helperText_) {
                this.helperText_.showToScreenReader();
              }
              this.isFocused_ = true;
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
              var _MDCTextFieldFoundati2 = MDCTextFieldFoundation.cssClasses,
                  FOCUSED = _MDCTextFieldFoundati2.FOCUSED,
                  LABEL_FLOAT_ABOVE = _MDCTextFieldFoundati2.LABEL_FLOAT_ABOVE,
                  LABEL_SHAKE = _MDCTextFieldFoundati2.LABEL_SHAKE;
              var input = this.getNativeInput_();
              this.isFocused_ = false;
              this.adapter_.removeClass(FOCUSED);
              this.adapter_.removeClassFromLabel(LABEL_SHAKE);
              if (!input.value && !this.isBadInput_()) {
                this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
                this.receivedUserInput_ = false;
              }
              if (!this.useCustomValidityChecking_) {
                this.changeValidity_(input.checkValidity());
              }
            }
          }, {
            key: 'changeValidity_',
            value: function changeValidity_(isValid) {
              var _MDCTextFieldFoundati3 = MDCTextFieldFoundation.cssClasses,
                  INVALID = _MDCTextFieldFoundati3.INVALID,
                  LABEL_SHAKE = _MDCTextFieldFoundati3.LABEL_SHAKE;
              if (isValid) {
                this.adapter_.removeClass(INVALID);
              } else {
                this.adapter_.addClassToLabel(LABEL_SHAKE);
                this.adapter_.addClass(INVALID);
              }
              if (this.helperText_) {
                this.helperText_.setValidity(isValid);
              }
            }
          }, {
            key: 'isBadInput_',
            value: function isBadInput_() {
              var input = this.getNativeInput_();
              return input.validity ? input.validity.badInput : input.badInput;
            }
          }, {
            key: 'isDisabled',
            value: function isDisabled() {
              return this.getNativeInput_().disabled;
            }
          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              var _MDCTextFieldFoundati4 = MDCTextFieldFoundation.cssClasses,
                  DISABLED = _MDCTextFieldFoundati4.DISABLED,
                  INVALID = _MDCTextFieldFoundati4.INVALID;
              this.getNativeInput_().disabled = disabled;
              if (disabled) {
                this.adapter_.addClass(DISABLED);
                this.adapter_.removeClass(INVALID);
                this.adapter_.setIconAttr('tabindex', '-1');
              } else {
                this.adapter_.removeClass(DISABLED);
                this.adapter_.setIconAttr('tabindex', '0');
              }
            }
          }, {
            key: 'setHelperTextContent',
            value: function setHelperTextContent(content) {
              if (this.helperText_) {
                this.helperText_.setContent(content);
              }
            }
          }, {
            key: 'getNativeInput_',
            value: function getNativeInput_() {
              return this.adapter_.getNativeInput() || {
                checkValidity: function checkValidity() {
                  return true;
                },
                value: '',
                disabled: false,
                badInput: false
              };
            }
          }, {
            key: 'setValid',
            value: function setValid(isValid) {
              this.useCustomValidityChecking_ = true;
              this.changeValidity_(isValid);
            }
          }]);
          return MDCTextFieldFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a"]);
        __webpack_exports__["a"] = (MDCTextFieldFoundation);
      }),
      104: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MDCTextFieldBottomLine;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(27);
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
      }),
      105: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return MDCTextFieldHelperText;
        });
        var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(28);
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
      }),
      18: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(27);
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
      }),
      19: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(28);
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
      25: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return cssClasses;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return strings;
        });
        var strings = {
          ARIA_CONTROLS: 'aria-controls',
          INPUT_SELECTOR: '.mdc-text-field__input',
          LABEL_SELECTOR: '.mdc-text-field__label',
          ICON_SELECTOR: '.mdc-text-field__icon',
          ICON_EVENT: 'MDCTextField:icon',
          BOTTOM_LINE_SELECTOR: '.mdc-text-field__bottom-line'
        };
        var cssClasses = {
          ROOT: 'mdc-text-field',
          UPGRADED: 'mdc-text-field--upgraded',
          DISABLED: 'mdc-text-field--disabled',
          FOCUSED: 'mdc-text-field--focused',
          INVALID: 'mdc-text-field--invalid',
          LABEL_FLOAT_ABOVE: 'mdc-text-field__label--float-above',
          LABEL_SHAKE: 'mdc-text-field__label--shake',
          BOX: 'mdc-text-field--box',
          TEXT_FIELD_ICON: 'mdc-text-field__icon',
          TEXTAREA: 'mdc-text-field--textarea'
        };
      }),
      26: (function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0__bottom_line_foundation__ = __webpack_require__(18);
        var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(19);
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
            key: 'addClassToLabel',
            value: function addClassToLabel(className) {}
          }, {
            key: 'removeClassFromLabel',
            value: function removeClassFromLabel(className) {}
          }, {
            key: 'setIconAttr',
            value: function setIconAttr(name, value) {}
          }, {
            key: 'eventTargetHasClass',
            value: function eventTargetHasClass(target, className) {}
          }, {
            key: 'registerTextFieldInteractionHandler',
            value: function registerTextFieldInteractionHandler(type, handler) {}
          }, {
            key: 'deregisterTextFieldInteractionHandler',
            value: function deregisterTextFieldInteractionHandler(type, handler) {}
          }, {
            key: 'notifyIconAction',
            value: function notifyIconAction() {}
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
          }]);
          return MDCTextFieldAdapter;
        }();
      }),
      27: (function(module, __webpack_exports__, __webpack_require__) {
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
      }),
      28: (function(module, __webpack_exports__, __webpack_require__) {
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
      99: (function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(100);
      })
    });
  });
})(require('process'));
