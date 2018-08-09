import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button'

import schema from './schema'

const A002 = props => {
  return (
    <Button variant={'fab'} color={props.color} aria-label={props.ariaLabel}>
      {props.icon}
    </Button>
  )
}

A002.propTypes = createPropTypes(schema)

export default A002
