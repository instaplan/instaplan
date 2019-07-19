import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {updateEvents} from '../ducks/eventsReducer';
import UsersEventList from './UsersEventList';
// import EventsMarker from '../Components/maps/EventsMarker'
import EventsMap from '../Components/maps/EventsMap'



import { withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import EventsMarker from '../Components/maps/EventsMarker'

class BrowseEvents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userEvents: []
      }
      this.getUserEvents = this.getUserEvents.bind(this)
   }
   componentDidMount() {
      console.log('didMOUNTfired')
      const {userLocation, events, updateEvents} = this.props;
      if (events.length === 0 && userLocation.city) updateEvents(userLocation);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('didUPDATEfired')
      const {userLocation, updateEvents, events} = this.props;
      if (prevProps.userLocation !== userLocation && userLocation.city || events.length === 0) updateEvents(userLocation);
   }
   getUserEvents(eventArr) {
      this.setState({userEvents: eventArr})
   }
   render() {
      console.log('hello')
      console.log(this.state.userEvents)

      const{events} = this.props;

      //Events
      const eventsMapped = events.length > 0 && events.map((event, i) => {
         return (
            <div className='event-row' key={i}>
               <div className="event-image">
                  <img src={event.logo !== null 
                              ? event.logo.url
                              : 'http://placekitten.com/200'} alt='Event' />
               </div>
               <div className='event-info' >
                  <Link to='/events/1'>
                     <h3>{event.name.text}</h3>
                  </Link>
                  <p>start {event.start.local} / end {event.end.local}</p>
                  <p>LOCATION: {event.venue.address.localized_address_display}</p>
               </div>
               <div><img src="https://img.icons8.com/ios-glyphs/24/000000/share.png"/></div>
            </div>
         );
      })


      return (
         <section className='browse-events'>
            <div> 
               <form className='browse-form' >
               <input
                     type='text'
                     placeholder='search within name'
                  />
                  <div className="filter">
                     <select>
                        <option value='' disabled selected>filter events</option>
                        <option value='food'>Food</option>
                        <option value='music'>Music</option>
                        <option value=''>More categories to populate from db</option>
                     </select>
                     <Button color="info">Search</Button>{' '}
                  </div>
               </form>

               <UsersEventList getUserEvents={this.getUserEvents} />
               {eventsMapped}
               
            </div>
            {/* <div className='browse-map'> */}
               <EventsMap 
               
                  events={this.props.events}
                  googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCGPX51O0IgwslhB7sVp6Y9Wh26Ts2Z9KU&v=3.exp&libraries=geometry,drawing,places`}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{height: `600px`, width: `600px`}} />}
                  mapElement={<div style={{height: `100%`}} />}
               />
               {/* <img src="https://www.isu.edu/media/top-level/page-layouts/maps/campus-map.jpg" alt=""/> */}
            {/* </div>   */}
         </section>
      )
   }
}

const mapStateToProps = reduxState => {
   return {
      userLocation: reduxState.user.userLocation,
      events: reduxState.events.events
   }
};

export default connect(mapStateToProps,
   {
      updateEvents
   }
)(BrowseEvents);