import React from 'react'
import { storiesOf } from '@storybook/react'
import { actions } from '@storybook/addon-actions'

import Button from '.'

const eventsFromButtons = actions({ onClick: 'clicked'})

storiesOf('@example|atoms/Button', module)
  .add('Elevation 1', () => (
    <Button {...eventsFromButtons} text={'Search'} elevation={1} />
  ))
  .add('Disabled Elevation 3', () => (
    <Button {...eventsFromButtons} text={'Disabled'} disabled={true} elevation={3} />
  ))
  .add('Elevation 5', () => (
    <Button {...eventsFromButtons} text={'Elevation 5'} elevation={5} />
  ))
  .add('With Action', () => (
    <Button {...eventsFromButtons} text={'Rockets Away'} elevation={2} />
  ))
