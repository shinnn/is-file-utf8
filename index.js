'use strict';

const isUtf8 = require('is-utf8');
const readChunk = require('read-chunk');

function handleError(err) {
  if (Array.isArray(err)) {
    return Promise.reject(err[0]);
  }

  return Promise.reject(err);
}

module.exports = function isFileUtf8(...args) {
  const arglen = args.length;

  if (arglen !== 1) {
    return Promise.reject(new RangeError(`Expected 1 argument (path: <string>), but got ${
      arglen === 0 ? 'no' : arglen
    } arguments instead.`));
  }

  return readChunk(args[0], 0, 4).then(isUtf8, handleError);
};
