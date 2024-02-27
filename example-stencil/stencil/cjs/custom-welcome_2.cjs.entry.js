'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dbf3209.js');

const customWelcomeCss = ":host{display:block;background-color:#333;color:#fff}";
const CustomWelcomeStyle0 = customWelcomeCss;

const CustomWelcome = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0bc339e2569c8af4fd4a47b022a460c72595f9c5' }, index.h("h1", { key: '62612ab3b87e4542259167f50943297076585b30' }, "Hello World"), index.h("p", { key: '5e08ca037fbcd00dd60725d7fd648fab3209f753' }, index.h("slot", { key: '2ba55ff10fbc689fbb7283f0792a8f816caf2cef' }))));
    }
};
CustomWelcome.style = CustomWelcomeStyle0;

function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = ":host{display:block}";
const MyComponentStyle0 = myComponentCss;

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.first = undefined;
        this.middle = undefined;
        this.last = undefined;
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", { key: 'a9dd3a7c04ba0bc747dff862ca972d6500db43f1' }, "Hello, World! I'm ", this.getText());
    }
};
MyComponent.style = MyComponentStyle0;

exports.custom_welcome = CustomWelcome;
exports.my_component = MyComponent;

//# sourceMappingURL=custom-welcome_2.cjs.entry.js.map