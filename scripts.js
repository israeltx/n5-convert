const amount = document.getElementById('amount');

// Get only numbers from the amount input
amount.addEventListener('input', () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, '')
  console.log(amount.value)
})