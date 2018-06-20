require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(
	`${process.env.COUCH_HOSTNAME}${process.env.COUCH_DBNAME}`
)

const codingYouTubeChannels = [
	{
		_id: 'channel_channel_coding_phase',
		name: 'Coding Phase',
		type: 'channel',
		subscribers: 24000,
		hasPatreon: true
	},
	{
		_id: 'channel_fun_fun_function',
		name: 'Fun Fun Function',
		type: 'channel',
		subscribers: 161000,
		hasPatreon: true
	},
	{
		_id: 'channel_dylan_israel',
		name: 'Dylan Israel',
		type: 'channel',
		subscribers: 44000,
		hasPatreon: true
	},
	{
		_id: 'channel_telmo_sampaio',
		name: 'Telmo Sampaio',
		type: 'channel',
		subscribers: 3615,
		hasPatreon: false
	},
	{
		_id: 'channel_free_code_camp',
		name: 'Free Code Camp',
		type: 'channel',
		subscribers: 276000,
		hasPatreon: false
	},
	{
		_id: 'channel_siraj raval',
		name: 'Siraj Raval',
		type: 'channel',
		subscribers: 391000,
		hasPatreon: true
	}
]

db.bulkDocs(codingYouTubeChannels, function(err, result) {
	if (err) {
		console.log('ERROR', err)
		return
	}
	console.log('success', result)
})
