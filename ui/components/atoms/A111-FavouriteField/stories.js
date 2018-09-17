import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import FavouriteField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A110 - FavouriteField', module)
  .addDecorator(withNotes)
  .add('Default', () => (
    <Formik
      initialValues={{ check: '' }}
      validate={values => {
        const errors = {}
        if (!values.check) {
          errors.check = 'Required'
        }
        return errors
      }}
    >
      <FavouriteField
        id='check1'
        name='check'
        ariaLabel='First checkbox'
      />
    </Formik>
  ),
  { notes: { markdown: notes } }
  )
  .add('Disabled', () => (
    <Formik
      initialValues={{ check: '' }}
    >
      <FavouriteField
        id='check3'
        name='check'
        ariaLabel='disabled check'
        disabled
      />
    </Formik>
  ),
  { notes: { markdown: notes } }
  )
