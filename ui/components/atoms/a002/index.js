import React from 'react'
import createPropTypes from 'json-schema-prop-types'

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


import schema from './schema'

const a002 = (props) => {
  return (
    <div>
      <Button variant={'fab'} color={ props.color } aria-label='Edit'><Icon>add</Icon></Button>
    </div>
   
  )
}

a002.propTypes = createPropTypes(schema)

export default a002