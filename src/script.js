const root = document.querySelector('#root');
const main = document.createElement('div');

const userBalance = 0;
const userMonthBalance = 0;
const differentialPercentage = 0;

main.setAttribute('id', 'container--main');

const balanceSection = document.createElement('div');
balanceSection.setAttribute('id', 'container--balance');
balanceSection.classList.add('flex', 'center', 'spaced');
balanceSection.innerHTML = `
    <div class="spaced">
        <div>
            My balance
        </div>
        <div class="fontSize">
            R$${userBalance}
        </div>
    </div>
    <div class="flex spaced">
        <div id="circle"></div>
        <div id="circle-right"></div>
    </div>
`

const chart = `
    <div class="flex row">
        <div class="spaced">mon</div>
        <div class="spaced">tue</div>
        <div class="spaced">wed</div>
        <div class="spaced">thu</div>
        <div class="spaced">fri</div>
        <div class="spaced">sat</div>
        <div class="spaced">sun</div>
    </div>
`

const chartSection = document.createElement('div');
chartSection.setAttribute('id', 'container--chart-section');
chartSection.classList.add('flex', 'center', 'spaced');
chartSection.innerHTML = `
    <div>
        <div>
            <div class="spaced"><h3>Spending - Last 7 days</h3></div>
            <div class="spaced">${chart}</div>     
        </div>
        <div id="container--chart-section-bottom" class="spaced">
            <div>
                <div>
                    Total this month
                </div>
                <div>
                    R$${userMonthBalance}
                </div>
            </div>
            <div>
                <div>
                    ${differentialPercentage}%
                </div>
                <div>
                    From last Month
                </div>
            </div>
        </div>
    </div>
`

root.appendChild(main);
main.appendChild(balanceSection);
main.appendChild(chartSection);