import { Component, Prop, State } from '@stencil/core';
import formatRelative from 'date-fns/esm/formatRelative';
import { dateLocales } from '../../i18n/date-locales';

@Component({
  tag: 'adc-date-relative',
  shadow: true,
})
export class DateRelative {
  /**
   * The date and time to compare with. The base date is always the equivalent to Date.now()
   */
  @Prop() datetime: string;

  /**
   * A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale,
   * the component will fallback to the browser's locale.
   */
  @Prop() locale: string;

  @State() relativeDate: string;

  async componentWillLoad() {
    // We might find a wait to dynamically import the locales in runtime,
    // to avoid loading unnecessary stuff. But for now we will need to bear with this

    const locale =
      dateLocales.get(this.locale) || dateLocales.get(navigator.language);
    this.relativeDate = formatRelative(new Date(this.datetime), Date.now(), {
      locale,
    });
  }

  render() {
    return this.relativeDate;
  }
}
