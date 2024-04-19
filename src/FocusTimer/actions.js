import { buttonPressAudio } from "./sounds.js";
import state from "./state.js";
import * as timer from "./timer.js";
import * as elements from './elements.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()

  buttonPressAudio.play()
}

export function reset(){
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  buttonPressAudio.play()
}

export function addTime(){
  state.minutes += 5
  timer.updateDisplay()
  buttonPressAudio.play()
}

export function removeTime(){

  if(state.minutes <= 0) return

  state.minutes -= 5
  timer.updateDisplay()
  buttonPressAudio.play()
}