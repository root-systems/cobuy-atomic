import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import CustomIcon from '../../particles/P001-Icon'

import schema from './schema'

const A027 = props => {
  return (
    <FormControlLabel
      label={props.label}
      labelPlacement={props.labelPlacement}
      control={
        <Checkbox
          id={props.id}
          color={props.color}
          checked={props.checked}
          disabled={props.disabled}
          indeterminate={props.indeterminate}
          value={props.value}
          aria-label={props.ariaLabel}
          icon={(<CustomIcon iconname='favorite_border' />)}
          checkedIcon={(<CustomIcon iconname='favorite' />)}
        />
      }
    />
  )
}

A027.propTypes = createPropTypes(schema)

export default A027
