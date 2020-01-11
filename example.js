var IDPhraseGenerator = require('./index');

var generator = new IDPhraseGenerator({
	numbers: true, // Always shows
	determiners: true // Optionally shows due to lack of entropy
});

// Show 3 examples
console.log(generator.next(), generator.next(), generator.next());