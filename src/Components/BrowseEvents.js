import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {updateEvents} from '../ducks/eventsReducer';

class BrowseEvents extends Component {
   componentDidMount() {
      const {userLocation, events, updateEvents} = this.props;
      if (events.length === 0) updateEvents(userLocation);
   }
   componentDidUpdate(prevProps) {
      const {userLocation} = this.props;
      if (prevProps.userLocation !== userLocation) updateEvents(userLocation);
   }
   render() {

      const{events} = this.props;

      const eventsMapped = events.length > 0 && events.map((event, i) => {
         return (
            <div className='event-row' key={i}>
               <div className="event-image">
                  <img src={event.logo.original.url} alt='Event' />
               </div>
               <div className='event-info' >
                  <Link to='/events/1'>
                     <h3>{event.name.text}</h3>
                  </Link>
                  <p>start {event.start.local} / end {event.end.local}</p>
                  <p>LOCATION</p>
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

               {eventsMapped}
               
            </div>
            <div className='browse-map'>
               [MAP ON HOVER]
               <img src="https://www.isu.edu/media/top-level/page-layouts/maps/campus-map.jpg" alt=""/>
            </div>  
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