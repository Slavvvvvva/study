'use strict';
let money =prompt("vhoh is your budzet", 25);
let date =prompt("vvedi datu yyyy-mm-dd", '2015-04-13');
let appData={
    byudjet: money,
    timeData: date,
    expenses:{},
    notexpenses:{},
    dopmaney:[],
    saving: false
};
let obyazatelnaya= prompt("vvedi statu roshodow");
let cena =prompt("skolko deneg");
appData.expenses.obyazatelnaya=cena;
alert("byudzet na odin den" + cena/30);
console.log(appData.byudjet);