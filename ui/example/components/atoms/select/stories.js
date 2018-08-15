import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Select from '.'
import notes from './notes.md'

const items = [
  { id: 1, value: 'ichi' },
  { id: 2, value: 'ni' },
  { id: 3, value: 'san' },
  { id: 4, value: 'yon' },
  { id: 5, value: 'go' },
  { id: 6, value: 'roku' },
  { id: 7, value: 'nana' },
  { id: 8, value: 'hachi' },
  { id: 9, value: 'kyū' },
  { id: 10, value: 'jū' }
]

storiesOf('@example|atoms/Select', module)
  .addDecorator(withNotes)
  .add('select', () => <Select options={items} />, {
    notes: { markdown: notes }
  })
  .add('disabled', () => <Select options={items} disabled={true} />, {
    notes: { markdown: notes }
  })
