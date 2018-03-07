const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackOptions = require('./../webpack.config.js');
const cors = require('cors');

const compiler = webpack(webpackOptions);

const path = require('path');
const moment = require('moment');
const express = require('express');
const eventDB = require('./../db/models/timeLocation.js');

const app = express();

app.use(cors());

// Comment this line out for proxy server
app.use('/event/:eventid', express.static(path.join(__dirname, './../client/dist')));

// Comment the line in for proxy server
// app.use(express.static(path.join(__dirname, './../client/dist')));

app.use(middleware(compiler, {
  publicPath: webpackOptions.output.publicPath,
}));

const createWhereData = ({
  venuePublic, venueName, address1, address2, address3, city, state, longitude, latitude,
}) => {
  let whereData = { venuePublic };
  if (venuePublic) {
    whereData = {
      venuePublic,
      venueName,
      city,
      state,
    };
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

app.listen('9000', '127.0.0.1', () => console.log('Listening on http://127.0.0.1:9000'));
