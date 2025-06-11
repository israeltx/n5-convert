// Select form elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Capture input event for formatting
amount.oninput = () => {
  // Remove non numerical characters from the input value
  let value = amount.value.replace(/\D/g, '')

  // Convert values to cents (150/100 = 1.5 or R$ 1,50)
  value = Number(value) / 100

  // Update the value
  amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    // Format the value to Brazilian Reais
    value = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    // Return the formatted value
    return value
}

form.onsubmit = (event) => {
  event.preventDefault()
}