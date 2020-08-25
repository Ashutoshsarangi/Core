let interval;
function StopWatchHandler(attr = "reset") {
  if (attr == "start") {
    let i = 0;
    interval = setInterval(() => {
      i = i + 1;
      document.getElementById("timer").textContent = i;
    }, 100);
  }
  else if (attr == "stop") {
    clearInterval(interval);
  } else {
    document.getElementById("timer").textContent = 0;
  }
}