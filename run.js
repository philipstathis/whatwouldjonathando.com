var items = ["Do it in Kickstart", "Do it in Masonry", "Write some damn tests", "Use Datadog!",
             "Ship it! :shipit:", "Get Poke Bowl at Global", "Make Paaaasta", "Explain proper shoelace tying protocol",
             "Remove Ember Engines", "Dates are Hard", "This was already solved in Corbit", "Be ready for pain",
             "Think of it as a code opportunity"];

var item = items[Math.floor(Math.random()*items.length)];

document.write('<h1 class="almost">' + item + '</h1>');
