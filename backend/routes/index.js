const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { createUser, createAppointment, getAvailableServices } = require('../controllers');

// Роуты для работы с пользователями
router.post('/user', createUser);

// Роуты для работы с записями
router.post('/appointment', authMiddleware, createAppointment);

// Получение доступных услуг
router.get('/services', getAvailableServices);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Operations with appointments
 */

/**
 * @swagger
 * path:
 *   /api/appointment:
 *     post:
 *       summary: Create a new appointment
 *       tags: [Appointments]
 *       requestBody:
 *         description: Appointment details
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: integer
 *                   description: ID of the user making the appointment
 *                 serviceId:
 *                   type: integer
 *                   description: ID of the service for the appointment
 *                 date:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of the appointment
 *       responses:
 *         '201':
 *           description: Successfully created
 *           content:
 *             application/json:
 *               example:
 *                 id: 1
 *                 userId: 1
 *                 serviceId: 2
 *                 date: "2024-01-01T10:00:00Z"
 *         '400':
 *           description: Bad Request
 *           content:
 *             application/json:
 *               example:
 *                 error: "Invalid input. User ID, service ID, and date are required."
 *         '401':
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               example:
 *                 error: "Unauthorized"
 *         '500':
 *           description: Internal Server Error
 *           content:
 *             application/json:
 *               example:
 *                 error: "Internal Server Error"
 */
