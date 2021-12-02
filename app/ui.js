'use strict'
const playerTurn = {
  xTurn: true
}
const store = require('./store')
// const appGame = require('../game.js')

const onSignUpSuccess = function () {
  $('.success-message').text('User sign up success!')
  $('form').trigger('reset')
  console.log('success')
}
const onSignUpFailure = function () {
  $('.error-message').text('Failed to sign up')
  $('.success-message').text('')
  console.log('fail')
}

const onSignInSuccess = function (response) {
  $('.success-message').text('Welcome Back!')
  $('form').trigger('reset')
  $('.error-message').text('')
  store.user = response.user
}
const onSignInFailure = function () {
  $('.error-message').text('Failed to sign in')
  $('.success-message').text('')
}

const onSignOutSuccess = function () {
  $('.success-message').text('Good-Bye!')
  $('form').trigger('reset')
  $('.error-message').text('')
}
const onSignOutFailure = function () {
  $('.error-message').text('Failed to sign out')
  $('.success-message').text('')
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
module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  moveMade,
  playerTurn
}
