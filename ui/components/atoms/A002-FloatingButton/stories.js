import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '@material-ui/core/Icon'

import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A002 - Floating Button', module)
  .addDecorator(withNotes)
  .add('Add', () => <Button color='secondary' icon={<Icon>add_icon</Icon>} />, {
    notes: { markdown: notes }
  })
  .add(
    'Group',
    () => <Button color='primary' icon={<Icon>group_icon</Icon>} />,
    {
      notes: { markdown: notes }
    }
  )
