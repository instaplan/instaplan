import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
          signedIn: false // temporary variable for conditional styling until auth hooked up
      };
      this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignOut = this.handleSignOut.bind(this);
   }
   handleSignIn() {
      this.setState({ signedIn: true})
   }
   handleSignOut() {
      this.setState({ signedIn: false })
   }
   render() {

      const {signedIn} = this.state;

      return (
         <div>
            <div>
               <h2>[🤔LOGO]</h2>
            </div>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/events'>Browse Events</Link></li>
               <li><Link to='/events/create'>Create Event</Link></li>
               {!signedIn
                  ? <li><Link onClick={this.handleSignIn}>Sign In</Link></li> // sign in/out will not work until we hook up with auth
                  : (<>
                     <li><Link to='/settings'>Settings</Link></li>
                     <li><Link onClick={this.handleSignOut}>Sign Out</Link></li>
                  </>)
               
               }
               
            </ul>
         </div>
      )
   }
}

export default Header;