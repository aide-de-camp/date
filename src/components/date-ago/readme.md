# adc-date-ago

This web components formats a date and time in terms of distance with the present, like _"3 days ago"_. Also accepts a future date and time.

```html
<adc-date-ago datetime="Nov 22 2018 9:00" locale="es"></adc-date-ago>
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute  | Description                                                                                                                                                          | Type     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `datetime` | `datetime` | [Required] The date and time to compare with. The base date is always the equivalent to Date.now().                                                                  | `string` |
| `locale`   | `locale`   | [Optional] A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale, the component will fallback to the browser's locale. | `string` |

---

_Built with [StencilJS](https://stenciljs.com/)_
