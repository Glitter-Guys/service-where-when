const seedDb = require('./../workers/seedDB.js');
const moment = require('moment');

test('createRandomSeries should return null, "weekly", or "monthly"', () => {
  let isNullWeeklyOrMonthly = (result) => {
    let possibleResults = [null, "weekly", "monthly"];
    return possibleResults.includes(result);
  }
  expect(isNullWeeklyOrMonthly(seedDb.createRandomSeries())).toBe(true);
})

test('convertToStartEndTime should return ISO 8601 times', () => {
  let firstEvent = {
    "duration": 12600000,
    "local_date": "2018-03-14",
    "local_time": "18:00"
  };
  let arebothISOFormat = ([startTime, endTime]) => {
    let startTimeISO = moment(startTime, moment.ISO_8601, true).isValid();
    let endTimeISO = moment(endTime, moment.ISO_8601, true).isValid();
    return startTimeISO && endTimeISO;
  }
  let bothAreISOFormat = arebothISOFormat(seedDb.convertToStartEndTime(firstEvent));
  expect(bothAreISOFormat).toBe(true);
})

// test('structureEventData should return object with minimal params', () => {
//   let event = {
//     id: "123456",
//     venue: false
//   }
//   let expectedEventObj = {
//     event_id: expect.any(String),
//     start_time: expect.any(String),
//     end_time: expect.any(String),
//     // series: ,
//     venue_public: expect.any(Boolean)
//   }
//   expect(seedDb.structureEventData(
//     "weekly",
//     ISODate("2018-03-18T22:00:00Z"),
//     ISODate("2018-03-19T00:00:00Z"),
//     event).objectContaining(expectedEventObj);
//
//   ))
// })
