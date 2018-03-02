const path = require('path');
const eventDB = require('./../db/models/timeLocation.js');
const moment = require('moment');
const express = require('express');

const app = express();

app.use('/event/:eventid', express.static(path.join(__dirname, './../client')));

const createWhereData = ({
  venuePublic, venueName, address1, address2, address3, city, longitude, latitude,
}) => {
  let whereData = {};
  if (venuePublic) {
    whereData = { venueName, city };
    if (address1) whereData.address1 = address1;
    if (address2) whereData.address2 = address2;
    if (address3) whereData.address3 = address3;
    if (longitude) whereData.longitude = longitude;
    if (latitude) whereData.latitude = latitude;
  }
  return whereData;
};

const createWhenData = ({ startTime, endTime, series }) => {
  const whenData = { startTime, endTime, series };
  const startDate = moment(startTime).format('MM-DD-YYYY');
  const endDate = moment(endTime).format('MM-DD-YYYY');
  if (startDate !== endDate) {
    whenData.multiDay = true;
  }
  return whenData;
};

app.get('/api/event/:eventid', (req, res) => {
  const eventId = `${req.params.eventid}`;
  eventDB.findModel(eventId, (err, eventDataFromAPI) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).json({
        whereData: createWhereData(eventDataFromAPI),
        whenData: createWhenData(eventDataFromAPI),
      });
    }
  });
});

app.listen('8000', '127.0.0.1', () => console.log('Listening on port 8000'));
