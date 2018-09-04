import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

import Layout from '.'

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

storiesOf('Organisms|O001', module)
  .addDecorator(withNotes)
  .addDecorator(withKnobs)
  .add('Default', () =>
    <Layout
      open={boolean('Toggle Drawer', true)}
      handleDrawerToggle={action('Close Drawer!')}
    >
      {/* Add your MenuItems in here with a wrapper. This map is just for an example */}
      {Countries.map(option => (
        <MenuItem key={option.name} value={option.name}>
          {option.name}
        </MenuItem>
      ))}
    </Layout>
  )
