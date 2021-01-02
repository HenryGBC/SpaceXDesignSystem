import { newSpecPage } from '@stencil/core/testing';
import { ItemComponent } from '../item-component';

describe('item-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ItemComponent],
      html: `<item-component></item-component>`,
    });
    expect(page.root).toEqualHtml(`
      <item-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </item-component>
    `);
  });
});
