import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { StateDecorator, Store } from '@sambego/storybook-state'

// formik-material-ui depends on Formik as a HOC
import { Formik } from 'formik'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

import SelectLabel from '.'
import notes from './readme.md'

const Countries = [
  {
    name: 'New Zealand'
  },
  {
    name: 'Fiji'
  },
  {
    name: 'Samoa'
  },
  {
    name: 'Tonga'
  }
]

// TODO DL Currently this is not working :(
const store = new Store({
  country: ''
})

storiesOf('Atoms|A104 - SelectLabel', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <Formik
        initialValues={{ country: '' }}
        validate={values => {
          const errors = {}
          if (!values.country) {
            errors.country = 'Required'
          }
          return errors
        }}
      >
        <SelectLabel
          id='1'
          type='text'
          name='country'
          label='Select Country'
        >
          {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
          {Countries.map(option => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </SelectLabel>
      </Formik>
    ),
    {
      notes: { markdown: notes }
    }
  )
