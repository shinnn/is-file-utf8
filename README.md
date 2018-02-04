# is-file-utf8

[![npm version](https://img.shields.io/npm/v/is-file-utf8.svg)](https://www.npmjs.com/package/is-file-utf8)
[![Build Status](https://travis-ci.org/shinnn/is-file-utf8.svg?branch=master)](https://travis-ci.org/shinnn/is-file-utf8)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/is-file-utf8.svg)](https://coveralls.io/github/shinnn/is-file-utf8?branch=master)

Check if a file at the given path is [UTF-8](https://tools.ietf.org/html/rfc3629)-encoded

```javascript
const isFileUtf8 = require('is-file-utf8');

(async () => {
  await isFileUtf8('package.json'); //=> true
  await isFileUtf8('screenshot.png'); //=> false
})();
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm).

```
npm install is-file-utf8
```

## API

```javascript
const isFileUtf8 = require('is-file-utf8');
```

### isFileUtf8(*path*)

*path*: `string` [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer) [`URL`](https://nodejs.org/api/url.html#url_class_url)  
Return: `Promise<boolean>`

## License

[ISC License](./LICENSE) © 2018 Shinnosuke Watanabe
