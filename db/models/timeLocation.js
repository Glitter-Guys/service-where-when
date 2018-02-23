var mongoose = require('mongoose');

var timeLocationSchema = mongoose.Schema({
  event_id: {
    type: String,
    unique: true
  },
  date: Date,
  start_time: Date,
  end_time: Date,
  series: String,
  venue_public: Boolean,
  venue_name: String,
  address_1: String,
  address_2: String,
  address_3: String,
  city: String,
  state: String,
  longitude: Number,
  latitude: Number
});

var TimeLocationModel = mongoose.model('TimeLocation', timeLocationSchema);

function insertModel(data, callback){
  TimeLocationModel.create(data, callback);
};

exports.insertModel = insertModel;
