import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

import schema from './schema'
import styles from './styles'

const A104 = props => {
  const {
    readOnly,
    classes,
    children,
    ...other
  } = props

  return (
    <Field
      className={classes.formField}
      component={TextField}
      InputProps={{
        readOnly: readOnly
      }}
      SelectProps={{
        MenuProps: {
          className: classes.menu
        }
      }}
      margin='normal'
      select
      {...other}
    >
      {children}
    </Field>
  )
}

A104.propTypes = createPropTypes(schema)

export default withStyles(styles)(A104)
