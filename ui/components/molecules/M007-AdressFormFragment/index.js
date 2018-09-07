import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Grid from '@material-ui/core/Grid'

import TextFieldLabel from '../../atoms/A010-TextFieldLabel'

import schema from './schema'

const M007 = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <TextFieldLabel
          id='addressline1'
          name='addressline1'
          label='Address line 1'
          placeholder='Address line 1'
          type='text'
          required
          error={props.addressField01.error}
          value={props.addressField01.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='suburb'
          name='suburb'
          label='Suburb'
          placeholder='Suburb'
          type='text'
          error={props.suburbField.error}
          value={props.suburbField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='city'
          name='city'
          label='City'
          placeholder='City'
          type='text'
          error={props.cityField.error}
          value={props.cityField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='postcode'
          name='postcode'
          label='Post code'
          placeholder='Post code'
          type='text'
          error={props.postCodeField.error}
          value={props.postCodeField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='country'
          name='country'
          label='Country'
          placeholder='Country'
          type='text'
          error={props.countryField.error}
          value={props.countryField.value}
        />
      </Grid>
    </Grid>
  )
}

M007.propTypes = createPropTypes(schema)

export default M007
