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

let bill;
let tipAmount;
let numOfPeople;

billDiv.innerHTML = `
    <div id="billable">Bill ${bill}</div>
    <div><input type="text" placeholder="$" id="billInput" /></div>
`
tipSelectDiv.innerHTML = `
    <div>Select Tip %</div>
    <div>
        <button id="btn-5" value="5">5%</button>
        <button id="btn-10" value="10">10%</button>
        <button id="btn-15" value="15">15%</button>
        <button id="btn-25" value="25">25%</button>
        <button id="btn-50" value="50">50%<button>
        <input placeholder="Custom" id="tipAmountInput" />
    </div>
`
peopleNumDiv.innerHTML = `
    <div>
        Number of People
    </div>
    <div>
        <input placeholder="0" id="numPeopleInput"/>
    </div>
`

const tipAmountDiv = document.createElement('div');
const totalPerPersonDiv = document.createElement('div');
const resetButtonDiv = document.createElement('div');

let tipAmountPerPeople = 0;
let totalPerPerson = 0;

tipAmountDiv.innerHTML = `
    <div>
        Tip amount
    </div>
    <div>
        $${tipAmountPerPeople}
    </div>
`

totalPerPersonDiv.innerHTML = `
    <div>
        Total
    </div>
    <div>
        $${totalPerPerson}
    </div>
`

resetButtonDiv.innerHTML = `
    <div id="resetButtonDiv">
        <button>RESET</button>
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
const billable = document.querySelector('#billable'); 

billInput.addEventListener("input", () => {
    bill = billInput.value;
    console.log(bill);
    billable.innerHTML = bill;
});

const btn5 = document.querySelector('#btn-5');
const btn10 = document.querySelector('#btn-10');
const btn15 = document.querySelector('#btn-15');
const btn25 = document.querySelector('#btn-25');
const btn50 = document.querySelector('#btn-50');
const tipAmountInput = document.querySelector('#tipAmountInput');

btn5.addEventListener("click", () => {
    tipAmount = btn5.value;
    console.log(tipAmount);
});

btn10.addEventListener("click", () => {
    tipAmount = btn10.value;
    console.log(tipAmount);
});

btn15.addEventListener("click", () => {
    tipAmount = btn15.value;
    console.log(tipAmount);
});

btn25.addEventListener("click", () => {
    tipAmount = btn25.value;
    console.log(tipAmount);
});

btn50.addEventListener("click", () => {
    tipAmount = btn50.value;
    console.log(tipAmount);
});

tipAmountInput.addEventListener("input", () => {
    tipAmount = tipAmountInput.value;
    console.log(tipAmount);
});

const numPeopleInput = document.querySelector('#numPeopleInput');
numPeopleInput.addEventListener("input", () => {
    numOfPeople = numPeopleInput.value;
    console.log(numOfPeople);
});