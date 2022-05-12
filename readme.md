# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

### Install Docker

Install Docker right from the [official website](https://docs.docker.com/get-docker/).
Make sure Docker is installed correctly by running `docker -v` and `docker-compose -v`.

### Run the project via Docker

In your terminal, run `docker-compose up` from the project's root directroy.

### Make sure the frontend and the backend works

Test the backend by pointing your browser to `http://localhost:3000/api/ping`, then test the frontend by registering
a new usr on `http://localhost:3001/register`
