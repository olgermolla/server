const core = require('./core/webpack');
const files_trashbin = require('./apps/files_trashbin/webpack')
const files_versions = require('./apps/files_versions/webpack');
const oauth2 = require('./apps/oauth2/webpack')
const systemtags = require('./apps/systemtags/webpack')

module.exports = [].concat(
	core,
	files_trashbin,
	files_versions,
	oauth2,
	systemtags
);
