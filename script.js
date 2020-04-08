'use strict';
let money = +prompt("vhoh is your budzet", 25);
let date =prompt("vvedi datu yyyy-mm-dd", '2015-04-13');

let appData={
    byudjet: money,
    timeData: date,
    expenses:{},
    notexpenses:{},
    dopmaney:[],
    saving: false
};

for (let i = 0; i < 2; i++ ) {
    let obyazatelnaya= prompt("vvedi statu roshodow");
    let cena = prompt("skolko deneg");

    if( (typeof(obyazatelnaya)) === 'string' && obyazatelnaya != null && cena != null && obyazatelnaya != '' && cena != '') {
       console.log("done");
        appData.expenses[obyazatelnaya] = cena;
    } else if ( obyazatelnaya == null || cena == null ){
        alert("vvedena otmena");
        break;
    } else {
        alert("sliszkom dlinnoe ili, nepravelnyi tip , vvedi eszcho raz");
        i--;
    }
    console.log(i);
}
appData.maneyPerDay = appData.byudjet/30;

alert("byudzet na odin den " + appData.maneyPerDay);

if (appData.maneyPerDay < 100) {
    console.log("minimalnuy uroven dostatka");
} else if(appData.maneyPerDay>100 && appData.maneyPerDay < 2000){
    console.log("sredniy uroven dostatka");
} else if(appData.maneyPerDay > 2000) {
    console.log("dohrena deneg");
} else{
    console.log("chtoto poshlo ne tak");
}
