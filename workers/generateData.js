const fs = require('fs');
const mongoose = require('mongoose');
const timeLocationModel = require('./../db/models/timeLocation.js');

mongoose.connect('mongodb://localhost/timeLocations');

let jsonData = fs.readFileSync('./150UpcomingEvents.json');
let parsedData = JSON.parse(jsonData);
parsedData.events.forEach(function(event){

  // Need compute start and end time here
  let seriesValues = [null, null, null, null, null, "weekly", "monthly"];
  let randomIdx = Math.floor(Math.random() * seriesValues.length);

  let structuredEvent = {
    event_id: event.id,
    // start_time: event.local_time || event.time,
    // end_time: event.local_time || event.time,
    series: seriesValues[randomIdx],
    venue_public: false
  }
  if(event.venue){
    structuredEvent.venue_public = true;
    structuredEvent.venue_name = event.venue.name;
    if(event.venue.address_line1) structuredEvent.address_line1 = event.venue.address_line1;
    if(event.venue.address_line2) structuredEvent.address_line2 = event.venue.address_line2;
    if(event.venue.address_line3) structuredEvent.address_line3 = event.venue.address_line3;
    structuredEvent.city = event.venue.city;
    structuredEvent.state = event.venue.state;
    // console.log(event.venue);
    if(event.venue.lon) structuredEvent.longitude = event.venue.lon;
    if(event.venue.lat) structuredEvent.latitude = event.venue.lat;
  }

  timeLocationModel.insertModel(structuredEvent, function(err){
    if(err){
      console.log(err);
    } else {
      console.log('inserted!');
    }
  });
});
// mongoose.disconnect();
