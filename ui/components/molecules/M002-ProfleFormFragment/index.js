import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid, withStyles } from '@material-ui/core/'

import TextFieldLabel from '../../atoms/A010-TextFieldLabel'
import TextAreaLabel from '../../atoms/A012-TextAreaLabel'
import Avatar from '../../atoms/A018-Avatar'

import schema from './schema'
import styles from './styles'

const M002 = props => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        {/* TODO: onclick(Avatar) open upload modal when avatar clicked */}
        <Avatar
          alt={props.avatar.alt}
          src={props.avatar.src}
          iconname='flower'
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='name'
          name='name'
          label='Name'
          value={props.nameField.value}
          placeholder='Daniel Lewis'
          type='text'
          required
          error={props.nameField.error}
        />
      </Grid>
      <Grid item xs={12}>
        {/* TODO: make multiline textfield with label and update this to it */}
        <TextAreaLabel
          id='description'
          name='description'
          label='Description'
          value={props.descriptionField.value}
          placeholder='There once was a little group that wished to buy together...'
          type='text'
          multiline={props.descriptionField.multiline}
          row={10}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='website'
          name='website'
          label='Website address'
          value={props.websiteField.value}
          placeholder='www.cobuy.nz'
          type='url'
          error={props.websiteField.error}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldLabel
          id='email'
          name='email'
          label='Email address'
          value={props.emailField.value}
          placeholder='support@cobuy.nz'
          type='email'
          error={props.emailField.error}
        />
      </Grid>
    </Grid>
  )
}

M002.propTypes = createPropTypes(schema)

export default withStyles(styles)(M002)
