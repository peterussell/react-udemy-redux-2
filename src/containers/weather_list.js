import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
