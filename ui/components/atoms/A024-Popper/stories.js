import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import index.js from the same folder
import Popper from '.'

storiesOf('Atoms|A024 - Popper', module).add('Default', () => (
  <Popper
    moreMenuClick={action('menu-click')}
    ariaLabel='More menu'
    iconname='more_vert'
    color='primary'
  />
))
