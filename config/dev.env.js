'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    VUE_APP_API_URL: '"http://192.168.31.127:8080"',
    PORT: '8082',
})
