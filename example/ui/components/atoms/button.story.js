import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './button'

storiesOf('example/atoms/Button', module)
  .add('plain', () => (
    <Button title={'Search'} />
  ))
