import * as ko from "knockout";
import { UiElement, UiElementOptions } from "jpf";

export interface LabelOptions extends UiElementOptions {
    for?: string;
}

export class Label extends UiElement<LabelOptions> {
    constructor(options?: LabelOptions) {
        super("label", "Label", options);
    }

    protected build () {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                attr: {
                    for: this.options.for
                }
            }
        );
    }
}