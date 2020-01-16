module.exports = function perseStringAsArray(stringAsArray){
  return stringAsArray.split(',').map(tech => stringAsArray.trim());
}