import React, { Component } from 'react';
import "./pages.css";
import "./About.css";
import {Button, Image} from 'semantic-ui-react';




export default class About extends Component {

  render() {
    return (
      <div id="page">
        <div class='row'>
          <div id="column1">
           <ul>
             <li id='titletop'>
               Recently
             </li>
             <li>
               Previously at Tesla Energy (formerly SolarCity) where I specialized in project management
               and utility coordination for solar and energy storage projects.  I've since completed DevPoint Labs' 
               full stack web development program.
             </li>
             <li id='title'>
               Where
             </li>
             <li>
               I currently live in Salt Lake City, Utah.  Before that I lived in Boulder, Colorado and Silverthorne, Co.
                  I'm originally from Pittsburgh.
             </li>
             <li id='title'>
                What I'm Up To
             </li>
             <li>
                Developing my programming skills.  
                In my free time I really enjoy skiing, mountainbiking, camping, and most things outdoors.
             </li>
           </ul>
           <Button id='iconbutton' content='Resume' icon='copy' labelPosition='right' />
        </div>
        <div id='column2'>
          <img id="aboutimage" src="https://i.imgur.com/5TN30vH.png" alt="me"/>
        </div>
        </div>
      </div>
    );
  }
};