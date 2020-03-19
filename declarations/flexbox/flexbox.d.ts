import { UiElement, UiElementOptions, Types } from "jpf";
export interface FlexboxOptions extends UiElementOptions {
    flexDirection?: Types.FlexDirection;
    flexWrap?: Types.FlexWrap;
    justifyContent?: Types.JustifyContent;
    alignItems?: Types.AlignItems;
    alignContent?: Types.AlignContent;
}
export declare class Flexbox extends UiElement<FlexboxOptions> {
    constructor(options?: FlexboxOptions);
}
