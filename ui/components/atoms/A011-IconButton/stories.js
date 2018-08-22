import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import IconButton from '.'
import notes from './readme.md'

storiesOf('Atoms|A002 - Floating Button', module)
  .addDecorator(withNotes)
  .add('Add', () => <IconButton iconname='add' ariaLabel='add thing' handleClick={console.log('click')} />, {
    notes: { markdown: notes }
  })
  .add('Group', () => <IconButton color='secondary' iconname='group' ariaLabel='group profile' handleClick={console.log('click')} />, {
    notes: { markdown: notes }
  })
