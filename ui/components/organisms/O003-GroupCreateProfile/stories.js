import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

// Import index.js from the same folder
import GroupCreateProfile from '.'

// List of stories of use cases for atom
storiesOf('Organisms|O003 - Create Group Profile', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <GroupCreateProfile
      avatarAlt={'Avatar Alt Text'}
      avatarSrc={text(
        'Avatar image src',
        'http://www.catgifpage.com/gifs/318.gif'
      )}
      name={text('Name', 'John Snow')}
      description={text(
        'Description',
        `The saddest aspect of life right now is that science fiction gathers knowledge faster than society gathers wisdom. - Isaac Asimov`
      )}
      website={text('Website Url', 'rootsystems.nz')}
      email={text('Email', 'hello@makebamboo.com')}
    />
  ))
