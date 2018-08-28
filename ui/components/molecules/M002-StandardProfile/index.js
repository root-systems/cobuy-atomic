import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Grid from '@material-ui/core/Grid'

import TextField from '../../atoms/A009-Input'

import schema from './schema'

const M002 = props => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <TextField
          id={props.id}
          value={props.value}
          type={props.type}
          required={props.required}
          label={props.label}
          disabled={props.disabled}
          name={props.name}
          helperText={props.helperText}
          placeholder={props.placeholder}
          onChange={props.handleChange}
          error={props.error}
          margin='normal'
          InputProps={{
            readOnly: props.readOnly
          }}
          FormHelperTextProps={{
            error: props.helpError
          }}
        />
      </Grid>
    </Grid>
  )
}

M002.propTypes = createPropTypes(schema)

export default M002
