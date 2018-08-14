import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Appbar from '../../atoms/A004-AppBar'
import LeftIcon from '../../particles/P001-Icon'
import PageTitle from '../../atoms/A005-PageTitle'
import RightMenu from '../../molecules/M002'


const O001 = props => {
  return (
    <div>
      <Appbar>
        <LeftIcon iconname='menu' className='menuButton'/>
        <PageTitle title={props.title} variant="title"/>
        <RightMenu />
      </Appbar>
    </div>

  )
}

O001.propTypes = createPropTypes(schema)

export default O001
