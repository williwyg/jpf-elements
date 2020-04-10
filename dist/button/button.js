"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Button extends jpf_1.UiElement {
    constructor(options) {
        super("button", "Button", options);
    }
    build() {
        super.build();
        const content = this.options.content;
        if (content instanceof jpf_1.UiElement) {
            this.element.appendChild(content.render());
        }
        else {
            ko.applyBindingsToNode(this.element, { text: content });
        }
        if (ko.unwrap(this.options.disabled)) {
            ko.applyBindingsToNode(this.element, { attr: { disabled: this.options.disabled } });
        }
    }
}
exports.Button = Button;
//# sourceMappingURL=button.js.map