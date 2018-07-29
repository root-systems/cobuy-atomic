import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Label from '.'
import notes from './notes.md';

storiesOf('@example|atoms/Label', module)
  .addDecorator(withNotes)
  .add('vanulla', () => (
    <Label label={'Billing Address'}/>),
    {notes: {markdown: notes}}
  )
