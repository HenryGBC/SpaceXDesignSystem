import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'icon-component',
  styleUrl: 'icon-component.css',
  shadow: true,
})
export class IconComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
