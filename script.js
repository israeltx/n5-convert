// Select form elements
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const expense = document.getElementById('expense')
const category = document.getElementById('category')

// Select the list elements
const expenseList = document.querySelector('ul')
const expenseQuantity = document.querySelector('aside header p span')

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

// Add a new expense item to the list
function expenseAdd(newExpense) {
  try {
    // Create the new li element and add style
    const expenseItem = document.createElement('li')
    expenseItem.classList.add('expense')

    const expenseIcon = document.createElement('img')
    expenseIcon.setAttribute('src', `img/${newExpense.category_id}.svg`)
    expenseIcon.setAttribute('alt', newExpense.category_name)

    // Create the expense information
    const expenseInfo = document.createElement('div')
    expenseInfo.classList.add('expense-info')
    
    // Create the expense name
    const expenseName = document.createElement('strong')
    expenseName.textContent = newExpense.expense

    // Create the expense category
    const expenseCategory = document.createElement('span')
    expenseCategory.textContent = newExpense.category_name

    // Create the expense value
    const expenseAmount = document.createElement('span')
    expenseAmount.classList.add('expense-amount')
    expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`

    // Create the remove icon
    const removeIcon = document.createElement('img')
    removeIcon.classList.add('remove-icon')
    removeIcon.setAttribute('src', 'img/remove.svg')
    removeIcon.setAttribute('alt', 'remover')

    // Add the new name and catogry to the information div
    expenseInfo.append(expenseName, expenseCategory)

    // Add new item information
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

    // Add new item to the list
    expenseList.append(expenseItem)

    // Update the total number of items added
    updateTotals()

  } catch (error) {
    alert('Não foi possível atualizar a lista de despesa')
    console.log(error);
  }

  
}

// Update the total value
function updateTotals() {
  try {
    // Get all the list items
    const items = expenseList.children
    expenseQuantity.textContent = `${items.length} ${items.length > 1 ? 'despesas' : 'despesa'}`

  } catch (error) {
    console.log(error);
    alert('Não foi possível atualizar os totais')
  }
}