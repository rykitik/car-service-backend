// backend/models/Appointment.js

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  const Appointment = sequelize.define('Appointment', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        serviceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        date: {
        type: DataTypes.DATE,
        allowNull: false,
        },
      // Другие поля для записи на услугу
    },
    {
      sequelize,
      modelName: 'Appointment',
      timestamps: false,
    }
  );

  Appointment.findAll().then(items => {
    console.log(items);
  });

  return Appointment;
};
