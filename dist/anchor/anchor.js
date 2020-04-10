"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Anchor extends jpf_1.UiElement {
    constructor(options) {
        super("a", "Anchor", options);
    }
    build() {
        super.build();
        ko.applyBindingsToNode(this.element, {
            attr: {
                href: this.options.href
            }
        });
    }
}
exports.Anchor = Anchor;
//# sourceMappingURL=anchor.js.map