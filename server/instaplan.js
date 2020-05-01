require('dotenv').config();
const express = require('express')
const massive = require('massive');
const nodemailer = require('nodemailer');
const contact = require('./controllers/contact');
const eventsController = require('./controllers/eventsController')
const ebEventsController = require('./controllers/eventBrite');
const addImg = require('./controllers/addImg');

const { SERVER_PORT, CONNECTION_STRING, EMAIL_HOST, EMAIL_NAME, EMAIL_PW } = process.env

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(express.json({ limit: '10mb' }));

massive(CONNECTION_STRING).then(db => {
   app.set('db', db);
   console.log('Database Connected');
}).catch(err => console.log(err))

const transporter = nodemailer.createTransport(
   {
      host: EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
         user: EMAIL_NAME,
         pass: EMAIL_PW
      }
   }
);

transporter.verify((error, success) => {
   if (error) {
      console.log(`{Nodemailer Auth: ${error}`);
   } else {
      console.log('Server listening for messages!');
   };
})


// contact form nodemailer
app.post('/api/contact', contact);

// eventbrite api call
app.post('/api/ebevents', ebEventsController);

// aws image upload
app.post('/api/events/image', addImg);

// Events
app.post('/api/events', eventsController.create);
app.get('/api/events', eventsController.getAll);
app.get('/api/events/:id', eventsController.getOne);
app.put('/api/events/:id', eventsController.update);
app.delete('/api/events/:id', eventsController.delete);

app.listen(SERVER_PORT, () => {
   console.log(`Server is Listening on port ${SERVER_PORT}`)
})
