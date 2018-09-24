import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'

import IconButton from '.'
import notes from './readme.md'

storiesOf('Atoms|A017 - Icon Button', module)
  .addDecorator(withNotes)
  .add(
    'Add',
    () => (
      <IconButton
        iconname='add'
        ariaLabel='add thing'
        onClick={action({ onClick: 'clicked' })}
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
        onClick={action({ onClick: 'clicked' })}
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
  .add(
    'moreVertical',
    () => (
      <IconButton
        color='primary'
        iconname='more_vert'
        ariaLabel='More menu'
        onClick={action({ onClick: 'clicked' })}
      />
    ),
    {
      notes: { markdown: notes }
    }
  )
