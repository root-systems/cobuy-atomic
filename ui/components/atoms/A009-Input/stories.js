import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import TextField from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A009 - Input (TextField)', module).add('Input', () => (
  <TextField
    id='1'
    type='text'
    name='name'
    placeholder='placeholder'
  />
))
  .add('Input with label', () => (
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
    />
  ))
  .add('Input - With Text helper', () => (
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      helperText='This is a helper text'
    />
  ))
  .add('Input - Required', () => (
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      required='true'
    />
  ))
  .add('Input - Error', () => (
    <TextField
      id='1'
      label='this is a label'
      type='text'
      name='Name'
      placeholder='placeholder'
      error='true'
      helperText='This is an error helper text'
    />
  ))
  .add('Input - Password type', () => (
    <TextField
      id='1'
      label='this is a label'
      type='password'
      name='Name'
      placeholder='placeholder'
    />
  ))
