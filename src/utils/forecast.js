const request = require("request");

const forecast = (latitude, longitude, cllback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=01f00816d6ad4c5e21fc4dc76ae3788f&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      cllback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      cllback("Unable to find location", undefined);
    } else {
      cllback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degress out. It feels like " +
          body.current.feelslike +
          " degrees out."
      );
    }
  });
};

module.exports = forecast;
