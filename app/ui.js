'use strict'
const playerTurn = true
const store = require('./store')
const appGame = require('../game.js')

const onSignUpSuccess = function () {
  $('.success-message').text('User sign up success!')
  $('form').trigger('reset')
}
const onSignUpFailure = function () {
  $('.error-message').text('Failed to sign up')
  $('.success-message').text('')
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
  console.log(event)
//   if (playerTurn === true) {
//     $(targetDiv).text('X')
//   } else {
//     $(targetDiv).text('O')
//   }
}
module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInFailure,
  onSignInSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  moveMade
}
