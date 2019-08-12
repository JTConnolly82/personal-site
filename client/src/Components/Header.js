import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {

  constructor(){
    super();

  

    this.state = {
       selected: false
    }
}

  handleClick = () => {
    this.selected = true;
};

  render() {

    let linkID = this.state.selected ? 'navlinkactive' : 'navlink';

    return (
      

        <span id='header'>
          <ul>
            <li id={linkID} onClick={this.handleClick.bind(this)}>
              <NavLink id='link' to="/">Home</ NavLink>
            </li>
            <li id={linkID} onClick={this.handleClick.bind(this)}>
              <NavLink id='link' to="/About">About</NavLink>
            </li>
            <li id={linkID} onClick={this.handleClick.bind(this)}>
              <NavLink id='link' to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </span>
      
    );
  }
};