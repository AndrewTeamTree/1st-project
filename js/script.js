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

var quotes = [

  {quote: 'No pressure, no diamonds.',
   source: 'Thomas Carlyle',
   citation: 'Wisdomquotes.com',
   year: 2023
  },
  

  {quote: 'No one is you and that is your power.',
   source: 'Dave Grohl',
   citation: 'Web Search',
   year: 2023
  },

  {quote: 'The best moments are the happiest moments!',
   source:  'Andrew Stevens',
   citation: 'Just created it',
   year: 2023
  },

  {quote: 'Dont take Life too seriously, no one makes it out Alive!',
   source: 'Elbert Hubbard',
   citation: 'Web Search',
   year: 2023
  }, 

  {quote: 'No one cares about it more than you. Give it the attention it needs.',
   source: 'Robert Kiyosaki',
   citation: 'Web Search',
   year: 2023
  }
];

var colors = [
  'red',
  'blue',
  'orange',
  'green',
  'rgba(97, 29, 29)',
  'silver'
];



/***
 * `getRandomQuote` function
***/
 
function getRandomQuote(array) {  
  
  var rando = Math.floor(Math.random() * quotes.length);
  
  return array[rando].quote;
}

  //global variables that will be boolean
  var isCitation;
  var isYear;
  
  //function to check if the array of objects contains either a citation or a year
  //it doesn't check if there is a quote or a source object because those were required
  function keyCheck(index){
    if(quotes[index].citation !== undefined){
      isCitation=true;
    } else{
      isCitation=false;
    }
    if(quotes[index].year !== undefined){
      isYear=true;
    } else{
      isYear=false;
    }
  }
           

/***
 * `printQuote` function
***/

function printQuote() {
  var _body = document.querySelector("body");
  
  for(let i = 0; i < colors.length; i++) {
    var randomColor = Math.floor(Math.random() * colors.length);
    _body.style.backgroundColor= colors[randomColor];
  }
  var quote = getRandomQuote(quotes);
  var index;
  //loop to see in which index of the array the quotes object came from in order to get
  //the rest of the object properties such as source, year etc.
  for(var i =0;i<5;i++){
    if(quotes[i].quote === quote)
    {
      index = i;
    }
  }

  keyCheck(index);
  var stringOfQuoteProperties;
    if(isCitation === true && isYear === true){
      //if the object has a citation and a year property then print this
      stringOfQuoteProperties = "<p class=\"quote\">"+quotes[index].quote+
        "</p> <p class=\"source\">"+ quotes[index].source +
          "<span class=\"citation\">" +quotes[index].citation+
            "</span><span class=\"year\">"+quotes[index].year+ "</span></p>";
    }else if (isCitation === true && isYear === false) {
      //if the object has a citation but doesn't have a  year property then print this
     stringOfQuoteProperties = "<p class=\"quote\">"+
      quotes[index].quote+ "</p> <p class=\"source\">"+
        quotes[index].source +"<span class=\"citation\">" +
            quotes[index].citation+ "</p>";
    } else if (isCitation===false && isYear===true) {
      //if the object doesn't have a citation, but has a year then print this
     stringOfQuoteProperties = "<p class=\"quote\">"+
      quotes[index].quote+ "</p> <p class=\"source\">"+
        quotes[index].source +"<span class=\"year\">" +
          quotes[index].year+ "</p>";
    } else{
      //below is when the object doesn't contain a citation or a year
      // which we print the normal required portion with only quote and source
     stringOfQuoteProperties = "<p class=\"quote\">"+
      quotes[index].quote+ "</p> <p class=\"source\">"+
        quotes[index].source+"</p>";
}

//Auto Refreshed Quotes
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
 }
 
/***
* click event listener for the print quote button
* DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);