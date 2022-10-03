var seconds = 0;
var minutes = 0;
var hours = 0;

var alarm = document.querySelector('#sound'); 
var interval;

var start_btn = document.querySelector('.start-btn');
var pause_btn = document.querySelector('.pause-btn');


document.body.addEventListener('keypress', (event) => {
  const key = event.key;
  const code = event.keyCode;
  console.log(`Key: ${key}, Code ${code}`);

  if (key == 'i' || key == 'I') {
    start();
  }else if (key == 'p' || key == 'P') {
    pause();
  }else{
    key == 'c' || key == 'C'
    stop();
  }

});

function watch() {
  // diminui um segundo
  seconds--;
  // se segundos for menor ou igual a zero 
  if(seconds <= 0){
    // se minutos foi maior que zero
    if(minutes > 0){
      // diminui um minuto
      minutes--;
      // e passa os segundos para 59
      seconds = 59;
    // também se horas for menor ou igual a zero  
    }else if (hours > 0) {
      // subtrai uma hora 
      hours--;
      // passa os minutos para 59
      minutes = 59;
      // passa os segundos para 59
      seconds = 59;
    }else if(seconds == 0 && minutes == 0 && hours == 0) {
      document.getElementById('sound').play();
    }
    else{ 
      stop();
    }
  }

  document.getElementById('watch').innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);

}

function twoDigits(digit) {
  if(digit < 10){
    return('0' + digit);
  }else{
    return(digit);
  }
}

function start() {
  seconds = document.querySelector('#seconds').value;
  minutes = document.querySelector('#minutes').value;
  hours = document.querySelector('#hours').value;
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
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('watch').innerText = '00:00:00';
  pause_btn.setAttribute('style', 'display: none');
  start_btn.removeAttribute('style', 'display: none');

  // location.reload();
}

