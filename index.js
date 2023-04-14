import quotes from "./dummyAPI.js";

// you can access individual quotes from the quotes array like this:
console.log(quotes[0].text); // outputs the text of the quote
console.log(quotes[0].author); // outputs the author of the quote
console.log(quotes.length); // logs the quotes length

// your job is to use DOM manipulation to display a random quote in the index.html page that is retrieved from the quotes array

//variable to get the div with id display
const displayQuotes = document.getElementById("display");
//get he button
const button = document.getElementById("button");

function generate() {
  //Variable to geneterate a random index
  let randomQuote = Math.floor(Math.random() * (quotes.length + 1));
  // Clean the div display every time
  displayQuotes.textContent = " ";
  
  //insert to p children
  let p = displayQuotes.appendChild(document.createElement("p"));
  let p2 = displayQuotes.appendChild(document.createElement("p"));

  // Insert text on the first child
  p.innerHTML = `" ${quotes[randomQuote].text}"`;

  //verify if the author is anonymous.
  if (quotes[randomQuote].author === null) {
    p2.innerHTML = "Anonymous";
  } else {
    p2.innerHTML = quotes[randomQuote].author;
  }
}

button.addEventListener("click", generate);
