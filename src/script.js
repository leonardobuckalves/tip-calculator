const root = document.querySelector('#root');
const main = document.createElement('div');

main.setAttribute('id', 'container__main');

const leftSection = document.createElement('div');
const rightSection = document.createElement('div');

leftSection.setAttribute('id', 'container__main_left');
leftSection.classList.add('padded');

rightSection.setAttribute('id', 'container__main_right');
rightSection.classList.add('padded');

const billDiv = document.createElement('div');
const tipSelectDiv = document.createElement('div');
const peopleNumDiv = document.createElement('div');

let bill = 0;
let tipAmount = 0;
let numOfPeople = 0;

billDiv.innerHTML = `
    <div class ="marginTop05">Bill</div>
    <div><input type="number" placeholder="$" id="billInput" /></div>
`
tipSelectDiv.innerHTML = `
    <div class ="marginTop05">Select Tip %</div>
    <div id="tipSelectButtonsDiv">
        <button id="btn-5" value="5">5%</button>
        <button id="btn-10" value="10">10%</button>
        <button id="btn-15" value="15">15%</button>
        <button id="btn-25" value="25">25%</button>
        <button id="btn-50" value="50">50%</button>
        <input type="number" placeholder="Custom %" id="tipAmountInput" />
    </div>
`
peopleNumDiv.innerHTML = `
    <div class ="marginTop05">
        Number of People
    </div>
    <div>
        <input type="number" placeholder="0" id="numPeopleInput" />
    </div>
`

const tipAmountDiv = document.createElement('div');
const totalPerPersonDiv = document.createElement('div');
const resetButtonDiv = document.createElement('div');

let tipAmountPerPerson = 0;
let totalPerPerson = 0;

tipAmountDiv.innerHTML = `
    <div>
        Tip amount p/ person
    </div>
    <div>
        <span id="tipAmountPersonSpan">${tipAmountPerPerson}</span>
    </div>
`

totalPerPersonDiv.innerHTML = `
    <div>
        Total p/ person
    </div>
    <div>
        <span id="totalAmountPersonSpan">${totalPerPerson}</span>
    </div>
`

resetButtonDiv.innerHTML = `
    <div id="resetButtonDiv">
        <button id="btn-reset">RESET</button>
    </div>
`

root.appendChild(main);

main.appendChild(leftSection);
main.appendChild(rightSection);

leftSection.appendChild(billDiv);
leftSection.appendChild(tipSelectDiv);
leftSection.appendChild(peopleNumDiv);

rightSection.appendChild(tipAmountDiv);
rightSection.appendChild(totalPerPersonDiv);
rightSection.appendChild(resetButtonDiv);

const billInput = document.querySelector('#billInput'); 

billInput.addEventListener("input", () => {
    bill = billInput.value;
    updateValues();
});

const btn5 = document.querySelector('#btn-5');
const btn10 = document.querySelector('#btn-10');
const btn15 = document.querySelector('#btn-15');
const btn25 = document.querySelector('#btn-25');
const btn50 = document.querySelector('#btn-50');
const tipAmountInput = document.querySelector('#tipAmountInput');

btn5.addEventListener("click", () => {
    tipAmount = btn5.value;
    clearPercentageInput();
    updateValues();
});

btn10.addEventListener("click", () => {
    tipAmount = btn10.value;
    clearPercentageInput();
    updateValues();
});

btn15.addEventListener("click", () => {
    tipAmount = btn15.value;
    clearPercentageInput();
    updateValues();
});

btn25.addEventListener("click", () => {
    tipAmount = btn25.value;
    clearPercentageInput();
    updateValues();
});

btn50.addEventListener("click", () => {
    tipAmount = btn50.value;
    clearPercentageInput();
    updateValues();
});

tipAmountInput.addEventListener("input", () => {
    tipAmount = tipAmountInput.value;
    updateValues();
});

const numPeopleInput = document.querySelector('#numPeopleInput');
numPeopleInput.addEventListener("input", () => {
    numOfPeople = numPeopleInput.value;
    updateValues();
});

const tipAmountPersonSpan = document.querySelector('#tipAmountPersonSpan');
const totalAmountPersonSpan = document.querySelector('#totalAmountPersonSpan');

const updateValues = () => {
    calcTip(bill, tipAmount, numOfPeople);
    calcBill(bill, numOfPeople, tipAmountPerPerson);
    tipAmountPersonSpan.innerHTML = `$${tipAmountPerPerson}`;
    totalAmountPersonSpan.innerHTML = `$${totalPerPerson}`;
}

const clearPercentageInput = () => {
    tipAmountInput.value = "";
}

function calcBill(billAmount, peopleAmount, tipAmount) {
    if (peopleAmount == NaN || peopleAmount == undefined || peopleAmount == 0 || peopleAmount == "")
    {
        peopleAmount = 1;
    }
    return totalPerPerson = (billAmount / peopleAmount) + tipAmount;
}
function calcTip(billAmount, tipAmount, peopleAmount) {
    if (peopleAmount == NaN || peopleAmount == undefined || peopleAmount == 0 || peopleAmount == "")
    {
        peopleAmount = 1;
    }
    return tipAmountPerPerson = ( billAmount * (tipAmount / 100) ) / peopleAmount;
}

const resetEverything = () => {
    billInput.value = "";
    tipAmountInput.value = "";
    numPeopleInput.value = "";
    bill = 0;
    tipAmount = 0;
    numOfPeople = 0;
    tipAmountPerPerson = 0;
    totalPerPerson = 0;
    updateValues();
}

const btnReset = document.querySelector('#btn-reset');
btnReset.addEventListener("click", () => {
    resetEverything();
});