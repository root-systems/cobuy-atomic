// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Tab from '@material-ui/core/Tab'

// Import JSON schema
import schema from './schema'

// Import styles here - see example setup for styles at ui/example/components/atoms/checkbox
import TabIcon from '../../particles/P001-Icon'

// Define Atom as JSX
const A005 = props => {
  return (
    <Tab icon={<TabIcon iconname={props.icon} />} />
  )
}

// Convert imported schema to Prop types
A005.propTypes = createPropTypes(schema)

// Export the Atom
export default A005