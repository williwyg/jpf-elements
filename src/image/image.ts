﻿import * as ko from "knockout";
import { UiElement, UiElementOptions } from "jpf";

export interface ImageOptions extends UiElementOptions {
    src: string | KnockoutObservable<string>;
    alt?: string;
}

export class Image extends UiElement<ImageOptions> {
    constructor(options?: ImageOptions) {
        super("img", "Image", options);
    }

    protected build() {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                attr: {
                    src: this.options.src,
                    alt: this.options.alt
                }
            }
        );
    }
}