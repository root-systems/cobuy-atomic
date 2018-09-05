import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Switch from '@material-ui/core/Switch'

import schema from './schema'

const A022 = props => {
  return (
    <Switch
      id={props.id}
      color={props.color}
      checked={props.checked}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      value={props.value}
    />
  )
}

A022.propTypes = createPropTypes(schema)

export default A022
