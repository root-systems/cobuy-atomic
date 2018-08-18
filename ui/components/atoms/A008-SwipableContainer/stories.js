import React from 'react'
import { storiesOf } from '@storybook/react'

// Import index.js from the same folder
import SwipableContainer from '.'

// List of stories of use cases for atom
storiesOf('Atoms|A008 - Swipable Container', module)
  .add('Swipe Contents', () => (
    <SwipableContainer>
      <span>hello</span>
      <span>sir</span>
    </SwipableContainer>
  ))
