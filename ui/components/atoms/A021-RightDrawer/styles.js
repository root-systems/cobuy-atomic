export default theme => ({
  drawerPaper: {
    width: 240
    // width: theme.drawer.width TODO abstract into theme once the maintainers have it working :)
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
})
