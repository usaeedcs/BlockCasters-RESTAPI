## BlockCasters Genres API

The file, `index.js`, serves as the simple backend API for the BlockCasters website, an imaginary service for renting movies. It is built using Node.js and Express.js, and it provides endpoints for managing movie genres. This will be built upon to be added to the final project.

## API Endpoints

The API provides the following endpoints:

1. `GET /`: This endpoint returns a welcome message.
2. `GET /api/genres`: This endpoint returns a list of all movie genres.
3. `GET /api/genres/:id`: This endpoint returns a specific genre based on the provided ID.
4. `POST /api/genres`: This endpoint allows for the creation of a new genre. The genre name is required and must be at least 3 characters long.
5. `PUT /api/genres/:id`: This endpoint allows for the updating of an existing genre. The genre name is required and must be at least 3 characters long.
6. `DELETE /api/genres/:id`: This endpoint allows for the deletion of a genre based on the provided ID.

## Validation

The API uses Joi for validation. When creating or updating a genre, the genre name is required and must be at least 3 characters long.

## Running the API

The API listens on the port specified by the `PORT` environment variable, or port 3000 if the `PORT` environment variable is not set.
