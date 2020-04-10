/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface SelectOptions<TItem, TValue> extends UiElementOptions {
    items?: Array<TItem> | KnockoutObservableArray<TItem>;
    textFunction?: (item: TItem) => string;
    valueFunction?: (item: TItem) => TValue;
    selectedValue?: TValue | KnockoutObservable<TValue>;
    onchange?: (value: TValue) => void;
}
export declare class Select<TItem, TValue> extends UiElement<SelectOptions<TItem, TValue>> {
    constructor(options?: SelectOptions<TItem, TValue>);
    protected build(): void;
    readonly element: HTMLSelectElement;
}
