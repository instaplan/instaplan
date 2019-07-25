import React from 'react';
import '../styles/main.css'
import YouTube from 'react-youtube'
import { Jumbotron } from 'reactstrap'

class About extends React.Component {
   render() {
      const opts = {
         height: '390',
         width: '640',
         playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
         }
      };

      return (
         <section className="aboutUs">
            <Jumbotron>
               <h1>Who we are</h1>
               <p>Here begins your enjoyment!

               Online entertainment guide rated by evaluations of the consumers. Find here the best events and leisure sites in Dallas, TX and nearby area.

               Keep up with the news, hints, tips and more on leisure establishments in the region, from information provided by merchants and consumer tips.</p>

               <p>Also, find the best events that are happening and to come in our hectic wonderful city.

               This online guide interaction contributes to transparency and continuous improvement of services in the area and vicinity. In addition, from various relevant information, the guide helps its users to decide your best form of recreation.</p>
            </Jumbotron>
            <YouTube
               videoId="pyZ-MxvDIgQ"
               opts={opts}
            />
         </section>
      )
   }
}

export default About;