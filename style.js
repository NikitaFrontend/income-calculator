//----------------объявили начальные перменные----------------------------------------------------------------

//доходы инпутов
const incomeSalary = document.getElementById("income-salary"),
	incomeFreelance = document.getElementById("income-freelance"),
	incomeExtra1 = document.getElementById("income-extra-1"),
	incomeExtra2 = document.getElementById("income-extra-2");
//расходы инпутов
const costsFlat = document.getElementById("costs-flat"),
	costsHouseServices = document.getElementById("costs-house-services"),
	costsTransport = document.getElementById("costs-transport"),
	costsCredit = document.getElementById("costs-credit");

//общие интупы
const totalMonthInput = document.getElementById("total-month"),
	totalDayInput = document.getElementById("total-day"),
	totalYearInput = document.getElementById("total-year");

let totalMonth, totalDay, totalYear;

//копилка

const moneyBoxRange = document.getElementById("money-box-range"),
	accumulationInput = document.getElementById("accumulation"),
	spend = document.getElementById("spend");

let accumulation = 0;
let totalPrecents = 0;

//---------------работаем с доходами/расходами/копим в месяц(без копилки)-----------------------------------------------------------------

let inputs = document.querySelectorAll(".input")
for (input of inputs) {
	input.addEventListener("input", () => {
		countingAvailableMoney()
		if (!(moneyBoxRange.value == "0")) {
			calculationPrecents()
		}
	})
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
	const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2); // доходы
	const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit); // расходы
	totalMonth = totalPerMonth - totalCosts;
	totalMonthInput.value = totalMonth;
}

//-------------------работаем с рейндж-------------------------------------------------------------

moneyBoxRange.addEventListener("input", e => {
	let totalPrecentsEl = document.getElementById("total-precents");
	totalPrecents = e.target.value;
	totalPrecentsEl.innerHTML = totalPrecents;
	if (!(totalMonthInput.value == "0")) {
		calculationPrecents();
	}
});

const calculationPrecents = () => {
	accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
	accumulationInput.value = accumulation;
	spend.value = totalMonth - accumulation;
	totalDay = (spend.value / 30).toFixed();
	totalDayInput.value = totalDay;
	totalYear = accumulation * 12;
	totalYearInput.value = totalYear;
}















