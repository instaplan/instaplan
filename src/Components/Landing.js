import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
   {
     src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
     altText: 'Slide 1',
     caption: 'Slide 1',
     header: 'Slide 1 Header'
   },
   {
     src: 'https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
     altText: 'Slide 2',
     caption: 'Slide 2',
     header: 'Slide 2 Header'
   },
   {
     src: 'https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
     altText: 'Slide 3',
     caption: 'Slide 3',
     header: 'Slide 3 Header'
   },
   {
      src: 'https://topnotchtalent.com/wp-content/uploads/holiday-party-entertainment-top-notch-talent.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    },
    {
       src: 'https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/132783/slideshow-1545223229.jpg',
       altText: 'Slide 3',
       caption: 'Slide 3',
       header: 'Slide 3 Header'
     }
 ];
 

 

 function Landing() {
   
   return (
      
      <section>
         <UncontrolledCarousel items={items} />

         
         <h2 className='landing-header'>Featured Events</h2>
         <section className='landing'>
            <article>
               <figure>
                  <img src='https://cdn.dribbble.com/users/56953/screenshots/6103123/thrive_conference_2019_v2.jpg' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time className='time' dateTime='2019-01-01'>Tue, Jul 16, 9:00am</time>
               <p>[CITY], [STATE] - [DESC] This is the description of the event and will show a SUMMARY with the<Link to='/events/1'>...(more)</Link></p> 
            </article>

            <article>
               <figure>
                  <img src='https://cdn.dribbble.com/users/854143/screenshots/6510684/stack.jpg' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time dateTime='2019-01-01'>[TIME and DATE]</time>
               <p>[CITY], [STATE] - This is the description of the event and will show a SUMMARY with the<Link to='/events/2'>...(more)</Link></p> 
            </article>

            <article>
               <figure>
                  <img src='https://cdn.dribbble.com/users/15139/screenshots/6655919/splash_screen-_ipad_landscape_2x_4x.png' alt='Event' />
                  <figcaption>[EVENT NAME]</figcaption>
               </figure>
               <time dateTime='2019-01-01'>[TIME and DATE]</time>
               <p>[CITY], [STATE] - This is the description of the event and will show a SUMMARY with the<Link to='/events/3'>...(more)</Link></p> 
            </article>
            

            <p><Link to='/events'>Browse More</Link></p>
         </section>
      </section>
   )
}

export default Landing;