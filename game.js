const playerMoves = ['', '', '', '', '', '', '', '', '']



const greenLine = {
  'Government Center': -1,
  'Park Street': 0,
  Boylston: 1,
  Arlington: 2,
  Copley: 3,
  Hynes: 4,
  Kenmore: 5
}
const orangeLine = {
  'North Station': -2,
  Haymarket: -1,
  'Park Street': 0,
  State: 1,
  'Downtown Crossing': 2,
  Chinatown: 3,
  'Back Bay': 4,
  'Forest Hills': 5
}

const stopsBetweenStations = function (
  startLine,
  startStation,
  endLine,
  endStation
) {
  const distance = 0
  if (startLine === 'Red' && endLine === 'Red') {
    return Math.abs(redLine[startStation] - redLine[endStation])
  }
  if (startLine === 'Orange' && endLine === 'Orange') {
    return Math.abs(orangeLine[startStation] - orangeLine[endStation])
  }
  if (startLine === 'Green' && endLine === 'Green') {
    return Math.abs(greenLine[startStation] - greenLine[endStation])
  }
  if (startLine === 'Red' && endLine === 'Green') {
    return Math.abs(redLine[startStation] + greenLine[endStation])
  }
  if (startLine === 'Red' && endLine === 'Orange') {
    return Math.abs(redLine[startStation] + orangeLine[endStation])
  }
  if (startLine === 'Green' && endLine === 'Red') {
    return Math.abs(greenLine[startStation] + redLine[endStation])
  }
  if (startLine === 'Green' && endLine === 'Orange') {
    return Math.abs(greenLine[startStation] + orangeLine[endStation])
  }
  if (startLine === 'Orange' && endLine === 'Red') {
    return Math.abs(orangeLine[startStation] + redLine[endStation])
  }
  if (startLine === 'Orange' && endLine === 'Green') {
    return Math.abs(orangeLine[startStation] + greenLine[endStation])
  }
}
console.log(stopsBetweenStations('Red', 'Davis', 'Red', 'Alewife'))
module.exports = {
  stopsBetweenStations: stopsBetweenStations,
  stretch: false
}
