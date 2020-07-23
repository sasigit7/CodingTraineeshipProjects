# X-Press Publishing

## Project Overview

In this capstone project, you will build all of the routing and database logic for an internal tool for a comic book publishing company called X-Press Publishing.

The X-Press Publishing internal tool should allow users to:
- Create, view, and update artists
- Create, view, update, and delete comic book series
- Create, view, update, and delete issues of a specific comic book series

You can view all of this functionality in action in the video below:

<video width="100%" height="100%" controls>
   <source src="https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/XPressPublishing480.mov" type="video/mp4">
 The markdown processor does not support the video tag.
</video>

## How To Begin

To start, download the starting code for this project <a href="https://s3.amazonaws.com/codecademy-content/programs/build-apis/projects/capstone-project-1-x-press-publishing.zip" target="_blank">here</a>. After downloading the zip folder, double click it to uncompress it and access the contents of this project.

To view your local version of the site, open **index.html** in Google Chrome.

## Implementation Details

To complete this project, you will need to create the database tables and API routes specified below. In addition to these specs, we have provided high-level steps for additional guidance in tying together all of your new skills in this project, linked at the end of this article. Feel free to not use these steps if you'd like an extra challenge. As you work through the project, be sure to use `npm` to install the necessary packages such as `express`.

To test this functionality you can run the testing suite and interact with the API via the provided front-end. If you want more data to interact with in the front-end, you can run the **seed.js** file to add data to your database.

We've provided an empty **migration.js** file for you to write table creation logic in.

In order for the tests and provided front-end to run properly, you will need to make sure to:
- Create and export your Express app from a root-level file called **server.js**
- Accept and set an optional port argument for your server to listen on from `process.env.PORT`
- If `process.env.PORT` is not set, server should run on port `4000` (this is where the provided front-end will make requests to)
- Accept and set an optional database file argument from `process.env.TEST_DATABASE` in all Express route files that open and modify your database
- Use the root-level **database.sqlite** as your API's database
- **Note:** When loading **database.sqlite** in your JavaScript files, sqlite3 will always try to load **database.sqlite** from the root directory path, `./database.sqlite`, regardless of where the current file is located. Therefore your code will always be `new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite')` regardless of the file you are writing in 

### Database Table Properties

* **Artist**
  - id - Integer, primary key, required
  - name - Text, required
  - date_of_birth - Text, required
  - biography - Text, required
  - is_currently_employed - Integer, defaults to `1`

* **Series**
  - id - Integer, primary key, required
  - name - Text, required
  - description - Text, required

* **Issue**
  - id - Integer, primary key, required
  - name - Text, required
  - issue_number - Text, required
  - publication_date - Text, required
  - artist_id - Integer, foreign key, required
  - series_id - Integer, foreign key, required


### Route Paths and Functionality

**/api/artists**
- GET
  - Returns a 200 response containing all saved currently-employed artists (`is_currently_employed` is equal to `1`) on the `artists` property of the response body
- POST
  - Creates a new artist with the information from the `artist` property of the request body and saves it to the database. Returns a 201 response with the newly-created artist on the `artist` property of the response body
  - If any required fields are missing, returns a 400 response

**/api/artists/:artistId**
- GET
  - Returns a 200 response containing the artist with the supplied artist ID on the `artist` property of the response body
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response
- PUT
  - Updates the artist with the specified artist ID using the information from the `artist` property of the request body and saves it to the database. Returns a 200 response with the updated artist on the `artist` property of the response body
  - If any required fields are missing, returns a 400 response
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response
- DELETE
  - Updates the artist with the specified artist ID to be unemployed (`is_currently_employed` equal to `0`). Returns a 200 response.
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response

**/api/series**
- GET
  - Returns a 200 response containing all saved series on the `series` property of the response body
- POST
  - Creates a new series with the information from the `series` property of the request body and saves it to the database. Returns a 201 response with the newly-created series on the `series` property of the response body
  - If any required fields are missing, returns a 400 response

**/api/series/:seriesId**
- GET
  - Returns a 200 response containing the series with the supplied series ID on the `series` property of the response body
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- PUT
  - Updates the series with the specified series ID using the information from the `series` property of the request body and saves it to the database. Returns a 200 response with the updated series on the `series` property of the response body
  - If any required fields are missing, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- DELETE
  - Deletes the series with the supplied series ID from the database if that series has no related issues. Returns a 204 response.
  - If the series with the supplied series ID has related issues, returns a 400 response.
  - If a series with the supplied series ID doesn't exist, returns a 404 response

**/api/series/:seriesId/issues**
- GET
  - Returns a 200 response containing all saved issues related to the series with the supplied series ID on the `issues` property of the response body
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- POST
  - Creates a new issue, related to the series with the supplied series ID, with the information from the `issue` property of the request body and saves it to the database. Returns a 201 response with the newly-created issue on the `issue` property of the response body
  - If any required fields are missing or an artist with the supplied artist ID doesn't exist, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response

**/api/series/:seriesId/issues/:issueId**
- PUT
  - Updates the issue with the specified issue ID using the information from the `issue` property of the request body and saves it to the database. Returns a 200 response with the updated issue on the `issue` property of the response body
  - If any required fields are missing, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response
  - If an issue with the supplied issue ID doesn't exist, returns a 404 response
- DELETE
  - Deletes the issue with the supplied issue ID from the database. Returns a 204 response.
  - If a series with the supplied series ID doesn't exist, returns a 404 response
  - If an issue with the supplied issue ID doesn't exist, returns a 404 response


## Testing

A testing suite has been provided for you, checking for all essential functionality and edge cases.

To run these tests, first, open the root project directory in your terminal. Then run `npm install` to install all necessary testing dependencies (if you haven't already). Finally, run `npm test`. You will see a list of tests that ran with information about whether or not each test passed. After this list, you will see more specific output about why each failing test failed.

As you implement functionality, run the tests to ensure you are creating correctly named variables and functions that return the proper values.
The tests will additionally help you identify edge cases that you may not have anticipated when first writing the application.