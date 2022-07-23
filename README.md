<p align="center"><a href="https://github.com/VadimMalykhin/binance-icons"><img src="https://raw.githubusercontent.com/VadimMalykhin/binance-icons/main/.github/assets/header.svg" alt="◆ BINANCE ICONS"></a></p>

# ◆ BINANCE ICONS

The Crypto/currency icons listed on <a href="https://bit.ly/3qEmuJp">Binance</a> exchange.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#live-demo)
- [Resources](#resources)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)
- [License](#license)

## Installation

### Package

```shell
npm add binance-icons
```

### Content Delivery Network (CDN)

```
https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/manifest.json
```

```
https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/btc.svg
https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/eth.svg
https://cdn.jsdelivr.net/gh/vadimmalykhin/binance-icons/crypto/bnb.svg
...
```

### Zip Archive

```shell
https://github.com/VadimMalykhin/binance-icons/archive/refs/heads/main.zip
```

## Usage

### Node.js

**JavaScript**

```js
const { binanceCryptoIcons, binanceEtfIcons, binanceCurrencyIcons } = require('binance-icons')

const hasBtc = icon.has('btc')
const getBtc = icon.get('btc')
```

**TypeScript**

```ts
import { binanceCryptoIcons, binanceEtfIcons, binanceCurrencyIcons } from 'binance-icons'

const hasBtc = icon.has('btc')
const getBtc = icon.get('btc')
```

### Zip Archive

Use the `manifest.json` file to resolve all available icons.

## Live demo

- [Website](https://vadimmalykhin.github.io/binance-icons/)
- [Preview](https://github.com/VadimMalykhin/binance-icons/blob/main/PREVIEW.md)

## Resources

- [Figma](https://www.figma.com/community/file/1055487423124551755)
- [NPM](https://www.npmjs.com/package/binance-icons)

## Contributing

Contributions are more than welcome, if you are interested please take a look to the [Contributing Guidelines](https://github.com/VadimMalykhin/binance-icons/blob/main/.github/CONTRIBUTING.md).

## Disclaimer

All trademarks, logos and brand names are the property of their respective owners.

## License

[MIT](https://github.com/VadimMalykhin/binance-icons/blob/main/LICENSE)
