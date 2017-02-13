var axios = require('axios'),
    exports = module.exports = {},
    API_KEY = 'c27b22cf415bd085021a599c0990f584',
    ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

exports.getTermbase = function(city) {
  return axios.get(ROOT_URL + '&q=' + city + ',us&units=metrics');
}
