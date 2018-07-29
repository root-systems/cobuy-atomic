import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import "wired-elements"

import schema from './schema'

const input = (props) => {
  return (
    props.disabled
    ? <wired-input placeholder={props.placeholder} type={props.type} value={props.value} disabled/>
    : <wired-input placeholder={props.placeholder} type={props.type} value={props.value} />
  )
}

input.propTypes = createPropTypes(schema)

export default input
