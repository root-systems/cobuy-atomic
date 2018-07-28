import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Button from '@material-ui/core/Button'

const styles = {

};

const a001 = (props) => {
  return (
    <Button variant={'contained'} color={props.color}>{props.title}</Button>
  )
}

a001.propTypes = createPropTypes(schema)

export default withStyles(styles)(a001)
  