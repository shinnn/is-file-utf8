'use strict';

const {promisify} = require('util');
const {open, read} = require('fs');

const isUtf8 = require('is-utf8');

const promisifiedOpen = promisify(open);
const promisifiedRead = promisify(read);

module.exports = async function isFileUtf8(...args) {
  const arglen = args.length;

  if (arglen !== 1) {
    throw new RangeError(`Expected 1 argument (path: <string>), but got ${
      arglen === 0 ? 'no' : arglen
    } arguments instead.`);
  }

  const fd = await promisifiedOpen(args[0], 'r');
  const {buffer, bytesRead} = await promisifiedRead(fd, Buffer.alloc(4), 0, 4, 0);

  return isUtf8(bytesRead < 4 ? buffer.slice(0, bytesRead) : buffer);
};
