import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core/'

import TextFieldLabel from '../../atoms/A010-TextFieldLabel'
import TextAreaLabel from '../../atoms/A012-TextAreaLabel'
import Avatar from '../../atoms/A018-Avatar'
import Button from '../../atoms/A001-Button'
import PageTitle from '../../particles/P002-Typography'

import schema from './schema'
import styles from './styles'

const O003 = props => {
  return (
    <Paper className={props.classes.paper} elevation={1}>

      <PageTitle variant='title' align={props.pageTitle.align}>
        {props.pageTitle.title}
      </PageTitle>

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
            placeholder='Your fullname'
            type='text'
            required
            error={props.nameField.error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextAreaLabel
            id='description'
            name='description'
            label='Description'
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
            placeholder='www.website.com'
            type='url'
            error={props.websiteField.error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFieldLabel
            id='email'
            name='email'
            label='Email address'
            placeholder='support@cobuy.nz'
            type='email'
            error={props.emailField.error}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant='contained'
            color={props.okButton.color}
            text={props.okButton.buttontitle}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

O003.propTypes = createPropTypes(schema)

export default withStyles(styles)(O003)
