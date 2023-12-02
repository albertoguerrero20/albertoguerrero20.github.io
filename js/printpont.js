


function initialize() {
  window.addEventListener("scroll", parallax)

}


function parallax() {
  const BRAND = document.getElementById("content-parallax");
  const SPAN = document.getElementById("printpont-1");
  const LOGO = document.getElementById("logo-1");
  const WHITE_BOX = document.getElementById("white-box");
  const PARALLAX = document.getElementById("parallax");
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);


  if (scroll < 120) {
    WHITE_BOX.style.right = (scroll - 350) + "px";
    BRAND.style.left = (scroll) + "px";
  }
  else {
    WHITE_BOX.style.right = ((scroll - 350)) + "px";
    BRAND.style.left = "120px";

  }

  if (scroll > 300 && scroll < 550) {
    WHITE_BOX.style.right = "-40px";
    LOGO.style.scale = ((scroll - 300)) * 0.2;
    LOGO.style.transform += "rotate(" + (scroll / 200) + "deg)";
    SPAN.style.visibility = ("hidden");
  } else {
    LOGO.style.scale = 1;
    LOGO.style.transform = "rotate(0deg)";
    SPAN.style.visibility = ("visible");
  }

  if (scroll > 450) {
    PARALLAX.style.position = "static";
    PARALLAX.style.scale = "0.2";
  }
  else {
    PARALLAX.style.scale = "";
    PARALLAX.style.position = "fixed";
  }

  if (scroll > 380) {
    LOGO.style.visibility = "hidden"
  } else {
    LOGO.style.visibility = "visible"
  }
}

initialize();