const express = require('express');
const app = express();

// Set the view engine to use EJS
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port http://127.0.0.1:3000/');
});