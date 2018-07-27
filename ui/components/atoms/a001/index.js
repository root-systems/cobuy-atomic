import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

const styles = {

};

const a001 = (props) => {
  return (
    <Button variant={'contained'} color={props.buttonColor}>{props.title}</Button>
  )
}

a001.propTypes = createPropTypes(schema)

export default withStyles(styles)(a001)
  