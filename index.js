'use strict';

const isUtf8 = require('is-utf8');
const readChunk = require('read-chunk');

function handleError(err) {
  if (Array.isArray(err)) {
    return Promise.reject(err[0]);
  }

  return Promise.reject(err);
}

module.exports = function isFileUtf8(path) {
  return readChunk(path, 0, 4).then(isUtf8, handleError);
};
