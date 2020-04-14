const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const { connection } = mongoose;

connection.on('error', (err) => console.error(`database connection error: ${err}`));
connection.once('open', () => console.log('Succesful connection to the database'));

module.exports = mongoose;
