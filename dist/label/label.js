"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Label extends jpf_1.UiElement {
    constructor(options) {
        super("label", "Label", options);
    }
    build() {
        super.build();
        ko.applyBindingsToNode(this.element, {
            attr: {
                for: this.options.for
            }
        });
    }
}
exports.Label = Label;
//# sourceMappingURL=label.js.map