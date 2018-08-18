import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import PageTitle from '.'

import notes from './readme.md'

storiesOf('Atoms|A005 - Page title', module)
  .addDecorator(withNotes)
  .add('Groups domain', () => <PageTitle>Groups Domain</PageTitle>, {
    notes: { markdown: notes }
  })
