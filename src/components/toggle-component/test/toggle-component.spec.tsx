import { newSpecPage } from '@stencil/core/testing';
import { ToggleComponent } from '../toggle-component';

describe('toggle-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ToggleComponent],
      html: `<toggle-component></toggle-component>`,
    });
    expect(page.root).toEqualHtml(`
      <toggle-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </toggle-component>
    `);
  });
});
