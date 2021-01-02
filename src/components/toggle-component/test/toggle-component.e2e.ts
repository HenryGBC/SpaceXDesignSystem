import { newE2EPage } from '@stencil/core/testing';

describe('toggle-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<toggle-component></toggle-component>');

    const element = await page.find('toggle-component');
    expect(element).toHaveClass('hydrated');
  });
});
