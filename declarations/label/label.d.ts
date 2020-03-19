import { UiElement, UiElementOptions } from "jpf";
export interface LabelOptions extends UiElementOptions {
    for?: string;
}
export declare class Label extends UiElement<LabelOptions> {
    constructor(options?: LabelOptions);
    protected build(): void;
}
