import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'

storiesOf('Organisms|O001', module).add('Default', () => (
  <Typography title='Page title' align='center' />
))
