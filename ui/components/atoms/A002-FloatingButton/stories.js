import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A002 - Floating Button', module)
  .addDecorator(withNotes)
  .add('Add Icon', () =>
    <Button
      color='secondary'
      iconname='add'
      submitting={false}
    />, {
    notes: { markdown: notes }
  })
  .add('Group Icon', () =>
    <Button
      color='primary'
      iconname='group'
      submitting={false}
    />, {
    notes: { markdown: notes }
  })
  .add('Add Icon, Progress', () =>
    <Button
      iconname='add'
      submitting
    />, {
    notes: { markdown: notes }
  })
