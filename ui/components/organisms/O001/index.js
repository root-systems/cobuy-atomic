import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Appbar from '../../atoms/A004-AppBar'
import LeftIcon from '../../atoms/A003-Icons'
import PageTitle from '../../atoms/A005-PageTitle'
import RightMenu from '../../molecules/M002'


const O001 = props => {
  return (
    <div>
      <Appbar>
        <LeftIcon iconname='hamburger' className='menuButton'/>
        <PageTitle title={props.title} variant="title"/>
        <RightMenu />
      </Appbar>
    </div>

  )
}

O001.propTypes = createPropTypes(schema)

export default O001
