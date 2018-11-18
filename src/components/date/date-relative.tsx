import { Component, Prop, State } from '@stencil/core';
import formatRelative from 'date-fns/formatRelative';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';

const localeMap = {
  'en-US': enUS,
  'es-ES': es,
};

@Component({
  tag: 'adc-date-relative',
  shadow: true,
})
export class DateRelative {
  @Prop() date: string;
  @Prop() locale: string;
  @State() relativeDate: string;

  componentWillLoad() {
    this.relativeDate = formatRelative(new Date(this.date), Date.now(), {
      locale: localeMap[this.locale || navigator.language],
    });
  }

  render() {
    return this.relativeDate;
  }
}
