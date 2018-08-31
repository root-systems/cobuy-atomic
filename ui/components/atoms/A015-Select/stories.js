import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { StateDecorator, Store } from '@sambego/storybook-state'

import { MenuItem } from '@material-ui/core'

// Import index.js from the same folder
import Select from '.'
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

// TODDO DL Currently this is not working :(
const store = new Store({
  country: ''
})

// List of stories of use cases for atom
storiesOf('Atoms|A015 - Select', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withNotes)
  .add('Default', () =>
    <Select
      id='1'
      type='text'
      name='Select Country'
      value={store.get('country')}
      onChange={(event) => store.set({country: event.target.value})}
    >
      {Countries.map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </Select>,
  {notes: { markdown: notes }
  })
  .add('HelpText & Error', () =>
    <Select
      id='1'
      type='text'
      name='Select Country'
      value={store.get('country')}
      onChange={(event) => store.set({country: event.target.value})}
      error
    >
      {Countries.map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </Select>,
  {notes: { markdown: notes }
  })
