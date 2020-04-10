/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface ButtonOptions extends UiElementOptions {
    content?: string | KnockoutObservable<string> | UiElement;
    disabled?: boolean | KnockoutObservable<boolean>;
}
export declare class Button extends UiElement<ButtonOptions> {
    constructor(options?: ButtonOptions);
    protected build(): void;
}
