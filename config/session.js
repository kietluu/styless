
const session = require('express-session')
	, RedisStore = require('connect-redis')(session)
	, secure = process.env.NODE_ENV != 'local'

module.exports = {

	resave: false,
	saveUninitialized: false,
	store: new RedisStore({}),
	cookie: {
		secure,
		sameSite: true,
		httpOnly: true,
		proxy: secure,
		maxAge: 365 * 24 * 60 * 60 * 1000, //in miliseconds - 1 year
	}
}