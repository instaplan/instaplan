import React from 'react';
import calendar from './calendar.png';
import marker from './marker.png';

function ViewEvent(props) {

   const { title, organizer, description, startTime, date, endTime, img, address, type } = props.location.state;

   return (
      <article className='main-event'>
         <div className='view-event' >
            <div className="view-image">
               <img src={img} alt='Event' />
            </div>

         </div>
         <div className='view-info' >
            <h1>{title}</h1>
            <h4>by {organizer}</h4>
            <div className="dates">
               <div className="calendar">
                  <img src={calendar} alt="calendar" />
               </div>
               <div className="times">
                  <p>{startTime ? `Start: ${startTime}` : `Date: ${date}`}</p>
                  <p>{endTime ? `End: ${endTime}` : null}</p>
               </div>
            </div>
            <div className="dates">
               <div className="calendar">
                  <img src={marker} alt="mapmarker" />
               </div>
               <div className="address">
                  <p>{address}</p>
               </div>
            </div>
            <p>{description}</p>

         </div>
      </article>
   )
}

export default ViewEvent;