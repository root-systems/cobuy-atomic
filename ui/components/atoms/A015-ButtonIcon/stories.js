import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A015 - Button with Icon', module)
  .add('Add icon', () => (
    <Button
      iconname='add'
      submitting={false}
    />
  ))
  .add('Add icon, Progress state', () => (
    <Button submitting />
  ))
