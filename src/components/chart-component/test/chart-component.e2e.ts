import { newE2EPage } from '@stencil/core/testing';

describe('chart-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<chart-component></chart-component>');

    const element = await page.find('chart-component');
    expect(element).toHaveClass('hydrated');
  });
});
