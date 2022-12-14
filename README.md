# Books api

This is a simple API for reading and writing book data into a database.

## Techs used

- [Docker](https://www.docker.com/)
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Formik](https://formik.org/)

## About the project

This project runs completely in docker. There are three containers, one for the frontend, one for the backend and one for the database.

![Diagram](diagram.png)

The frontend is a simple React app made with Create React App. It is wrtitten in TypeScript and uses Formik to handle forms.

The backend is a Node app that uses Express to handle requests. Sequelize ORM is used for database queries. The backend is written in JS.

The database is a PostgreSQL database that only exists inside the Docker container.

## Prerequisites

You only need docker and docker-compose to run this locally.

## Instructions for running

1. Pull this repository
2. Run the following command in the project root to build the containers

`docker-compose -up --build`

3. Wait for the frontend to build, the build is done when the following message is displayed

`No issues found.`

4. Then stop the containers with **CTRL+C**. Currently the database does not initiate correctly on the first run. This most likely happens because the backend initiates itself faster than the database. The database will initiate on the second go.
5. Run the following command to start the containers again

`docker-compose up`

6. You can access the frontend at [localhost:8080](http://localhost:8080)
7. In case you need to build the containers again, bring the containers down first

`docker-compose down`

**NOTE! Bringing the containers up & down causes the database to be seeded with the same seed data every time**

## TODO

These are some next steps I would take if this was an actual production application

- Add some unit tests
- Improve usability of the frontend, perhaps a separate component for adding a new book and editing an existing one
- Add more validation to the form in the frontend
- Use TypeScript in backend too
- Refactor backend to use separate controllers
- Get rid of all warings and error messages
- Fix the database initialization issues
- Use docker volume to preserve database even when containers are brought down
- Create a dev environment where the docker conainers watch for changes in code and restart after each change
