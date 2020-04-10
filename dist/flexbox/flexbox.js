"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jpf_1 = require("jpf");
class Flexbox extends jpf_1.UiElement {
    constructor(options) {
        super("div", "Flexbox", options);
        this.setStyle({ display: "flex" }, true);
        const style = {};
        if (this.options.flexDirection) {
            style.flexDirection = this.options.flexDirection;
        }
        if (this.options.flexWrap) {
            style.flexWrap = this.options.flexWrap;
        }
        if (this.options.justifyContent) {
            style.justifyContent = this.options.justifyContent;
        }
        if (this.options.alignItems) {
            style.alignItems = this.options.alignItems;
        }
        if (this.options.alignContent) {
            style.alignContent = this.options.alignContent;
        }
        this.setStyle(style);
    }
}
exports.Flexbox = Flexbox;
//# sourceMappingURL=flexbox.js.map