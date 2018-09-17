import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import IconButton from '@material-ui/core/IconButton'

import Icon from '../../particles/P001-Icon'
import schema from './schema'

const A004 = props => {
  const { ariaLabel, iconname, ...other } = props
  return (
    <IconButton aria-label={ariaLabel} {...other}>
      <Icon iconname={iconname} />
    </IconButton>
  )
}

A004.propTypes = createPropTypes(schema)

export default A004
