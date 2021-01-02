import { newE2EPage } from '@stencil/core/testing';

describe('progress-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<progress-component></progress-component>');

    const element = await page.find('progress-component');
    expect(element).toHaveClass('hydrated');
  });
});
