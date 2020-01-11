var fs = require('fs');

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

var rand = function(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = function(opts) {

	opts = opts || {};

	var addNumbers = opts.numbers || false;
	var addDeterminers = opts.determiners || false;

	this.next = function() {

		addNumbers = addNumbers || false;

		var instance = [
			extent[rand(0, extent.length)],
			attribute[rand(0, attribute.length)],
			nouns[rand(0, nouns.length)]
		];

		if (addNumbers) {
			var numbers = [];
			switch(rand(0, 5)) {
				case 1:
					numbers = [ones[rand(0, ones.length)]];
					break;
				case 2:
					numbers = [teens[rand(0, teens.length)]];
					break;
				case 3:
					numbers = [tens[rand(0, tens.length)]];
					if (rand(0, 2)) {
						numbers.push(ones[rand(0, ones.length)]);
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
			switch (rand(0, 2)) {
				case 1:
					instance.unshift(determiners[rand(0, determiners.length)]);
			}
		}

		return instance.join('-');
	};

};