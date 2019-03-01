# Bark Finder ATL

Bark Finder ATL is a site for dog owners in Atlanta to research, rate and review local dog-friendly establishments such as dog parks, restaurants, and local events.

## Getting Started

This site is hosted on Netlify and can be found [here](https://barkfinderatl.netlify.com/#/ "Bark Finder ATL Homepage").

To install on your local machine

1. `git clone` the master branch

2. Install [Postgres](https://www.postgresql.org/download/ "Postgres download") and fire up the server using the command `pg_ctl -D C:/PostgreSQL/data/pg10 start` in your terminal (if using Windows)

3. Open the `bark-finder-atl` project folder and `cd server`

4. Run `node src/app.js`

5. Change directories into `client` with `cd ../client`

6. Run `npm start` to run the Vue scripts

7. Navigate to `localhost:8080` in your favorite browser

### Testing
Unit tests are built with Jasmine and can be found in the `server/spec` folder.

From the root directoy, `cd server` and run `npm test`


## User Registration

First time users should start by visiting the registration page by clicking the 'Sign Up' link in the navigation bar.

Enter a username, email and password and registration is complete. On successful sign-up, you will be redirected to the landing page. You're now registered as a member of the Bark Finder ATL community and can add reviews and ratings to parks, restaurants and events.

## User Login

Returning users can login by clicking the 'Login' link in the navigation bar. On successful login, you will be redirected to the landing page.

## View All Parks, Restaurants or Events

Use the links in the navigation bar or click the card image at the bottom of the landing page to view a list of Atlanta's dog parks, dog-friendly restaurants, or dog-related events. Parks, restaurants and events are sorted alphabetically by name. 

Click on one of the card images to view detailed information about the park/restaurant/event as well as an embedded Google Map.

## Write a Review

When viewing a specific park, restaurant or event, scroll to the bottom of the page to read current reviews or write your own. _Note: only logged in users will be able to add a review_. Watch as the overall rating changes in real-time after adding a review. Logged in users will also be able to delete a review they wrote.

## npm Packages/Dependancies:

* PostgreSQL for modeling data in a relational database.
* Jasmine, a package of helper code for unit testing models.
* Sequelize, a promise-based ORM, to handle tasks such as defining models, setting up associations between models, and generating migrations.
* Express for routing and handling middleware.
* Passport for user authentication. Bloccit implements a stateful session-based authentication system using cookies.
* Bcrypt for encrypting user passwords.
* dotenv for storing environment variables and sensitive API keys.
* Morgan, an HTTP request logger middleware for node.js
* Nodemon for automatically restarting the node application when file changes in the directory are detected.
* JSON Web Token for creating user tokens for authorization purposes that are stored in the Vuex store.
* Axios, a promise based HTTP client for the browser and node.js.
* Vue, a progressive framework for building user interfaces.
* Vuex for centralized state management.
* Vuetify to provide clean, semantic and reusable components.
