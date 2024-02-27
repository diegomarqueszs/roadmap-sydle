class MyComp extends HTMLElement{
    constructor(){
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        const template = `
            <style>
            :host {
                background: #333;
                display: block;
                color: #fff;
            }
            </style>

            <h1>Stencil.js</h1>
            <p><slot></slot></p>
        `
        this.shadow.innerHTML = template;
    }
}

customElements.define('my-comp', MyComp);