import React from 'react'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

// Import MenuItem for example children
import { MenuItem } from '@material-ui/core'

// Import index.js from the same folder
import Popper from '.'

const menuOptions = [
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

storiesOf('Molecules|M008 - Popper', module).add('Default', () => (
  <Popper
    color='primary'
    iconname='more_vert'
    ariaLabel='More right menu'
    placement='right'
    handleClick={actions({ onClick: 'options' })}
  >
    {menuOptions.map(option => (
      <MenuItem key={option.menuOption} value={option.menuOption}>
        {option.menuOption}
      </MenuItem>
    ))}
  </Popper>
))
