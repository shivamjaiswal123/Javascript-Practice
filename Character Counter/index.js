const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remCounter = document.getElementById("remaining-counter");


textArea.addEventListener('input', updateCounter)

function updateCounter(){
    totalCounter.innerText = textArea.value.length
    remCounter.innerText = textArea.getAttribute("maxlength") - textArea.value.length
}

updateCounter()