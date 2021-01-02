import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'toggle-component',
  styleUrl: 'toggle-component.css',
  shadow: true,
})
export class ToggleComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
