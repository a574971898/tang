'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    VUE_APP_API_URL: '"https://api.tangs.ai"',
    PORT: '8082',
})
