'use strikct';
let date ;
let money;

function start(){
    money = +prompt("vhoh is your budzet", 25); 
    date =prompt("vvedi datu yyyy-mm-dd", '2015-04-13');

    while(isNaN(money)|| money=="" || money==null ) {
        money = +prompt("vhoh is your budzet", 25);
    }
}
start();



let appData={
    byudjet: money,
    timeData: date,
    expenses:{},
    notexpenses:{},
    dopmaney:[],
    saving: true
};

function vvodTrat(){
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
}

vvodTrat();

appData.maneyPerDay = (appData.byudjet/30).toFixed(1);

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

function checkSavings(){
    if (appData.saving == true) { 
        let save = +prompt("skolko nakopil");
        let procent =+prompt("kakoy procent");
        appData.monthIncome = save/100/12*procent;
        alert ("dohod za mesyac s depozita: " + appData.monthIncome);

    }
}

checkSavings();