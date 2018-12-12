
import app from 'plugins/lib/server/app'
import logger from 'plugins/lib/logger'

const bootstrap = (err, res, req, next) => {

	logger.error(err)

	return res.json({ok: 0, msg: 'Something Broken!'})
}

export default bootstrap