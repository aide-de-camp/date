# adc-date-relative

This web component formats a date with a format like "last Sunday at 10:30 AM", "next Wednesday at 11:00 PM" or "today at 1:00 PM."

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                                                                                                                                               | Type     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `datetime` | `datetime` | The date and time to compare with. The base date is always the equivalent to Date.now()                                                                   | `string` |
| `locale`   | `locale`   | A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale, the component will fallback to the browser's locale. | `string` |

---

_Built with [StencilJS](https://stenciljs.com/)_
