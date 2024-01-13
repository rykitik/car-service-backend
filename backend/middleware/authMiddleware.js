const authMiddleware = (req, res, next) => {
    // Реализация проверки авторизации пользователя
    // Пример: проверка наличия токена в заголовке запроса
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Расшифровка токена и проверка авторизации
  
    next();
  };
  
  module.exports = authMiddleware;