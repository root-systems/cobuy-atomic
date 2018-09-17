import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import CheckboxField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A110 - CheckboxField', module)
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
      <CheckboxField
        id='check1'
        name='check'
        label='Checkers'
        ariaLabel='First checkbox'
      />
    </Formik>
  ),
  { notes: { markdown: notes } }
  )
  .add('Label right', () => (
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
      <CheckboxField
        id='check2'
        name='check'
        label='To the night oh'
        ariaLabel='second checkbox'
        labelPlacement='end'
      />
    </Formik>
  ),
  { notes: { markdown: notes } }
  )
  .add('Disabled', () => (
    <Formik
      initialValues={{ check: '' }}
    >
      <CheckboxField
        id='check3'
        name='check'
        label='Unobtanium'
        ariaLabel='disabled check'
        disabled
      />
    </Formik>
  ),
  { notes: { markdown: notes } }
  )
  .add(
    'Minus',
    () => (
      <Formik
        initialValues={{ check: '' }}
      >
        <CheckboxField
          id='check4'
          name='check'
          label='The possibilities are unclear'
          ariaLabel='Close menu'
          indeterminate
        />
      </Formik>
    ),
    { notes: { markdown: notes } }
  )
