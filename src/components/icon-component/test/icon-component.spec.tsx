import { newSpecPage } from '@stencil/core/testing';
import { IconComponent } from '../icon-component';

describe('icon-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<icon-component></icon-component>`,
    });
    expect(page.root).toEqualHtml(`
      <icon-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </icon-component>
    `);
  });
});
