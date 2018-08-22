import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Tabs from '@material-ui/core/Tabs'

import schema from './schema'

const A007 = props => {
  return (
    <Tabs
      fullWidth={props.fullWidth}
      centered={props.centered}
      indicatorColor={props.indicatorColor}
      textColor={props.textColor}
      value={props.value}
    >
      {props.children}
    </Tabs>
  )
}

A007.propTypes = createPropTypes(schema)

export default A007
