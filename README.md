<div align="center">
    <br />
    <p>
        <a href="https://zhycorp.xyz"><img src="https://api.zhycorp.xyz/assets/images/logo.png" width="124" height="124"
                alt="zhycorp.js" /></a>
    </p>
    <br />
    <p>
        <a href="https://discord.gg/DxenCeV"><img
                src="https://img.shields.io/discord/332877090003091456?color=7289da&logo=discord&logoColor=white"
                alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/zhycorp.js"><img
                src="https://img.shields.io/npm/v/zhycorp.js.svg?maxAge=3600" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/zhycorp.js"><img
                src="https://img.shields.io/npm/dt/zhycorp.js.svg?maxAge=3600" alt="NPM downloads" /></a>
        <a href="https://david-dm.org/zhycorp/zhycorp.js"><img
                src="https://img.shields.io/david/zhycorp/zhycorp.js.svg?maxAge=3600" alt="Dependencies" /></a>
    </p>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Example Usage](#usage)
- [Contributing](#contributing)
- [Links](#links)

## About
> A simple API wrapper for [Zhycorp Nation Bot List](https://zhycorp.xyz/bots), and written in TypeScript

## Installation

```bash
$ yarn add zhycorp.js
```
or with NPM
```bash
$ npm install zhycorp.js
```

## Usage
- JavaScript: 
```js
const { ZhycorpWrapper } = require("zhycorp.js");
const Zhycorp = new ZhycorpWrapper();

// Async/Await
(async function () {
    const result = await Zhycorp.getBot("bot id");
    console.log(result);
});

// Then
Zhycorp.getBot("bot id").then(console.log).catch(console.error);
```

- ES6:
```ts
import { ZhycorpWrapper } from "zhycorp.js";

const Zhycorp = new ZhycorpWrapper();

// Async/Await
(async function () {
    const result = await Zhycorp.getBot("bot id");
    console.log(result);
});

// Then
Zhycorp.getBot("bot id").then(console.log).catch(console.error);
```

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested,
See [the contribution guide](https://github.com/zhycorp/zhycorp.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Links

- [Website](https://zhycorp.xyz/)
- [Zhycorp Discord server](https://zhycorp.xyz/discord)
- [Documentation](https://github.com/zhycorp/zhycorp.js#usage)
- [GitHub](https://github.com/zhycorp/zhycorp.js)
- [NPM](https://www.npmjs.com/package/zhycorp.js)