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
  console.log(currency.value)
});