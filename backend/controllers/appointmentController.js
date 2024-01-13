const { Appointment } = require('../models');

/**
 * Создание новой записи на обслуживание
 * @param {object} req - Запрос с данными записи
 * @param {object} res - Ответ с результатом операции
 */
const { body, validationResult } = require('express-validator');
const { sequelize } = require('../models');

const createAppointment = [
  body('userId').isNumeric().withMessage('User ID must be a number'),
  body('serviceId').isNumeric().withMessage('Service ID must be a number'),
  body('date').isISO8601().toDate().withMessage('Invalid date format'),

  async (req, res) => {
    try {
      const errors = validationResult(req);
      const t = await sequelize.transaction();
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { userId, serviceId, date } = req.body;
      const newAppointment = await Appointment.create({ userId, serviceId, date }, { transaction: t });
      await t.commit(); // Подтверждение транзакции
      res.status(201).json(newAppointment);
    } catch (error) {
      await t.rollback(); // Откат транзакции в случае ошибки
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];


module.exports = {
  createAppointment,
};
