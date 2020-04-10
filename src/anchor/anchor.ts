import * as ko from "knockout";
import { UiElement, UiElementOptions } from "jpf";

export interface AnchorOptions extends UiElementOptions {
    href?: string | KnockoutObservable<string>;
}

export class Anchor extends UiElement<AnchorOptions> {
    constructor(options?: AnchorOptions) {
        super("a", "Anchor", options);
    }

    protected build() {
        super.build();

        ko.applyBindingsToNode(
            this.element,
            {
                attr: {
                    href: this.options.href
                }
            }
        );
    }
}