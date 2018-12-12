
import dotenv from 'dotenv'
import config from 'plugins/lib/config'

const envPath = config.get('env-path')

export const loadENVConfig = () => {

	const loadingEnvConfig = dotenv.config({
		path: envPath
	})

	if (loadingEnvConfig.error)
		console.error(loadingEnvConfig.error)
}