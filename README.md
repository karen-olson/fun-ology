# Fun-ology

Fun-ology is proof of concept for a free, web-based flashcard application for speech therapists to use with students working on phonological process goals. It provides fun, kid-friendly activities along with built-in data tracking to ease the burden on therapists.

The frontend was built with React and MUI, and the backend is a REST API built with Ruby on Rails and seeded with custom data. Images were purchased through a subscription to Lesson Pix. 

While making this app, I wrote a [blog post](https://medium.com/@karen_olson/creating-multiple-user-types-with-a-one-to-many-relationship-in-rails-ba3bbe4b0a8a) sharing what I learned about creating a data model with multiple user types. Check it out!

## Packages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Configuration was achieved using a React/Rails API template from Flatiron School.

[MUI](https://mui.com/) was used for styling.

## Installation Guide

Fork and clone this repository. Once it has been cloned onto your local machine, open the project and run `bundle install` in the root directory to install all Ruby packages. Because there is a React app nested inside of the Rails app, run `cd client` and `npm install` to install the packages for the React app. Then, run `cd ..` to return to the project's root directory.

To start the development server, run the following commands.

In one terminal window, run `rails s` to start the Rails API server.
In a separate terminal window, run `npm start --prefix client` to start the React app.

Go to (http://localhost:4000/) to see the frontend view. Use a service like Postman to view and test the API endpoints (ex. GET http://localhost:3000/students), or test the GET routes in the browser. Currently, the permissions are set so that you won't be authorized to access the endpoints unless you're logged in to the app. You can temporarily disable authorization by going to funology/app/controllers/concerns/application_controller.rb and commenting out (`before_action authorize`). Remember to reset authorization when you're done making changes to the backend!
