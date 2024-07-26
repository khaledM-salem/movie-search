# Exercise

Create a page that allows users to search for movies.
It should consist of a search input box and a search button.
When the user clicks “Search”, the page should show the search results.

You can use the free public “The Movie Database” API to search for the movie details.

Implementation notes:

- Use a custom hook to encapsulate the data fetching logic
- Make sure the page fails gracefully if the API returns an error
- Use axios for the data fetching

Testing:

- Write a test for the movie-search-page component
- The test should be an integration test that handles the entering of text in the search box and the clicking of the search button
- You do not need to write a test for the custom hook
- The test should handle any unhappy paths

Useful links for “The Movie Database” API:

- https://developers.themoviedb.org/3/getting-started/introduction
- https://developers.themoviedb.org/3/search/search-movies

What you will practice:

- Working with API keys for connecting to an API
- Data fetching and error handling
- Structuring your app component tree
- Working with custom hooks

You can fork this Github repo to try out your solution.
When you’re ready to check your work, take a look at the detailed official solution for this exercise.

## Getting started with this repo

- Run `yarn` before you get started.
- Add your code to the `src/movie-search-page.jsx` file.
- Run the app with `yarn start`
- Run the tests with `yarn test`
