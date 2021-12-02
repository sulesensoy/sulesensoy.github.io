// Side Navigation Menu JS Code

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");
let scrollBtn = document.querySelector(".scroll-btn");

menuBtn.onclick = function () {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden";
    cancelBtn.style.display = "block";
}

cancelBtn.onclick = function () {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
    cancelBtn.style.display = "none";
}

// Sticky Navigation Menu JS Code

const stickyHeight = 20;
const scrollBtnHeight = 640;

let nav = document.querySelector("nav");
let val;
window.onscroll = function () {
    if (document.documentElement.scrollTop > stickyHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }

    if (document.documentElement.scrollTop >= scrollBtnHeight) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}





