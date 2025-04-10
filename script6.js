
const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const totalDisplay = document.getElementById('total');
const calcButton = document.getElementById('calculate');


function calculateTotal() {

  const pricePerLiter = parseFloat(priceInput.value);
  const liters = parseFloat(litersInput.value);


  const total = pricePerLiter * liters;


  totalDisplay.textContent = `Total: £${total.toFixed(2)}`;
}


calcButton.addEventListener('click', calculateTotal);
