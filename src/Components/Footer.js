import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer>
         <ul className='footer'>
            <p>&copy;2019 The Instaplan Group</p>
            <div>
               <li><Link to='/about'>About</Link></li>
            </div>
            <div>
               <li><Link to='/contact'>Contact</Link></li>
            </div>
            <div>
               <li>Follow Us</li>
               <ul>
                  <li><a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
                  <li><a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
               </ul>
            </div>
         </ul>
      </footer>
   )
}

export default Footer;