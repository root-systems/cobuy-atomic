import { configure } from '@storybook/react'
import { normal } from './theme'
import { setOptions } from '@storybook/addon-options'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

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

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...extraViewports,
  },
})


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
