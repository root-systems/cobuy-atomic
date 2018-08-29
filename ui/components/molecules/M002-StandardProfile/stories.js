import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import StandardForm from '.'

const catAvatar = 'http://www.catgifpage.com/gifs/318.gif'

// List of stories of use cases for atom
storiesOf('Molecules|M002 - Group Profile', module).add('Default', () => (
  <StandardForm
    alt='this is image alt'
    src={catAvatar}
  />
))
