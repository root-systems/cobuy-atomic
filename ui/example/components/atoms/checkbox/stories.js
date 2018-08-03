import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'

import Checkbox from '.'
import notes from './notes.md';

const check = () => console.log('checked=true needs to be passed down as props')

storiesOf('@example|atoms/Checkbox', module)
  .addDecorator(withNotes)
  .add('checkbox', () => (
  <Checkbox text={'Orange Lorry'} onClick={check} />),
    {notes: {markdown: notes}}
  )
  .add('checked', () => (
    <Checkbox checked={true} text={'Blue Lorry'} onClick={check} />),
      {notes: {markdown: notes}}
  )
  .add('disabled', () => (
    <Checkbox checked={true} disabled={true} text={'Yellow Lorry'} onClick={check} />),
      {notes: {markdown: notes}}
  )
