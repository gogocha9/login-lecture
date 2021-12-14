"use strict";

const menubar = document.querySelector(".menubar");
const menu = document.querySelector(".menu");



menubar.addEventListener("click", () => {
    menubar.classList.toggle("active");
    menu.classList.toggle("active");
});