import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input } from 'semantic-ui-react';

import { getForecast, getLocation, getTemp } from '../reducers2'

import TodaysForecast from './todays-forecast';
import FiveDayForecast from './5day-forecast';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: '',
			term: '',
			background: null
		};
		this.updateLocation = this.updateLocation.bind(this)
	}

	componentWillMount() {
		const url = window.location.href;
		url.indexOf('?' + 'location' + '=') === -1 ? this.getLocation() : null;
	}

	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				this.handleGeolocationSuccess,
				this.handleGeolocationError,
				{ enableHighAccuracy: true, timeout: 30000, maximumAge: 30000 },
			);
		}
	}

	updateLocation(evt) {
		evt.preventDefault();
		let self = this;
		const value = evt.target.location.value;
		const geocoder = new google.maps.Geocoder();
		geocoder.geocode({ 'address': value }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				let position = {
					coords: {
						latitude: results[0].geometry.location.lat(),
						longitude: results[0].geometry.location.lng()
					}
				}
				self.handleGeolocationSuccess(position)
			} else {
				alert("Something got wrong " + status);
			}
		});
		this.setState({
			background: null
		})
		const form = document.getElementById("search-form");
		form.reset();
	}

	// Callback to handle success
	handleGeolocationSuccess = (position) => {
		const { coords } = position;
		this.props.getForecast(coords);
		this.props.getLocation(coords);
		this.props.getTemp(coords);
	}

	// Callback to handle error
	handleGeolocationError = (error) => {
		if (error.code === 1) {
			this.setState({ error: 'Please enable permissions to access location and reload the page' });
		} else if (error.code === 2 && error.message.match(/^Network location provider at 'https:\/\/www.googleapis.com\/' : Returned error code 403.$/)) {
			this.setState({ error: 'Seems like the internal service for geolocation is down. Please try in a few minutes!' });
		} else {
			this.setState({ error: 'Looks like something went wrong! Please refresh your browser...' });
			this.getLocation();
		}
	}

	// Renders the todays weather component
	renderTodaysWeather() {
		if (this.props.forecast.currently && this.props.location) {
			const currentWeather = this.props.forecast.currently;
			const icons = this.props.icons;
			const { city } = this.props.location;
			return (
				<TodaysForecast weather={currentWeather} icons={icons} city={city} />
			);
		}
	}

	// Renders the 5 day forecast component
	render5DayForecast() {
		if (this.props.forecast.daily && this.props.location) {
			const days = this.props.forecast.daily.data.slice(0, 5);
			const icons = this.props.icons;
			const { city } = this.props.location;
			return (
				<div className="fiveday-wrapper">
					{days.map(weather => (
						<FiveDayForecast key={weather.time} weather={weather} icons={icons} city={city} />
					))}
				</div>)
		}
	}

	render() {
		if (this.state.error !== '') {
			return (
				<div className="error">
					<h3>{this.state.error}</h3>
				</div>
			);
		} else if (this.props.forecast.length === 0 || !this.props.location) {
			return (
				<div className="loading">
					Loading
        </div>
			);
		}
		// console.log(this.props.forecast)
		// if (!this.state.background) {
		// 	this.checkTemp();
		// }
		return (
			<div className={`forecast ${this.props.temp || "#eee"}`}>
				<div className="top">
					<div className="time">
						<h3>
							{new Date().toLocaleTimeString('en-US', {
								hour12: true,
								hour: "numeric",
								minute: "numeric"
							})}
						</h3>
					</div>
					<Form id="search-form" onSubmit={this.updateLocation}>
						<Form.Field>
							<Input id="city-search" name="location" icon placeholder='Search by city...'>
								<input />
								<Icon name='search' />
							</Input>
						</Form.Field>
					</Form>
				</div>
				<div className="todays-forecast">
					{this.renderTodaysWeather()}
					{this.render5DayForecast()}
				</div>
				<div className="bottom">
					<h5></h5>
				</div>
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		forecast: state.forecast,
		location: state.location,
		icons: {
			'clear-day': "wi wi-day-sunny",
			'clear-night': "wi wi-night-clear",
			'rain': "wi wi-rain",
			'snow': "wi wi-snow",
			'sleet': "wi wi-rain-mix",
			'wind': "wi wi-cloudy-gusts",
			'fog': "wi wi-fog",
			'cloudy': "wi wi-cloudy",
			'partly-cloudy-day': "wi wi-day-cloudy",
			'partly-cloudy-night': "wi wi-night-alt-cloudy",
			'hail': "wi wi-hail",
			'thunderstorm': "wi wi-thunderstorm",
			'tornado': "wi wi-tornado",
		},
		temp: state.temp
	};
}

export default connect(mapStateToProps, {
	getForecast,
	getLocation,
	getTemp
})(App);
