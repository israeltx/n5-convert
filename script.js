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

// Obtain form values through the submit event
form.onsubmit = (event) => {
  // Prevent the page from refreshing
  event.preventDefault()

  // Object with new expense details
  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  }

  // Function call to add the item on the list
  expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
  try {
    // Create the new li element and add style
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

  } catch (error) {
    alert('Não foi possível atualizar a lista de despesa')
    console.log(error);
  }
}