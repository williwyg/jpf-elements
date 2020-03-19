/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../inputElement";
export interface CheckBoxOptions extends InputElementOptions<boolean> {
    checked?: boolean | KnockoutObservable<boolean>;
    scale?: number;
}
export declare class CheckBox extends InputElement<boolean, CheckBoxOptions> {
    constructor(options?: CheckBoxOptions);
    private innerChecked;
    private innerSetChecked;
    protected build(): void;
    getChecked(): boolean;
    setChecked(checked: boolean, triggerChange?: boolean): void;
}
