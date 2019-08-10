import React, {Component} from 'react';
import {Link, } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

  render() {
    return (
      
        <span id='header'>
          <ul>
            <li id='navlink'>
              <Link id='link' to="/">Home</Link>
            </li>
            <li id='navlink'>
              <Link id='link' to="/About">About</Link>
            </li>
            <li id='navlink'>
              <Link id='link' to="/Contact">Contact</Link>
            </li>
          </ul>
        </span>
      
    );
  }
};