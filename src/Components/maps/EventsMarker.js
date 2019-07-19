
import React from "react";
import { Marker } from "react-google-maps";
import MapMarker from "./mapmarker.png";

export default class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={MapMarker}
        >
        </Marker>
    );
  }
}