import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import index.js from the same folder
import SwitchField from '.'
import notes from './readme.md'

// List of stories of use cases for atom
storiesOf('Atoms|A105 - SwitchField', module)
  .addDecorator(withNotes)
  .add('Default',
    () => (
      <Formik
        initialValues={{ switch: '' }}
        validate={values => {
          const errors = {}
          if (!values.switch) {
            errors.switch = 'Required'
          }
          return errors
        }}
      >
        <SwitchField
          id='switch1'
          name='switch'
          label='this is MY switch label'
          ariaLabel='Switch default'
        />
      </Formik>
    ),
    { notes: { markdown: notes } }
  )
  .add('Right label, Primary colour',
    () => (
      <Formik
        initialValues={{ switch: '' }}
      >
        <SwitchField
          id='switch2'
          name='switch'
          label='Easy peasy'
          ariaLabel='Other switch'
          labelPlacement='end'
          color='primary'
        />
      </Formik>
    ),
    { notes: { markdown: notes } }
  )
  .add('Disabled',
    () => (
      <Formik
        initialValues={{ switch: '' }}
      >
        <SwitchField
          id='switch3'
          name='switch'
          label='Lemon squeezy'
          ariaLabel='lemons'
          color='primary'
          disabled
        />
      </Formik>
    ),
    { notes: { markdown: notes } }
  )
