const app = express();
const express = require('express');
const path = require('path');
const eventDB = require('./../db/models/timeLocation.js');
const moment = require('moment');

app.use('/event/:eventid', express.static(path.join(__dirname, './../client')));

app.get('/api/event/:eventid', (req, res) => {
  console.log('Event Id is ', req.params.eventid);
  let eventId = "" + req.params.eventid;
  eventDB.findModel(eventId, function(err, eventDataFromAPI){
    if(err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).json({
        whereData: createWhereData(eventDataFromAPI),
        whenData: createWhenData(eventDataFromAPI)
      });
    }
  });
});

let createWhereData = ({venue_public, venue_name, address_1, address_2, address_3, city, longitude, latitude}) => {
  let whereData = {};
  if(venue_public){
    whereData = {
      venue_name: venue_name,
      city: city
    };
    if(address_1) whereData.address_1 = address_1;
    if(address_2) whereData.address_2 = address_2;
    if(address_3) whereData.address_3 = address_3;
    if(longitude) whereData.longitude = longitude;
    if(latitude) whereData.latitude = latitude;
  }
  return whereData;
}

let createWhenData = ({start_time, end_time, series}) => {
  let whenData = {
    start_time: start_time,
    end_time: end_time,
    series: series
  };
  let startDate = moment(start_time).format('MM-DD-YYYY');
  let endDate = moment(end_time).format('MM-DD-YYYY');
  if(startDate !== endDate){
    whenData.multiDay = true;
  }
  return whenData;
}

app.listen('8000', '127.0.0.1', () =>
  console.log('Listening on port 8000')
)
