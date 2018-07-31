import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button'

import schema from './schema'

const A001 = props => {
  return (
    <Button variant={'contained'} color={props.color}>{props.title}</Button>
  )
}

A001.propTypes = createPropTypes(schema)

export default A001
