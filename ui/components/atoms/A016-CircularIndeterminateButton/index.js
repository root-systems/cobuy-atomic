// List Libraries being used
import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

// Import from UI library
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

// Import JSON schema
import schema from './schema'
import styles from './styles'

const A016 = props => {
  const { text, classes } = props
  return (
    <Fragment>
      <Button variant='contained' disabled>
        {text}
      </Button>
      <CircularProgress size={22} className={classes.circularProgress} />
    </Fragment>
  )
}

// Convert imported schema to Prop types
A016.propTypes = createPropTypes(schema)

// Export the Atom
export default withStyles(styles)(A016)
