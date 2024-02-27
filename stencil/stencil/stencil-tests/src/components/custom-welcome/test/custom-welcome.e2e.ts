import { newE2EPage } from '@stencil/core/testing';

describe('custom-welcome', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<custom-welcome></custom-welcome>');

    const element = await page.find('custom-welcome');
    expect(element).toHaveClass('hydrated');
  });
});
