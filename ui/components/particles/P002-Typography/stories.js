import React from 'react'
import { storiesOf } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'

import Typography from '.'

import notes from './readme.md'

storiesOf('Particles|P002 - Typography', module)
  .addDecorator(withNotes)
  .add(
    'Display 1',
    () => (
      <Typography title={'Display 1'} color={'primary'} variant={'display1'}>
        Display 1
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Display 2',
    () => (
      <Typography title={'Display 2'} color={'primary'} variant={'display2'}>
        Display 2
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Display 3',
    () => (
      <Typography title={'Display 3'} color={'primary'} variant={'display3'}>
        Display 3
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Display 4',
    () => (
      <Typography
        title={'Display 4'}
        color={'primary'}
        variant={'display4'}
        align={'center'}
      >
        Display 4
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Headline',
    () => (
      <Typography title={'Headline'} color={'primary'} variant={'headline'}>
        Headline
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Title',
    () => (
      <Typography title={'Title'} color={'primary'} variant={'title'}>
        Title
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Body1',
    () => (
      <Typography title={'Body 1'} color={'primary'} variant={'body1'}>
        Body 1
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Body2',
    () => (
      <Typography title={'Body 2'} color={'primary'} variant={'body2'}>
        Body 1
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Subheading',
    () => (
      <Typography title={'Subheading'} color={'primary'} variant={'subheading'}>
        SubHeading{' '}
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Caption',
    () => (
      <Typography title={'Caption'} color={'primary'} variant={'caption'}>
        Caption
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
  .add(
    'Button',
    () => (
      <Typography title={'Button'} color={'primary'} variant={'button'}>
        Button
      </Typography>
    ),
    { notes: { markdown: notes } }
  )
