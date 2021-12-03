'use strict'
const joshGame = require('../game.js')
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
  if (playerTurn.xTurn === true) {
    $(`#div${event.target.value}`).text('X')
  } else {
    $(`#div${event.target.value}`).text('O')
  }
  $(event.target).hide()
}

const restart = function () {
  joshGame.xMoves = []
  joshGame.oMoves = []
  $('.game').show()
}

const getPlayerTurn = () => {
  return playerTurn.xTurn
}

const boardState = function (arrayValue) {
  if (playerTurn === true) {
    joshGame.xMoves.push(Number(arrayValue))
  }
  if (playerTurn.xTurn !== true) {
    joshGame.oMoves.push(Number(arrayValue))
  }
  console.log('X: ' + joshGame.xMoves)
  console.log('O: ' + joshGame.oMoves)
}

const toggle = function () {
  if (playerTurn.xTurn !== true) {
    playerTurn.xTurn = true
  } else {
    playerTurn.xTurn = false
  }
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  moveMade,
  restart,
  getPlayerTurn,
  boardState,
  toggle
}
