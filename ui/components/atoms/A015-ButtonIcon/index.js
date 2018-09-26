// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

// Import from UI library
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import Icon from '../../particles/P001-Icon'

// Import JSON schema
import schema from './schema'

const A015 = props => {
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
A015.propTypes = createPropTypes(schema)

// Export the Atom
export default A015
