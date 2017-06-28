import React from 'react';
import 'whatwg-fetch';

export default class textMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      message:''
    };
  }
  changeNumber(event) {
    this.setState({recipient: event.target.value});
  }

  changeMessage(event) {
    this.setState({message: event.target.value});
  }

  sendSms() {
    fetch('/api/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient, "message": this.state.message})
    });
  }

  render() {
    return (
      <div>
        <p>Enter phone number to send SMS to: </p>
      <input onChange={this.changeNumber.bind(this)} value={this.state.recipient} placeholder="+12223334444"/>
        <p>Don't forget your country code, e.g., +1.</p>

      <p>Enter Message: </p>
    <input onChange={this.changeMessage.bind(this)} value={this.state.message} placeholder="Save Me"/>
        <button onClick={this.sendSms.bind(this)}>Send message</button>

      </div>
    );
  }
}
