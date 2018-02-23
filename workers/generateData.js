const fs = require('fs');
const mongoose = require('mongoose');
const moment = require('moment');
const timeLocationModel = require('./../db/models/timeLocation.js');

mongoose.connect('mongodb://localhost/timeLocations');

let jsonData = fs.readFileSync('./150UpcomingEvents.json');
let parsedData = JSON.parse(jsonData);
parsedData.events.forEach(function(event){

  // Randomly create fake data for occasional event as weekly or monthly
  let seriesValues = [null, null, null, null, null, "weekly", "monthly"];
  let randomIdx = Math.floor(Math.random() * seriesValues.length);

  // Convert Meetup data to start and end time using Moment
  let dateAndTimeMoment = moment(event.local_date + " " + event.local_time);
  let startTime = dateAndTimeMoment.toDate();
  dateAndTimeMoment.add(event.duration, 'ms');
  let endTime = dateAndTimeMoment.toDate();

  // Structure data
  let structuredEvent = {
    event_id: event.id,
    start_time: startTime,
    end_time: endTime,
    series: seriesValues[randomIdx],
    venue_public: false
  }
  if(event.venue){
    structuredEvent.venue_public = true;
    structuredEvent.venue_name = event.venue.name;
    if(event.venue.address_1) structuredEvent.address_1 = event.venue.address_1;
    if(event.venue.address_2) structuredEvent.address_2 = event.venue.address_2;
    if(event.venue.address_3) structuredEvent.address_3 = event.venue.address_3;
    structuredEvent.city = event.venue.city;
    structuredEvent.state = event.venue.state;
    if(event.venue.lon) structuredEvent.longitude = event.venue.lon;
    if(event.venue.lat) structuredEvent.latitude = event.venue.lat;
  }

  // Write to database
  timeLocationModel.insertModel(structuredEvent, function(err){
    if(err){
      console.log(err);
    } else {
      console.log('inserted!');
    }
  });
});
// mongoose.disconnect();
