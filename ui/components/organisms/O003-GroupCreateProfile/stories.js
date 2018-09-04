import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

// Import index.js from the same folder
import GroupCreateProfile from '.'

// List of stories of use cases for atom
storiesOf('Organisms|O003 - Create Group Profile', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <GroupCreateProfile
      avatar={{
        alt: 'Avatar Alt Text',
        src: text('Avatar image src', 'http://www.catgifpage.com/gifs/318.gif')
      }}
      nameField={{
        value: text('Name', 'John Snow'),
        error: boolean('Name error', false)
      }}
      descriptionField={{
        value: text(
          'Description',
          `The saddest aspect of life right now is that science fiction gathers knowledge faster than society gathers wisdom. - Isaac Asimov`
        )
      }}
      websiteField={{
        value: text('Website Url', 'rootsystems.nz'),
        error: boolean('Website error', false)
      }}
      emailField={{
        value: text('Email', 'hello@makebamboo.com'),
        error: boolean('Email error', false)
      }}
    />
  ))
