import { Host, h } from "@stencil/core";
export class CustomWelcome {
    render() {
        return (h(Host, { key: '0bc339e2569c8af4fd4a47b022a460c72595f9c5' }, h("h1", { key: '62612ab3b87e4542259167f50943297076585b30' }, "Hello World"), h("p", { key: '5e08ca037fbcd00dd60725d7fd648fab3209f753' }, h("slot", { key: '2ba55ff10fbc689fbb7283f0792a8f816caf2cef' }))));
    }
    static get is() { return "custom-welcome"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["custom-welcome.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["custom-welcome.css"]
        };
    }
}
//# sourceMappingURL=custom-welcome.js.map
