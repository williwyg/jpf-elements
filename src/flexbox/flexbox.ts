import { UiElement, UiElementOptions, Types, Style } from "jpf";

export interface FlexboxOptions extends UiElementOptions {
    flexDirection?: Types.FlexDirection;
    flexWrap?: Types.FlexWrap;
    justifyContent?: Types.JustifyContent;
    alignItems?: Types.AlignItems;
    alignContent?: Types.AlignContent;
}

export class Flexbox extends UiElement<FlexboxOptions> {
    constructor(options?: FlexboxOptions) {
        super("div", "Flexbox", options);

        this.setStyle({ display: "flex" }, true);

        const style: Style = {};
        if (this.options.flexDirection) {
            style.flexDirection = this.options.flexDirection;
        }
        if (this.options.flexWrap) {
            style.flexWrap = this.options.flexWrap;
        }
        if (this.options.justifyContent) {
            style.justifyContent = this.options.justifyContent;
        }
        if (this.options.alignItems) {
            style.alignItems = this.options.alignItems;
        }
        if (this.options.alignContent) {
            style.alignContent = this.options.alignContent;
        }

        this.setStyle(style);
    }
}