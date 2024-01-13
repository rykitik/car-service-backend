const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./models/index');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Подключение к базе данных
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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
