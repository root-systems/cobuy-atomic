import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './input'

storiesOf('example/atoms/Input', module)
  .add('plain', () => (
    <Input />
  ))
