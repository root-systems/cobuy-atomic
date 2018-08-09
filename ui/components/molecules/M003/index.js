import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Button from '../../atoms/A001-Button'

const styles = {}

const M003 = props => {
  return (
    <Button title={props.title} color={'primary'} />
  )
}

M003.propTypes = createPropTypes(schema)

export default withStyles(styles)(M003)
