const express = require('express')
const massive = require('massive');
require ('dotenv').config();





const app = express();
app.use(express.json({ limit: '10mb' }));



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Database Connected');
})






app.listen(4000, () => {
    console.log(`Server is Listening on port 4000`)
})
