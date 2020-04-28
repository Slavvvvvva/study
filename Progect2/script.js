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

    //MODAL

    let more = document.querySelector(".more");
    let overlay = document.querySelector(".overlay");
    let close = document.querySelector(".popup-close");

    more.addEventListener("click",function(){
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    });
    close.addEventListener("click",function(){
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = ""
    });

    //Form

    let messege = {
        loading : "loading",
        success : "ok",
        failure : "error..."
    };
    
    let form = document.querySelector(".main-form");
    let input = form.getElementsByTagName('input');
    let statusMessage = document.createElement("div");
    
    statusMessage.classList.add("status");
    
    let clearInput = function() {
        for(let i = 0; i<input.length; i++){
            input[i].value ="";
        }
    };
    
    form.addEventListener("submit", function(event){
    
        event.preventDefault();
        form.appendChild(statusMessage);
              let request = new XMLHttpRequest();
              request.open("POST","server.php");
              request.setRequestHeader ("Content-Type", "application/json; charset=utf-8");
              let formData = new FormData(form);
              let obj ={};
          
              formData.forEach(function(value, key) {
                     obj[key]= value;
                 }
              )
              let json = JSON.stringify(obj);
              request.send(json);
    
        function buttonForm(){
            return new Promise(function(resolve,reject){
              request.addEventListener("readystatechange", function() {
                  if (request.readyState<4) {
                      resolve();
                  } else if(request.readyState === 4 && request.status == 200){
                      resolve();
                  } else {
                      reject();
                  }
              });
          });
        }
        
        buttonForm()
              .then( () => statusMessage.innerHTML= messege.loading)
              .then( () => statusMessage.innerHTML= messege.success)
              .catch( () => statusMessage.innerHTML = messege.failure)
              .then(clearInput)
    });        

    //slider//

    let slidIndex = 2 ;
    let slides = document.querySelectorAll('.slider-item');
    let prev  = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let dotsWrap = document.querySelector(".slider-dots");
    let dots = document.querySelectorAll(".dot");

    function showISlides(n){

        if ( n >slides.length) {
            slidIndex =1;
        }
        if (n < 1){
            slidIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slidIndex - 1].style.display = "block";
        dots[slidIndex - 1].classList.add("dot-active");
    };

    showISlides(slidIndex);

    function plusSlide(n){
       showISlides(slidIndex +=n) ;
    }
    function currentSlide(n){
        showISlides(slidIndex = n);
    }

    prev.addEventListener("click", function(){
        plusSlide(-1);
    });

    next.addEventListener("click", function(){
        plusSlide(1);
    });

    dotsWrap.addEventListener("click",function(event){
        for(let i=0; i<dots.length+1; i++){
            if(event.target.classList.contains('dot') && event.target ==dots[i-1]){
                currentSlide(i);
            }
        }

    });

    // Calc
    let piople = document.querySelectorAll('.counter-block-input')[0];
    let deys = document.querySelectorAll('.counter-block-input')[1];
    let plase = document.querySelector('#select');
    let totalSum = document.querySelector('#total');
    let pioplesum = 0 ;
    let daysSum = 0 ;
    let total = 0 ;

    totalSum.innerHTML = 0;

    piople.addEventListener('change', function(){
            pioplesum = +this.value;
            total = (daysSum +pioplesum)*4000;

        if(deys.value == ''||this.value ==''){
            totalSum.innerHTML = 0;
        } else {
            totalSum.innerHTML = total;
        }
    });

    deys.addEventListener('change', function(){
        daysSum = +this.value;
         total = (daysSum +pioplesum)*4000;
    
        if(piople.value == '' || this.value=='') {
                totalSum.innerHTML = 0;
        } else {
            totalSum.innerHTML = total;
        };
    });   

    plase.addEventListener('change', function(){
        if(deys.value == '' || piople.value == ''){
            totalSum.innerHTML = 0;
        } else {
            let a = total;
            totalSum.innerHTML = a* this.options[this.selectedIndex].value;
        }
    });
    

}); 