import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    /* Bind the function onInputChange to this Component, and then
       replace the existing (local) function with the bound version.

       If we don't do it, then when we call onChange={this.onInputChange}
       will complain that this.setState(..) isn't defined - which is true.
       Without binding the correct context, then 'this' inside onInputChange
       is bound do the (window? DOM?), but we actually want 'this' to be
       the component.
    */
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term); // Call action creator with the search term
    this.setState({ term: '' }); // Clear out the search term
  }

  render() {
        /* Recall: this is a Controlled Field, which is a field where the value
           is set by the *component* state (not Redux state), not directly by
           the user. */
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favourite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
