const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch'); //fetch api not native to node

let projectData = {};

const app = express();
app.use(cors());
//to use json
app.use(bodyParser.json());
//to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('dist'));

console.log(__dirname);
//sets webpack built file as home page
app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(3030, () => {
    console.log('Example app listening on port 3030!')
});

app.post('/test', (req, res) => {
    let data = req.body.input;
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&of=json&url=${data}`)
    .then(
        response => {
            return response.json()
        }
    )
    .then(
        text => {
            projectData = text
        }
    )
    .catch(error => {
        console.log(error)
    })    

});

const postNLP = (req, res) => { 
    res.send(projectData);
};

app.get('/update', postNLP);

