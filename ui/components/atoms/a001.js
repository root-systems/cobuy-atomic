import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
  container: {
    // backgroundColor: 'red',
    padding: '1em'
  },
  primaryButton: {
    color: 'green',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'red'
    },
  }
};

const a001 = (props) => {
  return (
    <div>
      <div className = { props.classes.container }>
        <button className = { props.classes.primaryButton } >{props.title}</button>
      </div>
      <div>
        <Button variant={props.variant} color={props.buttonColor}>{props.title}</Button>
      </div>
    </div>
  )
}

export default withStyles(styles)(a001)
  