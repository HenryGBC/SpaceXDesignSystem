import { newE2EPage } from '@stencil/core/testing';

describe('item-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<item-component></item-component>');

    const element = await page.find('item-component');
    expect(element).toHaveClass('hydrated');
  });
});
