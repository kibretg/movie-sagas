# React-Redux with Sagas - 

Movie-Sagas


## Database Setup

1. Create a database named `saga_movies_weekend`
2. Run the queries from `database.sql` on the `saga_movies_weekend` database.
3. You will need to create the junction table between the `movies` and `genres` tables!

## Install Dependencies

1. `npm install`
2. `npm run server`
3. `npm run client`

## Notes

 
### Movies
Movie posters are in the `public/images` folder, and the database is set up to use them.

### Relationships
Genres can be applied to many different movies. Movies can have multiple genres. This is Many-to-Many! Junction Table time!
