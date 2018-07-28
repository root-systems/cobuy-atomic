import React from 'react'
import { storiesOf } from '@storybook/react'

import Label from '.'

storiesOf('@example|atoms/Label', module)
  .add('plain', () => (
    <Label label={'Search the site'} />
  ))
