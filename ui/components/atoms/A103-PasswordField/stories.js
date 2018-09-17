import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import PasswordField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A103 - PasswordField', module)
  .addDecorator(withNotes)
  .add(
    'New password',
    () => (
      <Formik
        initialValues={{ password: '' }}
        validate={values => {
          const errors = {}
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters'
          }
          return errors
        }}
      >
        <PasswordField
          id='1'
          name='password'
          label='Secret squirrel'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'With current password',
    () => (
      <Formik
        initialValues={{ password: '' }}
        validate={values => {
          const errors = {}
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters'
          }
          return errors
        }}
      >
        <PasswordField
          id='1'
          name='password'
          label='Secret squirrel'
          currentPasswordLength={10}
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
