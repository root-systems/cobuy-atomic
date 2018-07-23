// TODO https://github.com/storybooks/storybook/blob/master/examples/official-storybook/config.js

import { configure } from '@storybook/react';

function importAll(req) {
  req.keys().forEach(filename => req(filename));
}

function loadStories() {
  let req;
  req = require.context('../example/ui/components/atoms', true, /\.stories\.js$/);
  importAll(req);

 // req = require.context('../ui/components/atoms', true, /\.stories\.js$/);
 // importAll(req);
}

configure(loadStories, module);
