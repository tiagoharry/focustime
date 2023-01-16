import { minutesDisplay, secondsDisplay } from "./elements.js";

export default function({sound}) {
    function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    setTimeout(function() {

      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);  
      let finish = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if( finish ) {
        //controls().buttonStop
        //sound.pauseSounds()
  
        return
      }       
        
      if( seconds <= 0 ) {
        seconds = 60;
        --minutes;
      }
        
      updateDisplay(minutes, String(seconds - 1));
        
      countdown();
    }, 1000);
  }

  function reset() {
    secondsDisplay.textContent = "00";
    minutesDisplay.textContent = "00";
    sound.pauseSounds();
  }

  function subtractMinutes() {
    let minutes = Number(minutesDisplay.textContent); 
    minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")

    if( minutes <= 0 ) {
        minutesDisplay.textContent = "00";
    }
  }

  function addMinutes() {
    let minutes = Number(minutesDisplay.textContent); 
    minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
  }

  return {
    countdown,
    reset,
    subtractMinutes,
    addMinutes,
  }
}
