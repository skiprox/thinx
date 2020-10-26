// next.config.js
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([])
const withSass = require('@zeit/next-sass')
const withPurgeCss = require('next-purgecss')

require('dotenv').config()

// With purge css
const prodConfig = withPlugins(
  [withTM],
  withSass(
    withPurgeCss({
      target: 'serverless',
      distDir: '.next',
      purgeCssPaths: [
        'src/components/**/*'
      ],
      purgeCss: {
        whitelist: () => [
          'active'
        ]
      }
    })
  )
)

const devConfig = withPlugins(
  [withTM],
  {
    target: 'serverless',
    distDir: '.next'
  }
)

module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig
