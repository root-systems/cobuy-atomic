import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button'

import schema from './schema'

const a001 = (props) => {
  return (
    <Button variant={'contained'} color={props.color}>{props.title}</Button>
  )
}

a001.propTypes = createPropTypes(schema)

export default a001
  