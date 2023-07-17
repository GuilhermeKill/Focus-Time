import Sound from "./sounds.js"
import Time from "./time.js"
import Controls from "./controls.js"
import Events from "./events.js"
import {
    buttonPlay,
    secondsDisplay,
    minutesDisplay,
} from "./elements.js"


const controls = Controls()

const sound = Sound()

const time = Time({
    buttonPlay: buttonPlay,
    secondsDisplay: secondsDisplay,
    minutesDisplay: minutesDisplay
})

const events = Events({controls, time, sound})