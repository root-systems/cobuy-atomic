import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Button from '../../atoms/A001'

const styles = {}

const M003 = props => {
  return (
    <div>
      <Button title={props.title} color={'primary'} />
    </div>
  )
}

M003.propTypes = createPropTypes(schema)

export default withStyles(styles)(M003)
