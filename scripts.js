// Currencies price variables
const USD = 5.63;
const EUR = 6.44;
const GBP = 7.65;

// Get form elements
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');

// Get only numbers from the amount input
amount.addEventListener('input', () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, '');
});

// Lister the submit event from the form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  switch (currency.value) {
    case 'USD':
      convertCurrency(amount.value, USD, 'US$')
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€')
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£')
      break;
  }
});

// Currceny convertion function
function convertCurrency(amount, price, symbol) {
  console.log(amount, price, symbol)
}