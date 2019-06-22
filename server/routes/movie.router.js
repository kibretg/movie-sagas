const express = require('express');

const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "movies"';
    pool.query(queryText)
    .then((result) => {res.send(result.rows); })
    .catch((error) => {
        console.log('Error completeing SELECT query', error);
        res.sendStatus(500); 
    });
});

router.get('/details/:id', (req, res) => {
    const queryText = 'SELECT * FROM "movies" WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT plant query', err);
        res.sendStatus(500);
      });
  });

router.post('/',(req, res) => {
    res.sendStatus(201);
});

module.exports = router;