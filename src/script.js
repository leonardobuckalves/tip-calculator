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

billDiv.innerHTML = `
    <div>Bill</div>
    <div><input placeholder="$" /></div>
`
tipSelectDiv.innerHTML = `
    <div>Select Tip %</div>
    <div>
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%<button>
        <input placeholder="Custom" />
    </div>
`
peopleNumDiv.innerHTML = `
    <div>
        Number of People
    </div>
    <div>
        <input placeholder="0" />
    </div>
`

const tipAmountDiv = document.createElement('div');
const totalPerPersonDiv = document.createElement('div');
const resetButtonDiv = document.createElement('div');

tipAmountDiv.innerHTML = `
    <div>
        Tip amount
    </div>
    <div>
        $0.00
    </div>
`

totalPerPersonDiv.innerHTML = `
    <div>
        Total
    </div>
    <div>
        $0.00
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