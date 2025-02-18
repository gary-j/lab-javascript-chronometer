const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMilliseconds()
  printSeconds()
  printMinutes()
}

function printMinutes() {
  // ... your code goes here
  // currentTime = chronometer.currentTime;
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  // console.log(minutes, 'minute(s)');
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];

  return minutes;
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  // console.log(seconds, 'secondes');
  secDecElement.textContent = seconds[0];
  secUniElement.textContent =  seconds[1];

  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here

  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds());
  // console.log(seconds, 'secondes');

  milDecElement.textContent = milliseconds[0];
  milUniElement.textContent =  milliseconds[1];

  return milliseconds;
}

function printSplit() {
  // ... your code goes here
  // console.log('appel ok de printSplit');
  // add a <li> in <ol id="splits"></ol>
  let li = document.createElement('li');
  splitsElement.appendChild(li);

  li.innerHTML = chronometer.split()
 
}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML=''
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'SPLIT';
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.textContent = 'START';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.textContent = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here

  // Change buttons's classes
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');

  // Change buttons's texts
  if(btnLeftElement.classList.contains('start')){
    chronometer.stop();
    console.log('stop chronometer');
    setStopBtn();
    setResetBtn();

  }else{
    chronometer.start(printTime);
    console.log('start chronometer');
    setStartBtn();
    setSplitBtn();
  }

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnRightElement.classList.contains('split')){
    printSplit();
  }else {
    clearSplits();
    chronometer.reset()
  }
});
