import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import TextField from '.'

// List of stories of use cases for atom
storiesOf('Molecules|M002 - Group Profile', module).add('Default', () => (
  <React.Fragment>
    <TextField
      id='fullName'
      name='fullName'
      label='full Name'
      value='Joe Smith'
      type='text'
    />
    <TextField
      id='description'
      name='description'
      label='Description'
      value='This is decription'
      type='text'
    />
    <TextField
      id='website'
      name='website'
      label='Website address'
      value='www.mywebsite.com'
      type='text'
    />
    <TextField
      id='email'
      name='email'
      label='Email address'
      value='myname@email.com'
      type='text'
    />
  </React.Fragment>
))
