/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ChartComponent {
    }
    interface IconComponent {
    }
    interface ItemComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ProgressComponent {
    }
    interface ToggleComponent {
    }
}
declare global {
    interface HTMLChartComponentElement extends Components.ChartComponent, HTMLStencilElement {
    }
    var HTMLChartComponentElement: {
        prototype: HTMLChartComponentElement;
        new (): HTMLChartComponentElement;
    };
    interface HTMLIconComponentElement extends Components.IconComponent, HTMLStencilElement {
    }
    var HTMLIconComponentElement: {
        prototype: HTMLIconComponentElement;
        new (): HTMLIconComponentElement;
    };
    interface HTMLItemComponentElement extends Components.ItemComponent, HTMLStencilElement {
    }
    var HTMLItemComponentElement: {
        prototype: HTMLItemComponentElement;
        new (): HTMLItemComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProgressComponentElement extends Components.ProgressComponent, HTMLStencilElement {
    }
    var HTMLProgressComponentElement: {
        prototype: HTMLProgressComponentElement;
        new (): HTMLProgressComponentElement;
    };
    interface HTMLToggleComponentElement extends Components.ToggleComponent, HTMLStencilElement {
    }
    var HTMLToggleComponentElement: {
        prototype: HTMLToggleComponentElement;
        new (): HTMLToggleComponentElement;
    };
    interface HTMLElementTagNameMap {
        "chart-component": HTMLChartComponentElement;
        "icon-component": HTMLIconComponentElement;
        "item-component": HTMLItemComponentElement;
        "my-component": HTMLMyComponentElement;
        "progress-component": HTMLProgressComponentElement;
        "toggle-component": HTMLToggleComponentElement;
    }
}
declare namespace LocalJSX {
    interface ChartComponent {
    }
    interface IconComponent {
    }
    interface ItemComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ProgressComponent {
    }
    interface ToggleComponent {
    }
    interface IntrinsicElements {
        "chart-component": ChartComponent;
        "icon-component": IconComponent;
        "item-component": ItemComponent;
        "my-component": MyComponent;
        "progress-component": ProgressComponent;
        "toggle-component": ToggleComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "chart-component": LocalJSX.ChartComponent & JSXBase.HTMLAttributes<HTMLChartComponentElement>;
            "icon-component": LocalJSX.IconComponent & JSXBase.HTMLAttributes<HTMLIconComponentElement>;
            "item-component": LocalJSX.ItemComponent & JSXBase.HTMLAttributes<HTMLItemComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "progress-component": LocalJSX.ProgressComponent & JSXBase.HTMLAttributes<HTMLProgressComponentElement>;
            "toggle-component": LocalJSX.ToggleComponent & JSXBase.HTMLAttributes<HTMLToggleComponentElement>;
        }
    }
}
