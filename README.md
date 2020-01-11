# ID Phrase Generator
---

Generates unique phrases for ids that make more sense than normal, and rememberable*

### Why?

Most random name generators don't seem to generate as fun/goofy phrases. The lack of diversity by getting a list of names/animals/etc, just isn't enough...

Rest assured that the random phrases aren't always perfect, as it otherwise would limit the entryopy.

### How

I just put together 2 adjectives and nouns at first. The first is an 'extent' adjective (e.g. longlasting, everlasting). The second uses an attribute adjective (e.g. red, short, simple). Finally append it to the end and you get something goofy, such as '`everlasting-red-sweets`', add numbers and you could have '`twelve-everlasting-red-sweets`', or a determiner '`the-twelve-everlasting-red-sweets`'.

*Yes, to those among the elite in the english language, I did just use the phrases 'extend adjective' and 'attribute adjective'.*

### Installation

```
npm install Quacky2200/id-phrase-generator
```

Cloning directly into your project...
```
git clone https://github.com/Quacky2200/id-phrase-generator
```

### Usage

**There is an example available in example.js** but here's another

```
var IDPhraseGenerator = require('id-phrase-generator');
```

You must then create a new instance which can have the following options:
- numbers - always shown
- determiners - shown randomly (coin-flip)
```
var generator = new IDPhraseGenerator({
	numbers: true,
	determiners: true
});
```

This gives you a generator that you can continually call with the same options.
```
> console.log(generator.next());
the-twelve-everlasting-red-sweets
```

### Example randomised phrases

These were exciting to find when running for the first time:
- dateless-navy-octopus
- poor-distressed-visions
- foolish-tepid-hands
- colourless-fearless-bikes
- tedious-economical-gamers
- constant-blue-nails
- excellent-crunchy-comedians
- subterranean-refined-ants
- vibrant-fir-nose
- deep-natural-serbs
- archaic-teal-emojis
- extreme-hot-folks
- electrifying-balmy-dragons
- talented-sexy-londoners
- constant-straight-tutors
- violent-impure-pensioners
- excellent-lime-disease
- secret-pricy-superheroes
- brilliant-base-policemen
- dulcet-brown-cleaners
- poor-budget-facts
- timeless-copper-gamers
- sticky-somber-wizards
- unthinkable-stylish-knuckles
- excellent-icy-werewolves

Lastly, for those who like adding numbers, and perhaps an odd determiner:
- five-supernatural-tidy-laws
- fourty-four-fatigued-small-beasts
- thoughtful-seven-modern-downloads
- my-revolutionary-sweltering-oldies
- whose-two-unbroken-cinnamon-community
- twenty-one-perky-maroon-gurus
- eternal-two-romantic-werewolves
- every-14-significant-cheesy-bartenders
- every-indefinite-saffron-visions

*Please note that the generation of these phrases are random, any offending phrases are purely co-incidental, and may contain career names (e.g. boring-yellow-therapists).*

### Pull Requests

Depending on the changes made, I may accept some pull requests. Please note, however, that I will eventually prevent pull requests if the lists are too long, as they will undoubtedly become overpopulated, and thus, remove the effective humor and nonsensical phrasing.