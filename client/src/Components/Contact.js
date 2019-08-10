import React, {Component} from 'react';
import "./pages.css";
import axios from 'axios';

export default class Contact extends Component {


  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
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
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            alert("Message failed to send.")
        }
    })
}

resetForm(){
  document.getElementById('contact-form').reset();
}




  render() {
    return (
      <div id='page'>
       <h3>You can reach out to me at JTConnolly82@gmail.com or by using the form below.</h3>
        <form method='POST' action='/submit-form' id='theform'>
          <label for='name'>Name</label>
          <input type='text' name='name' id='textinput' placeholder="Your name"/>
        
          <label for='email'>Email</label>
          <input type='email' name='email' id='textinput' placeholder="email@example.com"/>
        
          <label for='message'></label>
          <textarea type='text' name='message' id='message' placeholder="Message..."/>
        
          <input id='sndbtn' type='submit' value='submit' />
        </form>
      </div>
    );
  }
};