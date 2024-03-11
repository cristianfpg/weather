import { WeatherWrapper } from "../styles/WeatherWrapper"
import { memo } from "react";
import PropTypes from 'prop-types';

const WeatherByCity = memo(function WeatherByCity({data,width}) {
  if (!data || !data.forecast) return <div></div>
  const { location, current } = data
  const forecastDay = data.forecast.forecastday[1].day
  const map = `https://maps.google.com/maps?q=${location.lat},${location.lon}&hl=en&z=6&output=embed`
  const date = new Date(location.localtime)
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  console.log(data)
  return <WeatherWrapper $is_day={current.is_day} $width={width}>
    <div className="data">
      <div className="title">
        <img src={ current.condition.icon } alt={current.condition.text}></img>
        <h2>{ location.name } <span className="sub">{ location.country }</span></h2>
      </div>
      <div className="forecast">
        <h3 className="subtitle"><strong>{hours}:{minutes}</strong></h3>
        <div className="column">
          <p className="celsius">{current.temp_c}°C<span className="condition">{current.condition.text}</span></p>
        </div>
        <div className="column">
          <p className="value">Humidity: {current.humidity}%</p>
          <p className="value">Wind: {current.wind_kph} km/h</p>
          <p className="value">Precipitation: {current.precip_mm}mm</p>
        </div>
      </div>  
      <div className="forecast">
        <h3 className="subtitle">Forecast tomorrow</h3>
        <div className="column">
          <p className="celsius">{forecastDay.mintemp_c}°C<span className="super">min</span></p>
        </div>
        <div className="column">
          <p className="celsius">{forecastDay.maxtemp_c}°C<span className="super">max</span></p>
        </div>
      </div>  
    </div>
    <iframe className="map" src={map}></iframe>
  </WeatherWrapper>
})

WeatherByCity.propTypes = {
  data: PropTypes.object,
};

export default WeatherByCity;