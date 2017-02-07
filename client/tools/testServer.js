
process.env.NODE_ENV = 'test';

// Disable webpack-specific features for tests
['.css', '.scss', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null;
});

require('babel-register')();

const jsdom = require('jsdom').jsdom;
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
