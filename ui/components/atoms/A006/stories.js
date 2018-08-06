import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

// import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A006 - Typography', module)
.addDecorator(withNotes)
.add('Typography', () => (
    <Typography title={'Page Title'} color={'primary'}/>
), { notes: { markdown: notes } })