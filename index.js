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


// onclick percentage button functions start
function calculatep(percentage) {
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
        let total = (billP*(percentage/100)+billP)/NoPP
        totalCalculated.innerHTML = total;

        let tip = billP*(percentage/100)/NoPP
        tipCalculated.innerHTML = tip;
        err.innerHTML = ''
    }
    else {
        err.innerHTML = `This is not a number`
    }  
}
// onclick percentage button functions end


// custom button function starts
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
// custom button function ends