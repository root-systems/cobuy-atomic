import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A016 - Indeterminate Square', module)
  .add('Participate Order Button', () => (
    <Button text={'Participate Order'} color={'default'} />
  ))
