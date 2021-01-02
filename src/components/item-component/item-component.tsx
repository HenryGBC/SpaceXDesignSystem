import { Component, h } from '@stencil/core';

@Component({
  tag: 'item-component',
  styleUrl: 'item-component.css',
})
export class ItemComponent {
  render() {
    return <h1 class="title">Henry</h1>;
  }
}
