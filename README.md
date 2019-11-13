# converterjs

[![npm (scoped)](https://img.shields.io/npm/v/@kaythinks/converterjs.svg)](https://www.npmjs.com/package/@kaythinks/converterjs)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@kaythinks/sweetthings.svg)](https://www.npmjs.com/package/@kaythinks/sweetthings)

This package will be used to convert values from one unit to another.

## Install

```
$ npm install @kaythinks/converterjs
```

## Methods

```js
//This method is for converting a celsius value to a fahrenheit value
celsius2Fahrenheit(celsius);

//This method is for converting a fahrenheit value to a celsius value
fahrenheit2Celsius(fahrenheit);

//This method is for coverting a KILOMETRE value to a METREvalue
km2m(km);

//This method is for converting a METRE value to a KILOMETRE value
m2km(m);

//This method is for converting a METRES/SECONDS value to a KILOMETRE/HOURS value
ms2kmh(ms);

//This method is for converting a KILOMETRES/HOURS value to a METRES/SECONDS value
kmh2ms(kmh);

//This method is for converting a MILLIMETRES value to a METRE value
mm2m(mm);

//This method is for converting a METRE value to a MILLIMETRE value
m2mm(m);


NOTE : All methods expect input values to be of type Number
```   

## Usage

```js
const converterjs = require('@kaythinks/converterjs');

console.log(converterjs.celsius2Fahrenheit(11));
//51.8

```                    