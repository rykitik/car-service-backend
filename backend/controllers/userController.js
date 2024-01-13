const { User } = require('../models');

/**
 * Создание нового пользователя
 * @param {object} req - Запрос с данными пользователя
 * @param {object} res - Ответ с результатом операции
 */
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Invalid input. Name, email, and password are required.' });
    }

    // Хэширование пароля перед сохранением в базу данных
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = {
  createUser,
};
