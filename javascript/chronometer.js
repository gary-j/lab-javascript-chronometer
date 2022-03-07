class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    // if(callback) par prévention, car elle peut recevoir une callback
    if(callback){
   this.intervalId = setInterval(callback, 100)
  //  this.intervalIdMilli = setInterval(callback, 100)
    }
    // Ajoute +1 à this.currentTime toutes les 1000ms
    // Le 3eme argument est facultatif
   this.intervalId = setInterval(()=>this.currentTime++, 100)
  //  this.intervalIdMilli = setInterval(()=>this.MilliCurrentTime++, 100)

  }
 
  getMinutes() {
    // ... your code goes here
    //retourne un number de minute
    let minute = Math.floor((this.currentTime) / 600)
    return minute
  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor((this.currentTime / 10) % 60);
    return seconds
  }

  getMilliSeconds(){
    let milliseconds = Math.floor((this.currentTime*100 )%99+1)
    // if (milliseconds === 100){
    //     milliseconds = 0;
    // }
    return milliseconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
     return value.toString().padStart(2, '0');
    }
    return value.toString()
  }

  stop() {
    // ... your code goes here
      console.log(this.intervalId, 'ARRET DEMANDE');
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime=0;
    clearInterval(this.intervalId);
  }

  split() {
    // ... your code goes here
    let milliseconds = this.computeTwoDigitNumber(this.getMilliSeconds());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `${minutes}:${seconds}:${milliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
