import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

// import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A006 - Typography', module)
.addDecorator(withNotes)
.add('Display 4', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'display4'}/>
), { notes: { markdown: notes } })
.add('Display 3', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'display3'}/>
), { notes: { markdown: notes } })
.add('Display 2', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'display2'}/>
), { notes: { markdown: notes } })
.add('Display 1', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'display1'}/>
), { notes: { markdown: notes } })
.add('Headline', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'headline'}/>
), { notes: { markdown: notes } })
.add('Title', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'title'}/>
), { notes: { markdown: notes } })
.add('body2', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'body2'}/>
), { notes: { markdown: notes } })
.add('body1', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'body1'}/>
), { notes: { markdown: notes } })
.add('subheading', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'subheading'}/>
), { notes: { markdown: notes } })
.add('caption', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'caption'}/>
), { notes: { markdown: notes } })
.add('button', () => (
    <Typography title={'Sample text'} color={'primary'} variant={'button'}/>
), { notes: { markdown: notes } })