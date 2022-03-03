const billInput = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.percentage');
const tipCustom = document.getElementById('custom');
const peopleInput = document.getElementById('people');
const errorBill = document.querySelector('.errorBill');
const errorPeople = document.querySelector('.errorPeople');
const tipPayed = document.getElementById('tipAmount2');
const total = document.getElementById('totalAmount');
const reset = document.getElementById('reset');

let billValue = 0;
let tipValue = 0;
let tipAmount = 0;
let numberOfPeople = 0;
let totalAmount = 0;

window.onload = () => {
    reset.disabled = true;
}

billInput.addEventListener('input', () => {
    billValue = parseFloat(billInput.value).toFixed(2); // Get bill total
    reset.disabled = false;
    if (billValue <= 0){
        errorBill.innerHTML = "Can't be zero";
        billInput.style.outline = "2px solid red";
    } else if (billValue === ''){
        errorBill.innerHTML = "Please enter a valid number";
        billInput.style.outline = "2px solid red";
    }
    calculateResult();
});

tipCustom.addEventListener('input', () => {
    tipValue = custom.value;
    calculateResult();
});

peopleInput.addEventListener('input', () => {
    numberOfPeople = peopleInput.value;
    if (numberOfPeople <= 0){
        errorPeople.innerHTML = "Can't be zero";
        peopleInput.style.outline = "2px solid red";
    } else if (numberOfPeople === ''){
        errorPeople.innerHTML = "Please enter a valid number";
        peopleInput.style.outline = "2px solid red";
    }
    calculateResult();
});

const calculateResult = () => {
    if (numberOfPeople > 0) {
        tipAmount = (billValue * (tipValue / 100)) / numberOfPeople;
        totalAmount = (billValue + (tipValue / 100) * billValue) / numberOfPeople;
        tipPayed.innerHTML = "$" + tipAmount.toFixed(2);
        total.innerHTML = "$" + totalAmount.toFixed(2);
    }
};

for (let i = 0; i < tipBtns.length; i++){
    tipBtns[i].addEventListener('click', () => {
        tipBtns[i].classList.toggle("active");
        if (!tipBtns[i].classList.contains("active")){
            tipValue = 0;
        } else {
            tipValue = tipBtns[i].value;
        }
        calculateResult();
    });
};

reset.addEventListener('click', () => {
    location.reload();
});