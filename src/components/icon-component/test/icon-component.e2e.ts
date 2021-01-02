import { newE2EPage } from '@stencil/core/testing';

describe('icon-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-component></icon-component>');

    const element = await page.find('icon-component');
    expect(element).toHaveClass('hydrated');
  });
});
