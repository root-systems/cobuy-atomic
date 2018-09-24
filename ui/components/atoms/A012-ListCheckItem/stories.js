import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import index.js from the same folder
import ListItem from '.'

import rgAvatar from '../../../assets/avatars/richard.jpg'

const avatar = {
  iconname: 'person',
  src: rgAvatar,
  alt: 'pretty kitty'
}

const avatarText = {
  iconname: 'person',
  text: 'DL'
}

const avatarIcon = {
  iconname: 'person'
}

storiesOf('Atoms|A012 - List Check Item', module)
  .add('Primary & img', () => (
    <ListItem
      primaryText='primary text only'
      avatar={avatar}
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
  .add('Avatar text', () => (
    <ListItem
      primaryText='Primary text'
      avatar={avatarText}
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
  .add('Avatar icon', () => (
    <ListItem
      primaryText='Primary text'
      avatar={avatarIcon}
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
  .add('Primary & Secondary text', () => (
    <ListItem
      primaryText='Primary text'
      secondaryText='Secondary text'
      avatar={avatar}
      handleClick={action({ onClick: 'clicked' })}
    />
  ))
