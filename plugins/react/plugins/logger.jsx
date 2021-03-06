
import env from 'config/env'

const sendLog = (type, data) => {

	helper.fetch(apis.log, {

		body: {
			type,
			...data,
			userAgent: navigator.userAgent
		}

	}).catch(err => {

	})
}

const logger = {

	error: (err, from) => {

		if (env === 'local') console.log(err);

		sendLog('error', {err, from})
	},

	info: (data, from) => {

		sendLog('info', {data, from})
	}
}


module.exports = logger


