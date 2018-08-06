import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import createPropTypes from 'json-schema-prop-types'

import schema from './schema'

import Appbar from '../../atoms/A004'
import LeftIcon from '../../atoms/A003'
import PageTitle from '../../atoms/A005'
import RightMenu from '../../molecules/M002'


const styles = {
  root: {
    flexGrow: 1,
    border: '5px solid red'
  },
  flex: {
    flexGrow: 1,
    border: '5px solid red'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const O001 = props => {
  return (
    <div className='root'>
      <Appbar>
        <LeftIcon iconname='hamburger' className='menuButton' />
        <PageTitle title={props.title} variant="title" className='flex' />
        <RightMenu />
      </Appbar>
    </div>

  )
}

O001.propTypes = createPropTypes(schema)

export default O001
