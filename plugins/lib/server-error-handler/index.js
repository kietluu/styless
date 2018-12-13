
import app from 'plugins/lib/server/app'
import logger from 'plugins/lib/logger'

const bootstrap = () => {

	app.use((err, req, res, next) => {
		
		logger.error(err)
		return res.json({ok: 0, msg: 'Something Broken!'})
	})
}

export default bootstrap