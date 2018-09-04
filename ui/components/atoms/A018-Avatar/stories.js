import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

// Import index.js from the same folder
import Avatar from '.'
import notes from './readme.md'

import rgAvatar from '../../../assets/avatars/richard.jpg'
const catAvatar = 'http://www.catgifpage.com/gifs/318.gif'

// List of stories of use cases for atom
storiesOf('Atoms|A016 - Avatar', module)
  .addDecorator(withNotes)
  .add(
    'Static avatar',
    () => <Avatar alt='this is image alt' src={rgAvatar} />,
    { notes: { markdown: notes } }
  )
  .add(
    'Remote avatar',
    () => <Avatar alt='this is image alt' src={catAvatar} />,
    { notes: { markdown: notes } }
  )
  .add('Initial avatar', () => <Avatar text='DL' />, {
    notes: { markdown: notes }
  })
  .add('Icon avatar', () => <Avatar iconname='person' />, {
    notes: { markdown: notes }
  })
