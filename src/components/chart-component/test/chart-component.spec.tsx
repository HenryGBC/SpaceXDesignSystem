import { newSpecPage } from '@stencil/core/testing';
import { ChartComponent } from '../chart-component';

describe('chart-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChartComponent],
      html: `<chart-component></chart-component>`,
    });
    expect(page.root).toEqualHtml(`
      <chart-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </chart-component>
    `);
  });
});
