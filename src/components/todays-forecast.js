import React from 'react';

/** Stateless functional component responsible for rendering the max and min
* temp.
*/
const TodaysForecast = ({ weather, icons, city }) => (
  <div className="today-wrapper">
    <div className="today-temp">
      <h1 title="Current Temp"><i className={icons[weather.icon]}></i> {weather.temperature.toFixed(0)}&deg;</h1>
    </div>
    <div className="today-info">
      <h1>{city}</h1>
      <h4>{weather.summary}</h4>
      <h4><i className="wi wi-raindrops"></i> <span>{(weather.precipProbability * 100).toFixed(0)}%</span></h4>
    </div>
  </div>
);

export default TodaysForecast;
