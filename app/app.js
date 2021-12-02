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
  $('#0').on('click', authEvents.onMoveMade)
  $('#1').on('click', authEvents.onMoveMade)
  $('#2').on('click', authEvents.onMoveMade)
  $('#3').on('click', authEvents.onMoveMade)
  $('#4').on('click', authEvents.onMoveMade)
  $('#5').on('click', authEvents.onMoveMade)
  $('#6').on('click', authEvents.onMoveMade)
  $('#7').on('click', authEvents.onMoveMade)
  $('#8').on('click', authEvents.onMoveMade)
})
