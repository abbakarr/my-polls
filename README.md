Description
This is employee web poll app, a final requirement of the udacity's React nano degree program. Which covers depth of React concepts such as state mamagement, hooks, routing, react-redux, testing with Jest, and so on. In this paticular employee web app, the user is first required to log in, then can be able to two categories of questions that are either answered or unanswered, be able to vote on those unanswered, navigate to New page and crete hi own poll as well, can also navigate to leaderboard and view it. there was database given by the udacity as a starter code to this project in _DATA.js file.
Command for installing the dependencies
First you need to Clone or download this repository.
then go to terminal in the project directory.
note that the Node.js. is required you can install it here https://www.npmjs.com/get-npm
Install all project dependencies with npm install.
Dependencies You Need to Install:
--save react-router-dom
--save react
--save react-dom
--save react-loading-bar
--save react-redux
--save react-redux-loading
--save react-scripts
--save redux
--save redux-thunk
--save jest
After the above, the user can hit npm start to start the server and application.
for running tests, the user should hit npm test.

Functionalities

Login: The user has to be authenticated before log in, you can use any these existing users to impersonate and log in 
users
1. username: ummylolo 
   password: password123
1. username: idrisa 
   password: abc321
1. username: hasisi 
   password: xyx123
1. username: naeemm 
   password: pass246

Homepage: after login in, you can be redirected to this homepage with the name dashboard, where you can see the questions displayed in two categories of "unanswered" & and "answered"
Poll details:
404 page: Users will see this page when a poll doesn't exist.
add Question: Users can navigate to new page and add the questions.
Leaderboard: The Leaderboard is available at/leaderboard.
Each entry on the leaderboard contains the following:
the user’s name;
the user’s avatar;
the number of questions the user asked; and
the number of questions the user answered.