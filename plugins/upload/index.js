
import config from 'plugins/lib/config'
import multer from 'multer'
import app from 'plugins/lib/server/app'
import nanoid from 'nanoid'
import md5 from 'md5'

const { maxFiles, maxFileSize } = config.get('storage.limit')

const uploadStorage = multer.diskStorage({

	destination: (req, file, cb) => {

		cb(null, '/tmp/uploads')
	},
	filename: (req, file, cb) => {

		const nameParts = file.originalname.split('.')

		const ext = nameParts[nameParts.length-1]

		const newName = md5(nanoid(20)) + `.${ext}`

		cb(null, newName)
	}
})

const upload = multer({

	storage: uploadStorage,
	limits: {

		files: maxFiles,
		fileSize: maxFileSize
	}

})

const bootstrap = () => {

	app.post('/upload', upload.single('file'), (req, res) => {

		res.json({ok: 1})
	})
}

export default bootstrap
