import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import schema from './schema'

const A023 = props => {
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacement}
      control={
        <Switch
          id={props.id}
          color={props.color}
          checked={props.checked}
          disabled={props.disabled}
          aria-label={props.ariaLabel}
          value={props.value}
        />
      }
    />
  )
}

A023.propTypes = createPropTypes(schema)

export default A023
