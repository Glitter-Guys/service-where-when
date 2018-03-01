const express = require('express');
const path = require('path');
const app = express();
const eventDB = require('./../db/models/timeLocation.js');

app.use('/event/:eventid', express.static(path.join(__dirname, './../client')));

app.get('/api/event/:eventid', (req, res) => {
  console.log('Event Id is ', req.params.eventid);
  let eventId = "" + req.params.eventid;
  eventDB.findModel(eventId, function(err, eventDataFromAPI){
    if(err) {
      res.status(500).send({ error: err });
    } else {
      let whereData = createWhereData(eventDataFromAPI);
      res.status(200).json({whereData: whereData});
    }
  });
});

let createWhereData = (eventData) => {
  let whereData = {};
  whereData.venue_name = eventData.venue_name; // Use destructuring here?
  if(eventData.address_1) whereData.address_1 = eventData.address_1;
  if(eventData.address_2) whereData.address_2 = eventData.address_2;
  if(eventData.address_3) whereData.address_3 = eventData.address_3;
  whereData.city = eventData.city;
  whereData.state = eventData.state;
  if(eventData.longitude) whereData.longitude = eventData.longitude;
  if(eventData.latitude) whereData.latitude = eventData.latitude;
  return whereData;
}


app.listen('8000', '127.0.0.1', () =>
  console.log('Listening on port 8000')
)
