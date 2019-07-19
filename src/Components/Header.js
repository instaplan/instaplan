import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from 'firebase'
import {connect} from 'react-redux';
import {updateIsSignedIn, updateUserIPLocation} from '../ducks/userReducer';

import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
   } from 'reactstrap';

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
          isOpen: false //toggle for navbar
      };
      this.handleSignOut = this.handleSignOut.bind(this);
      this.toggle = this.toggle.bind(this);
   }
   componentDidMount() {
      const {userLocation, updateUserIPLocation} = this.props;

      // TO CODE: check if user signed in -- if not, grab geolocation for default events search and view
      if (!userLocation.city) updateUserIPLocation()
         
   }
   toggle(){
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
   handleSignOut() {
      this.setState({ signedIn: false});
      this.props.history.push('/');
      firebase.auth().signOut()
   }
   render() {

      console.log(this.props.userLocation)

      return (
         <header>
            <Navbar color="light" light expand="md">
               <NavbarBrand href="/">Instaplan | {this.props.userLocation.city}, {this.props.userLocation.state}</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                  <NavItem>
                     <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                     <NavLink tag={Link} to="/events">Browse Events</NavLink>
                  </NavItem>
                  {/* <NavItem>
                     <NavLink tag={Link} to='/myevents'>My Events</NavLink>
                  </NavItem> */}
                  <NavItem><NavLink tag={Link} to='/events/create' onClick = {this.handleSignIn}>Create Event</NavLink></NavItem>
                 {/* conditionally render sign in / sign out */}
                  {!this.props.isSignedIn
                  ? null
                  : (

                     <NavItem>
                        <NavLink tag={Link} to='' onClick={this.handleSignOut}>Sign Out</NavLink>
                     </NavItem>
                  )
               
               }
              
            </Nav>
          </Collapse>
        </Navbar>
      </header>
      )
   }
}

const mapStateToProps = reduxState => {
   return {
     isSignedIn: reduxState.user.isSignedIn,
     userLocation: reduxState.user.userLocation
   }
 }

export default withRouter(connect(mapStateToProps, 
   {
      updateIsSignedIn,
      updateUserIPLocation
   }
)(Header));