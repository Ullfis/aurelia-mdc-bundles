/* */ 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging"], function (require, exports, aurelia_framework_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcCard = (function () {
        function MdcCard(element) {
            this.element = element;
            this.cssString = '';
            this.log = aurelia_logging_1.getLogger('mdc-card');
        }
        MdcCard.prototype.bind = function () { };
        MdcCard.prototype.unbind = function () { };
        MdcCard.prototype.attached = function () {
            this.createCss();
        };
        MdcCard.prototype.heightChanged = function (newValue) {
            this.createCss();
        };
        MdcCard.prototype.widthChanged = function (newValue) {
            this.createCss();
        };
        MdcCard.prototype.createCss = function () {
            var value = '';
            if (this.height && this.height.length > 0) {
                value += 'height:' + this.height + ';';
            }
            if (this.width && this.width.length > 0) {
                value += 'width:' + this.width + ';';
            }
            this.cssString = value;
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcCard.prototype, "height", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcCard.prototype, "width", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcCard.prototype, "class", void 0);
        MdcCard = __decorate([
            aurelia_framework_1.customElement('mdc-card'),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], MdcCard);
        return MdcCard;
    }());
    exports.MdcCard = MdcCard;
});
