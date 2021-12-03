// 'use strict'
const joshApi = require('./api.js')
const getFormFields = require('../lib/get-form-fields.js')
const appUi = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signed Up')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)
  console.log('almost there')

  joshApi
    .signUp(authData)
    .then(appUi.onSignUpSuccess)
    .catch(appUi.onSignUpFailure)
  console.log('got here')
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Welcome!')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  joshApi
    .signIn(authData)
    .then(appUi.onSignInSuccess)
    .catch(appUi.onSignInFailure)
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
  event.preventDefault()
  appUi.moveMade(event)
  appUi.boardState(event.target.value)
  appUi.toggle()
  appUi.checkWin()

  // joshApi
  //   .moveMade(authData)
  //   .then(appUi.onSignInSuccess)
  //   .catch(appUi.onSignInFailure)
}

const onRestart = function () {
  appUi.restart()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onMoveMade,
  onRestart
}
