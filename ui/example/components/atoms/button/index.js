import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { WiredButton } from 'react-wired'

import schema from './schema'

const button = (props) => {
  return(
   <WiredButton onClick={props.onClick} elevation={props.elevation} text={props.text} disabled={props.disabled} />
  )
}

button.propTypes = createPropTypes(schema)

export default button
