import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import mapStyles from "./mapStyles.json";
import MarkerComponent from "./Marker.js";

class MyMap extends Component {

	onMarkerClick = id => {
		this.props.showMarkerInfo(id);
	};

	render(props) {

		var experienceMarkers = this.props.markers.map((experience) =>
			<MarkerComponent 
				id={ experience.id }
				lat={experience.location[0]}
				lng={experience.location[1]} 
				onMarkerClick={ this.onMarkerClick.bind(this) } />
		);

		return (
			<GoogleMap
				defaultZoom={this.props.zoom}
				defaultCenter={this.props.center}
				defaultOptions={{styles: mapStyles}}>
				{experienceMarkers}
			</GoogleMap>
		);
	};
};

export default withGoogleMap(MyMap);