const root = document.querySelector('#root');
const main = document.createElement('div');

const userBalance = 0;
const userMonthBalance = 0;
const differentialPercentage = 0;

main.setAttribute('id', 'container--main');

const balanceSection = document.createElement('div');
balanceSection.setAttribute('id', 'container--balance');
balanceSection.classList.add('flex', 'spaced');
balanceSection.innerHTML = `
    <div class="spaced">
        <div>
            My balance
        </div>
        <div>
            ${userBalance}
        </div>
    </div>
    <div class="spaced">
        <img src="" alt="image of something">
    </div>
`

const chartSection = document.createElement('div');
chartSection.setAttribute('id', 'container--chart-section');
chartSection.classList.add('flex', 'spaced');
chartSection.innerHTML = `
    <div>
        <div>
            <div class="spaced">Spending - Last 7 days</div>
            <div class="spaced">Chart</div>     
        </div>
        <div id="container--chart-section-bottom" class="spaced">
            <div>
                <div>
                    Total this month
                </div>
                <div>
                    ${userMonthBalance}
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