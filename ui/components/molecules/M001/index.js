import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Button from '../../atoms/a001'

const styles = {

};

const a001 = (props) => {
  return (
    <div>
      <Button title={props.title} color={'primary'} />
    </div>
  )
}

a001.propTypes = createPropTypes(schema)

export default withStyles(styles)(a001)