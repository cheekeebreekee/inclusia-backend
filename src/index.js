const express = require('express');
require('dotenv').config();

const diseasesRoute = require('./routes/diseases');
const graduationLevelsRoute = require('./routes/graduationLevels');
const specialitiesRoute = require('./routes/specialities');
const localitiesRoute = require('./routes/localities');
const institutionRoute = require('./routes/institutions');

const app = express();

app.use(express.json());

app.use('/diseases', diseasesRoute);
app.use('/graduationLevels', graduationLevelsRoute);
app.use('/specialities', specialitiesRoute);
app.use('/localities', localitiesRoute);
app.use('/institutions', institutionRoute);

app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}`));
