import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Switch from '@material-ui/core/Switch'

import schema from './schema'

const A022 = props => {
  const {
    id,
    color,
    checked,
    disabled,
    ariaLabel,
    value,
    onChange
  } = props

  return (
    <Switch
      id={id}
      color={color}
      checked={checked}
      disabled={disabled}
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
    />
  )
}

A022.propTypes = createPropTypes(schema)

export default A022
