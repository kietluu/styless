
import config from 'plugins/lib/config'
import { loadENVConfig } from './preload'

let plugins = config.get('bootstrap-plugins')
	, fs = require('fs')
	, path = require('path');

const listenErrors = () => {

	process.on('unhandledRejection', (reason, p) => {

		console.error(reason)
	});

	process.on('uncaughtException', (reason, p) => {

		console.error(reason)
	});
}

const bootstrapPlugins = () => {

	for (let key in plugins) {

		const pluginName = plugins[key]

		var index = path.resolve(__dirname, `../../${pluginName}`)
		
		if (fs.existsSync(index)) {

			const plugin = require(index)

			if (plugin && typeof plugin.default === 'function') {

				try { plugin.default() }
				catch (ex) { console.error(ex) }
			}
		}
	}
}

export const startPlugins = () => {

	loadENVConfig()
	listenErrors()
	bootstrapPlugins()
}

startPlugins()
