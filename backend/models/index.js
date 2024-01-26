const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Загрузите параметры подключения из файла .env
dotenv.config();

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE
} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  },
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = require('./User')(sequelize);
  const Appointment = require('./Appointment')(sequelize);
  const Service = require('./Service')(sequelize);
  
  // Создание таблицы "Users"
  User.sync({ indexes: [{ unique: true, fields: ['email'] }] })
    .then(() => {
      // Создание таблицы "Appointments" после успешного создания "Users"
      return Appointment.sync({ indexes: [{ fields: ['userId', 'serviceId'] }] });
    })
    .then(() => {
      console.log('Tables created successfully.');
    })
    .catch(err => {
      console.error('Error creating tables:', err);
    });

module.exports = sequelize;
