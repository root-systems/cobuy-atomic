// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

// Import from UI library
import Button from '@material-ui/core/Button'

// Import JSON schema
import schema from './schema'

// Import styles here - see example setup for styles at ui/example/components/atoms/checkbox

// Define Atom as JSX
const A001 = props => {
  const { text } = props
  return (
    <Button variant='contained' {...props}>
      {text}
    </Button>
  )
}

// Convert imported schema to Prop types
A001.propTypes = createPropTypes(schema)

// Export the Atom
export default A001
