// 'use strict'
// const authApi = require('./api.js')
// const getFormFields = require('../../lib/get-form-fields.js')
// const authUi = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signed Up')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  authApi
    .signUp(authData)
    .then(authUi.onSignUpSuccess)
    .catch(authUi.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Welcome!')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  authApi
    .signIn(authData)
    .then(authUi.onSignInSuccess)
    .catch(authUi.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')

  const form = event.target
  const authData = getFormFields(form)
  console.log(authData)

  authApi
    .signOut(authData)
    .then(authUi.onSignOutSuccess)
    .catch(authUi.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
