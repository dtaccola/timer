var seconds = document.querySelector('#seconds').value;
var minutes = document.querySelector('#minutes').value;
var hours = document.querySelector('#hours').value;
var alarm = document.querySelector('#sound'); 
var interval;

var start_btn = document.querySelector('.start-btn');
var pause_btn = document.querySelector('.pause-btn');

document.body.addEventListener('keypress', function (event) {
  const key = event.key;
  const code = event.keyCode;
  console.log(`Key: ${key}, Code ${code}`);

  if (key == 'i' || key == 'I') {
    start();
  }else{
    key == 'p' || key == 'P'
    pause();
  }

});

function twoDigits(digit) {
  if(digit < 10){
    return('0' + digit);
  }else{
    return(digit);
  }
}

function start() {
  watch();
  interval = setInterval(watch, 1000);
  start_btn.setAttribute('style', 'display: none');
  pause_btn.removeAttribute('style', 'display: none');
}

function pause() {
  pause_btn.setAttribute('style', 'display: none');
  start_btn.removeAttribute('style', 'display: none');
  clearInterval(interval);
}

function stop() {
  clearInterval(interval);
  document.getElementById('watch').innerText = '00:00:00';
  pause_btn.setAttribute('style', 'display: none');
  start_btn.removeAttribute('style', 'display: none');
  setInterval(location.reload(), 2000);
}

function watch() {
  seconds--;
  if(seconds <= 0){
    if(minutes > 0){
      minutes--;
      seconds = 59;
    }else if(minutes <= 0) {
      hours--;
      minutes = 59;
    }else{ 
      stop();
    }
  }

  document.getElementById('watch').innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);

}