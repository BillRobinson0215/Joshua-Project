const appUi = require('./app/ui.js')

const xMoves = []
const oMoves = []
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

const toggle = function () {
  if (appUi.playerTurn.xTurn !== true) {
    appUi.playerTurn.xTurn = true
  } else {
    appUi.playerTurn.xTurn = false
  }
}

const checkWin = function () {
  for (const con of winCons) {
    if (con.every(num => xMoves.includes(num))) {
      console.log('X Wins!')
      $('.game').hide()
    }
  }
  for (const con of winCons) {
    if (con.every(num => oMoves.includes(num))) {
      console.log('O Wins!')
      $('.game').hide()
    }
  }
}

const boardState = function (arrayValue) {
  if (appUi.playerTurn.xTurn === true) {
    xMoves.push(Number(arrayValue))
  } if (appUi.playerTurn.xTurn !== true) {
    oMoves.push(Number(arrayValue))
  }
  console.log(xMoves)
  console.log(oMoves)
}

module.exports = {
  boardState,
  toggle,
  checkWin
}
