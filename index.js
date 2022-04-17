const bill = document.querySelector('#billInput')
const NoP = document.querySelector('#NoP')
const totalCalculated = document.querySelector('#totalCalculated')
const tipCalculated = document.querySelector('#tipCalculated')
const percent = document.getElementsByClassName('percent')


bill.addEventListener('input', setBillValue);
NoP.addEventListener('input', setPeople);

let billValue = 0.0;
let setNum = 0;

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/; 
    return s.match(rgx);   
}

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }

    if (!validateFloat(bill.value)){
       bill.value = bill.value.substring(0, bill.value.length-1);
    }

    billValue = parseFloat(bill.value);
    console.log(billValue);
}

function setPeople() {
    setNum = parseFloat(NoP.value);
    console.log(setNum);
}



let total5 = ((billValue + billValue/20)/setNum)
let total10 = ((billValue + billValue/10)/setNum)
let total15 = ((billValue + billValue*15/100)/setNum)
let total25 = ((billValue + billValue/4)/setNum)
let total50 = ((billValue + billValue/2)/setNum)

let totals = [total5, total10, total15, total25, total50]

percent[0].addEventListener('click', function() {
        totalCalculated.innerHTML = total5.value
    })




