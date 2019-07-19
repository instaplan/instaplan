import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import EventsMarker from '../maps/EventsMarker'

const EventsMap = withScriptjs(withGoogleMap((props) => {
    
    
    const markers = props.events.map( event => <EventsMarker 
        key={event.uid}
        event={event}
        location={{lat: event.venue.latitude, lng: event.venue.longitude}}
        />)


        return (
            <GoogleMap
                defaultZoom={14}
                center={{lat: 32.7767, lng: -96.7970}}
                >
                    {markers}
                </GoogleMap>
        )    
    }
))

export default EventsMap

