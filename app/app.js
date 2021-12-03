'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#btn0').on('click', authEvents.onMoveMade)
  $('#btn1').on('click', authEvents.onMoveMade)
  $('#btn2').on('click', authEvents.onMoveMade)
  $('#btn3').on('click', authEvents.onMoveMade)
  $('#btn4').on('click', authEvents.onMoveMade)
  $('#btn5').on('click', authEvents.onMoveMade)
  $('#btn6').on('click', authEvents.onMoveMade)
  $('#btn7').on('click', authEvents.onMoveMade)
  $('#btn8').on('click', authEvents.onMoveMade)
})
