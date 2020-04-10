"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ko = require("knockout");
const inputElement_1 = require("../inputElement");
class Slider extends inputElement_1.InputElement {
    constructor(options) {
        super("Slider", "range", options);
    }
    build() {
        super.build();
        ko.applyBindingsToNode(this.element, {
            value: this.options.value,
            attr: {
                min: this.options.min,
                max: this.options.max,
                step: this.options.step
            }
        });
        this.element.onchange = () => {
            if (this.options.onchange) {
                const input = this.element;
                const value = Number(input.value);
                this.options.onchange(value);
            }
        };
    }
    setMin(minValue) {
        const min = this.options.min;
        if (ko.isObservable(min)) {
            min(minValue);
        }
        else {
            if (this.element) {
                if (minValue) {
                    this.element.setAttribute("min", minValue.toString());
                }
                else {
                    this.element.removeAttribute("min");
                }
            }
        }
    }
    setMax(maxValue) {
        const max = this.options.max;
        if (ko.isObservable(max)) {
            max(maxValue);
        }
        else {
            if (this.element) {
                if (maxValue) {
                    this.element.setAttribute("max", maxValue.toString());
                }
                else {
                    this.element.removeAttribute("max");
                }
            }
        }
    }
    setStep(stepValue) {
        const step = this.options.step;
        if (ko.isObservable(step)) {
            step(stepValue);
        }
        else {
            if (this.element) {
                if (stepValue) {
                    this.element.setAttribute("max", stepValue.toString());
                }
                else {
                    this.element.removeAttribute("max");
                }
            }
        }
    }
}
exports.Slider = Slider;
//# sourceMappingURL=slider.js.map