let [seconds, minutes, hours] = [0, 0, 0],
  displayTime = documnet.getElementById('displayTime'),
  timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
