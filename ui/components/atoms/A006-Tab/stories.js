import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Tab from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A006 - Tab', module).add('Groups domain Tab', () => (
  <Tab iconname={'group'} />
))
