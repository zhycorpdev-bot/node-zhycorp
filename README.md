<div align="center">
  <br />
  <p>
    <a href="https://zhycorp.xyz"><img src="https://api.zhycorp.xyz/assets/images/logo.png" width="546" alt="zhycorp.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/DxenCeV"><img src="https://img.shields.io/discord/332877090003091456?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/zhycorp.js"><img src="https://img.shields.io/npm/v/zhycorp.js.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/zhycorp.js"><img src="https://img.shields.io/npm/dt/zhycorp.js.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/zhycorp/zhycorp.js"><img src="https://img.shields.io/david/zhycorp/zhycorp.js.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Example Usage](#usage)
- [Links](#links)
- [Contributing](#contributing)

## About
> A simple API wrapper for [Zhycorp Nation Bot List](https://zhycorp.xyz/bots), and written in TypeScript

## Links

- [Website](https://zhycorp.xyz/)
- [Documentation](https://github.com/zhycorp/zhycorp.js#usage)
- [Zhycorp Discord server](https://discord.gg/DxenCeV)
- [GitHub](https://github.com/zhycorp/zhycorp.js)
- [NPM](https://www.npmjs.com/package/zhycorp.js)

## Installation

```bash
$ yarn add zhycorp.js
```
or with NPM
```bash
$ npm install zhycorp.js
```

## Usage
- Javascript: 
```js
const { ZhycorpWrapper } = require("zhycorp.js");
const Zhycorp = new ZhycorpWrapper();

// Async/Await
(async function() {
    const result = await Zhycorp.getBot("id bot");
    console.log(result);
});

// Then
Zhycorp.getBot("id bot").then(console.log).catch(console.error);
```

- ES6:
```ts
import { ZhycorpWrapper } from "zhycorp.js";

const Zhycorp = new ZhycorpWrapper();

// Async/Await
(async function() {
    const result = await Zhycorp.getBot("id bot");
    console.log(result);
});

// Then
Zhycorp.getBot("id bot").then(console.log).catch(console.error);
```

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested,
See [the contribution guide](https://github.com/zhycorp/zhycorp.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.