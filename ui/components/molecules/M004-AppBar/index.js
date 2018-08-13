// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import { withStyles } from '@material-ui/core/styles';

// Import from UI library
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Import JSON schema
import schema from './schema'

// Import styles here - see example setup for styles at ui/example/components/atoms/checkbox

// Define Atom as JSX
const A008 = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Page title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// Convert imported schema to Prop types
A008.propTypes = createPropTypes(schema)

// Export the Atom
export default A008
