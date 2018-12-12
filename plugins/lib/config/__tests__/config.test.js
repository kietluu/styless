
import config from '../index'

describe('Test config plugin', () => {

	test('Get config routes.auth.login', () => {

		expect.hasAssertions()

		let result = config.get('routes.auth.login')

		expect(result).toHaveLength(1)
	})

	test('Get config express.cookie.secret', () => {

		expect.hasAssertions()

		let result = config.get('express.cookie.secret')

		expect(result).toBe('tests')
	})
})