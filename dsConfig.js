/**
* Global configuration file to store important urls and API_KEYS.
* Ideally, the API_KEY would not be provided and a user would have to obtain   * their own key.
* For ease of use, I am checking my personal API_KEY for Dark Sky.
*/
var config = {
  rootUrl: 'https://api.darksky.net/forecast',
  API_KEY: '32e50fc34cd127c8f19e14267bc0309b',
  port: 8080,
  geocodeUrl: 'http://maps.googleapis.com/maps/api/geocode/json?',
}

module.exports = config;
