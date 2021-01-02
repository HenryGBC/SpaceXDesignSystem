import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'chart-component',
  styleUrl: 'chart-component.css',
  shadow: true,
})
export class ChartComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
