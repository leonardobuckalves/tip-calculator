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
const tipSelect = document.createElement('div');
const peopleNum = document.createElement('div');

billDiv.innerHTML = `
    <div>Bill</div>
    <div><input placeholder="$" /></div>
`
tipSelect.innerHTML = `
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
peopleNum.innerHTML = `
    <div>
        Number of People
    </div>
    <div>
        <input placeholder="0" />
    </div>
`

const tipAmount = document.createElement('div');
const totalPerPerson = document.createElement('div');

tipAmount.innerHTML = `
    <div>
        Tip amount
    </div>
    <div>
        $0.00
    </div>
`

totalPerPerson.innerHTML = `
    <div>
        Total
    </div>
    <div>
        $0.00
    </div>
`


root.appendChild(main);

main.appendChild(leftSection);
main.appendChild(rightSection);

leftSection.appendChild(billDiv);
leftSection.appendChild(tipSelect);
leftSection.appendChild(peopleNum);

rightSection.appendChild(tipAmount);
rightSection.appendChild(totalPerPerson);