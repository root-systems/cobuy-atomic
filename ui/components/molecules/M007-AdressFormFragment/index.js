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
          id='addressName'
          name='addressName'
          label='Address name'
          placeholder='c/o Enspiral Dev Academy'
          type='text'
          error={props.addressNameField.error}
          value={props.addressNameField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='addressline1'
          name='addressline1'
          label='Address line 1'
          placeholder='Level 2, 275 Cuba Street'
          type='text'
          required
          error={props.addressLineOneField.error}
          value={props.addressLineOneField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='addressline2'
          name='addressline2'
          label='Address line 2'
          placeholder=''
          type='text'
          error={props.addressLineTwoField.error}
          value={props.addressLineTwoField.value}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='suburb'
          name='suburb'
          label='Suburb'
          placeholder='Te Aro'
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
          placeholder='Wellington'
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
          placeholder='6011'
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
          placeholder='New Zealand'
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
