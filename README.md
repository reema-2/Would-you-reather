# Would you reather Project:

This app was built as a  project for the Udacity React Nanodegree Program. The purpose of the project is to demonstrate understanding of how Redux works in a React-based web app.
<br>
This is basically a poll app in which user can create or answer polls with two options. Answer cannot be changed once submitted.

### Technologies used:
 - React
 - Redux 
 - React Router 
 - Redux Thunk
 - Bootstrap

### `npm install`

Runs this to install all the project dependencies

### `npm start`

Runs the app in the development mode.<br>
A new browser window should automatically open displaying the app.  If it doesn't, navigate to [http://localhost:3000/](http://localhost:3000/) in your browser

### App Architecture
```bash
├── src/
    ├── actions/
    ├── Components
    │   ├── App.js 
    │   ├── Home.js # user able to toggle between his/her answered and unanswered polls on the home page.
    │   ├── LeaderBoard.js # shows ranking of users based on total number of answered and unanswered polls
    │   ├── Login.js # show login box that lets the user select a name from the list of existing users.
    │   ├── Nav.js 
    │   ├── NewQuestion.js # to add new question
    │   ├── NoMatchPage.js # 404 page
    │   ├── Questions.js # show list of the question based on user selected 'unanswered' or 'answered'
    │   ├── QuestionDetails.js # show question details
    │   └── Routes,js 
    ├── middleware/ 
    ├── reducers/ 
    ├── utils/ 
    │    ├── _Data.js #this file represents a fake database and methods that let you access the data. The only thing you need to edit in the _DATA.js file is the value of avatarURL. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

```
## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
