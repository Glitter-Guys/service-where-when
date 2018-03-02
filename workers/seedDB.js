const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const moment = require('moment');
const timeLocationModel = require('./../db/models/timeLocation.js');

mongoose.connect('mongodb://localhost/timeLocations');

// Randomly create fake data for occasional event as weekly or monthly
let createRandomSeries = () => {
  let seriesValues = [null, null, null, null, null, "weekly", "monthly"];
  let randomIdx = Math.floor(Math.random() * seriesValues.length);
  return seriesValues[randomIdx];
}

// Convert Meetup data to start and end time using Moment JS
let convertToStartEndTime = ({local_date, local_time, duration}) => {
  let dateAndTimeMoment = moment(local_date + " " + local_time);
  let startTime = dateAndTimeMoment.toDate();
  dateAndTimeMoment.add(duration, 'ms');
  let endTime = dateAndTimeMoment.toDate();
  return [startTime, endTime];
}

// Structure data
let structureEventData = (seriesValue, startTime, endTime, {id, venue}) => {
  let structuredEvent = {
    event_id: id,
    start_time: startTime,
    end_time: endTime,
    series: seriesValue,
    venue_public: false
  }
  if(venue){
    structuredEvent.venue_public = true;
    structuredEvent.venue_name = venue.name;
    if(venue.address_1) structuredEvent.address_1 = venue.address_1;
    if(venue.address_2) structuredEvent.address_2 = venue.address_2;
    if(venue.address_3) structuredEvent.address_3 = venue.address_3;
    structuredEvent.city = venue.city;
    structuredEvent.state = venue.state;
    if(venue.lon) structuredEvent.longitude = venue.lon;
    if(venue.lat) structuredEvent.latitude = venue.lat;
  }
  return structuredEvent;
}

let insertEachEvent = () => {
  // Parse each event in the JSON data file
  let pathToJSON = path.join(__dirname, "./150UpcomingEvents.json");
  let jsonData = fs.readFileSync(pathToJSON);
  let parsedData = JSON.parse(jsonData);
  let counter = 0;

  parsedData.events.forEach(function(event){
    let seriesValue = createRandomSeries();
    let startTime, endTime;
    [startTime, endTime] = convertToStartEndTime(event);
    let structuredEvent = structureEventData(seriesValue, startTime, endTime, event);

    // Write to database
    timeLocationModel.insertModel(structuredEvent, function(err){
      if(err) console.log(err);
      ++counter;
      if(counter === parsedData.events.length){
        mongoose.disconnect();
      }
    });
  });
}

insertEachEvent();

exports.createRandomSeries = createRandomSeries;
exports.convertToStartEndTime = convertToStartEndTime;
exports.structureEventData = structureEventData;
exports.insertEachEvent = insertEachEvent;
