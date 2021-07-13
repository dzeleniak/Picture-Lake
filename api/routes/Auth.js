const express = require('express');

const router = express.Router();

const {
    signIn,
    signOut,
}  = require('../Controllers/AuthController');

router.post('/login', signIn);

router.post('/logout', signOut);

module.exports = router;