import React from 'react';
import {Link} from 'react-router-dom';

function Landing() {
   return (
      <section>
         <div>
            <h1>[SLOGAN]</h1>
         </div>
         <section>
            <h2>FEATURED</h2>
            <article>
               <figure>
                  <img src='http://placekitten.com/200/200' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time datetime='2019-01-01'>[TIME and DATE]</time>
               <p>[CITY], [STATE] - [DESC] This is the description of the event and will show a SUMMARY with the<Link to='/events/1'>...(more)</Link></p> 
            </article>

            <article>
               <figure>
                  <img src='http://placekitten.com/200/200' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time datetime='2019-01-01'>[TIME and DATE]</time>
               <p>[CITY], [STATE] - This is the description of the event and will show a SUMMARY with the<Link to='/events/2'>...(more)</Link></p> 
            </article>

            <article>
               <figure>
                  <img src='http://placekitten.com/200/200' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time datetime='2019-01-01'>[TIME and DATE]</time>
               <p>[CITY], [STATE] - This is the description of the event and will show a SUMMARY with the<Link to='/events/3'>...(more)</Link></p> 
            </article>

            <p><Link to='/events'>Browse More</Link></p>
         </section>
      </section>
   )
}

export default Landing;