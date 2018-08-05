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
      <Typography variant='display4' color={props.color}>
        {props.title} - Display 4
      </Typography>
      <hr/>
      <Typography variant='display3' color={props.color}>
        {props.title} - Display 3
      </Typography>
      <hr/>
      <Typography variant='display2' color={props.color}>
        {props.title} - Display 2
      </Typography>
      <hr/>
      <Typography variant='display1' color={props.color}>
        {props.title} - Display 1
      </Typography>
      <hr/>
      <Typography variant="headline" color={props.color}>
        Headline
      </Typography>
      <hr/>
      <Typography variant="title" color={props.color}>
        Title
      </Typography>
      <hr/>
      <Typography variant="subheading" color={props.color}>
        Subheading
      </Typography>
      <hr/>
      <Typography variant="body2" color={props.color}>
        Body 2
      </Typography>
      <hr/>
      <Typography variant="body1" align="right" color={props.color}>
        Body 1 - align right 
      </Typography>
      <hr/>
      <Typography variant="body1" align="center" color={props.color}>
        Body 1 - align center 
      </Typography>
      <hr/>
      <Typography variant="body1" align="left" color={props.color}>
        Body 1 - align left 
      </Typography>
      <hr/>
      <Typography noWrap color={props.color}>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <hr/>
      <Typography variant="button" color={props.color}>
        Button
      </Typography>
      <hr/>
      <Typography variant="caption" color={props.color}>
        Caption
      </Typography>
    </div>
  )
}

A006.propTypes = createPropTypes(schema)

export default A006
