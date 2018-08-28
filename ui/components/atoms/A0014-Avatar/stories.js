import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Avatar from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A014 - Avatar', module).add('Image avatar', () => (
  <Avatar
    alt='this is image alt'
  />
))
