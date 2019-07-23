import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
import {connect} from 'react-redux';

function Landing(props) {

   const {events} = props;

   // 'carousel' item count (alter slice)
   const carouselItems =  events.length > 0 && events.slice(0, 3).map(event => {
      return (
         {
            src: event.logo !== null ? event.logo.url : 'http://placekitten.com/200',
            altText: 'Featured',
            caption: `By ${!event.organizer.description.text ? 'Unknown Organizer' : event.organizer.description.text}`,
            header: event.name.text
         }
      );
   });

   // 'featured items' item count (alter slice)
   const featuredEvents = events.length > 0 && events.slice(0, 4).map(event => {
      return (
         <article>
            <figure>
               <img src={event.logo !== null ? event.logo.url : 'http://placekitten.com/200'} alt='Featured Event' />
               <figcaption>{`${event.name.text.substring(0, 30)}...`}</figcaption>
            </figure>
            <p>Start: {event.start.local} / End: {event.end.local}</p>
            <p>{event.venue.address.localized_address_display}</p>
            <p>{event.description.text.substring(0, 100)}<Link to={{
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
               }}}>...more</Link>
            </p>
         </article>
      );
   });
   
   return (
      
      <section>
         {carouselItems.length > 0 ? <UncontrolledCarousel items={carouselItems} /> : <UncontrolledCarousel items={[{src: 'https://i.ibb.co/Dkh7xss/ezgif-com-crop.gif'}]}/>}

         
         <h2 className='landing-header'>Featured Events</h2>
         <section className='landing'>

            {featuredEvents}
         
            <p><Link to='/events'>Browse More</Link></p>

         </section>
      </section>
   )
}

const mapStateToProps = reduxState => {
   return {
      events: reduxState.events.events
   }
}

export default connect(mapStateToProps)(Landing);