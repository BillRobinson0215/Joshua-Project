'use strict'
// const joshGame = require('../game.js')
const playerTurn = {
  xTurn: true
}
const store = require('./store')

const onSignUpSuccess = function () {
  $('.message').text('New account created Professor.')
  $('form').trigger('reset')
  console.log('success')
}
const onSignUpFailure = function () {
  $('.message').text('Invalid account Professor.')
  console.log('fail')
}

const onSignInSuccess = function (response) {
  $('.message').text('Welcome back Professor.')
  $('form').trigger('reset')
  store.user = response.user
}
const onSignInFailure = function () {
  $('.message').text('Invalid entry Professor.')
}

const onSignOutSuccess = function () {
  $('.message').text('Good-Bye Professor.')
  $('form').trigger('reset')
}
const onSignOutFailure = function () {
  $('.message').text('Failed to sign out')
}

const moveMade = function (event) {
  console.log('this before logging move in moveMade', playerTurn)
  if (playerTurn.xTurn === true) {
    $(`#div${event.target.value}`).text('X')
  } else {
    $(`#div${event.target.value}`).text('O')
  }
  console.log('this is after logging the move in moveMade', playerTurn)
  $(event.target).hide()
  console.log('this is after hiding the button in moveMade', playerTurn)
}

const restart = function () {
//     let joshGame.xMoves = []
//     let joshGame.oMoves = []
  $('.game').show()
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  moveMade,
  playerTurn,
  restart
}
