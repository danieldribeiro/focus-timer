import * as elements from './elements.js'
import * as actions from  './actions.js'

export function handleControls(){
  elements.controls.addEventListener('click', (e) => {
    const action = e.target.dataset.action 

    if(typeof actions[action] != 'function'){
      return
    }

    actions[action]();
  })
}