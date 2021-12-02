const xMoves = ['', '', '', '', '', '', '', '', '']
const oMoves = ['', '', '', '', '', '', '', '', '']
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

let playerTurn = true

// const stopsBetweenStations = function (
//   startLine,
//   startStation,
//   endLine,
//   endStation
// ) {
//   const distance = 0
//   if (startLine === 'Red' && endLine === 'Red') {
//     return Math.abs(redLine[startStation] - redLine[endStation])
//   }
//   if (startLine === 'Orange' && endLine === 'Orange') {
//     return Math.abs(orangeLine[startStation] - orangeLine[endStation])
//   }
//   if (startLine === 'Green' && endLine === 'Green') {
//     return Math.abs(greenLine[startStation] - greenLine[endStation])
//   }
//   if (startLine === 'Red' && endLine === 'Green') {
//     return Math.abs(redLine[startStation] + greenLine[endStation])
//   }
//   if (startLine === 'Red' && endLine === 'Orange') {
//     return Math.abs(redLine[startStation] + orangeLine[endStation])
//   }
//   if (startLine === 'Green' && endLine === 'Red') {
//     return Math.abs(greenLine[startStation] + redLine[endStation])
//   }
//   if (startLine === 'Green' && endLine === 'Orange') {
//     return Math.abs(greenLine[startStation] + orangeLine[endStation])
//   }
//   if (startLine === 'Orange' && endLine === 'Red') {
//     return Math.abs(orangeLine[startStation] + redLine[endStation])
//   }
//   if (startLine === 'Orange' && endLine === 'Green') {
//     return Math.abs(orangeLine[startStation] + greenLine[endStation])
//   }
// }
// console
// .log(stopsBetweenStations('Red', 'Davis', 'Red', 'Alewife'))

module.exports = {
  playerTurn
}
