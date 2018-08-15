import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withNotes } from '@storybook/addon-notes'

import Checkbox from '.'
import notes from './notes.md'

storiesOf('@example|atoms/Checkbox', module)
  .addDecorator(withNotes)
  .add('checkbox', () => <Checkbox text={'Orange Lorry'} />, {
    notes: { markdown: notes }
  })
  .add('checked', () => <Checkbox checked={true} text={'Blue Lorry'} />, {
    notes: { markdown: notes }
  })
  .add('disabled', () => <Checkbox disabled={true} text={'Yellow Lorry'} />, {
    notes: { markdown: notes }
  })
  .add('with color', () => <Checkbox error={true} text={'Red Lorry'} />, {
    notes: { markdown: notes }
  })
