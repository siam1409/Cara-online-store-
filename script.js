const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const mobilenavbtn = document.querySelector(".mobile-nav-btn");
const times = document.querySelector(".fa-times");

const addclass = () => {
    navlinks.classList.add("active");
    mobilenavbtn.classList.add("hide");
    };

hamburger.addEventListener("click", () => addclass());

const removeclass = () => {
    navlinks.classList.remove("active");
    mobilenavbtn.classList.remove("hide");
    };

times.addEventListener("click", () => removeclass());
