import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button'

import Icon from '../../particles/P001-Icon'
import schema from './schema'

const A002 = props => {
  return (
    <Button
      variant='fab'
      color={props.color}
      disabled={props.disabled}
      size={props.size}
      aria-label={props.ariaLabel}
    >
      <Icon iconname={props.iconname} />
    </Button>
  )
}

A002.propTypes = createPropTypes(schema)

export default A002
