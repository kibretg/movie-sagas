const express = require('express');
const router = express.Router();
const movieList = [];

router.get('/', (req, res) => {
    res.send(movieList);
});

router.post('/',(req, res) => {
    res.sendStatus(201);
});

module.exports = router;