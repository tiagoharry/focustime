import {
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonSubtractMinutes
} from "./elements.js";

export default function({ timer, sound }) {
  
    buttonPlay.addEventListener('click', ()=> {
    timer.countdown();  
  });

  buttonStop.addEventListener('click', ()=> {
    timer.reset();
    //sound.pauseSounds();
  });

  buttonAddMinutes.addEventListener('click', ()=> {
    timer.addMinutes();
  });

  buttonSubtractMinutes.addEventListener('click', ()=> {
    timer.subtractMinutes();
  });  
  
}
