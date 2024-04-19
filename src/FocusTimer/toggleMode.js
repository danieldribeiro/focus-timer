import * as element from './elements.js'

element.toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
  console.log(document.documentElement.classList)
})