# Visual Weather Tab using React & Dark Sky

<br />
#### Introduction

Visual Weather Tab is an simple app that implements the [Dark Sky API](https://darksky.net/dev). You can view the app on [heroku](https://visual-weather-tab.herokuapp.com/) or follow the build instructions for local use.

* Due to Google securities please make sure you run the heroku link as https *

This weather app create a visually pleasing moving gradient pattern with colors based on the current tempurature, other of the city you choose to view. It also uses a an express server to bypass the Cross Origin Resource Sharing (CORS) issue allowing for API endpoints to be exposed.

Along with this the News.org API is being utiltized to pull major headlines on the page as well.

At some point I would like to simplify the server and host it in the cloud to allow for this to become a new tab Chrome extension.

<br />
#### Build Instructions

You can also clone this repository to your computer by pasting 
`git clone https://github.com/luksta1/visual-weather-tab` in a terminal window

. Once that is done, please follow these steps:
- `npm install --save` (this will install the dependencies)
- `npm run start` (this serves the app on localhost:8080)
