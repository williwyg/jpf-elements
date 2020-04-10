/// <reference types="knockout" />
import { InputElement, InputElementOptions, InputElementValidityCheckOptions, InputElementType } from "../inputElement";
export interface TextOptions extends InputElementOptions<string>, InputElementValidityCheckOptions<string> {
    text?: string | KnockoutObservable<string>;
    valueUpdateMode?: TextValueUpdateMode;
}
export declare type TextValueUpdateMode = "OnInput" | "OnChange";
export declare class Text extends InputElement<string, TextOptions> {
    constructor(options?: TextOptions, elementType?: string, inputElementType?: InputElementType);
    private internalText;
    private innerSetText;
    protected build(): void;
    getText(): string;
    setText(text: string, triggerChange?: boolean): void;
}
