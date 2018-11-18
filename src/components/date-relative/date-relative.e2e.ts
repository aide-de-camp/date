import { newE2EPage } from '@stencil/core/testing';
import { formatRelative, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

describe('DateRelative', () => {
  it('should render the component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<adc-date-relative datetime='10 Sep 2018'></adc-date-relative>`
    );
    const el = await page.find('adc-date-relative');
    expect(el).toBeDefined();
  });

  it('should show the relative date correctly', async () => {
    const threeDaysAgo = subDays(new Date(), 3).toString();
    const page = await newE2EPage();
    await page.setContent(
      `<adc-date-relative datetime=${threeDaysAgo} locale="en-US"></adc-date-relative>`
    );
    await page.waitForChanges();
    const el = await page.find('adc-date-relative');
    expect(el.shadowRoot.innerHTML).toBe(
      formatRelative(threeDaysAgo, new Date())
    );
  });

  it('should treat locales properly', async () => {
    const threeDaysAgo = subDays(new Date(), 3).toString();
    const page = await newE2EPage();
    await page.setContent(
      `<adc-date-relative datetime=${threeDaysAgo} locale="es-ES"></adc-date-relative>`
    );
    await page.waitForChanges();
    const el = await page.find('adc-date-relative');
    expect(el.shadowRoot.innerHTML).toEqualText(
      formatRelative(threeDaysAgo, new Date(), { locale: es })
    );
  });
});
