import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

// import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A005 - Page title', module)
.addDecorator(withNotes)
.add('Groups domain', () => (
    <Typography title='Groups Domain' color='primary' alignment='center' />
), { notes: { markdown: notes } })