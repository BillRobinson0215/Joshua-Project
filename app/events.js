'use strict'
const joshApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')
const appUi = require('./ui.js')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signed Up')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  joshApi
    .signUp(authData)
    .then(appUi.onSignUpSuccess)
    .catch(appUi.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  joshApi
    .signIn(authData)
    .then(appUi.onSignInSuccess)
    .then(joshApi.startNew)
    .then(res => {
      store.game = res.game
      console.log(store)
    })
    .catch(appUi.onSignInFailure)
  console.log('Welcome, Professor!')
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  joshApi
    .signOut(authData)
    .then(appUi.onSignOutSuccess)
    .catch(appUi.onSignOutFailure)
}

const onMoveMade = function (event) {
  console.log(event.target.value)
  event.preventDefault()
  appUi.moveMade(event)
  appUi.boardState(event.target.value)
  appUi.toggle()
  appUi.checkWin()
  console.log(appUi.apiObject)
  console.log(store)
  joshApi.boardToApi()
  console.log('Nice move, Professor!')

  // joshApi
  // appUi.moveMade(authData)
  //   .then(appUi.onMoveMadeSuccess)
  //   .catch(appUi.onMoveMadeFailure)
}

const onRestart = function () {
  joshApi.startNew()
    .then(appUi.restart)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onMoveMade,
  onRestart
}
