"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class InputElement extends jpf_1.UiElement {
    constructor(elementType, inputType, options) {
        super("input", elementType, options);
        this.inputType = inputType;
    }
    build() {
        super.build();
        this.element.type = this.inputType;
        ko.applyBindingsToNode(this.element, {
            attr: {
                disabled: this.options.disabled,
                placeholder: this.options.placeholder
            }
        });
    }
}
exports.InputElement = InputElement;
//# sourceMappingURL=inputElement.js.map