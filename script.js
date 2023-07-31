'use strict';

let money = +prompt("Ваш бюджет на месяц?", '');

let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let expenseName = prompt("Введите обязательную статью расходов в этом месяце", ''),
        expenseAmount = prompt("Во сколько обойдется?", '');

    if (typeof(expenseName) === 'string' && typeof(expenseName) != null && typeof(expenseAmount) != null && expenseName !== '' && expenseAmount !== '' && expenseName.length < 50) {
        appData.expenses[expenseName] = expenseAmount;
    } else i--;
}

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);