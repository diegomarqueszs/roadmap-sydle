import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'custom-welcome',
  styleUrl: 'custom-welcome.css',
  shadow: true,
})
export class CustomWelcome {

  render() {
    return (
      <Host>
        <h1>Hello World</h1>
        <p><slot></slot></p>
      </Host>
    );
  }

}
