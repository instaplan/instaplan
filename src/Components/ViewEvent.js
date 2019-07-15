import React from 'react';

// need to code around design

function ViewEvent() {
   return (
      <article>
         <div>
            <img src='http://placekitten.com/200/200' alt='Event' />
            <p>[DESC] This is the description of the event and will show all of the description provided by the db or API.</p>
            <div>📨[SHARE ICON]</div>
         </div>
         <div>
            <h1>[TITLE]</h1>
            <h4>by [USERNAME]</h4>
            <p>[DISTANCE] from you</p>
            <time datetime='2019-01-01'>[TIME and DATE]</time>
            <p>[ADDRESS]</p>
         </div>
         <div>
            [MAP]
         </div>
      </article>
   )
}

export default ViewEvent;