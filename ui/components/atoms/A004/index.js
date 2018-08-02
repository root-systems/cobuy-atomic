import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button'

import schema from './schema'

const A004 = props => {
  return (
    <div>
      <AppBar position='static' color='default'>
        <Icon color={props.color}>
          arrow_back_ios
        </Icon>
        {props.appBarTitle}
      </AppBar>
    </div>
  )
}

A004.propTypes = createPropTypes(schema)

export default A004
