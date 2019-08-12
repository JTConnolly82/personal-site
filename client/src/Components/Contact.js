import React, {Component} from 'react';
import "./pages.css";
import axios from 'axios';
import { Button } from 'semantic-ui-react';

export default class Contact extends Component {


  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    axios({
        method: "POST", 
        url:"http://localhost:3002/send", 
        data: {
            name: name,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            console.log('message sent') 
            this.resetForm()
        }else if(name=== '' || email === '' || message === '' || response.data.msg === 'fail'){
            console.log("Message failed to send.")
        }
    })
}

resetForm(){
  document.getElementById('contact-form').reset();
}




  render() {
    return (
      <div className='page'>
          <h1 id='pagetitle'>Contact John</h1>
          <h3 id='othertitle'>You can reach out to me at JTConnolly82@gmail.com or by using the form below.</h3>
            <form method='POST' action='/submit-form' id='theform'>
            <label for='name'>Name</label>
            <input type='text' name='name' id='textinput' placeholder="your name"/>
          
              <label for='email'>Email</label>
              <input type='email' name='email' id='textinput' placeholder="email@example.com"/>
          
              <label for='message'>Message</label>
              <textarea type='text' name='message' id='message' placeholder="message for John..."/>
          
              <Button type='submit' value='submit' id='sndbtn' content='Send' />

              </form>
        </div>
    );
  }
};