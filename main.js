console.log('js collegato');


async function getQuote() {
  console.log('Button clicked, Getting a quote..');

  const endpoint = 'https://api.quotable.io/random';

  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonResponse = await response.json();
    console.log(jsonResponse.content);

  } catch (error) {
    console.log(error);
    alert('Failed to fetch new quote');

  }

}



const newQuoteButton = document.querySelector('#js-new-quote');

newQuoteButton.addEventListener('click', getQuote);
