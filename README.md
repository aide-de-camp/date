# @adc/date

![](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
![npm (scoped)](https://img.shields.io/npm/v/@adc/date.svg?style=flat-square)
![](https://img.shields.io/travis/com/aide-de-camp/date/master.svg?style=flat-square)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@adc/date.svg?style=flat-square)
![npm](https://img.shields.io/npm/dm/@adc/date.svg?style=flat-square)
![GitHub](https://img.shields.io/github/license/adc/date.svg?style=flat-square)

This is a collection of standalone Web Components to easily format dates.

**@adc/date** is part of the [aide-de-camp](https://github.com/aide-de-camp) Web Components collection.

## How to install

You can either:

- install the npm package with `npm install @adc/date`
- rely on unpkg.com and a good ol' `<script>` tag

## How to use

### Framework-less

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/@adc/date/latest/dist/adc-date.js"></script>
    <!-- or use the path to your node_modules folder if you are using npm -->
  </head>
  <body>
    <!-- The @adc/date Web Components are now ready to be used. -->
    <!-- Please refer to the Component Catalog section below -->
  </body>
</html>
```

Alternatively, if you want to take advantage of ES Modules, you could include the components using an import statement.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import { defineCustomElements } from 'https://unpkg.com/@adc/date/latest/dist/esm/es2017/adc-date.define.js';
      // or use the path to your node_modules folder if you are using npm
      defineCustomElements(window);
    </script>
  </head>
  <body>
    <!-- The @adc/date Web Components are now ready to be used. -->
    <!-- Please refer to the Component Catalog section below -->
  </body>
</html>
```

### Angular

#### Including the Custom Elements Schema

Including the`CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. Here is an example of adding it to `AppModule`:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The CUSTOM_ELEMENTS_SCHEMA needs to be included in any module that uses custom elements.

#### Calling defineCustomElements

A component collection built with Stencil (such as this one) includes a main function that is used to load the components in the collection. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements } from '@adc/date/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```

### React

With an application built using the `create-react-app` starter the easiest way to include the component library is to call `defineCustomElements(window)` from the `index.js` file.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { defineCustomElements } from '@adc/date/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
defineCustomElements(window);
```

### Vue.js

In order to use the custom element library within the Vue app, the application must be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file. For example (assuming you created your project with `vue-cli`):

```js
import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements } from '@adc/date/dist/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/adc-date-\w*/];

defineCustomElements(window);

new Vue({
  render: h => h(App),
}).$mount('#app');
```

## Component Catalog

- [adc-date-ago](https://github.com/aide-de-camp/pay/tree/master/src/components/date-ago)
- [adc-date-relative](https://github.com/aide-de-camp/pay/tree/master/src/components/date-relative)

## Browser support

- Chrome (and all Chromium based browsers)
- Safari
- Edge
- Firefox (64+ only)

Web Components, specifically Custom Elements, are natively supported in Chrome and Safari and are coming to both Edge and Firefox. A dynamic polyfill loader is already included in order to only load the polyfills for the browsers that are missing specific features.
