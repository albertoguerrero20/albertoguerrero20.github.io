let pixel = document.documentElement.scrollTo
const BODY = document.querySelector("body");
const HEADER = document.querySelector("header");
const LINK = document.querySelectorAll(".header-link");
const IMG = document.getElementById("logo-img")

window.addEventListener("scroll", background);
window.addEventListener("scroll", reveal);


function background() {
  var reveals = document.querySelectorAll(".section-3");
  var term = document.querySelectorAll(".term");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().bottom;
    var elementBottom = term[i].getBoundingClientRect().top;

    if (elementTop < windowHeight + 250 && elementBottom > windowHeight - 150) {
      BODY.classList.add("black");
      HEADER.classList.add("black");
      changeColor(true);
    } else if (elementBottom < windowHeight - 400) {
      BODY.classList.remove("black");
      HEADER.classList.remove("black");
      changeColor(false);
    } else {
      BODY.classList.remove("black");
      HEADER.classList.remove("black");
      changeColor(false);
    }

  }
}

// Funtion to change the color of the header span
function changeColor(flag) {
  if (flag) {
    for (var i = 0; i < LINK.length; i++) {
      LINK[i].style.color = "white";
      IMG.style.backgroundImage = "url(../img/reyam-2.svg)";
    }
  } else {
    for (var i = 0; i < LINK.length; i++) {
      LINK[i].style.color = "black";
      IMG.style.backgroundImage = "url(../img/reyam.svg)";
    }
  }

}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);




