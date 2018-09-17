import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid } from '@material-ui/core/'

import PasswordField from '../../atoms/A103-PasswordField'

import schema from './schema'
import validation from './validation'

const M010 = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <PasswordField
          id='password'
          name='password'
          label='Enter Password'
          currentPasswordLength={10}
        />
      </Grid>
      <Grid item xs={12}>
        <PasswordField
          id='passwordConfirmation'
          name='passwordConfirmation'
          label='Confirm Password'
          currentPasswordLength={10}
        />
      </Grid>
    </Grid>
  )
}

M010.propTypes = createPropTypes(schema)

M010.validation = validation

export default M010
