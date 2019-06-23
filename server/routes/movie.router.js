const express = require('express');

const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query('SELECT * FROM "movies";')
    .then((result) => {
        res.send(result.rows); 
    })
    .catch((error) => {
        console.log('Error completeing SELECT movies query', error);
        res.sendStatus(500); 
    });
});

router.get('/details', (req, res) => {
    pool.query(`SELECT "genres"."name", "movie_genres"."genre_id" FROM "genres" 
    JOIN "movie_genres" 
    ON "movie_genres"."genre_id"="genres"."id"
    WHERE "movie_genres"."title_id"='1';`)
      .then((result) => { 
          res.send(result.rows); 
        })
      .catch((err) => {
        console.log('Error completing SELECT genres query', err);
        res.sendStatus(500);
      });
  });

  

router.post('/',(req, res) => {
    res.sendStatus(201);
});

module.exports = router;