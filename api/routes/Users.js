const express = require('express');
const router = express.Router();

const {
    getUser,
    getUserById,
    postUser,
    putUser,
    deleteUser
} = require('../Controllers/UserController')

// Post new user
router.post('/', postUser);

// Get users
router.get('/', getUser);

// Get User by id
router.get('/:id', getUserById);

// Modify existing user
router.put('/:id', putUser);

// Delete a user
router.delete('/:id', deleteUser);

module.exports = router;