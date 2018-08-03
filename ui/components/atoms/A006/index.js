import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Typography } from '@material-ui/core'

import schema from './schema'

// const styles = {
//   root: {
//     width: '100%',
//     maxWidth: 500,
//     backgroundColor: 'red'
//   }
// };

const A006 = props => {
  return (
    // <div className={classes.root}>
    <div>
      <Typography variant='display3' color={props.color}>
        {props.title}
      </Typography>
    </div>
  )
}

A006.propTypes = createPropTypes(schema)

export default A006
