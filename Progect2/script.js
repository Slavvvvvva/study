window.addEventListener('DOMContentLoaded',function() {

     'use strict';

    let tab = document.querySelectorAll(".info-header-tab");
    let info = document.querySelector(".info-header");
    let tabContent = document.querySelectorAll(".info-tabcontent");

    function hideTabContent(a) {
        for (let i = a; i<tabContent.length; i++){
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    }

    info.addEventListener("click" , function(event){
        let target = event.target;
        if (target&& target.classList.contains("info-header-tab")){
            for ( let i=0; i < tab.length; i++){
                if (target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // TIMER

    let deadLine = "2020-04-18";

    function getTimeR(endTime){
        let t =Date.parse(endTime)- Date.parse( new Date());
        let second = Math.floor((t/1000)%60);
        let minutes = Math.floor((t/1000/60))%60;
        let hours = Math.floor((t/(1000*60*60)));
        return{
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "second": second
        };

    }

    function setClock (id,endTime){

        let timer = document.getElementById(id);
        let hours = timer.querySelector(".hours");
        let minutes = timer.querySelector(".minutes");
        let second = timer.querySelector(".seconds");
        let timerInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTimeR(endTime);
            if (t.hours <10){
                hours.textContent = `0${t.hours}`;
            } else{
                hours.textContent = t.hours;
            };
            if (t.minutes <10){
                minutes.textContent = "0"+t.minutes;
            } else{
                minutes.textContent = t.minutes;;
            };
            second.textContent = t.second;
            if (t.second <10){
                second.textContent = "0"+t.second;
            } else{
                second.textContent = t.second;
            }

            if(t.total <= 0){
                clearInterval(timerInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                second.textContent = "00";

            }
        }
    }
    setClock("timer", deadLine);
}) ;