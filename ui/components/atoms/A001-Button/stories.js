import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A001 - Button', module)
  .add('Ok Button', () => <Button text={'Ok'} color={'default'} />)
  .add('Participate Order Button', () => (
    <Button text={'Participate Order'} color={'default'} />
  ))
