import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'

const A102 = props => {
  const { readOnly, rows, rowsMax, ...other } = props

  return (
    <Field
      component={TextField}
      InputProps={{
        readOnly: readOnly
      }}
      type='text'
      margin='normal'
      multiline
      rows={rows > 3 ? rows : 3}
      rowsMax={rowsMax > 10 ? rowsMax : 10}
      {...other}
    />
  )
}

A102.propTypes = createPropTypes(schema)

export default A102
