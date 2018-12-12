const config = {

	config: {},

	__setMockConfig (config) {

		this.config = config
	},

	get () {

		return this.config
	}
}
module.exports = config