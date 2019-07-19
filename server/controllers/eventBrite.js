require('dotenv').config();
const Axios = require('axios');

const {EVENTBRITE_TOKEN} = process.env;

let headers = { headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}`}}

module.exports = async function(req, res) {
   console.log(req.body)
   const {city, state} = req.body;
   let ebResponse = '';

   try {
      ebResponse = await Axios
         .get(`https://www.eventbriteapi.com/v3/events/search?location.address=${city}&start_date.keyword=today&expand=venue,category`, headers)
   } catch(err) {
      console.log(err);
      return res.sendStatus(500);
   }
      res.status(200).json(ebResponse.data.events);
}