require('dotenv').config();
const Axios = require('axios');

const { EVENTBRITE_USERID, EVENTBRITE_TOKEN } = process.env;

let headers = { headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}` } }

module.exports = async function (req, res) {
   const { city } = req.body;
   let ebResponse = '';
   
   try {
      ebResponse = await Axios
         // Previous EventBrite call that is now deprecated and breaks
         .get(`https://www.eventbriteapi.com/v3/events/search?location.address=${city}`, headers)
   } catch (err) {
      console.log('hit')
      console.log(err)
      return res.status(500).json(err)
   }
   console.log(ebResponse.data)
   res.status(200).json(ebResponse.data.events);
}