import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

// Import index.js from the same folder
import ResponsiveDrawer from '.'
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

// List of stories of use cases for atom
storiesOf('Molecules|M002 - Responsive Drawer', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => (
      <ResponsiveDrawer
        open={boolean('Toggle Drawer', true)}
        handleDrawerToggle={action('Close Drawer!')}
      >
        {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
        {Countries.map(option => (
          <MenuItem key={option.name} value={option.name}>
            {option.name}
          </MenuItem>
        ))}
      </ResponsiveDrawer>
    ),
    { notes: { markdown: notes } }
  )
