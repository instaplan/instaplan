import React from 'react';

// need to code around design
// fix refresh issue
// add in code for user added events

function ViewEvent(props) {

   const {title, organizer, description, startTime, date, endTime, img, address, type} = props.location.state;

   return (
      <article>
         <div>
            <img src={img} alt='Event' />
            <p>{description}</p>
            {type === 'eventbrite' ? <div>📨[SHARE ICON]</div> : null}
         </div>
         <div>
            <h1>{title}</h1>
            <h4>by {organizer}</h4>
            <p>{startTime ? `Start: ${startTime}` : `Date: ${date}`}</p>
            <p>{endTime ? `End: ${endTime}` : null}</p>
            <p>{address}</p>
         </div>
      </article>
   )
}

export default ViewEvent;