import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Input from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A009 - Input', module).add('Input', () => (
  <Input
    id='inputId'
    type='text'
    name='inputName'
    placeholder='this is a place holder'
  />
))
