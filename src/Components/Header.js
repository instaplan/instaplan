import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from 'firebase'
import { connect } from 'react-redux';
import { updateIsSignedIn, updateUserIPLocation } from '../ducks/userReducer';
import { updateEvents } from '../ducks/eventsReducer';

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
         isOpen: false, //toggle for navbar
         showDepWarning: true
      };
      this.handleSignOut = this.handleSignOut.bind(this);
      this.toggle = this.toggle.bind(this);
      this.hideDepWarning = this.hideDepWarning.bind(this);
   }
   componentDidMount() {
      const { updateUserIPLocation } = this.props;

      updateUserIPLocation()
   }
   componentDidUpdate(prevProps) {
      const { updateEvents, userLocation } = this.props;

      if (prevProps.userLocation !== userLocation && userLocation.city) updateEvents(userLocation)
   }
   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      })
   }
   handleSignOut() {
      this.setState({ signedIn: false });
      this.props.history.push('/');
      firebase.auth().signOut()
   }
   hideDepWarning() {
      this.setState({ showDepWarning: false })
   }
   render() {
      console.log(this.props.userLocation)

      return (
         <header>
            {
               this.state.showDepWarning
                  ? (
                     <section className='deprecation-warning'>
                        <div>
                           <p><span>NOTICE:</span> This group project heavily depended on the EventBrite API's public events search feature. EB discontinued access to this API on Dec 12, 2019. This project was published in July of 2019. As a result, most site features do not work properly, but the spirit of the project still exists in the code!</p>
                           <p>For more info on EventBrite's decision, see <a href='https://www.eventbrite.com/platform/api#/reference/event-search' target='_blank' rel='noreferrer'>the official notice</a>.</p>
                        </div>
                        <div className='clear-deprecation-warning'>
                           <p>[<span onClick={this.hideDepWarning}>X</span>]</p>
                        </div>

                     </section>
                  ) : null
            }

            <Navbar color="white" light expand="md">
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
                     <NavItem><NavLink tag={Link} to='/events/create' onClick={this.handleSignIn}>My Events</NavLink></NavItem>
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
      updateUserIPLocation,
      updateEvents
   }
)(Header));