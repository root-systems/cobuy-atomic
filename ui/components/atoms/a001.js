import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    backgroundColor: 'red',
  },
};

const a001 = (props) => {
  return (
    <div>
      <div className={props.classes.container}>
        <button>{props.title}</button>
      </div>
    </div>
  )
}

export default withStyles(styles)(a001)
