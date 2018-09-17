import { configure, addDecorator } from '@storybook/react'
import { normal } from './theme'
import { setOptions } from '@storybook/addon-options'
import centered from '@storybook/addon-centered'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { configureActions } from '@storybook/addon-actions'
import { muiTheme } from 'storybook-addon-material-ui'

import CobuyMaterialTheme from '../ui/theme'

import extraViewports from './extra-viewports.json'

setOptions({
  name: 'Cobuy Atomic',
  url: 'https://github.com/root-systems/cobuy-atomic',
  goFullScreen: false,
  showAddonsPanel: true,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  enableShortcuts: false,
  theme: normal
})

addDecorator(centered)

configureViewport({
  defaultViewport: 'iphone5',
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...extraViewports,
  },
})

configureActions({
  depth: 100,
  limit: 20,
})

// addDecorator(muiTheme([CobuyMaterialTheme]))

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req

  req = require.context('../ui/', true, /stories\.js$/)
  importAll(req)

  req = require.context('../domains/', true, /stories\.js$/)
  importAll(req)
}

configure(loadStories, module)
