## copying the .env.example file to .env file

|-- create a dev.env file in the root directory
|-- copy .env.example to .env
|-- add values to the env variables

## Project Structure

```
src\
 |--api
     |--controllers\  # Route controllers (controllers layer)
     |--helpers\      # Contains helper files
     |--middlewares\  # Custom express middlewares
     |--models\       # Mongoose models (data layer)
     |--routes\       # Routes
 |--config\           # Envoriment variables and configuration related things
 |--db\               # Database connection
 |--app.js            # Express app
 |--index.js          # App entry point

```