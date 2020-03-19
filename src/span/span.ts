import { UiElement, UiElementOptions } from "jpf";

export class Span extends UiElement {
    constructor(options: UiElementOptions) {
        super("span", "Span", options);
    }
}