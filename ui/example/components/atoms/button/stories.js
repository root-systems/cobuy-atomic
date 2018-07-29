import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('@example|atoms/Button', module)
  .add('Elevation 1', () => (
    <Button title={'Search'} elevation={1} />
  ))
  .add('Disabled Elevation 3', () => (
    <Button title={'Disabled'} disabled={true} elevation={3} />
  ))
  .add('Elevation 5', () => (
    <Button title={'Elevation 5'} elevation={5} />
  ))
