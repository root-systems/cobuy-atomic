import React from 'react'
import { storiesOf } from '@storybook/react'

import Nav from '.'

storiesOf('Molecules|M001', module)
  .add('Default', () => (
    <Nav title={`'First item'`} />
  ))