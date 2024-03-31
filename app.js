const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const queryRoutes = require('./routes/queryRoutes');
const userRegistrationRoutes = require('./routes/userRegistration');
const subMasRoutes = require('./routes/subMasRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use('/user', userRoutes);
app.use('/query', queryRoutes);
app.use('/userReg', userRegistrationRoutes);
app.use('/subject', subMasRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
