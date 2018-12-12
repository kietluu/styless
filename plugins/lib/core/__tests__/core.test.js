describe('Plugin loader:', () => {

	describe('Plugin has no index.js (demo-share) will be skipped', () => {

		beforeAll(() => {

			require('plugins/config').__setMockConfig({
				plugins: ['demo', 'demo-share']
			})
		})

		test('plugin database bootstrap will not be called', () => {

			const cb = jest.fn()

			require('../index').startPlugins(cb)

			expect(cb.mock.calls.length).toBe(0)
		})
	})
})