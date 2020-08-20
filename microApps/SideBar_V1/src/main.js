let sliderFlag = false;
function handleSlider() {
  sliderFlag = !sliderFlag;
  let temp;
  sliderFlag ? temp = "block" : temp = "none";
  document.getElementById("Slider").style.display = temp;
}