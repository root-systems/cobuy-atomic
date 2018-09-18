import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Tab from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A012 - List', module).add('List', () => (
  <Tab iconname={'group'} />
))
