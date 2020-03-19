/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface DivOptions extends UiElementOptions {
    text?: string | KnockoutObservable<string>;
    isHtml?: boolean;
}
export declare class Div extends UiElement<DivOptions> {
    constructor(options?: DivOptions);
    protected build(): void;
}
