import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
   } from 'reactstrap';



import {connect} from 'react-redux';
import updateIsSignedIn from '../ducks/userReducer';


class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
          signedIn: false, // temporary variable for conditional styling until auth hooked up

          isOpen: false, //toggle for navbar

          modal: false

      };

      this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignOut = this.handleSignOut.bind(this);
      this.toggle = this.toggle.bind(this);
   }

   toggle(){
      this.setState({
         isOpen: !this.state.isOpen
      })
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
            <Navbar color="light" light expand="md">
               <NavbarBrand href="/">instaplan</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                     <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink tag={Link} to="/events">Browse Events</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink tag={Link} to='/events/create'>Create Event</NavLink>
                  </NavItem>
              
                 {/* conditionally render sign in / sign out */}
                  {!signedIn
                  ? <NavItem><NavLink tag={Link} to='' onClick={this.handleSignIn}>Sign In</NavLink></NavItem>
                  : (<>
                     <NavItem>
                        <NavLink tag={Link} to='/settings'>Settings</NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink tag={Link} to='' onClick={this.handleSignOut}>Sign Out</NavLink>
                     </NavItem>
                  </>)
               
               }
              
            </Nav>
          </Collapse>
        </Navbar>
         </header>
         // <header>
         //    <div>
         //       <h2>instaplan</h2>
         //    </div>
         //    <ul>
         //       <li><Link to='/'>Home</Link></li>
         //       <li></li>
         //       <li><Link to='/events/create'>Create Event</Link></li>
         //       {/* conditionally render sign in / sign out */}
         //       {!signedIn
         //          ? <li><Link to='' onClick={this.handleSignIn}>Sign In</Link></li>
         //          : (<>
         //             <li><Link to='/settings'>Settings</Link></li>
         //             <li><Link to='' onClick={this.handleSignOut}>Sign Out</Link></li>
         //          </>)
               
         //       }
               
         //    </ul>
         // </header>
      )
   }
}

export default withRouter(connect(null, 
   {
      updateIsSignedIn
   }
)(Header));