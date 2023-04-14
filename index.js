import quotes from "./dummyAPI.js";

// you can access individual quotes from the quotes array like this:
console.log(quotes[0].text); // outputs the text of the quote
console.log(quotes[0].author); // outputs the author of the quote
console.log(quotes.length); // logs the quotes length


// your job is to use DOM manipulation to display a random quote in the index.html page that is retrieved from the quotes array



//variable to get the div with id display
const displayQuotes = document.getElementById('display');


const button = document.getElementById('button');
function generate() {
    //Variable to geneterate a random index
    const randomQuote = Math.floor(Math.random() * (quotes.length+1));
    displayQuotes.textContent = `"` + quotes[randomQuote].text + `"`  + "\n" + quotes[randomQuote].author; 
}

button.addEventListener('click',generate)



