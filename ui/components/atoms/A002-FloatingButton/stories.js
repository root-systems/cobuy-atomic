import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A002 - Floating Button', module)
  .addDecorator(withNotes)
  .add('Add', () => <Button color='secondary' iconname='add' />, {
    notes: { markdown: notes }
  })
  .add('Group', () => <Button color='primary' iconname='group' />, {
    notes: { markdown: notes }
  })
