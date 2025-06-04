// Currencies price variables
const USD = 5.63;
const EUR = 6.44;
const GBP = 7.65;

// Get form elements
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result')

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
      convertCurrency(amount.value, USD, 'US$');
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£');
      break;
  }
});

// Currceny convertion function
function convertCurrency(amount, price, symbol) {
  try {
    // Show selected currency price
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calculate and format the total value
    let total = formatCurrencyBRL(amount * price).replace('R$', '')
    // update the total value
    result.textContent = `${total} Reais`

    // Add class to show the footer with results
    footer.classList.add('show-result');
  } catch (error) {
    // Remove class from footer to hide it
    footer.classList.remove('show-result');
    console.log(error);
    alert('Não foi possível fazer a conversão. Por favor, tente mais tarde');
  }
};

// Format the currency in Brazilian Reais
function formatCurrencyBRL(value) {
  // 1st convert to number to use method for formatting (R$ 00,00)
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};