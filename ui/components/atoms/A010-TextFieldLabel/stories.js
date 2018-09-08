import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import TextFieldLabel from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A010 - TextFieldLabel', module)
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <Formik
        initialValues={{ favouriteTea: '' }}
      >
        <TextFieldLabel
          id='1'
          type='text'
          name='favouriteTea'
          placeholder='Jasmine, Green Tea...'
          label='Your favourite tea'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'With Error',
    () => (
      <Formik
        initialValues={{ email: 'click and click away :)' }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
      >
        <TextFieldLabel
          id='2'
          type='text'
          name='email'
          placeholder='beautiful@human.com'
          label='Your wonderful email'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'Required',
    () => (
      <Formik
        initialValues={{ description: '' }}
        validate={values => {
          const errors = {}
          if (!values.description) {
            errors.description = 'Required'
          }
          return errors
        }}
      >
        <TextFieldLabel
          id='3'
          type='text'
          name='description'
          placeholder='Sweet & Sour'
          label='Describe your self'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
