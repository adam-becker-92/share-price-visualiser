# Share Price Platform

Full stack project to build out interface for mock share data. At this point in time the shares are visualised in a table using ag-grid. Clicking the ticker will take you to a share breakdown page with a time series of the share price for the past two weeks.

Frontend is built with React & Typescript. Components have been moved to a separate component library under lib/components. Storybook is also used to visualise and build out the components.

Backend is built in Node.js with express and typescript

All Share data is mocked on the backend using the Share Service. Backend is set up using clean architecture principles, this is to facilitate using a realtime share api down the line.

## Getting Started

Install the node modules

`npm install`

Start the front end dev server

`npm run frontend:dev-server`

Start the back end dev api server

`npm run backend:dev-server`

---

Storybook can be started by running

`npm run components:storybook`

## Notes on Project

This is a WIP and a little rough around the edges. This is more a project to explore using some FE technologies that I'm interested in rather than a practical application. The long term plan is to replace the share price data with real market data and extend the functionality.
