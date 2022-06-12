const express = require('express');
const dotenv = require('dotenv');
const knex = require('knex');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

app.set('view engine', 'ejs')
app.use('/',express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//openning port for listenning from according to the .env file (default 5000 if not working)
const activePort = process.env.PORT ? process.env.PORT : 5000;
app.listen(activePort, () => {
    console.log('hello here from port ' + activePort);
})


