"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Image extends jpf_1.UiElement {
    constructor(options) {
        super("img", "Image", options);
    }
    build() {
        super.build();
        ko.applyBindingsToNode(this.element, {
            attr: {
                src: this.options.src,
                alt: this.options.alt
            }
        });
    }
}
exports.Image = Image;
//# sourceMappingURL=image.js.map