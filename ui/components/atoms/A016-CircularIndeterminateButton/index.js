// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

// Import from UI library
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import Icon from '../../particles/P001-Icon'

// Import JSON schema
import schema from './schema'
import styles from './styles'

const A016 = props => {
  const { iconname, submitting } = props

  return (
    <Button variant='contained' disabled={submitting} >
      {submitting ? (
        <CircularProgress size={22} />
      ) : (
        <Icon iconname={iconname} />
      )}
    </Button>
  )
}

// Convert imported schema to Prop types
A016.propTypes = createPropTypes(schema)

// Export the Atom
export default withStyles(styles)(A016)
