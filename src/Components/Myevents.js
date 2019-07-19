import React, { Component } from "react";
import {connect} from 'react-redux';
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import firebase from 'firebase'



class MyEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      
    
    };
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) this.getEvents();
  }
  getEvents() {
    axios.get(`/api/events/${this.props.userId}`).then(response => {
        this.setState({
          events: response.data
        })
      })
  }

  deleteEvent(id) {
    axios.delete(`/api/events/${id}`).then(results => {
      // console.log(results.data)
      this.setState({ events: results.data });
    }) 
    window.location.reload(true);
    
  }

  render() {
     console.log(this.props.userId)
      
    
    const events = this.state.events.map((events, i) => {
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
              <Button
                color="danger"
                size="sm"
                onClick={() => {
                  this.deleteEvent(events.id);
                }}
              >
                Delete
              </Button>
              
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

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.user.userId
    }
}

export default connect(mapStateToProps)(MyEvents);