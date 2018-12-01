import { Component, Prop, State } from '@stencil/core';
import format from 'date-fns/esm/format';
import fromUnixTime from 'date-fns/esm/fromUnixTime';
import { dateLocales } from '../../i18n/date-locales';

@Component({
  tag: 'adc-date-epoch',
  shadow: true,
})
export class DateEpoch {
  /**
   * [Required] UNIX timestamp to be converted to a human-readable date.
   */
  @Prop() timestamp: number;

  /**
   * [Optional] A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale,
   * the component will fallback to the browser's locale.
   */
  @Prop() locale: string;

  @State() date: string;

  async componentWillLoad() {
    // We might find a wait to dynamically import the locales in runtime,
    // to avoid loading unnecessary stuff. But for now we will need to bear with this

    const locale =
      dateLocales.get(this.locale) || dateLocales.get(navigator.language);
    this.date = format(fromUnixTime(this.timestamp), 'PPPppp', { locale });
  }

  render() {
    console.log(this.date);
    return this.date;
  }
}
