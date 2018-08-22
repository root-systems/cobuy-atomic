// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import AppBar from '../../atoms/A004-AppBar'
import Typography from '../../particles/P002-Typography'
import IconButton from '../../atoms/A011-IconButton'

// Import JSON schema
import schema from './schema'

const M001 = props => {
  return (
    <div>
      <AppBar position='fixed'>
        <IconButton aria-label='Menu' iconname='menu' handleClick={props.menuClick} />
        <Typography variant='title' color='inherit'>
            Page title
        </Typography>
        <IconButton aria-label='Profile' iconname='person' handleClick={props.profileClick} />
      </AppBar>
    </div>
  )
}

// Convert imported schema to Prop types
M001.propTypes = createPropTypes(schema)

// Export the Atom
export default M001
