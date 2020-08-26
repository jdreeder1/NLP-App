# Natural Language Processing App
This project uses Natural Language Processing via a Sentiment Analysis API developed by MeaningCloud to analyze the language used on user-entered websites. 

## Installation
This project uses numerous dependencies, including:
```
"dependencies": {
    "babel-jest": "^26.3.0",
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "node-fetch": "^2.6.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12"
  },
  "devDependencies": {
    "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^3.0.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^25.5.4",
    "mini-css-extract-plugin": "^0.9.0",
    "node-sass": "^4.12.0",
    "optimize-css-assets-webpack-plugin": "^5.0.3",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "terser-webpack-plugin": "^1.4.5",
    "webpack-dev-server": "^3.7.2",
    "workbox-webpack-plugin": "^5.1.3"
  }
```

To install these dependencies, download NPM and clone this repository. Make sure you're in the same file directory you cloned this repo to in either a NPM or Git Command Terminal, then type `npm install` to install the above dependencies. 

## Usage
- Make sure you're in the same file directory you cloned this repo to in either a NPM or Git Command Terminal and type `npm run build-prod` (this will cause Webpack to create a 'dist' folder, effectively building the production environment for this app).  
- Type `npm run start` in the same Command Terminal in the same directory as the previous step to setup a local server. 
- Open your preferred browser and type `localhost:3030` in the address bar and hit enter. 
- Type or copy/paste a valid http or https URL into the provide text area then click 'submit'.
- Click 'get results' to reveal what MeaningCloud's Sentiment Analysis API gleaned about the text content on the website you entered.
