const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

// parse JSON data
app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// listner
app.listen(PORT, () => {
    console.log(`API server now running on port ${PORT}`)
});