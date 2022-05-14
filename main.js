var lderUp = document.querySelector("#lderU"),
  lderBottom = document.querySelector("#lderB"),
  lder = document.querySelector("#loading-bars");

window.addEventListener("load", load);

function load() {
  lderUp.classList.add("disappear");
  lderBottom.classList.add("disappear");
  lder.style = "opacity:0";
}
