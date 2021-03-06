import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import 'wired-elements'

import schema from './schema'

const button = props => {
  return props.disabled ? (
    <wired-button onClick={props.onClick} elevation={props.elevation} disabled>
      {props.title}
    </wired-button>
  ) : (
    <wired-button onClick={props.onClick} elevation={props.elevation}>
      {props.title}
    </wired-button>
  )
}

button.propTypes = createPropTypes(schema)

export default button
