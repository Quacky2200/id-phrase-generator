var fs = require('fs');
var rand = require('./random');

var extent = (fs.readFileSync(__dirname + '/extent-adjectives.txt')
	.toString('utf-8').replace(/\r/g, '').split('\n')
);
var attribute = (fs.readFileSync(__dirname + '/attribute-adjectives.txt')
	.toString('utf-8').replace(/\r/g, '').split('\n')
);
var nouns = (fs.readFileSync(__dirname + '/nouns.txt')
	.toString('utf-8').replace(/\r/g, '').split('\n')
);

var ones = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
];

var teens = [
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
]

var tens = [
	'twenty',
	'thirty',
	'fourty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety',
];

var determiners = [
	'the',
	'your',
	'our',
	'my',
	'some',
	'all',
	'any',
	'those',
	'whose',
	'another',
	'many',
	'few',
	'every',
	'each',
	'several',
	'always',
	'once'
];

module.exports = function(opts) {

	var _opts = opts || {};

	this.update = function(value) {
		_opts = value;

		return this;
	};

	this.next = function() {

		var addNumbers = _opts.numbers || false;
		var addDeterminers = _opts.determiners || false;

		if (_opts.alternate) {
			switch (rand(0, 1)) {
				case 0:
					addNumbers = true;
					addDeterminers = false;
					break;
				case 1:
					addNumbers = false;
					addDeterminers = true;
					break;
			}
		}

		var instance = [
			extent[rand(0, extent.length - 1)],
			attribute[rand(0, attribute.length - 1)],
			nouns[rand(0, nouns.length - 1)]
		];

		if (addNumbers) {
			var numbers = [];
			switch(rand(1, 4)) {
				case 1:
					numbers = [ones[rand(0, ones.length - 1)]];
					break;
				case 2:
					numbers = [teens[rand(0, teens.length - 1)]];
					break;
				case 3:
					numbers = [tens[rand(0, tens.length - 1)]];
					if (rand(0, 2)) {
						numbers.push(ones[rand(0, ones.length - 1)]);
					}
					break;
				case 4:
					numbers = [rand(0, 100)];
			}

			var slice = rand(0, 2);

			var a = instance.slice(0, slice);
			var b = instance.slice(slice, instance.length);
			instance = a.concat(numbers).concat(b);
		}

		if (addDeterminers) {
			switch (rand(0, 1)) {
				case 1:
					instance.unshift(determiners[rand(0, determiners.length - 1)]);
			}
		}

		return instance.join('-');
	};

};