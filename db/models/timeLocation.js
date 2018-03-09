const mongoose = require('mongoose');

// mongoose.connect('mongodb://database/timeLocations');

const timeLocationSchema = mongoose.Schema({
  eventId: {
    type: String,
    unique: true,
  },
  startTime: Date,
  endTime: Date,
  series: String,
  venuePublic: Boolean,
  venueName: String,
  address1: String,
  address2: String,
  address3: String,
  city: String,
  state: String,
  longitude: Number,
  latitude: Number,
});

const TimeLocationModel = mongoose.model('TimeLocation', timeLocationSchema);

function insertModel(data, callback) {
  TimeLocationModel.create(data, callback);
}

function findModel(id, callback) {
  TimeLocationModel.findOne({ eventId: id }, callback);
}

// function countAll(callback){
//   TimeLocationModel.count({}, callback);
// };

exports.Model = TimeLocationModel;
exports.insertModel = insertModel;
exports.findModel = findModel;
// exports.countAll = countAll;
