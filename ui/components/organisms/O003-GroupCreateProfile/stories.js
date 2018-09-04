import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

// Import index.js from the same folder
import ProfleFormFragment from '.'

// List of stories of use cases for atom
storiesOf('Organisms|O003 - Group: Create Profile Form', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ProfleFormFragment
      avatar={{
        alt: 'Avatar Alt Text',
        src: text('Avatar image src', 'http://www.catgifpage.com/gifs/318.gif')
      }}
      uploadAvatarField={{
        error: boolean('Avatar error', false)
      }}
      nameField={{
        value: text('Name', 'John Snow'),
        error: boolean('Name error', false)
      }}
      descriptionField={{
        value: text('Description', `The saddest aspect of life right now is that science fiction gathers knowledge faster than society gathers wisdom. - Isaac Asimov`),
        multiline: boolean('multiline', true),
        row: text('row', 10)
      }}
      websiteField={{
        value: text('Website Url', 'rootsystems.nz'),
        error: boolean('Website error', false)
      }}
      emailField={{
        value: text('Email', 'hello@makebamboo.com'),
        error: boolean('Email error', false)
      }}
      okButton={{
        color: text('color', 'primary'),
        buttontitle: text('text', 'Ok')
      }}
      cancelButton={{
        color: text('color', 'secondary'),
        buttontitle: text('text', 'Cancel')
      }}
      pageTitle={{
        title: text('title', 'Enter new group details'),
        align: text('align', 'center')
      }}
    />
  ))
