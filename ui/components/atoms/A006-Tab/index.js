import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Tab from '@material-ui/core/Tab'

import Icon from '../../particles/P001-Icon'
import schema from './schema'

const A006 = props => {
  return (
    <Tab disabled={props.disabled} icon={<Icon iconname={props.iconname} />} />
  )
}

A006.propTypes = createPropTypes(schema)

export default A006
