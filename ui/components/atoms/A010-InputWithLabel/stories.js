import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Input from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A009 - Input', module).add('Input', () => (
  <Input
    id='1'
    type='text'
    name='fullName'
    placeholder='Daniel Lewis'
    label='Your wonderful name'
  />
))
