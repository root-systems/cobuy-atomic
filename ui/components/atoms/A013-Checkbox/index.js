import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Checkbox from '@material-ui/core/Checkbox'

import schema from './schema'

const A013 = props => {
  return (
    <Checkbox
      id={props.id}
      color={props.color}
      checked={props.checked}
      disabled={props.disabled}
      indeterminate={props.indeterminate}
      aria-label={props.ariaLabel}
      value={props.value}
    />
  )
}

A013.propTypes = createPropTypes(schema)

export default A013
