import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MarkerComponent = props => (
  <Marker 
    id={ props.id }
    position={{ lat: props.lat, lng: props.lng }} 
    onClick={ () => props.onMarkerClick(props.id) }
  />
);

export default MarkerComponent;
