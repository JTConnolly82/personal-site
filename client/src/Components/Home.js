import React, {Component} from 'react';
import "./pages.css";
import {Transition, Image} from 'semantic-ui-react';


export default class Home extends Component {

  state = { animation: 'swing left', duration: 1000, visible: true }

  render() {
    const { animation, duration, visible } = this.state;
    return (
      <div id='page' >
        <h2>My Name John</h2>
      </div>
    );
  }
};