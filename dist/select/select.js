"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const jpf_1 = require("jpf");
class Select extends jpf_1.UiElement {
    constructor(options) {
        super("select", "Select", options);
    }
    build() {
        super.build();
        const items = ko.unwrap(this.options.items);
        for (let item of items) {
            const option = document.createElement("option");
            const value = this.options.valueFunction(item);
            if (value) {
                option.value = value.toString();
            }
            option.text = this.options.textFunction(item);
            this.element.appendChild(option);
        }
        const optionsValue = this.options.selectedValue;
        if (ko.isObservable(optionsValue)) {
            optionsValue.subscribe((newValue) => {
                this.element.value = newValue;
            });
        }
        this.addEventListener("change", () => {
            const selectedItem = this.options.items[this.element.selectedIndex];
            const selectedValue = this.options.valueFunction(selectedItem);
            if (ko.isObservable(optionsValue)) {
                optionsValue(selectedValue);
            }
            if (this.options.onchange) {
                this.options.onchange(selectedValue);
            }
        });
    }
}
exports.Select = Select;
//# sourceMappingURL=select.js.map