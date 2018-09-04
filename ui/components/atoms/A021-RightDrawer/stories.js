import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

import RightDrawer from '.'
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

storiesOf('Atoms|A021 - RightDrawer', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <RightDrawer
      open={boolean('Toggle Drawer', false)}
      handleDrawerClose={action('Close Drawer!')}
    >
      {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
      {Countries.map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </RightDrawer>,
  { notes: { markdown: notes } })
