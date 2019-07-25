import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import EventsMarker from '../maps/EventsMarker'
import { connect } from 'react-redux'

const EventsMap = withScriptjs(withGoogleMap((props) => {

    const markers = props.events.map(event => <EventsMarker
        key={event.id}
        event={event}
        location={{ lat: +event.venue.latitude, lng: +event.venue.longitude }}
    />)

    const userLat = parseFloat(props.userLocationLat);
    const userLng = parseFloat(props.userLocationLng);

    return (
        <GoogleMap
            defaultZoom={10}
            center={{ lat: userLat, lng: userLng }}
        >
            {markers}
        </GoogleMap>
    )

}
))

const mapStateToProps = reduxState => {
    return {
        userLocationLat: reduxState.user.userLocationCoords.lat,
        userLocationLng: reduxState.user.userLocationCoords.lng
    }
}

export default connect(mapStateToProps)(EventsMap)

