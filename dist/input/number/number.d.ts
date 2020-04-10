/// <reference types="knockout" />
import { InputElement, InputElementOptions, InputElementValidityCheckOptions as InputElementValidityOptions, InputElementType } from "../inputElement";
export interface NumberOptions extends InputElementOptions<number>, InputElementValidityOptions<number> {
    value?: number | KnockoutObservable<number>;
    valueUpdateMode?: NumberValueUpdateMode;
}
export declare type NumberValueUpdateMode = "OnInput" | "OnChange";
export declare class Number extends InputElement<number, NumberOptions> {
    constructor(options?: NumberOptions, elementType?: string, inputElementType?: InputElementType);
    private innerValue;
    private innerSetValue;
    protected build(): void;
    getValue(): number;
    setValue(value: number, triggerChange?: boolean): void;
}
