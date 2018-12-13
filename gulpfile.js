
var gulp = require('gulp'),
	path = require('path'),
	fs = require('fs'),
	del = require('del');

const plugins = [
	'lib',
	'upload',
	'react'
]

gulp.task('build', (done) => {

	del(['dist']).then(() => {

		for (let plugin of plugins) {

			const gulpPath = path.resolve(__dirname, `plugins/${plugin}/gulpfile.js`)

			if (fs.existsSync(gulpPath)) {

				const Plugin = require(gulpPath)

				if (Plugin && Plugin.run)
					Plugin.run(done)
			}
		}
	})
})