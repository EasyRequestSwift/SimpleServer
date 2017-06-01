// Export module of itens routes. Need receive the app var
module.exports = (app) => {

	app.get('/api/itens', (request, response) => {

		let json = {
			success: true,
			itens: [
				{
					id: 1,
					name: 'name item 1',
					description: 'description item 1'
				},
				{
					id: 2,
					name: 'name item 2',
					description: 'description item 2'
				},
				{
					id: 3,
					name: 'name item 3',
					description: 'description item 3'
				}
			]
		}
		
		response.status(200).json(json);
	});

	app.get('/api/item', (request, response) => {
		let status = 200
		let json = {}
		
		const id = request.query.id
		if (id) {
			if (id > 0 && id < 10) {
				json = {
					success: true,
					item: {
						id,
						name: 'name item ' + id,
						description: 'description item ' + id
					}
				}
				status = 200
			} else {
				json = {
					success: false,
					error: 'Item ' + id + ' not exist.'
				}
				status = 400
			}
		} else {
			json = {
				success: false,
				error: 'Error: Id is needed.'
			}
			status = 400
		}
		
		response.status(status).json(json);
	});

	app.post('/api/item', (request, response) => {
		let status = 201
		let json = {}

		if (request.body.name) {
			const name = request.body.name
			const description = request.body.description
			const id = 1
			json = {
				success: true,
				message: 'New item added.',
				item: {
					id,
					name,
					description
				}
			}
			status = 201
		} else {
			json = {
				success: false,
				error: 'Name and Description are needed.'
			}
			status = 400
		}

		response.status(status).json(json);
	});

	app.put('/api/item/:id', (request, response) => {
		let status = 200
		let json = {}
		
		const id = request.params.id

		if (id > 0 && id < 10) {
			if (request.body.name) {
				const name = request.body.name
				const description = request.body.description
				json = {
					success: true,
					item: {
						id,
						name,
						description
					}
				}
				status = 200
			} else {
				json = {
					success: false,
					error: 'Name and Description are needed.'
				}
				status = 400
			}
		} else {
			json = {
				success: false,
				error: 'Item ' + id + ' not exist.'
			}
			status = 400
		}

		response.status(status).json(json);
	});

	app.delete('/api/item/:id', (request, response) => {
		let status = 200
		let json = {}
		
		const id = request.params.id

		if (id > 0 && id < 10) {
			json = {
				success: true,
				message: 'Item ' + id + ' deleted.'
			}
			status = 200
		} else {
			json = {
				success: false,
				error: 'Item ' + id + ' not exist.'
			}
			status = 400
		}

		response.status(status).json(json);
	});
}