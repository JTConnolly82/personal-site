import React, { Component } from 'react';
import "./pages.css";
import "./About.css";
import { Button } from 'semantic-ui-react';




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
               Previously at Tesla Energy where I specialized in project management
               and utility coordination for solar and energy storage projects.  I've since completed DevPoint Labs' 
               full stack web development program April 2019.
             </li>
             <li id='title'>
               Where
             </li>
             <li id='description'>
               I live in Salt Lake City, Utah.  Before I was in Boulder and Silverthorne, Colorado.
                  I'm originally from Pittsburgh.
             </li>
             <li id='title'>
                What I'm Up To
             </li>
             <li id='description'>
                Primarily developing my programming skills. Some of my favorite tools/frameworks are React, Node.js and Ruby on Rails.  On the database side I've mostly worked with PostgreSQL and Mongo DB.  
                On the frontend I've enjoyed working on UI design, using css and frameworks like Semantic UI.  You can see my projects on Github, where I'm JTConnolly82.  
                Outside of work I love to spend time outdoors skiing, mountain biking and camping.
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