import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { StateDecorator, Store } from '@sambego/storybook-state'

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

storiesOf('Atoms|A016 - SelectLabel', module)
  .addDecorator(StateDecorator(store))
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <SelectLabel
        id='1'
        type='text'
        name='Select Country'
        label='Select Country'
        value={store.get('country')}
        onChange={event => store.set({ country: event.target.value })}
      >
        {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
        {Countries.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </SelectLabel>
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'HelpText & Error',
    () => (
      <SelectLabel
        id='1'
        type='text'
        name='Select Country'
        label='Select Country'
        value={store.get('country')}
        onChange={event => store.set({ country: event.target.value })}
        error
      >
        {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
        {Countries.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </SelectLabel>
    ),
    {
      notes: { markdown: notes }
    }
  )
