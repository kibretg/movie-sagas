const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "movies"
                ORDER BY "id";`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error completeing SELECT movies query', error);
            res.sendStatus(500);
        });
});

router.get('/details', (req, res) => {
    console.log(req.query);
    pool.query(`SELECT "genres"."name", "movie_genres"."genre_id" FROM "genres" 
    JOIN "movie_genres" 
    ON "movie_genres"."genre_id"="genres"."id"
    WHERE "movie_genres"."title_id"=$1;`, [req.query.id])
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error completing SELECT genres query', error);
            res.sendStatus(500);
        });
});



router.put('/edit', (req, res) => {
    pool.query(`UPDATE "movies"
    SET "title"=$1, "description"=$2
    WHERE "id"=$3`, [req.body.title, req.body.description, req.body.id])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error completing UPDATE query', error);
            res.sendStatus(500);
        });
});

module.exports = router;