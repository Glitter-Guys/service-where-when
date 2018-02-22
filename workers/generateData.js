const fs = require('fs');
const mongoose = require('mongoose');

const timeLocationModel = require('./../db/models/timeLocation.js');

mongoose.connect('mongodb://localhost/timeLocations');

var jsonData = fs.readFileSync('./150UpcomingEvents.json');
var parsedData = JSON.parse(jsonData);
parsedData.events.forEach(function(event){

  // Need compute start and end time here
  // Need pick occasional weekly or monthly series value here

  let structuredEvent = {
    event_id: event.id,
    // start_time: event.local_time || event.time,
    venue_public: false
  }
  if(event.venue){
    structuredEvent.venue_public = true;
    structuredEvent.venue_name = event.name;
    if(event.address_line1) structuredEvent.address_line1 = event.address_line1;
    if(event.address_line2) structuredEvent.address_line2 = event.address_line2;
    if(event.address_line3) structuredEvent.address_line3 = event.address_line3;
    structuredEvent.city = event.city;
    structuredEvent.state = event.state;
    if(event.lat) structuredEvent.lat = event.lat;
    if(event.lon) structuredEvent.lat = event.lon;
  }

  timeLocationModel.insertModel(structuredEvent, function(err){
    if(err){
      console.log(err);
    } else {
      console.log('inserted!');
    }
  });
  // console.log(event.link);
  // console.log(event.id);
  // console.log(event.local_date);
  // console.log(event.local_time);
  // if(!event.local_time){
  //   console.log('no local_time');
  //   console.log('but time is ', event.time);
  // }
  // console.log(event.duration);
  // if(event.venue){
  //   console.log(event.venue.name);
  //   console.log(event.venue.address_1);
  //   console.log(event.venue.address_2);
  //   console.log(event.venue.address_3);
  //   console.log(event.venue.city);
  //   console.log(event.venue.state);
  //   console.log(event.venue.lat);
  //   console.log(event.venue.lon);
  // }
  // console.log('//////////////////////////////');
})
