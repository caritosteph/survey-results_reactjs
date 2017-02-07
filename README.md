# Survey application
##Get Started
###Installation Dependencies
```
npm install
```
####Development Environment
```
npm run start
```
####Production Environment
```
npm run build
```
####Test Environment
```
npm run test
```
##Technologies
* ReactJS : Fast rendered which help me to create a reusable components and maintainable application.
* Babel   : Compiles ES6 to ES5.
* Webpack : Bundles npm packages and JS files into a single file. I also includes hot reloading to avoid refresh all the browser when made a change.
* Browsersync : Help for the testing and debugging on multiple devices.
* Mocha  : Automated tests with Chai for assertions and Enzyme for React Components, using jsdom I could test   without a browser.
* ESLint : Reports syntax and style issues.Besides I used eslint-plugin-react for additional ReactJS rules.
* SASS   : Compiled CSS styles.

##Problem
I focused on the frontend part: UI and structure of the components using ReactJS.
I created a reusable component and a fast rendered when the user change from one view to another one.
The reason for my design is that it is easy to use for the user use it and shows all the principal data that the user want to see in the application.
In the main page you can see the list of surveys with some details and then click on "more information" to see the specific detail for each survey.
In the detail views the themes are separated by tabs. Each theme has its own list of questions, and each question has its own list of response in a table where the user can appreciate the rating.
Besides, if the list of response is too long, the user can use the pagination component to see more responses.
