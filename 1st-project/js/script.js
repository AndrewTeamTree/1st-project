/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  
  {quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
   source: '-Patrick McKenzie, ',
   citation: 'Twitter, ',
   year: 2016 
  },

  {quote: 'No one cares how much you know, until they know how much you care.',
   source: '-Theodore Roosevelt, ',
   citation: 'Web Search, ',
   year: 2023 
  },

  {quote: 'No one is you and that is your power.',
   source: '-Dave Grohl, ',
   citation: 'Web Search, ',
   year: 2023
  },

  {quote: 'The best moments are the happiest moments!',
   source:  '-Andrew Stevens, ',
   citation: 'Just created it, ',
   year: 2023
  },

  {quote: 'Dont take Life too seriously, no one makes it out Alive!',
   source: '-Elbert Hubbard, ',
   citation: 'Web Search, ',
   year: 2023
  }, 

  {quote: 'No one cares about it more than you. Give it the attention it needs.',
   source: '-Robert Kiyosaki, ',
   citation: 'Web Search, ',
   year: 2023
  }
];


var colors = [
  'red',
  'blue',
  'orange',
  'green',
  'gold',
  'silver'
];

let _source;
let _quote;
var message;
var _body = document.querySelector("body");

function getRandomQuote(message) {
     var rando = Math.floor(Math.random() * (quotes.length));
     _quote = quotes[rando].quote;
     _source = quotes[rando].source;
     citations = quotes[rando].citation;
     years = quotes[rando].year;
     message = `<p class=\".quote\"> ${_quote}
             <p class=\"source\"> ${_source} 
           <span class=\"citation\"> ${citations} 
         <span class=\"year\"> ${years} 
      </span>
     </p>`;
     document.querySelector(`.quote`).innerHTML = message;
     
  return message;
   
}

function printQuote() {
 
  for(let i = 0; i < colors.length; i++) {
      var randomColor = Math.floor(Math.random() * colors.length);
      _body.style.backgroundColor= colors[randomColor];
      var da = getRandomQuote();

   return da

}
}

document.getElementsByClassName("quote").innerHTML = getRandomQuote();
    




 /* click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);