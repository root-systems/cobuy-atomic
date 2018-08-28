import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Avatar from '@material-ui/core/Avatar'
import rgAvatar from '../../../assets/avatars/richard.jpg'

import schema from './schema'

const A014 = props => {
  return (
    <Avatar alt={props.alt} img src={rgAvatar} />
  )
}

A014.propTypes = createPropTypes(schema)

export default A014
