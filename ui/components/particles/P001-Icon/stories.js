import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '.'
import notes from './readme.md'

storiesOf('Particles|P001 - Icon', module)
  .addDecorator(withNotes)
  .add('Menu icon', () => <Icon palette={'primary'} iconname={'menu'} />, {
    notes: { markdown: notes }
  })

  .add(
    'Settings icon',
    () => <Icon palette={'primary'} iconname={'settings'} />,
    { notes: { markdown: notes } }
  )

  .add('Group icon', () => <Icon palette={'primary'} iconname={'group'} />, {
    notes: { markdown: notes }
  })

  .add(
    'Basket icon',
    () => <Icon palette={'primary'} iconname={'shopping_basket'} />,
    { notes: { markdown: notes } }
  )

  .add('Member icon', () => <Icon palette={'primary'} iconname={'person'} />, {
    notes: { markdown: notes }
  })
