<div align="center">
    <br />
    <p>
        <a href="https://zhycorp.com"><img src="https://api.zhycorp.com/assets/images/logo.png" width="124" height="124"
                alt="node-zhycorp" /></a>
    </p>
    <br />
    <p>
        <a href="https://discord.gg/DxenCeV"><img
                src="https://img.shields.io/discord/332877090003091456?color=7289da&logo=discord&logoColor=white"
                alt="Discord server" /></a>
        <a href="https://www.npmjs.com/package/node-zhycorp"><img
                src="https://img.shields.io/npm/v/node-zhycorp.svg?maxAge=3600" alt="NPM version" /></a>
        <a href="https://www.npmjs.com/package/node-zhycorp"><img
                src="https://img.shields.io/npm/dt/node-zhycorp.svg?maxAge=3600" alt="NPM downloads" /></a>
        <a href="https://david-dm.org/zhycorp/node-zhycorp"><img
                src="https://img.shields.io/david/zhycorp/node-zhycorp.svg?maxAge=3600" alt="Dependencies" /></a>
    </p>
</div>

## Table of contents
- [About](#about)
- [Installation](#installation)
- [Example Usage](#usage)
- [Contributing](#contributing)
- [Links](#links)

## About
> A simple API wrapper for [Zhycorp Nation Bot List](https://zhycorp.com/bots), and written in TypeScript

## Installation

```bash
$ yarn add node-zhycorp
```
or with NPM
```bash
$ npm install node-zhycorp
```

## Usage
- JavaScript: 
```js
const { ZhycorpWrapper } = require("node-zhycorp");
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
import { ZhycorpWrapper } from "node-zhycorp";

const Zhycorp = new ZhycorpWrapper();

// Async/Await
(async function () {
    const result = await Zhycorp.getBot("bot id");
    console.log(result);
});

// Then
Zhycorp.getBot("bot id").then(console.log).catch(console.error);
```

[Click here](https://github.com/zhycorp/node-zhycorp/blob/master/examples) for more example.

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested,
See [the contribution guide](https://github.com/zhycorp/node-zhycorp/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Links

- [Website](https://zhycorp.com/)
- [Discord server](https://zhycorp.com/discord)
- [Documentation](https://github.com/zhycorp/node-zhycorp#usage)
- [GitHub](https://github.com/zhycorp/node-zhycorp)
- [NPM](https://www.npmjs.com/package/node-zhycorp)