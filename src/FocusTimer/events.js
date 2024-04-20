import * as elements from './elements.js'
import * as actions from  './actions.js'
import * as sounds from './sounds.js'
import state from './state.js'

export function handleControls(){
  elements.controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action 

    if(typeof actions[action] != 'function'){
      return
    }

    actions[action]();
  })
}

export function handleSounds(){
  elements.sounds.addEventListener('click', (e) => {
    const action = e.target.dataset.action

    actions[action]();

    const soundElements = elements.sounds.children

    if(state.isMute == false || state.actualSound != null){
      sounds.forest.pause()
      sounds.rain.pause()
      sounds.coffeeShop.pause()
      sounds.firePlace.pause()
    }

    switch(e.target){
      case soundElements[0]:
        state.isMute = false
        sounds.forest.play()
        break;
      case soundElements[1]:
        sounds.rain.play()
        state.isMute = false
        break;
      case soundElements[2]:
        sounds.coffeeShop.play()
        state.isMute = false
        break;
      case soundElements[3]:
        sounds.firePlace.play()
        state.isMute = false
        break;
    }
  })
}