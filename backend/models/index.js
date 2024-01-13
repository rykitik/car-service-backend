const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'autoservice_db',
});

const User = require('./User')(sequelize, DataTypes);
const Appointment = require('./Appointment')(sequelize, DataTypes);
const Service = require('./Service')(sequelize, DataTypes);

User.hasMany(Appointment);
Appointment.belongsTo(User);

sequelize.sync({ force: true }); // Опционально, для сброса базы данных при каждом запуске

// Создание индексов для оптимизации запросов
User.sync({ indexes: [{ unique: true, fields: ['email'] }] });
Appointment.sync({ indexes: [{ fields: ['userId', 'serviceId'] }] });

module.exports = sequelize;