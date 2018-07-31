import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '@material-ui/core/Icon'

import Button from '.'
import notes from './notes.md'

storiesOf('Atoms|A003', module)
  .addDecorator(withNotes)
  .add(
    'add_circle icon',
    () => <Button color={'default'} icon={<Icon>add_icon</Icon>} />,
  {
    notes: { markdown: notes }
  }
  )
// .add(
//   'Group',
//   () => <Button color={'default'} icon={<Icon>group_icon</Icon>} />,
// {
//   notes: { markdown: notes }
// }
// )
