import { newSpecPage } from '@stencil/core/testing';
import { ProgressComponent } from '../progress-component';

describe('progress-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ProgressComponent],
      html: `<progress-component></progress-component>`,
    });
    expect(page.root).toEqualHtml(`
      <progress-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </progress-component>
    `);
  });
});
