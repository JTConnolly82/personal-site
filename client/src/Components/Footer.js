import React, {Component} from 'react';
import { SocialIcon } from 'react-social-icons';
import './Footer.css';


export default class Footer extends Component {

  render() {
    return (
      <span id='footer'>
        <ul id='theicons'>
        <SocialIcon target="_blank" bgColor="#black" id="socialicon" url="https://www.linkedin.com/in/jtc/" style={{ height: 27, width: 27 }}/>
        <SocialIcon target="_blank" bgColor="#black" id="socialicon" url="https://twitter.com/johntconnolly" style={{ height: 27, width: 27 }}/>
        <SocialIcon target="_blank" bgColor="#black" id="socialicon" url="https://github.com/JTConnolly82" style={{ height: 27, width: 27 }}/>
        </ul>
      </span>
    );
  }
};