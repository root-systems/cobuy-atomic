import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('@example|atoms/Button', module)
  .add('plain', () => (
    <Button title={'Search'} />
  ))
