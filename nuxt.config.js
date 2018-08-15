const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
  head: {
    title: 'Roatate - Code Test',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Code test for rotate by Jay.',
      },
    ],
  },

  loading: { color: '#3B8070' },
});
