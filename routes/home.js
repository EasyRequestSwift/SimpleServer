// Export module of home routes. Need receive the app var
module.exports = (app) => {

	app.get('/api/success', function(request, response) {
		let json = {
			success: true,
			message: 'Success in this route'
		}
		response.status(200).json(json);
	});

	app.get('/api/internal-error', function(request, response) {
		let json = {
			success: false,
			message: 'Error internal'
		}
		response.status(500).json(json);
	});

}
