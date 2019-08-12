import React, {Component} from 'react';
import "./pages.css";
import './Home.css';
import {Image} from 'semantic-ui-react';


export default class Home extends Component {


  render() {
   
    return (
      <>
     
      <div className='page' >
        <div id='outerwrap'>
        
        <h1 id='first'> <strong>J</strong>ohn</h1>
        <h1 id='second'><strong>C</strong>onnolly</h1>

        <Image id='hmimg' src='https://i.imgur.com/T93EYNq.jpg' size='medium' circular />
          
          <div id='layer1'>
          </div>

          <div id='layer2'>
          </div>

          <div id='layer3'>
          </div>
          <div id='layer4'>
          </div>
          <div id='layer5'>
          </div>
        </div>
      </div>
      
      </>
    );
  }
};