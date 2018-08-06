import React from 'react'
import { storiesOf } from '@storybook/react'

import Typography from '.'
import Nav from '.'

storiesOf('Organisms|O001', module).add('Default', () => (
  // <Nav title={'Domains Group'} />
  <Typography title='Page title' align='center' />
))
