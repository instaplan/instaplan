import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import firebase from 'firebase'

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
          // signedIn: false, // temporary variable for conditional styling until auth hooked up


          isOpen: false, //toggle for navbar


          modal: false

      };

      // this.handleSignIn = this.handleSignIn.bind(this);
      this.handleSignOut = this.handleSignOut.bind(this);
      this.toggle = this.toggle.bind(this);
   }

   toggle(){
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
   // handleSignIn() {
   //    this.setState({ signedIn: true});
   //    this.props.history.push('/');
      
   // }
   handleSignOut() {
      this.setState({ signedIn: false});
      this.props.history.push('/');
      firebase.auth().signOut()
   }
   render() {

      return (
         <header>
            <Navbar color="light" light expand="md">
               <NavbarBrand href="/">Instaplan</NavbarBrand>
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
                     {/* <NavLink tag={Link} to='/events/create'>Create Event</NavLink> */}
                  </NavItem>
              
                 {/* conditionally render sign in / sign out */}
                  {!this.props.isSignedIn
                  ? <NavItem><NavLink tag={Link} to='/events/create' onClick = {this.handleSignIn}>Create Event</NavLink></NavItem>
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
      )
   }
}

const mapStateToProps = reduxState => {
   return {
     isSignedIn: reduxState.user.isSignedIn
   }
 }

export default withRouter(connect(mapStateToProps, 
   {
      updateIsSignedIn
   }
)(Header));