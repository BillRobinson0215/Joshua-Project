'use strict'
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

const apiObject = {
  apiData: {
    game: {
      cell: {
        index: null,
        value: null
      },
      over: false
    }
  }
}

const onSignUpSuccess = function () {
  $('.message').text('New account created, Professor.')
  $('form').trigger('reset')
  console.log('success')
}
const onSignUpFailure = function () {
  $('.message').text('Invalid entry.')
  console.log('fail')
}

const onSignInSuccess = function (response) {
  $('.message').text('Welcome back, Professor.')
  $('form').trigger('reset')
  store.user = response.user
  console.log(store)
  $('.in').hide(1000)
  $('.out').show(1000)
  $('.row').show(1750)
  $('.btnRestart').show(2000)
}

const onSignInFailure = function () {
  $('.message').text('Access Denied.')
}

const onSignOutSuccess = function () {
  $('.message').text('Good-Bye Professor.')
  $('form').trigger('reset')
  $('.in').show(1000)
  $('.out').hide()
  $('.row').hide(1000)
  $('.btnRestart').hide(1000)
}
const onSignOutFailure = function () {
  $('.message').text('Failed to sign out')
}

const onStartNewSuccess = function (response) {
  $('.message').text('X moves first.')
  store.game = response.user
}

const moveMade = function (event) {
  if (playerTurn.xTurn === true) {
    // console.log(event.target)
    // $(`#div${event.target.value}`).text('X')
    $(event.target, '.game-text').text('X')
    apiObject.apiData.game.cell.value = 'X'
  } else {
    $(event.target, '.game-text').text('O')
    apiObject.apiData.game.cell.value = 'O'
  }
  apiObject.apiData.game.cell.index = Number($(event.target).attr('value'))
  $(event.target).prop('disabled', true)
}

const restart = function (response) {
  playerTurn.xTurn = true
  xMoves = []
  oMoves = []
  $('.game')
    .html('<span class="game-text"> </span>')
  apiObject.apiData.game.over = false
  apiObject.apiData.game.cell.index = null
  apiObject.apiData.game.cell.value = null
  console.log(response)
  store.game = response.game
  $('.game').prop('disabled', false)
  $('.message').text('')
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
      $('.game').prop('disabled', true)
      apiObject.apiData.game.over = true
    }
  }
  for (const con of winCons) {
    if (con.every((num) => oMoves.includes(num))) {
      console.log('O Wins!')
      $('.message').text('O Wins.')
      $('.game').prop('disabled', true)
      apiObject.apiData.game.over = true
    }
  }
  if (xMoves.length === 5 && oMoves.length === 4) {
    console.log('The only winning move is not to play')
    $('.message').text('No winning solution.')
    apiObject.apiData.game.over = true
  }
  for (const con of winCons) {
    if (con.every((num) => xMoves.includes(num))) {
      console.log('X Wins!')
      $('.message').text('X Wins.')
      $('.game').prop('disabled', true)
      apiObject.apiData.game.over = true
    }
  }
  for (const con of winCons) {
    if (con.every((num) => oMoves.includes(num))) {
      console.log('O Wins!')
      $('.message').text('O Wins.')
      $('.game').prop('disabled', true)
      apiObject.apiData.game.over = true
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
  onStartNewSuccess,
  moveMade,
  playerTurn,
  restart,
  boardState,
  checkWin,
  toggle,
  apiObject
}
