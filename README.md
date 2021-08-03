<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://angular.io/assets/images/logos/angular/angular.svg">
  <h1 align="center">NGX HTTP LOADER</h1>
</p>

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](https://procodeprogramming.com/profile/bhushanzade)
[![npm](https://img.shields.io/npm/v/ngx-http-loader.svg)]()
[![npm](https://img.shields.io/npm/dm/ngx-http-loader.svg)]()
[![npm](https://img.shields.io/npm/dt/ngx-http-loader.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%206%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%207%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%208%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%209%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2010%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2011%2B-blue.svg?style=flat-square)]()
[![Support](https://img.shields.io/badge/Support-Angular%2012%2B-blue.svg?style=flat-square)]()


# What is use?
`ngx-http-loader` HTTP loader for Angular 6 and 6+ with different types of loaders, custom loader, custom complete template with title and subtitle, managing colors, font size, text colors etc. Complete package with custamization support. Interceptor will helps to shows loader when http/xhr request calls. The loader visible until the http/xhr request is in pending to complete status. If want to show and hide loader forcefully or any other operation Using `NgxHttpLoaderService` call show() and hide() methods.


# Installation

```
npm install --save ngx-http-loader
```

# Features
* HTTP interceptor
* Multiple types of loaders
* Custom loader support
* Custom template support
* Customize backdrop background color, text color, icon color etc
* Title or Subtitle/Description support
* Time Delay Support
* Show and Hide Services Available
* Filters request complete url, regex pattern urls, http methods or hearders for hide loader

# Usage

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// [...]
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; // <============
import { NgxHttpLoaderModule } from 'ngx-http-loader'; // <============

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // <============ (Perform HTTP requests with this module)
    NgxHttpLoaderModule.forRoot(), // <============ Don't forget to call 'forRoot()'!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In your app.component.html, simply add:
```html
<ngx-http-loader  [opacity]="'0.8'" [title]="'procodeprograming.com'" [subTitle]="'Search user profiles for finding and matching skillsets for your need. It helps you to find user skills and his profession and educational details.'" [loader]="loader.ELLIPSIS" [iconColor]="'white'" [backdropBackgroundColor]="'black'">
</ngx-http-loader>
```

**_To specify the loader type this way, you must reference the `NgxLoader` const as a public property in your app.component.ts_**:

```typescript
import { Component } from '@angular/core'; 
import { NgxLoader } from 'ngx-http-loader'; // <============

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public loader = NgxLoader; // <============
}
```

# Available Options

- **[loader]**: To set different type of loader. Default is `RIPPLE`. Enum type is NgxLoader.
- **[opacity]**: To change opacity of backdrop background. Default is `'0.9'` string format
- **[backdropBackgroundColor]**: Set backdrop background color. Default is `'linear-gradient(45deg, #222428, #444856)'`
- **[iconColor]**: To set loader or svg icon color. Default is `'#fff'`
- **[title]**: To set title below the loader or spinner. Default empty.
- **[titleColor]**: To set title color. Default `'#fff'`
- **[titleSize]**: For changing title text size. Default `'3rem'`.
- **[subTitle]**: To set sub title or description below the loader or spinner. Default empty.
- **[subTitleColor]**: To set sub title color. Default `'#fff'`
- **[subTitleSize]**: For changing sub title text size. Default `'1.5rem'`.
- **[filterUrls]**: Pass `Array<string>` complete urls with query params to hide loader on calling this http request. Default empty array.
- **[filterUrlRegexPatterns]**: Pass `Array<RegExp>` urls string with regex pattern to hide loader on this urls calling. Default empty array.
- **[filterHttpHeaders]**: Pass `Array<string>` headers. Default empty array.
- **[filterHttpMethods]**: Pass `Array<string>` http methods. Default empty array.
- **[custom]**: `true` or `false`
  To enable/disable add custom loader or image, default `false`
- **[customLoader]**: If custom is true this custom loader shows.
- **[customTemplate]**: Complete custom template. Default is default loader.

# Defining your own custom template
- use `[customTemplate]` in tag.
- Add your template in `<ng-template #loaderTemplate></ng-template>`
- Pass `loaderTemplate` to `[customTemplate]`

```html
<ngx-http-loader [customTemplate]="loaderTemplate">
    <ng-template #loaderTemplate>
    // Add style in your style.css file or your component css file or else use inline css.
        <div id="preloader">
            <table id="wrapper">
                <tr>
                    <td>
                        <img src="assets/image/logo_red.gif" alt="" />
                    </td>
                </tr>
            </table>
        </div>
    </ng-template>
</ngx-http-loader>
```

# Replace your custom loader.
- use `[custom]` `[customLoader]` in tag.
- `[custom]="true"` is need to show the custom loader.
- Add your template in `<ng-template #loader></ng-template>`
- Pass `loader` to `[customLoader]`

```html
<ngx-http-loader [custom]="true" [customLoader]="loaderTemplate">
    <ng-template #loaderTemplate>
    // Add style in your style.css file or your component css file or else use inline css.
        <style>
            img {
                width: 800px;
                height: 800px;
            }
        </style>
        <img src="assets/image/logo_red.gif" alt="" />
    </ng-template>
</ngx-http-loader>
```

# Filters HTTP / XHR requests from interceptor

***Filter with complete url with queryparams***
```html
<ngx-http-loader [filterUrls]="filterUrls"></ngx-http-loader>
```
```ts
public filterUrls = [
    'http://localhost:8080/api/movie',
    'http://localhost:8080/api/list?search="Find list of movies"&extra=true'
];
```
***Filter with regex url***
```html
<ngx-http-loader [filterUrlRegexPatterns]="filterUrlRegexPatterns"></ngx-http-loader>
```
```ts
public filterUrlRegexPatterns:RegExp[] = ['api/movie','[a-zA-Z]'];
```
***Filter with http headers***:
```html
<ngx-http-loader [filterHttpHeaders]="['hEaDeR', 'AnoTheR-HeAdEr']"></ngx-http-loader>
```
***Filter with http methods***:
```html
<ngx-http-loader [filterHttpMethods]="['POST', 'DELETE']"></ngx-http-loader>
```

# Manually show and hide the loader

You can manually show and hide the loader if needed. You must use the service `NgxHttpLoaderService` for this purpose.

```ts
import { Component } from '@angular/core'; 
import { NgxHttpLoaderService } from 'ngx-http-loader';

@Component({
    selector: 'my-component',
    templateUrl: './my.component.html',
    styleUrls: ['./my.component.css'],
})
export class MyComponent {

    constructor(private ngxhttploader: NgxHttpLoaderService) {
        // show the spinner
        this.ngxhttploader.show();
        
        // hide the spinner
        setTimeout(() => {
            this.ngxhttploader.hide();
        }, 5000);
    }
}
```
# List available type of Loaders
```ts
const NgxLoader = {
    DEFAULT: 'loader-default',
    CLOCK: 'loader-clock',
    DUALRING: 'loader-dual-ring',
    ELLIPSIS: 'loader-ellipsis',
    FACEBOOK: 'loader-facebook',
    GEAR: 'loader-gear',
    GRID: 'loader-grid',
    HEART: 'loader-heart',
    HOURGLASS: 'loader-hourglass',
    JELLYBOX: 'loader-jellybox',
    MULTICIRCLE: 'loader-multicicle',
    RING: 'loader-ring',
    RIPPLE: 'loader-ripple',
    ROLLER: 'loader-roller',
    SPINNER: 'loader-spinner',
    THREEBOUNCE: 'loader-three-bounce',
    WATERWAVE: 'loader-water-wave',
    ROTATINGPLANE: 'loader-rotating-plane',
};
```
# Dependencies

* Angular 6 and 6+ Support
* Bootstrap 4 and 4+

## Creator
***
#### [Bhushan Zade](https://procodeprogramming.com/profile/bhushanzade)

- [@GitHub](https://github.com/bhushanzade)
- [@LinkedIn](https://www.linkedin.com/in/bhushanzade)