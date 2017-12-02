'use strict';

const {join} = require('path');
const {URL} = require('url');

const fileUrl = require('file-url');
const isFileUtf8 = require('.');
const test = require('tape');

test('isFileUtf8()', async t => {
	t.equal(
		await isFileUtf8(__filename),
		true,
		'should results `true` when the file is UTF-8-encoded.'
	);

	t.equal(
		await isFileUtf8(new URL(fileUrl(join(__dirname, '.eslintignore')))),
		true,
		'should results `true` when the file is empty.'
	);

	t.equal(
		await isFileUtf8(process.argv[0]),
		false,
		'should results `false` when the file is not UTF-8-encoded.'
	);

	try {
		await isFileUtf8(__dirname);
	} catch ({code}) {
		t.equal(
			code,
			'EISDIR',
			'should be rejected when it cannot read the target file.'
		);
	}

	try {
		await isFileUtf8('__this_file_does_not_exist__');
	} catch ({code}) {
		t.equal(
			code,
			'ENOENT',
			'should be rejected when it cannot find the target file.'
		);
	}

	try {
		await isFileUtf8(true);
	} catch ({name}) {
		t.equal(
			name,
			'TypeError',
			'should be rejected when it receives an invalid argument.'
		);
	}

	try {
		await isFileUtf8();
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (path: <string|Buffer|URL>), but got none.',
			'should be rejected when it receives no arguments.'
		);
	}

	try {
		await isFileUtf8('a', 'b');
	} catch (err) {
		t.equal(
			err.toString(),
			'RangeError: Expected 1 argument (path: <string|Buffer|URL>), but got 2 arguments instead.',
			'should be rejected when it receives too many arguments.'
		);
	}

	t.end();
});
