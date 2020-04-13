'use strict';
let startbtn = document.querySelector("#start");
let budgetValue = document.querySelector(".budget-value");
let daybudgetValue = document.querySelector(".daybudget-value");
let levelValue = document.querySelector(".level-value");
let expensesValue = document.querySelector(".expenses-value");
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.querySelector(".income-value");
let monthsavingsValue = document.querySelector(".monthsavings-value");
let yearsavingsValue = document.querySelector(".yearsavings-value");

let expensesItems = document.querySelectorAll(".expenses-item");
let expensesItemBtn = document.querySelector(".expenses-item-btn");
let optionalexpensesBtn =document.querySelector(".optionalexpenses-btn");
let countBudgetBtn = document.querySelector(".count-budget-btn");
let optionalexpensesItem = document.querySelectorAll(".optionalexpenses-item");
let chooseIncome = document.querySelector(".choose-income");
let checkBox = document.querySelector("#savings");
let sum = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");


let dates ;
let money;
let f;

let appData= {
    byudjet: money,
    timeData: dates,
    expenses:{},
    notexpenses:{},
    dopmaney:[],
    saving: false,
    vvodTrat: f,
    detectDayBudget: function(){},
    detectLevel: function(){},
    checkSavings: function(){},
    chooseOptExpenses: function(){},
    chooseDopManey: function(){}
//for (let key in appData){
  //  console.log(key + "имеет значение" + appData[key]);
//}
}
startbtn.addEventListener('click',function(){
    money = +prompt("vhoh is your budzet", 25); 
    dates =prompt("vvedi datu yyyy-mm-dd", '2015-04-13');

    while(isNaN(money)|| money=="" || money==null ) {
        money = +prompt("vhoh is your budzet", 25);
    }
    appData.byudjet = money;
    appData.timeData =dates;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(dates)).getFullYear();
    monthValue.value = new Date(Date.parse(dates)).getMonth()+1;
    dayValue.value = new Date(Date.parse(dates)).getDay();
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItems.length ; i++ ) {
        let obyazatelnaya= expensesItems[i].value  ;
        let cena = expensesItems[++i].value ;
        if( (typeof(obyazatelnaya)) === 'string' && obyazatelnaya != null && cena != null && obyazatelnaya != '' && cena != '') {
            appData.expenses[obyazatelnaya] = cena;
            sum += +cena;
        } else {
            alert("sliszkom dlinnoe ili, nepravelnyi tip , vvedi eszcho raz");
            i--;
        }
    }
    expensesValue.textContent = sum;
});
console.log(optionalexpensesItem.length);
optionalexpensesBtn.addEventListener('click', function(){
    for(let i=0 ; i<optionalexpensesItem.length ; i++) {
        let opt = optionalexpensesItem[i].value;
        console.log(opt);
        appData.notexpenses[i] = opt ;
        optionalExpensesValue.textContent += appData.notexpenses[i] + "  ";
       
    }
});

countBudgetBtn.addEventListener('click', function(){

    if(appData.byudjet != undefined) {
    appData.maneyPerDay = (appData.byudjet/30).toFixed(1);
    daybudgetValue.textContent = appData.maneyPerDay ; 

    if (appData.maneyPerDay < 100) {
        levelValue.textContent ="minimalnuy uroven dostatka";
    } else if(appData.maneyPerDay>100 && appData.maneyPerDay < 2000){
        levelValue.textContent = "sredniy uroven dostatka";
    } else if(appData.maneyPerDay > 2000) {
        levelValue.textContent = "dohrena deneg";
    } else{
        levelValue.textContent = "chtoto poshlo ne tak";
    }
} else{
    daybudgetValue.textContent = " ne vveden byudjet";
}
});

chooseIncome.addEventListener('input', function(){
    let items; 
    while(!isNaN(items) || items=="" || items==null ) {
        items = chooseIncome.value;
        appData.dopmaney = items.split(', ') ;
        incomeValue.textContent = appData.dopmaney;
    } 
});
checkBox.addEventListener('click', function(){
    if (appData.saving == true){
        appData.saving = false;
    } else{
        appData.saving = true;
    }
});
sum.addEventListener('input', function(){
    if (appData.saving == true){
        let sam = +sum.value; 
        let proc = +percent.value;
        appData.monthIncome = sam/100/12*proc;
        appData.yearIncome = sam/100*proc;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});
percent.addEventListener('input', function(){
    if (appData.saving == true){
    let sam = +sum.value; 
    let proc = +percent.value;
    appData.monthIncome = sam/100/12*proc;
    appData.yearIncome = sam/100*proc;
    monthsavingsValue.textContent = appData.monthIncome.toFixed(2);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(2);
    }
});