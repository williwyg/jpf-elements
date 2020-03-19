/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface InputElementOptions<TInput> extends UiElementOptions {
    disabled?: boolean | KnockoutObservable<boolean>;
    placeholder?: string | KnockoutObservable<string>;
    onchange?: (newValue: TInput) => void;
}
export interface InputElementValidityCheckOptions<TInput> {
    checkValidity?: (oldValue: TInput, newValue: TInput) => boolean;
}
export declare class InputElement<TInput, TOptions extends InputElementOptions<TInput> = InputElementOptions<TInput>> extends UiElement<TOptions> {
    constructor(elementType: string, inputType: InputElementType, options?: TOptions);
    protected build(): void;
    readonly element: HTMLInputElement;
    readonly inputType: InputElementType;
}
export declare type InputElementType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
