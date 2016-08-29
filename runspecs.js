'use strict';

require('babel-core/register');

/**
 * Jasmine Configuration.
 */
const Jasmine = require('jasmine');
const JasmineCore = require('jasmine-core');
const jasmine = new Jasmine({
  jasmineCore: JasmineCore
});

/**
 * JSDOM Setup and browser missing features.
 */
const jsdom = require('jsdom').jsdom;

global.window = jsdom('', { url: 'http://localhost:3000' }).defaultView;
global.navigator = window.navigator;
global.document = window.document;

/**
 * Custom Event Polyfill.
 */
function CustomEvent(event, params) {
  let evt;

  params = params || { bubbles: false, cancelable: false, detail: undefined };
  evt = document.createEvent('CustomEvent');
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

  return evt;
}

CustomEvent.prototype = window.Event.prototype;

global.CustomEvent = CustomEvent;

// Environment setup
global.ENV = 'TEST';

// Removes React warnings during tests
process.env.NODE_ENV = 'production';

if (require.main === module) {
  /*
   * Jasmine Initialization
   */
  console.log('Running specs...\n\n');

  jasmine.loadConfig({
    spec_dir: '',
    spec_files: [
      'app/components/**/*.specs.js',
      'app/modules/**/*.specs.js',
      'tests/**/*.specs.js'
    ],
    stopSpecOnExpectationFailure: false,
    random: false
  });

  jasmine.execute();
}
