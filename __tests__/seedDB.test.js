const seedDb = require('./../workers/seedDB.js');
const moment = require('moment');
// const mongoose = require('mongoose');
// const timeLocationModel = require('./../db/models/timeLocation.js');

const isNullWeeklyOrMonthly = (result) => {
  const possibleResults = [null, 'weekly', 'monthly'];
  return possibleResults.includes(result);
};

describe('Test the seedDB functions', () => {

  test('createRandomSeries should return null, "weekly", or "monthly"', () => {
    expect(isNullWeeklyOrMonthly(seedDb.createRandomSeries())).toBe(true);
  });

  test('convertToStartEndTime should return ISO 8601 times', () => {
    const firstEvent = {
      duration: 12600000,
      local_date: '2018-03-14',
      local_time: '18:00',
    };
    const arebothISOFormat = ([startTime, endTime]) => {
      const startTimeISO = moment(startTime, moment.ISO_8601, true).isValid();
      const endTimeISO = moment(endTime, moment.ISO_8601, true).isValid();
      return startTimeISO && endTimeISO;
    };
    const bothAreISOFormat = arebothISOFormat(seedDb.convertToStartEndTime(firstEvent));
    expect(bothAreISOFormat).toBe(true);
  });

  test('structureEventData should return object with minimal params', () => {
    const event = {
      id: '123456',
      venue: false,
    };
    const expectedEventObj = {
      eventId: '123456',
      startTime: '2018-03-18T22:00:00Z',
      endTime: '2018-03-19T00:00:00Z',
      series: 'weekly',
      venuePublic: false,
    };
    expect(seedDb.structureEventData(
      'weekly',
      '2018-03-18T22:00:00Z',
      '2018-03-19T00:00:00Z',
      event,
    )).toEqual(expect.objectContaining(expectedEventObj));
  });

  /* I've learned that this test isn't well suited for Jest.  I should probably use
  an end-to-end test later on instead.  So I'm going to comment this out for now and
  revisit it later with an end-to-end test. */

  // test('insertEachEvent should insert all events', async () => {
  //   mongoose.connect('mongodb://localhost/testDB');
  //   await seedDb.insertEachEvent();
  //   await timeLocationModel.countAll((err, count) => {
  //     if(err) {
  //       console.log(err);
  //     } else {
  //       expect(count).toEqual(107);
  //     }
  //   })
  // })
});
