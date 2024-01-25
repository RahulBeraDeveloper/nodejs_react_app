const express = require('express');
const router = express.Router();
const crudHandlers = require('../handlers/curdHandlers');

router.get('/users', crudHandlers.getAllUsers);
router.post('/users', crudHandlers.addUser);
router.put('/users/:id', crudHandlers.updateUser);
router.delete('/users/:id', crudHandlers.deleteUser);

module.exports = router;
