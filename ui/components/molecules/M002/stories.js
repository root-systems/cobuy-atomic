import React from 'react'
import { storiesOf } from '@storybook/react'

import Nav from '.'

storiesOf('Molecules|M002', module).add('Default', () => (
  <Nav title={`'First item'`} />
))
