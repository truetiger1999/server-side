import webpack from 'webpack'

import { clientConfiguration } from 'universal-webpack'
import settings from './universal-webpack-settings'
import baseConfiguration from './webpack.config'

import { setDevFileServer } from './devserver'

let configuration = clientConfiguration(baseConfiguration, settings)

// `webpack-serve` can't set the correct `mode` by itself
// so setting `mode` to `"development"` explicitly.
// https://github.com/webpack-contrib/webpack-serve/issues/94
configuration.mode = 'development'

// Fetch all files from webpack development server.
configuration = setDevFileServer(configuration)

configuration.plugins.push
(
	// Prints more readable module names in the browser console on HMR updates.
	new webpack.NamedModulesPlugin()
)

// `webpack-serve` can't import the configuration properly
// when using `export default` hence using `module.exports` here.
// https://github.com/webpack-contrib/webpack-serve/issues/81#issuecomment-378469110
// export default configuration
module.exports = configuration
