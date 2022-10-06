const express = require("express");
const path = require('path');
const app = express();
const routes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);

// Middleware
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method} - ${process.env.PORT}`);
    next();
});

// Routes
app.use(routes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server start');
});