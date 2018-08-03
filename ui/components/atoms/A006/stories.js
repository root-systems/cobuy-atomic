import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

// import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A006', module).addDecorator(withNotes)
.add('Typography', () => (
    <Typography title={'Page title'} color={'primary'}/>
), { notes: { markdown: notes } })
