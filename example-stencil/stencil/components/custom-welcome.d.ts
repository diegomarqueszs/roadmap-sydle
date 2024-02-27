import type { Components, JSX } from "../types/components";

interface CustomWelcome extends Components.CustomWelcome, HTMLElement {}
export const CustomWelcome: {
    prototype: CustomWelcome;
    new (): CustomWelcome;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
