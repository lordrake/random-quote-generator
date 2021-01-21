console.log('js collegato');


function getQuote() {
  console.log('Button clicked, Getting a quote..');
}



const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);
