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

## Prerequisites

You only need docker and docker-compose to run this locally.

### Instructions for running

1. Pull this repository
2. Run the following command in the project root to build the containers

- `docker-compose -up --build`

3. Stop the containers with **CTRL+C**. Currently the database does not initiate correctly on the first run. This most likely happens because the backend initiates itself faster than the database. The dadatabase will initiate on the second go.
4. Run the following command to bring the containers up again

- `docker-compose up`

5. You can access the frontend at [localhost:8080](http://localhost:8080)
6. In case you need to build the containers again, bring the containers down first

- `docker-compose down`

**NOTE! Bringing the containers up & down causes the database to be seeded with the same seed data every time**
