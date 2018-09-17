import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Grid from '@material-ui/core/Grid'

import TextField from '../../atoms/A101-TextField'

import schema from './schema'

const M007 = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <TextField
          id='addressName'
          name='addressName'
          label='Address name'
          placeholder='c/o Enspiral Dev Academy'
          value={props.addressNameField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='addressline1'
          name='addressline1'
          label='Address line 1'
          placeholder='Level 2, 275 Cuba Street'
          required
          value={props.addressLineOneField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='addressline2'
          name='addressline2'
          label='Address line 2'
          placeholder=''
          value={props.addressLineTwoField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='suburb'
          name='suburb'
          label='Suburb'
          placeholder='Te Aro'
          value={props.suburbField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='city'
          name='city'
          label='City'
          placeholder='Wellington'
          value={props.cityField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='postcode'
          name='postcode'
          label='Post code'
          placeholder='6011'
          value={props.postCodeField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id='country'
          name='country'
          label='Country'
          placeholder='New Zealand'
          value={props.countryField.value}
        />
      </Grid>
    </Grid>
  )
}

M007.propTypes = createPropTypes(schema)

export default M007
