import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = {}

const a001 = props => {
  return (
    <Button variant={'contained'} color={props.buttonColor}>
      {props.title}
    </Button>
  )
}
export default withStyles(styles)(a001)
