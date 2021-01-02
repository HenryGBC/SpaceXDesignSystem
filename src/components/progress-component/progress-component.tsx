import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'progress-component',
  styleUrl: 'progress-component.css',
  shadow: true,
})
export class ProgressComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
