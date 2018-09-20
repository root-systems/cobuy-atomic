import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A015 - Indeterminate circular', module)
  .addDecorator(withNotes)
  .add('Floating button, disabled', () => <Button color='secondary' iconname='add' />, {
    notes: { markdown: notes }
  })
