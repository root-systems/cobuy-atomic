import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

// import Button from '.'
import notes from './readme.md'

storiesOf('Atoms|A006 - Typography', module)
.addDecorator(withNotes)
.add('Display 4', () => (
    <Typography title={'display4'} color={'primary'} variant={'display4'}/>
), { notes: { markdown: notes } })
.add('Display 3', () => (
    <Typography title={'display3'} color={'primary'} variant={'display3'}/>
), { notes: { markdown: notes } })
.add('Display 2', () => (
    <Typography title={'display2'} color={'primary'} variant={'display2'}/>
), { notes: { markdown: notes } })
.add('Display 1', () => (
    <Typography title={'display1'} color={'primary'} variant={'display1'}/>
), { notes: { markdown: notes } })
.add('Headline', () => (
    <Typography title={'headline'} color={'primary'} variant={'headline'}/>
), { notes: { markdown: notes } })
.add('Title', () => (
    <Typography title={'title'} color={'primary'} variant={'title'}/>
), { notes: { markdown: notes } })
.add('Body2', () => (
    <Typography title={'body 2'} color={'primary'} variant={'body2'}/>
), { notes: { markdown: notes } })
.add('Body1', () => (
    <Typography title={'body 1'} color={'primary'} variant={'body1'}/>
), { notes: { markdown: notes } })
.add('Subheading', () => (
    <Typography title={'subheading'} color={'primary'} variant={'subheading'}/>
), { notes: { markdown: notes } })
.add('Caption', () => (
    <Typography title={'caption'} color={'primary'} variant={'caption'}/>
), { notes: { markdown: notes } })
.add('Button', () => (
    <Typography title={'button'} color={'primary'} variant={'button'}/>
), { notes: { markdown: notes } })