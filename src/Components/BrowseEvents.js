import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { updateEvents } from '../ducks/eventsReducer';
import UsersEventList from './UsersEventList';
import EventsMap from '../Components/maps/EventsMap'




import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import EventsMarker from '../Components/maps/EventsMarker'

class BrowseEvents extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userEvents: [],
         filterCategories: '',
         filterTitles: '',
         filteredUserEvents: [],
         filteredEbEvents: []
      }
      this.getUserEvents = this.getUserEvents.bind(this)
      this.handleInputChange = this.handleInputChange.bind(this)
      this.clearFilter = this.clearFilter.bind(this)
      this.filterEvents = this.filterEvents.bind(this)
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('didUPDATEfired')
      const { userLocation, updateEvents, events } = this.props;
      if (prevProps.userLocation !== userLocation && userLocation.city || events.length === 0) updateEvents(userLocation);
   }
   handleInputChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   }
   getUserEvents(eventArr) {
      this.setState({ userEvents: eventArr })
   }
   clearFilter(e) {
      e.preventDefault();
      this.setState({
         filterCategories: '',
         filterTitles: '',
         filteredUserEvents: [],
         filteredEbEvents: []
      })
   }
   filterEvents(e) {
      e.preventDefault();
      const { filterCategories, filterTitles } = this.state;
      if (!filterCategories && !filterTitles) return alert('At least one criteria required to search')

      // grab instaplan users events        
      let filteredUserEvents = [...this.state.userEvents];

      if (filterCategories) {
         filteredUserEvents = filteredUserEvents.filter(event => {
            return event.category.toLowerCase().includes(filterCategories.toLowerCase());
         })
      }
      if (filterTitles) {
         filteredUserEvents = filteredUserEvents.filter(event => {
            return event.title.toLowerCase().includes(filterTitles.toLowerCase());
         })
      }

      // grab events from eventbrite		

      let filteredEbEvents = [...this.props.events]
      if (filterCategories) {
         filteredEbEvents = filteredEbEvents.filter(event => {
            if (event.category !== null) {
               return event.category.name.toLowerCase().includes(filterCategories.toLowerCase())
            }
         })
      }
      if (filterTitles) {
         filteredEbEvents = filteredEbEvents.filter(event => {
            if (event.name.text) {
               return event.name.text.toLowerCase().includes(filterTitles.toLowerCase())
            }
         })
      }

      // handle if no results       
      if (filteredUserEvents.length === 0) filteredUserEvents = 'no results';
      if (filteredEbEvents.length === 0) filteredEbEvents = 'no results';
      // set state for filtered events      

      this.setState({
         filteredUserEvents,
         filteredEbEvents
      })
   }
   render() {
    
      const events = this.state.filteredEbEvents.length > 0
         ?  this.state.filteredEbEvents     
         :  this.props.events

      //Events
      const eventsMapped = this.state.filteredEbEvents === 'no results'
         ?  null
         :  events.length > 0 && events.map((event, i) => {
         return (
            <div className='event-row' key={i}>
               <div className="event-image">
                  <img src={event.logo !== null
                     ? event.logo.url
                     : 'http://placekitten.com/200'} alt='Event' />
               </div>

               <div className='event-info'>
                  <Link to={{
                     pathname: '/events/view',
                     state: {
                        title: event.name.text,
                        organizer: !event.organizer.description.text ? 'Unknown Organizer' : event.organizer.description.text,
                        description: event.description.text,
                        startTime: event.start.local,
                        endTime: event.end.local,
                        img: event.logo !== null
                           ? event.logo.url
                           : 'http://placekitten.com/200',
                        address: event.venue.address.localized_address_display,
                        type: 'eventbrite'
                     }
                  }}>

                     <h3>{event.name.text}</h3>
                  </Link>
                  <p>start {event.start.local} / end {event.end.local}</p>
                  <p>LOCATION: {event.venue.address.localized_address_display}</p>
               </div>
               <div><img src="https://img.icons8.com/ios-glyphs/24/000000/share.png" /></div>
               
            </div>
         );
      })
      return (
         <section className='browse-events'>
            <div>


               <form className='browse-form' onSubmit={this.filterEvents}>


                  <input
                     type='text'
                     placeholder='search within name'

                     name='filterTitles'        
                     value={this.state.filterTitles}        
                     onChange={this.handleInputChange}
                  />
                  <div className="filter">

                     <Input type="select"

                        name='filterCategories'		
                        value={this.state.filterCategories}		
                        onChange={this.handleInputChange}
                        >
                        <option value='auto'>Auto, Boat, and Air</option>
                        <option value='business'>Business</option>		
                        <option value='charity'>Charity and Causes</option>		
                        <option value='family'>Family and Education</option>		
                        <option value='fashion'>Fashion</option>		
                        <option value='media'>Film and Media</option>		
                        <option value='food'>Food and Drink</option>		
                        <option value='government'>Government</option>		
                        <option value='health'>Health</option>		
                        <option value='hobbies'>Hobbies</option>		
                        <option value='holiday'>Holiday</option>		
                        <option value='lifestyle'>Home and Lifestyle</option>
                        <option value='music'>Music</option>
                        <option value='other'>Other</option>
                        <option value='performing'>Performing and Visual Arts</option>		
                        <option value='school'>School Activities</option>		
                        <option value='tech'>Science and Tech</option>		
                        <option value='spirituality'>Spirituality</option>		
                        <option value='sports'>Sports and Fitness</option>		
                        <option value='outdoor'>Travel and Outdoor</option>
                     </Input>
                     <Button color="info" onClick={this.clearFilter}>clear</Button>{' '}

                     <Button color="info" type='submit'>SEARCH</Button>{' '}

                  </div>
               </form>

               <UsersEventList
                   getUserEvents={this.getUserEvents}
                   filteredUserEvents={this.state.filteredUserEvents}
               />
               {eventsMapped}

            </div>
            {/* <div className='browse-map'> */}
            <EventsMap
               events={this.props.events}
               googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCGPX51O0IgwslhB7sVp6Y9Wh26Ts2Z9KU&v=3.exp&libraries=geometry,drawing,places`}
               loadingElement={<div className='the-map' style={{ height: `100%` }} />}
               containerElement={<div className='the-map' style={{ height: `500px`, width: `30%`, position: 'fixed', top: '20%', right: '5%' }} />}
               mapElement={<div style={{ height: `100%` }} />}
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