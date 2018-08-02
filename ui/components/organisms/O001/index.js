import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Icon from '../../atoms/A003'
import Appbar from '../../atoms/A004'
import PageTitle from '../../atoms/A005'
import RightMenu from '../../molecules/M002'

const styles = {}

const O001 = props => {
  return (
    <Appbar>
      <Icon iconName='hamburger' />
      <PageTitle />
      <RightMenu />
    </Appbar>
  )
}

O001.propTypes = createPropTypes(schema)

export default withStyles(styles)(O001)
