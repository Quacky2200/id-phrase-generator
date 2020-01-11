var IDPhraseGenerator = require('./index');

var generator = new IDPhraseGenerator();


var len = 80;
function print(...str) {
	var leftover = str.join(' ') || '\n';

	for (var i = 0; i < leftover.length; i += len) {
		var current = leftover.slice(i, i + len);

		var lastSpace = current.lastIndexOf(' ') + 1;

		if (lastSpace > 0 && current.length == len && current[i + len] !== ' ') {
			current = current.slice(0, lastSpace);
			i -= (len - lastSpace);
		}

		console.log(current);
	}
}

var tests = [
	{
		test: 'normal',
		desc: (
			'This example runs the generator without any options set, ' +
			'this should provide us without numbers or determiners'
		),
		opts: {},
		amount: 4
	},
	{
		test: 'Number',
		desc: (
			'This example runs the generator with the number option set, ' +
			'which will always output a number in any format'
		),
		opts: {numbers: true},
		amount: 4
	},
	{
		test: 'Number & Determiners',
		desc: (
			'This example runs the generator with both number and determiners set, ' +
			'this will show numbers all the time, but determiners by chance'
		),
		opts: {numbers: true, determiners: true},
		amount: 5
	},
	{
		test: 'Alternate',
		desc: (
			'This example runs the generator with the alternate functionality. ' +
			'This will allow us to optionally have either a determiner or number ' +
			'set not both. Determiner chances still apply. Strings without numbers ' +
			'are using determiner chances and means that some will be missing both.'
		),
		opts: {alternate: true},
		amount: 10
	}
];


for(var i in tests) {
	var item = tests[i];

	print('='.repeat(len));
	print('Test:\n' + item.test + '\n');
	print('Description:\n' + item.desc);
	print('='.repeat(len));

	generator.update(item.opts);

	for(var x = 1; x < item.amount + 1; x++) {
		print(x + '/' + item.amount, '-', generator.next());
	}

	print();
	print(' '.repeat(38) + '----' + ' '.repeat(38));
	print();
}