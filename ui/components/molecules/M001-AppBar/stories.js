import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import AppBar from '.'

// List of stories of use cases for atom
storiesOf('Molecules|M001 - AppBar', module).add('Default', () => (
  <AppBar />
))
