import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

// Import index.js from the same folder
import AppBar from '.'

const MenuOptions = [
  {
    menuOption: 'Edit'
  },
  {
    menuOption: 'Delete'
  },
  {
    menuOption: 'Participate in buying'
  }
]

storiesOf('Molecules|M001 - AppBar', module)
  .add('Default', () => (
    <AppBar
      pageTitle='Cobuy'
      menuClick={action('menu-click')}
      profileClick={action('profile-click')}
    />
  ))
  .add('With Settings', () => (
    <AppBar
      pageTitle='Cobuy'
      menuClick={action('menu-click')}
      profileClick={action('profile-click')}
      settingsItems={
        MenuOptions.map(option => (
          <MenuItem key={option.menuOption} value={option.menuOption}>
            {option.menuOption}
          </MenuItem>
        ))
      }
    />
  ))
