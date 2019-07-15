import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

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
      this.setState({ signedIn: true});
      this.props.history.push('/auth');
   }
   handleSignOut() {
      this.setState({ signedIn: false });
      this.props.history.push('/');
   }
   render() {

      const {signedIn} = this.state;

      return (
         <header>
            <div>
               <h2>instaplan</h2>
            </div>
            <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/events'>Browse Events</Link></li>
               <li><Link to='/events/create'>Create Event</Link></li>
               {/* conditionally render sign in / sign out */}
               {!signedIn
                  ? <li><Link to='' onClick={this.handleSignIn}>Sign In</Link></li>
                  : (<>
                     <li><Link to='/settings'>Settings</Link></li>
                     <li><Link to='' onClick={this.handleSignOut}>Sign Out</Link></li>
                  </>)
               
               }
               
            </ul>
         </header>
      )
   }
}

export default withRouter(Header);