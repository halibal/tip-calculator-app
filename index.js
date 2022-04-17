// reaching elements start
const bill = document.querySelector('#billInput')
const NoP = document.querySelector('#NoP')
const totalCalculated = document.querySelector('#totalCalculated')
const tipCalculated = document.querySelector('#tipCalculated')
const percent = document.getElementsByClassName('percent')
const err = document.getElementById('err')
const custom = document.getElementById('custom')
const reset = document.getElementById('reset')
const NoPDiv = document.getElementById('NoPDiv')
const billDiv = document.getElementById('billDiv')
// reaching elements end



// replacing custom value with empty string on click
custom.addEventListener('click', function(){
    custom.value = ''
})



// reset button function starts
reset.addEventListener('click', function(){
    bill.value = "0.0";
    NoP.value = 0;
    totalCalculated.innerHTML = '0.00';
    tipCalculated.innerHTML = '0.00';
    err.innerHTML = ''
    custom.value = 'Custom' 
    NoPDiv.classList.remove("bd-coral", "bd-cyan");
    billDiv.classList.remove("bd-coral", "bd-cyan");
    custom.classList.remove("bd-coral", "bd-cyan");
})
// reset button function ends


function calculatep5() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
    }

    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
    }

    else if 
    (!isNaN(NoPP) && !isNaN(billP)) {
        let total = (billP/20+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP/20/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }
    else {
        err.innerHTML = `This is not a number`

    }
    
}

function calculatep10() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
    }

    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
    }

    else if (!isNaN(NoPP) && !isNaN(billP)) {
        let total = (billP/10+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP/10/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }
    else {
        err.innerHTML = `This is not a number`
    }
}

function calculatep15() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
    }

    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
    }
    
    else if (!isNaN(NoPP) && !isNaN(billP)) {
        let total = (billP*15/100+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP*15/100/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }
    else {
        err.innerHTML = `This is not a number`
    }
}

function calculatep25() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
    }

    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
    }
    
    else if (!isNaN(NoPP) && !isNaN(billP)) {
        let total = (billP/4+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP/4/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }
    else {
        err.innerHTML = `This is not a number`
    }
}

function calculatep50() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
    }

    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
    }

    else if (!isNaN(NoPP) && !isNaN(billP)) {
        let total = (billP/2+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP/2/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }

    else {
        err.innerHTML = `This is not a number`
    }
}

custom.addEventListener('input', customCalculated)


function customCalculated() {
    let billP = parseFloat(bill.value)
    let NoPP = parseFloat(NoP.value)
    let custom1 = parseFloat(custom.value)
    
    if (billP == 0 && NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-coral");
    }
    else if (billP == 0) {
        err.innerHTML = `Can not be zero`;
        billDiv.classList.add("bd-coral");
        NoPDiv.classList.add("bd-cyan");
        NoPDiv.classList.remove("bd-coral");
    }
    else if (NoPP == 0) {
        err.innerHTML = `Can not be zero`;
        NoPDiv.classList.add("bd-coral");
        billDiv.classList.add("bd-cyan");
        billDiv.classList.remove("bd-coral");
    }

    else if (!isNaN(NoPP) && !isNaN(billP) && !isNaN(custom1)) {
        let total = ((billP*custom1/100)+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP*custom1/100/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
        NoPDiv.classList.remove("bd-coral", "bd-cyan");
        billDiv.classList.remove("bd-coral", "bd-cyan");
    }
    else {
        err.innerHTML = `This is not a number`
    }
}




















































































// bill.addEventListener('input', setBillValue);
// NoP.addEventListener('input', setPeople);


// billValue = setBillValue();
// setNum = setPeople();

// function validateFloat(s) {
//     var rgx = /^[0-9]*\.?[0-9]*$/; 
//     return s.match(rgx);   
// }

// function setBillValue() {
//     if (bill.value.includes(',')) {
//         bill.value = bill.value.replace(',', '.');
//     }

//     if (!validateFloat(bill.value)){
//        bill.value = bill.value.substring(0, bill.value.length-1);
//     }

//     billValue = parseFloat(bill.value);
    
//     return billValue;
// }


// function setPeople() {
//     setNum = parseFloat(NoP.value);
//     return setNum;
// }


// let total5 = ((billValue.value + billValue.value/20)/setNum.value)
// let total10 = ((billValue + billValue/10)/setNum)
// let total15 = ((billValue + billValue*15/100)/setNum)
// let total25 = ((billValue + billValue/4)/setNum)
// let total50 = ((billValue + billValue/2)/setNum)

// let totals = [total5, total10, total15, total25, total50]

// percent[0].addEventListener('click', function() {
//         totalCalculated.innerHTML = total5
//     })

