"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const inputElement_1 = require("../inputElement");
class Number extends inputElement_1.InputElement {
    constructor(options, elementType = "InputNumber", inputElementType = "number") {
        super(elementType, inputElementType, options);
    }
    innerSetValue(value, setElement, triggerOnchange, setObservable) {
        if (this.options.checkValidity && !this.options.checkValidity(this.innerValue, value)) {
            value = this.innerValue;
            setElement = true;
            triggerOnchange = false;
        }
        this.innerValue = value;
        if (setElement && this.element) {
            this.element.value = value.toString();
        }
        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(value);
        }
        if (setObservable) {
            const optionsValue = this.options.value;
            if (ko.isObservable(optionsValue)) {
                optionsValue(value);
            }
        }
    }
    build() {
        super.build();
        if (this.options.valueUpdateMode === "OnInput") {
            this.element.addEventListener("input", () => {
                if (this.element.checkValidity()) {
                    this.innerSetValue(parseFloat(this.element.value), false, true, true);
                }
            });
        }
        else {
            this.element.addEventListener("change", () => {
                if (this.element.checkValidity()) {
                    this.innerSetValue(parseFloat(this.element.value), false, true, true);
                }
            });
        }
        const value = this.options.value;
        this.innerValue = ko.unwrap(value);
        if (this.innerValue) {
            this.element.value = this.innerValue.toString();
        }
        if (ko.isObservable(value)) {
            this.addSubscription(value, (newValue) => {
                this.innerSetValue(newValue, true, false, false);
            });
        }
    }
    getValue() {
        return this.innerValue;
    }
    setValue(value, triggerChange = false) {
        this.innerSetValue(value, true, triggerChange, true);
    }
}
exports.Number = Number;
//# sourceMappingURL=number.js.map