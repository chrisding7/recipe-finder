# Introduction: Building a Recipe Finder 
Contributors: Anna Schmidt, Cindy Qu, Chris Ding

Welcome to our Phase 2 Project, [Endless Eats](https://endlesseats.netlify.app/)! Our partner group has created an application that allows users to interact with a database containing 2.3 million recipes. Interactions include searching, adding to a list of favorites, and viewing ingredients and full recipes. Along with being a topic of self-interest, our application has helped to reinforce learning important concepts such as setting state in React, passing properties (props) between components, and utilizing Route and Switch components.

## Description
Written with JavaScript, ReactJS (and JSX), and HTML/CSS, our application is a single-page application that utilizes client-side routes to help users navigate between pages. The application uses data from the [Edamam API](https://edamam.com) whose specific documentation for our GET requests can be found [here](https://developer.edamam.com/edamam-docs-recipe-api).

When brought to the Home page of the application, users are greeted with a short description of our project and the option to continue onto the Recipes page. The Recipes page allows users to concentrate their search on an initial 20 recipes that can be expanded with the "Show More" button on the bottom of the page. Individual recipe cards show the name of the recipe, an image, and the ability to view its ingredients and add it to a persisted list of favorites. 

When viewing the ingredients of a recipe, the full recipe page can be accessed by clicking the "Full Recipe" button at the bottom of the page. When adding a recipe to the list of favorites, the favorites can be accessed by navigating to the Favorites page using the Navigation Bar in the top-left corner of each page. The favorites list will then render each favorited recipe as its own individual card, with the same functionality as its counterpart on the Recipes page.

On the Recipes page, each initial page load and subsequent click of the "Show More" button sends a GET request to the Edamam API. Since we have built our project using the free developer package from the Edamam API, the number of requests is limited to 10 calls per minute. Our application will manually throw an error alert if users exceed 10 calls within the minute.

## Front and Back End Deployment

This project was deployed with [Netlify](https://netlify.com) and [Heroku](https://heroku.com). This allows the user to view the application in the browser without the need to run local scripts.

