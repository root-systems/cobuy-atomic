import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { actions } from '@storybook/addon-actions'

import IconButton from '.'
import notes from './readme.md'

storiesOf('Atoms|A011 - Icon Button', module)
  .addDecorator(withNotes)
  .add(
    'Add',
    () => (
      <IconButton
        iconname='add'
        ariaLabel='add thing'
        handleClick={actions({ onClick: 'clicked' })}
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'Group',
    () => (
      <IconButton
        color='secondary'
        iconname='group'
        ariaLabel='group profile'
        handleClick={actions({ onClick: 'clicked' })}
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
