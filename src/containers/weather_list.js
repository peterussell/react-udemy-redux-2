import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    /* We can use ES6 destructuring to pull off two properties with the same
       names as the variables we define, and load those values into the
       variables */
    const { lon, lat } = cityData.city.coord;
    // Equivalent to this:
    // const lat = cityData.city.coord.lat;
    // const lon = cityData.city.coord.lon;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="black" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

/* The { weather } argument is the same as defining a constant called 'weather'
   inside the function, eg. const weather = ..., as opposed to having
   mapStateToProps(state) { return { weather: state.weather}; } */
function mapStateToProps({ weather }) {
  /* Now, because we have an argument called 'weather' due to our above ES6 trick,
     (instead of an arg called 'state'), we can use a second piece of ES6 magic.
     At this point we would have 'return { weather: weather };' - but when we have
     a key and value with the same name, we can shorten it to just { weather },
     which gives the result... */
  return { weather }; // { weather: weather } === { weather } (ES6)
}

export default connect(mapStateToProps)(WeatherList);
