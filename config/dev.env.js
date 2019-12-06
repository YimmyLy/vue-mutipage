'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  useEslint: false
  // baseURL:'"http://192.168.1.126:4500/"'
})
