'use strict';

var isUtf8 = require('is-utf8');
var PinkiePromise = require('pinkie-promise');
var readChunk = require('read-chunk');

module.exports = function isFileUtf8(path) {
  return new PinkiePromise(function(resolve, reject) {
    readChunk(path, 0, 4, function(err, buf) {
      if (err) {
        reject(err);
        return;
      }

      resolve(isUtf8(buf));
    });
  });
};
