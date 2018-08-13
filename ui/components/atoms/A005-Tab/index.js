// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

// Import JSON schema
import schema from './schema'

// Import styles here - see example setup for styles at ui/example/components/atoms/checkbox

// Define Atom as JSX
const M005 = props => {
  return (
    <Tab icon={<Icon iconname={props.iconname}/>} label={props.label} />
  )
}

// Convert imported schema to Prop types
M005.propTypes = createPropTypes(schema)

// Export the Atom
export default M005