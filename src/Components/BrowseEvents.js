import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';

function BrowseEvents() {
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

            <div>
               <div className='event-row'>
                  <div className="event-image">
                     <img src='http://placekitten.com/200/150' alt='Event' />
                  </div>
                  <div className='event-info' >
                     <Link to='/events/1'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div><img src="https://img.icons8.com/ios-glyphs/24/000000/share.png"/></div>
               </div>

               <div className='event-row'>
                  <div className="event-image">
                     <img src='http://placekitten.com/200/150' alt='Event' />
                  </div>
                  <div className='event-info' >
                     <Link to='/events/1'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div><img src="https://img.icons8.com/ios-glyphs/24/000000/share.png"/></div>
               </div>

               <div className='event-row'>
                  <div className="event-image">
                     <img src='http://placekitten.com/200/150' alt='Event' />
                  </div>
                  <div className='event-info' >
                     <Link to='/events/1'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div><img src="https://img.icons8.com/ios-glyphs/24/000000/share.png"/></div>
               </div>
            </div>
         </div>
         <div className='browse-map'>
            [MAP ON HOVER]
            <img src="https://www.isu.edu/media/top-level/page-layouts/maps/campus-map.jpg" alt=""/>
         </div>  
      </section>
   )
}

export default BrowseEvents;