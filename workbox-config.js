module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,svg,mp4,png,jpg,exe,html,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};