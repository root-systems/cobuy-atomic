import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '.'

storiesOf('@example|atoms/Link', module)
  .add('plain', () => (
    <Link name={'Home'} />
  ))
