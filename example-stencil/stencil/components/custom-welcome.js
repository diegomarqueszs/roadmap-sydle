import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const customWelcomeCss = ":host{display:block;background-color:#333;color:#fff}";
const CustomWelcomeStyle0 = customWelcomeCss;

const CustomWelcome$1 = /*@__PURE__*/ proxyCustomElement(class CustomWelcome extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '0bc339e2569c8af4fd4a47b022a460c72595f9c5' }, h("h1", { key: '62612ab3b87e4542259167f50943297076585b30' }, "Hello World"), h("p", { key: '5e08ca037fbcd00dd60725d7fd648fab3209f753' }, h("slot", { key: '2ba55ff10fbc689fbb7283f0792a8f816caf2cef' }))));
    }
    static get style() { return CustomWelcomeStyle0; }
}, [1, "custom-welcome"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["custom-welcome"];
    components.forEach(tagName => { switch (tagName) {
        case "custom-welcome":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CustomWelcome$1);
            }
            break;
    } });
}

const CustomWelcome = CustomWelcome$1;
const defineCustomElement = defineCustomElement$1;

export { CustomWelcome, defineCustomElement };

//# sourceMappingURL=custom-welcome.js.map