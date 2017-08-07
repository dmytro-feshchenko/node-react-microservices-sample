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
- TestCafe - E2E testing

## Micro services:
1. Movies - contains API for managing movies (CRUD, search, etc.).
2. Users - allows authentication and authorization, adds
an ability to use CRUD for users list.
3. Web - contains web interface for the project.

## Tests:
#### E2E testing with TestCafe:
Everything is included in a single module installed with one command.
```
npm install -g testcafe
```
TestCafe automatically starts browsers, runs tests and gathers results. You only type a single command to begin testing.
```
testcafe chrome tests/
```

## Resources:
1. OMDb API (http://www.omdbapi.com) is a RESTful web service
to obtain movie information, all content and images on the site are contributed and maintained by our users.
