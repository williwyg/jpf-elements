/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface AnchorOptions extends UiElementOptions {
    href?: string | KnockoutObservable<string>;
}
export declare class Anchor extends UiElement<AnchorOptions> {
    constructor(options?: AnchorOptions);
    protected build(): void;
}
