import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
   return (
      <footer>
         <p>&copy;2019 The Instaplan Group</p>
         <ul>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li>Follow Us</li>
            <ul>
               <li><a href='https://www.facebook.com' target="_blank">Facebook</a></li>
               <li><a href='https://twitter.com' target="_blank">Twitter</a></li>
            </ul>
         </ul>
      </footer>
   )
}

export default Footer;