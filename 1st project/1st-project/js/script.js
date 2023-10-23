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
  {quote: 'No one cares how much you know, until they know how much you care.',
   source: 'Theodore Roosevelt, Web search of quote image, 2023',
   citation: 'dfhskj' 
  
  },
  {quote: 'No one is you and that is your power.',
   source: 'Dave Grohl, Web search of quote image, 2023',
   citation: 'dfhskj'
   
  },
  {quote: 'That moment you realize you had something, is the moment you realize you lost it!',
   source:  'Andrew Stevens, It just came to me, 2023',
   citation: 'dfhskj'
  },
  {quote: 'Dont take Life too seriously, no one makes it out Alive!',
   source: 'Elbert Hubbard, Web search of quote image,  2023',
   citation: 'dfhskj'
  }, 
  {quote: 'No one cares about it more than you. Give it the attention it needs.',
   source: 'Robert Kiyosaki, Web search of quote image,  2023',
   citation: 'dfhskj'
  }
];


/***
 * `getRandomQuote` function
***/


function getRandomQuote() {

  var rando = Math.floor(Math.random() * (quotes.length));
 
  document.getElementById("quote").innerHTML = quotes[rando].quote;
  document.getElementById("source").innerHTML = quotes[rando].source;
  
return rando
}

/***
 * `printQuote` function
***/

//did something wrong below that would not access citation property

function printQuote() {
   var result = getRandomQuote(); 
   var message =  "<p class='quote'>" + quotes.quote + "</p>" +"<p class='source'>" + quotes.source;
  if ( message.hasOwnProperty('quote-box')) {
 ("<span class='citation'>" + quotes.citation + "</span>" + "<span class='year'>" + quotes.year + "</span>" + "</p>");
  
  document.getElementById('quote-box').innerHTML = message;
  }
  return result, message
    
  
}





  /***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);