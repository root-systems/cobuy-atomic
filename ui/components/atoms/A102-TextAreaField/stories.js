import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import TextArea from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A102 - TextArea', module)
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <Formik initialValues={{ default: '' }}>
        <TextArea
          id='1'
          name='default'
          placeholder='Fill out some text here...'
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
        initialValues={{ mustBeFilled: '' }}
        validate={values => {
          const errors = {}
          if (!values.mustBeFilled) {
            errors.mustBeFilled = 'Required'
          }
          return errors
        }}
      >
        <TextArea
          id='2'
          name='mustBeFilled'
          placeholder='Hey its required, fill out some text!'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'Minimum Length',
    () => (
      <Formik
        initialValues={{ mustBeFilled: '' }}
        validate={values => {
          const errors = {}
          if (!values.mustBeFilled) {
            errors.mustBeFilled = 'Required'
          }
          if (values.mustBeFilled.length < 141) {
            errors.mustBeFilled = 'Length must be more then a tweet'
          }
          return errors
        }}
      >
        <TextArea
          id='3'
          name='mustBeFilled'
          placeholder='Something something longer then a tweet'
        />
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
