"use strict";

const menubar = document.querySelector(".menubar");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const wrap = document.querySelector("#wrap");
const main_menu = document.querySelectorAll(".main_menu");
// const header_menu = document.querySelectorAll(".header_menu");

menubar.addEventListener("click", () => {
  menubar.classList.add("active");
  menu.classList.add("active");
  wrap.classList.add("active");
});

close.addEventListener("click", () => {
  menubar.classList.remove("active");
  menu.classList.remove("active");
  wrap.classList.remove("active");
});

function activeLink() {
  main_menu.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

main_menu.forEach((item) => item.addEventListener("click", activeLink));

// function activeMenu() {
//     header_menu.forEach((item) =>
//     item.classList.remove("active"));
//     this.classList.add("active");
// }

// header_menu.forEach((item) =>
// item.addEventListener("click", activeMenu));
