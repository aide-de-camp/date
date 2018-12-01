# adc-date-epoch

This web components takes a UNIX timestamp and renders it in human-readable format, properly localized.

```html
<adc-date-epoch timestamp="1543686875" locale="es"></adc-date-epoch>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                          | Type     |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `locale`    | `locale`    | [Optional] A locale for formatting the relative date. If no locale is specified, or if it's not a valid locale, the component will fallback to the browser's locale. | `string` |
| `timestamp` | `timestamp` | [Required] UNIX timestamp to be converted to a human-readable date.                                                                                                  | `number` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
