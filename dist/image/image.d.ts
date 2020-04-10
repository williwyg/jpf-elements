/// <reference types="knockout" />
import { UiElement, UiElementOptions } from "jpf";
export interface ImageOptions extends UiElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}
export declare class Image extends UiElement<ImageOptions> {
    constructor(options?: ImageOptions);
    protected build(): void;
}
