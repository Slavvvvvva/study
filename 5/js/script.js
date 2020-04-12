
let menus = document.querySelectorAll(".menu")[0];
let knopki = document.querySelectorAll(".menu-item");
let adv = document.getElementsByClassName("adv")[0];
let blok = document.querySelectorAll(".column");
let title = document.querySelector("#title");
let otvet = document.querySelector("#prompt");
menus.insertBefore(knopki[2],knopki[1]);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerHTML= "prodaem kolbasu";
let wopros = prompt("lubish govno");
otvet.textContent = wopros;


adv.remove();