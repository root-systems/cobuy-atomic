// List Libraries being used
import React from 'react'
import createPropTypes from 'json-schema-prop-types'
import { withStyles } from '@material-ui/core/styles'

// Import from UI library
import Button from '@material-ui/core/Button'

// Import JSON schema
import schema from './schema'

// Import styles here - see example setup for styles at ui/example/components/atoms/checkbox

// custom styling

// 1. CSS Stylesheet
import './custom.css';

  // 2. Inline styling
  const styles = {
    root: {
      backgroundColor: 'white',
      border: '5px solid #eee',
      marginTop: '20px',
      padding: '20px'
    },

    buttonStyle: {
      backgroundColor: 'white',
      color: 'red',
      margin: '5px',
    }
  };

// Define Atom as JSX
const A007 = props => {
  
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div>
        <p>MUI buttons</p>
        <Button variant={'contained'} color={props.color}>
          {props.buttonTitle}
        </Button>
      </div>

      <div>
        <p>MUI Button with inline styling</p>
        <Button className={classes.buttonStyle} variant={'contained'} color={props.color}>
          {props.buttonTitle}
        </Button>
      </div>

      <div>
        <p>custom buttons</p>
        <section className="border">
            <button>Button</button>
            <button className="hover">:hover</button>
            <button className="active">:active</button>
        </section>
      </div>

      <div>
        <div className="DottedBox">
          <p className="DottedBox_content">Get started with CSS styling</p>
        </div>
      </div>

    </div>
  )
}

// Convert imported schema to Prop types
A007.propTypes = createPropTypes(schema)

// Export the Atom 
// export default A007
export default withStyles(styles)(A007)