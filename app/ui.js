'use strict'
// const joshGame = require('../game.js')
const store = require('./store')

const playerTurn = {
  xTurn: true
}
let xMoves = []
let oMoves = []
const winCons = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]

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
    // console.log(event.target)
    // $(`#div${event.target.value}`).text('X')
    // $('event.target #game-text').text('X')
    $(event.target, '.game-text').text('X')
  } else {
    // $(`#div${event.target.value}`).text('O')
    // $(event.target).text('O')
    $(event.target, '.game-text').text('O')
  }
  console.log('this is after logging the move in moveMade', playerTurn)
  // $(event.target).hide()
  $(event.target).prop('disabled', true)
  console.log('this is after hiding the button in moveMade', playerTurn)
}

const restart = function () {
  playerTurn.xTurn = true
  xMoves = []
  oMoves = []
  // $('.game').show()
  $('.game').html(`
    <span class="game-text"></span>
  `)
  $('.game').prop('disabled', false)
}

const toggle = function () {
  if (playerTurn.xTurn !== true) {
    playerTurn.xTurn = true
  } else {
    playerTurn.xTurn = false
  }
}

const checkWin = function () {
  for (const con of winCons) {
    if (con.every((num) => xMoves.includes(num))) {
      console.log('X Wins!')
      $('.message').text('X Wins.')
      // $('.game').hide()
      $('.game').prop('disabled', true)
    }
  }
  for (const con of winCons) {
    if (con.every((num) => oMoves.includes(num))) {
      console.log('O Wins!')
      $('.message').text('O Wins.')
      // $('.game').hide()
      $('.game').prop('disabled', true)
    }
  }
  if (xMoves.length === 5 && oMoves.length === 4) {
    console.log('The only winning move is not to play')
    $('.message').text('No winning solution.')
  }
  for (const con of winCons) {
    if (con.every((num) => xMoves.includes(num))) {
      console.log('X Wins!')
      $('.message').text('X Wins.')
      // $('.game').hide()
      $('.game').prop('disabled', true)
    }
  }
  for (const con of winCons) {
    if (con.every((num) => oMoves.includes(num))) {
      console.log('O Wins!')
      $('.message').text('O Wins.')
      // $('.game').hide()
      $('.game').prop('disabled', true)
    }
  }
}

const boardState = function (arrayValue) {
  if (playerTurn.xTurn === true) {
    xMoves.push(Number(arrayValue))
  }
  if (playerTurn.xTurn !== true) {
    oMoves.push(Number(arrayValue))
  }
  console.log('X: ' + xMoves)
  console.log('O: ' + oMoves)
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
  restart,
  boardState,
  checkWin,
  toggle
}
