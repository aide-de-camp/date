import { newE2EPage } from '@stencil/core/testing';

describe('DateRelative', () => {
  it('should render the component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<adc-date-relative datetime='10 Sep 2018'></adc-date-relative>`
    );
    const el = await page.find('adc-date-relative');
    expect(el).toBeDefined();
  });
});
