# Fun-ology

Fun-ology is a free, web-based flashcard application for speech therapists to use with students working on phonological process goals. The frontend was built with React and MUI, and the backend is a REST API built with Ruby on Rails and seeded with custom data. Images were purchased through a subscription to [lesson pics](https://lessonpix.com/logout.php).

## Deployed Site

See the [deployed site](https://fun-ology.herokuapp.com//), hosted on Heroku.

## Packages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Configuration was achieved using a React/Rails API template from Flatiron School.

[MUI](https://mui.com/) was used for styling.

## Installation Guide

Fork and clone this repository. Once it has been cloned onto your local machine, open the project and run `bundle install` in the root directory to install all Ruby packages. Because there is a React app nested inside of the Rails app, run `cd client` and `npm install` to install the packages for the React app. Then, run `cd ..` to return to the project's root directory.

To start the development server, run the following commands.

In one terminal window, run `rails s` to start the Rails API server.
In a separate terminal window, run `npm start --prefix client` to start the React app.

Go to (http://localhost:4000/) to see the frontend view. Use a service like Postman to view and test the API endpoints (ex. GET (http://localhost:3000/videos)), or test the GET routes in the browser. Currently, the permissions are set so that you won't be authorized to access the endpoints unless you're logged in to the app. You can temporarily disable authorization by going to funology/app/controllers/concerns/application_controller.rb and commenting out (`before_action authorize`). Remember to reset authorization when you're done making changes to the backend!

```

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
