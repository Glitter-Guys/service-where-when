const fs = require('fs');

var jsonData = fs.readFileSync('./150UpcomingEvents.json');
var parsedData = JSON.parse(jsonData);
parsedData.events.forEach(function(event){
  console.log(event.link);
  console.log(event.id);
  console.log(event.local_date);
  console.log(event.local_time);
  if(!event.local_time){
    console.log('no local_time');
    console.log('but time is ', event.time);
  }
  console.log(event.duration);
  if(event.venue){
    console.log(event.venue.name);
    console.log(event.venue.address_1);
    console.log(event.venue.address_2);
    console.log(event.venue.address_3);
    console.log(event.venue.city);
    console.log(event.venue.state);
    console.log(event.venue.lat);
    console.log(event.venue.lon);
  }
  console.log('//////////////////////////////');
})
