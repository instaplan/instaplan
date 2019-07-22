import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import firebase from 'firebase'

class UsersEventList extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      filteredUserEvents: []
    };
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    axios.get("/api/events").then(response => {
      this.setState({
        events: response.data
      });
      this.props.getUserEvents(response.data);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filteredUserEvents !== this.props.filteredUserEvents) {
      this.setState({ filteredUserEvents: this.props.filteredUserEvents })
    }
  }

  deleteEvent(id) {
    axios.delete(`/api/events/${id}`).then(results => {
      // console.log(results.data)
      this.setState({ events: results.data });
    });
  }

  render() {

    const {filteredUserEvents} = this.state;

    const events = filteredUserEvents === 'no results' ? null : (filteredUserEvents.length > 0 ? filteredUserEvents : this.state.events).map((events, i) => {
      return (
        <div>
          <div className="event-row" key={i}>
            <div className="event-image">
              <img src={events.awsurl} alt="Event" />
            </div>
            <div className="event-info">
              <Link to="/events/1">
                <h3>{events.title}</h3>
              </Link>
              <p>Date {events.date}</p>
              <p>LOCATION {events.location}</p>
             
              
            </div>
            <div>
              <img src="https://img.icons8.com/ios-glyphs/24/000000/share.png" />
            </div>
          </div>
        </div>
      );
    });

    return <div>{events}</div>;
  }
}

export default UsersEventList;