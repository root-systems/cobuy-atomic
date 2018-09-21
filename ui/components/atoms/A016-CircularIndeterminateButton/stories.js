import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Button from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A016 - Circular Indeterminate button', module)
  .add('Add Button', () => (
    <Button iconname='add' submitting={false} />
  ))
  .add('Add button Indeterminate state', () => (
    <Button iconname='add' submitting />
  ))
