import { Component, Prop, State } from '@stencil/core';
import formatDistance from 'date-fns/esm/formatDistance';
import { dateLocales } from '../../i18n/date-locales';

@Component({
  tag: 'adc-date-ago',
  shadow: true,
})
export class DateAgo {
  /**
   * [Required] The date and time to compare with. The base date is always the equivalent to Date.now().
   */
  @Prop() datetime: string;

  /**
   * [Optional] A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale,
   * the component will fallback to the browser's locale.
   */
  @Prop() locale: string;

  @State() dateAgo: string;

  async componentWillLoad() {
    const locale =
      dateLocales.get(this.locale) || dateLocales.get(navigator.language);
    this.dateAgo = formatDistance(new Date(this.datetime), Date.now(), {
      addSuffix: true,
      locale,
    });
  }

  render() {
    return this.dateAgo;
  }
}
