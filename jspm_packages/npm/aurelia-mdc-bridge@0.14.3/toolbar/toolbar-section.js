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
define(["require", "exports", "aurelia-framework", "../util"], function (require, exports, aurelia_framework_1, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcToolbarSection = (function () {
        function MdcToolbarSection() {
            this.start = false;
            this.end = false;
            this.fit = false;
        }
        MdcToolbarSection.prototype.bind = function () { };
        MdcToolbarSection.prototype.unbind = function () { };
        MdcToolbarSection.prototype.attached = function () {
            this.startChanged(this.start);
            this.endChanged(this.end);
            this.fitChanged(this.fit);
        };
        MdcToolbarSection.prototype.startChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-toolbar__section--align-start');
        };
        MdcToolbarSection.prototype.endChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-toolbar__section--align-end');
        };
        MdcToolbarSection.prototype.fitChanged = function (newValue) {
            var value = util.getBoolean(newValue);
            this.elementSection.classList[value ? 'add' : 'remove']('mdc-toolbar__section--shrink-to-fit');
        };
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", String)
        ], MdcToolbarSection.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbarSection.prototype, "start", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbarSection.prototype, "end", void 0);
        __decorate([
            aurelia_framework_1.bindable(),
            __metadata("design:type", Object)
        ], MdcToolbarSection.prototype, "fit", void 0);
        MdcToolbarSection = __decorate([
            aurelia_framework_1.containerless()
        ], MdcToolbarSection);
        return MdcToolbarSection;
    }());
    exports.MdcToolbarSection = MdcToolbarSection;
});
