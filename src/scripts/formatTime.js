
const formatTime = (str) => {
  const arr = str.split(':')
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

  } )).join(':');
}

module.exports = formatTime;
