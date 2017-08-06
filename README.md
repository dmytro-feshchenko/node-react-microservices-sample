# Sample project which shows how to use Docker to manage a number of Node.js microservices
[![Code Climate](https://codeclimate.com/github/technoboom/node-react-microservices-sample/badges/gpa.svg)](https://codeclimate.com/github/technoboom/node-react-microservices-sample)

## Project description:
We are going to design a simple but yet powerful service for searching movies.
There are few prerequisites to build the service:
1. Learn how to build Node.js microservices
2. Dive into Docker and Docker Compose
3. Get pleasure

## Getting Started (How to Run and Build):
Clone the project:
`git clone https://github.com/technoboom/node-react-microservices-sample`.

## What we are going to use:
- Docker and Docker Compose - they will help us to build and manage
containers
- Node.js (Express) - for designing APIs and creating servers
- React - for building web interface
- Webpack 3 - as a module bundler
- PostgreSQL
- Swagger UI - for bulding docs
- Jest + Enzyme - for unit, snapshot and full featured
components testing

## Micro services:
1. Movies - contains API for managing movies (CRUD, search, etc.).
2. (Not ready) Users - allows authentication and authorization, adds
an ability to use CRUD for users list.
3. (Not ready) Web - contains web interface for the project.