import React, {Component} from 'react';
import "./pages.css";
import './Home.css';
import { Image } from 'semantic-ui-react';


export default class Home extends Component {


  render() {
   
    return (
      <>
     
      <div className='page' >
        <div id='outerwrap'>
        
        <h1 id='first'>J</h1><h1 id='firstrest'>ohn</h1>
        <h1 id='second'>Connolly</h1>

        <Image id='hmimg' src='https://i.imgur.com/5hlWwvN.png'  circular />
          
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