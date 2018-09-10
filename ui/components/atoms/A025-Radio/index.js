import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Radio from '@material-ui/core/Radio'

import schema from './schema'

const A025 = props => {
  return (
    <Radio
      id={props.id}
      color={props.color}
      checked={props.checked}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      value={props.value}
    />
  )
}

A025.propTypes = createPropTypes(schema)

export default A025
