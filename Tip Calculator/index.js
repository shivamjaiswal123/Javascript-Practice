const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const btn = document.getElementById("calculate-btn");
const total = document.getElementById("total");

btn.addEventListener('click', calculateAMount)

function calculateAMount(){
    const amount = billInput.value;
    const tip = tipInput.value;

    const totalAmount = amount * (1 + tip/100);
    total.innerText = `$${totalAmount.toFixed(2)}`
}