import Timer from "../js/timer.js";
import Sounds from "../js/sound.js";
import Controls from "../js/controls.js";
import { 
    buttonPlay,
    buttonStop,
    buttonAddMinutes,
    buttonSubtractMinutes,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
    
const configTimer = {
    minutesDisplay,
    secondsDisplay,
    buttonStop,
}

const timer = Timer(configTimer);
const sounds = Sounds();

Controls({ timer, sounds });
Timer({sounds})

