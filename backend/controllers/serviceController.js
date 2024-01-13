const { Service } = require('../models');

/**
 * Получение списка доступных услуг
 * @param {object} req - Запрос на получение услуг
 * @param {object} res - Ответ с результатом операции
 */
const getAvailableServices = async (_, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAvailableServices,
};
