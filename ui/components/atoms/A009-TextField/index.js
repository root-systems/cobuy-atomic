import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'

const A009 = props => {
  const { readOnly } = props

  return (
    <Field
      component={TextField}
      type='text'
      margin='normal'
      InputProps={{
        readOnly: readOnly
      }}
      {...props}
    />
  )
}

A009.propTypes = createPropTypes(schema)

export default A009
