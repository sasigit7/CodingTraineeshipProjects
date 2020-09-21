## Steps Needed To Set Up A Project For Transpiling JavaScript ES6+ to ES5 Using Babel Library

- Initialize project using npm init to create package.json in the root directory.

- Install the Babel command line and Babel preset environment
  npm packages using following commands one after another.
  -> npm install babel-cli -D
  -> npm install babel-preset-env -D

- Create a .babelrc file inside your project and add the following code inside it:
  {
  "presets": ["env"]
  }

- Add the following script to your scripts object in package.json:
  "build": "babel src -d lib"

- Run npm run build whenever you want to transpile your code from your src to lib directories.
