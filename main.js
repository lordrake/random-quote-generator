console.log('js collegato');

const spinner = document.querySelector('#js-spinner');

async function getQuote() {

  // remove the "hidden" class on the spinner
  spinner.classList.remove('hidden');
  // disable the quote button
  newQuoteButton.disabled = true;

  const endpoint = 'https://api.quotable.io/random';

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse);
    displayQuote(jsonResponse.content, jsonResponse.author);

  } catch (error) {
    console.log(error);
    alert('Failed to fetch new quote');

  } finally {
    // enable the quote button
    newQuoteButton.disabled = false;
    // add the "hidden" class back again
    spinner.classList.add('hidden');
  }

}

function displayQuote(quote, author) {
  const quoteText = document.querySelector('#js-quote-text');
  const quoteAuthor = document.querySelector('#js-quote-author');

  quoteText.textContent = quote;
  quoteAuthor.textContent = author;
}



const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);
