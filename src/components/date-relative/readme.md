# adc-date-relative

This web component formats a date with a format like _"last Sunday at 10:30 AM"_, _"next Wednesday at 11:00 PM"_ or _"today at 1:00 PM."_

```html
<adc-date-relative
  datetime="Nov 20 2018 9:00"
  locale="es-ES"
></adc-date-relative>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                          | Type     |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `datetime` | `datetime` | [Required] The date and time to compare with. The base date is always the equivalent to Date.now().                                                                  | `string` |
| `locale`   | `locale`   | [Optional] A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale, the component will fallback to the browser's locale. | `string` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
