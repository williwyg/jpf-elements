/// <reference types="knockout" />
import { InputElement, InputElementOptions } from "../inputElement";
export interface SliderOptions extends InputElementOptions<number> {
    min: number | KnockoutObservable<number>;
    max: number | KnockoutObservable<number>;
    step?: number | KnockoutObservable<number>;
    value?: number | KnockoutObservable<number>;
}
export declare class Slider extends InputElement<number, SliderOptions> {
    constructor(options?: SliderOptions);
    protected build(): void;
    setMin(minValue: number): void;
    setMax(maxValue: number): void;
    setStep(stepValue: number): void;
}
