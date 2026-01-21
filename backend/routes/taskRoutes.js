const express = require('express');
const router = express.Router();

const { createTask } = require('../controllers/taskControllers');

router.post('/', createTask);

module.exports = router;
