"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const inputElement_1 = require("../inputElement");
class CheckBox extends inputElement_1.InputElement {
    constructor(options) {
        super("CheckBox", "checkbox", options);
        const optionsChecked = this.options.checked;
        this.innerChecked = ko.unwrap(optionsChecked);
        if (ko.isObservable(optionsChecked)) {
            this.addSubscription(optionsChecked, (newValue) => {
                this.innerSetChecked(newValue, true, false, false);
            });
        }
    }
    innerSetChecked(checked, setElement, triggerOnchange, setObservable) {
        this.innerChecked = checked;
        if (setElement && this.element) {
            this.element.checked = checked;
        }
        if (triggerOnchange && this.options.onchange) {
            this.options.onchange(checked);
        }
        if (setObservable) {
            const optionsChecked = this.options.checked;
            if (ko.isObservable(optionsChecked)) {
                optionsChecked(checked);
            }
        }
    }
    build() {
        super.build();
        if (this.options.scale) {
            const scale = "scale(" + this.options.scale + ")";
            this.setStyle({
                transform: scale,
                webKitTransform: scale,
                msTransform: scale
            });
        }
        this.setChecked(this.innerChecked, false);
        this.addEventListener("change", () => {
            this.innerSetChecked(this.element.checked, false, true, true);
        });
    }
    getChecked() {
        return this.innerChecked;
    }
    setChecked(checked, triggerChange = false) {
        this.innerSetChecked(checked, true, triggerChange, true);
    }
}
exports.CheckBox = CheckBox;
//# sourceMappingURL=checkbox.js.map