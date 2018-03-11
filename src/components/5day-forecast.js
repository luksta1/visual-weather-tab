import React from 'react';

/** Stateless functional component responsible for rendering the max and min
* temp.
*/
const FiveDayForecast = ({ weather, icons, city }) => (
    <div className="fiveday-single">
        <div className="fiveday-temp">
            <h1 title="Temp"><i className={icons[weather.icon]}></i></h1>
            <h3>{weather.temperatureHigh.toFixed(0)}&deg;/{weather.temperatureLow.toFixed(0)}&deg;</h3>
        </div>
        <div className="fiveday-info">
            <h4><i className="wi wi-raindrops"></i> <span>{(weather.precipProbability * 100).toFixed(0)}%</span></h4>
        </div>
    </div>
);

export default FiveDayForecast;
