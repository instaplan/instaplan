import React from 'react';
import {Link} from 'react-router-dom';

function BrowseEvents() {
   return (
      <section>
         <div>
            [MAP ON HOVER]
         </div>

         <div> 
            <form>
               <select>
                  <option value='' disabled selected>filter events</option>
                  <option value='food'>Food</option>
                  <option value='music'>Music</option>
                  <option value=''>More categories to populate from db</option>
               </select>
               <input
                  type='text'
                  placeholder='search within name'
               />
               <button>Search</button>
            </form>

            <div>
               <div>
                  <img src='http://placekitten.com/200/150' alt='Event' />
                  <div>
                     <Link to='/events/1'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div>📨[SHARE ICON]</div>
               </div>

               <div>
                  <img src='http://placekitten.com/200/150' alt='Event' />
                  <div>
                     <Link to='/events/2'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div>📨[SHARE ICON]</div>
               </div>

               <div>
                  <img src='http://placekitten.com/200/150' alt='Event' />
                  <div>
                     <Link to='/events/3'>
                        <h3>[TITLE]</h3>
                     </Link>
                     <p>[TIME] / [DATE]</p>
                     <p>LOCATION</p>
                  </div>
                  <div>📨[SHARE ICON]</div>
               </div>  
            </div>
         </div>
      </section>
   )
}

export default BrowseEvents;