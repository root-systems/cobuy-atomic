import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'

import Checkbox from '../../atoms/A011-Checkbox'

import schema from './schema'

const M002 = props => {
  return (
    <FormControlLabel label={props.label} labelPlacement={props.labelPlacement}
      control={
        <Checkbox />
      }
    />
  )
}

M002.propTypes = createPropTypes(schema)

export default M002
