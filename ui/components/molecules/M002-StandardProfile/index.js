import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Paper } from '@material-ui/core/'

import TextField from '../../atoms/A009-Input'
import Avatar from '../../atoms/A014-Avatar'

import schema from './schema'
import styles from './styles'

const M002 = props => {
  return (
    <React.Fragment>
      <Paper className={props.classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={6} sm={12}>
            <Avatar alt={props.alt} src={props.src} />
          </Grid>
          <Grid item xs={6} sm={12}>
            <TextField
              id='fullName'
              name='fullName'
              label='full Name'
              value='Joe Smith'
            />
          </Grid>
          <Grid item xs={6} sm={12}>
            <TextField
              id='description'
              name='description'
              label='Description'
              value='This is decription'
              type='text'
            />
          </Grid>
          <Grid item xs={6} sm={12}>
            <TextField
              id='website'
              name='website'
              label='Website address'
              value='www.mywebsite.com'
              type='text'
            />
          </Grid>
          <Grid item xs={6} sm={12}>
            <TextField
              id='email'
              name='email'
              label='Email address'
              value='myname@email.com'
              type='text'
            />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}

M002.propTypes = createPropTypes(schema)

export default withStyles(styles)(M002)
