const quotes = [
  'Do it in Kickstart',
  'Do it in Masonry',
  'Write some damn tests',
  'Use Datadog!',
  'Ship it! :shipit:',
  'Getting Poke at Global',
  'Make Paaaasta',
  'Explain proper shoelace tying protocol',
  'Remove Ember Engines',
  'Dates are Hard',
  'This was already solved in Corbit',
  'Be ready for pain',
  'Think of it as a code opportunity',
  'Hang out with his best friend Beyonce',
  'Fridge handle',
  'Never wear an undershirt'
];

export default function getQuote() {
    return quotes[Math.trunc(Math.random() * quotes.length)]
};
