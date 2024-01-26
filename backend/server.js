// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models/index'); // Добавлен этот импорт

const routes = require('./routes');
const dotenvConfig = require('dotenv').config();

const app = express();
const { DB_PORT } = process.env;

app.use(cors());
app.use(bodyParser.json());

// Подключение к базе 'cors'
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Использование маршрутов
app.use('/api', routes);

app.listen(DB_PORT, () => {
  console.log(`Server is running at http://localhost:${DB_PORT}`);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});