// Importing the app var of server config
var app = require('./config/server')

// Creating a listen in 3000 port
app.listen(3000, () => {
	console.log("Server ON");
});
