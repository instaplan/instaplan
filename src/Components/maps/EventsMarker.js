
import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import MapMarker from "./mapmarker.png";

export default class DoctorMarker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleToggleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleToggleClose = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return (
      <Marker
        position={this.props.location}
        icon={MapMarker}
        onClick={() => this.handleToggleOpen()}
      >
        {
          this.state.isOpen ?
            <InfoWindow onCloseClick={() => this.handleToggleClose()}>
              <div className="info-window">
                <div className="window-image">

                  <img src={this.props.event.logo !== null
                    ? this.props.event.logo.url
                    : 'https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'
                  } alt="" />
                </div>
                <h1>{this.props.event.name.text}</h1>
                <p>{this.props.event.venue.address.address_1}</p>
              </div>
            </InfoWindow> : null
        }
      </Marker>
    );
  }
}