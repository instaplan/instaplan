const express = require('express')
const massive = require('massive');
require ('dotenv').config();


const {SERVER_PORT, CONNECTION_STRING, API_KEY} = process.env


const app = express();
app.use(express.json({ limit: '10mb' }));



massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})






app.listen(SERVER_PORT, () => {
    console.log(`Server is Listening on port ${SERVER_PORT}`)
})
