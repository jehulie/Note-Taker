// Dependencies
const express = require('express');

// Direct server to route files
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create the express server
const app = express();

// Set up the PORT
const PORT = process.env.PORT || 3001;

// Middleware - setting up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Setting up routes for Express
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));