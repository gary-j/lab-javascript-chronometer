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

  return minutes
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  // console.log(seconds, 'secondes');
  secDecElement.textContent = seconds[0];
  secUniElement.textContent =  seconds[1];

  return seconds
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  // console.log('appel ok de printSplit');
  // add a <li> in <ol id="splits"></ol>
  let li = document.createElement('li');
  splitsElement.appendChild(li);

  // let currentTime = chronometer.currentTime;
  // let printSplit = chronometer.computeTwoDigitNumber(currentTime);
  let seconds =chronometer.computeTwoDigitNumber( printSeconds());
  let minutes = chronometer.computeTwoDigitNumber( printMinutes());

  li.innerHTML = `${minutes}:${seconds}`;

}

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML=''
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
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

    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
  }else{
    chronometer.start(printTime);
    console.log('start chronometer');

    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
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
