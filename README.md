This project is deployed [here](https://desolate-headland-28492.herokuapp.com/).

## Features

I have implemented following feautres in this project:
* Pagination
  * Page change handling
  * Type checking with Proptypes
* Filtering
  * Default props
  * Selection handling
* Sorting
  * Raising sort events
  * Render sort icons
* Routing
  * Route Props
  * Query string parameters
  * Redirects
  * Programmatic navigation
* Forms
  * Controlled elements
  * Validation using Joi(https://www.npmjs.com/package/joi)
  * Reuseable inputs, tables, forms
* Calling backend Services : **Node.js**
  * Http client using **axios** (https://github.com/axios/axios)
  * Optimistic ad pessimistic updates
  * Expected vs unexpected exception handling
  * Exceptions logging using **Sentry** (https://www.npmjs.com/package/@sentry/browser)
  * Setup **Mongo DB**
* Authentication and Authorization
  * Register and login
  * Authentication via JsonWebToken (https://jwt.io)
  * Protected API end points and routes
  * Assign roles
* Deployment
  * Set environment variables
  * Production builds
  * Deploy backend node service on [Heroku](https://dashboard.heroku.com)
  * Deploy MongoDB on [cloud](https://cloud.mongodb.com/)
  * Deploy front-end of ReactJS on [Heroku](https://dashboard.heroku.com) by using [create react app buildpack](https://github.com/mars/create-react-app-buildpack)
  

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
