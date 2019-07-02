const moment = require('moment');

const str0 = "1.1";
const str1 = "10.55";

const ta0 = ['00','00','00']
const ta1 = str0.split(':')
const ta2 = str1.split(':')
const lDif = ta0.length - ta1.length;

const formatTime = (arr) => {
  const padZeros = (arr) => {
    if (arr.length < 3){
      arr.unshift('00')
    }
    if (arr.length < 3){
      arr.unshift('00')
    }
    if (arr.length < 3){
      arr.unshift('00')
    }
    return arr
  }
  return padZeros(arr.map(str => {
    if ( str.length < 2 ){
      return '0' + str;
    }else{
      return str;
    }

  } )).join(':')
}

const t1 = moment.utc( formatTime( ta1 ), 'HH:mm:ss.SSS' );
const t2 = moment.utc( formatTime( ta2 ), 'HH:mm:ss.SSS' );
const duration = moment.utc(t2.diff(t1))
const diff = t2.diff(t1)



console.log(typeof t2);
const d  = t2.subtract(t1.format())


console.log(formatTime(ta1));
console.log(formatTime(ta2));

console.log( duration.format('HH:mm:ss.SSS'));
console.log(duration.valueOf());
//console.log( duration.format('S'));
console.log(diff);

//console.log(moment("52",'HH:mm:ss').format('HH:mm:ss'));
//console.log(moment("52", "hh:mm:ss").format());
