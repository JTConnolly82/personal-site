import React, { Component } from 'react';
import "./pages.css";
import "./About.css";
import {Button, Icon} from 'semantic-ui-react';




export default class About extends Component {

  render() {
    return (
      <div className="page">
      {/*    */}
        <div class='row'>
          <div id="column1">
           <ul>
             <li id='titletop'>
               Recently
             </li>
             <li id='description'>
               Previously at Tesla Energy (formerly SolarCity) where I specialized in project management
               and utility coordination for solar and energy storage projects.  I've since completed DevPoint Labs' 
               full stack web development program.
             </li>
             <li id='title'>
               Where
             </li>
             <li id='description'>
               I currently live in Salt Lake City, Utah.  Before that I lived in Boulder, Colorado and Silverthorne, Co.
                  I'm originally from Pittsburgh.
             </li>
             <li id='title'>
                What I'm Up To
             </li>
             <li id='description'>
                You can see my projects on Github, where I'm JTConnolly82.  
                In my free time I really enjoy skiing, mountainbiking, camping, and most things outdoors.
             </li>
           </ul>
           
           <Button href="https://drive.google.com/open?id=1xA8FByENT3x6yufJ6DZo4zvTMqJrfyml" 
target="_blank" id='iconbutton' content='Resume' icon='copy' labelPosition='right' />
        </div>
        <div id='column2'>
          <img id="aboutimage" src="https://i.imgur.com/myLuOXN.jpg" alt="me"/>
        </div>
      </div>
        <span id='skilliconhold'>
          {/* <ul>
            <li>
              <Icon id='skillicon' name='mail'/>
            </li>
            <li>
              <Icon id='skillicon' name='mail'/>
            </li>
            <li>
              <Icon id='skillicon' name='mail'/>
            </li>
            <li>
              <Icon id='skillicon' name='mail'/>
            </li>
            <li>
              <Icon id='skillicon' name='mail'/>
            </li>
          </ul> */}
        </span>
    </div>
    );
  }
};