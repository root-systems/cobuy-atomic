import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import Avatar from '.'

import rgAvatar from '../../../assets/avatars/richard.jpg'
const catAvatar = 'http://www.catgifpage.com/gifs/318.gif'

// List of stories of use cases for atom
storiesOf('Atoms|A014 - Avatar', module)
  .add('Static avatar', () =>
    <Avatar alt='this is image alt' src={rgAvatar} />)
  .add('Remote avatar', () => (
    <Avatar alt='this is image alt' src={catAvatar} />
  ))
  .add('Initial avatar', () =>
    <Avatar text='DL' />)
  .add('Icon avatar', () => (
    <Avatar iconname='person' />
  ))
