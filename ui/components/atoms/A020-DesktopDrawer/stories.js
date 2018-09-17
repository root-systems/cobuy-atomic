import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

import DesktopDrawer from '.'
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

storiesOf('Atoms|A020 - DesktopDrawer', module)
  .addDecorator(withNotes)
  .add(
    'Default',
    () => (
      <DesktopDrawer>
        {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
        {Countries.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </DesktopDrawer>
    ),
    { notes: { markdown: notes } }
  )
