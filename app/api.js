'use strict'
const store = require('./store')
const appUi = require('./ui.js')
const config = require('./config.js')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startNew = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const boardToApi = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/:id',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: appUi.apiObject.apiData
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  startNew,
  boardToApi
}
