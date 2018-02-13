/* */ 
define(["require", "exports", "@material/chips", "aurelia-logging"], function (require, exports, chips_1, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdcChipSet = (function () {
        function MdcChipSet(element) {
            this.element = element;
            this.log = aurelia_logging_1.getLogger('mdc-chip-set');
        }
        MdcChipSet.prototype.bind = function () { };
        MdcChipSet.prototype.unbind = function () { };
        MdcChipSet.prototype.attached = function () {
            this.mdcElement = new chips_1.MDCChipSet(this.chipSetElement);
        };
        MdcChipSet.prototype.detached = function () {
            if (this.mdcElement) {
                this.mdcElement.destroy();
            }
        };
        return MdcChipSet;
    }());
    exports.MdcChipSet = MdcChipSet;
});
