let flag = false;
function addAnimation1() {
  flag = !flag;
  if (flag) {
    document.getElementById("animation1").classList.remove("closeSlider");
    document.getElementById("animation1").classList.add("openSlider");
  } else {
    document.getElementById("animation1").classList.remove("openSlider");
    document.getElementById("animation1").classList.add("closeSlider");
  }
}

function animation2() {
  document.getElementById("carouselImage").classList.add("addcarousel");
}