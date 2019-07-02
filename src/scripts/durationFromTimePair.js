const moment = require('moment');
const formatTime = require('./formatTime')

module.exports = (timePair) => {
  const t0 = moment.utc( formatTime( timePair[0] ), 'HH:mm:ss' );
  const t1 = moment.utc( formatTime( timePair[1] ), 'HH:mm:ss' );
  const duration = moment.utc(t1.diff(t0))
  return duration.format('HH:mm:ss.SSS')
};
