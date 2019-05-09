var items = ["Do it in Kickstart", "Do it in Masonry", "Write some damn tests", "Use Datadog!", "Ship it! :squirrel:", "Get Poke Bowl at Global", "Make Paaaasta", "Explain proper shoelace tying protocol", "Remove Ember Engines"]

var item = items[Math.floor(Math.random()*items.length)];

document.write('<h1 class="almost">' + item + '</h1>');