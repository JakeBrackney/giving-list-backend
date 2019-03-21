# The Giving List API

## Description

The back end of The Giving List employs an API that I built, using data gathered from organizations with an A-rating from CharityWatch.org. They do not have an API available. These organizations spend bulk of their annual budgets is actually used for their stated missions.The purpose of this project is to provide a list of ethically run charitable organizations in hopes that it will help users find organizations and causes that matter to them. Charitable giving is an important part of our society, and there are so many organizations in need of donations. Each organization in the API includes data referencing the organizations name, service category (relief aid, environment, etc.), mission statement, and a link to each organizations donation platform.

## Functionality

Using express, the routes are built to allow a user to see a list of charitable organizations, to retrieve data from an API about a single organization, and to add an organization to the list.

## Technologies

The application as a whole is built using a MERN stack. The backend employs Mongoose, Express, and Node. We tied the front end and back end using Cors and deployed the back end to Heroku. The API is hosted by MongoDB Atlas.

https://the-giving-list.herokuapp.com/

## Installed Back End Dependencies

- Cors
- Express
- Mongoose
- Body Parser
- Axios


## Improvements

- The API will continue to grow as I research organizations.
- Each object in the API may include new data such as annual revenue/budget, reported contributions, etc. to better show how these organizations are using their money.