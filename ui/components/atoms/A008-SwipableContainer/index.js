import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import SwipeableViews from 'react-swipeable-views'

import schema from './schema'

const A008 = props => {
  return (
    <SwipeableViews
      axis={props.axis}
      index={props.index}
      onChangeIndex={props.handleChangeIndex}
    >
      {props.children}
    </SwipeableViews>
  )
}

A008.propTypes = createPropTypes(schema)

export default A008
