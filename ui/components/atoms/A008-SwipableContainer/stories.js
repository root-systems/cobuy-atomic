import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import SwipableContainer from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A008 - Swipable Container', module).add(
  'Swipe Contents',
  () => (
    // TODO make an actual swipe handle function
    <SwipableContainer handleChangeIndex={console.log}>
      <span>hello</span>
      <span>sir</span>
    </SwipableContainer>
  )
)
