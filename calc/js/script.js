
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});


//promis

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function(){

    let request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    function funck1() {
    return new Promise(function(resolve,reject){
        if (request.readyState === 4 && request.status == 200) {
            resolve();
        } else {
            reject();
        }
    });
   }
   funck1
          .then(  () => { let data = JSON.parse(request.response);
                         inputUsd.value = inputRub.value / data.usd ;})
          .catch (  () =>  inputUsd.value = "Что-то пошло не так!")

};