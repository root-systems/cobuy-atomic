import React, { Fragment } from 'react'
import createPropTypes from 'json-schema-prop-types'
import { Popper, withStyles, Paper } from '@material-ui/core'

import IconButton from '../../atoms/A003-IconButton'

import schema from './schema'
import styles from './styles'

class PageSettingsMenu extends React.Component {
  // Todo: DL Refactor away from below constructor pattern
  constructor (props) {
    super()
    this.state = {
      anchorEl: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    const { currentTarget } = event
    this.setState(state => ({
      anchorEl: state.anchorEl ? null : currentTarget
    }))
  }

  render () {
    const { children, classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <Fragment>
        <IconButton
          ariaLabel='page settings'
          iconname='more_vert'
          onClick={this.handleClick}
        />
        <Popper open={open} placement='bottom-end' anchorEl={anchorEl}>
          <Paper className={classes.paper} elevation={1}>
            {children}
          </Paper>
        </Popper>
      </Fragment>
    )
  }
}

PageSettingsMenu.propTypes = createPropTypes(schema)

export default withStyles(styles)(PageSettingsMenu)
