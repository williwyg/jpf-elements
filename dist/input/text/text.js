"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const inputElement_1 = require("../inputElement");
class Text extends inputElement_1.InputElement {
    constructor(options, elementType = "InputText", inputElementType = "text") {
        super(elementType, inputElementType, options);
        const optionsText = this.options.text;
        this.internalText = ko.unwrap(optionsText);
        if (ko.isObservable(optionsText)) {
            optionsText.subscribe((newValue) => {
                this.innerSetText(newValue, true, false, false);
            });
        }
    }
    innerSetText(text, setElement, triggerOnchange, setObservable) {
        if (this.options.checkValidity && !this.options.checkValidity(this.internalText, text)) {
            text = this.internalText;
            setElement = true;
            triggerOnchange = false;
        }
        this.internalText = text;
        if (setElement && this.element) {
            this.element.value = text;
        }
        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(text);
        }
        if (setObservable) {
            const optionsText = this.options.text;
            if (ko.isObservable(optionsText)) {
                optionsText(text);
            }
        }
    }
    build() {
        super.build();
        if (this.internalText) {
            this.element.value = this.internalText;
        }
        if (this.options.valueUpdateMode === "OnInput") {
            this.element.addEventListener("input", () => {
                this.innerSetText(this.element.value, false, true, true);
            });
        }
        else {
            this.element.addEventListener("change", () => {
                this.innerSetText(this.element.value, false, true, true);
            });
        }
    }
    getText() {
        return this.internalText;
    }
    setText(text, triggerChange = false) {
        this.innerSetText(text, true, triggerChange, true);
    }
}
exports.Text = Text;
//# sourceMappingURL=text.js.map