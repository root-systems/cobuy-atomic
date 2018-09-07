import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import schema from './schema'

const A023 = props => {
  const {
    label,
    labelPlacement,
    id,
    color,
    checked,
    disabled,
    ariaLabel,
    value,
    onChange
  } = props

  return (
    <FormControlLabel
      label={label}
      labelPlacement={labelPlacement}
      control={
        <Switch
          id={id}
          color={color}
          checked={checked}
          disabled={disabled}
          aria-label={ariaLabel}
          value={value}
          onChange={onChange}
        />
      }
    />
  )
}

A023.propTypes = createPropTypes(schema)

export default A023
