import React from 'react'
import { storiesOf } from '@storybook/react'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

// Import index.js from the same folder
import PageSettingsMenu from '.'

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

storiesOf('Molecules|M008 - PageSettingsMenu', module)
  .add('Default', () => (
    <PageSettingsMenu>
      {MenuOptions.map(option => (
        <MenuItem key={option.menuOption} value={option.menuOption}>
          {option.menuOption}
        </MenuItem>
      ))}
    </PageSettingsMenu>
  ))
