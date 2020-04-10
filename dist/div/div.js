"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Div extends jpf_1.UiElement {
    constructor(options) {
        super("div", "Div", options);
    }
    build() {
        super.build();
        if (this.options.text) {
            if (this.options.isHtml) {
                ko.applyBindingsToNode(this.element, { html: this.options.text });
            }
            else {
                ko.applyBindingsToNode(this.element, { text: this.options.text });
            }
        }
    }
}
exports.Div = Div;
//# sourceMappingURL=div.js.map