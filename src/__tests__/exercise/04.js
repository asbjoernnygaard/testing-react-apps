// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {toEqual} from '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
//import { input } from '@testing-library/user-event/dist/types/utils'

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData = {};
  const handleSubmit = data => submittedData = data

  render(<Login onSubmit={handleSubmit}/>)
  const usernameField = screen.getByLabelText('Username')
  const passwordField = screen.getByLabelText('Password')
  const submit = screen.getByRole('button')

  await userEvent.type(usernameField, 'user')
  await userEvent.type(passwordField, 'pass')
  await userEvent.click(submit)

  expect(submittedData).toEqual({username: 'user', password: 'pass'})


  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
})

/*
eslint
  no-unused-vars: "off",
*/
