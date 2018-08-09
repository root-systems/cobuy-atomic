import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Icon from '.'
import notes from './readme.md'

storiesOf('Atoms|A003 - Icons', module)
  .addDecorator(withNotes)
  .add(
    'Header back icon',
    () => <Icon palette={'primary'} iconname={'hamburger'} />,
  {
    notes: { markdown: notes }
  }
  )
  .add(
    'Header settings icon',() => <Icon palette={'primary'} iconname={'gear'} />,
  {
    notes: { markdown: notes }
  }
  )