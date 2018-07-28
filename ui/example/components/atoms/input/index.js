import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

const input = (props) => {
  return (
    <input placeholder='enter text'></input>
  )
}

export default input